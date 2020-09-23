/**
 demo.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** Revision of this apps. */
const versionRev = 'V2.3.0 Rev.1';
const appName = 'Demo Web Site';
const appScoepes = ['servicediscovery', 'serviceinformation', 'system',
            'battery', 'connection', 'deviceorientation', 'filedescriptor',
            'file', 'mediaplayer', 'mediastreamrecording', 'notification',
            'phone', 'proximity', 'setting', 'vibration', 'light',
            'remotecontroller', 'drivecontroller', 'mhealth', 'sphero',
            'dice', 'temperature', 'camera', 'canvas', 'health',
            'touch', 'humandetection', 'keyevent', 'omnidirectionalimage',
             'tv', 'powermeter','humidity','illuminance', 'videochat',
             'airconditioner','gpio', 'ecg', 'stressEstimation', 'poseEstimation',
             'walkState', 'messagehook', 'atmosphericPressure', 'geolocation',
             'echonetLite', 'power', 'fabo', 'mouse', 'keyboard',
             'midi', 'soundModule', 'soundController', 'volumeController', 'device'];
/** IPアドレスを保持する. */
let ip;
/** 画像読み込み中Flag. */
let loadFlag = false;

/** Logメッセージを表示 */
const DEBUG = true;
/** デバイス名をキャッシュ */
let myDeviceName = '';
/** サービス一覧のキャッシュ. */
let cachedServices = [];

/** dConnectSDKオブジェクト. */
let sdk;



/**
 * 初期化処理.
 */
function init() {
  console.log('Origin = [' + location.origin + ']');

  // Versionを表示
  $('#version').html(versionRev);

  // 接続先ipアドレスを取得(指定がない場合は、localhost)
  ip = getIpString();

  sdk = new dConnectSDK({
      host: ip,
      port: 4035,
      appName: appName,
      scopes: appScoepes
  });
  // 接続先IPアドレスをページに表示
  $('#host').html('connecting:' + ip);


  showWebSocketState('Closed');

  if (isAndroid() &&
    location.href.indexOf('file:///') == -1) {
      sdk.setAntiSpoofing(true);
  }
  // ファイルから直接開かれた場合には、originを格納
  if (location.origin == 'file://') {
    sdk.setExtendedOrigin('file://');
  } else if (location.origin == 'https://') {
    sdk.setSSLEnabled(true);
  }
  openWebsocketIfNeeded();
}

function showWebSocketState(state) {
  $('#websocket').html('WebSocket: ' + state);
}

/**
 * ユーザエージェントがAndroidであることを確認する.
 */
function isAndroid() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return (userAgent.indexOf('android') != -1);
}

/**
 * Device Connect Managerを停止後、トップ画面に戻る.
 */
function stopManagerAndDemo() {
  sdk.stopManager('activity');
  location.hash = '#home';
  if (DEBUG) {
    console.log('URL: ' + location.href);
  }
}


/**
 * Device Connect Managerを起動後、デモ画面に遷移する.
 */
function startManagerAndDemo() {
  $(window).trigger("hashchange");
  startManager((apiVersion) => {
    if (DEBUG) {
      console.log('Manager has been available already. version=' + apiVersion);
    }
    location.hash = "";
    location.hash = '#demo';

    searchDevice();

    if (DEBUG) {
      console.log('URL: ' + location.href);
    }
  });
}

const _onWebSocketMessage = function(code, message) {
  console.log('_onWebSocketMessage: code = ' + code + ', message = ' + message);
  let state;
  switch (code) {
    case -1:
      state = 'OK';
      break;
    case 0:
      state = 'WebSocket Open';
      break;
    case 1:
      state = 'Closed';
      break;
    case 3:
      state = 'Error (AccessToken is required.)';
      break;
    case 4:
      state = 'Error (Origin is not specfied.)';
      break;
    case 5:
      state = 'Please authorize.';
      break;
    default:
      state = message;
      break;
  }
  // Tokenをページに表示
  $('#token').html('accessToken:' + sdk.getAccessToken());
  if (state !== undefined) {
    showWebSocketState(state);
  }
  closeLoading();
}

function openWebsocketIfNeeded() {
  if (!sdk.isWebSocketReady()) {
    if (sdk.isConnectedWebSocket()) {
      sdk.disconnectWebSocket();
    }
    if (location.origin == 'file://') {
      sdk.setExtendedOrigin("file://");
    }
    sdk.connectWebSocket((state, message) => {
      _onWebSocketMessage(state, message);
    });
    console.log('WebSocket opened.');
  } else {
    console.log('WebSocket is ready.');
  }
}

function reopenWebSocket() {
  if (sdk.isConnectedWebSocket()) {
    sdk.disconnectWebSocket();
    if (!sdk.isWebSocketReady()) {
      sdk.connectWebSocket((state, message) => {
        _onWebSocketMessage(state, message);
      });
    } else {
      console.log('WebSocket is ready.');
    }
  }
}

/**
 * Device Connect Managerが起動していることを確認する.
 */
function checkDeviceConnect() {
  startManager(apiVersion => {
    alert('Device Connect API version:' + apiVersion);
  });
}

/**
 * Device Connect Managerが起動していることを確認する.
 * @param {function} onavailable
 *                すでに起動していた場合、または起動された場合に呼ばれる関数
 */
