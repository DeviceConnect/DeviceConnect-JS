module('IlluminanceProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Illuminanceプロファイルの正常系テストを行うクラス。
 * @class
 */
var IlluminanceProfileNormalTest = {};

/**
 * 照度を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /illuminance?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
IlluminanceProfileNormalTest.illuminanceNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('illuminance');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'illuminance=' + json.illuminance);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('illuminanceNormalTest001',
    IlluminanceProfileNormalTest.illuminanceNormalTest001);
