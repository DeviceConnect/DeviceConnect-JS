/**
 phone.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doMediaplayerBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Phone Profile');

  var str = '';
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
 * @param {String} sessionKey セッションKEY
 */
function doPhoneCallBack(serviceId, sessionKey) {
  showPhone(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doPhoneSetBack(serviceId, sessionKey) {
  showPhone(serviceId);
}

/**
 * Call
 *
 * @param {String} serviceId サービスID
 */
function showPhoneCall(serviceId) {
  var sessionKey = currentClientId;

  initAll();

  setTitle('Phone Profile (Call)');

  var btnStr = '';
  btnStr += getBackButton('Phone TOP', 'doPhoneCallBack',
                      serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = ''; 
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

  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });

}

function getCallState(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('callState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    if (json.state) {
      $('#callStateGet').val(json.state);
    }
    if (json.phoneNumber) {
      $('#phoneNumber').val(json.phoneNumber);
    }
  }, function(errorCode, errorMessage) {
    showError('phone/callState', errorCode, errorMessage);
  });
}

function registerCallStateEvent(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('onCallStateChange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
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
    if (json.state) {
      $('#callStateEvent').val(json.state);
    }
    if (json.phoneNumber) {
      $('#phoneNumber').val(json.phoneNumber);
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

function unregisterCallStateEvent(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('onCallStateChange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }
  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

function acceptCall(serviceId) {
  var phoneNumber = $('#phoneNumber').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('acceptCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (phoneNumber !== '') {
    builder.addParameter('phoneNumber', phoneNumber);
  }
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('phone/acceptCall', errorCode, errorMessage);
  });
}

function rejectCall(serviceId) {
  var phoneNumber = $('#phoneNumber').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('rejectCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (phoneNumber !== '') {
    builder.addParameter('phoneNumber', phoneNumber);
  }
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('phone/rejectCall', errorCode, errorMessage);
  });
}

function endCall(serviceId) {
  var phoneNumber = $('#phoneNumber').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('endCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (phoneNumber !== '') {
    builder.addParameter('phoneNumber', phoneNumber);
  }
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('phone/endCall', errorCode, errorMessage);
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

  var btnStr = '';
  btnStr += getBackButton('Phone TOP', 'doPhoneSetBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
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

  var phoneNumber = $('#phoneNumber').val();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('call');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('phoneNumber', phoneNumber);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('phone/call', errorCode, errorMessage);
  });
}

/**
 * phone set
 * @param {String} serviceId サービスID
 */
function doPhoneSet(serviceId) {
  var modeValue = $('#mode').val();
  body = 'mode=' + modeValue;

  var builder = new dConnect.URIBuilder();
  builder.setProfile('phone');
  builder.setAttribute('set');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('mode', modeValue);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert('success:change mode');
  }, function(errorCode, errorMessage) {
    showError('phone/call', errorCode, errorMessage);
  });
}
