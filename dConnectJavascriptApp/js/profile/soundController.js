/**
 soundController.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function showSoundController(serviceId) {
  initAll();
  setTitle('SoundController Profile');

  let str = '';
  str += '<div>イベント登録状態: <span id="eventStatus"></span></div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><button id="btnRegisterOnNoteEvent">登録</button></div>';
  str += '<div class="ui-block-b"><button id="btnUnegisterOnNoteEvent">解除</button></div>';
  str += '</fieldset>';
  str += '<div id="evaneLog"></div>';

  reloadContent(str);

  $('#btnRegisterOnNoteEvent').on('click', function() {
    registerOnNoteEvent(serviceId);
  });
  $('#btnUnegisterOnNoteEvent').on('click', function() {
    unregisterOnNoteEvent(serviceId);
  });

  registerOnNoteEvent(serviceId);
}

function showEventStatus(str) {
  $('#eventStatus').text(str);
}

function registerOnNoteEvent(serviceId) {
  showEventStatus('登録処理中...');
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
    showOnNoteEvent(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showEventStatus('登録済み');
  }).catch(e => {
    showEventStatus('登録失敗');
    showError('PUT /soundController/onNote', e.errorCode, e.errorMessage);
  });
}

function showOnNoteEvent(json) {
  if (json) {
    let note = json.note;
    let channel = json.channel;
    $('#evaneLog').html(`音階=${note} チャンネル=${channel}`);
  }
}

function unregisterOnNoteEvent(serviceId) {
  showEventStatus('解除処理中...');
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
    showEventStatus('解除済み');
  }).catch(e => {
    showEventStatus('解除失敗');
    showError('DELETE /soundController/onNote', e.errorCode, e.errorMessage);
  });
}
