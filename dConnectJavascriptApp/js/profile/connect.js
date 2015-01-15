/**
 connect.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** 
 * Connect Menu
 *
 * @param {String} deviceId デバイスID
 */
function showConnect(deviceId) {
    initAll();
    var sessionKey = currentClientId;
    setTitle("Connect Profile");
    
    var btnStr = getBackButton('Device Top', 'doSettingBack',  deviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);
    
    var str = ""; 
    str += 'Bluetooth:<br>';
    str += '<select name="bluetooth" id="bluetooth" data-role="slider">';
    str += '<option value="off" id="off">Off</option>';
    str += '<option value="on" id="on">On</option>';
    str += '</select><br>';
    str += 'BLE:<br>';
    str += '<select name="ble" id="ble" data-role="slider">';
    str += '<option value="off" id="off">Off</option>';
    str += '<option value="on" id="on">On</option>';
    str += '</select><br>';
    str += 'Wifi:<br>';
    str += '<select name="wifi" id="wifi" data-role="slider">';
    str += '<option value="off">Off</option>';
    str += '<option value="on">On</option>';
    str += '</select><br>';
    str += 'NFC:<br>';
    str += '<select name="nfc" id="nfc" data-role="slider">';
    str += '<option value="off">Off</option>';
    str += '<option value="on">On</option>';
    str += '</select><br>'; 
    reloadContent(str);

    doCheckBluetooth(deviceId);
    doCheckBLE(deviceId);
    doCheckWifi(deviceId);
    doCheckNfc(deviceId);
    
    doRegisterWifiChangeEvent(deviceId, sessionKey);
    doRegisterBluetoothChangeEvent(deviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/** 
 * Bluetoothが有効かどうかのチェック
 *
 * @param {String}deviceId デバイスID
 */
function doCheckBluetooth(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("bluetooth");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            changeSlider('bluetooth', json.enable ? 1 : 0);
            $('#bluetooth').bind("change", function(event, ui) {
                if ($('#bluetooth').val() === "off") {
                    doConnectBluetooth(deviceId, false);
                } else if ($('#bluetooth').val() === "on") {
                    doConnectBluetooth(deviceId, true);
                }
            });
        } else {
             showError("connect/bluetooth", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/** 
 * BLEが有効かどうかのチェック
 * 
 * @param {String}deviceId デバイスID
 */
function doCheckBLE(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("ble");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            changeSlider('ble', json.enable ? 1 : 0);
            $('#ble').bind("change", function(event, ui) {
                if ($('#ble').val() === "off") {
                    doConnectBLE(deviceId, false);
                } else if ($('#ble').val() === "on") {
                    doConnectBLE(deviceId, true);
                }
            });
        } else {
            showError("GET connect/ble", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/** 
 * Wifiが有効かどうかのチェック
 *
 * @param {String}deviceId デバイスID
 */
function doCheckWifi(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("wifi");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            changeSlider('wifi', json.enable ? 1 : 0);
            $('#wifi').bind("change", function(event, ui) {
                if ($('#wifi').val() === "off") {
                    doConnectWifi(deviceId, false);
                } else if ($('#wifi').val() === "on") {
                    doConnectWifi(deviceId, true);
                }
            });
        } else {
             showError("GET connect/wifi", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/** 
 * NFCが有効かどうかのチェック
 *
 * @param {String}deviceId デバイスID
 */
function doCheckNfc(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("nfc");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            changeSlider('nfc', json.enable ? 1 : 0);
            $('#nfc').bind("change", function(event, ui) {
                if ($('#nfc').val() === "off") {
                    doConnectNfc(deviceId, false);
                } else if ($('#nfc').val() === "on") {
                    doConnectNfc(deviceId, true);
                }
            });
            
        } else {
            showError("GET connect/nfc", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/** 
 * WifiのOn/Off
 *
 * @param {String}deviceId デバイスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectWifi(deviceId, connect) {
    doDeviceOn("wifi", deviceId, connect);
}

/** 
 * BluetoothのOn/Off
 *
 * @param {String}deviceId デバイスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectBluetooth(deviceId, connect) {
    doDeviceOn("bluetooth", deviceId, connect);
}

/** 
 * BLEのOn/Off
 *
 * @param {String}deviceId デバイスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectBLE(deviceId, connect) {
    doDeviceOn("ble", deviceId, connect);
}


/** 
 * NFCのOn/Off
 *
 * @param {String}deviceId デバイスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectNfc(deviceId, connect) {
    alert("Not supported.");
    changeSlider("nfc", 1);
}

/**
 * 各種通信部分の設定
 *
 * @param {String} type Bluetooth or Wifi
 * @param {String} deviceId デバイスID
 * @param {Boolean} connect true ON, false OFF
 */
 function doDeviceOn(type, deviceId, connect) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute(type);
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    if (connect){
        dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
            if (DEBUG) console.log("Response: " + responseText);
            var json = JSON.parse(responseText);
            if (json.result === 0) {
                if (type === "ble" || type === "bluetooth"){
                    changeSlider("bluetooth", 1);
                    changeSlider("ble", 1);
                } else {
                    changeSlider(type, 1);
                }
            } else {
                showError("PUT connect/" + type, json);
                changeSlider(type, 0);
            }
        });
    } else {
        dConnect.execute('DELETE', uri, null, null, function(status, headerMap, responseText) {
            if (DEBUG) console.log("Response:" + responseText);
            var json = JSON.parse(responseText);
            if (json.result === 0) {
                if(type === "ble" || type === "bluetooth"){
                    changeSlider("bluetooth", 0);
                    changeSlider("ble", 0);
                } else {
                    changeSlider(type, 0);
                }
            } else {
                showError("DELETE connect/" + type, json);
                changeSlider(type, 1);
            }
        });
    }
}

/**
 * sliderを変化させる
 *
 * @param {String}name 名前
 * @param {String}status ステータス(0:off, 1:on)
 */
function changeSlider(name, status){
    if(name === "nfc"){
        $('#nfc').prop('selectedIndex', status);
        $('#nfc').slider('refresh');
    } else if(name === "ble"){
        $('#ble').prop('selectedIndex', status);
        $('#ble').slider('refresh');
    }  else if(name === "bluetooth"){
        $('#bluetooth').prop('selectedIndex', status);
        $('#bluetooth').slider('refresh');
    }  else if(name === "wifi"){
        $('#wifi').prop('selectedIndex', status);
        $('#wifi').slider('refresh');
    }
}

/**
 * Wifi Change Event
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterWifiChangeEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onwifichange");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        
        var json = JSON.parse(message);
        if(json.connectStatus.enable === true){
            changeSlider("wifi", 1);
        } else{
            changeSlider("wifi", 0);
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}


/**
 * Bluetooth Change Event
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterBluetoothChangeEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onbluetoothchange");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        
        var json = JSON.parse(message);
        if(json.connectStatus.enable === true){
            changeSlider("bluetooth", 1);
            changeSlider("ble", 1);
        } else{
            changeSlider("bluetooth", 0);
            changeSlider("ble", 0);
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Backボタン
 *
 * deviceId {String}デバイスID
 * sessionKey {String}セッションKEY
 */
function doSettingBack(deviceId, sessionKey){
    doUnregisterWifiChangeEvent(deviceId, sessionKey);
    doUnregisterBluetoothChangeEvent(deviceId, sessionKey);
    searchSystem(deviceId);
}

/**
 * Wifi Change Event削除
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterWifiChangeEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onwifichange");
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
 * Bluetooth Change Event削除
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterBluetoothChangeEvent(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onbluetoothchange");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
    
}
