module('Touch Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Touchプロファイルの正常系テストを行うクラス。
 * @class
 */
var TouchProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouch?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onTouchAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでタッチ開始通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchstart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchStartAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_START);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onTouchStartAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchStartAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでタッチ終了通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchend?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchEndAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_END);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onTouchEndAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchEndAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ondoubletap?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onDoubleTapAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.touch.ATTR_ON_DOUBLE_TAP);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onDoubleTapAbnormalTest001(post)', TouchProfileAbnormalTest.onDoubleTapAbnormalTest001);
;

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchmove?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchMoveAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_MOVE);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onTouchMoveAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchMoveAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /touch/ontouchcancel?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
TouchProfileAbnormalTest.onTouchCancelAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.touch.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.touch.ATTR_ON_TOUCH_CANCEL);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onTouchCancelAbnormalTest001(post)', TouchProfileAbnormalTest.onTouchCancelAbnormalTest001);
