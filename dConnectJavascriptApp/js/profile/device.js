/**
 device.js
 Copyright (c) 2017 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Device Menu
 *
 * @param {String} serviceId service Id
 */
function showDevice(serviceId) {
  initAll();
  setTitle('Device Profile');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Device Top', 'doPowerMeterBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';

  str += makeInputText('Result', 'post-pairing', 'post-pairing');
  str += devMakeButton('PostPairing (Connect)','doDevicePostPairing',serviceId);
  str += '<hr>';

  str += makeInputText('Result', 'delete-pairing', 'delete-pairing');
  str += devMakeButton('DeletePairing (Disconnect)','doDeviceDeletePairing',serviceId);
  str += '<hr>';

  reloadContent(str);
}

function doDevicePostPairing(serviceId){
  var builder = devMakeUriBuilder(serviceId, 'pairing');
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#post-pairing').val(json.result);
  };
  console.log('Uri: ', builder.build());
  dConnect.post(builder.build(),null,null,successCallback,pmAlertError);
}

function doDeviceDeletePairing(serviceId){
  var builder = devMakeUriBuilder(serviceId, 'pairing');
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#delete-pairing').val(json.result);
  };
  console.log('Uri: ', builder.build());
  dConnect.delete(builder.build(),null,successCallback,devAlertError);
}

/**
 * Back button
 *
 * @param {String}serviceId service id
 * @param {String}sessionKey session key
 */
function doDeviceBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

//////common (dev = device)

function devMakeButton(title,functionName,params) {
  var paramStr = '';
  if(params !== null && params.length > 0){
    if( typeof params === 'string' ) {
      params = [ params ];
    }
    for (var i = 0;i<params.length;i++){
      paramStr += '\''+params[i]+'\'';
      paramStr += ',';
    }
    paramStr = paramStr.slice(0,-1);
  }
  return '<input onclick="'+functionName+'('+paramStr+');" type="button" value="'+title+'"/>';
}

function devMakeUriBuilder(serviceId, attribute){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('device');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if(typeof attribute !== 'undefined'){
    builder.setAttribute(attribute);
  }
  return builder;
}

function devAlertError(errorCode, errorMessage){
  showError('device error', errorCode, errorMessage);
}
