/**
 phone.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Phone Menu
 *
 * @param {String}serviceId サービスID
 */
function showPhone(serviceId) {

  initAll();

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'doMediaplayerBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Phone Profile');

  let str = '';
  str += '<li><a href="javascript:showPhoneCall(\'' + serviceId +
          '\');" value="Call">Call</a></li>';
  str += '<li><a href="javascript:showPhoneSetting(\'' + serviceId +
          '\');" value="Setting">Setting</a></li>';
  reloadList(str);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doPhoneCallBack(serviceId) {
  showPhone(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doPhoneSetBack(serviceId) {
  showPhone(serviceId);
}

/**
 * Call
 *
 * @param {String} serviceId サービスID
 */
function showPhoneCall(serviceId) {
  initAll();

  setTitle('Phone Profile (Call)');

  let btnStr = '';
  btnStr += getBackButton('Phone TOP', 'doPhoneCallBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<label for="callStateGet">Call State (Get):</label>';
  str += '<div data-role="controlgroup" data-type="horizontal">';
  str += '  <input type="text" id="callStateGet" data-wrapper-class="controlgroup-textinput ui-btn">';
  str += '  <button onclick="javascript:getCallState(\'' + serviceId + '\')">Get</button>';
  str += '</div>';
  str += '<label for="callStateEvent">Call State (Event):</label>';
  str += '  <div data-role="controlgroup" data-type="horizontal">';
  str += '  <input type="text" id="callStateEvent" data-wrapper-class="controlgroup-textinput ui-btn">';
  str += '  <button onclick="javascript:registerCallStateEvent(\'' + serviceId + '\')">Register</button>';
  str += '  <button onclick="javascript:unregisterCallStateEvent(\'' + serviceId + '\')">Unregister</button>';
  str += '</div>';
  str += '<label for="phoneNumber">Phone Number:</label>';
  str += '<div data-role="controlgroup" data-type="horizontal">';
  str += '  <input type="text" id="phoneNumber" data-wrapper-class="controlgroup-textinput ui-btn">';
  str += '  <button onclick="javascript:acceptCall(\'' + serviceId + '\')">Accept</button>';
  str += '  <button onclick="javascript:rejectCall(\'' + serviceId + '\')">Reject</button>';
  str += '  <button onclick="javascript:endCall(\'' + serviceId + '\')">End</button>';
  str += '  <button onclick="javascript:doPhoneCall(\'' + serviceId + '\')">Call</button>';
  str += '</div>';
  reloadContent(str);
}

function getCallState(serviceId) {
  sdk.get({
    profile: 'phone',
    attribute: 'callState',
    params: {
      serviceId: serviceId,
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    if (json.state) {
      $('#callStateGet').val(json.state);
    }
    if (json.phoneNumber) {
      $('#phoneNumber').val(json.phoneNumber);
    }
  }).catch(e => {
    showError('phone/callState', e.errorCode, e.errorMessage);
  });
}

function registerCallStateEvent(serviceId) {
  sdk.addEventListener({
    profile: 'phone',
    attribute: 'onCallStateChange',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    let json = JSON.parse(message);
    if (json.state) {
      $('#callStateEvent').val(json.state);
    }
    if (json.phoneNumber) {
      $('#phoneNumber').val(json.phoneNumber);
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

function unregisterCallStateEvent(serviceId) {
  sdk.removeEventListener({
    profile: 'phone',
    attribute: 'onCallStateChange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

function acceptCall(serviceId) {
  let phoneNumber = $('#phoneNumber').val();
  let params = {
    profile: 'phone',
    attribute: 'acceptCall',
    params: {
      serviceId: serviceId
    }
  };
  if (phoneNumber !== '') {
    params['phoneNumber'] = phoneNumber;
  }
  sdk.post(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('phone/acceptCall', e.errorCode, e.errorMessage);
  });
}

function rejectCall(serviceId) {
  let phoneNumber = $('#phoneNumber').val();
  let params = {
    profile: 'phone',
    attribute: 'rejectCall',
    params: {
      serviceId: serviceId
    }
  };
  if (phoneNumber !== '') {
    params.params['phoneNumber'] = phoneNumber;
  }

  sdk.post(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('phone/rejectCall', e.errorCode, e.errorMessage);
  });
}

function endCall(serviceId) {
  let phoneNumber = $('#phoneNumber').val();
  let params = {
    profile: 'phone',
    attribute: 'endCall',
    params: {
      serviceId: serviceId
    }
  };
  if (phoneNumber !== '') {
    params.params['phoneNumber'] = phoneNumber;
  }
  sdk.post(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('phone/endCall', e.errorCode, e.errorMessage);
  });

}

/**
 * Phone profile<br>
 * Setting
 *
 * @param {String} serviceId サービスID
 */
function showPhoneSetting(serviceId) {

  initAll();

  setTitle('Phone Profile(Set)');

  let btnStr = '';
  btnStr += getBackButton('Phone TOP', 'doPhoneSetBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form action="" method="POST" name="phoneForm">';
  str += '<SELECT name="mode" id="mode">'
  str += '<OPTION value="0">Silent Mode</OPTION>'
  str += '<OPTION value="1">Vibration Mode</OPTION>'
  str += '<OPTION value="2">Normal Mode</OPTION>'
  str += '</SELECT>'
  str += '</form>';
  str += '<input onclick="javascript:doPhoneSet(\'' +
        serviceId + '\');" type="button" value="Set"/>';
  reloadContent(str);
}

/**
 * phone call
 */
function doPhoneCall(serviceId) {

  let phoneNumber = $('#phoneNumber').val();
  sdk.post({
    profile: 'phone',
    attribute: 'call',
    params: {
      serviceId: serviceId,
      phoneNumber: phoneNumber
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('phone/call', e.errorCode, e.errorMessage);
  });
}

/**
 * phone set
 * @param {String} serviceId サービスID
 */
function doPhoneSet(serviceId) {
  let modeValue = $('#mode').val();
  body = 'mode=' + modeValue;
  sdk.put({
    profile: 'phone',
    attribute: 'set',
    params: {
      serviceId: serviceId,
      mode: modeValue
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('success:change mode');
  }).catch(e => {
    showError('phone/set', e.errorCode, e.errorMessage);
  });
}
