QUnit.module('Keyboard Profile Normal Test', {
    before: function() {
        init();
    }
});

/**
 * Keyboardプロファイルのテストを行うクラス。
 * @class
 */
let KeyboardProfileNormalTest = {};

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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    params: {
      serviceId: getCurrentServiceId(),
      keyCode: 4
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    params: {
      serviceId: getCurrentServiceId(),
      keyCode: '0x04'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    params: {
      serviceId: getCurrentServiceId(),
      keyCode: '4,5'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    params: {
      serviceId: getCurrentServiceId(),
      keyCode: '0x04,5'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    params: {
      serviceId: getCurrentServiceId(),
      keyCode: '0x04',
      modifier: 'shift'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'ascii',
    params: {
      serviceId: getCurrentServiceId(),
      string: 'a'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'ascii',
    params: {
      serviceId: getCurrentServiceId(),
      string: 'ABC'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'upArrow',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'downArrow',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'leftArrow',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'rightArrow',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'enter',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'esc',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'keyboard',
    attribute: 'del',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('delTest001', KeyboardProfileNormalTest.delTest001);
