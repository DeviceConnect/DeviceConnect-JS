module('Touch Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
var TouchProfileNormalTest = {};

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME
        && json.attribute === dConnect.constants.touch.ATTR_ON_TOUCH) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onTouchNormalTest001', TouchProfileNormalTest.onTouchNormalTest001);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_START);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME && json.attribute === dConnect.constants.touch.ATTR_ON_TOUCH_START) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onTouchStartNormalTest001', TouchProfileNormalTest.onTouchStartNormalTest001);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_END);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME && json.attribute === dConnect.constants.touch.ATTR_ON_TOUCH_END) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onTouchEndNormalTest001', TouchProfileNormalTest.onTouchEndNormalTest001);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_DOUBLE_TAP);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME && json.attribute === dConnect.constants.touch.ATTR_ON_DOUBLE_TAP) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onDoubleTapNormalTest001', TouchProfileNormalTest.onDoubleTapNormalTest001);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_MOVE);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME && json.attribute === dConnect.constants.touch.ATTR_ON_TOUCH_MOVE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onTouchMoveNormalTest001', TouchProfileNormalTest.onTouchMoveNormalTest001);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_CANCEL);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME && json.attribute === dConnect.constants.touch.ATTR_ON_TOUCH_CANCEL) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onTouchCancelNormalTest001', TouchProfileNormalTest.onTouchCancelNormalTest001);

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_CHANGE);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.touch.PROFILE_NAME && json.attribute === dConnect.constants.touch.ATTR_ON_TOUCH_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onTouchChangeNormalTest001', TouchProfileNormalTest.onTouchChangeNormalTest001);
