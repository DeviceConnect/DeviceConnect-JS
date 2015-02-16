/**
 battery.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Battery Menu
 * 
 * @param {String} serviceId サービスID
 */
function showBattery(serviceId) {
    initAll();
    setTitle("Battery Profile");

    var btnStr = getBackButton('Device Top', 'doBatteryBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    if(myDeviceName.indexOf("Host") != -1){
        str += '<li><a href="javascript:doBatteryAll(\'' + serviceId + '\');">Show battery info</a></li>';
        str += '<li><a href="javascript:showChargeEvent(\'' + serviceId + '\');" >Battery Event(onchargingchange)</a></li>';
    } else{
        str += '<li><a href="javascript:doBatteryAll(\'' + serviceId + '\');">Show battery info</a></li>';
        str += '<li><a href="javascript:showBatteryChangeEvent(\'' + serviceId + '\');" >Battery Event(onbatterychange)</a></li>';
        str += '<li><a href="javascript:showChargeEvent(\'' + serviceId + '\');" >Battery Event(onchargingchange)</a></li>';
    }
    reloadList(str);
}

/**
 * Show Battery Change Event
 *
 * @param {String} serviceId サービスID
 */
function showBatteryChangeEvent(serviceId){
    initAll();
    setTitle("Battery Event");

    var sessionKey = currentClientId;

    var btnStr = getBackButton('Device Top', 'doBatteryChangeBack', serviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);
    
    var str = "";
    str += '<form name="batteryForm">';
    str += 'Battery<br>';
    str += makeInputText("chargingTime", "chargingTime", "chargingTime"); 
    str += makeInputText("dischargingTime", "dischargingTime", "dischargingTime");
    str += makeInputText("level", "level", "level");
    str += '</form>';
    reloadContent(str);

    doRegisterBatteryChangeEvent(serviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show Battery Charge Event
 *
 * @param {String}serviceId サービスID
 */
function showChargeEvent(serviceId){
    initAll();
    setTitle("Battery Event");

    var sessionKey = currentClientId;

    var btnStr = getBackButton('Battery Top', 'doBatteryChargingBack', serviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("charging");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    closeLoading();
    showLoading();
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        closeLoading();

        var charging = json.charging;
        var str = "";
        str += '<center>';
        str += '<form  name="batteryForm">';
        str += '<select name="charging" id="charging" data-role="slider">';
        if (charging) {
            str += '<option value="false">False</option>';
            str += '<option value="true" selected="selected">True</option>';
        } else {
            str += '<option value="false" selected="selected">False</option>';
            str += '<option value="true">True</option>';
        }
        str += "</select>";
        str += '</form>';
        str += '</center>';
        reloadContent(str);

        doRegisterChargingEvent(serviceId, sessionKey);
        dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("GET battery/charging", errorCode, errorMessage);
    });
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryChargingBack(serviceId, sessionKey){
    doUnregisterChargingEvent(serviceId, sessionKey);
    showBattery(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryBack(serviceId, sessionKey){
    searchSystem(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryChangeBack(serviceId, sessionKey){
    doUnregisterBatteryChangeEvent(serviceId, sessionKey);
    showBattery(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryAllBack(serviceId, sessionKey){
    showBattery(serviceId);
}

/**
 * Register Battery Charging Event
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterChargingEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        
        var json = JSON.parse(message);
        if(json.battery){
            if (json.battery.charging) {
                $('#charging').prop('selectedIndex', 1);
                $('#charging').slider('refresh');
            } else{
                $('#charging').prop('selectedIndex', 0);
                $('#charging').slider('refresh');
            }
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Unregister Battery Charging Event
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterChargingEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Register Battery Change Event
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterBatteryChangeEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onbatterychange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        
        var json = JSON.parse(message);
        if(json.battery){
        	if (json.battery.chargingTime) {
	            document.batteryForm.chargingTime.value = json.battery.chargingTime;
	        }
	        if (json.battery.dischargingTime) {
	            document.batteryForm.dischargingTime.value = json.battery.dischargingTime;
	        }
	        if (json.battery.level) {
	            document.batteryForm.level.value = json.battery.level;
	        }
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Unregister Battery Change Event
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterBatteryChangeEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onbatterychange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Battery Profile
 */
function doBatteryAll(serviceId) {
    initAll();
    setTitle("Battery Info");

    var btnStr = getBackButton('Battery Top', 'doBatteryAllBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    closeLoading();
    showLoading();
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        closeLoading();
        var level = json.level * 100;
        var str = "";
        str += '<label for="slider-0">LEVEL:</label>';
        str += '<input type="range" name="slider" id="volume" value="' + level + '" min="0" max="100"  />';
        
        if (json.charging) {
            str += 'Status: Charging';
        } else {
            str += 'Status: Not charging';
        }
        
        reloadContent(str);
    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("GET battery", errorCode, errorMessage);
    });
}
