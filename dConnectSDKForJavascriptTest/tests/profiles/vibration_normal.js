QUnit.module('Vibration Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Vibrationプロファイルの正常系テストを行うクラス。
 * @class
 */
let VibrationProfileNormalTest = {};

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('vibrateNormalTest001(put)', VibrationProfileNormalTest.vibrateNormalTest001);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    serviceId: serviceId,
    pattern: '1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,'
    + '1000,1000,1000,1000,1000,1000,1000,1000,1000,1000'
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('vibrateNormalTest002', VibrationProfileNormalTest.vibrateNormalTest002);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    serviceId: serviceId,
    pattern: '1000000000'
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('VibrateNormalTest003(pattern is big number.)', VibrationProfileNormalTest.vibrateNormalTest003);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    serviceId: serviceId,
    pattern: '0'
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('vibrateNormalTest004(pattern is zero.)', VibrationProfileNormalTest.vibrateNormalTest004);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  let param = {
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    serviceId: serviceId
  };
  param['pattern'] = '';
  sdk.put().then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('vibrateNormalTest005(pattern is empty.)', VibrationProfileNormalTest.vibrateNormalTest005);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.vibration.PROFILE_NAME,
    attribute: dConnectSDK.constants.vibration.ATTR_VIBRATE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('VibrateNormalTest006(delete)', VibrationProfileNormalTest.vibrateNormalTest006);
