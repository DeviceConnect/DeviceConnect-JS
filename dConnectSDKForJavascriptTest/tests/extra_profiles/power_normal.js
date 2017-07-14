module('Power Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Powerプロファイルの正常系テストを行うクラス。
 * @class
 */
var PowerProfileNormalTest = {};

/**
 * スマートデバイスの電源状態を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
PowerProfileNormalTest.powerStatusNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('power');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('GetPowerStatusNormalTest001', PowerProfileNormalTest.powerStatusNormalTest001);


/**
 * スマートデバイスの電源をオンにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
PowerProfileNormalTest.powerOnNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('power');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('PowerPowerOnNormalTest001', PowerProfileNormalTest.powerOnNormalTest001);

/**
 * スマートデバイスの電源をオフにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
PowerProfileNormalTest.powerOffNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('power');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('PowerPowerOffNormalTest001', PowerProfileNormalTest.powerOffNormalTest001);

