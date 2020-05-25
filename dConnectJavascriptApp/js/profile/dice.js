/**
 dice.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Dice Menu
 *
 * @param {String}serviceId サービスID
 */
function showDice(serviceId) {
  initAll();

  setTitle('Dice Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  let path = '/';
  str += '<li><a href="javascript:showOnRoll(\'' + serviceId + '\',\'' +
          path + '\');" value="list">onRoll</a></li>';
  str += '<li><a href="javascript:showOnMagnetometer(\'' + serviceId +
          '\');" value="send">onMagnetometer</a></li>';
  reloadList(str);
}

/**
 * サイコロの目を取得
 *
 * @param {String}serviceId サービスID
 */
function showOnRoll(serviceId) {
  initAll();

  let btnStr = '';
  btnStr += getBackButton('Dice Top', 'doOnDiceBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetOnDice(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" onclick=\"doRegisterOnDice(\'' +
        serviceId + '\')\" type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\" onclick=\"doUnregisterOnDice(\'' +
        serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<form  name="diceForm">';
  str += '<center><img src="./css/images/dice_x.png" ' +
          'id="dice" name="dice"></center>';
  str += '</form>';
  reloadContent(str);
}

/**
 * Magnetometerの表示
 *
 * @param {String}serviceId サービスID
 */
function showOnMagnetometer(serviceId) {

  initAll();

  let btnStr = '';
  btnStr += getBackButton('Dice Top', 'doOnMagnetBack',
                  serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" ' +
        'onclick=\"doGetOnMagnetometer(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\"' +
        ' onclick=\"doRegisterOnMagnetometer(\'' +
        serviceId + '\')\" type=\"button\" ' +
        'value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\" ' +
        'onclick=\"doUnregisterOnMagnetometer(\'' +
        serviceId + '\')\" type=\"button\"' +
        ' value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += 'Magnetometer<br>';
  str += makeInputText('X', 'x', 'x');
  str += makeInputText('Y', 'y', 'y');
  str += makeInputText('Z', 'z', 'z');
  str += makeInputText('Filter', 'filter', 'filter');
  str += makeInputText('Interval', 'interval', 'interval');
  str += '</form>';
  reloadContent(str);
}
/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 */
function doOnDiceBack(serviceId) {
  showDice(serviceId);
  doUnregisterOnDice(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 */
function doOnMagnetBack(serviceId) {
  showDice(serviceId);
  doUnregisterOnMagnetometer(serviceId);
}

function doGetOnDice(serviceId) {
  sdk.get({
    profile: 'dice',
    attribute: 'ondice',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.dice) {
      let img = document.getElementById('dice');
      img.src = './css/images/dice_' + json.dice.pip + '.png';
    }
  }).catch(e => {
    alert('errorCode: ' + e.errorCode + ', errorMessage: ' + e.errorMessage);
  });
}

/**
 * Dice ondiceイベントの登録
 *
 * @param {String}serviceId サービスID
 */
function doRegisterOnDice(serviceId, sessionKey) {
  sdk.addEventListener({
    profile: 'dice',
    attribute: 'ondice',
    params: {
      serviceId: serviceId
    }
  }, (message) => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);

    if (json.dice) {
      let img = document.getElementById('dice');
      img.src = './css/images/dice_' + json.dice.pip + '.png';
    }

  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Dice ondiceイベントの削除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnDice(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'dice',
    attribute: 'ondice',
    params: {
      serviceId: serviceId
    }
  }).catch(e =>  {
    alert(e.errorMessage);
  });
}

function doGetOnMagnetometer(serviceId) {
  sdk.get({
    profile: 'dice',
    interface: 'magnetometer',
    attribute: 'onmagnetometer',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.magnetometer) {
      $('#x').val(json.magnetometer.x);
      $('#y').val(json.magnetometer.y);
      $('#z').val(json.magnetometer.z);
      $('#filter').val(json.magnetometer.filter);
      $('#interval').val(json.magnetometer.interval);
    }
  }).catch(e =>  {
    alert('errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
  });
}

/**
 * Dice OnMagnetometerイベントの登録
 *
 * @param {String}serviceId サービスID
 */
function doRegisterOnMagnetometer(serviceId) {
  sdk.addEventListener({
    profile: 'dice',
    interface: 'magnetometer',
    attribute: 'onmagnetometer',
    params: {
      serviceId: serviceId
    }
  }, (message) => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);

    if (json.magnetometer) {
      $('#x').val(json.magnetometer.x);
      $('#y').val(json.magnetometer.y);
      $('#z').val(json.magnetometer.z);
      $('#filter').val(json.magnetometer.filter);
      $('#interval').val(json.magnetometer.interval);
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Dice OnMagnetometerイベントの削除
 *
 * @param {String}serviceId サービスID
 */
function doUnregisterOnMagnetometer(serviceId) {
  sdk.removeEventListener({
    profile: 'dice',
    interface: 'magnetometer',
    attribute: 'onmagnetometer',
    params: {
      serviceId: serviceId
    }
  }).catch(e =>  {
    alert(e.errorMessage);
  });
}
