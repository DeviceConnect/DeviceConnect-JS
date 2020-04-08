/**
 echonetLite.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */


/* Show ECHONET Lite page */
function showECHONETLite(serviceId) {
  initAll();
  setTitle('ECHONET Lite Property Control');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="ECHONETLiteForm">';

  str += '<div>';
  str += '<label>Get ECHONET Lite Property:</label>';
  str += '<label for="idGetEPC">ECHONET Property (EPC):</label>';
  str += '<input type="text" id="idGetEPC" width="100%" value="" />';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetECHONETLiteEPC(\'' + serviceId + '\');"/>';
  str += '<label for="idGetEDT">ECHONET Property Data (EDT):</label>';
  str += '<input type="text" id="idGetEDT" width="100%" value="" readonly />';
  str += '</div>';
  str += '<br>';
  str += '<hr>';
  str += '<br>';
  str += '<div>';
  str += '<label>Set ECHONET Lite Property:</label>';
  str += '<label for="idSetEPC">ECHONET Property (EPC):</label>';
  str += '<input type="text" id="idSetEPC" width="100%" value="" />';
  str += '<label for="idSetEDT">ECHONET Property Data (EDT):</label>';
  str += '<input type="text" id="idSetEDT" width="100%" value="" />';
  str += '<input type="button" name="setButton" id="setButton" value="Set"' +
           ' onclick="doSetECHONETLiteEPC(\'' + serviceId + '\');"/>';
  str += '<label for="idSetResult">Result:</label>';
  str += '<input type="text" id="idSetResult" width="100%" value="" readonly />';
  str += '</div>';

  str += '</form>';

  reloadList(str);
}

/**
 * Get ECHONETLite Property.
 * @param {String} serviceId Service ID.
 * @param {String} epc Property number.
 */
function getECHONETLiteProperty(serviceId, epc) {
  closeLoading();
  showLoading();

  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: serviceId,
      epc: epc
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    for(let i=0; i<json.properties.length; i++) {
      if (i != 0) {
        str += ",";
      }
      str += '{\"' + json.properties[i].epc + '\",\"' + json.properties[i].value + '\"}';
    }
    $('#idGetEDT').val(str);
  }).catch(e => {
    closeLoading();
    let str = '';
    str += 'Unknown';
    $('#idGetEDT').val(str);
  });
}

/**
 * Set ECHONET Lite Property.
 * @param {String} serviceId service ID
 * @param {String} epc Property Number.
 * @param {String} value Property Value
 */
function doECHONETLitePropertySet(serviceId, epc, value) {
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idSetResult').val(json.result);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('ECHONETLitePropertySet', errorCode, errorMessage);
    $('#idSetResult').val(errorMessage);
  };

  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: serviceId,
      epc: epc,
      value: value
    }
  }).then(json => { successCallback(json); }).catch(e => { errorCallback(e.errorCode, e.errorMessage); });

}


/**
 * Get ECHONET Lite value.
 * @param {String} serviceId service ID
 */
function doGetECHONETLiteEPC(serviceId) {

  let epc = $('#idGetEPC').val();
  console.log('epc: ', epc);
  getECHONETLiteProperty(serviceId, epc);

}

/**
 * Set ECHONET Lite value.
 * @param {String} serviceId service ID
 */
function doSetECHONETLiteEPC(serviceId) {

  let epc = $('#idSetEPC').val();
  let edt = $('#idSetEDT').val();
  console.log('epc: ', epc);
  console.log('edt: ', edt);
  doECHONETLitePropertySet(serviceId, epc, edt);

}
