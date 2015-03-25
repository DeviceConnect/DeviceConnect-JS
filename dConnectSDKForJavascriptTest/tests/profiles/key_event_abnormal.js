module('KeyEvent Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
var KeyEventProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでondownにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /keyevent/ondown?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
KeyEventProfileAbnormalTest.ondownAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.keyevent.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.keyevent.ATTR_ON_DOWN);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
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
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('ondownAbnormalTest001(post)', KeyEventProfileAbnormalTest.ondownAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonupにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /keyevent/onup?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
KeyEventProfileAbnormalTest.onupAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.keyevent.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.keyevent.ATTR_ON_UP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
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
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('onupAbnormalTest001(post)', KeyEventProfileAbnormalTest.onupAbnormalTest001);
