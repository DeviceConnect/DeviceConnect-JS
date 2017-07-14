module('ServiceDiscovery Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * ServiceDiscoveryプロファイルの正常系テストを行うクラス。
 * @class
 */
var ServiceDiscoveryProfileNormalTest = {};

/**
 * アクセス可能なデバイス一覧を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /servicediscovery<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileNormalTest.serviceDiscoveryNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.servicediscovery.PROFILE_NAME);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.services != undefined, 'services=' + JSON.stringify(json.services));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('serviceDiscoveryNormalTest001', ServiceDiscoveryProfileNormalTest.serviceDiscoveryNormalTest001);

