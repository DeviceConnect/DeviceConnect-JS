/**
 util.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * show loading.
 * @param {String} msg message shown on dialog
 */
function showLoading(msg) {
  msg = msg || 'Loading';
  $.mobile.loading('show', {
    text: msg,
    textVisible: true,
    theme: 'b',
    textonly: false
  });
}

/**
 * close loading.
 */
function closeLoading() {
  $.mobile.loading('hide');
}

/**
 * Listをクリア.
 */
function initListView() {
  reloadList('');
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
  var str = '';

  str += '<hr>';
  str += '<center>';
  str += '<input data-icon="home" data-inline="true"' +
      'data-mini="true" onclick="javascript:' +
       doBackFunction + '(\'' + serviceId + '\', \'' +
       sessionKey + '\');" type="button" value="' + name + '"/>';
  str += '</center>';
  str += '<hr>';

  return str;
}

function setContents(id, contents) {
  var tag = $(id);
  tag.html(contents).trigger('create');
  if (contents && contents.length > 0) {
    tag.show();
  } else {
    tag.hide();
  }
}

/**
 * Listの再設定
 *
 * @param {String}str 表示する文字列
 */
function reloadList(str) {
  setContents('#list', str);
  $('#list').listview().listview('refresh');
}

/**
 * Contentsの再描画
 *
 * @param {String}str 表示する文字列
 */
function reloadContent(str) {
  setContents('#contents', str);
}

/**
 * ContentsHeaderの再描画
 *
 * @param {String}str 表示する文字列
 */
function reloadHeader(str) {
  setContents('#contentsHeader', str);
}

/**
 * ContentsFooterの再描画
 *
 * @param {String}str 表示する文字列
 */
function reloadFooter(str) {
  setContents('#contentsFooter', str);
}

/**
 * Logの再描画
 *
 * @param {String}str 表示する文字列
 */
function reloadLog(str) {
  setContents('#log', str);
}

/**
 * Menuの再描画
 *
 * @param {String}str 表示する文字列
 */
function reloadMenu(str) {
  setContents('#menu', str);
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
  str += '  <label for=" ' + name + ' ">' + keyName + ':</label>';
  str += '  <input type="text" id="' + id + '" name="' + name + '">';
  str += '</div>';

  return str;
}

/**
 * Select の生成.
 * 
 * @param {String}keyName HTMLに表示する文字列
 * @param {String}id id=の値
 * @param {String}name name=の値
 * @returns {String}
 */
function makeSelectOption(keyName, id, name) {
  var str = '';

  str += '<div data-role="fieldcontain">';
  str += '  <label for="' + name + '">' + keyName + ':</label>';
  str += '  <select id="' + id + '">';
  str += '    <option></option>';
  str += '  </select>';
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
