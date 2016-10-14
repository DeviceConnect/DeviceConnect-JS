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
 * onquaternionにGETでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /sphero/onquaternion?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
SpheroProfileNormalTest.onQuaternionNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('sphero');
    builder.setInterface('quaternion');
    builder.setAttribute('onquaternion');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onQuaternionNormalTest002', SpheroProfileNormalTest.onQuaternionNormalTest002);

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
 * onquaternionにGETでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /sphero/onlocator?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
SpheroProfileNormalTest.onLocatorNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('sphero');
    builder.setInterface('locator');
    builder.setAttribute('onlocator');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onLocatorNormalTest002', SpheroProfileNormalTest.onLocatorNormalTest002);

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

/**
 * onquaternionにGETでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /sphero/oncollision?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
SpheroProfileNormalTest.onCollisionNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('sphero');
    builder.setInterface('collision');
    builder.setAttribute('oncolision');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onCollisionNormalTest002', SpheroProfileNormalTest.onCollisionNormalTest002);
