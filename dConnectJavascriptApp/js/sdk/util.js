/**
 util.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Exec webSocket.
 *
 * @param {String}sessionKey WebSocketのセッションKEY
 */
function execWebSocket(sessionKey) {
  var ws = new WebSocket('ws://' + ip + ':8080/websocket');
  var sessionKey2 = sessionKey;
  ws.onopen = function(e) {

    // SessionKeyは、sample_websocketを使用
    var text = '{"sessionKey":"' + sessionKey + '"}';
    ws.send(text);
    console.log('success: execWebSocket:' + sessionKey);
    //alert("Open websocket:"+sessionKey);
  };

  ws.onmessage = function(msg) {
    //alert(msg);
    console.log(msg.data);
    var obj = JSON.parse(msg.data);
    if (obj.orientation) {

      if (obj.orientation.accelaration) {
        document.deviceOrientationForm.accelX.value =
            obj.orientation.accelaration.x;
        document.deviceOrientationForm.accelY.value =
            obj.orientation.accelaration.y;
        document.deviceOrientationForm.accelZ.value =
            obj.orientation.accelaration.z;
      }

      if (obj.orientation.accelerationIncludingGravity) {
        document.deviceOrientationForm.accelXG.value =
            obj.orientation.accelerationIncludingGravity.x;
        document.deviceOrientationForm.accelYG.value =
            obj.orientation.accelerationIncludingGravity.y;
        document.deviceOrientationForm.accelZG.value =
            obj.orientation.accelerationIncludingGravity.z;
      }

      if (obj.orientation.rotationRate) {
        document.deviceOrientationForm.rotationBeta.value =
            obj.orientation.rotationRate.beta;
        document.deviceOrientationForm.rotationGamma.value =
            obj.orientation.rotationRate.gamma;
        document.deviceOrientationForm.rotationAlpha.value =
            obj.orientation.rotationRate.alpha;
      }

      if (obj.orientation.interval) {
        var intervalStr = 'interval ';
        intervalStr += 'time: ' + obj.orientation.interval;
        document.deviceOrientationForm.interval.value = intervalStr;
      }
    } else if (obj.profile == 'mediastream_recording') {
      if (sessionKey == obj.sessionKey) {
        obj.media.uri = obj.media.uri.replace('localhost', ip);
        console.log('ip=' + obj.media.uri);
        refreshImg(obj.media.uri);
      }
    } else if (obj.profile == 'mhealth') {
      document.mhealthForm.weight.value = obj.mHealth.weight + ' kg';
      document.mhealthForm.bmi.value = obj.mHealth.bmi + ' %';
      document.mhealthForm.bodyfat.value = obj.mHealth.bodyfat + ' %';

    } else if (obj.mediaPlayer) {
      console.log(msg.data);
      document.mediaPlayerForm.status.value = obj.mediaPlayer.status;
      document.mediaPlayerForm.mediaId.value = obj.mediaPlayer.mediaId;
      document.mediaPlayerForm.volume.value = obj.mediaPlayer.volume;
      document.mediaPlayerForm.mimeType.value = obj.mediaPlayer.mimeType;
    } else if (obj.dice) {
      document.diceForm.roll.value = obj.dice.face;
    } else if (obj.profile == 'file_descriptor') {
      document.fileDescriptorForm.event.value = obj.fileData.curr;
      console.log(obj.fileData.curr);
    }

  };
  ws.onclose = function(e) {
    alert('closed WebSocket' + e + sessionKey2);
  };
}

/**
 * show loading
 */
function showLoading() {
  $.mobile.loading('show', {
    text: 'Loading',
    textVisible: true,
    theme: 'b',
    textonly: false
  });
}

/**
 * close loading
 */
function closeLoading() {
  $.mobile.loading('hide');
}

/**
 * Listをクリア.
 */
function initListView() {
  var listHtml = document.getElementById('list');
  listHtml.innerHTML = '';
  $('#list').listview('refresh');
}

/**
 * Contentsをクリア.
 */
function initContent() {
  reloadContent('');
}

/**
 * ContentsHeaderをクリア.
 */
function initHeader() {
  reloadHeader('');
}

/**
 * ContentsFooterをクリア.
 */
function initFooter() {
  reloadFooter('');
}

