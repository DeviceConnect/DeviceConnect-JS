/**
 mediastreamrecording.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
 
/**
 * MediastreamRecording Menu
 *
 * @param {String} deviceId デバイスId
 */
function showMediastreamRecording(deviceId) {
    
    initAll();
    
    var btnStr = getBackButton('Device Top','doMediaStreamRecordingBack', deviceId, "");
    reloadHeader(btnStr); 
    reloadFooter(btnStr);
     
    var str = "";
    if (myDeviceName.indexOf("Sony Camera") != -1) {
        setTitle("MediastreamRecording Profile(Sony Camera)");
        
        str += '<li><a href="javascript:doPreviewStart(\'' + deviceId + '\');">Preview</a></li>';
        str += '<li><a href="javascript:doTakePhoto(\'' + deviceId + '\');">Take Photo</a></li>';

    } else {
        setTitle("MediastreamRecording Profile");
        
        str += '<li><a href="javascript:doPreviewStart(\'' + deviceId + '\');">Preview</a></li>';
        str += '<li><a href="javascript:doTakePhoto(\'' + deviceId + '\');">Take Photo</a></li>';
        str += '<li><a href="javascript:doMediaRecord(\'' + deviceId + '\',\'video\');">Record Video</a></li>';
        str += '<li><a href="javascript:doMediaRecord(\'' + deviceId + '\',\'audio\');">Record Audio</a></li>';
    }
    reloadList(str);
}

/**
 * previewを開始する.
 *
 * @param {String} deviceId デバイスID
 */
function doRegisterPreview(deviceId) {
   
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("preview");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    if (DEBUG) console.log("Uri:" + uri)

    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);

        var json = JSON.parse(responseText);
        if (json.result == 0) {
            var myUri = json.uri;
            myUri = myUri.replace("localhost", ip);
            var img = document.getElementById("preview");
            if (img != null) {
                img.onerror = function() {
                    alert('Failed to get a preview.');
                }
                img.src = myUri;
            }
        } else {
            showError("PUT mediastream_recording/preview", json);
        }
    }, function(xhr, textStatus, errorThrown) {
        showError("PUT mediastream_recording/preview", errorThrown);
    });
}

/**
 * previewを終了する.
 *
 * @param {String} deviceId デバイスID
 */
