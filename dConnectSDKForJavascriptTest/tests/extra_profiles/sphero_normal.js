module('SpheroProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * RemoteControllerプロファイルの正常系テストを行うクラス。
 * @class
 */
var SpheroProfileNormalTest = {};

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
  var builder = new dConnect.URIBuilder();
  builder.setProfile('sphero');
  builder.setInterface('quaternion');
  builder.setAttribute('onquaternion');
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === 'sphero' && json.attribute === 'onquaternion') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onQuaternionNormalTest001', SpheroProfileNormalTest.onQuaternionNormalTest001);


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
  var builder = new dConnect.URIBuilder();
  builder.setProfile('sphero');
  builder.setInterface('locator');
  builder.setAttribute('onlocator');
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === 'sphero' && json.attribute === 'onlocator') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onLocatorNormalTest001', SpheroProfileNormalTest.onLocatorNormalTest001);


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
  var builder = new dConnect.URIBuilder();
  builder.setProfile('sphero');
  builder.setInterface('collision');
  builder.setAttribute('oncollision');
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === 'sphero' && json.attribute === 'oncollision') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onCollisionNormalTest001', SpheroProfileNormalTest.onCollisionNormalTest001);

