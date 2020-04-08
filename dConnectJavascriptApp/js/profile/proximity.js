/**
 proximity.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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
  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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

  let btnStr = getBackButton('Proximity Top', 'doDeviceProximityBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';

  str += '<input data-icon="search" onclick="doGetDeviceProximity(\'' +
         serviceId + '\')" type="button" value="Get" />';
  str += '</div>';

  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a">';
  str += '<input data-icon="search" onclick="doRegisterDeviceProximity(\'' +
          serviceId + '\')" type="button" value="Register" />';
  str += '</div>';
  str += '<div class="ui-block-b">';
  str += '<input data-icon="search" onclick="doUnregisterDeviceProximity(\'' +
          serviceId + '\')" type="button" value="Unregister" />';
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

  let btnStr = getBackButton('Proximity Top', 'doUserProximityBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '<input data-icon="search" onclick="doGetUserProximity(\'' +
          serviceId + '\')" type="button" value="Get" />';
  str += '</div>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a">';
  str += '<input data-icon="search" onclick="doRegisterUserProximity(\'' +
          serviceId + '\')" type="button" value="Register" />';
  str += '</div>';
  str += '<div class="ui-block-b">';
  str += '<input data-icon="search" onclick="doUnregisterUserProximity(\'' +
          serviceId + '\')" type="button" value="Unregister" />';
  str += '</div>';
  str += '</fieldset>';

  str += 'user proximity<br>';
  str += '<form  name="userProximityForm">';
  str += '<input type="text" id="user" width="100%">';
  str += '</form>';

  reloadContent(str);
}

/**
 * User Proximity Back Button
 *
 * serviceId {String} service ID
 */
function doUserProximityBack(serviceId) {
  showProximity(serviceId);
  doUnregisterUserProximity(serviceId);
}

/**
 * User Proximity Back Button
 *
 * serviceId {String} service ID
 */
function doDeviceProximityBack(serviceId) {
  showProximity(serviceId);
  doUnregisterDeviceProximity(serviceId);
}

/**
 * Get Proximity
 * @param {String} serviceId service ID
 */
function doGetDeviceProximity(serviceId) {
  sdk.get({
    profile: 'proximity',
    attribute: 'ondeviceproximity',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) { console.log('result:' +  json); }
    alert(JSON.stringify(json));
    if (json.proximity) {
      $('#value').val(json.proximity.value);
      $('#min').val(json.proximity.min);
      $('#max').val(json.proximity.max);
      $('#threshold').val(json.proximity.threshold);
      $('#range').val(json.proximity.range);
    }
  }).catch(e => {
    alert('errorCode=' +  e.errorCode + ' errorMessage=' +  e.errorMessage);
  });
}

/**
 * Register Device Proximity Event
 *
 * @param {String} serviceId {String} service ID
 */
function doRegisterDeviceProximity(serviceId) {
  sdk.addEventListener({
    profile: 'proximity',
    attribute: 'ondeviceproximity',
    params: {
      serviceId: serviceId
    }
  }, message => {
    if (DEBUG) { console.log('Event-Message:' +  message); }
    let json = JSON.parse(message);
    if (json.proximity) {
      $('#value').val(json.proximity.value);
      $('#min').val(json.proximity.min);
      $('#max').val(json.proximity.max);
      $('#threshold').val(json.proximity.threshold);
      $('#range').val(json.proximity.range);
    }
  }).then(json => {
    if (DEBUG) { console.log('Success to register proximity'); }
  }).catch(e => {
    alert('errorCode=' +  e.errorCode + ' errorMessage=' +  e.errorMessage);
  });
}

/**
 * Delete Device Proximity Event
 *
 * @param {String} serviceId service ID
 */
function doUnregisterDeviceProximity(serviceId) {
  sdk.removeEventListener({
    profile: 'proximity',
    attribute: 'ondeviceproximity',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) { console.log('Success to unregister proximity'); }
  }).catch(e => {
    alert('errorCode=' +  e.errorCode + ' errorMessage=' +  e.errorMessage);
  });
}

function doGetUserProximity(serviceId) {
  sdk.get({
    profile: 'proximity',
    attribute: 'onuserproximity',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) { console.log('Response:' +  json); }
    alert(JSON.stringify(json));
    if (json.proximity) {
      $('#user').val(json.proximity.near);
    }
  }).catch(e => {
    alert('errorCode=' +  e.errorCode + ' errorMessage=' +  e.errorMessage);
  });
}

/**
 * Register User Proximity Event
 *
 * @param {String} serviceId service ID
 */
function doRegisterUserProximity(serviceId) {
  sdk.addEventListener({
    profile: 'proximity',
    attribute: 'onuserproximity',
    params: {
      serviceId: serviceId
    }
  }, message => {
    if (DEBUG) { console.log('Event-Message:' +  message); }
    let json = JSON.parse(message);
    if (json.proximity) {
      $('#user').val(json.proximity.near);
    }
  }).then(json => {
    if (DEBUG) { console.log('Success to register proximity'); }
  }).catch(e => {
    alert('errorCode=' +  e.errorCode + ' errorMessage=' +  e.errorMessage);
  });
}

/**
 * Delete User Proximity Event
 *
 * @param {String} serviceId service ID
 */
function doUnregisterUserProximity(serviceId) {
  sdk.removeEventListener({
    profile: 'proximity',
    attribute: 'onuserproximity',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) { console.log('Success to unregister proximity'); }
  }).catch(e => {
    alert('errorCode=' +  e.errorCode + ' errorMessage=' +  e.errorMessage);
  });
}
