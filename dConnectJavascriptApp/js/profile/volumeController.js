/**
 volumeController.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function showVolumeController(serviceId) {
  initAll();
  setTitle('VolumeController Profile');

  let str = '';
  str += '<div>イベント登録状態: <span id="eventStatus"></span></div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><button id="btnRegisterOnVolumeChangeEvent">登録</button></div>';
  str += '<div class="ui-block-b"><button id="btnUnegisterOnVolumeChangeEvent">解除</button></div>';
  str += '</fieldset>';
  str += '<div id="evaneLog"></div>';

  reloadContent(str);

  $('#btnRegisterOnVolumeChangeEvent').on('click', function() {
    registerOnVolumeChangeEvent(serviceId);
  });
  $('#btnUnegisterOnVolumeChangeEvent').on('click', function() {
    unregisterOnVolumeChangeEvent(serviceId);
  });

  registerOnVolumeChangeEvent(serviceId);
}

function showOnVolumeChangeEventStatus(str) {
  $('#eventStatus').text(str);
}

function registerOnVolumeChangeEvent(serviceId) {
  showOnVolumeChangeEventStatus('登録処理中...');
  sdk.addEventListener({
    profile: 'volumeController',
    attribute: 'onVolumeChange',
    params: {
      serviceId
    }
  }, function(event) {
    let json = JSON.parse(event);
    if (DEBUG) {
      console.log('Event: /volumeController/onVolumeChange: ', json);
    }
    showOnVolumeChangeEvent(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showOnVolumeChangeEventStatus('登録済み');
  }).catch(e => {
    showOnVolumeChangeEventStatus('登録失敗');
    showError('PUT /volumeController/onVolumeChange', e.errorCode, e.errorMessage);
  });
}

function showOnVolumeChangeEvent(json) {
  if (json) {
    let value = json.value;
    let channel = json.channel;
    $('#evaneLog').html(`ボリューム値=${value} チャンネル=${channel}`);
  }
}

function unregisterOnVolumeChangeEvent(serviceId) {
  showOnVolumeChangeEventStatus('解除処理中...');
  sdk.removeEventListener({
    profile: 'volumeController',
    attribute: 'onVolumeChange',
    params: {
      serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showOnVolumeChangeEventStatus('解除済み');
  }).catch(e => {
    showOnVolumeChangeEventStatus('解除失敗');
    showError('DELETE /volumeController/onVolumeChange', e.errorCode, e.errorMessage);
  });
}
