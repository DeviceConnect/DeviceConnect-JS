/**
 soundController.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function showSoundController(serviceId) {
  initAll();
  setTitle('SoundController Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>イベント登録状態: <span id="eventStatus"></span></div>';
  str += '<fieldset class="ui-grid-b">';
  str += '<div class="ui-block-a"><button id="btnGetOnNoteEvent">GET</button></div>';
  str += '<div class="ui-block-b"><button id="btnRegisterOnNoteEvent">登録</button></div>';
  str += '<div class="ui-block-c"><button id="btnUnegisterOnNoteEvent">解除</button></div>';
  str += '</fieldset>';
  str += '<hr>';
  str += '<div>イベントログ:</div>';
  str += '<textarea id="evaneLog" data-autogrow="false" rows="10"></textarea>';

  reloadContent(str);

  $('#btnGetOnNoteEvent').on('click', function() {
    getOnNoteEvent(serviceId);
  });
  $('#btnRegisterOnNoteEvent').on('click', function() {
    registerOnNoteEvent(serviceId);
  });
  $('#btnUnegisterOnNoteEvent').on('click', function() {
    unregisterOnNoteEvent(serviceId);
  });

  registerOnNoteEvent(serviceId);
}

function showOnNoteEventStatus(str) {
  $('#eventStatus').text(str);
}

function getOnNoteEvent(serviceId) {
  sdk.get({
    profile: 'soundController',
    attribute: 'onNote',
    params: {
      serviceId
    }
  }).then(json => {
    showOnNoteMessage(json, 'GET');
  }).catch(e => {
    showError('GET /soundController/onNote', e.errorCode, e.errorMessage);
  });
}

function registerOnNoteEvent(serviceId) {
  showOnNoteEventStatus('登録処理中...');
  sdk.addEventListener({
    profile: 'soundController',
    attribute: 'onNote',
    params: {
      serviceId
    }
  }, function(event) {
    let json = JSON.parse(event);
    if (DEBUG) {
      console.log('Event: /soundController/onNote: ', json);
    }
    showOnNoteMessage(json, 'EVENT');
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showOnNoteEventStatus('登録済み');
  }).catch(e => {
    showOnNoteEventStatus('登録失敗');
    showError('PUT /soundController/onNote', e.errorCode, e.errorMessage);
  });
}

function showOnNoteMessage(json, type) {
  if (json) {
    let channel = json.channel;
    let note = json.note;
    let state = json.state;

    let log = $('#evaneLog').text();
    $('#evaneLog').text(`[${toLocaleDateTime(new Date())}][${type}] チャンネル=${channel} 音階=${note} 状態=${state}\n${log}`);
  }
}

function unregisterOnNoteEvent(serviceId) {
  showOnNoteEventStatus('解除処理中...');
  sdk.removeEventListener({
    profile: 'soundController',
    attribute: 'onNote',
    params: {
      serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showOnNoteEventStatus('解除済み');
  }).catch(e => {
    showOnNoteEventStatus('解除失敗');
    showError('DELETE /soundController/onNote', e.errorCode, e.errorMessage);
  });
}
