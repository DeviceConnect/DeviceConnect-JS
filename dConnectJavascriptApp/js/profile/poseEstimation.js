/**
 poseEstimation.js
 Copyright (c) 2016 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show PoseEstimation Menu
 *
 * @param {String} serviceId サービスID
 */
function showPoseEstimationProfile(serviceId) {
  initAll();
  setTitle('PoseEstimation Profile');

  var btnStr = getBackButton('Device Top', 'doPoseEstimationBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showPoseEstimation(\'' +
          serviceId + '\');">PoseEstimation</a></li>';
  reloadList(str);
}

function showPoseEstimation(serviceId) {
  initAll();
  setTitle('PoseEstimation');

  var btnStr = getBackButton('PoseEstimation Top', 'doPoseEstimationAllBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  var str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get PoseEstimation"' +
        ' onclick="javascript:doGetPoseEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterPoseEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterPoseEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>PoseEstimation</h2>';
  str += makeInputText('State', 'poseEstimationState', 'poseEstimationState');
  str += makeInputText('TimeStamp', 'poseEstimationTimeStamp', 'poseEstimationTimeStamp');
  str += makeInputText('TimeStampString', 'poseEstimationTimeStampString', 'poseEstimationTimeStampString');

  reloadContent(str);
}

function doGetPoseEstimation(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('poseEstimation');
  builder.setAttribute('onPoseEstimation');
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
    showResponsePose(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function doRegisterPoseEstimation(serviceId) {
  var intervalParam = $('#interval').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('poseEstimation');
  builder.setAttribute('onPoseEstimation');
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
    showResponsePose(json);
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }, function(errorCode, errorMessage) {
    alert("errorCode=" + errorCode + ", errorMessage=" + errorMessage);
  });
}

function unregisterPoseEstimation(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('poseEstimation');
  builder.setAttribute('onPoseEstimation');
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

function doPoseEstimationBack(serviceId) {
  searchDevice(serviceId);
}

function doPoseEstimationAllBack(serviceId, sessionKey) {
  showPoseEstimationProfile(serviceId);
}


function showResponsePose(json) {
  // PoseEstimation
  if (json.pose) {
    $('#poseEstimationState').val(json.pose.state);
    $('#poseEstimationTimeStamp').val(json.pose.timeStamp);
    $('#poseEstimationTimeStampString').val(json.pose.timeStampString);
  }
}