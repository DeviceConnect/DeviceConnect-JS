/**
 keyevent.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Key Event
 */
function showKeyEvent(serviceId) {
  initAll();
  setTitle('Key Event Profile(Event)');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showOnDown(\'' + serviceId +
            '\');" >Show Key(onDown)</a></li>';
  str += '<li><a href="javascript:showOnUp(\'' + serviceId +
            '\');" >Show Key(onUp)</a></li>';
  str += '<li><a href="javascript:showOnKeyChange(\'' + serviceId +
            '\');" >Show Key(onKeyChange)</a></li>';
  str += '<li><a href="javascript:showDownEvent(\'' + serviceId +
            '\');" >Key Event(onDown)</a></li>';
  str += '<li><a href="javascript:showUpEvent(\'' + serviceId +
            '\');" >Key Event(onUp)</a></li>';
  str += '<li><a href="javascript:showKeyChangeEvent(\'' + serviceId +
            '\');" >Key Event(onKeyChange)</a></li>';
  reloadList(str);
}

/**
 * Show OnKeyChange
 *
 * @param {String}serviceId サービスID
 */
function showOnKeyChange(serviceId) {
  initAll();
  setTitle('Show Key Change');

  let btnStr = getBackButton('KeyEvent Top', 'doKeyBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="onkeychangeForm">';
  str += 'KeyChange<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnKeyChange(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="state" width="100%">';
  str += '<input type="text" id="idDU" width="100%">';
  str += '<input type="text" id="configDU" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnKeyChange
 *
 * @param {String}serviceId サービスID
 */
function doGetOnKeyChange(serviceId) {
  sdk.get({
    profile: 'keyevent',
    attribute: 'onkeychange',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idDU').val('');
    $('#configDU').val('');
    $('#state').val('');
    if (json.keyevent) {
      $('#state').val('State :' + json.keyevent.state);
      $('#idDU').val('KeyID: ' + json.keyevent.id);
      $('#configDU').val('config: ' + json.keyevent.config);
    }
  }).catch(e => {
    showError('GET onkeychange', e.errorCode, e.errorMessage);
  });
}

/**
 * Show Key Change Event
 *
 * @param {String}serviceId サービスID
 */
function showKeyChangeEvent(serviceId) {
  initAll();
  setTitle('Key Change Event');

  let btnStr = getBackButton('KeyEvent Top', 'doKeyChangeEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="keyChangeForm">';
  str += 'KeyChange<br>';
  str += '<input type="text" id="state" width="100%">';
  str += '<input type="text" id="idD" width="100%">';
  str += '<input type="text" id="configD" width="100%">';
  str += '</form>';
  str += '<hr>';
  str += '<div>イベント登録状態: <span id="statusOnKeyChange"></span></div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><button id="btnRegisterOnKeyChange">登録</button></div>';
  str += '<div class="ui-block-b"><button id="btnUnegisterOnKeyChange">解除</button></div>';
  str += '</fieldset>';
  reloadContent(str);

  $('#btnRegisterOnKeyChange').on('click', function() {
    doKeyChangeRegister(serviceId);
  });
  $('#btnUnegisterOnKeyChange').on('click', function() {
    doKeyChangeUnregister(serviceId);
  });

  doKeyChangeRegister(serviceId);
}

/**
 * Show OnDown
 *
 * @param {String}serviceId サービスID
 */
function showOnDown(serviceId) {
  initAll();
  setTitle('Show Down');

  let btnStr = getBackButton('KeyEvent Top', 'doKeyBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="ondownForm">';
  str += 'Down<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnDown(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idD" width="100%">';
  str += '<input type="text" id="configD" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnDown
 *
 * @param {String}serviceId サービスID
 */
function doGetOnDown(serviceId) {
  sdk.get({
    profile: 'keyevent',
    attribute: 'ondown',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idD').val('');
    $('#configD').val('');

    if (json.keyevent) {
      $('#idD').val('KeyID: ' + json.keyevent.id);
      $('#configD').val('config: ' + json.keyevent.config);
    }
  }).catch(e => {
    showError('GET ondown', e.errorCode, e.errorMessage);
  });
}

/**
 * Show Down Event
 *
 * @param {String}serviceId サービスID
 */
function showDownEvent(serviceId) {
  initAll();
  setTitle('Down Event');
  let btnStr = getBackButton('KeyEvent Top', 'doDownEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="downForm">';
  str += 'Down<br>';
  str += '<input type="text" id="idD" width="100%">';
  str += '<input type="text" id="configD" width="100%">';
  str += '</form>';
  str += '<hr>';
  str += '<div>イベント登録状態: <span id="statusOnDown"></span></div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><button id="btnRegisterOnDown">登録</button></div>';
  str += '<div class="ui-block-b"><button id="btnUnegisterOnDown">解除</button></div>';
  str += '</fieldset>';
  reloadContent(str);

  $('#btnRegisterOnDown').on('click', function() {
    doDownRegister(serviceId);
  });
  $('#btnUnegisterOnDown').on('click', function() {
    doDownUnregister(serviceId);
  });

  doDownRegister(serviceId);
}

/**
 * Show OnUp
 *
 * @param {String}serviceId サービスID
 */
function showOnUp(serviceId) {
  initAll();
  setTitle('Show Up');
  let btnStr = getBackButton('KeyEvent Top', 'doKeyBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="onupForm">';
  str += 'Up<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnUp(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idU" width="100%">';
  str += '<input type="text" id="configU" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnUp
 *
 * @param {String}serviceId サービスID
 */
function doGetOnUp(serviceId) {
  sdk.get({
    profile: 'keyevent',
    attribute: 'onup',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    $('#idU').val('');
    $('#configU').val('');

    if (json.keyevent) {
      $('#idU').val('KeyID: ' + json.keyevent.id);
      $('#configU').val('config: ' + json.keyevent.config);
    }
  }).catch(e => {
    showError('GET ondown', e.errorCode, e.errorMessage);
  });
}

/**
 * Show Up Event
 *
 * @param {String}serviceId サービスID
 */
function showUpEvent(serviceId) {
  initAll();
  setTitle('Up Event');

  let btnStr = getBackButton('KeyEvent Top', 'doUpEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="upForm">';
  str += 'Up<br>';
  str += '<input type="text" id="idU" width="100%">';
  str += '<input type="text" id="configU" width="100%">';
  str += '</form>';
  str += '<hr>';
  str += '<div>イベント登録状態: <span id="statusOnUp"></span></div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><button id="btnRegisterOnUp">登録</button></div>';
  str += '<div class="ui-block-b"><button id="btnUnegisterOnUp">解除</button></div>';
  str += '</fieldset>';
  reloadContent(str);

  $('#btnRegisterOnUp').on('click', function() {
    doUpRegister(serviceId);
  });
  $('#btnUnegisterOnUp').on('click', function() {
    doUpUnregister(serviceId);
  });

  doUpRegister(serviceId);
}


/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doKeyBack(serviceId) {
  showKeyEvent(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doDownEventBack(serviceId) {
  doDownUnregister(serviceId);
  showKeyEvent(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doUpEventBack(serviceId) {
  doUpUnregister(serviceId);
  showKeyEvent(serviceId);
}
/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doKeyChangeEventBack(serviceId) {
  doKeyChangeUnregister(serviceId);
  showKeyEvent(serviceId);
}
/**
 * Key Change Event Register.
 */
function doKeyChangeRegister(serviceId) {
  $('#statusOnKeyChange').text('登録処理中...');
  sdk.addEventListener({
    profile: 'keyevent',
    attribute: 'onkeychange',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    let json = JSON.parse(message);
    if (json.keyevent) {
      $('#state').val('State: ' + json.keyevent.state);
      $('#idD').val('KeyID: ' + json.keyevent.id);
      $('#configD').val('config: ' + json.keyevent.config);
    }
  }).then(json => {
    $('#statusOnKeyChange').text('登録済み');
  }).catch(e => {
    $('#statusOnKeyChange').text('登録失敗');
    alert(e.errorMessage);
  });
}
/**
 * Down Event Register.
 */
function doDownRegister(serviceId) {
  $('#statusOnDown').text('登録処理中...');
  sdk.addEventListener({
    profile: 'keyevent',
    attribute: 'ondown',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    let json = JSON.parse(message);
    if (json.keyevent) {
      $('#idD').val('KeyID: ' + json.keyevent.id);
      $('#configD').val('config: ' + json.keyevent.config);
    }
  }).then(json => {
    $('#statusOnDown').text('登録済み');
  }).catch(e =>  {
    $('#statusOnDown').text('登録失敗');
    alert(e.errorMessage);
  });
}

/**
 * Up Event Register.
 */
function doUpRegister(serviceId) {
  $('#statusOnUp').text('登録処理中...');
  sdk.addEventListener({
    profile: 'keyevent',
    attribute: 'onup',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.keyevent) {
      $('#idU').val('KeyID: ' + json.keyevent.id);
      $('#configU').val('config: ' + json.keyevent.config);
    }
  }).then(json => {
    $('#statusOnUp').text('登録済み');
  }).catch(e => {
    $('#statusOnUp').text('登録失敗');
    alert(e.errorMessage);
  });
}

/**
 * Key Change Event Unregist
 */
function doKeyChangeUnregister(serviceId) {
  $('#statusOnKeyChange').text('解除処理中...');
  sdk.removeEventListener({
    profile: 'keyevent',
    attribute: 'onkeychange',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    $('#statusOnKeyChange').text('解除済み');
  }).catch(e => {
    $('#statusOnKeyChange').text('解除失敗');
    alert(e.errorMessage);
  });
}

/**
 * Down Event Unregist
 */
function doDownUnregister(serviceId) {
  $('#statusOnDown').text('解除処理中...');
  sdk.removeEventListener({
    profile: 'keyevent',
    attribute: 'ondown',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    $('#statusOnDown').text('解除済み');
  }).catch(e => {
    $('#statusOnDown').text('解除失敗');
    alert(e.errorMessage);
  });
}

/**
 * Up Event Unregist
 */
function doUpUnregister(serviceId) {
  $('#statusOnUp').text('解除処理中...');
  sdk.removeEventListener({
    profile: 'keyevent',
    attribute: 'onup',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    $('#statusOnUp').text('解除済み');
  }).catch(e => {
    $('#statusOnUp').text('解除失敗');
    alert(e.errorMessage);
  });
}
