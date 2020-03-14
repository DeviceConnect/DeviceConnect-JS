QUnit.module('GPIOProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * GPIOプロファイルの正常系テストを行うクラス。
 * @class
 */
let GPIOProfileAbnormalTest = {};

/**
 * 指定範囲外のPIN番号を指定して、GPIOのDigital値を取得
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/digital/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'gpio',
    interface: 'digital',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest001',
    GPIOProfileAbnormalTest.gpioAbnormalTest001);

/**
 * 指定範囲外のPIN番号を指定して、GPIOのAnalog値を取得
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/analog/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'gpio',
    interface: 'analog',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest002',
    GPIOProfileAbnormalTest.gpioAbnormalTest002);

/**
 * 規定外のAttributeを送信
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/test/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'gpio',
    interface: 'test',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest003',
    GPIOProfileAbnormalTest.gpioAbnormalTest003);

/**
 * 指定範囲外のPIN番号を指定して、exportを実行
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/21<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '21',
    mode: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest004',
    GPIOProfileAbnormalTest.gpioAbnormalTest004);

/**
 * modeの値を指定しない.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/19<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '19',
    mode: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest005',
    GPIOProfileAbnormalTest.gpioAbnormalTest005);

/**
 * modeの値を1,2,3,4以外に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/19
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '19',
    mode: 10,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest006',
    GPIOProfileAbnormalTest.gpioAbnormalTest006);

/**
 * modeの値を文字列に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/19?<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=aaa<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '19',
    mode: 'aaaa',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest007',
    GPIOProfileAbnormalTest.gpioAbnormalTest007);

/**
 * 指定範囲外のPIN番号を指定して、digitalを実行
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/21<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '21',
    mode: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest008',
    GPIOProfileAbnormalTest.gpioAbnormalTest008);

/**
 * valueの値を指定しない.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5'
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest009',
    GPIOProfileAbnormalTest.gpioAbnormalTest009);

/**
 * valueの値を0,1以外に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5
 * POST Value: serviceId=xxxx&accessToken=xxx&value=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5',
    value: 4,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest010',
    GPIOProfileAbnormalTest.gpioAbnormalTest010);

/**
 * valueの値を文字列に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&value=aaa<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5',
    value: 'aaaa',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest011',
    GPIOProfileAbnormalTest.gpioAbnormalTest011);

/**
 * 指定範囲外のPIN番号を指定して、analogを実行
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/1<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&value=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '1',
    value: 100,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest012',
    GPIOProfileAbnormalTest.gpioAbnormalTest012);

/**
 * valueの値を指定しない.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/15<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '3',
    value: 100,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest013',
    GPIOProfileAbnormalTest.gpioAbnormalTest013);

/**
 * valueの値を256以上に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/15
 * POST Value: serviceId=xxxx&accessToken=xxx&value=300<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '3',
    value: 300,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest014',
    GPIOProfileAbnormalTest.gpioAbnormalTest014);

/**
 * valueの値を文字列に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/15<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=aaa<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '3',
    value: 'aaa',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('gpioAbnormalTest015',
    GPIOProfileAbnormalTest.gpioAbnormalTest015);

/**
 * 指定範囲外のPIN番号を指定して、指定PINをHIGHに
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest016 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest016',
    GPIOProfileAbnormalTest.gpioAbnormalTest016);

/**
 * 規定外のAttributeを送信
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/test/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest017 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'test',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest017',
    GPIOProfileAbnormalTest.gpioAbnormalTest017);

/**
 * 指定範囲外のPIN番号を指定して、指定PINをLOWに
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest018 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest018',
    GPIOProfileAbnormalTest.gpioAbnormalTest018);

/**
 * 規定外のAttributeを送信
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/test/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest019 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'test',
    attribute: '21',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('gpioAbnormalTest019',
    GPIOProfileAbnormalTest.gpioAbnormalTest019);
