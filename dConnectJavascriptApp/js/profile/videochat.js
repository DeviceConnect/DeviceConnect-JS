/**
 videochat.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var _skywayApiKey = "[ YOUR API KEY ]";
var _skywayDomain = "[ YOUR DOMAIN ]";

/**
 * Show VideoChat Menu
 *
 * @param {String} serviceId サービスID
 */
function showVideoChat(serviceId) {
  initAll();
  setTitle('VideoChat Profile');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Device Top', 'doVideoChatBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';

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
  str += vcMakeEventButton('Incoming','VideoChatIncomingEvent',serviceId,sessionKey);

  str += '<hr>';

  str += makeInputText('OnCallName', 'oncall-name', 'oncall-name');
  str += makeInputText('OnCallAddressId', 'oncall-addressId', 'oncall-addressId');
  str += makeInputText('OnCallVideo', 'oncall-video', 'oncall-video');
  str += makeInputText('OnCallAudio', 'oncall-audio', 'oncall-audio');
  str += vcMakeEventButton('OnCall','VideoChatOnCallEvent',serviceId,sessionKey);

  str += '<hr>';

  str += makeInputText('HangupAddressId', 'hangup-addressId', 'hangup-addressId');
  str += vcMakeEventButton('Hangup','VideoChatHangupEvent',serviceId,sessionKey);

  reloadContent(str);
}

function vcAddAddressId(id, name, selected) {
  $('#get-address').append($('<option>').html(name).val(id).prop('selected', selected));
}

function doVideoChatGetProfile(serviceId){
  var builder = vcMakeUriBuilder(serviceId,'profile');
  builder.addParameter('config', vcMakeConfig());
  var successCallback = function (json){
    console.log('Response: ', json);
    $('#profile-name').val(json.name);
    $('#profile-addressId').val(json.addressId);
  };
  dConnect.get(builder.build(), null, successCallback, vcAlertError);
}

function doVideoChatUpdateProfile(serviceId){
  var name = $('#update-name').val();
  console.log('update-name:'+name);
  var builder = vcMakeUriBuilder(serviceId,'profile');
  builder.addParameter('name', name);
  dConnect.put(builder.build(),null,null,vcLoggingSuccess,vcAlertError);
}

function doVideoChatGetAddress(serviceId) {
  var builder = vcMakeUriBuilder(serviceId, 'address');
  builder.addParameter('config', vcMakeConfig());
  var successCallback = function (json) {
    console.log('Response: ', json);
    if (json.addresses) {
      $('#get-address').empty();
      vcAddAddressId('', '', false);
      for (var i = 0 ; i < json.addresses.length ; i++) {
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
      var val = $('#get-address').val();
      $('#call-addressId').val(val);
      $('#callstop-addressId').val(val);
    });
  };
  dConnect.get(builder.build(), null, successCallback, vcAlertError);
}

function doVideoChatCall(serviceId){
  var addressId = $('#call-addressId').val();
  var video = $('#call-video').val();
  var audio = $('#call-audio').val();

  var builder = vcMakeUriBuilder(serviceId,'call');
  builder.addParameter('addressId', addressId);
  builder.addParameter('video', video);
  builder.addParameter('audio', audio);
  builder.addParameter('config', vcMakeConfig());
  var successCallback = function(json){
    $('#call-result').val(json.result);
  };
  dConnect.post(builder.build(),null,null,successCallback,vcAlertError);
}

function doVideoChatStopCall(serviceId){
  var addressId = $('#callstop-addressId').val();

  var builder = vcMakeUriBuilder(serviceId,'call');
  builder.addParameter('addressId', addressId);
  builder.addParameter('config', vcMakeConfig());
  var successCallback = function(json){
    $('#callstop-result').val(json.result);
  };
  dConnect.delete(builder.build(),null,successCallback,vcAlertError);
}

