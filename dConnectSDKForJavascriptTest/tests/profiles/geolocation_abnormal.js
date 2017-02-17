module('Geolocation Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Geolocationプロファイルのテストを行なうクラス
 *@class
 */
var GeolocationProfileAbnormalTest = {};

/**
 * 定義されていないGETメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: GET
 * Path: /geolocation/onwatchposition?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.geolocation.ATTR_CURRENT_POSITION);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage= ' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('onWatchPositionAbnormalTest001(Calling a get method that does not support.)', 
    GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id = "test">
 * Method: POST
 * Path: /geolocation/onwatchposition?serviceId=xxxx&accessToken=xxx<br />
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */

GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.geolocation.ATTR_ON_WATCH_POSITION);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage= ' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('onWatchPositionAbnormalTest002(Calling a post method that does not support.)', 
    GeolocationProfileAbnormalTest.onWatchPositionAbnormalTest002);

/**
 * 定義されていないPUTメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
GeolocationProfileAbnormalTest.currentPositionAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.geolocation.ATTR_CURRENT_POSITION);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
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
QUnit.asyncTest('currentPositionAbnormalTest001(Calling a put method that does not support.)',
    GeolocationProfileAbnormalTest.currentPositionAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで位置情報の通知イベントにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
GeolocationProfileAbnormalTest.currentPositionAbnormalTest002 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.geolocation.ATTR_CURRENT_POSITION);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
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
QUnit.asyncTest('currentPositionAbnormalTest002(Calling a post method that does not support.)',
    GeolocationProfileAbnormalTest.currentPositionAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで、位置情報の通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /geolocation/currentposition?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
GeolocationProfileAbnormalTest.currentPositionAbnormalTest003 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.geolocation.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.geolocation.ATTR_CURRENT_POSITION);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
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
QUnit.asyncTest('currentPositionAbnormalTest003(Calling a delete method that does not support.)',
    GeolocationProfileAbnormalTest.currentPositionAbnormalTest003);