function doUnregisterPreview(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("preview");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    if (DEBUG) console.log("Uri:" + uri)

    dConnect.execute('DELETE', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        var json = JSON.parse(responseText);
        if (json.result == 0) {
        } else {
            showError("DELETE mediastream_recording/preview", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}


/**
 * Previewの開始
 *
 * @param {String} deviceId デバイスID
 */

function doPreviewStart(deviceId) {
     var sessionKey = currentClientId;
    
    initAll();
    
    setTitle("preview");
    
    var btnStr = getBackButton('MediaStreamRecording Top','doPreviewBack', deviceId, sessionKey);
    reloadHeader(btnStr); 
    reloadFooter(btnStr);
    
    var str = "";
    str += '<center>';
    str += '<img src="./css/images/cameraWait.png" width="100%" id="preview">';
    str += '</center><br>';
    reloadContent(str);
    
    doRegisterPreview(deviceId);
}

/**
 * Take Photo
 *
 * @param {String} deviceId デバイスID
 */
function doTakePhoto(deviceId) {

    initAll();

    showLoading();
    loadFlag = false;
    var sessionKey = currentClientId;

    var str = "";
    str += getBackButton('MediaStreamRecording Top','doTakephotoBack', deviceId, sessionKey);
    reloadHeader(str);

    var str = "";
    str += makeInputText("onPhoto", "onPhoto", "onPhoto")
    str += '<center>';
    str += '<img src="./css/images/cameraWait.png" id="photo">';
    str += '</center><br>';
    str += takePhotoButton(deviceId);

    reloadContent(str);

    var str = "";
    str += getBackButton('MediaStreamRecording Top','doTakephotoBack', deviceId, sessionKey);
    reloadFooter(str);
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("takephoto");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    if (DEBUG) console.log("Uri: " + uri)

    dConnect.execute('POST', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);

        var json = JSON.parse(responseText);
        if (json.result == 0) {
            var myUri = json.uri;
            myUri  = myUri.replace("localhost", ip);
            refreshImg(myUri, "photo");
            closeLoading();
        } else {
            showError("POST mediastream_recording/takephoto", json);
        }
    }, function(xhr, textStatus, errorThrown) {

    });

    doRegisterOnPhoto(deviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Backボタン
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションキー
 */
function doTakephotoBack(deviceId, sessionKey) {
    doUnregisterOnPhoto(deviceId, sessionKey);
    showMediastreamRecording(deviceId);
}

function doPreviewStop(deviceId,sessionKey) {
    doUnregisterPreview(deviceId);
}

/**
 * Backボタン
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doPreviewBack(deviceId, sessionKey) {
    doUnregisterPreview(deviceId);
    showMediastreamRecording(deviceId);
}

/**
 * Backボタン
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEYY
 */
function doRecordMediaBack(deviceId, sessionKey) {
    showMediastreamRecording(deviceId);
}

/**
 * Backボタン
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doMediaStreamRecordingBack(deviceId, sessionKey) {
    searchSystem(deviceId);
}

/**
 * 画像のリフレッシュ
 *
 * @param {String} uri 画像のURI
 * @param {String} id 画像を表示するタグのID
 */
function refreshImg(uri, id) {
    if (!loadFlag) {
        loadFlag = true;
        var img = document.getElementById(id);
        if (img != null) {
            // MEMO: iOSではonloadがこないタイミングがあるので、その場合はタイムアウトさせる
            var timeout = setInterval(function() {
                loadFlag = false;
                clearInterval(timeout);
            }, 500);

            img.onload = function() {
                loadFlag = false;
                clearInterval(timeout);
            };
            img.src = uri + "?" + Date.now();
        }
    }
}

/**
 * Media Recorder Target指定実行
 *
 * @param {String} deviceId デバイスID
 * @param {String} target ターゲット(video, audio)
 */
function doMediaRecord(deviceId, target) {
    initAll();

    var btnStr = getBackButton('Device Top','doRecordMediaBack', deviceId, "");
    reloadHeader(btnStr); 
    reloadFooter(btnStr);

    setTitle("Recording, now");

    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("record");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("target", target);
    var uri = builder.build();

    if (DEBUG) console.log("Uri: " + uri);

    dConnect.execute('POST', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response:"+responseText);

        var json = JSON.parse(responseText);
        if (json.result == 0) {
            reloadContent(mediaStopButton(deviceId));
        } else {
            showError("POST mediastream_recording/record", json);
        }
    }, function(xhr, textStatus, errorThrown) {
        showError("POST mediastream_recording/record", errorThrown);
    });
}

/**
 * Media停止
 *
 * @param {String} deviceId デバイスID
 */
function doMediaStop(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("stop");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response:"+responseText)
        var json = JSON.parse(responseText);
        if (json.result == 0) {
            showMediastreamRecording(deviceId);
        } else {
            showError("PUT mediastream_recording/stop", json);
        }
    }, function(xhr, textStatus, errorThrown) {
        showError("PUT mediastream_recording/stop", errorThrown);
    });
}

/**
 * Media Recorder情報の取得
 *
 * @param {String} deviceId デバイスID
 */
function doGetMediaRecorder(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("mediarecorder");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response:"+responseText)
        var json = JSON.parse(responseText);
        if (json.result == 0) {
            console.log(json);
        } else {
            showError("GET mediastream_recording/mediarecorder", json);
        }
    }, function(xhr, textStatus, errorThrown) {
        showError("GET mediastream_recording/mediarecorder", errorThrown);
    });
}

/**
 * メディアの停止
 *
 * @param {String} deviceId デバイスID
 */
function mediaStopButton(deviceId){
    var str = "";
    str += '<center>';
    str += '<input data-icon="stop"  ';
    str += 'onclick="javascript:doMediaStop(\'' + deviceId + '\');" type="button" value="Stop"/>';
    str += '</center>';
    return str;
}

/**
 * メディアの停止
 *
 * @param {String} deviceId デバイスID
 */
function previewStopButton(deviceId, sessionKey){
    var str = "";
    str += '<center>';
    str += '<input data-icon="stop"  ';
    str += 'onclick="javascript:doPreviewStop(\'' + deviceId + '\', \'' + sessionKey + '\');" type="button" value="Stop"/>';
    str += '</center>';
    return str;
}

/**
 * 写真の撮影
 *
 * @param {String} deviceId デバイスID
 */
function takePhotoButton(deviceId){
    var str = "";
    str += '<center>';
    str += '<input data-icon="stop"  ';
    str += 'onclick="javascript:doTakePhoto(\'' + deviceId + '\');" type="button" value="takePhoto"/>';
    str += '</center>';
    return str;
}


/**
 * onPhotoイベントの登録
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションキー
 */
function doRegisterOnPhoto(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("onphoto");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
     
    var uri = builder.build();
    if (DEBUG) console.log("Uri:"+uri)
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message:" + message)

        var json = JSON.parse(message);
        $("#onPhoto").val(json.photo.path + ":" + json.photo.mimeType);
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * onPhotoイベントの解除
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションキー
 */
function doUnregisterOnPhoto(deviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("mediastream_recording");
    builder.setAttribute("onphoto");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}
