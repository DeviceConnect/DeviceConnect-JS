QUnit.module('Touch Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
let TouchProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouch?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onTouchAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでタッチ開始通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchstart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchStartAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_START,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onTouchStartAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchStartAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでタッチ終了通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchend?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchEndAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_END,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onTouchEndAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchEndAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ondoubletap?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onDoubleTapAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_DOUBLE_TAP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onDoubleTapAbnormalTest001(post)', TouchProfileAbnormalTest.onDoubleTapAbnormalTest001);
;

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchmove?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchMoveAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_MOVE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onTouchMoveAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchMoveAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchcancel?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchCancelAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_CANCEL,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onTouchCancelAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchCancelAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでタッチ変化通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchchange?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchChangeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_CHANGE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onTouchChangeAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchChangeAbnormalTest001);
