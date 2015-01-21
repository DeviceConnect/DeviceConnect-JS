/**
 demo.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** Revision of this apps. */
var versionRev = "V1.0.1 Rev.8";
/** BASE URI. */
var BASE_URI;
/** Client ID. */
var currentClientId = null;
/** AccessTonen. */
var accessToken = null;
/** IPアドレスを保持する. */
var ip;
/** 削除モード. */
var deleteMode = false;
/** 画像読み込み中Flag. */
var loadFlag = false;
/** アプリ名. */
var myAppName = "DemoHTML5";

var body = "";
/** Logメッセージを表示 */
var DEBUG = true;
/** デバイス名をキャッシュ */
var myDeviceName = "";

/**
 * 初期化処理.
 */
function init() {
    // Versionを表示
    $('#version').html(versionRev);

    // 接続先ipアドレスを取得(指定がない場合は、localhost)
    ip = getIpString();

    // accessTokenをcookieから取得
    accessToken = getCookie("accessToken" + ip);

    // 接続先IPアドレスをページに表示
    $('#host').html("connecting:" + ip);

    // Tokenをページに表示
    $('#token').html("accessToken:" + accessToken);

    // 接続先のBASE_URIを作成
    BASE_URI = "http://" + ip + ":4035/gotapi/";

    if(accessToken == null){
        authorization();
    }
}

/**
 * Device Connect Managerが起動していることを確認する.
 */
function checkDeviceConnect() {
    var redirectURL = window.location.href;
    var appId = ""; // TODO: DeviceConnect対応アプリが公開されたらApp IDを設定する
    var success_cb = function(apiVersion) {
        alert("Device Connect API version:" + apiVersion);
    };
    var error_cb = function(status, errorMessage) {
        if (status === 0 || status === 404) {
            var userAgent = navigator.userAgent.toLowerCase();
            // localhost:4035にはサーバが起動していない状態
            if (userAgent.indexOf("android") > -1) {
                // URLスキーム経由でDevice Connectを起動 (Android)
                location.href = "intent://start/#Intent;scheme=dconnect;package=org.deviceconnect.android.manager;end";
            }
            // iOS
            else if (userAgent.search(/iphone|ipad|ipod/) > -1) {
                if (appId && typeof appId !== "String") {
                    throw new TypeError("appId must be a String.");
                }
                // URLスキーム経由でDevice Connectを起動 (iOS)
                var div = document.createElement("div");
                div.setAttribute("style", "width: 0; height: 0; overflow: hidden");
                document.body.appendChild(div);
                var iframe = document.createElement("iframe");
                iframe.setAttribute("id", "launch_frame");
                iframe.setAttribute("name", "launch_frame");
                div.appendChild(iframe);
                if (redirectURL !== undefined) {
                    launch_frame.location.href = "dconnect:" + encodeURIComponent(redirectURL);
                } else {
                    launch_frame.location.href = "dconnect:" + encodeURIComponent(window.location.href);
                }
                setTimeout(function() {
                    var frame = document.getElementById("launch_frame");
                    frame.parentNode.removeChild(frame);
                    // iTunes App StoreのDevice Connect Browserダウンロード・ページを開く
                    location.href = "itmss://itunes.apple.com/us/app/dconnect/" + appId + "?ls=1&mt=8";
                }, 500);
            }
        } else {
            alert(errorMessage);
        }
    }
    dConnect.checkDeviceConnect(success_cb, error_cb);
}

/**
 * Local OAuthのアクセストークンを取得する.
 */
function authorization(){
    dConnect.setHost(ip);
    var scopes = Array("battery", "connect", "deviceorientation", "file_descriptor", "file", "media_player",
                    "mediastream_recording", "notification", "phone", "proximity", "settings", "vibration", "light",
                    "remote_controller", "drive_controller", "mhealth", "sphero", "dice", "temperature","camera", "canvas");
        dConnect.authorization('http://www.deviceconnect.org/demo/', scopes, 'サンプル',
            function(clientId, clientSecret, newAccessToken) {
                // Client ID
                currentClientId = clientId;
                
                // accessToken
                accessToken = newAccessToken;
                
                // debug log
                console.log("accessToken:" + accessToken);

                // add cookie
                document.cookie = 'accessToken' + ip + '=' + accessToken;

                if (dConnect.isConnectedWebSocket()) {
                    dConnect.disconnectWebSocket();
                }
                dConnect.connectWebSocket(clientId, function(errorCode, errorMessage) {});

                // rewrite html
                $('#token').html("accessToken:" + accessToken);
        },
        function(errorCode, errorMessage) {
              alert("Failed to get accessToken.");
        });
}

/**
 * 本アプリからリモートアクセスする端末のIPアドレス指定を取得する.
 */
function getIpString() {
    if (1 < document.location.search.length) {
        var query = document.location.search.substring(1);
        var parameters = query.split('&');
        for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');
            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);
            if (paramName == "ip") {
                return paramValue;
            }
        }
    }
    return "localhost";
}

/**
 * Cookieに保存していた値を取得する.
 *
 * @param {String} name Cookie名
 */
function getCookie(name) {
    var result = null;
    var cookieName = name + '=';
    var allcookies = document.cookie;
    var position = allcookies.indexOf(cookieName);
    if (position != -1) {
        var startIndex = position + cookieName.length;
        var endIndex = allcookies.indexOf(';', startIndex);
        if (endIndex == -1) {
            endIndex = allcookies.length;
        }
        result = decodeURIComponent(allcookies.substring(startIndex, endIndex));
    }
    return result;
}

/**
 * プロファイルごとの分岐.
 *
 * @param {String} deviceId デバイスID
 * @param {String} profile プロファイル名
 */
function searchProfile(deviceId, profile) {
    if (profile === "notification") {
        showNotification(deviceId);
    } else if (profile === "vibration") {
        showVibration(deviceId);
    } else if (profile === "mediastream_recording") {
        showMediastreamRecording(deviceId);
    } else if (profile === "deviceorientation") {
        showDeviceOrientation(deviceId);
    } else if (profile === "drive_controller") {
        showDriveController(deviceId);
    } else if (profile === "remote_controller") {
        showRemoteController(deviceId);
    } else if (profile === "file") {
        showFile(deviceId);
    } else if (profile === "file_descriptor") {
        showFileDescriptor(deviceId);
    } else if (profile === "light") {
        showSearchLight(deviceId);
    } else if (profile === "phone") {
        showPhone(deviceId);
    } else if (profile === "connect") {
        showConnect(deviceId);
    } else if (profile === "settings") {
        showSetting(deviceId);
    } else if (profile === "media_player") {
        showMediaPlayer(deviceId);
    } else if (profile === "battery") {
        showBattery(deviceId);
    } else if (profile === "camera") {
        showCamera(deviceId);
    } else if (profile === "dice") {
        showDice(deviceId);
    } else if (profile === "mhealth") {
        showMhealth(deviceId);
    } else if (profile === "network_service_discovery") {
        alert("This list is the result of network_service_discovery.");
    } else if (profile === "authorization") {
        alert("Use for only OAuth.");
    } else if (profile === "system") {
        alert("Use for setting.");
    } else if (profile === "temperature") {
        showTemperature(deviceId);
    } else if (profile === "proximity") {
        showProximity(deviceId);
    } else if (profile === "sphero") {
        showSphero(deviceId);
    } else if (profile === "canvas") {
        showCanvas(deviceId);
    }
}
