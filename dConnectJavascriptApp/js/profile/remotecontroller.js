/**
 remotecontroller.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * Remote Controller Profile
 *
 * @param {String}deviceId デバイスID
 */
function showRemoteController(deviceId) {
	
    initAll();
    
    var btnStr = "";    
    btnStr += getBackButton('Battery Top', 'doRemoteControllerBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";
    str += '<input type="button" onclick="doRemoteControllerGet(\'' + deviceId + '\');" value="get" name="get" >';
    reloadContent(str);
}

/**
 *
 * IrDataの送信
 *
 * @param {String}deviceId デバイスID
 */
function doRemoteControllerSend(deviceId) {
	
	closeLoading();
    showLoading();
    
    var message = document.getElementById("menu").innerHTML;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("remote_controller");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("message", message);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)


    dConnect.execute('POST', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);

        if (json.result == 0) {
            closeLoading();
        } else {
			showError("POST remote_controller", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}


/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doRemoteControllerBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/** 
 * IrDataの取得
 *
 * @param {String}deviceId デバイスID
 */
function doRemoteControllerGet(deviceId) {
	
	
	closeLoading();
    showLoading();
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("remote_controller");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)

    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);

        if (json.result == 0) {
        	var cmd = json.message;
        	reloadMenu(cmd);
        	
            var str = "";
            str += '<center>';
            str += '<input type="button" onclick="doRemoteControllerGet(\'' + deviceId + '\');" value="get" name="get" >';
            str += '<input type="button" onclick="doRemoteControllerSend(\'' + deviceId + '\');" value="send" name="send">';
            str += '</center>';

            reloadContent(str);
            
            closeLoading();
        } else {
			showError("GET remote_controller", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}