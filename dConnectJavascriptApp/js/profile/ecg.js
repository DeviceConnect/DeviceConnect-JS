/**
 ecg.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show ECG Menu
 *
 * @param {String} serviceId サービスID
 */
function showECGProfile(serviceId) {
  initAll();
  setTitle('ECG Profile');

  let btnStr = getBackButton('Device Top', 'doECGBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<li><a href="javascript:showECG(\'' +
          serviceId + '\');">ECG</a></li>';
  reloadList(str);
}

function showECG(serviceId) {
  initAll();
  setTitle('ECG');

  let btnStr = getBackButton('ECG Top', 'doECGAllBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  closeLoading();

  let str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Get ECG"' +
        ' onclick="javascript:doGetECG(\'' +
        serviceId + '\');"/><br>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Register Event"' +
        ' onclick="javascript:doRegisterECG(\'' +
        serviceId + '\');"/><br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="Unregister Event"' +
        ' onclick="javascript:unregisterECG(\'' +
        serviceId + '\');"/><br>';
  str += '<hr>';
  str += '<h2>ECG</h2>';
  str += makeInputText('Value', 'ecgValue', 'ecgValue');
  str += makeInputText('MDERFloat', 'ecgMDERFloat', 'ecgMDERFloat');
  str += makeInputText('Type', 'ecgType', 'ecgType');
  str += makeInputText('TypeCode', 'ecgTypeCode', 'ecgTypeCode');
  str += makeInputText('Unit', 'ecgUnit', 'ecgUnit');
  str += makeInputText('UnitCode', 'ecgUnitCode', 'ecgUnitCode');
  str += makeInputText('TimeStamp', 'ecgTimeStamp', 'ecgTimeStamp');
  str += makeInputText('TimeStampString', 'ecgTimeStampString', 'ecgTimeStampString');

  reloadContent(str);
}

function doGetECG(serviceId) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'ecg',
    attribute: 'onECG',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    showResponseECG(json);
  }).catch(e => {
    closeLoading();
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function doRegisterECG(serviceId) {
  let intervalParam = $('#interval').val();
  let params = {
    profile: 'ecg',
    attribute: 'onECG',
    params: {
      serviceId: serviceId
    }
  };
  if (intervalParam !== '') {
    params.interval = intervalParam;
  }

  sdk.addEventListener(params, function(message) {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }

    let json = JSON.parse(message);
    showResponseECG(json);
  }).then(json => {
    if (DEBUG) {
      console.log('Success to add event listener.');
    }
  }).catch(e => {
    alert("errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  });
}

function unregisterECG(serviceId) {
  sdk.removeEventListener({
    profile: 'ecg',
    attribute: 'onECG',
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

function doECGBack(serviceId) {
  searchDevice(serviceId);
}

function doECGAllBack(serviceId) {
  showECGProfile(serviceId);
}


function showResponseECG(json) {
  // ECG
  if (json.ecg) {
    $('#ecgValue').val(json.ecg.value);
    $('#ecgMDERFloat').val(json.ecg.mderFloat);
    $('#ecgType').val(json.ecg.type);
    $('#ecgTypeCode').val(json.ecg.typeCode);
    $('#ecgUnit').val(json.ecg.unit);
    $('#ecgUnitCode').val(json.ecg.unitCode);
    $('#ecgTimeStamp').val(json.ecg.timeStamp);
    $('#ecgTimeStampString').val(json.ecg.timeStampString);
  }
}
