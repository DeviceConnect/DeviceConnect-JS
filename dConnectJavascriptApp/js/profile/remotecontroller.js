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
    btnStr += getBackButton('Battery Top', 'doRemoteControllerBack', serviceId, "");
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

    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);

        if (json.result == 0) {
        	var cmd = json.message;
        	reloadMenu(cmd);
        	
            var str = "";
            str += '<center>';
            str += '<input type="button" onclick="doRemoteControllerGet(\'' + serviceId + '\');" value="get" name="get" >';
            str += '<input type="button" onclick="doRemoteControllerSend(\'' + serviceId + '\');" value="send" name="send">';
            str += '</center>';

            reloadContent(str);
            
            closeLoading();
        } else {
			showError("GET remote_controller", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}