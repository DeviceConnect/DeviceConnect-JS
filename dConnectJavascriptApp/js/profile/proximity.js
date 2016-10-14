/**
 proximity.js
 Copyright (c) 2016 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Proximity Profile
 *
 * @param {String} serviceId service ID
 */
function showProximity(serviceId) {
  initAll();

  setTitle('Proximity Profile');
  var btnStr = getBackButton('Device Top', 'doProximityBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showUserProximity(\'' + serviceId +
         '\');" value="Setting">user proximity</a></li>';

  str += '<li><a href="javascript:showDeviceProximity(\'' + serviceId +
         '\');" value="Call">device proximity</a></li>';

  reloadList(str);
}

/**
 * Show Device Proximity
 *
 * @param {String}serviceId service ID
 */
function showDeviceProximity(serviceId) {
  initAll();
  setTitle('Device Proximity');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Proximity Top', 'doDeviceProximityBack',
                    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<div>';

  str += '<input data-icon="search" onclick="doGetDeviceProximity(\'' +
         serviceId + '\')" type="button" value="Get" />';
  str += '</div>';

  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a">';
  str += '<input data-icon="search" onclick="doRegisterDeviceProximity(\'' +
          serviceId + '\', \'' + sessionKey + '\')" type="button" value="Register" />';
  str += '</div>';
  str += '<div class="ui-block-b">';
  str += '<input data-icon="search" onclick="doUnregisterDeviceProximity(\'' +
          serviceId + '\', \'' +  sessionKey + '\')" type="button" value="Unregister" />';
  str += '</div>';
  str += '</fieldset>';

  str += '<strong>device proximity</strong><br>';

  str += '<form  name="deviceProximityForm">';
  str += '<label>value</label>';
  str += '<input type="text" id="value" />';
  str += '<label>min</label>';
  str += '<input type="text" id="min" />';
  str += '<label>max</label>';
  str += '<input type="text" id="max" />';
  str += '<label>threshold</label>';
  str += '<input type="text" id="threshold" />';
  str += '<label>range</label>';
  str += '<input type="text" id="range" />';
  str += '</form>';
  str += '<hr>';

  reloadContent(str);
}

/**
 * Show User Proximity
 *
 * @param {String}serviceId service ID
 */
function showUserProximity(serviceId) {
  initAll();
  setTitle('User Proximity');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Proximity Top', 'doUserProximityBack',
                      serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<div>';
  str += '<input data-icon="search" onclick="doGetUserProximity(\'' +
          serviceId + '\')" type="button" value="Get" />';
  str += '</div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a">';
  str += '<input data-icon="search" onclick="doRegisterUserProximity(\'' +
          serviceId + '\', \'' +  sessionKey + '\')" type="button" value="Register" />';
  str += '</div>';
  str += '<div class="ui-block-b">';
  str += '<input data-icon="search" onclick="doUnregisterUserProximity(\'' +
          serviceId + '\', \'' + sessionKey + '\')" type="button" value="Unregister" />';
  str += '</div>';
  str += '</fieldset>';

  str += 'user proximity<br>';
  str += '<form  name="userProximityForm">';
  str += '<input type="text" id="user" width="100%">';
  str += '</form>';

  reloadContent(str);
}

/**
 * Menu Back button
 *
 * serviceId {String} service ID
 * sessionKey {String} session Key
 */
function doProximityBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * User Proximity Back Button
 *
 * serviceId {String} service ID
 * sessionKey {String} session Key
 */
function doUserProximityBack(serviceId, sessionKey) {
  showProximity(serviceId);
  doUnregisterUserProximity(serviceId, sessionKey);
}

/**
 * User Proximity Back Button
 *
 * serviceId {String} service ID
 * sessionKey {String} session Key
 */
function doDeviceProximityBack(serviceId, sessionKey) {
  showProximity(serviceId);
  doUnregisterDeviceProximity(serviceId, sessionKey);
}

/**
 * Get Proximity
 * @param {String} serviceId service ID
 */
function doGetDeviceProximity(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('proximity');
  builder.setAttribute('ondeviceproximity');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' +  uri); }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) { console.log('result:' +  json); }
    alert(JSON.stringify(json));
    if (json.proximity) {
      $('#value').val(json.proximity.value);
      $('#min').val(json.proximity.min);
      $('#max').val(json.proximity.max);
      $('#threshold').val(json.proximity.threshold);
      $('#range').val(json.proximity.range);
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' +  errorCode + ' errorMessage=' +  errorMessage);
  });
}

/**
 * Register Device Proximity Event
 *
 * @param {String} serviceId {String} service ID
 * @param {String} sessionKey {String} session Key
 */
function doRegisterDeviceProximity(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('proximity');
  builder.setAttribute('ondeviceproximity');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' +  uri); }
  dConnect.addEventListener(uri, function(message) {
    if (DEBUG) { console.log('Event-Message:' +  message); }
    var json = JSON.parse(message);
    if (json.proximity) {
      $('#value').val(json.proximity.value);
      $('#min').val(json.proximity.min);
      $('#max').val(json.proximity.max);
      $('#threshold').val(json.proximity.threshold);
      $('#range').val(json.proximity.range);
    }
  }, function() {
    if (DEBUG) { console.log('Success to register proximity'); }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' +  errorCode + ' errorMessage=' +  errorMessage);
  });
}

/**
 * Delete Device Proximity Event
 *
 * @param {String} serviceId service ID
 * @param {String} sessionKey session Key
 */
function doUnregisterDeviceProximity(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('proximity');
  builder.setAttribute('ondeviceproximity');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' +  uri); }
  dConnect.removeEventListener(uri, function() {
    if (DEBUG) { console.log('Success to unregister proximity'); }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' +  errorCode + ' errorMessage=' +  errorMessage);
  });
}

function doGetUserProximity(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('proximity');
  builder.setAttribute('onuserproximity');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' +  uri); }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) { console.log('Response:' +  json); }
    alert(JSON.stringify(json));
    if (json.proximity) {
      $('#user').val(json.proximity.near);
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' +  errorCode + ' errorMessage=' +  errorMessage);
  });
}

/**
 * Register User Proximity Event
 *
 * @param {String} serviceId service ID
 * @param {String} sessionKey session Key
 */
function doRegisterUserProximity(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('proximity');
  builder.setAttribute('onuserproximity');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' +  uri); }
  dConnect.addEventListener(uri, function(message) {
    if (DEBUG) { console.log('Event-Message:' +  message); }
    var json = JSON.parse(message);
    if (json.proximity) {
      $('#user').val(json.proximity.near);
    }
  }, function() {
    if (DEBUG) { console.log('Success to register proximity'); }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' +  errorCode + ' errorMessage=' +  errorMessage);
  });
}

/**
 * Delete User Proximity Event
 *
 * @param {String} serviceId service ID
 * @param {String} sessionKey session Key
 */
function doUnregisterUserProximity(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('proximity');
  builder.setAttribute('onuserproximity');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' +  uri); }
  dConnect.removeEventListener(uri, function() {
    if (DEBUG) { console.log('Success to unregister proximity'); }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' +  errorCode + ' errorMessage=' +  errorMessage);
  });
}
