/**
 phone.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/**
 * Phone Menu
 *
 * @param {String}serviceId サービスID
 */
function showPhone(serviceId) {

    initAll();
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top','doMediaplayerBack', serviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    setTitle("Phone Profile");

    var str = "";
    str += '<li><a href="javascript:showPhoneCall(\'' + serviceId + '\');" value="Call">phone/call</a></li>';
    str += '<li><a href="javascript:showPhoneSetting(\'' + serviceId + '\');" value="Setting">phone/set</a></li>';
	reloadList(str);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}essionKey セッションKEY
 */
function doPhoneCallBack(serviceId, sessionKey){
	showPhone(serviceId);
	doUnregisterOnConnect(serviceId, sessionKey);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doPhoneSetBack(serviceId, sessionKey){
	showPhone(serviceId);
}


/**
 * Call 
 *
 * @param {String}serviceId サービスID
 */
function showPhoneCall(serviceId) {
	var sessionKey = currentClientId;
	
	initAll();
	
    setTitle("Phone Profile(Call)");
	
	var btnStr = "";    
    btnStr += getBackButton('Phone TOP', 'doPhoneCallBack', serviceId, sessionKey);
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";  
    str += '<form action="" method="POST" name="phoneForm">';
    str += makeInputText("Status", "status", "status");
    str += makeInputText("Phone Number", "phone", "phone");
    str += '</form>';
    str += '<input onclick="javascript:doPhoneCall(\'' + serviceId + '\');" type="button" value="Call"/>';
	reloadContent(str);

	doRegisterOnConnect(serviceId, sessionKey);
	dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});

}

/**
 * Phone profile<br>
 * Setting
 *
 * @param serviceId サービスID
 */
function showPhoneSetting(serviceId) {
	
	initAll();

    setTitle("Phone Profile(Set)");
	
	var btnStr = "";    
    btnStr += getBackButton('Phone TOP', 'doPhoneSetBack', serviceId, "");
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
    str += '<input onclick="javascript:doPhoneSet(\'' + serviceId + '\');" type="button" value="Set"/>';
    reloadContent(str);
}

/**
 * phone call
 */
function doPhoneCall(serviceId) {
	
	var form = document.getElementsByName("phoneForm");
    var phoneNumber = $('#phone').val();

    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("phoneNumber", phoneNumber);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.post(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("phone/call", errorCode, errorMessage);
    });
}

/**
 * onCloseイベントの登録
 *
 * @param serviceId サービスID
 * @param sessionKey セッションキー
 */
function doRegisterOnConnect(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("onconnect");
    builder.setServiceId(serviceId);
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
 * @param serviceId サービスID
 * @param sessionKey セッションキー
 */
function doUnregisterOnConnect(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("onconnect");
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
 * phone set
 */
function doPhoneSet(serviceId) {

	
    var modeValue = $('#mode').val();
    body = "mode=" + modeValue;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("phone");
    builder.setAttribute("set");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("mode", modeValue);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        alert("success:change mode");
    }, function(errorCode, errorMessage) {
        showError("phone/call", errorCode, errorMessage);
    });
}