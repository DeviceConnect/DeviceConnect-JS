QUnit.module('Keyboard Profile Abnormal Test', {
    setup: function() {
        init();
    }
});

/**
 * Keyboardプロファイルの異常系テストを行うクラス。
 * @class
 */
var KeyboardProfileAbnormalTest = {};

/**
 * キーコードを指定しないで送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
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
QUnit.test('keyboardTest001', KeyboardProfileAbnormalTest.keyboardTest001);

/**
 * キーコードにキーコード以外の文字列を指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=ABC<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', 'ABC');
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
QUnit.test('keyboardTest002', KeyboardProfileAbnormalTest.keyboardTest002);

/**
 * キーコードを6個以上指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=4,5,6,7,8,9,10,11,12,13<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '4,5,6,7,8,9,10,11,12,13');
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
QUnit.test('keyboardTest003', KeyboardProfileAbnormalTest.keyboardTest003);

/**
 * キーコードに大きい値(1234)を指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '1024');
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
QUnit.test('keyboardTest004', KeyboardProfileAbnormalTest.keyboardTest004);

/**
 * キーコードに大きい値(0x1234)を指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=0x1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '0x1234');
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
QUnit.test('keyboardTest005', KeyboardProfileAbnormalTest.keyboardTest005);

/**
 * modifierに指定できない文字列を指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=0x04&modifier=ABC<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('modifier', 'ABC');
  builder.addParameter('keyCode', '0x04');
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
QUnit.test('keyboardTest006', KeyboardProfileAbnormalTest.keyboardTest006);

/**
 * modifierに空文字列を指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=0x04&modifier=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.keyboardTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('modifier', '');
  builder.addParameter('keyCode', '0x04');
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
QUnit.test('keyboardTest007', KeyboardProfileAbnormalTest.keyboardTest007);

/**
 * asciiにstringを指定しないで送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/ascii?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.asciiTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('ascii');
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
QUnit.test('asciiTest001', KeyboardProfileAbnormalTest.asciiTest001);

/**
 * asciiにstringに空文字を指定して送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/ascii?serviceId=xxxx&string=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
KeyboardProfileAbnormalTest.asciiTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('ascii');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('string', '');
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
QUnit.test('asciiTest002', KeyboardProfileAbnormalTest.asciiTest002);

