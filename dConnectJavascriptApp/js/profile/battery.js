/**
 battery.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Battery Menu
 *
 * @param {String} serviceId サービスID
 */
function showBattery(serviceId) {
  initAll();
  setTitle('Battery Profile');

  let btnStr = getBackButton('Device Top', 'doBatteryBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  if (myDeviceName.indexOf('Host') != -1) {
    str += '<li><a href="javascript:doBatteryAll(\'' + serviceId +
           '\');">Show battery info</a></li>';
    str += '<li><a href="javascript:showChargeEvent(\'' + serviceId +
           '\');" >Battery Event(onchargingchange)</a></li>';
  } else {
    str += '<li><a href="javascript:doBatteryAll(\'' + serviceId +
           '\');">Show battery info</a></li>';
    str += '<li><a href="javascript:showBatteryChangeEvent(\'' +
           serviceId + '\');" >Battery Event(onbatterychange)</a></li>';
    str += '<li><a href="javascript:showChargeEvent(\'' + serviceId +
           '\');">Battery Event(onchargingchange)</a></li>';
  }
  reloadList(str);
}

/**
 * Show Battery Change Event
 *
 * @param {String} serviceId サービスID
 */
function showBatteryChangeEvent(serviceId) {
  initAll();
  setTitle('Battery Event');

  let btnStr = getBackButton('Device Top', 'doBatteryChangeBack',
              serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="batteryForm">';
  str += 'Battery<br>';
  str += makeInputText('chargingTime', 'chargingTime', 'chargingTime');
  str += makeInputText('dischargingTime', 'dischargingTime', 'dischargingTime');
  str += makeInputText('level', 'level', 'level');
  str += '</form>';
  reloadContent(str);

  doRegisterBatteryChangeEvent(serviceId);
}

/**
 * Show Battery Charge Event
 *
 * @param {String}serviceId サービスID
 */
function showChargeEvent(serviceId) {
  initAll();
  setTitle('Battery Event');

  let btnStr = getBackButton('Battery Top', 'searchSystem',
          serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'battery',
    attribute: 'charging',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let charging = json.charging;
    let str = '';
    str += '<center>';
    str += '<form  name="batteryForm">';
    str += '<select name="charging" id="charging" data-role="slider">';
    if (charging) {
      str += '<option value="false">False</option>';
      str += '<option value="true" selected="selected">True</option>';
    } else {
      str += '<option value="false" selected="selected">False</option>';
      str += '<option value="true">True</option>';
    }
    str += '</select>';
    str += '</form>';
    str += '</center>';
    reloadContent(str);

    doRegisterChargingEvent(serviceId);
  }).catch(e => {
    closeLoading();
    showError('GET battery/charging', e.errorCode, e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 */
function doBatteryChargingBack(serviceId) {
  doUnregisterChargingEvent(serviceId);
  showBattery(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 */
function doBatteryChangeBack(serviceId) {
  doUnregisterBatteryChangeEvent(serviceId);
  showBattery(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 */
function doBatteryAllBack(serviceId) {
  showBattery(serviceId);
}

/**
 * Register Battery Charging Event
 *
 * @param {String}serviceId サービスID
 */
function doRegisterChargingEvent(serviceId) {
  sdk.addEventListener({
    profile: 'battery',
    attribute: 'onchargingchange',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    if (json.battery) {
      if (json.battery.charging) {
        $('#charging').prop('selectedIndex', 1);
        $('#charging').slider('refresh');
      } else {
        $('#charging').prop('selectedIndex', 0);
        $('#charging').slider('refresh');
      }
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Unregister Battery Charging Event
 *
 * @param {String}serviceId サービスID
 */
function doUnregisterChargingEvent(serviceId) {
  sdk.removeEventListener({
    profile: 'battery',
    attribute: 'onchargingchange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Register Battery Change Event
 *
 * @param {String}serviceId サービスID
 */
function doRegisterBatteryChangeEvent(serviceId) {
  sdk.addEventListener({
    profile: 'battery',
    attribute: 'onbatterychange',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    if (json.battery) {
      if (json.battery.chargingTime) {
        document.batteryForm.chargingTime.value = json.battery.chargingTime;
      }
      if (json.battery.dischargingTime) {
        document.batteryForm.dischargingTime.value =
                json.battery.dischargingTime;
      }
      if (json.battery.level) {
        document.batteryForm.level.value = json.battery.level;
      }
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Unregister Battery Change Event
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterBatteryChangeEvent(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'battery',
    attribute: 'onbatterychange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Battery Profile
 */
function doBatteryAll(serviceId) {
  initAll();
  setTitle('Battery Info');

  let btnStr = getBackButton('Battery Top', 'doBatteryAllBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();
  showLoading();

  sdk.get({
    profile: 'battery',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    let level = json.level * 100;
    let str = '';
    str += '<label for="slider-0">LEVEL:</label>';
    str += '<input type="range" name="slider" id="volume" value="' + level +
                '" min="0" max="100"  />';

    if (json.charging) {
      str += 'Status: Charging';
    } else {
      str += 'Status: Not charging';
    }

    reloadContent(str);
  }).catch(e => {
    closeLoading();
    showError('GET battery', e.errorCode, e.errorMessage);
  });
}
