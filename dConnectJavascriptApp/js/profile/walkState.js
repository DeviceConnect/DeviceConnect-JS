/**
 walkState.js
 Copyright (c) 2016 NTT DOCOMO,INC.
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

  var btnStr = getBackButton('Device Top', 'doWalkStateBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showWalkState(\'' +
          serviceId + '\');">WalkState</a></li>';
  reloadList(str);
}

function showWalkState(serviceId) {
  initAll();
  setTitle('WalkState');

  var btnStr = getBackButton('WalkState Top', 'doWalkStateAllBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  var str = '';
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
  var builder = new dConnect.URIBuilder();
  builder.setProfile('walkState');
  builder.setAttribute('onWalkState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    closeLoading();
    showResponseWalk(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doRegisterWalkState(serviceId) {
  var intervalParam = $('#interval').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('walkState');
  builder.setAttribute('onWalkState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (intervalParam !== '') {
    builder.addParameter('interval', intervalParam);
  }

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    var json = JSON.parse(message);
    showResponseWalk(json);
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function unregisterWalkState(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('walkState');
  builder.setAttribute('onWalkState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.removeEventListener(uri, function() {
    if (DEBUG) {
      console.log('Success to remove event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doWalkStateBack(serviceId) {
  searchDevice(serviceId);
}

function doWalkStateAllBack(serviceId, sessionKey) {
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