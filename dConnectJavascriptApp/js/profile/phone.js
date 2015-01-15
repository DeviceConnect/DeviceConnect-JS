/**
 phone.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/**
 * Phone Menu
 *
 * @param {String}deviceId デバイスID
 */
function showPhone(deviceId) {

    initAll();
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top','doMediaplayerBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("Phone Profile");

    var str = "";
    str += '<li><a href="javascript:showPhoneCall(\'' + deviceId + '\');" value="Call">phone/call</a></li>';
    str += '<li><a href="javascript:showPhoneSetting(\'' + deviceId + '\');" value="Setting">phone/set</a></li>';
	reloadList(str);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}essionKey セッションKEY
 */
function doPhoneCallBack(deviceId, sessionKey){
	showPhone(deviceId);
	doUnregisterOnConnect(deviceId, sessionKey);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doPhoneSetBack(deviceId, sessionKey){
	showPhone(deviceId);
}


/**
 * Call 
 *
 * @param {String}deviceId デバイスID
 */
function showPhoneCall(deviceId) {
	var sessionKey = currentClientId;
	
	initAll();
	
    setTitle("Phone Profile(Call)");
	
	var btnStr = "";    
    btnStr += getBackButton('Phone TOP', 'doPhoneCallBack', deviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";  
    str += '<form action="" method="POST" name="phoneForm">';
    str += makeInputText("Status", "status", "status");
    str += makeInputText("Phone Number", "phone", "phone");
    str += '</form>';
    str += '<input onclick="javascript:doPhoneCall(\'' + deviceId + '\');" type="button" value="Call"/>';
	reloadContent(str);

	doRegisterOnConnect(deviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});

}

/**
 * Phone profile<br>
 * Setting
 *
 * @param deviceId デバイスID
 */
function showPhoneSetting(deviceId) {
	
	initAll();

    setTitle("Phone Profile(Set)");
	
	var btnStr = "";    
    btnStr += getBackButton('Phone TOP', 'doPhoneSetBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);

    var str = "";    
    str += '<form action="" method="POST" name="phoneForm">';
    str += '<SELECT name="mode" id="mode">'
    str += '<OPTION value="0">Silent Mode</OPTION>'
    str += '<OPTION value="1">Vibration Mode</OPTION>'
    str += '<OPTION value="2">Normal Mode</OPTION>'
    str += '</SELECT>'
    str += '</form>';
    str += '<input onclick="javascript:doPhoneSet(\'' + deviceId + '\');" type="button" value="Set"/>';
    reloadContent(str);
}

/**
 * phone call
 */
function doPhoneCall(deviceId) {
	
	var form = document.getElementsByName("phoneForm");
    var phoneNumber = $('#phone').val();

    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("call");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("phoneNumber", phoneNumber);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.execute('POST', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);

        if (json.result == 0) {


        } else {
			showError("phone/call", json);
        }
    }, function(xhr, textStatus, errorThrown) {

    });
}

/**
 * onCloseイベントの登録
 *
 * @param deviceId デバイスID
 * @param sessionKey セッションキー
 */
function doRegisterOnConnect(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("onconnect");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
        if(json.phoneStatus.state == "0"){
	        $('#status').val(json.phoneStatus.phoneNumber + " Calling"); 
	    }
    }, null, function(errorCode, errorMessage){
    	alert(errorMessage);
    });   
}

/**
 * onConnectイベントの解除
 *
 * @param deviceId デバイスID
 * @param sessionKey セッションキー
 */
function doUnregisterOnConnect(deviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("onconnect");
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
 * phone set
 */
function doPhoneSet(deviceId) {

	
    var modeValue = $('#mode').val();
    body = "mode=" + modeValue;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("set");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("mode", modeValue);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);

        if (json.result == 0) {
			alert("success:change mode");
        } else {
			showError("phone/call", json);
        }
    }, function(xhr, textStatus, errorThrown) {

    });
}