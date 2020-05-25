QUnit.module('KeyEvent Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
let KeyEventProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでondownにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /keyevent/ondown?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
KeyEventProfileAbnormalTest.ondownAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.keyEvent.PROFILE_NAME,
    attribute: dConnectSDK.constants.keyEvent.ATTR_ON_DOWN,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('ondownAbnormalTest001(post)', KeyEventProfileAbnormalTest.ondownAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonupにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /keyevent/onup?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
KeyEventProfileAbnormalTest.onupAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.keyEvent.PROFILE_NAME,
    attribute: dConnectSDK.constants.keyEvent.ATTR_ON_UP,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onupAbnormalTest001(post)', KeyEventProfileAbnormalTest.onupAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでonkeychangeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /keyevent/onkeychange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
KeyEventProfileAbnormalTest.onkeychangeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.keyEvent.PROFILE_NAME,
    attribute: dConnectSDK.constants.keyEvent.ATTR_ON_KEY_CHANGE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onkeychangeAbnormalTest001(post)', KeyEventProfileAbnormalTest.onkeychangeAbnormalTest001);
