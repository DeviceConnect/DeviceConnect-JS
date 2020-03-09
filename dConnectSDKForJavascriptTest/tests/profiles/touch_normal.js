QUnit.module('Touch Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
let TouchProfileNormalTest = {};

/**
 * タッチ通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ontouch?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onTouchNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
        && json.attribute === dConnectSDK.constants.touch.ATTR_ON_TOUCH) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onTouchNormalTest001', TouchProfileNormalTest.onTouchNormalTest001);

/**
 * タッチ開始通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ontouchstart?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onTouchStartNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_START,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.touch.ATTR_ON_TOUCH_START) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onTouchStartNormalTest001', TouchProfileNormalTest.onTouchStartNormalTest001);

/**
 * タッチ終了通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ontouchend?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onTouchEndNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_END,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
        && json.attribute === dConnectSDK.constants.touch.ATTR_ON_TOUCH_END) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onTouchEndNormalTest001', TouchProfileNormalTest.onTouchEndNormalTest001);

/**
 * ダブルタップ通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ondoubletap?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onDoubleTapNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_DOUBLE_TAP,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.touch.ATTR_ON_DOUBLE_TAP) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onDoubleTapNormalTest001', TouchProfileNormalTest.onDoubleTapNormalTest001);

/**
 * タッチ継続通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ontouchmove?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onTouchMoveNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_MOVE,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
       && json.attribute === dConnectSDK.constants.touch.ATTR_ON_TOUCH_MOVE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onTouchMoveNormalTest001', TouchProfileNormalTest.onTouchMoveNormalTest001);

/**
 * タッチキャンセル通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ontouchcancel?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onTouchCancelNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_CANCEL,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
       && json.attribute === dConnectSDK.constants.touch.ATTR_ON_TOUCH_CANCEL) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onTouchCancelNormalTest001',
      TouchProfileNormalTest.onTouchCancelNormalTest001);

/**
 * タッチ変更通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /touch/ontouchchange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
TouchProfileNormalTest.onTouchChangeNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.touch.PROFILE_NAME,
    attribute: dConnectSDK.constants.touch.ATTR_ON_TOUCH_CHANGE,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.touch.PROFILE_NAME
      && json.attribute === dConnectSDK.constants.touch.ATTR_ON_TOUCH_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onTouchChangeNormalTest001',
      TouchProfileNormalTest.onTouchChangeNormalTest001);
