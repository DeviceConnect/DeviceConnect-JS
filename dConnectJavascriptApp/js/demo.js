/**
 demo.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** Revision of this apps. */
var versionRev = 'V2.0.0 Rev.9';
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
var myAppName = 'DemoHTML5';

var body = '';
/** Logメッセージを表示 */
var DEBUG = true;
/** デバイス名をキャッシュ */
var myDeviceName = '';

/** Manager起動待機タイマー */
var launchTimerId;

/**
 * 初期化処理.
 */
function init() {
  currentClientId = Math.random().toString(36).slice(-8);

  // Versionを表示
  $('#version').html(versionRev);

  // 接続先ipアドレスを取得(指定がない場合は、localhost)
  ip = getIpString();

  // accessTokenをcookieから取得
  accessToken = getCookie('accessToken' + ip);

  // 接続先IPアドレスをページに表示
  $('#host').html('connecting:' + ip);

  // Tokenをページに表示
  $('#token').html('accessToken:' + accessToken);

  // 接続先のBASE_URIを作成
  BASE_URI = 'http://' + ip + ':4035/gotapi/';

  if (isAndroidChrome()) {
    dConnect.setAntiSpoofing(true);
  }
  dConnect.setHost(ip);
  if (dConnect.isConnectedWebSocket()) {
    dConnect.disconnectWebSocket();
  }
  dConnect.connectWebSocket(currentClientId, function(errorCode, errorMessage) {
  });

}

/**
 * ユーザエージェントがAndroid Chromeであることを確認する.
 */
function isAndroidChrome() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  return (userAgent.indexOf('android') != -1) && (userAgent.indexOf('chrome') != -1);
}

/**
 * Device Connect Managerを起動後、デモ画面に遷移する.
 */
function startManagerAndDemo() {
  startManager(function(apiVersion) {
    if (DEBUG) {
      console.log('Manager has been available already. version=' + apiVersion);
    }
    location.hash = '#demo';
    if (DEBUG) {
      console.log('URL: ' + location.href);
    }
  });
}

/**
 * Device Connect Managerが起動していることを確認する.
 */
function checkDeviceConnect() {
  startManager(function(apiVersion) {
    alert('Device Connect API version:' + apiVersion);
  });
}

/**
 * Device Connect Managerが起動していることを確認する.
 * @param {function} onavailable
 *                すでに起動していた場合、または起動された場合に呼ばれる関数
 */
function startManager(onavailable) {
  var requested = false;
  var appId = ''; // TODO: DeviceConnect対応アプリが公開されたらApp IDを設定する
  var errorCallback = function(errorCode, errorMessage) {
    switch (errorCode) {
      case dConnect.constants.ErrorCode.ACCESS_FAILED:
        if (!requested) {
          requested = true;
          dConnect.startManager();
          alert('Requested to start Device Connect Manager.');
          
          var userAgent = navigator.userAgent.toLowerCase();
          if (userAgent.search(/iphone|ipad|ipod/) > -1) {
            setTimeout(function() {
              location.href = 'itmss://itunes.apple.com/us/app/dconnect/' +
                      appId + '?ls=1&mt=8';
            }, 250);
          }
        }
        setTimeout(function() {
          dConnect.checkDeviceConnect(onavailable, errorCallback);
        }, 500);
        break;
      case dConnect.constants.ErrorCode.INVALID_SERVER:
        alert('WARNING: Device Connect Manager may be spoofed.');
        break;
      case dConnect.constants.ErrorCode.INVALID_ORIGIN:
        alert('WARNING: Origin of this app is invalid. Maybe the origin is not registered in whitelist.');
        break;
      default:
        alert(errorMessage);
        break;
    }
  };

  dConnect.checkDeviceConnect(onavailable, errorCallback);
}

/**
 * Local OAuthのアクセストークンを取得する.
 */
function authorization(callback) {
  var scopes = Array('servicediscovery', 'serviceinformation', 'system',
              'battery', 'connect', 'deviceorientation', 'file_descriptor',
              'file', 'media_player', 'mediastream_recording', 'notification',
              'phone', 'proximity', 'settings', 'vibration', 'light',
              'remote_controller', 'drive_controller', 'mhealth', 'sphero',
              'dice', 'temperature', 'camera', 'canvas', 'health',
               "touch", 'humandetect', 'keyevent');
  dConnect.authorization(scopes, 'サンプル',
      function(clientId, newAccessToken) {
        // Client ID
        currentClientId = clientId;

        // accessToken
        accessToken = newAccessToken;

        // debug log
        console.log('accessToken:' + accessToken);

        // add cookie
        document.cookie = 'accessToken' + ip + '=' + accessToken;

        if (dConnect.isConnectedWebSocket()) {
          dConnect.disconnectWebSocket();
        }
        dConnect.connectWebSocket(currentClientId, function(errorCode, errorMessage) {
        });

        // rewrite html
        $('#token').html('accessToken:' + accessToken);
        if (callback) {
          callback();
        }
      },
      function(errorCode, errorMessage) {
        alert('Failed to get accessToken.');
        if (callback) {
          callback();
        }
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
      if (paramName == 'ip') {
        return paramValue;
      }
    }
  }
  return 'localhost';
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
 * @param {String} serviceId サービスID
 * @param {String} profile プロファイル名
 */
function searchProfile(serviceId, profile) {
  if (profile === 'notification') {
    showNotification(serviceId);
  } else if (profile === 'vibration') {
    showVibration(serviceId);
  } else if (profile === 'mediastream_recording') {
    showMediastreamRecording(serviceId);
  } else if (profile === 'deviceorientation') {
    showDeviceOrientation(serviceId);
  } else if (profile === 'drive_controller') {
    showDriveController(serviceId);
  } else if (profile === 'remote_controller') {
    showRemoteController(serviceId);
  } else if (profile === 'file') {
    showFile(serviceId);
  } else if (profile === 'file_descriptor') {
    showFileDescriptor(serviceId);
  } else if (profile === 'light') {
    showSearchLight(serviceId);
  } else if (profile === 'phone') {
    showPhone(serviceId);
  } else if (profile === 'connect') {
    showConnect(serviceId);
  } else if (profile === 'settings') {
    showSetting(serviceId);
  } else if (profile === 'media_player') {
    showMediaPlayer(serviceId);
  } else if (profile === 'battery') {
    showBattery(serviceId);
  } else if (profile === 'camera') {
    showCamera(serviceId);
  } else if (profile === 'dice') {
    showDice(serviceId);
  } else if (profile === 'mhealth') {
    showMhealth(serviceId);
  } else if (profile === 'temperature') {
    showTemperature(serviceId);
  } else if (profile === 'proximity') {
    showProximity(serviceId);
  } else if (profile === 'sphero') {
    showSphero(serviceId);
  } else if (profile === 'canvas') {
    showCanvas(serviceId);
  } else if (profile === 'health') {
    showHealth(serviceId);
  } else if (profile === 'touch') {
    showTouch(serviceId);
  } else if (profile === 'humandetect') {
    showHumanDetect(serviceId);
  } else if (profile === 'keyevent') {
    showKeyEvent(serviceId);
  }
}
