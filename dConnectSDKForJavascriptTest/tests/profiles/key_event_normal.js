QUnit.module('KeyEvent Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
let KeyEventProfileNormalTest = {};

/**
 * KeyEventプロファイルのondownを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /keyEvent/ondown?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
KeyEventProfileNormalTest.ondownNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.keyEvent.PROFILE_NAME,
    attribute: dConnectSDK.constants.keyEvent.ATTR_ON_DOWN
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnect.constants.keyEvent.PROFILE_NAME &&
        json.attribute === dConnect.constants.keyEvent.ATTR_ON_DOWN) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('ondownNormalTest001', KeyEventProfileNormalTest.ondownNormalTest001);

/**
 * KeyEventプロファイルのonupを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /keyEvent/onup?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
KeyEventProfileNormalTest.onupNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.keyEvent.PROFILE_NAME,
    attribute: dConnectSDK.constants.keyEvent.ATTR_ON_UP
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnect.constants.keyEvent.PROFILE_NAME &&
        json.attribute === dConnect.constants.keyEvent.ATTR_ON_UP) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onupNormalTest001', KeyEventProfileNormalTest.onupNormalTest001);


/**
 * KeyEventプロファイルのonkeychangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /keyEvent/onkeychange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
KeyEventProfileNormalTest.onkeychangeNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.keyEvent.PROFILE_NAME,
    attribute: dConnectSDK.constants.keyEvent.ATTR_ON_KEY_CHANGE
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnect.constants.keyEvent.PROFILE_NAME &&
        json.attribute === dConnect.constants.keyEvent.ATTR_ON_KEY_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onkeychangeNormalTest001', KeyEventProfileNormalTest.onkeychangeNormalTest001);
