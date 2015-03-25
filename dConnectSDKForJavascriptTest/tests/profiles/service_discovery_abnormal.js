module('ServiceDiscovery Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * ServiceDiscoveryプロファイルの異常系テストを行うクラス。
 * @class
 */
var ServiceDiscoveryProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでデバイス一覧取得にアクセスする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /servicediscovery
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.servicediscovery.PROFILE_NAME);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, "json: " + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        if (errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION) {
          assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, 'not support');
        } else {
          assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        }
        QUnit.start();
      });
};
QUnit.asyncTest('getServiceDiscoveryAbnormalTest001', ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでデバイス一覧取得にアクセスする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /servicediscovery
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.servicediscovery.PROFILE_NAME);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, "json: " + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        if (errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION) {
          assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, 'not support');
        } else {
          assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        }
        QUnit.start();
      });
};
QUnit.asyncTest('getServiceDiscoveryAbnormalTest002', ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでデバイス一覧取得にアクセスする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /servicediscovery
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.servicediscovery.PROFILE_NAME);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, "json: " + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('getServiceDiscoveryAbnormalTest003', ServiceDiscoveryProfileAbnormalTest.getServiceDiscoveryProfileAbnormalTest003);

/**
 * 定義されていないPOSTメソッドで接続状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /servicediscovery/onservicechange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.onServiceChangeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.servicediscovery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.servicediscovery.ATTR_ON_SERVICE_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, "json: " + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('onServiceChangeAbnormalTest001', ServiceDiscoveryProfileAbnormalTest.onServiceChangeAbnormalTest001);

/**
 * 定義されていないGETメソッドで接続状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /servicediscovery/onservicechange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceDiscoveryProfileAbnormalTest.onServiceChangeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.servicediscovery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.servicediscovery.ATTR_ON_SERVICE_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, "json: " + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == dConnect.constants.ErrorCode.UNKNOWN_ATTRIBUTE) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('onServiceChangeAbnormalTest002', ServiceDiscoveryProfileAbnormalTest.onServiceChangeAbnormalTest002);
