/**
 poseEstimation.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

  let btnStr = getBackButton('Device Top', 'doPoseEstimationBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showPoseEstimation(\'' +
          serviceId + '\');">PoseEstimation</a></li>';
  reloadList(str);
}

function showPoseEstimation(serviceId) {
  initAll();
  setTitle('PoseEstimation');

  let btnStr = getBackButton('PoseEstimation Top', 'doPoseEstimationAllBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  let str = '';
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
  closeLoading();
  showLoading();

  sdk.get({
    profile:'poseEstimation',
    attribute: 'onPoseEstimation',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    showResponsePose(json);
  }).catch(e => {
    closeLoading();
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doRegisterPoseEstimation(serviceId) {
  let intervalParam = $('#interval').val();
  let params = {
    profile:'poseEstimation',
    attribute: 'onPoseEstimation',
    params: {
      serviceId: serviceId
    }
  };
  if (intervalParam !== '') {
    pararms.params['interval'] = intervalParam;
  }

  sdk.addEventListener(params, message => {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    showResponsePose(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function unregisterPoseEstimation(serviceId) {
  sdk.removeEventListener({
    profile:'poseEstimation',
    attribute: 'onPoseEstimation',
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

function doPoseEstimationBack(serviceId) {
  searchDevice(serviceId);
}

function doPoseEstimationAllBack(serviceId) {
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
