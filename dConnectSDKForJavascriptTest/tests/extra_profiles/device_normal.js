QUnit.module('DeviceProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Deviceプロファイルの正常系テストを行うクラス。
 * @class
 */
var DeviceProfileNormalTest = {};

/**
 * デバイスに接続するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /device/pairing?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DeviceProfileNormalTest.postPairingNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('device');
  builder.setAttribute('pairing');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
     'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.test('postPairingNormalTest001(post)',
    DeviceProfileNormalTest.postPairingNormalTest001);

/**
 * デバイスと切断するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /device/pairing?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DeviceProfileNormalTest.deletePairingNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('device');
  builder.setAttribute('pairing');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
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
QUnit.test('deletePairingNormalTest001(delete)',
    DeviceProfileNormalTest.deletePairingNormalTest001);
