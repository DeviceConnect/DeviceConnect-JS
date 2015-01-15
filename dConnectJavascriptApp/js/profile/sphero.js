/**
 sphero.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * Sphero Menu
 *
 * @param {String}deviceId デバイスID
 */
function showSphero(deviceId) {
    initAll();
    setTitle("Sphero Profile");
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top','doSpheroBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);

    var str = "";
    var path = "/";
    str += '<li><a href="javascript:showOnQuaternion(\'' + deviceId + '\');" value="list">onQuaternion</a></li>';
    str += '<li><a href="javascript:showOnLocator(\'' + deviceId + '\');" value="send">onLocator</a></li>';
	str += '<li><a href="javascript:showOnCollision(\'' + deviceId + '\');" value="send">onCollision</a></li>';
    reloadList(str);
}

/**
 * OnQuaternionの表示
 *
 * @param {String}deviceId デバイスID
 */
function showOnQuaternion(deviceId){
	initAll();
	
	setTitle("OnQuaternion Event");
	
	var sessionKey = currentClientId;
	
	var btnStr = "";    
    btnStr += getBackButton('Sphero Top','doOnQuaternionBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
	var str = "";
    str += '<form  name="spheroForm">';
    str += 'Quaternion<br>';
    str += makeInputText("Q0", "q0", "q0");
    str += makeInputText("Q1", "q1", "q1");
    str += makeInputText("Q2", "q2", "q2");
    str += makeInputText("Q3", "q3", "q3");
    str += makeInputText("Interval", "interval", "interval");
    str += '</form>';
	reloadContent(str);
	
	doRegisterOnQuaternion(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * OnLocatorの表示
 *
 * @param {String}deviceId デバイスID
 */
function showOnLocator(deviceId){
	initAll();
	
	setTitle("OnLocator Event");
	
	var sessionKey = currentClientId;

	var btnStr = "";
    btnStr += getBackButton('Sphero Top','doOnLocatorBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);

	var str = "";
    str += '<form  name="spheroForm">';
    str += 'Locator<br>';
    str += makeInputText("PosX", "posx", "posx");
    str += makeInputText("PosY", "posy", "posy");
    str += makeInputText("VerX", "verx", "verx");
    str += makeInputText("VerY", "very", "very");
    str += '</form>';
    reloadContent(str);
		
	doRegisterOnLocator(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * OnCollisionの表示
 *
 * @param {String}deviceId デバイスID
 */
function showOnCollision(deviceId){
	initAll();
	
    var sessionKey = currentClientId;
    
    var btnStr = "";
    btnStr += getBackButton('Sphero Top','doOnCollisionBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
    
	var str = "";
    str += '<form  name="spheroForm">';
    str += 'Collision<br>';
	str += makeInputText("Timestamp", "time", "time");
	str += makeInputText("Speed", "speed", "speed");
    str += makeInputText("Power:X", "px", "px");
    str += makeInputText("Power:Y", "py", "py");
    str += makeInputText("Acceleration:X", "acx", "acx");
    str += makeInputText("Acceleration:Y", "acy", "acy");
    str += makeInputText("Acceleration:Z", "acz", "acz");
    str += makeInputText("Axis:X", "axx", "axx");
    str += makeInputText("Axis:Y", "axy", "axy");
    str += '</form>';
	reloadContent(str);
	
	doRegisterOnCollision(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doSpheroBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doOnQuaternionBack(deviceId, sessionKey){
	showSphero(deviceId);
	doUnregisterOnQuaternion(deviceId, sessionKey);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doOnLocatorBack(deviceId, sessionKey){
	showSphero(deviceId);
	doUnregisterOnLocator(deviceId, sessionKey);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doOnCollisionBack(deviceId, sessionKey){
	showSphero(deviceId);
	doUnregisterOnCollision(deviceId, sessionKey);
}

/**
 * Quaternionイベントの登録
 *
 * @param {String}deviceId デバイスID
 */
function doRegisterOnQuaternion(deviceId, sessionKey) {
 
    var builder = new dConnect.URIBuilder();
    builder.setProfile("sphero");
    builder.setInterface("quaternion");
    builder.setAttribute("onquaternion");    
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    console.log(uri);

    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        var json = JSON.parse(message);
		console.log(message);
		 if (json.quaternion) {
		 	$('#q0').val(json.quaternion.q0);
		 	$('#q1').val(json.quaternion.q1);
		 	$('#q2').val(json.quaternion.q2);
		 	$('#q3').val(json.quaternion.q3);
		 	$('#interval').val(json.quaternion.interval);       
        }

    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * OnQuaternionイベントの削除
 *
 * @param {String}deviceId デバイスID
 */
function doUnregisterOnQuaternion(deviceId, sessionKey) {
	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("sphero");
    builder.setInterface("quaternion");
    builder.setAttribute("onquaternion");    
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}    

/**
 * OnLocatorイベントの登録
 *
 * @param {String}deviceId デバイスID
 */
function doRegisterOnLocator(deviceId, sessionKey) {
 	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("sphero");
    builder.setInterface("locator");
    builder.setAttribute("onlocator");    
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
		console.log(message);
		if (json.locator) {
		 	$('#posx').val(json.locator.positionX);
		 	$('#posy').val(json.locator.positionY);
		 	$('#verx').val(json.locator.verocityX);
		 	$('#very').val(json.locator.verocityY);
        }

    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * OnLocatorイベントの削除
 *
 * @param {String}deviceId デバイスID
 */
function doUnregisterOnLocator(deviceId, sessionKey) {
	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("sphero");
    builder.setInterface("locator");
    builder.setAttribute("onlocator");      
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}    


/**
 * OnCollisionイベントの登録
 *
 * @param {String}deviceId デバイスID
 */
function doRegisterOnCollision(deviceId, sessionKey) {
 
    var builder = new dConnect.URIBuilder();
    builder.setProfile("sphero");
    builder.setInterface("collision");
    builder.setAttribute("oncollision");    
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
		console.log(message);
		
		if (json.collision) {
		 	$('#time').val(json.collision.impactTimestamp);
		 	$('#speed').val(json.collision.impactSpeed);
		 	$('#px').val(json.collision.impactPower.x);
		 	$('#py').val(json.collision.impactPower.y);
		 	$('#acx').val(json.collision.impactAcceleration.x);
		 	$('#acy').val(json.collision.impactAcceleration.y);
		 	$('#acz').val(json.collision.impactAcceleration.z);
		 	$('#axx').val(json.collision.impactAxis.y);
		 	$('#axy').val(json.collision.impactAxis.x);

        }

    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * OnCollisionイベントの削除
 *
 * @param {String}deviceId デバイスID
 */
function doUnregisterOnCollision(deviceId, sessionKey) {
	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("sphero");
    builder.setInterface("collision");
    builder.setAttribute("oncollision");      
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();

	if(DEBUG) console.log("Uri:"+uri)

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}
