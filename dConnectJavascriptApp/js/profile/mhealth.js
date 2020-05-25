/**
 mhealth.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * mhealth Profile.
 * @param {String} serviceId サービスID
 */
function showMhealth(serviceId) {
  initAll();

  initListView();
  setTitle('mHealth Profile');

  let str = '';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="OMRON(HBF-206IT)"' +
        ' onclick="javascript:doStartService(\'' +
        serviceId + '\',\'HBF-206IT\');"/><br>';
  str += getProfileListLink(serviceId);

  reloadContent(str);
}

/**
 * startService
 *
 * @param {String} serviceId サービスID
 * @param {String} deviceName デバイス名
 */
function doStartService(serviceId, deviceName) {
  sdk.put({
    profile: 'mhealth',
    attribute: 'startservice',
    params: {
      serviceId: serviceId,
      protocol: 'HDP'
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    if (deviceName == 'HBF-206IT') {
      showHBF206IT1(serviceId);
    }
  }).catch(e => {
    alert('startService API failed!\n\nURI: ' + uri + '\nerrorCode: ' +
          e.errorCode + '\nerrorMessage: ' + e.errorMessage + ')');

    if (deviceName == 'HBF-206IT') {
      showHBF206IT1(serviceId);
    }
  });
}

/**
 * HBF-206IT(1)
 *
 * @param {String} serviceId サービスID
 */
function showHBF206IT1(serviceId) {
  let str = '';
  setTitle('初期設定', 'blue');
  str += '<center>';
  str += '<img src="./css/images/weight1.png">';
  str += '</center>';
  str += '体組成計の「個人番号」ボタンを押す。<br>';
  str += '「ピッ」というブザー音とともに、生年月日が表示される。<br>';
  str += '「ピ・ピッ」というブザー音の後、0.0kg表示に変わる。<br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="NEXT" onclick="javascript:showHBF206IT2(\'' +
        serviceId + '\');"/><br>';

  reloadContent(str);
}

/**
 * HBF-206IT(2)
 *
 * @param {String} serviceId サービスID
 */
function showHBF206IT2(serviceId) {
  let str = '';
  setTitle('測定', 'blue');
  str += '<center>';
  str += '<img src="./css/images/weight2.png">';
  str += '</center>';
  str += '計測が完了すると「ピ・ピー」というブザー音が鳴り、計測結果が表示される。<br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="NEXT" onclick="javascript:showHBF206IT3(\'' +
        serviceId + '\');"/><br>';

  reloadContent(str);
}

/**
 * HBF-206IT(3)
 *
 * @param {String} serviceId サービスID
 */
function showHBF206IT3(serviceId) {
  let str = '';
  setTitle('データ転送', 'blue');
  str += '<center>';
  str += '<img src="./css/images/weight3.png">';
  str += '</center>';
  str += '「転送」ボタンを押すと転送が開始される。<br>';
  str += '転送が完了すると「ピッ・ピッ」というブザー音が鳴り、OKランプが点灯する。<br>';
  str += '<input data-role="button" type="button" name="button"' +
        ' id="button" value="データの取得"' +
        ' onclick="javascript:doHBF206IT(\'' + serviceId + '\');"/><br>';

  reloadContent(str);
}

/**
 * HBF-206ITの処理
 *
 * @param {String} serviceId サービスID
 */
function doHBF206IT(serviceId) {
  closeLoading();
  showLoading();

  let str = '';
  setTitle('データ受信中(確認中)', 'blue');
  str += '<center>データ受信中(確認中)</center>';
  reloadContent(str);
  sdk.get({
    profile: 'mhealth',
    attribute: 'getdbinfo',
    params: {
      serviceId: serviceId
    }
  }).then(json => {

    if (DEBUG) {
      console.log('Response: ', json);
    }

    if (DEBUG) {
      console.log('json.datas[0].lastindexId:' + json.datas[0].lastindexId)
    }
    closeLoading();
    doGetDataFromHBF206IT(serviceId, json.datas[0].lastindexId);

  }).catch(e => {
    showError('POST mhealth/getdbinfo', e.errorCode, e.errorMessage);
    closeLoading();
  });

  reloadContent(str);
}

/**
 * HBF-206ITの処理
 *
 * @param {String} serviceId サービスID
 * @param {String} id mHealth対応機器のID
 */
function doGetDataFromHBF206IT(serviceId, id) {

  closeLoading();
  showLoading();
  let str = '';
  setTitle('データ受信中(転送中)', 'blue');
  str += '<center>データ受信中(転送中)</center>';
  reloadContent(str);

  sdk.get({
    profile: 'mhealth',
    attribute: 'getmeasurements',
    params: {
      serviceId: serviceId,
      firstId: id,
      lastId: id
    }
  }).then(json => {

    if (DEBUG) {
      console.log('Response: ', json);
    }
    setTitle('データ転送完了', 'gray');

    let str = responseText;
    reloadHeader(str);
    let contentStr = '';
    contentStr += '<input data-role="button" type="button" name="button"' +
                  ' id="button" value="mHealthの停止"' +
                  ' onclick="javascript:doStopService(\'' +
                  serviceId + '\');"/><br>';
    reloadContent(contentStr);
    closeLoading();

  }).catch(e => {
    showError('POST mhealth/getmeasurements', e.errorCode, e.errorMessage);
    closeLoading();
  });

}

/**
 * stopService
 *
 * @param {String} serviceId サービスID
 * @param {String} deviceName デバイス名
 */
function doStopService(serviceId) {
  sdk.put({
    profile: 'mhealth',
    attribute: 'stopservice',
    params: {
      serviceId: serviceId,
      protocol: 'HDP'
    }
  }).then(json => {

    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('STOP mHealth Service');
    showMhealth(serviceId);

  }).catch(e => {
    showError('POST mhealth/stopservice', e.errorCode, e.errorMessage);
  });
}
