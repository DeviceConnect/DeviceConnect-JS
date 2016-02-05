module('System Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Systemプロファイルの正常系テストを行うクラス。
 * @class
 */
var SystemProfileNormalTest = {};

/**
 * スマートフォンのシステム情報を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /system?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SystemProfileNormalTest.systemTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.system.PROFILE_NAME);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(true, 'version=' + json.version);
      assert.ok(json.supports !== undefined, 'supports is ok.');
      assert.ok(json.plugins !== undefined, 'pluginId is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('systemTest001(get)', SystemProfileNormalTest.systemTest001);

/**
 * デバイスプラグインを有効にする、もしくは設定画面を起動するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /system/wakeup?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SystemProfileNormalTest.systemWakeupTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.system.PROFILE_NAME);
    builder.setInterface(dConnect.constants.system.INTERFACE_DEVICE);
    builder.setAttribute(dConnect.constants.system.ATTRI_WAKEUP);
    builder.setAccessToken(accessToken);
    builder.addParameter("pluginId", serviceId);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('systemWakeupTest001(put)', SystemProfileNormalTest.systemWakeupTest001);