/**
 * Resultをクリア.
 */
function initResult() {
  reloadResult('');
}

/**
 * Logをクリア.
 */
function initLog() {
  reloadLog('');
}

/**
 * Logをクリア.
 */
function initMenu() {
  reloadMenu('');
}

/**
 * 処理のタイトル.
 */
function setTitle(msg) {
  var titleHtml = document.getElementById('title');
  titleHtml.innerHTML = '<center><b>' + msg + '</b></center>';
}

/**
 * 処理のタイトル(色)
 */
function setTitle(msg, color) {
  var titleHtml = document.getElementById('title');
  titleHtml.style.backgroundColor = color;
  titleHtml.innerHTML = '<center><b>' + msg + '</b></center>';
}

/**
 * Profile Listのリンク.
 */
function getProfileListLink(serviceId) {
  var str = '';
  str += '<center>';
  str += '<input data-icon="home" data-inline="true"'
  'data-mini="true" onclick="javascript:searchSystem(\'' +
  serviceId + '\');" type="button" value="Device TOP"/>';
  str += '</center>';

  return str;
}

/**
 * Backのリンク.
 */
function getBackButton(name, doBackFunction, serviceId, sessionKey) {
  var str = '<hr>';
  str += '<center>';
  str += '<input data-icon="home" data-inline="true"' +
  'data-mini="true" onclick="javascript:' +
  doBackFunction + '(\'' + serviceId + '\', \'' +
  sessionKey + '\');" type="button" value="' + name + '"/>';
  str += '</center>';
  str += '<hr>';
  return str;
}

/**
 * Listの再設定
 *
 * @param {String}str 表示する文字列
 */
function reloadList(str) {
  var listHtml = document.getElementById('list');
  listHtml.innerHTML = str;
  $('#list').listview('refresh');
}

/**
 * Contentsの再描画
 *
 * @param {String}str 表示する文字列
 */
function reloadContent(str) {
  $('#contents').html(str).trigger('create');
}

/**
 * ContentsHeaderの再描画
 *
 * @param {String}cmdStr 表示する文字列
 */
function reloadHeader(cmdStr) {
  $('#contentsHeader').html(cmdStr).trigger('create');
}

/**
 * ContentsFooterの再描画
 *
 * @param {String}btnStr 表示する文字列
 */
function reloadFooter(btnStr) {
  $('#contentsFooter').html(btnStr).trigger('create');
}

/**
 * Resultの再描画
 *
 * @param {String}resultStr 表示する文字列
 */
function reloadResult(resultStr) {
  $('#result').html(resultStr).trigger('create');
}

/**
 * Logの再描画
 *
 * @param {String}logStr 表示する文字列
 */
function reloadLog(logStr) {
  $('#log').html(logStr).trigger('create');
}

/**
 * Menuの再描画
 *
 * @param {String}menuStr 表示する文字列
 */
function reloadMenu(menuStr) {
  $('#menu').html(menuStr).trigger('create');
}

/**
 * Init
 */
function initAll() {
  closeLoading();

  initHeader();
  initMenu();
  initContent();
  initListView();
  initFooter();

  initResult();
  initLog();

}

/**
 * Text Inputの文字列生成
 *
 * @param {String}keyName HTMLに表示する文字列
 * @param {String}id id=の値
 * @param {String}name name=の値
 */
function makeInputText(keyName, id, name) {
  var str = '';

  str += '<div data-role="fieldcontain">';
  str += '<label for=" ' + name + ' ">' + keyName + ':</label>';
  str += '<input type="text" id="' + id + '" name="' + name + '">';
  str += '</div>';

  return str;
}

/**
 * エラーメッセージを表示する.
 *
 * @param {String} profileName プロファイル名
 * @param {String} errorCode エラーコード
 * @param {String} errorMessage エラーメッセージ
 */
function showError(profileName, errorCode, errorMessage) {
  if (errorCode === dConnect.constants.ErrorCode.NOT_FOUND_CLIENT_ID) {
    alert(profileName + ' API\n アクセストークンが不正です。再取得してください。');
  } else {
    alert(profileName + ' API\n errorMessage:' + errorMessage +
    '\n errorCode:' + errorCode);
  }
}
