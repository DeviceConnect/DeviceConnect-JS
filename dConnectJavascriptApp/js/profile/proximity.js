/**
 proximity.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
  
/**
 * Proximity Profile
 *
 * @param {String} serviceId サービスID
 */
function showProximity(serviceId)  {

    initAll();
	
	var btnStr = "";   
    btnStr += getBackButton('Device Top', 'doProximityBack', serviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("Proximity Profile");

    var str = "";
    
    if(myDeviceName.indexOf("Host") != -1){
	    str += '<li><a href="javascript:showUserProximity(\'' + serviceId + '\');" value="Setting">user proximity</a></li>';
    } else if(myDeviceName.indexOf("Dice+") != -1){
    	str += '<li><a href="javascript:showDeviceProximity(\'' + serviceId + '\');" value="Call">device proximity</a></li>';
	}
	
	reloadList(str);
}

/** 
 * Device Proximityの処理
 *
 * @param {String}serviceId サービスID
 */
function showDeviceProximity(serviceId) {

	initAll();
    var sessionKey = currentClientId;
    
    var btnStr = "";    
    btnStr += getBackButton('Proximity Top', 'doDeviceProximityBack', serviceId, sessionKey);
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
	
	doRegisterDeviceProximity(serviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/** 
 * User Proximityの表示
 *
 * @param {String}serviceId サービスID
 */
function showUserProximity(serviceId) {
    
    initAll();
    
    var sessionKey = currentClientId;
    
    var btnStr = "";    
    btnStr += getBackButton('Proximity Top', 'doUserProximityBack', serviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("User Proximity");
    
	var str = "";
    str += 'user proximity<br>';
    str += '<form  name="userProximityForm">';
    str += '<input type="text" id="user" width="100%">';
    str += '</form>';
	reloadContent(str);
	
	doRegisterUserProximity(serviceId,sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Menu Backボタン
 *
 * serviceId {String} サービスID
 * sessionKey {String} セッションKEY
 */
function doProximityBack(serviceId, sessionKey){
	searchSystem(serviceId);
}

/**
 * User Proximity Backボタン
 *
 * serviceId {String} サービスID
 * sessionKey {String} セッションKEY
 */
function doUserProximityBack(serviceId, sessionKey){
	showProximity(serviceId);
	doUnregisterUserProximity(serviceId, sessionKey);
}

/**
 * User Proximity Backボタン
 *
 * serviceId {String} サービスID
 * sessionKey {String} セッションKEY
 */
function doDeviceProximityBack(serviceId, sessionKey){
	showProximity(serviceId);
	doUnregisterDeviceProximity(serviceId, sessionKey);
}


/**
 * Device Proximityイベントの登録
 *
 * @param serviceId {String} サービスID
 * @param sessionKey {String} セッションキー
 */
function doRegisterDeviceProximity(serviceId, sessionKey) {
    
    var builder = new dConnect.URIBuilder();
	builder.setProfile("proximity");
    builder.setAttribute("ondeviceproximity");
    builder.setServiceId(serviceId);
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
 * @param serviceId サービスID
 * @param sessionKey セッションキー
 */
function doUnregisterDeviceProximity(serviceId, sessionKey) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("proximity");
    builder.setAttribute("ondeviceproximity");
    builder.setServiceId(serviceId);
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
 * @param serviceId サービスID
 * @param sessionKey セッションキー
 */
function doRegisterUserProximity(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("proximity");
    builder.setAttribute("onuserproximity");
    builder.setServiceId(serviceId);
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
 * @param serviceId サービスID
 * @param sessionKey セッションキー
 */
function doUnregisterUserProximity(serviceId, sessionKey) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("proximity");
    builder.setAttribute("onuserproximity");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}