function startManager(onavailable) {
  let requested = false;
  let appId = '994422987';
  let errorCallback = function(errorCode, errorMessage) {
    switch (errorCode) {
      case dConnectSDK.constants.errorCode.ACCESS_FAILED:
        if (!requested) {
          requested = true;
          sdk.startManager('activity');
          alert('Requested to start Device Connect Manager.');

          let userAgent = navigator.userAgent.toLowerCase();
          if (userAgent.search(/iphone|ipad|ipod/) > -1) {
            setTimeout(function() {
              location.href = 'itmss://itunes.apple.com/us/app/devicewebapibrowser/id' +
                      appId + '?mt=8&ign-mpt=uo%3D4';
            }, 250);
          }
        }
        setTimeout(function() {
          sdk.checkDeviceConnect()
           .then(json => {
             onavailable(json);
           }).catch(e => {
             errorCallback(e.errorCode, e.errorMessage);
           });
        }, 500);
        break;
      case dConnectSDK.constants.errorCode.INVALID_SERVER:
        alert('WARNING: Device Connect Manager may be spoofed.');
        break;
      case dConnectSDK.constants.errorCode.INVALID_ORIGIN:
        alert('WARNING: Origin of this app is invalid. Maybe the origin is not registered in allowlist.');
        break;
      default:
        alert(errorMessage);
        break;
    }
  };

  sdk.checkDeviceConnect()
   .then(json => {
     onavailable(json);
   }).catch(e => {
     errorCallback(e.errorCode, e.errorMessage);
   });
}

/**
 * Local OAuthのアクセストークンを取得する.
 */
function authorization() {
  sdk.authorization(appScoepes, appName).then(accessToken => {
    $('#token').html('accessToken:' + accessToken);
    reopenWebSocket(accessToken);
  }).catch(e => {
    console.log("access error:" + JSON.stringify(e));
    $('#token').html('accessToken:' + e.toString());
  });
}

/**
 * 本アプリからリモートアクセスする端末のIPアドレス指定を取得する.
 */
function getIpString() {
  if (1 < document.location.search.length) {
    const query = document.location.search.substring(1);
    let parameters = query.split('&');
    for (let i = 0; i < parameters.length; i++) {
      let element = parameters[i].split('=');
      let paramName = decodeURIComponent(element[0]);
      let paramValue = decodeURIComponent(element[1]);
      if (paramName == 'ip') {
        return paramValue;
      }
    }
  }
  return 'localhost';
}


/**
 * 文字列を比較(大小文字の違いがあっても一致とみなす).
 *
 * @param {String} string 比較する文字列
 * @param {String} cmpString 比較される文字列
 *
 * @return 0以外 一致する
 * @return 0 一致しない
 *
 */
function isEqualToStringIgnoreCase(string, cmpString) {
  return string.toLowerCase() == cmpString.toLowerCase();
}

/**
 * プロファイルごとの分岐.
 *
 * @param {String} serviceId サービスID
 * @param {String} profile プロファイル名
 */
function searchProfile(serviceId, profile) {
  if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.notification.PROFILE_NAME)) {
    showNotification(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.vibration.PROFILE_NAME)) {
    showVibration(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME)) {
    showMediastreamRecording(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.deviceOrientation.PROFILE_NAME)) {
    showDeviceOrientation(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'drivecontroller')) {
    showDriveController(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'remotecontroller')) {
    showRemoteController(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.file.PROFILE_NAME)) {
    showFile(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'light')) {
    showSearchLight(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.phone.PROFILE_NAME)) {
    showPhone(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.connection.PROFILE_NAME)) {
    showConnection(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.setting.PROFILE_NAME)) {
    showSetting(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.mediaPlayer.PROFILE_NAME)) {
    showMediaPlayer(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.battery.PROFILE_NAME)) {
    showBattery(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'camera')) {
    showCamera(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'dice')) {
    showDice(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'mhealth')) {
    showMhealth(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'temperature')) {
    showTemperatureProfile(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.proximity.PROFILE_NAME)) {
    showProximity(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'sphero')) {
    showSphero(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.canvas.PROFILE_NAME)) {
    showCanvas(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'health')) {
    showHealth(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.touch.PROFILE_NAME)) {
    showTouch(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'humandetection')) {
    showHumanDetection(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.keyEvent.PROFILE_NAME)) {
    showKeyEvent(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'videochat')) {
    showVideoChat(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'omnidirectionalimage')) {
    showOmnidirectionalImage(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnectSDK.constants.serviceInformation.PROFILE_NAME)) {
    showServiceInformation(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'humidity')) {
    showHumidity(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'illuminance')) {
    showIlluminance(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'powermeter')) {
    showPowerMeter(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'tv')) {
    showTV(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'airconditioner')) {
    showAirConditioner(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'gpio')) {
    showGPIO(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'ecg')) {
    showECGProfile(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'stressEstimation')) {
    showStressEstimationProfile(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'poseEstimation')) {
    showPoseEstimationProfile(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'walkState')) {
    showWalkStateProfile(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'messagehook')) {
    showMessageHook(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'atmosphericPressure')) {
    showAtmosphericPressure(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'geolocation')) {
    showGeolocation(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'power')) {
    showPower(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'echonetLite')) {
    showECHONETLite(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'fabo')) {
    showFaBo(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'mouse')) {
    showMouse(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'keyboard')) {
    showKeyboard(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'midi')) {
    showMidi(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'soundModule')) {
    showSoundModule(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'soundController')) {
    showSoundController(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'volumeController')) {
    showVolumeController(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'device')) {
    showDevice(serviceId);
  }
}
