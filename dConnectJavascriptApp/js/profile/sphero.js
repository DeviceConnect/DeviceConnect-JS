/**
 sphero.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Sphero Menu
 *
 * @param {String}serviceId サービスID
 */
function showSphero(serviceId) {
  initAll();
  setTitle('Sphero Profile');

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  let path = '/';
  str += '<li><a href="javascript:showOnQuaternion(\'' + serviceId +
            '\');" value="list">onQuaternion</a></li>';
  str += '<li><a href="javascript:showOnLocator(\'' + serviceId +
        '\');" value="send">onLocator</a></li>';
  str += '<li><a href="javascript:showOnCollision(\'' + serviceId +
        '\');" value="send">onCollision</a></li>';
  reloadList(str);
}

/**
 * OnQuaternionの表示
 *
 * @param {String} serviceId サービスID
 */
function showOnQuaternion(serviceId) {
  initAll();

  setTitle('OnQuaternion Event');

  let btnStr = '';
  btnStr += getBackButton('Sphero Top', 'doOnQuaternionBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetOnQuaternion(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" onclick=\"doRegisterOnQuaternion(\'' +
        serviceId + '\')\" type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
        ' onclick=\"doUnregisterOnQuaternion(\'' + serviceId +
        '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<form  name="spheroForm">';
  str += 'Quaternion<br>';
  str += makeInputText('Q0',  'q0',  'q0');
  str += makeInputText('Q1',  'q1',  'q1');
  str += makeInputText('Q2',  'q2',  'q2');
  str += makeInputText('Q3',  'q3',  'q3');
  str += makeInputText('Interval',  'interval',  'interval');
  str += '</form>';
  reloadContent(str);
}

/**
 * OnLocatorの表示
 *
 * @param {String} serviceId サービスID
 */
function showOnLocator(serviceId) {
  initAll();

  setTitle('OnLocator Event');

  let btnStr = '';
  btnStr += getBackButton('Sphero Top', 'doOnLocatorBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetOnLocator(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" onclick=\"doRegisterOnLocator(\'' +
        serviceId + '\')\" type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\" onclick=\"doUnregisterOnLocator(\'' +
        serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<form  name="spheroForm">';
  str += 'Locator<br>';
  str += makeInputText('PosX',  'posx',  'posx');
  str += makeInputText('PosY',  'posy',  'posy');
  str += makeInputText('VelX',  'velx',  'velx');
  str += makeInputText('VelY',  'vely',  'vely');
  str += '</form>';
  reloadContent(str);
}

/**
 * OnCollisionの表示
 *
 * @param {String} serviceId サービスID
 */
function showOnCollision(serviceId) {
  initAll();

  let btnStr = '';
  btnStr += getBackButton('Sphero Top', 'doOnCollisionBack',
                      serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetOnCollision(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" onclick=\"doRegisterOnCollision(\'' +
        serviceId + '\')\" type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\" ' +
        'onclick=\"doUnregisterOnCollision(\'' +
        serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<form  name="spheroForm">';
  str += 'Collision<br>';
  str += makeInputText('TimeStamp',  'time',  'time');
  str += makeInputText('TimeStampString',  'timeString',  'timeString');
  str += makeInputText('Speed',  'speed',  'speed');
  str += makeInputText('Power:X',  'px',  'px');
  str += makeInputText('Power:Y',  'py',  'py');
  str += makeInputText('Acceleration:X',  'acx',  'acx');
  str += makeInputText('Acceleration:Y',  'acy',  'acy');
  str += makeInputText('Acceleration:Z',  'acz',  'acz');
  str += makeInputText('Axis:X',  'axx',  'axx');
  str += makeInputText('Axis:Y',  'axy',  'axy');
  str += '</form>';
  reloadContent(str);
}
/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doOnQuaternionBack(serviceId) {
  showSphero(serviceId);
  doUnregisterOnQuaternion(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doOnLocatorBack(serviceId) {
  showSphero(serviceId);
  doUnregisterOnLocator(serviceId);
}

/**
 * Backボタン
 *
 * @param {String }serviceId サービスID
 */
function doOnCollisionBack(serviceId) {
  showSphero(serviceId);
  doUnregisterOnCollision(serviceId);
}

/**
 * Quaternionイベントの登録
 *
 * @param {String} serviceId サービスID
 */
function doGetOnQuaternion(serviceId) {
  sdk.get({
    profile: 'sphero',
    interface: 'quaternion',
    attribute: 'onquaternion',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.quaternion) {
      $('#q0').val(json.quaternion.q0);
      $('#q1').val(json.quaternion.q1);
      $('#q2').val(json.quaternion.q2);
      $('#q3').val(json.quaternion.q3);
      $('#interval').val(json.quaternion.interval);
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * Quaternionイベントの登録
 *
 * @param {String}serviceId サービスID
 */
function doRegisterOnQuaternion(serviceId) {
  sdk.addEventListener({
    profile: 'sphero',
    interface: 'quaternion',
    attribute: 'onquaternion',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }
    let json = JSON.parse(message);
    if (json.quaternion) {
      $('#q0').val(json.quaternion.q0);
      $('#q1').val(json.quaternion.q1);
      $('#q2').val(json.quaternion.q2);
      $('#q3').val(json.quaternion.q3);
      $('#interval').val(json.quaternion.interval);
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * OnQuaternionイベントの削除
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterOnQuaternion(serviceId) {
  sdk.removeEventListener({
    profile: 'sphero',
    interface: 'quaternion',
    attribute: 'onquaternion',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to remove event listener');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * OnLocatorイベントの登録
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションキー
 */
function doGetOnLocator(serviceId) {
  sdk.get({
    profile: 'sphero',
    interface: 'locator',
    attribute: 'onlocator',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.locator) {
      $('#posx').val(json.locator.positionX);
      $('#posy').val(json.locator.positionY);
      $('#velx').val(json.locator.velocityX);
      $('#vely').val(json.locator.velocityY);
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * OnLocatorイベントの登録
 *
 * @param {String}serviceId サービスID
 */
function doRegisterOnLocator(serviceId) {
  sdk.addEventListener({
    profile: 'sphero',
    interface: 'locator',
    attribute: 'onlocator',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }
    let json = JSON.parse(message);
    if (json.locator) {
      $('#posx').val(json.locator.positionX);
      $('#posy').val(json.locator.positionY);
      $('#velx').val(json.locator.velocityX);
      $('#vely').val(json.locator.velocityY);
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * OnLocatorイベントの削除
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterOnLocator(serviceId) {
  sdk.removeEventListener({
    profile: 'sphero',
    interface: 'locator',
    attribute: 'onlocator',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to remove event listener');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * OnCollisionイベントの登録
 *
 * @param {String}serviceId サービスID
 */
function doGetOnCollision(serviceId) {
  sdk.get({
    profile: 'sphero',
    interface: 'collision',
    attribute: 'oncollision',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.collision) {
      $('#time').val(json.collision.impactTimeStamp);
      $('#timeString').val(json.collision.impactTimeStampString);
      $('#speed').val(json.collision.impactSpeed);
      $('#px').val(json.collision.impactPower.x);
      $('#py').val(json.collision.impactPower.y);
      $('#acx').val(json.collision.impactAcceleration.x);
      $('#acy').val(json.collision.impactAcceleration.y);
      $('#acz').val(json.collision.impactAcceleration.z);
      $('#axx').val(json.collision.impactAxis.y);
      $('#axy').val(json.collision.impactAxis.x);
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}
/**
 * OnCollisionイベントの登録
 *
 * @param {String }serviceId サービスID
 */
function doRegisterOnCollision(serviceId) {
  sdk.addEventListener({
    profile: 'sphero',
    interface: 'collision',
    attribute: 'oncollision',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.collision) {
      $('#time').val(json.collision.impactTimeStamp);
      $('#timeString').val(json.collision.impactTimeStampString);
      $('#speed').val(json.collision.impactSpeed);
      $('#px').val(json.collision.impactPower.x);
      $('#py').val(json.collision.impactPower.y);
      $('#acx').val(json.collision.impactAcceleration.x);
      $('#acy').val(json.collision.impactAcceleration.y);
      $('#acz').val(json.collision.impactAcceleration.z);
      $('#axx').val(json.collision.impactAxis.y);
      $('#axy').val(json.collision.impactAxis.x);
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}

/**
 * OnCollisionイベントの削除
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterOnCollision(serviceId) {
  sdk.removeEventListener({
    profile: 'sphero',
    interface: 'collision',
    attribute: 'oncollision',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to remove event listener');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ',  errorMessage=' + e.errorMessage);
  });
}
