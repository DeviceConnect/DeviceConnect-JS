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

    var btnStr = getBackButton('Device Top', 'doHumanDetectBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    str += '<li><a href="javascript:showHumanDetectGet(\'' + serviceId + '\');" value="send">HumanDetect Detection GET API</a></li>';
    str += '<li><a href="javascript:showHumanDetectEvent(\'' + serviceId + '\');" value="send">HumanDetect Detection EVENT API</a></li>';
    
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
function doHumanDetectBack(serviceId, sessionKey){
    if (sessionKey != "") {
        doHumanDetectBodyUnregister(serviceId, sessionKey);
        doHumanDetectHandUnregister(serviceId, sessionKey);
        doHumanDetectFaceUnregister(serviceId, sessionKey);
    }
    searchDevice(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doHumanDetectBodyBack(serviceId, sessionKey){
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

    var btnStr = getBackButton('HumanDetect Top', 'doHumanDetectBodyBack', serviceId, "");
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

/**
 * 人体検知Eventフォームを表示する.
 *
 * @param {String} serviceId　サービスID
 */
function showHumanDetectEvent(serviceId) {
    initAll();
    setTitle("Human Detect Profile(Event)");

    var sessionKey = currentClientId;
    var btnStr = getBackButton('Device Top','doHumanDetectBack', serviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var str = "";
    str += '<form  name="humanDetectForm">';
    str += 'Event(body)<br>';
    str += '<input type="text" id="eventInfoBody" width="100%">';
    str += 'Event(hand)<br>';
    str += '<input type="text" id="eventInfoHand" width="100%">';
    str += 'Event(face)<br>';
    str += '<input type="text" id="eventInfoFace" width="100%">';
    str += '</form>';
    reloadContent(str);

    doHumanDetectFaceRegist(serviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}
/**
 * Human Detect Event Register (body)
 */
function doHumanDetectBodyeRegist(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setAttribute("onbodydetection");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
        
        var bodyLength = 0;
        var handLength = 0;
        var faceLength = 0;
        if (json.bodyDetects) {
            bodyLength = json.bodyDetects.length;
        }
        if (json.handDetects) {
            handLength = json.handDetects.length;
        }
        if (json.faceDetects) {
            faceLength = json.faceDetects.length;
        }
        
        var eventInfo = "[" + getStrTime() + "] body:" + bodyLength + " hand:" + handLength + " face:" + faceLength;
        $('#eventInfoBody').val(eventInfo);
        
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Human Detect Event Register (hand)
 */
function doHumanDetectHandRegist(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setAttribute("onhanddetection");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
        
        var bodyLength = 0;
        var handLength = 0;
        var faceLength = 0;
        if (json.bodyDetects) {
            bodyLength = json.bodyDetects.length;
        }
        if (json.handDetects) {
            handLength = json.handDetects.length;
        }
        if (json.faceDetects) {
            faceLength = json.faceDetects.length;
        }
        
        var eventInfo = "[" + getStrTime() + "] body:" + bodyLength + " hand:" + handLength + " face:" + faceLength;
        $('#eventInfoHand').val(eventInfo);
        
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Human Detect Event Register (face)
 */
function doHumanDetectFaceRegist(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setAttribute("onfacedetection");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    builder.addParameter("options", "eye,nose,mouth,blink,age,gender,faceDirection,gaze,expression");
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if(DEBUG) console.log("Event-Message:"+message)
        
        var json = JSON.parse(message);
        
        var bodyLength = 0;
        var handLength = 0;
        var faceLength = 0;
        if (json.bodyDetects) {
            bodyLength = json.bodyDetects.length;
        }
        if (json.handDetects) {
            handLength = json.handDetects.length;
        }
        if (json.faceDetects) {
            faceLength = json.faceDetects.length;
        }
        
        var eventInfo = "[" + getStrTime() + "] body:" + bodyLength + " hand:" + handLength + " face:" + faceLength;
        $('#eventInfoFace').val(eventInfo);
        
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Human Detect Event Unregister (body)
 */
function doHumanDetectBodyUnregister(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setAttribute("onbodydetection");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri : "+uri);

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Human Detect Event Unregister (hand)
 */
function doHumanDetectHandUnregister(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setAttribute("onhanddetection");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri : "+uri);

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * Human Detect Event Unregister (face)
 */
function doHumanDetectFaceUnregister(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("humandetect");
    builder.setAttribute("onfacedetection");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri : "+uri);

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

function getStrTime() {
	var now = new Date();

	//時・分・秒を取得する
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var strTime = hour + ":" + minute + ":" + second;
	return strTime;
}
