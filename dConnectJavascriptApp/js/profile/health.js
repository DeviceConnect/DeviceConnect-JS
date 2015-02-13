
/**
 health.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Health Menu
 * 
 * @param {String} serviceId サービスID
 */
function showHealth(serviceId) {
    initAll();
    setTitle("Health Profile");

    var btnStr = getBackButton('Device Top', 'doHealthBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    str += '<li><a href="javascript:showHeartRate(\'' + serviceId + '\');">Get HeartRate</a></li>';
    reloadList(str);
}

function showHeartRate(serviceId) {
	initAll();
    setTitle("Heart Rate");

    var btnStr = getBackButton('Health Top', 'doHealthAllBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var builder = new dConnect.URIBuilder();
    builder.setProfile("health");
    builder.setAttribute("heartrate");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) {
    	console.log("Uri: " + uri);
    }

    closeLoading();
    showLoading();
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        closeLoading();

        var str = "";
        str += makeInputText('HeartRate', 'heartRate', 'HeartRate');
  		str += '<input data-role="button" type="button" name="button" id="button" value="RegisterEvent" onclick="javascript:registerHeartRate(\'' + serviceId + '\');"/><br>';
  		str += '<input data-role="button" type="button" name="button" id="button" value="UnregisterEvent" onclick="javascript:unregisterHeartRate(\'' + serviceId + '\');"/><br>';

        reloadContent(str);

        $('#heartRate').val(json.heartRate);

    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("GET HeartRate", errorCode, errorMessage);
    });
}

function registerHeartRate(serviceId) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("health");
    builder.setAttribute("heartrate");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(currentClientId);

    var uri = builder.build();
    if (DEBUG) {
    	console.log("Uri: " + uri);
    }

    dConnect.addEventListener(uri, function(message) {
        if (DEBUG) {
        	console.log("Event-Message: " + message);
        }

        var json = JSON.parse(message);
        $('#heartRate').val(json.heartRate);
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });

    dConnect.connectWebSocket(currentClientId, function(errorCode, errorMessage) {});
}

function unregisterHeartRate(serviceId) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("health");
    builder.setAttribute("heartrate");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(currentClientId);

    var uri = builder.build();
    if (DEBUG) {
    	console.log("Uri: " + uri);
    }

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

function doHealthAllBack(serviceId, sessionKey) {
    showHealth(serviceId);
}

