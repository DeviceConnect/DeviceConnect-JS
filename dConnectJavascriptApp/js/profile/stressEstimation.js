/**
 stressEstimation.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show StressEstimation Menu
 *
 * @param {String} serviceId サービスID
 */
function showStressEstimationProfile(serviceId) {
  initAll();
  setTitle('StressEstimation Profile');

  let btnStr = getBackButton('Device Top', 'doStressEstimationBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showStressEstimation(\'' +
          serviceId + '\');">StressEstimation</a></li>';
  reloadList(str);
}

function showStressEstimation(serviceId) {
  initAll();
  setTitle('StressEstimation');

  let btnStr = getBackButton('StressEstimation Top', 'doStressEstimationAllBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  let str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get StressEstimation"' +
        ' onclick="javascript:doGetStressEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterStressEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterStressEstimation(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>StressEstimation</h2>';
  str += makeInputText('LFHF', 'stressEstimationLFHF', 'stressEstimationLFHF');
  str += makeInputText('TimeStamp', 'stressEstimationTimeStamp', 'stressEstimationTimeStamp');
  str += makeInputText('TimeStampString', 'stressEstimationTimeStampString', 'stressEstimationTimeStampString');

  reloadContent(str);
}

function doGetStressEstimation(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'stressEstimation',
    attribute: 'onStressEstimation',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    showResponseStress(json);
  }).catch(e => {
    closeLoading();
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doRegisterStressEstimation(serviceId) {
  let intervalParam = $('#interval').val();
  let params = {
    profile: 'stressEstimation',
    attribute: 'onStressEstimation',
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
    showResponseStress(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch( e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function unregisterStressEstimation(serviceId) {
  sdk.removeEventListener({
    profile: 'stressEstimation',
    attribute: 'onStressEstimation',
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

function doStressEstimationBack(serviceId) {
  searchDevice(serviceId);
}

function doStressEstimationAllBack(serviceId) {
  showStressEstimationProfile(serviceId);
}


function showResponseStress(json) {
  // StressEstimation
  if (json.stress) {
    $('#stressEstimationLFHF').val(json.stress.lfhf);
    $('#stressEstimationTimeStamp').val(json.stress.timeStamp);
    $('#stressEstimationTimeStampString').val(json.stress.timeStampString);
  }
}
