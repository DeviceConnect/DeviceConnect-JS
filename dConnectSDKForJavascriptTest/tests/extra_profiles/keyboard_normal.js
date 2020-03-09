QUnit.module('Keyboard Profile Normal Test', {
    setup: function() {
        init();
    }
});

/**
 * Keyboardプロファイルのテストを行うクラス。
 * @class
 */
var KeyboardProfileNormalTest = {};

/**
 * キーコードに4を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=4<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.keyboardTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', 4);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('keyboardTest001', KeyboardProfileNormalTest.keyboardTest001);

/**
 * キーコードに0x04を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=0x04<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.keyboardTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '0x04');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('keyboardTest002', KeyboardProfileNormalTest.keyboardTest002);

/**
 * キーコードに4,5を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=4,5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.keyboardTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '4,5');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('keyboardTest003', KeyboardProfileNormalTest.keyboardTest003);

/**
 * キーコードに0x04,5を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=0x04,5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.keyboardTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '0x04,5');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('keyboardTest004', KeyboardProfileNormalTest.keyboardTest004);

/**
 * モディファイアーキーSHIFT、キーコードに0x04を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard?serviceId=xxxx&keyCode=0x04&modifier=shift<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.keyboardTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('keyCode', '0x04');
  builder.addParameter('modifier', 'shift');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('keyboardTest005', KeyboardProfileNormalTest.keyboardTest005);


/**
 * ASCIIでaを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/ascii?serviceId=xxxx&string=a<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.asciiTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('ascii');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('string', 'a');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });

};
QUnit.test('asciiTest001', KeyboardProfileNormalTest.asciiTest001);

/**
 * ASCIIでABCを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/ascii?serviceId=xxxx&string=ABC<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.asciiTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('ascii');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('string', 'ABC');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('asciiTest001', KeyboardProfileNormalTest.asciiTest001);

/**
 * upArrowを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/upArrow?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.upArrowTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('upArrow');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('upArrowTest001', KeyboardProfileNormalTest.upArrowTest001);


/**
 * downArrowを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/downArrow?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.downArrowTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('downArrow');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('downArrowTest001', KeyboardProfileNormalTest.downArrowTest001);

/**
 * leftArrowを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/leftArrow?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.leftArrowTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('leftArrow');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('leftArrowTest001', KeyboardProfileNormalTest.leftArrowTest001);

/**
 * rightArrowを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/rightArrow?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.rightArrowTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('rightArrow');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('rightArrowTest001', KeyboardProfileNormalTest.rightArrowTest001);


/**
 * enterを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/enter?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.enterTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('enter');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('enterTest001', KeyboardProfileNormalTest.enterTest001);


/**
 * escを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/esc?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.escTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('esc');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('escTest001', KeyboardProfileNormalTest.escTest001);


/**
 * delを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /keyboard/del?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
KeyboardProfileNormalTest.delTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyboard');
  builder.setAttribute('del');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.test('delTest001', KeyboardProfileNormalTest.delTest001);

