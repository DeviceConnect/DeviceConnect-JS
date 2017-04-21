module('Vibration Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Vibrationプロファイルの正常系テストを行うクラス。
 * @class
 */
var VibrationProfileNormalTest = {};

/**
 * デフォルト時間でバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・デバイスがバイブレーションすること。<br/>
 * </p>
 */
VibrationProfileNormalTest.vibrateNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateNormalTest001(put)', VibrationProfileNormalTest.vibrateNormalTest001);

/**
 * パラメータpatternに 10回vibrationがON/OFFするパターンを指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken&pattern='1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VibrationProfileNormalTest.vibrateNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.vibration.PARAM_PATTERN, '1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,'
  + '1000,1000,1000,1000,1000,1000,1000,1000,1000,1000');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
 }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateNormalTest002', VibrationProfileNormalTest.vibrateNormalTest002);

/**
 * パラメータpatternに大きい数値を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken&pattern='1000000000'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・デバイスがバイブレーションすること。<br/>
 * </p>
 */
VibrationProfileNormalTest.vibrateNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.vibration.PARAM_PATTERN, '1000000000');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('VibrateNormalTest003(pattern is big number.)', VibrationProfileNormalTest.vibrateNormalTest003);

/**
 * パラメータpatternに0を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken&pattern='0'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VibrationProfileNormalTest.vibrateNormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.vibration.PARAM_PATTERN, '0');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateNormalTest004(pattern is zero.)', VibrationProfileNormalTest.vibrateNormalTest004);

/**
 * パラメータpatternに空文字を指定してバイブレーションする正常系テストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken&pattern=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・デバイスがバイブレーションすること。<br/>
 * </p>
 */
VibrationProfileNormalTest.vibrateNormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('pattern', '');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateNormalTest005(pattern is empty.)', VibrationProfileNormalTest.vibrateNormalTest005);

/**
 * バイブレーションを停止するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・デバイスがバイブレーションが停止すること。<br/>
 * </p>
 */
VibrationProfileNormalTest.vibrateNormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('VibrateNormalTest006(delete)', VibrationProfileNormalTest.vibrateNormalTest006);

