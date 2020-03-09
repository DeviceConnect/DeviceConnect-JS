QUnit.module('Power Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Powerプロファイルの異常系テストを行うクラス。
 * @class
 */
var PowerProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで電源状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PowerProfileAbnormalTest.powerStatusAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
	var builder = new dConnect.URIBuilder();
	builder.setProfile('power');
	builder.setAccessToken(accessToken);
	builder.setServiceId(serviceId);
	var uri = builder.build();
	dConnect.post(uri, null, null, function(json) {
		assert.ok(false, 'json: ' + JSON.stringify(json));
		QUnit.start();
	}, function(errorCode, errorMessage) {
		if (errorCode == 8) {
			assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
		} else if (checkErrorCode(errorCode)) {
			assert.ok(true, "not support");
		} else {
			assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
		}
		QUnit.start();
	});
};
QUnit.test('GetPowerStatusAbnormalTest001', PowerProfileAbnormalTest.powerStatusAbnormalTest001);
