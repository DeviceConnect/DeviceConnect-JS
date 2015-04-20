/**
 dice.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doDiceBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  var path = '/';
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

  var sessionKey = currentClientId;

  var btnStr = '';
  btnStr += getBackButton('Dice Top', 'doOnDiceBack', serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetOnDice(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" onclick=\"doRegisterOnDice(\'' +
        serviceId + '\', \'' + sessionKey +
        '\')\" type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\" onclick=\"doUnregisterOnDice(\'' +
        serviceId + '\', \'' + sessionKey +
        '\')\" type=\"button\" value=\"Unregister\" />';
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

  var sessionKey = currentClientId;

  var btnStr = '';
  btnStr += getBackButton('Dice Top', 'doOnMagnetBack',
                  serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" ' +
        'onclick=\"doGetOnMagnetometer(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\"' +
        ' onclick=\"doRegisterOnMagnetometer(\'' +
        serviceId + '\', \'' + sessionKey + '\')\" type=\"button\" ' +
        'value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\" ' +
        'onclick=\"doUnregisterOnMagnetometer(\'' +
        serviceId + '\', \'' + sessionKey + '\')\" type=\"button\"' +
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
 * @param {String}sessionKey セッションKEY
 */
function doDiceBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doOnDiceBack(serviceId, sessionKey) {
  showDice(serviceId);
  doUnregisterOnDice(serviceId, sessionKey);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doOnMagnetBack(serviceId, sessionKey) {
  showDice(serviceId);
  doUnregisterOnMagnetometer(serviceId, sessionKey);
}

function doGetOnDice(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setAttribute('ondice');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }
  dConnect.get(uri, null, function(json) {
    if (json.dice) {
      var img = document.getElementById('dice');
      img.src = './css/images/dice_' + json.dice.pip + '.png';
    }
  }, null, function(errorCode, errorMessage) {
    alert('errorCode: ' + errorCode + ', errorMessage: ' + errorMessage);
  });
}

/**
 * Dice ondiceイベントの登録
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doRegisterOnDice(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setAttribute('ondice');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('sessionKey', sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    var json = JSON.parse(message);

    if (json.dice) {
      var img = document.getElementById('dice');
      img.src = './css/images/dice_' + json.dice.pip + '.png';
    }

  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Dice ondiceイベントの削除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnDice(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setAttribute('ondice');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('sessionKey', sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

function doGetOnMagnetometer(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setInterface('magnetometer');
  builder.setAttribute('onmagnetometer');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }
  dConnect.get(uri, null, function(json) {
    if (json.magnetometer) {
      $('#x').val(json.magnetometer.x);
      $('#y').val(json.magnetometer.y);
      $('#z').val(json.magnetometer.z);
      $('#filter').val(json.magnetometer.filter);
      $('#interval').val(json.magnetometer.interval);
    }
  }, null, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
}

/**
 * Dice OnMagnetometerイベントの登録
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doRegisterOnMagnetometer(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setInterface('magnetometer');
  builder.setAttribute('onmagnetometer');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('sessionKey', sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    var json = JSON.parse(message);

    if (json.magnetometer) {
      $('#x').val(json.magnetometer.x);
      $('#y').val(json.magnetometer.y);
      $('#z').val(json.magnetometer.z);
      $('#filter').val(json.magnetometer.filter);
      $('#interval').val(json.magnetometer.interval);
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Dice OnMagnetometerイベントの削除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnMagnetometer(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setInterface('magnetometer');
  builder.setAttribute('onmagnetometer');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('sessionKey', sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}
