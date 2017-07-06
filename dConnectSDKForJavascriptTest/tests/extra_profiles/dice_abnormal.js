module('DiceProfileAbnomalTest', {
  setup: function() {
    init();
  }
});

/**
 * Diceプロファイルの異常系テストを行うクラス。
 * @class
 */
var DiceProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでダイスロールイベントにアクセスするテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /dice/ondice?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DiceProfileAbnormalTest.onDiceAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setAttribute('ondice');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onDiceAbnormalTest001(post not support method)',
    DiceProfileAbnormalTest.onDiceAbnormalTest001);


/**
 * 定義されていないPOSTメソッドで磁力計取得イベントにアクセスするテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /dice/onmagnetometer?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DiceProfileAbnormalTest.onMagnetometerAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setAttribute('onmagnetometer');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onMagnetometerAbnormalTest001(post not support method.)',
    DiceProfileAbnormalTest.onMagnetometerAbnormalTest001);

/**
 * 定義されていないGETメソッドでダイスロールイベントにアクセスするテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /dice/ondice?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DiceProfileAbnormalTest.onMagnetometerAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('dice');
  builder.setAttribute('onmagnetometer');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onMagnetometerAbnormalTest002(get not support method.)',
    DiceProfileAbnormalTest.onMagnetometerAbnormalTest002);
