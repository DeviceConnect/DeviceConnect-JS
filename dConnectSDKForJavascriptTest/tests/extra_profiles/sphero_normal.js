QUnit.module('SpheroProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * RemoteControllerプロファイルの正常系テストを行うクラス。
 * @class
 */
let SpheroProfileNormalTest = {};

/**
 * Spheroプロファイルのonquaternionイベント登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /sphero/onquaternion?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
SpheroProfileNormalTest.onQuaternionNormalTest001 = function(assert) {
  let params = {
    profile: 'sphero',
    interface: 'quaternion',
    attribute: 'onquaternion',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === 'sphero' && json.attribute === 'onquaternion') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onQuaternionNormalTest001', SpheroProfileNormalTest.onQuaternionNormalTest001);


/**
 * Spheroプロファイルのonlocatorイベント登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /sphero/onlocator?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
SpheroProfileNormalTest.onLocatorNormalTest001 = function(assert) {
  let params = {
    profile: 'sphero',
    interface: 'locator',
    attribute: 'onlocator',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === 'sphero' && json.attribute === 'onlocator') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onLocatorNormalTest001', SpheroProfileNormalTest.onLocatorNormalTest001);


/**
 * Spheroプロファイルのoncollisionイベント登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /sphero/oncollision?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
SpheroProfileNormalTest.onCollisionNormalTest001 = function(assert) {
  let params = {
    profile: 'sphero',
    interface: 'collision',
    attribute: 'oncollision',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === 'sphero' && json.attribute === 'oncollision') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onCollisionNormalTest001', SpheroProfileNormalTest.onCollisionNormalTest001);
