/**
 volumeController.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function showVolumeController(serviceId) {
  initAll();
  setTitle('VolumeController Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>イベント登録状態: <span id="eventStatus"></span></div>';
  str += '<fieldset class="ui-grid-b">';
  str += '<div class="ui-block-a"><button id="btnGetOnVolumeChangeEvent">GET</button></div>';
  str += '<div class="ui-block-b"><button id="btnRegisterOnVolumeChangeEvent">登録</button></div>';
  str += '<div class="ui-block-c"><button id="btnUnegisterOnVolumeChangeEvent">解除</button></div>';
  str += '</fieldset>';
  str += '<hr>';
  str += '<div>イベントログ:</div>';
  str += '<textarea id="evaneLog" data-autogrow="false" rows="10"></textarea>';

  reloadContent(str);

  $('#btnGetOnVolumeChangeEvent').on('click', function() {
    getOnVolumeChangeEvent(serviceId);
  });
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

function getOnVolumeChangeEvent(serviceId) {
  sdk.get({
    profile: 'volumeController',
    attribute: 'onVolumeChange',
    params: {
      serviceId
    }
  }).then(json => {
    showOnVolumeChangeMessage(json, 'GET');
  }).catch(e => {
    showError('GET /volumeController/onVolumeChange', e.errorCode, e.errorMessage);
  });
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
    showOnVolumeChangeMessage(json, 'EVENT');
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

function showOnVolumeChangeMessage(json, type) {
  if (json) {
    let channel = json.channel;
    let value = json.value;

    let log = $('#evaneLog').text();
    $('#evaneLog').text(`[${toLocaleDateTime(new Date())}][${type}] チャンネル=${channel} ボリューム値=${value}\n${log}`);
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
