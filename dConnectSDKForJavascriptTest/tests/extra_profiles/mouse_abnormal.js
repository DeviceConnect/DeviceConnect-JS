QUnit.module('Mouse Profile Abnormal Test', {
    setup: function() {
        init();
    }
});

/**
 * Mouseプロファイルの異常系テストを行うクラス。
 * @class
 */
var MouseProfileAbnormalTest = {};

/**
 * マウスのxに範囲外の値を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&x=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('x', 100);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest001', MouseProfileAbnormalTest.mouseTest001);

/**
 * マウスのyに範囲外の値を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&y=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('y', 100);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest002', MouseProfileAbnormalTest.mouseTest002);

/**
 * マウスのwheelに範囲外の値を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&whell=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('wheel', 100);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest003', MouseProfileAbnormalTest.mouseTest003);

/**
 * マウスのrightButtonにboolean以外を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&rightButton=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('rightButton', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest004', MouseProfileAbnormalTest.mouseTest004);

/**
 * マウスのleftButtonにboolean以外を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&leftButton=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('leftButton', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest005', MouseProfileAbnormalTest.mouseTest005);

/**
 * マウスのmiddleButtonにboolean以外を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&middleButton=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('middleButton', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest006', MouseProfileAbnormalTest.mouseTest006);

/**
 * マウスのxに文字列を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&x=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('x', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest007', MouseProfileAbnormalTest.mouseTest007);

/**
 * マウスのyに文字列を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&y=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('y', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest008', MouseProfileAbnormalTest.mouseTest008);

/**
 * マウスのyに文字列を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&y=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('wheel', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('mouseTest009', MouseProfileAbnormalTest.mouseTest009);

/**
 * クリックするボタンを指定しないで送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/click?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.clickTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setInterface('click');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('clickTest001', MouseProfileAbnormalTest.clickTest001);


/**
 * 存在しないボタンをクリックを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/click?serviceId=xxxx&button=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.clickTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setInterface('click');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('button', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('clickTest002', MouseProfileAbnormalTest.clickTest002);

/**
 * ダブルクリックするボタンを指定しないで送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/doubleClick?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.doubleClickTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setInterface('doubleClick');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('doubleClickTest001', MouseProfileAbnormalTest.doubleClickTest001);


/**
 * 存在しないボタンをダブルクリックを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/doubleClick?serviceId=xxxx&button=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.doubleClickTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setInterface('doubleClick');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('button', 'abc');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('doubleClickTest002', MouseProfileAbnormalTest.doubleClickTest002);
