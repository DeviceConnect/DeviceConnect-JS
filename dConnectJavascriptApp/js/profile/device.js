/**
 device.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';

  str += makeInputText('Result', 'post-pairing', 'post-pairing');
  str += devMakeButton('PostPairing (Connect)','doDevicePostPairing',serviceId);
  str += '<hr>';

  str += makeInputText('Result', 'delete-pairing', 'delete-pairing');
  str += devMakeButton('DeletePairing (Disconnect)','doDeviceDeletePairing',serviceId);
  str += '<hr>';

  reloadContent(str);
}

function doDevicePostPairing(serviceId){
  let params = devMakeUriBuilder(serviceId, 'pairing');
  let successCallback = function (json){
    console.log('Response: ', json);
    $('#post-pairing').val(json.result);
  };
  sdk.post(params).then(json => { successCallback(json); }).catch(e => {devAlertError(e.errorCode, e.errorMessage); });
}

function doDeviceDeletePairing(serviceId){
  let params = devMakeUriBuilder(serviceId, 'pairing');
  let successCallback = function (json){
    console.log('Response: ', json);
    $('#delete-pairing').val(json.result);
  };
  sdk.delete(params).then(json => { successCallback(json); }).catch(e => { devAlertError(e.errorCode, e.errorMessage);});
}

//////common (dev = device)

function devMakeButton(title,functionName,params) {
  let paramStr = '';
  if(params !== null && params.length > 0){
    if( typeof params === 'string' ) {
      params = [ params ];
    }
    for (let i = 0;i<params.length;i++){
      paramStr += '\''+params[i]+'\'';
      paramStr += ',';
    }
    paramStr = paramStr.slice(0,-1);
  }
  return '<input onclick="'+functionName+'('+paramStr+');" type="button" value="'+title+'"/>';
}

function devMakeUriBuilder(serviceId, attribute){
  return {
    profile: 'device',
    attribute: attribute,
    params: {
      serviceId: serviceId
    }
  };
}

function devAlertError(errorCode, errorMessage){
  showError('device error', errorCode, errorMessage);
}
