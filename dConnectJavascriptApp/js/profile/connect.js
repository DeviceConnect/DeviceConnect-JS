/**
 connect.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** 
 * Connect Menu
 *
 * @param {String} serviceId サービスID
 */
function showConnect(serviceId) {
    initAll();
    var sessionKey = currentClientId;
    setTitle("Connect Profile");
    
    var btnStr = getBackButton('Device Top', 'doSettingBack',  serviceId, sessionKey);
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

    doCheckBluetooth(serviceId);
    doCheckBLE(serviceId);
    doCheckWifi(serviceId);
    doCheckNfc(serviceId);
    
    doRegisterWifiChangeEvent(serviceId, sessionKey);
    doRegisterBluetoothChangeEvent(serviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/** 
 * Bluetoothが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckBluetooth(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("bluetooth");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);

        changeSlider('bluetooth', json.enable ? 1 : 0);
        $('#bluetooth').bind("change", function(event, ui) {
            if ($('#bluetooth').val() === "off") {
                doConnectBluetooth(serviceId, false);
            } else if ($('#bluetooth').val() === "on") {
                doConnectBluetooth(serviceId, true);
            }
        });
    }, function(errorCode, errorMessage) {
        showError("connect/bluetooth", errorCode, errorMessage);
    });
}

/** 
 * BLEが有効かどうかのチェック
 * 
 * @param {String}serviceId サービスID
 */
function doCheckBLE(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("ble");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        changeSlider('ble', json.enable ? 1 : 0);
        $('#ble').bind("change", function(event, ui) {
            if ($('#ble').val() === "off") {
                doConnectBLE(serviceId, false);
            } else if ($('#ble').val() === "on") {
                doConnectBLE(serviceId, true);
            }
        });
    }, function(errorCode, errorMessage) {
        showError("GET connect/ble", errorCode, errorMessage);
    });
}

/** 
 * Wifiが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckWifi(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("wifi");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        changeSlider('wifi', json.enable ? 1 : 0);
        $('#wifi').bind("change", function(event, ui) {
            if ($('#wifi').val() === "off") {
                doConnectWifi(serviceId, false);
            } else if ($('#wifi').val() === "on") {
                doConnectWifi(serviceId, true);
            }
        });
    }, function(errorCode, errorMessage) {
        showError("GET connect/wifi", errorCode, errorMessage);
    });
}

/** 
 * NFCが有効かどうかのチェック
 *
 * @param {String}serviceId サービスID
 */
function doCheckNfc(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("nfc");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        changeSlider('nfc', json.enable ? 1 : 0);
        $('#nfc').bind("change", function(event, ui) {
            if ($('#nfc').val() === "off") {
                doConnectNfc(serviceId, false);
            } else if ($('#nfc').val() === "on") {
                doConnectNfc(serviceId, true);
            }
        });
    }, function(errorCode, errorMessage) {
        showError("GET connect/nfc", errorCode, errorMessage);
    });
}

/** 
 * WifiのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectWifi(serviceId, connect) {
    doDeviceOn("wifi", serviceId, connect);
}

/** 
 * BluetoothのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectBluetooth(serviceId, connect) {
    doDeviceOn("bluetooth", serviceId, connect);
}

/** 
 * BLEのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectBLE(serviceId, connect) {
    doDeviceOn("ble", serviceId, connect);
}


/** 
 * NFCのOn/Off
 *
 * @param {String}serviceId サービスID
 * @param {Boolean}connect true ON, false OFF
 */
function doConnectNfc(serviceId, connect) {
    alert("Not supported.");
    changeSlider("nfc", 1);
}

/**
 * 各種通信部分の設定
 *
 * @param {String} type Bluetooth or Wifi
 * @param {String} serviceId サービスID
 * @param {Boolean} connect true ON, false OFF
 */
 function doDeviceOn(type, serviceId, connect) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute(type);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    if (connect){
        dConnect.put(uri, null, null, function(json) {
            if (DEBUG) console.log("Response: ", json);
            if (type === "ble" || type === "bluetooth"){
                changeSlider("bluetooth", 1);
                changeSlider("ble", 1);
            } else {
                changeSlider(type, 1);
            }
        }, function(errorCode, errorMessage) {
            showError("PUT connect/" + type, errorCode, errorMessage);
            changeSlider(type, 0);
        });
    } else {
        dConnect.delete(uri, null, null, function(json) {
            if (DEBUG) console.log("Response: ", json);
            if(type === "ble" || type === "bluetooth"){
                changeSlider("bluetooth", 0);
                changeSlider("ble", 0);
            } else {
                changeSlider(type, 0);
            }
        }, function(errorCode, errorMessage) {
            showError("DELETE connect/" + type, errorCode, errorMessage);
            changeSlider(type, 1);
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
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterWifiChangeEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onwifichange");
    builder.setServiceId(serviceId);
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
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterBluetoothChangeEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onbluetoothchange");
    builder.setServiceId(serviceId);
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
 * serviceId {String}サービスID
 * sessionKey {String}セッションKEY
 */
function doSettingBack(serviceId, sessionKey){
    doUnregisterWifiChangeEvent(serviceId, sessionKey);
    doUnregisterBluetoothChangeEvent(serviceId, sessionKey);
    searchSystem(serviceId);
}

/**
 * Wifi Change Event削除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterWifiChangeEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onwifichange");
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
 * Bluetooth Change Event削除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterBluetoothChangeEvent(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("connect");
    builder.setAttribute("onbluetoothchange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
    
}
