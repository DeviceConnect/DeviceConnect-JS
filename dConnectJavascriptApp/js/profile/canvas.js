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
                  serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let builder = new sdk.URIBuilder();
  builder.setProfile('canvas');
  builder.setAttribute('drawimage');
  let uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  /* ※省略パラメータがあり1種類のformでは対応できないため2つformを用意しています。 */

  let str = '';

  str += '<form action="' + uri + '" method="POST"' +
          ' enctype="multipart/form-data" id="fileForm"><br>';
  str += '<input type="hidden" name="serviceId" value="' + serviceId + '"/>';
  str += '<input type="hidden" name="accessToken" value="' +
          sdk.getAccessToken() + '"/>';

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
  let myFormData = new FormData(myForm);
  let myXhr = new XMLHttpRequest();
  try {
    if (!myFormData.get('mode')) {
      myFormData.delete('mode');
    }
  } catch (e) {
    // Safariなどでは、FormData#append以外はサポートしていないため、エラーが出る
  }
  myXhr.open(myForm.method, myForm.action, true);
  myXhr.onreadystatechange = function() {
    if (myXhr.readyState === 4) {
      if (myXhr.status === 200 || myXhr.status == 0) {
        if (DEBUG) {
          console.log('Response:' + myXhr.responseText)
        }
        let str = '';
        let obj = JSON.parse(myXhr.responseText);
        if (obj.result == 0) {
          //alert('success:canvas/drawimage');
          $('#path').val('');
          $('#data').val('');
        } else {
          showError('POST canvas/drawimage', obj.errorCode, obj.errorMessage);
        }
      } else {
        alert('error:' + myXhr.status);
      }
      closeLoading();
    }
  };
  myXhr.send(myFormData);
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
    serviceId: serviceId
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
