/**
 echonetLite.js
 Copyright (c) 2017 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */


/* Show ECHONET Lite page */
function showECHONETLite(serviceId) {
  initAll();
  setTitle('ECHONET Lite Property Control');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doENLBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  
  var str = '';
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
 * Back button
 *
 * serviceId service ID
 */
function doENLBack(serviceId) {
  searchSystem(serviceId);
}

/**
 * Get ECHONETLite Property.
 * @param {String} serviceId Service ID.
 * @param {String} epc Property number.
 */
function getECHONETLiteProperty(serviceId, epc) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('echonetLite');
  builder.setAttribute('property');
  builder.setServiceId(serviceId);
  builder.addParameter('epc', epc);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    var str = '';
    for(var i=0; i<json.properties.length; i++) {
      if (i != 0) {
        str += ",";
      }
      str += '{\"' + json.properties[i].epc + '\",\"' + json.properties[i].value + '\"}';
    }
    $('#idGetEDT').val(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    var str = '';
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

  var builder = new dConnect.URIBuilder();
  builder.setProfile('echonetLite');
  builder.setAttribute('property');
  builder.setServiceId(serviceId);
  builder.addParameter('epc', epc);
  builder.addParameter('value', value);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  var successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idSetResult').val(json.result);
  };

  var errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('ECHONETLitePropertySet', errorCode, errorMessage);
    $('#idSetResult').val(errorMessage);
  };

  dConnect.put(uri, null, null, successCallback, errorCallback);

}


/**
 * Get ECHONET Lite value.
 * @param {String} serviceId service ID
 */
function doGetECHONETLiteEPC(serviceId) {

  var epc = $('#idGetEPC').val();
      console.log('epc: ', epc);
  getECHONETLiteProperty(serviceId, epc);

}

/**
 * Set ECHONET Lite value.
 * @param {String} serviceId service ID
 */
function doSetECHONETLiteEPC(serviceId) {

  var epc = $('#idSetEPC').val();
  var edt = $('#idSetEDT').val();
      console.log('epc: ', epc);
      console.log('edt: ', edt);
  doECHONETLitePropertySet(serviceId, epc, edt);

}


