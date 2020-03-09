QUnit.module('AtmosphericPressureProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * AtmosphericPressureプロファイルの正常系テストを行うクラス。
 * @class
 */
var AtmosphericPressureProfileNormalTest = {};

/**
 * 気圧を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /atmosphericPressure?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AtmosphericPressureProfileNormalTest.atmosphericPressureNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('atmosphericPressure');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'atmosphericPressure=' + json.atmosphericPressure);
        assert.ok(true, 'timeStamp=' + json.timeStamp);
        assert.ok(true, 'timeStampString=' + json.timeStampString);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.test('atmosphericPressureNormalTest001',
        AtmosphericPressureProfileNormalTest.atmosphericPressureNormalTest001);