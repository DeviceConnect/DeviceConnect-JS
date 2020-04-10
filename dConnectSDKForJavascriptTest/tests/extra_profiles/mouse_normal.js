QUnit.module('Mouse Profile Normal Test', {
    before: function() {
        init();
    }
});

/**
 * Mouseプロファイルのテストを行うクラス。
 * @class
 */
let MouseProfileNormalTest = {};

/**
 * マウス情報を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mouse?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.mouseTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
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
QUnit.test('mouseTest001', MouseProfileNormalTest.mouseTest001);

/**
 * マウス情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.mouseTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    params: {
      serviceId: getCurrentServiceId(),
      x: 0.25,
      y: 0.25
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
QUnit.test('mouseTest002', MouseProfileNormalTest.mouseTest002);


/**
 * クリックを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/click?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.clickTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    attribute: 'click',
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
QUnit.test('clickTest001', MouseProfileNormalTest.clickTest001);


/**
 * ダブルクリックを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/doubleClick?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.doubleClickTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    attribute: 'doubleClick',
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
QUnit.test('doubleClickTest001', MouseProfileNormalTest.doubleClickTest001);
