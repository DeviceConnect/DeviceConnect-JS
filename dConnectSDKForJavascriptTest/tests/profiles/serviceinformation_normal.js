module('Service Information Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * ServiceInformationプロファイルの正常系テストを行うクラス。
 * @class
 */
var ServiceInformationProfileNormalTest = {};

/**
 * serviceinformationの対応プロファイル情報を取得する。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /serviceinformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileNormalTest.serviceInformationTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.serviceinformation.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'version=' + json.version);
    assert.ok(json.connect !== undefined, 'connect is ok.');
    assert.ok(json.supports !== undefined, 'supports is ok.');
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('serviceInformationTest001(get)', ServiceInformationProfileNormalTest.serviceInformationTest001);