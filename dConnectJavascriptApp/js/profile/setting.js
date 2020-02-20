/**
 setting.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
let VOLUME_TYPE_ALERM = 1;
let VOLUME_TYPE_CALL = 2;
let VOLUME_TYPE_RINGTONE = 3;
let VOLUME_TYPE_MAIL = 4;
let VOLUME_TYPE_MEDIA_PLAYER = 5;
let VOLUME_TYPE_OTHER = 6;
let processCount = 0;
let finishCount = 3;

/**
 * Setting menu
 *
 * @param {String} serviceId サービスID
 */
function showSetting(serviceId) {

  initAll();

  setTitle('Setting Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';

  if (myDeviceName.indexOf('Pebble') != -1) {
    str += '<center>Date</center><br>';
    str += makeInputText('DeviceTime', 'deviceDate', 'deviceDate');
    str += '<input name="newDate" id="newDate" type="text" ' +
          'data-role="datebox" data-options=\'{"mode":"datebox"}\' />'
    str += '<input name="newTime" id="newTime" type="text"' +
          ' data-role="datebox" data-options=\'{"mode":"timebox"}\' />';
    str += '<input type="button" onclick="doSetDate(\'' +
            serviceId + '\',1);" id="setDate" value="Set date"  />';
  }  else if (myDeviceName.indexOf('FPLUG') != -1) {
    str += '<center>Date</center><br>';
    str += makeInputText('DeviceTime', 'deviceDate', 'deviceDate');
    str += '<input name="newDate" id="newDate" type="text"' +
          ' data-role="datebox" data-options=\'{"mode":"datebox"}\' />'
    str += '<input name="newTime" id="newTime" type="text"' +
          ' data-role="datebox" data-options=\'{"mode":"timebox"}\' />';
    str += '<input type="button" onclick="doSetDate(\'' +
          serviceId + '\',1);" id="setDate" value="Set date"  />';
  } else {
    str += '<center>Date</center><br>';
    str += makeInputText('DeviceTime', 'deviceDate', 'deviceDate');
    str += '<label for="slider-0">Volume Alerm:</label>';
    str += '<input type="range" name="slider" id="volumeAlerm"' +
            ' value="25" min="0" max="100"  />';
    str += '<input type="button" onclick="doChangeSoundLevel(\'' +
            serviceId + '\',1);" id="volumeSetAlerm"' +
            ' value="Set volume of Alerm"  />';

    str += '<label for="slider-0">Volume Call:</label>';
    str += '<input type="range" name="slider" id="volumeCall"' +
            ' value="25" min="0" max="100"  />';
    str += '<input type="button" onclick="doChangeSoundLevel(\'' +
            serviceId + '\',2);" id="volumeSeCall"' +
            ' value="Set volume of Call"  />';

    str += '<label for="slider-0">Volume Ringtone:</label>';
    str += '<input type="range" name="slider" id="volumeRingtone"' +
            ' value="25" min="0" max="100"  />';
    str += '<input type="button" onclick="doChangeSoundLevel(\'' +
            serviceId + '\',3);" id="volumeSetRingtone"' +
            ' value="Set volume of Ringtone"  />';

    str += '<label for="slider-0">Volume Media Player:</label>';
    str += '<input type="range" name="slider" id="volumeMediaplayer"' +
            ' value="25" min="0" max="100"  />';
    str += '<input type="button" onclick="doChangeSoundLevel(\'' +
            serviceId + '\',5);" id="volumeSetMediaplayer"' +
            ' value="Set volume of Media Player"  />';

    str += '<label for="slider-0">brightness:</label>';
    str += '<input type="range" name="slider" id="brightness" value="25"' +
            ' min="0" max="100"  />';
    str += '<input type="button" id="brightnessSet" onclick="doSetbrightness(\'' +
            serviceId + '\');" value="Set Brightness"  />';

    str += '<label for="slider-0">Sleep:</label>';
    str += '<input type="text" value="" id="sleep" name="sleep" >';
    str += '<input type="button" id="sleepSet" onclick="doSetSleep(\'' +
          serviceId + '\');" value="Set sleep"  />';
  }

  reloadContent(str);

  processCount = 0;
  showLoading();

  if (myDeviceName.indexOf('Pebble') != -1) {
    doCheckDate(serviceId);
    finishCount = 1;
  } else if (myDeviceName.indexOf('Sony Camera') != -1) {
    doCheckDate(serviceId);
    finishCount = 1;
  } else {
    doCheckDate(serviceId);
    for (let i = 1; i < VOLUME_TYPE_OTHER; i++) {
      doCheckVolume(serviceId, i);
    }
    doCheckbrightness(serviceId);
    doCheckSleep(serviceId);
    finishCount = 4;
  }

}

/**
 * 時刻の設定
 *
 * @param {String} serviceId サービスID
 */
function doSetDate(serviceId) {
  let newDate = $('#newDate').val();
  let newTime = $('#newTime').val();

  let newDateStr = newDate + 'T' + newTime + ':00+09:00';
  alert(newDateStr);
  sdk.put({
    profile: 'setting',
    attribute: 'date',
    serviceId: serviceId,
    date: newDateStr
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert('Success: set date');
    doCheckDate(serviceId);
  }).catch(e => {
    showError('PUT setting/date', e.errorCode, e.errorMessage);
  });

}

/**
 * Get date from Setting profile.
 *
 * @param {String} serviceId サービスID
 */
function doCheckDate(serviceId) {
  let oncomplete = function() {
    processCount++;
    loadingCheck(processCount);
  };

  sdk.get({
    profile: 'setting',
    attribute: 'date',
    serviceId: serviceId
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    $('#deviceDate').val(json.date);
    oncomplete();
  }).catch(e => {
    showError('GET setting/date', e.errorCode, e.errorMessage);
    oncomplete();
  });
}


/**
 * Get volume from Setting profile.
 *
 * @param {String} serviceId サービスID
 * @param {int} kind Volumeのタイプ
 */
function doCheckVolume(serviceId, kind) {
  let oncomplete = function() {
    processCount++;
    loadingCheck(processCount);
  };

  sdk.get({
    profile: 'setting',
    interface: 'sound',
    attribute: 'volume',
    serviceId: serviceId,
    kind: kind
  }).then(json => {
    if (DEBUG) {
      console.log('Response1: ', json);
    }
    if (kind == VOLUME_TYPE_ALERM) {
      $('#volumeAlerm').val((json.level * 100));
      $('#volumeAlerm').slider('refresh');
    } else if (kind == VOLUME_TYPE_CALL) {
      $('#volumeCall').val((json.level * 100));
      $('#volumeCall').slider('refresh');
    } else if (kind == VOLUME_TYPE_RINGTONE) {
      $('#volumeRingtone').val((json.level * 100));
      $('#volumeRingtone').slider('refresh');
    } else if (kind == VOLUME_TYPE_MAIL) {
      $('#volumeMail').val((json.level * 100));
      $('#volumeMail').slider('refresh');
    } else if (kind == VOLUME_TYPE_MEDIA_PLAYER) {
      $('#volumeMediaplayer').val((json.level * 100));
      $('#volumeMediaplayer').slider('refresh');
    } else {
      // no op VOLUME_TYPE_OTHER
    }
    oncomplete();
  }).catch(e => {
    showError('GET setting/sound/volume', e.errorCode, e.errorMessage);
    oncomplete();
  });
}

/**
 * Get display brightness value
 *
 * @param {String} serviceId サービスID
 */
function doCheckbrightness(serviceId) {
  let oncomplete = function() {
    processCount++;
    loadingCheck(processCount);
  };

  sdk.get({
    profile: 'setting',
    interface: 'display',
    attribute: 'brightness',
    serviceId: serviceId
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    $('#brightness').val((json.level * 100));
    $('#brightness').slider('refresh');
    oncomplete();
  }).catch(e => {
    showError('GET setting/display/brightness', e.errorCode, e.errorMessage);
    oncomplete();
  });
}

/**
 * Set display brightness value
 *
 * @param {String} serviceId サービスID
 */
function doSetbrightness(serviceId) {
  let level = $('#brightness').val() / 100;
  sdk.put({
    profile: 'setting',
    interface: 'display',
    attribute: 'brightness',
    serviceId: serviceId,
    level: level
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('success');
  }).catch(e => {
    showError('PUT setting/display/brightness', e.errorCode, e.errorMessage);
  });
}

/**
 * Set sleep time
 *
 * @param {String} serviceId サービスID
 */
function doSetSleep(serviceId) {
  let time = $('#sleep').val();
  sdk.put({
    profile: 'setting',
    interface: 'display',
    attribute: 'sleep',
    serviceId: serviceId,
    time: time
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('success');
  }).catch(e => {
    showError('PUT setting/display/sleep', e.errorCode, e.errorMessage);
  });
}

/**
 * Get sleep time
 *
 * @param {String} serviceId サービスID
 */
function doCheckSleep(serviceId) {
  let oncomplete = function() {
    processCount++;
    loadingCheck(processCount);
  };

  sdk.get({
    profile: 'setting',
    interface: 'display',
    attribute: 'sleep',
    serviceId: serviceId,
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    $('#sleep').val(json.time);
    oncomplete();
  }).catch(e => {
    showError('GET setting/volume/sound', e.errorCode, e.errorMessage);
    oncomplete();
  });
}

/**
 * Loading Dialog
 *
 * @param {String}count 処理数
 */
function loadingCheck(count) {
  if (count >= finishCount) {
    closeLoading();
  }
}

/**
 * Soundのレベルを変更.
 *
 * @param {String} serviceId サービスID
 * @param {String} type 音のタイプ
 */
function doChangeSoundLevel(serviceId, type) {

  if (type == VOLUME_TYPE_ALERM) {
    let level = $('#volumeAlerm').val() / 100;
    doSetSoundLevel(type, serviceId, level);
  } else if (type == VOLUME_TYPE_CALL) {
    let level = $('#volumeCall').val() / 100;
    doSetSoundLevel(type, serviceId, level);
  } else if (type == VOLUME_TYPE_RINGTONE) {
    let level = $('#volumeRingtone').val() / 100;
    doSetSoundLevel(type, serviceId, level);
  } else if (type == VOLUME_TYPE_MAIL) {
    let level = $('#volumeMail').val() / 100;
    doSetSoundLevel(type, serviceId, level);
  } else if (type == VOLUME_TYPE_MEDIA_PLAYER) {
    let level = $('#volumeMediaplayer').val() / 100;
    doSetSoundLevel(type, serviceId, level);
  }
}

/**
 * 各種音部分の設定
 *
 * @param {String} type 音源のタイプ
 * @param {String} serviceId サービスID
 * @param {String} level 音のレベル
 */
function doSetSoundLevel(type, serviceId, level) {
  sdk.put({
    profile: 'setting',
    interface: 'volume',
    attribute: 'sound',
    serviceId: serviceId,
    kind: type,
    level: level
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('success');
  }).catch(e => {
    showError('PUT setting/volume/sound', e.errorCode, e.errorMessage);
  });
}
