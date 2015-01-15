/**
 dice.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * Dice Menu
 *
 * @param {String}deviceId デバイスID
 */
function showDice(deviceId) {
    initAll();
	
	setTitle("Dice Profile");
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top','doDiceBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);

    var str = "";
    var path = "/";
    str += '<li><a href="javascript:showOnRoll(\'' + deviceId + '\',\'' + path + '\');" value="list">onRoll</a></li>';
    str += '<li><a href="javascript:showOnMagnetometer(\'' + deviceId + '\');" value="send">onMagnetometer</a></li>';
    reloadList(str);
}

/**
 * サイコロの目を取得
 *
 * @param {String}deviceId デバイスID
 */
function showOnRoll(deviceId){
	initAll();
	
    var sessionKey = currentClientId;
    
    var btnStr = "";    
    btnStr += getBackButton('Device Top','doOnDiceBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";
    str += '<form  name="diceForm">';
    str += '<center><img src="./css/images/dice_x.png" id="dice" name="dice"></center>';
    str += '</form>';
	reloadContent(str);
	
	doRegisterOnDice(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Magnetometerの表示
 *
 * @param {String}deviceId デバイスID
 */
function showOnMagnetometer(deviceId){
	
	initAll();

    var sessionKey = currentClientId;
    
    var btnStr = "";    
    btnStr += getBackButton('Device Top','doOnMagnetBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
    
	var str = "";
    str += '<form  name="diceForm">';
    str += 'Magnetometer<br>';
    str += makeInputText("X", "x", "x");
    str += makeInputText("Y", "y", "y");
    str += makeInputText("Z", "z", "z");
    str += makeInputText("Filter", "filter", "filter");
    str += makeInputText("Interval", "interval", "interval");
    str += '</form>';
	reloadContent(str);
	
	doRegisterOnMagnetometer(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doDiceBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doOnDiceBack(deviceId, sessionKey){
	showDice(deviceId);
	doUnregisterOnDice(deviceId, sessionKey);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doOnMagnetBack(deviceId, sessionKey){	
	showDice(deviceId);
	doUnregisterOnMagnetometer(deviceId, sessionKey);
}


/**
 * Dice ondiceイベントの登録
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doRegisterOnDice(deviceId, sessionKey) {
 
    var builder = new dConnect.URIBuilder();
    builder.setProfile("dice");
    builder.setAttribute("ondice");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
		
        var json = JSON.parse(message);
		
		if (json.dice) {	
			var img = document.getElementById('dice');
        	img.src = "./css/images/dice_"+ json.dice.pip + ".png";
        }

    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });    
}

/**
 * Dice ondiceイベントの削除
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnDice(deviceId, sessionKey) {
	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("dice");
    builder.setAttribute("ondice");
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
 * Dice OnMagnetometerイベントの登録
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doRegisterOnMagnetometer(deviceId, sessionKey) {
 
    var builder = new dConnect.URIBuilder();
    builder.setProfile("dice");
    builder.setInterface("magnetometer");
    builder.setAttribute("onmagnetometer");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
		
        var json = JSON.parse(message);
		
		 if (json.magnetometer) {
		 	$('#x').val(json.magnetometer.x);
		 	$('#y').val(json.magnetometer.y);
		 	$('#z').val(json.magnetometer.z);
		 	$('#filter').val(json.magnetometer.filter);
		 	$('#interval').val(json.magnetometer.interval);           
        }

    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}

/**
 * Dice OnMagnetometerイベントの削除
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnMagnetometer(deviceId, sessionKey) {
	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("dice");
    builder.setInterface("magnetometer");
    builder.setAttribute("onmagnetometer");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey", sessionKey);
    var uri = builder.build();
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });
}    
