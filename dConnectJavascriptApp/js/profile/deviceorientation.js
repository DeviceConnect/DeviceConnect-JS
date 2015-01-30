/**
 deviceorientation.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * DeviceOrientation
 */
function showDeviceOrientation(serviceId) {
    initAll();
    setTitle("DeviceOrientation Profile(Event)");

    var sessionKey = currentClientId;
    var btnStr = getBackButton('Device Top','doOrientationBack', serviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    str += '<form  name="deviceOrientationForm">';
    str += 'Accelerometer<br>';
    str += '<input type="text" id="accelX" width="100%">';
    str += '<input type="text" id="accelY" width="100%">';
    str += '<input type="text" id="accelZ" width="100%">';
    str += 'Accelerometer (Gravity)<br>';
    str += '<input type="text" id="accelXG" width="100%">';
    str += '<input type="text" id="accelYG" width="100%">';
    str += '<input type="text" id="accelZG" width="100%">';
    str += 'Rotation<br>';
    str += '<input type="text" id="rotationAlpha" width="100%">';
    str += '<input type="text" id="rotationBeta" width="100%">';
    str += '<input type="text" id="rotationGamma" width="100%">';
    str += 'Interval<br>';
    str += '<input type="text" id="interval" width="100%">';
    str += '</form>';
    reloadContent(str);

    doDeviceOrientationRegist(serviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doOrientationBack(serviceId, sessionKey){
    doDeviceOrientationUnregister(serviceId, sessionKey);
    searchSystem(serviceId);
}

/**
 * DeviceOrientation Event
 */
function doDeviceOrientationRegist(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("deviceorientation");
    builder.setAttribute("ondeviceorientation");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
        if (json.orientation) {

            if (json.orientation.acceleration) {
                $('#accelX').val("x: " + json.orientation.acceleration.x);
                $('#accelY').val("y: " + json.orientation.acceleration.y);
                $('#accelZ').val("z: " + json.orientation.acceleration.z);
            }

            if (json.orientation.accelerationIncludingGravity) {
                $('#accelXG').val("x: " + json.orientation.accelerationIncludingGravity.x);
                $('#accelYG').val("y: " + json.orientation.accelerationIncludingGravity.y);
                $('#accelZG').val("z: " + json.orientation.accelerationIncludingGravity.z);
            }

            if (json.orientation.rotationRate) {
                $('#rotationBeta').val("β: " + json.orientation.rotationRate.beta);
                $('#rotationGamma').val("γ: " + json.orientation.rotationRate.gamma);
                $('#rotationAlpha').val("α: " + json.orientation.rotationRate.alpha);
            }

            if (json.orientation.interval) {
                $('#interval').val(json.orientation.interval);
            }
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * DeviceOrientation
 */
function doDeviceOrientationUnregister(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("deviceorientation");
    builder.setAttribute("ondeviceorientation");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri : "+uri);

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}
