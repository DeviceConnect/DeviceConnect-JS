/**
 remotecontroller.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * Remote Controller Profile
 *
 * @param {String}serviceId サービスID
 */
function showRemoteController(serviceId) {
	
    initAll();
    
    var btnStr = "";    
    btnStr += getBackButton('Device Top', 'doRemoteControllerBack', serviceId, "");
	setTitle("Remote Controller Profile");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";
    str += '<input type="button" onclick="doRemoteControllerGet(\'' + serviceId + '\');" value="get" name="get" >';
    reloadContent(str);
}

/**
 *
 * IrDataの送信
 *
 * @param {String}serviceId サービスID
 */
function doRemoteControllerSend(serviceId) {
	
	closeLoading();
    showLoading();
    
    var message = document.getElementById("menu").innerHTML;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("remote_controller");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("message", message);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)


    dConnect.post(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        closeLoading();
    }, function(errorCode, errorMessage) {
        showError("POST remote_controller", errorCode, errorMessage);
        closeLoading();
    });
}


/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doRemoteControllerBack(serviceId, sessionKey){
	searchSystem(serviceId);
}

/** 
 * IrDataの取得
 *
 * @param {String}serviceId サービスID
 */
function doRemoteControllerGet(serviceId) {
	
	
	closeLoading();
    showLoading();
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("remote_controller");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        var cmd = json.message;
        reloadMenu(cmd);
        
        var str = "";
        str += '<center>';
        str += '<input type="button" onclick="doRemoteControllerGet(\'' + serviceId + '\');" value="get" name="get" >';
        str += '<input type="button" onclick="doRemoteControllerSend(\'' + serviceId + '\');" value="send" name="send">';
        str += '</center>';

        reloadContent(str);
        closeLoading();
    }, function(errorCode, errorMessage) {
        showError("GET remote_controller", errorCode, errorMessage);
        closeLoading();
    });
}