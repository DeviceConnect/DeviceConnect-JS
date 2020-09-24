/**
 canvas.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */


/**
 * Canvasプロファイルのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showCanvas(serviceId) {
  initAll();
  setTitle('Canvas Profile', 'black');

  let btnStr = getBackButton('Device Top', 'doCanvasBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '<li><a href="javascript:showCanvasDrawImage(\'' + serviceId +
          '\');" value="send">Canvas DrawImage</a></li>';
  reloadList(str);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doCanvasBack(serviceId) {
  searchDevice(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doCanvasDrawImageBack(serviceId) {
  showCanvas(serviceId);
}

/**
 * ファイル送信フォームを表示する.
 *
 * @param {String} serviceId　サービスID
 */
function showCanvasDrawImage(serviceId) {
  initAll();
  setTitle('Canvas Profile(DrawImage)');

  let btnStr = getBackButton('Canvas Top', 'doCanvasDrawImageBack',
                  serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  /* ※省略パラメータがあり1種類のformでは対応できないため2つformを用意しています。 */

  let str = '';

  str += '<form id="fileForm"><br>';
  str += makeInputText('path', 'path', 'path');
  str += makeInputText('uri', 'uri', 'uri');
  str += makeInputText('MIME-Type', 'mimeType', 'mimeType');
  str += '<input type="file" name="data" id="data"/>';

  str += '<label>mode:</label>';
  str += '<SELECT name="mode" id="mode">';
  str += '<OPTION value="">等倍配置モード</OPTION>';
  str += '<OPTION value="scales">最大化して画像描画</OPTION>';
  str += '<OPTION value="fills">等倍画像を敷き詰めて描画</OPTION>';
  str += '</SELECT>';

  str += '<label>x:</label>';
  str += '<input type="text" name="x" value="0"/>';
  str += '<label>y:</label>';
  str += '<input type="text" name="y" value="0"/>';
  str += '<input type="button" name="sendButton" ' +
          'id="sendButton" value="Upload" onclick="doCanvasDrawImage(\'' +
          serviceId + '\', \'fileForm\');"/>';
  str += '<input type="button" name="sendDeleteButton"' +
          ' id="sendDeleteButton" value="Delete"' +
          ' onclick="doDeleteCanvasDrawImage(\'' + serviceId + '\');"/>';
  str += '</form>';
  reloadContent(str);

  $('#data').change(
      function() {
        if (!this.files.length) {
          alert('File is null');
          return;
        } else {
          let file = '/' + this.files[0].name;
          $('#path').val(file);
        }
      }
  );
}

/**
 * 画像描画処理.
 *
 *  @param {String} serviceId サービスID
 *  @param {String} fileFormId ファイルフォームID
 */
function doCanvasDrawImage(serviceId, fileFormId) {
  closeLoading();
  showLoading();

  let myForm = document.getElementById(fileFormId);
  let inputs = myForm.elements;
  let params = { serviceId };
  parseInputElements(inputs, params);

  sdk.post({
    profile: 'canvas',
    attribute: 'drawImage',
    params
  }).then(json => {
    closeLoading();
    $('#path').val('');
    $('#data').val('');
  }).catch(e => {
    closeLoading();
    showError('POST canvas/drawimage', e.errorCode, e.errorMessage);
  });
}

/**
 * 画像削除処理.
 *
 *  @param {String} serviceId サービスID
 *  @param {String} fileFormId ファイルフォームID
 */
function doDeleteCanvasDrawImage(serviceId) {
  closeLoading();
  showLoading();

  sdk.delete({
    profile: 'canvas',
    attribute: 'drawimage',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    closeLoading();
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    closeLoading();
    showError('DELETE canvas/drawimage', e.errorCode, e.errorMessage);
  });
}
