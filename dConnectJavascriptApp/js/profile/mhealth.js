/**
 mhealth.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var str = '';
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

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mhealth');
  builder.setAttribute('startservice');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('protocol', 'HDP');
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    if (deviceName == 'HBF-206IT') {
      showHBF206IT1(serviceId);
    }
  }, function(errorCode, errorMessage) {
    alert('startService API failed!\n\nURI: ' + uri + '\nerrorCode: ' +
          errorCode + '\nerrorMessage: ' + errorMessage + ')');

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
  var str = '';
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
  var str = '';
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
  var str = '';
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

  var str = '';
  setTitle('データ受信中(確認中)', 'blue');
  str += '<center>データ受信中(確認中)</center>';
  reloadContent(str);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mhealth');
  builder.setAttribute('getdbinfo');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.get(uri, null, function(json) {

    if (DEBUG) {
      console.log('Response: ', json);
    }

    if (DEBUG) {
      console.log('json.datas[0].lastindexId:' + json.datas[0].lastindexId)
    }
    closeLoading();
    doGetDataFromHBF206IT(serviceId, json.datas[0].lastindexId);

  }, function(errorCode, errorMessage) {
    showError('POST mhealth/getdbinfo', errorCode, errorMessage);
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
  var str = '';
  setTitle('データ受信中(転送中)', 'blue');
  str += '<center>データ受信中(転送中)</center>';
  reloadContent(str);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mhealth');
  builder.setAttribute('getmeasurements');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('firstId', id);
  builder.addParameter('lastId', id);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.get(uri, null, function(json) {

    if (DEBUG) {
      console.log('Response: ', json);
    }
    setTitle('データ転送完了', 'gray');

    var str = responseText;
    reloadHeader(str);
    var contentStr = '';
    contentStr += '<input data-role="button" type="button" name="button"' +
                  ' id="button" value="mHealthの停止"' +
                  ' onclick="javascript:doStopService(\'' +
                  serviceId + '\');"/><br>';
    reloadContent(contentStr);
    closeLoading();

  }, function(errorCode, errorMessage) {
    showError('POST mhealth/getmeasurements', errorCode, errorMessage);
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

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mhealth');
  builder.setAttribute('stopservice');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('protocol', 'HDP');
  var uri = builder.build();

  dConnect.put(uri, null, null, function(json) {

    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('STOP mHealth Service');
    showMhealth(serviceId);

  }, function(errorCode, errorMessage) {
    showError('POST mhealth/stopservice', errorCode, errorMessage);
  });
}
