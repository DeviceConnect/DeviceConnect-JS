QUnit.module('Mouse Profile Abnormal Test', {
    before: function() {
        init();
    }
});

/**
 * Mouseプロファイルの異常系テストを行うクラス。
 * @class
 */
let MouseProfileAbnormalTest = {};

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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    x: 100
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    y: 100
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    wheel: 100
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    rightButton: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    leftButton: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    middleButton: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    x: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    y: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mouseTest008', MouseProfileAbnormalTest.mouseTest008);

/**
 * マウスのwheelに文字列を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx&wheel=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
MouseProfileAbnormalTest.mouseTest009 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    serviceId: getCurrentServiceId(),
    wheel: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    attribute: 'click',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    attribute: 'click',
    serviceId: getCurrentServiceId(),
    button: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    attribute: 'doubleClick',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
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
  let done = assert.async();
  sdk.post({
    profile: 'mouse',
    attribute: 'doubleClick',
    serviceId: getCurrentServiceId(),
    button: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('doubleClickTest002', MouseProfileAbnormalTest.doubleClickTest002);
