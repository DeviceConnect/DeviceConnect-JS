/**
 filedescriptor.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/**
 * File Descriptorプロファイルのメニューを表示する.
 *
 * @param {String} deviceId デバイスID
 */
function showFileDescriptor(deviceId) {
    initAll();

    var btnStr = getBackButton('Device Top','doFileDescriptorBack', deviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);
    
    setTitle("File Descriptor Profile");

    var str = "";
    str += '<form  name="fileDescriptorForm">';

    str += '<div class="ui-field-contain">';
    str += '<label for="path">Path:</label>';
    str += '<input type="text" data-mini="true" name="path" id="path" value="">';
    str += '</div>';
    str += '<SELECT name="flag" id="flag">';
    str += '<OPTION value="rw">Read/Write</OPTION>';
    str += '<OPTION value="r">Read</OPTION>';
    str += '</SELECT>';
    str += '</form>';
    str += '<input type="button" onclick="doOpenFile(\'' + deviceId + '\');" id="openFile" value="Open file" />';
    
    reloadContent(str);
}

/**
 * Backボタン.
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doFileDescriptorBack(deviceId, sessionKey){
    searchSystem(deviceId);
}

/**
 * Backボタン.
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doOpenFileBack(deviceId, sessionKey){
    doUnregisterOnWatchFile(deviceId, sessionKey);
    showFileDescriptor(deviceId);
}

/**
 * ファイルオープン要求を送信する.
 *
 * @param {String} deviceId デバイスID
 */
