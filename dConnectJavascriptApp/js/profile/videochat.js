/**
 videochat.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

let _skywayApiKey = "[ YOUR API KEY ]";
let _skywayDomain = "[ YOUR DOMAIN ]";
/**
 * Show VideoChat Menu
 *
 * @param {String} serviceId サービスID
 */
function showVideoChat(serviceId) {
  initAll();
  setTitle('VideoChat Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';

  str += makeInputText('Name', 'profile-name', 'profile-name');
  str += makeInputText('AddressId', 'profile-addressId', 'profile-addressId');
  str += vcMakeButton('GetProfile','doVideoChatGetProfile',serviceId);

  str += '<hr>';

  str += makeInputText('Input UpdateName', 'update-name', 'update-name');
  str += vcMakeButton('UpdateProfile','doVideoChatUpdateProfile',serviceId);

  str += '<hr>';

  str += makeSelectOption('Address', 'get-address', 'get-address');
  str += vcMakeButton('GetAddress','doVideoChatGetAddress',serviceId);

  str += '<hr>';

  str += makeInputText('Input Address', 'call-addressId', 'call-addressId');
  str += makeInputText('Input Video', 'call-video', 'call-video');
  str += makeInputText('Input Audio', 'call-audio', 'call-audio');
  str += makeInputText('Result', 'call-result', 'call-result');
  str += vcMakeButton('Call','doVideoChatCall',serviceId);

  str += '<hr>';

  str += makeInputText('Input Address', 'callstop-addressId', 'callstop-addressId');
  str += makeInputText('Result', 'callstop-result', 'callstop-result');
  str += vcMakeButton('StopCall','doVideoChatStopCall',serviceId);

  str += '<hr>';

  str += makeInputText('IncomingName', 'incoming-name', 'incoming-name');
  str += makeInputText('IncomingAddressId', 'incoming-addressId', 'incoming-addressId');
  str += vcMakeEventButton('Incoming','VideoChatIncomingEvent',serviceId);

  str += '<hr>';

  str += makeInputText('OnCallName', 'oncall-name', 'oncall-name');
  str += makeInputText('OnCallAddressId', 'oncall-addressId', 'oncall-addressId');
  str += makeInputText('OnCallVideo', 'oncall-video', 'oncall-video');
  str += makeInputText('OnCallAudio', 'oncall-audio', 'oncall-audio');
  str += vcMakeEventButton('OnCall','VideoChatOnCallEvent',serviceId);

  str += '<hr>';

  str += makeInputText('HangupAddressId', 'hangup-addressId', 'hangup-addressId');
  str += vcMakeEventButton('Hangup','VideoChatHangupEvent',serviceId);

  reloadContent(str);
}

function vcAddAddressId(id, name, selected) {
  $('#get-address').append($('<option>').html(name).val(id).prop('selected', selected));
}

function doVideoChatGetProfile(serviceId){
  let params = vcMakeUriBuilder(serviceId,'profile');
  params.params['config'] = vcMakeConfig();
  let successCallback = function (json){
    console.log('Response: ', json);
    $('#profile-name').val(json.name);
    $('#profile-addressId').val(json.addressId);
  };
  sdk.get(params).then(json => { successCallback(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function doVideoChatUpdateProfile(serviceId){
  let name = $('#update-name').val();
  console.log('update-name:'+name);
  let params = vcMakeUriBuilder(serviceId,'profile');
  params.params['name'] = name;
  sdk.put(params).then(json => { vcLoggingSuccess(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function doVideoChatGetAddress(serviceId) {
  let params = vcMakeUriBuilder(serviceId, 'address');
  params.params['config'] = vcMakeConfig();
  let successCallback = function (json) {
    console.log('Response: ', json);
    if (json.addresses) {
      $('#get-address').empty();
      vcAddAddressId('', '', false);
      for (let i = 0 ; i < json.addresses.length ; i++) {
        vcAddAddressId(json.addresses[i].addressId, json.addresses[i].name, i == 0);
      }
      if (json.addresses.length > 0) {
        $('#get-address').val(json.addresses[0].addressId);
        $('#call-addressId').val(json.addresses[0].addressId);
        $('#callstop-addressId').val(json.addresses[0].addressId);
      }
      $('#get-address').selectmenu('refresh');
    }
    $('#get-address').change(function() {
      let val = $('#get-address').val();
      $('#call-addressId').val(val);
      $('#callstop-addressId').val(val);
    });
  };
  sdk.get(params).then(json => { successCallback(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function doVideoChatCall(serviceId){
  let addressId = $('#call-addressId').val();
  let video = $('#call-video').val();
  let audio = $('#call-audio').val();

  let params = vcMakeUriBuilder(serviceId,'call');
  params.params['addressId'] = addressId;
  params.params['video'] = video;
  params.params['audio'] = audio;
  params.params['config'] = vcMakeConfig();

  let successCallback = function(json){
    $('#call-result').val(json.result);
  };
  sdk.post(params).then(json => { successCallback(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function doVideoChatStopCall(serviceId){
  let addressId = $('#callstop-addressId').val();

  let params = vcMakeUriBuilder(serviceId,'call');
  params.params['addressId'] = addressId;
  params.params['config'] = vcMakeConfig();
  let successCallback = function(json){
    $('#callstop-result').val(json.result);
  };
  sdk.delete(params).then(json => { successCallback(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function registVideoChatIncomingEvent(serviceId){
  let params = vcMakeEventUriBuilder(serviceId,'onincoming');
  params.params['config'] = vcMakeConfig();
  let eventCallback = function(message){
    console.log('Event-Message:' + message);
    let json = JSON.parse(message);
    if(json.incoming){
      $('#incoming-name').val(json.incoming.name);
      $('#incoming-addressId').val(json.incoming.addressId);

      $('#call-addressId').val(json.incoming.addressId);
      $('#callstop-addressId').val(json.incoming.addressId);
    }
  };
  sdk.addEventListener(params, message => {
    eventCallback(message);
  }).then(json => { vcEventRegistSuccess(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function unregistVideoChatIncomingEvent(serviceId){
  let params = vcMakeEventUriBuilder(serviceId,'onincoming');
  params.params['config'] = vcMakeConfig();
  sdk.removeEventListener(params).then(json => { vcEventUnregistSuccess(json);}).catch(e =>{ vcAlertError(e.errorCode, e.errorMessage);});
}

function registVideoChatOnCallEvent(serviceId){
  let params = vcMakeEventUriBuilder(serviceId,'oncall');
  params.params['config'] =  vcMakeConfig();
  let eventCallback = function(message){
    console.log('Event-Message:' + message);
    let json = JSON.parse(message);
    console.log(json);
    if(json.oncall){
      $('#oncall-name').val(json.oncall[0].name);
      $('#oncall-addressId').val(json.oncall[0].addressId);
      $('#oncall-video').val(json.oncall[0].video);
      $('#oncall-audio').val(json.oncall[0].audio);
    }
  };
  sdk.addEventListener(params, message => { eventCallback(message);}).then(json => { vcEventRegistSuccess(json);}).catch(e => { vcAlertError(e.errorCode, e.errorMessage);});
}

function unregistVideoChatOnCallEvent(serviceId){
  let params = vcMakeEventUriBuilder(serviceId,'oncall');
  params.params['config'] = vcMakeConfig();
  sdk.removeEventListener(params).then(json => {vcEventUnregistSuccess(json);}).catch(e => { vcAlertError(e.errorCode, e.errorMessage);});
}

function registVideoChatHangupEvent(serviceId){
  let params = vcMakeEventUriBuilder(serviceId,'onhangup');
  params.params['config'] = vcMakeConfig();
  let eventCallback = function(message){
    console.log('Event-Message:' + message);
    let json = JSON.parse(message);
    if(json.hangup){
      $('#hangup-addressId').val(json.hangup.addressId);
      $('#hangup-groupId').val(json.hangup.groupId);
    }
  };
  sdk.addEventListener(params, message => { eventCallback(message);}).then(json => { vcEventRegistSuccess(json);})
      .catch(e => { vcAlertError(e.errorCode, e.errorMessage);});
}

function unregistVideoChatHangupEvent(serviceId){
  let params = vcMakeEventUriBuilder(serviceId,'onhangup');
  params.params['config'] = vcMakeConfig();
  sdk.removeEventListener(params).then(json => { vcEventUnregistSuccess(json);})
      .catch(e => { vcAlertError(e.errorCode, e.errorMessage);});
}

//////common (vc = videochat)

function vcMakeConfig() {
  return '{apiKey:"' + _skywayApiKey + '", domain:"' + _skywayDomain + '"}';
}

function vcMakeButton(title,functionName,params) {
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

function vcMakeEventButton(title,functionName,serviceId,sessionKey){
  let str = '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><input onclick="regist'+functionName+'(\''+serviceId+'\',\''+sessionKey+'\');" type="button" value="Regist'+title+'"/></div>';
  str += '<div class="ui-block-b"><input onclick="unregist'+functionName+'(\''+serviceId+'\',\''+sessionKey+'\');" type="button" value="Unregist'+title+'"/></div>';
  str += '</fieldset>';
  return str;
}

function vcMakeUriBuilder(serviceId, attribute){
  let params = {
    profile: 'videochat',
    attribute: attribute,
    params: {
      serviceId: serviceId
    }
  };
  return params;
}

function vcMakeEventUriBuilder(serviceId, attribute){
  let params = {
    profile: 'videochat',
    attribute: attribute,
    params: {
      serviceId: serviceId
    }
  };
  return params;
}

function vcEventRegistSuccess(){
  console.log('Success to add event listener');
}

function vcEventUnregistSuccess(){
  console.log('Success to remove event listener');
}

function vcLoggingSuccess(json){
  console.log('Response: ', json);
}

function vcAlertError(errorCode, errorMessage){
  showError('videochat error', errorCode, errorMessage);
}
