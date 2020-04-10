QUnit.module('Vibration Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Vibrationプロファイルの異常系テストを行うクラス。
 * @class
 */
let VibrationProfileAbnormalTest = {};

/**
 * パラメータpatternに文字列(this is test.)を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken=xxxx&accessToken=xxxx&pattern='this is test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    params: {
      serviceId: getCurrentServiceId(),
      pattern: 'this is test.'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('vibrateAbnormalTest001(pattern is string.)', VibrationProfileAbnormalTest.vibrateAbnormalTest001);

/**
 * パラメータpatternに-1,-1を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken=xxxx&pattern='-1,-1'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    params: {
      serviceId: getCurrentServiceId(),
      pattern: '-1,-1'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('vibrateAbnormalTest002(pattern is -1,-1.)', VibrationProfileAbnormalTest.vibrateAbnormalTest002);

/**
 * パラメータpatternに特殊文字(!\"#$%&'()+*<>?_{},.)を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken=xxxx&pattern='!\"#$%&'()+*<>?_{},.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    params: {
      serviceId: getCurrentServiceId(),
      pattern: "!\"#$%&'()+*<>?_{},."
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('vibrateAbnormalTest003(pattern is special characters.)', VibrationProfileAbnormalTest.vibrateAbnormalTest003);

/**
 * 定義されていないGETメソッドでvibrateにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /vibration/vibrate?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('vibrateAbnormalTest004(Calling a get method that does not support.)', VibrationProfileAbnormalTest.vibrateAbnormalTest004);

/**
 * 定義されていないPOSTメソッドでvibrateにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /vibration/vibrate?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('vibrateAbnormalTest005(Calling a post method that does not support.)',
      VibrationProfileAbnormalTest.vibrateAbnormalTest005);
