/**
 walkState.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show WalkState Menu
 *
 * @param {String} serviceId サービスID
 */
function showWalkStateProfile(serviceId) {
  initAll();
  setTitle('WalkState Profile');

  let btnStr = getBackButton('Device Top', 'doWalkStateBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showWalkState(\'' +
          serviceId + '\');">WalkState</a></li>';
  reloadList(str);
}

function showWalkState(serviceId) {
  initAll();
  setTitle('WalkState');

  let btnStr = getBackButton('WalkState Top', 'doWalkStateAllBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  let str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get WalkState"' +
        ' onclick="javascript:doGetWalkState(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterWalkState(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterWalkState(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>WalkState</h2>';
  str += makeInputText('Step', 'walkStateStep', 'walkStateStep');
  str += makeInputText('State', 'walkState', 'walkState');
  str += makeInputText('Speed', 'walkStateSpeed', 'walkStateSpeed');
  str += makeInputText('Distance', 'walkStateDistance', 'walkStateDistance');
  str += makeInputText('Balance', 'walkStateBalance', 'walkStateBalance');
  str += makeInputText('TimeStamp', 'walkStateTimeStamp', 'walkStateTimeStamp');
  str += makeInputText('TimeStampString', 'walkStateTimeStampString', 'walkStateTimeStampString');

  reloadContent(str);
}

function doGetWalkState(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'walkState',
    attribute: 'onWalkState',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    showResponseWalk(json);
  }).catch(e => {
    closeLoading();
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doRegisterWalkState(serviceId) {
  let intervalParam = $('#interval').val();
  let params = {
    profile: 'walkState',
    attribute: 'onWalkState',
    params: {
      serviceId: serviceId
    }
  };
  if (intervalParam !== '') {
    params.params['interval'] = intervalParam;
  }
  sdk.addEventListener(params, message => {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    showResponseWalk(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function unregisterWalkState(serviceId) {
  sdk.removeEventListener({
    profile: 'walkState',
    attribute: 'onWalkState',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Success to remove event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doWalkStateBack(serviceId) {
  searchDevice(serviceId);
}

function doWalkStateAllBack(serviceId) {
  showWalkStateProfile(serviceId);
}


function showResponseWalk(json) {
  // WalkState
  if (json.walk) {
    $('#walkStateStep').val(json.walk.step);
    $('#walkState').val(json.walk.state);
    $('#walkStateSpeed').val(json.walk.speed);
    $('#walkStateDistance').val(json.walk.distance);
    $('#walkStateBalance').val(json.walk.balance);
    $('#walkStateTimeStamp').val(json.walk.timeStamp);
    $('#walkStateTimeStampString').val(json.walk.timeStampString);
  }
}