function registVideoChatIncomingEvent(serviceId,sessionKey){
  var builder = vcMakeEventUriBuilder(serviceId,sessionKey,'incoming');
  builder.addParameter('config', vcMakeConfig());
  var eventCallback = function(message){
    console.log('Event-Message:' + message);
    var json = JSON.parse(message);
    if(json.incoming){
      $('#incoming-name').val(json.incoming.name);
      $('#incoming-addressId').val(json.incoming.addressId);

      $('#call-addressId').val(json.incoming.addressId);
      $('#callstop-addressId').val(json.incoming.addressId);

//      var video = $('#call-video').val();
//      var audio = $('#call-audio').val();
//      var builder = vcMakeUriBuilder(serviceId, 'call');
//      builder.addParameter('addressId', json.incoming.addressId);
//      builder.addParameter('video', video);
//      builder.addParameter('audio', audio);
//      builder.addParameter('config', vcMakeConfig());
//      var successCallback = function(json) {};
//      dConnect.post(builder.build(),null,null,successCallback,vcAlertError);
    }
  };
  dConnect.addEventListener(builder.build(), eventCallback, vcEventRegistSuccess, vcAlertError);
}

function unregistVideoChatIncomingEvent(serviceId,sessionKey){
  var builder = vcMakeEventUriBuilder(serviceId,sessionKey,'incoming');
  builder.addParameter('config', vcMakeConfig());
  dConnect.removeEventListener(builder.build(), vcEventUnregistSuccess, vcAlertError);
}

function registVideoChatOnCallEvent(serviceId,sessionKey){
  var builder = vcMakeEventUriBuilder(serviceId,sessionKey,'oncall');
  builder.addParameter('config', vcMakeConfig());
  var eventCallback = function(message){
    console.log('Event-Message:' + message);
    var json = JSON.parse(message);
    console.log(json);
    if(json.oncall){
      $('#oncall-name').val(json.oncall[0].name);
      $('#oncall-addressId').val(json.oncall[0].addressId);
      $('#oncall-video').val(json.oncall[0].video);
      $('#oncall-audio').val(json.oncall[0].audio);
    }
  };
  dConnect.addEventListener(builder.build(),eventCallback, vcEventRegistSuccess, vcAlertError);
}

function unregistVideoChatOnCallEvent(serviceId,sessionKey){
  var builder = vcMakeEventUriBuilder(serviceId,sessionKey,'oncall');
  builder.addParameter('config', vcMakeConfig());
  dConnect.removeEventListener(builder.build(), vcEventUnregistSuccess, vcAlertError);
}

function registVideoChatHangupEvent(serviceId,sessionKey){
  var builder = vcMakeEventUriBuilder(serviceId,sessionKey,'hangup');
  builder.addParameter('config', vcMakeConfig());
  var eventCallback = function(message){
    console.log('Event-Message:' + message);
    var json = JSON.parse(message);
    if(json.hangup){
      $('#hangup-addressId').val(json.hangup.addressId);
      $('#hangup-groupId').val(json.hangup.groupId);
    }
  };
  dConnect.addEventListener(builder.build(),eventCallback, vcEventRegistSuccess, vcAlertError);
}

function unregistVideoChatHangupEvent(serviceId,sessionKey){
  var builder = vcMakeEventUriBuilder(serviceId,sessionKey,'hangup');
  builder.addParameter('config', vcMakeConfig());
  dConnect.removeEventListener(builder.build(), vcEventUnregistSuccess, vcAlertError);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doVideoChatBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

//////common (vc = videochat)

function vcMakeConfig() {
  return '{apiKey:"' + _skywayApiKey + '", domain:"' + _skywayDomain + '"}';
}

function vcMakeButton(title,functionName,params) {
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

function vcMakeEventButton(title,functionName,serviceId,sessionKey){
  var str = '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><input onclick="regist'+functionName+'(\''+serviceId+'\',\''+sessionKey+'\');" type="button" value="Regist'+title+'"/></div>';
  str += '<div class="ui-block-b"><input onclick="unregist'+functionName+'(\''+serviceId+'\',\''+sessionKey+'\');" type="button" value="Unregist'+title+'"/></div>';
  str += '</fieldset>';
  return str;
}

function vcMakeUriBuilder(serviceId, attribute){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('videochat');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setAttribute(attribute);
  return builder;
}

function vcMakeEventUriBuilder(serviceId, sessionKey, attribute){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('videochat');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setAttribute(attribute);
  return builder;
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
