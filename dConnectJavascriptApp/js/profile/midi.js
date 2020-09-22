/**
 midi.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function showMidi(serviceId) {
  initAll();
  setTitle('MIDI Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';

  // MIDI デバイス情報
  str += '<b>MIDI デバイス情報</b><br>';
  str += '<div id="midiInfoStatus"></div>'
  str += '<ul>';
  str += '<li>製品名: <span id="productName">-</span></li>';
  str += '<li>メーカー: <span id="manufacturer">-</span></li>';
  str += '<li>MIDI プロトコルバージョン: <span id="protocol">-</span></li>';
  str += '<li>通信方向: <span id="direction">-</span></li>';
  str += '<li>入力ポート数: <span id="inputCount">-</span></li>';
  str += '<li>出力ポート数: <span id="outputCount">-</span></li>';
  str += '</ul>';
  str += '<br>';
  str += '<hr>';

  // MIDI メッセージ送信
  str += '<b>MIDI メッセージ送信</b><br>';
  str += '<input id="midiMessegeToSend" type="text">';
  str += '<div data-role="controlgroup" data-type="horizontal">';
  str += '<button id="btnSendingMessageClear">クリア</button>';
  str += '<button id="btnSendMessage">送信</button>';
  str += '</div>';
  str += '<br>';
  str += '<hr>';

  // MIDI メッセージ受信イベント
  str += '<b>MIDI メッセージ受信イベント</b><br>';
  str += '<input id="midiMessegeToReceive" type="text">';
  str += '<div data-role="controlgroup" data-type="horizontal">';
  str += '<button id="btnReceivedMessageClear">クリア</button>';
  str += '<button id="btnGetOnMessageEvent">GET</button>';
  str += '<button id="btnRegisterOnMessageEvent">登録</button>';
  str += '<button id="btnUnregisterOnMessageEvent">解除</button>';
  str += '</div>';
  str += '<br>';
  str += '<hr>';

  // SMF ファイル再生
  str += '<b>SMF ファイル再生</b><br>';
  str += '<div data-role="controlgroup" data-type="horizontal">';
  str += '<input type="file" id="btnSelectFile" value="ファイル選択">';
  str += '<button id="btnPlayFile">再生</button>';
  str += '</div>';
  str += '<br>';

  reloadContent(str);

  $('#btnSendingMessageClear').on('click', function() {
    $('#midiMessegeToSend').val('');
  });
  $('#btnSendMessage').on('click', function() {
    sendMidiMessage(serviceId, $('#midiMessegeToSend').val());
  });
  $('#btnReceivedMessageClear').on('click', function() {
    $('#midiMessegeToReceive').val('');
  });
  $('#btnGetOnMessageEvent').on('click', function() {
    getMidiOnMessage(serviceId);
  });
  $('#btnRegisterOnMessageEvent').on('click', function() {
    registerMidiOnMessage(serviceId);
  });
  $('#btnUnregisterOnMessageEvent').on('click', function() {
    unregisterMidiOnMessage(serviceId);
  });
  $('#btnPlayFile').on('click', function() {
    playFile(serviceId);
  });

  getMidiInfo(serviceId);
  registerMidiOnMessage(serviceId);
}

function getMidiInfo(serviceId) {
  showMidiInfoStatus('取得中...');
  sdk.get({
    profile: 'midi',
    attribute: 'info',
    params: {
      serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showMidiInfoStatus('取得完了');
    let props = ['productName', 'manufacturer', 'protocol', 'direction', 'inputCount', 'outputCount'];
    for (let k in props) {
      let prop = props[k];
      $('#' + prop).text(json[prop]);
    }
  }).catch(e => {
    showMidiInfoStatus('取得失敗');
    showError('PUT /midi/info', e.errorCode, e.errorMessage);
  });
}

function getMidiOnMessage(serviceId) {
  sdk.get({
    profile: 'midi',
    attribute: 'onMessage',
    params: {
      serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    if (json.message) {
      $('#midiMessegeToReceive').val(json.message);
    }
  }).catch(e => {
    showError('PUT /midi/onMessage', e.errorCode, e.errorMessage);
  });
}

function showMidiInfoStatus(str) {
  $('#midiInfoStatus').html(str);
}

function sendMidiMessage(serviceId, message) {
  sdk.post({
    profile: 'midi',
    attribute: 'message',
    params: {
      serviceId,
      message
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('POST /midi/message', e.errorCode, e.errorMessage);
  });
}

function registerMidiOnMessage(serviceId) {
  sdk.addEventListener({
    profile: 'midi',
    attribute: 'onMessage',
    params: {
      serviceId
    }
  }, function(event) {
    let json = JSON.parse(event);
    if (DEBUG) {
      console.log('Event: /midi/onMessage: ', json);
    }
    if (json.message) {
      $('#midiMessegeToReceive').val(json.message);
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT /midi/onMessage', e.errorCode, e.errorMessage);
  });
}

function unregisterMidiOnMessage(serviceId) {
  sdk.removeEventListener({
    profile: 'midi',
    attribute: 'onMessage',
    params: {
      serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('DELETE /midi/onMessage', e.errorCode, e.errorMessage);
  });
}


function playFile(serviceId) {
  let fileForm = $('#btnSelectFile');
  if (DEBUG) {
    console.log('SMF File Selected: ', fileForm[0].files);
  }

  let midiFile;
  if (fileForm[0].files.length > 0) {
    midiFile = fileForm[0].files[0];
  }

  sdk.post({
    profile: 'midi',
    attribute: 'playFile',
    params: {
      serviceId,
      data: midiFile
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('POST /midi/playFile', e.errorCode, e.errorMessage);
  });
}