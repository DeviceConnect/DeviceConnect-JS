module('KeyEvent Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
var KeyEventProfileNormalTest = {};

/**
 * KeyEventプロファイルのondownを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /keyevent/ondown?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
KeyEventProfileNormalTest.ondownNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.keyevent.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.keyevent.ATTR_ON_DOWN);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.keyevent.PROFILE_NAME && 
        json.attribute === dConnect.constants.keyevent.ATTR_ON_DOWN) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('ondownNormalTest001', KeyEventProfileNormalTest.ondownNormalTest001);

/**
 * KeyEventプロファイルのonupを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /keyevent/onup?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
KeyEventProfileNormalTest.onupNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.keyevent.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.keyevent.ATTR_ON_UP);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.keyevent.PROFILE_NAME && 
        json.attribute === dConnect.constants.keyevent.ATTR_ON_UP) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onupNormalTest001', KeyEventProfileNormalTest.onupNormalTest001);
