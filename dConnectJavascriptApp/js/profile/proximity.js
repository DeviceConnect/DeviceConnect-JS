/**
 proximity.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
  
/**
 * Proximity Profile
 *
 * @param {String} deviceId デバイスID
 */
function showProximity(deviceId)  {

    initAll();
	
	var btnStr = "";   
    btnStr += getBackButton('Device Top', 'doProximityBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("Proximity");

    var str = "";
    
    if(myDeviceName.indexOf("Host") != -1){
	    str += '<li><a href="javascript:showUserProximity(\'' + deviceId + '\');" value="Setting">user proximity</a></li>';
    } else if(myDeviceName.indexOf("Dice+") != -1){
    	str += '<li><a href="javascript:showDeviceProximity(\'' + deviceId + '\');" value="Call">device proximity</a></li>';
	}
	
	reloadList(str);
}

/** 
 * Device Proximityの処理
 *
 * @param {String}deviceId デバイスID
 */
function showDeviceProximity(deviceId) {

	initAll();
    var sessionKey = currentClientId;
    
    var btnStr = "";    
    btnStr += getBackButton('Proximity Top', 'doDeviceProximityBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("Device Proximity");

	var str = "";
	str += 'device proximity<br>';
    str += '<form  name="deviceProximityForm">';
    str += '<input type="text" id="value" width="100%">';
	str += '<input type="text" id="min" width="100%">';
    str += '<input type="text" id="max" width="100%">';
    str += '<input type="text" id="threshold" width="100%">';
    str += '</form>';
    str += '<hr>';
	
	reloadContent(str);
	
	doRegisterDeviceProximity(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/** 
 * User Proximityの表示
 *
 * @param {String}deviceId デバイスID
 */
function showUserProximity(deviceId) {
    
    initAll();
    
    var sessionKey = currentClientId;
    
    var btnStr = "";    
    btnStr += getBackButton('Proximity Top', 'doUserProximityBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("User Proximity");
    
	var str = "";
    str += 'user proximity<br>';
    str += '<form  name="userProximityForm">';
    str += '<input type="text" id="user" width="100%">';
    str += '</form>';
	reloadContent(str);
	
	doRegisterUserProximity(deviceId,sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Menu Backボタン
 *
 * deviceId {String} デバイスID
 * sessionKey {String} セッションKEY
 */
function doProximityBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/**
 * User Proximity Backボタン
 *
 * deviceId {String} デバイスID
 * sessionKey {String} セッションKEY
 */
function doUserProximityBack(deviceId, sessionKey){
	showProximity(deviceId);
	doUnregisterUserProximity(deviceId, sessionKey);
}

/**
 * User Proximity Backボタン
 *
 * deviceId {String} デバイスID
 * sessionKey {String} セッションKEY
 */
function doDeviceProximityBack(deviceId, sessionKey){
	showProximity(deviceId);
	doUnregisterDeviceProximity(deviceId, sessionKey);
}


/**
 * Device Proximityイベントの登録
 *
 * @param deviceId {String} デバイスID
 * @param sessionKey {String} セッションキー
 */
function doRegisterDeviceProximity(deviceId, sessionKey) {
    
    var builder = new dConnect.URIBuilder();
	builder.setProfile("proximity");
    builder.setAttribute("ondeviceproximity");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
        if (json.proximity) {
        	$('#value').val(json.proximity.value);
        	$('#min').val(json.proximity.min);
        	$('#max').val(json.proximity.max);
        	$('#threshold').val(json.proximity.threshold);
        }
    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * Device Proximityイベントの削除
 *
 * @param deviceId デバイスID
 * @param sessionKey セッションキー
 */
function doUnregisterDeviceProximity(deviceId, sessionKey) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("proximity");
    builder.setAttribute("ondeviceproximity");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * User Proximityイベントの登録
 *
 * @param deviceId デバイスID
 * @param sessionKey セッションキー
 */
function doRegisterUserProximity(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("proximity");
    builder.setAttribute("onuserproximity");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.addEventListener(uri,function(message) {
		// イベントメッセージが送られてくる
		if(DEBUG) console.log("Response:"+message)
        
        var json = JSON.parse(message);
        if (json.proximity) {
			$('#user').val(json.proximity.near);
        }
    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * User Proximityイベントの削除
 *
 * @param deviceId デバイスID
 * @param sessionKey セッションキー
 */
function doUnregisterUserProximity(deviceId, sessionKey) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("proximity");
    builder.setAttribute("onuserproximity");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}
