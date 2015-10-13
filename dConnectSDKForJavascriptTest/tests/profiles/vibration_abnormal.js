module('Vibration Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Vibrationプロファイルの異常系テストを行うクラス。
 * @class
 */
var VibrationProfileAbnormalTest = {};

/**
 * パラメータpatternに文字列(this is test.)を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken=xxxx&accessToken=xxxx&pattern='this is test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('pattern', 'this is test.');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateAbnormalTest001(pattern is string.)', VibrationProfileAbnormalTest.vibrateAbnormalTest001);

/**
 * パラメータpatternに-1,-1を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken=xxxx&pattern='-1,-1'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('pattern', '-1,-1');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateAbnormalTest002(pattern is -1,-1.)', VibrationProfileAbnormalTest.vibrateAbnormalTest002);

/**
 * パラメータpatternに特殊文字(!\"#$%&'()+*<>?_{},.)を指定してバイブレーションするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /vibration/vibrate?serviceId=xxxx&accessToken=xxxx&pattern='!\"#$%&'()+*<>?_{},.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('pattern', "!\"#$%&'()+*<>?_{},.");
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateAbnormalTest003(pattern is special characters.)', VibrationProfileAbnormalTest.vibrateAbnormalTest003);

/**
 * 定義されていないGETメソッドでvibrateにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /vibration/vibrate?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage + "]");
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
QUnit.asyncTest('vibrateAbnormalTest004(Calling a get method that does not support.)', VibrationProfileAbnormalTest.vibrateAbnormalTest004);

/**
 * 定義されていないPOSTメソッドでvibrateにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /vibration/vibrate?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VibrationProfileAbnormalTest.vibrateAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.vibration.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.vibration.ATTR_VIBRATE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage + "]");
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.equal(false,
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('vibrateAbnormalTest005(Calling a post method that does not support.)', VibrationProfileAbnormalTest.vibrateAbnormalTest005);