function doOpenFile(deviceId) {
    var sessionKey = currentClientId;
    var flag = $('#flag').val();
    var path = $('#path').val();
    
    var btnStr = getBackButton('FileDescriptor Top','doOpenFileBack', deviceId, sessionKey);
    
    reloadHeader(btnStr);
    reloadFooter(btnStr);
    
    doRegisterOnWatchFile(deviceId, sessionKey);
    dConnect.connectWebSocket(sessionKey, function(eventCode, message) {});
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("open");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("path", path);
    builder.addParameter("flag", flag);
    var uri = builder.build();
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
       
        if(DEBUG) console.log("Response:"+responseText)
       
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            initAll();
            initContent();
            var str = "";
            str += '<form  name="fileDescriptorForm">';
            str += '<center>';
            str += '<div class="ui-grid-a">';
            str += '<div class="ui-block-a"><div class="ui-bar ui-bar-a">Path: ' + path + '</div></div>';
            str += '<div class="ui-block-b"><div class="ui-bar ui-bar-a">Flag: ' + flag + '</div></div>';
            str += '</div>'
            str += '<input type="text" name="event" id="event" value="">';
            str += '</center>';
            reloadMenu(str);
            
            var str = "";
            str += getFileWriteHtml(deviceId, path, flag, sessionKey);
            str += getFileReadHtml(deviceId, path, flag, sessionKey);
            str += getCloseHtml(deviceId, sessionKey);
            reloadContent(str);
        } else {
            showError("file_descriptor/open",json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/**
 * ファイル書き込み要求を送信する.
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doWriteFile(deviceId, sessionKey) {
    var position = document.fileDescriptorWriteForm.position.value;
    var path = document.fileDescriptorWriteForm.path.value;
    var flag = document.fileDescriptorWriteForm.flag.value;

    var form = document.getElementById("fileDescriptorWriteForm");
    var form_data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", form.action, false);
    xhr.onreadystatechange = function() {
        var obj = {errorMessage : "Unknown Error"};
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status == 0) {
                obj = JSON.parse(xhr.responseText);
                if (obj.result == 0) {
                    var str = "";
                    str += getFileWriteHtml(deviceId, path, flag, sessionKey);
                    str += getFileReadHtml(deviceId, path, flag, sessionKey);
                    str += getCloseHtml(deviceId, sessionKey);
                    str += getProfileListLink(deviceId);
                    $('#contents').html(str).trigger('create');
                    alert("Succeeded to write.");
                    return;
                }
            } 
        }
        showError("PUT file_descriptor/write", obj);
    };
    xhr.send(form_data);
}

/**
 * ファイル読み込み要求を送信する.
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doReadFile(deviceId, sessionKey) {
    var length = document.fileDescriptorReadForm.length.value;
    var position = document.fileDescriptorReadForm.position.value;
    var path = document.fileDescriptorReadForm.path.value;
    var flag = document.fileDescriptorReadForm.flag.value;

    initResult();

    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("read");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("path", path);
    builder.addParameter("position", position);
    builder.addParameter("length", length);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            setTitle("Read");
            var result = json.fileData;

            var str = "";
            str += getFileWriteHtml(deviceId, path, flag, sessionKey);
            str += getFileReadHtml(deviceId, path, flag, sessionKey);

            str += '<textarea cols="40" rows="10" name="textarea-8" id="textarea-8">';
            str += result;
            str += '</textarea>';
            str += getCloseHtml(deviceId, sessionKey);

            reloadContent(str);
        } else {
            showError("GET file_descriptor/read", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/**
 * ファイルクローズ要求を送信する.
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doCloseFile(deviceId, sessionKey) {
    var path = document.fileDescriptorReadForm.path.value;

    initResult();
    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("onwatchfile");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();

    if (DEBUG) console.log("Uri: " + uri);

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("close");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("path", path);
    var uri = builder.build();

    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        
        var json = JSON.parse(responseText);
        if (json.result === 0) {
            setTitle("Close");
            showFileDescriptor(deviceId, sessionKey);
        } else {
            showError("PUT file_descriptor/close", json);
        }
    }, function(xhr, textStatus, errorThrown) {
    });
}

/*
 * OnWatchFileイベントの登録.
 *
 * @param {String} deviceId デバイスID
 * @param {String} sessionKey セッションKEY
 */
function doRegisterOnWatchFile(deviceId, sessionKey){
    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("onwatchfile");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        
        var json = JSON.parse(message);
        
        if(json.profile === "file_descriptor"){
            document.fileDescriptorForm.event.value = json.fileData.curr;
            console.log(json.fileData.curr);
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/*
 * OnWatchFileイベントの削除.
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnWatchFile(deviceId, sessionKey){
    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("onwatchfile");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

/*
 * ファイル書き込み用HTMLを生成する.
 *
 * @param {String} deviceId デバイスID
 * @param {String} path パス
 * @param {String} flag RWのフラグ
 * @param {String} sessionKey セッションKey
 */
function getFileWriteHtml(deviceId, path, flag, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("file_descriptor");
    builder.setAttribute("write");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    
    var str = "";
    str += '<form  action="' + uri + '" method="PUT" enctype="multipart/form-data" name="fileDescriptorWriteForm" id="fileDescriptorWriteForm"><br>';
    str += '<div class="ui-field-contain">';
    str += '<label for="media">File:</label>';
    str += '<input type="file" name="media" id="media" value="">';
    str += '<label>Position:</label>';
    str += '<input type="text" data-mini="true" name="position" id="position" value="">';
    str += '</div>';

    str += '<input type="hidden" name="path" id="path" value="' + path + '">';
    str += '<input type="hidden" name="flag" id="flag" value="' + flag + '">';

    str += '<input type="button" onclick="doWriteFile(\'' + deviceId + '\',\'' + sessionKey + '\');" id="writeFile" value="Write file"  />';
    str += '</form>';
    return str;
}

/*
 * ファイル読み込み用HTMLを生成する.
 *
 * @param {String}deviceId デバイスID
 * @param {String}path パス
 * @param {String}flag RWのフラグ
 * @param {String}sessionKey セッションKey
 */
function getFileReadHtml(deviceId, path, flag, sessionKey) {
    var str = "";
    str += '<form  name="fileDescriptorReadForm">';
    str += '<div class="ui-field-contain">';
    str += '<label>Position:</label>';
    str += '<input type="text" data-mini="true" name="position" id="position" value="">';
    str += '<input type="hidden" name="path" id="path" value="' + path + '">';
    str += '<input type="hidden" name="flag" id="flag" value="' + flag + '">';
    str += '<label for="length">Length:</label>';
    str += '<input type="text" data-mini="true" name="length" id="length" value="">';
    str += '</div>';
    str += '<input type="button" onclick="doReadFile(\'' + deviceId + '\',\'' + sessionKey + '\');" id="readFile" value="Read file"  />';
    str += '</form>';
    return str;
}

/*
 * ファイルクローズ用HTMLを生成する.
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKey
 */
function getCloseHtml(deviceId, sessionKey){
    return '<input type="button" onclick="doCloseFile(\'' + deviceId + '\', \'' + sessionKey + '\');" value="Close file"  />';
}
