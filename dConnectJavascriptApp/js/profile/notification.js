/**
 notification.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
 
/**
 * Notification Menu
 *
 * @param {String}serviceId サービスID
 */
function showNotification(serviceId) {
  
    initAll();
    
    var sessionKey = currentClientId;
    
    var btnStr = "";
    btnStr += getBackButton('Device Top','doNotificationBack', serviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    if(myDeviceName.indexOf("Pebble") != -1) {
    
    } else if(myDeviceName.indexOf("SmartWatch") != -1) {
    
    } else if(myDeviceName.indexOf("Chromecast") != -1) {
    
    } else {
        dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
    
        doRegisterNotificationShow(serviceId, sessionKey);
        doRegisterNotificationClick(serviceId, sessionKey);
        doRegisterNotificationClose(serviceId, sessionKey);
        //doRegisterNotificationError(serviceId, sessionKey);
    }
     
    setTitle("Notification Profile(Notify)");
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("notify");
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);
    var str = "";
    str += '<form action="' + uri + '" method="POST" id="notificationForm" name="notificationForm" enctype="multipart/form-data">';
     
    if(myDeviceName.indexOf("Pebble") != -1) {
    
    } else if(myDeviceName.indexOf("SmartWatch") != -1) {
    
    } else if(myDeviceName.indexOf("Chromecast") != -1) {
    
    } else  {
           str += makeInputText("onClick", "click", "click")
           str += makeInputText("onShow", "show", "show")
           str += makeInputText("onClose", "close", "close")
           //str += makeInputText("onError", "error", "error")
    }   
    str += '<br>';
    str += '<center><input type="text" value="hello world!" name="body" id="body">';
    str += '<SELECT name="type" id="type">';
    str += '<OPTION value="0">Call event</OPTION>';
    str += '<OPTION value="1">Mail event</OPTION>';
    str += '<OPTION value="2">SMS event</OPTION>';
    str += '<OPTION value="3">Normal event</OPTION>';
    str += '</SELECT>';
    str += '<input type="file" name="icon" id="icon"/>';
    str += '<input type="hidden" name="serviceId" value="' + serviceId + '"/>';
    str += '<input type="hidden" name="accessToken" value="' + accessToken + '"/>';
    str += '<input type="button" name="sendButton" id="sendButton" value="Noftiy" onclick="doNotificationNotify(\'' + serviceId + '\');"/>';
    str += '</form>';
    str += '</center>';
    reloadContent(str);
   
}

/**
 * Back Button
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doNotificationBack(serviceId, sessionKey) {
    
    if(myDeviceName.indexOf("Pebble") != -1) {
    
    } else if(myDeviceName.indexOf("SmartWatch") != -1) {
    
    } else if(myDeviceName.indexOf("Chromecast") != -1) {
    
    } else {
        doUnregisterNotificationShow(serviceId, sessionKey);
        doUnregisterNotificationClick(serviceId, sessionKey);
        doUnregisterNotificationClose(serviceId, sessionKey);
        //doUnregisterNotificationError(serviceId, sessionKey);
    }
    searchSystem(serviceId);
}

/**
 * onShowイベントの登録
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterNotificationShow(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onshow");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
     
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message:" + message);
        
        var json = JSON.parse(message);
        document.notificationForm.show.value = json.notificationId;
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * onShowイベントの解除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterNotificationShow(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onshow");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}


/**
 * onClickイベントの登録
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterNotificationClick(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onclick");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message:" + message);
        
        var json = JSON.parse(message);
        document.notificationForm.click.value = json.notificationId;
    }, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

/**
 * onClickイベントの解除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterNotificationClick(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onclick");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

/**
 * onCloseイベントの登録
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterNotificationClose(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onclose");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message:" + message)
        var json = JSON.parse(message);
        document.notificationForm.close.value = json.notificationId;
    }, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

/**
 * onCloseイベントの解除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterNotificationClose(serviceId, sessionKey) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onclose");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}


/**
 * onErrorイベントの登録
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doRegisterNotificationError(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onerror");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    dConnect.addEventListener(uri,function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message:" + message)
        var json = JSON.parse(message);
        document.notificationForm.error.value = json.notificationId;
    }, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

/**
 * onErrorイベントの解除
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションキー
 */
function doUnregisterNotificationError(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("onerror");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("sessionKey",sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri:" + uri)
    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}

/**
 * Notification(Notify)
 *
 * @param {String}serviceId サービスID
 */
function doNotificationNotify(serviceId) {
    var myForm = document.getElementById("notificationForm");
    var myFormData = new FormData(myForm);
    var myXhr = new XMLHttpRequest();
    myXhr.open(myForm.method, myForm.action, true);
    myXhr.onreadystatechange = function() {
        if (myXhr.readyState === 4) {
            if (myXhr.status === 200 || myXhr.status == 0) {
                if(DEBUG) console.log("Response:" + myXhr.responseText)
                var obj = JSON.parse(myXhr.responseText);
                if (obj.result == 0) {
                    var str = "";
                    if (myDeviceName.indexOf("Pebble") != -1) {
                    } else if(myDeviceName.indexOf("SmartWatch") != -1){
                    } else {
                        str += '<center>';
                        str += '<input type="button" onclick="notificationDel(\'' + serviceId + '\',\'' + obj.notificationId + '\');" value="Delete" type="button" >';
                        str += '</center>';
                        reloadMenu(str)
                    }
                } else{
                    showError("POST notification/notify", obj.errorCode, obj.errorMessage);
                }
            } else {
                alert("error:" + myXhr.status);
            }
            closeLoading();
        }
    };
    myXhr.send(myFormData);
}

/**
 * ID指定でNotificationを消す
 *
 * @param {String}serviceId サービスID
 */
function notificationDel(serviceId, notificationId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("notification");
    builder.setAttribute("notify");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("notificationId", notificationId);
    var uri = builder.build();

    if (DEBUG) console.log("Uri:" + uri)
    
    dConnect.delete(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);;
        reloadMenu("");
    }, function(errorCode, errorMessage) {
        showError("POST notification/notify", errorCode, errorMessage);
    });
}
