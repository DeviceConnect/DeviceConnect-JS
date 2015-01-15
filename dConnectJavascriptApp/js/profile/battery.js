/**
 battery.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show Battery Menu
 * 
 * @param {String}deviceId デバイスID
 */
function showBattery(deviceId) {
    initAll();
    setTitle("Battery Profile");

    var btnStr = getBackButton('Device Top', 'doBatteryBack', deviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    if(myDeviceName.indexOf("Host") != -1){
        str += '<li><a href="javascript:doBatteryAll(\'' + deviceId + '\');">Show battery info</a></li>';
        str += '<li><a href="javascript:showChargeEvent(\'' + deviceId + '\');" >Battery Event(onchargingchange)</a></li>';
    } else{
        str += '<li><a href="javascript:doBatteryAll(\'' + deviceId + '\');">Show battery info</a></li>';
        str += '<li><a href="javascript:showBatteryChangeEvent(\'' + deviceId + '\');" >Battery Event(onbatterychange)</a></li>';
        str += '<li><a href="javascript:showChargeEvent(\'' + deviceId + '\');" >Battery Event(onchargingchange)</a></li>';
    }
    reloadList(str);
}

/**
 * Show Battery Change Event
 *
 * @param {String}deviceId デバイスID
 */
function showBatteryChangeEvent(deviceId){
    initAll();
    setTitle("Battery Event");

    var sessionKey = currentClientId;

    var btnStr = getBackButton('Device Top', 'doBatteryChangeBack', deviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);
    
    var str = "";
    str += '<form name="batteryForm">';
    str += 'Battery<br>';
    str += makeInputText("chargingTime", "chargingTime", "chargingTime"); 
    str += makeInputText("dischargintTime", "dischargintTime", "dischargintTime");
    str += makeInputText("level", "level", "level");
    str += '</form>';
    reloadContent(str);

    doRegisterBatteryChangeEvent(deviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show Battery Charge Event
 *
 * @param {String}deviceId デバイスID
 */
function showChargeEvent(deviceId){
    initAll();
    setTitle("Battery Event");

    var sessionKey = currentClientId;

    var btnStr = getBackButton('Battery Top', 'doBatteryChargingBack', deviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("charging");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    closeLoading();
    showLoading();
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        var json = JSON.parse(responseText);
        
        if (DEBUG) console.log("Response: " + responseText);
        
        if (json.result == 0) {
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
    
            doRegisterChargingEvent(deviceId, sessionKey);
            dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
           
        } else {
            closeLoading();
            showError("GET battery/charging", json);
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
function doBatteryChargingBack(deviceId, sessionKey){
    doUnregisterChargingEvent(deviceId, sessionKey);
    showBattery(deviceId);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryBack(deviceId, sessionKey){
    searchSystem(deviceId);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryChangeBack(deviceId, sessionKey){
    doUnregisterBatteryChangeEvent(deviceId, sessionKey);
    showBattery(deviceId);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doBatteryAllBack(deviceId, sessionKey){
    showBattery(deviceId);
}

/**
 * Register Battery Charging Event
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterChargingEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setDeviceId(deviceId);
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
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterChargingEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setDeviceId(deviceId);
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
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterBatteryChangeEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onbatterychange");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        
        var json = JSON.parse(message);
        if(json.battery){
            document.batteryForm.chargingTime.value = json.battery.chargingTime;
            document.batteryForm.dischargintTime.value = json.battery.dischargintTime;
            document.batteryForm.level.value = json.battery.level;
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Unregister Battery Change Event
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterBatteryChangeEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onbatterychange");
    builder.setDeviceId(deviceId);
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
function doBatteryAll(deviceId) {
    initAll();
    setTitle("Battery Info");

    var btnStr = getBackButton('Battery Top', 'doBatteryAllBack', deviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    closeLoading();
    showLoading();
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        var json = JSON.parse(responseText);
        
        if (DEBUG) console.log("Response: " + responseText);
        
        if (json.result == 0) {
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
        } else {
            closeLoading();
            showError("GET battery", json);
        }
    }, function(xhr, textStatus, errorThrown) {
        
    });
}
