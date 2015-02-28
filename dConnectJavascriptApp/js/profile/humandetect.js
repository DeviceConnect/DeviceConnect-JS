/**
 humandetect.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
var currentPath = "/";
var deleteMode;

/**
 * HumanDetectプロファイルのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showHumanDetect(serviceId) {
    initAll();
    setTitle("Human Detect Profile", "black");

    var btnStr = getBackButton('Device Top', 'doCanvasBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    str += '<li><a href="javascript:showHumanDetectGet(\'' + serviceId + '\');" value="send">HumanDetect Body Detection GET API</a></li>';
    
    reloadList(str);
}

/**
 * PathからURIを取得
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 */
function doGetUriFromPath(serviceId, path){
    var path = $('#path').val();
    var builder = new dConnect.URIBuilder();
    builder.setProfile("canvas");
    builder.setAttribute("receive");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("path", path);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        alert("uri:" + json.uri + "\n" + "mimeType:" + json.mimeType);
    }, function(errorCode, errorMessage) {
        showError("GET canvas/receive", errorCode, errorMessage);
    });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doCanvasBack(serviceId, sessionKey){
    searchDevice(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doHumanDetectBodyGetBack(serviceId, sessionKey){
    showHumanDetect(serviceId);
}

/**
 * 人体検知GET送信フォームを表示する.
 *
 * @param {String} serviceId　サービスID
 */
function showHumanDetectGet(serviceId) {
    initAll();
    setTitle("HumanDetect Profile(GET API)");

    var btnStr = getBackButton('HumanDetect Top', 'doHumanDetectBodyGetBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);
    
    var str = "";
    str += '<input type="button" name="bodyDetectButton" id="bodyDetectButton" value="Body Detect GET" onclick="doHumanDetectBodyGet(\'' + serviceId + '\');"/>';
    str += '<input type="button" name="handDetectButton" id="handDetectButton" value="Hand Detect GET" onclick="doHumanDetectHandGet(\'' + serviceId + '\');"/>';
    str += '<input type="button" name="faceDetectButton" id="faceDetectButton" value="Face Detect GET" onclick="doHumanDetectFaceGet(\'' + serviceId + '\');"/>';
    
    reloadContent(str);
}


/**
 * Human Detect Body.
 */
function doHumanDetectBodyGet(serviceId) {
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setInterface("detection");
    builder.setAttribute("body");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        closeLoading();

        var str = "";
/*
        var level = json.level * 100;
        str += '<label for="slider-0">LEVEL:</label>';
        str += '<input type="range" name="slider" id="volume" value="' + level + '" min="0" max="100"  />';
        
        if (json.charging) {
            str += 'Status: Charging';
        } else {
            str += 'Status: Not charging';
        }
*/
        str += 'Success: json=' + json.toString();

        reloadContent(str);
    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("GET detection/body", errorCode, errorMessage);
    });
}

/**
 * Human Detect Hand.
 */
function doHumanDetectHandGet(serviceId) {
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setInterface("detection");
    builder.setAttribute("hand");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        closeLoading();

        var str = "";
/*
        var level = json.level * 100;
        str += '<label for="slider-0">LEVEL:</label>';
        str += '<input type="range" name="slider" id="volume" value="' + level + '" min="0" max="100"  />';
        
        if (json.charging) {
            str += 'Status: Charging';
        } else {
            str += 'Status: Not charging';
        }
*/
        str += 'Success: json=' + json.toString();

        reloadContent(str);
    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("GET detection/hand", errorCode, errorMessage);
    });
}

/**
 * Human Detect Face.
 */
function doHumanDetectFaceGet(serviceId) {
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setInterface("detection");
    builder.setAttribute("face");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        closeLoading();
        
        var str = getHumanDetectResponseString(json);
        
        reloadContent(str);
    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("GET detection/face", errorCode, errorMessage);
    });
}

function getHumanDetectResponseString(json) {
    var str = "";
    str += 'result=' + json.result + '<br>';
    str += 'bodyDetects=' + (json.bodyDetects ? json.bodyDetects.length : 'undefined') + '<br>';
    str += 'handDetects=' + (json.handDetects ? json.handDetects.length : 'undefined') + '<br>';
    str += 'faceDetects=' + (json.faceDetects ? json.faceDetects.length : 'undefined') + '<br>';
    return str;
}
