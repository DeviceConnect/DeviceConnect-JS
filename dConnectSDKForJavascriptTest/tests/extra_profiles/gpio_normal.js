QUnit.module('GPIOProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * GPIOプロファイルの正常系テストを行うクラス。
 * @class
 */
let GPIOProfileNormalTest = {};

/**
 * GPIOでPIN 2をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '2',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest003',
    GPIOProfileNormalTest.gpioNormalTest003);

/**
 * GPIOでPIN 3をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '3',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest004',
    GPIOProfileNormalTest.gpioNormalTest004);

/**
 * GPIOでPIN 4をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/4?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '4',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest005',
    GPIOProfileNormalTest.gpioNormalTest005);

/**
 * GPIOでPIN 5をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest006',
    GPIOProfileNormalTest.gpioNormalTest006);

/**
 * GPIOでPIN 6をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '6',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest007',
    GPIOProfileNormalTest.gpioNormalTest007);

/**
 * GPIOでPIN 7をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '7',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest008',
    GPIOProfileNormalTest.gpioNormalTest008);

/**
 * GPIOでPIN 8をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '8',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest009',
    GPIOProfileNormalTest.gpioNormalTest009);


/**
 * GPIOでPIN 9をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '9',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest010',
    GPIOProfileNormalTest.gpioNormalTest010);


/**
 * GPIOでPIN 10をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '10',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest011',
    GPIOProfileNormalTest.gpioNormalTest011);

/**
 * GPIOでPIN 11をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '11',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest012',
    GPIOProfileNormalTest.gpioNormalTest012);

/**
 * GPIOでPIN 12をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '12',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest013',
    GPIOProfileNormalTest.gpioNormalTest013);

/**
 * GPIOでPIN 13をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest014 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'gpio',
    interface: 'digital',
    attribute: '13',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest014',
    GPIOProfileNormalTest.gpioNormalTest014);

/**
 * GPIOでPIN 2をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest015 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '2',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest015',
    GPIOProfileNormalTest.gpioNormalTest015);

/**
 * GPIOでPIN 3をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest016 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '3',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('gpioNormalTest016',
    GPIOProfileNormalTest.gpioNormalTest016);

/**
 * GPIOでPIN 4をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/4?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest017 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '4',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest017',
    GPIOProfileNormalTest.gpioNormalTest017);

/**
 * GPIOでPIN 5をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest018 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest018',
    GPIOProfileNormalTest.gpioNormalTest018);

/**
 * GPIOでPIN 6をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest019 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '6',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest019',
    GPIOProfileNormalTest.gpioNormalTest019);

/**
 * GPIOでPIN 7をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest020 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '7',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest020',
    GPIOProfileNormalTest.gpioNormalTest020);

/**
 * GPIOでPIN 8をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest021 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '8',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest021',
    GPIOProfileNormalTest.gpioNormalTest021);

/**
 * GPIOでPIN 9をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest022 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '9',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest022',
    GPIOProfileNormalTest.gpioNormalTest022);

/**
 * GPIOでPIN 10をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest023 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '10',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest023',
    GPIOProfileNormalTest.gpioNormalTest023);

/**
 * GPIOでPIN 11をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest024 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '11',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest024',
    GPIOProfileNormalTest.gpioNormalTest024);

/**
 * GPIOでPIN 12をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest025 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '12',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest025',
    GPIOProfileNormalTest.gpioNormalTest025);

/**
 * GPIOでPIN 13をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest026 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'gpio',
    interface: 'digital',
    attribute: '13',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest026',
    GPIOProfileNormalTest.gpioNormalTest026);

/**
 * GPIOでPIN 2をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest027 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '2',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest027',
    GPIOProfileNormalTest.gpioNormalTest027);

/**
 * GPIOでPIN 3をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest028 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '3',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest028',
    GPIOProfileNormalTest.gpioNormalTest028);

/**
 * GPIOでPIN 4をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/4<br/>
 * POST value: serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest029 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '4',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest029',
    GPIOProfileNormalTest.gpioNormalTest029);

/**
 * GPIOでPIN 5をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest030 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest030',
    GPIOProfileNormalTest.gpioNormalTest030);

/**
 * GPIOでPIN 6をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest031 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '6',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest031',
    GPIOProfileNormalTest.gpioNormalTest031);

/**
 * GPIOでPIN 7をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest032 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '7',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest032',
    GPIOProfileNormalTest.gpioNormalTest032);

/**
 * GPIOでPIN 8をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest033 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '8',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest033',
    GPIOProfileNormalTest.gpioNormalTest033);

/**
 * GPIOでPIN 9をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest034 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '9',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest033',
    GPIOProfileNormalTest.gpioNormalTest033);

/**
 * GPIOでPIN 10をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest034 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '10',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest034',
    GPIOProfileNormalTest.gpioNormalTest034);

/**
 * GPIOでPIN 11をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest035 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '11',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest035',
    GPIOProfileNormalTest.gpioNormalTest035);

/**
 * GPIOでPIN 12をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest036 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '12',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest036',
    GPIOProfileNormalTest.gpioNormalTest036);

/**
 * GPIOでPIN 13をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest037 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '13',
    value: 1,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest037',
    GPIOProfileNormalTest.gpioNormalTest037);

/**
 * GPIOでPIN 2をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest038 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '2',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest038',
    GPIOProfileNormalTest.gpioNormalTest038);

/**
 * GPIOでPIN 3をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest039 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '3',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest039',
    GPIOProfileNormalTest.gpioNormalTest039);

/**
 * GPIOでPIN 4をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/4?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest040 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '4',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest040',
    GPIOProfileNormalTest.gpioNormalTest040);

/**
 * GPIOでPIN 5をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest041 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '5',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest041',
    GPIOProfileNormalTest.gpioNormalTest041);

/**
 * GPIOでPIN 6をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest042 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '6',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest042',
    GPIOProfileNormalTest.gpioNormalTest042);

/**
 * GPIOでPIN 7をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest043 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '7',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest043',
    GPIOProfileNormalTest.gpioNormalTest043);

/**
 * GPIOでPIN 8をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest044 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '8',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest044',
    GPIOProfileNormalTest.gpioNormalTest044);

/**
 * GPIOでPIN 9をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest045 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '9',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest045',
    GPIOProfileNormalTest.gpioNormalTest045);

/**
 * GPIOでPIN 10をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest046 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '10',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest046',
    GPIOProfileNormalTest.gpioNormalTest046);

/**
 * GPIOでPIN 11をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest047 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '11',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest047',
    GPIOProfileNormalTest.gpioNormalTest047);

/**
 * GPIOでPIN 12をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest048 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '12',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest048',
    GPIOProfileNormalTest.gpioNormalTest048);

/**
 * GPIOでPIN 13をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest049 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'digital',
    attribute: '13',
    value: 0,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest049',
    GPIOProfileNormalTest.gpioNormalTest049);

/**
 * PIN 3のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/3?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest050 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '3',
    mode: 3,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest050',
    GPIOProfileNormalTest.gpioNormalTest050);


/**
 * PIN 3を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/3?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest051 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '3',
    value: 50,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest051',
    GPIOProfileNormalTest.gpioNormalTest051);

/**
 * PIN 5のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/5?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest052 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '5',
    mode: 3,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest052',
    GPIOProfileNormalTest.gpioNormalTest052);


/**
 * PIN 5を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/5?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest053 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '5',
    value: 50,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest053',
    GPIOProfileNormalTest.gpioNormalTest053);

/**
 * PIN 6のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/6?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest054 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '6',
    mode: 3,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest054',
    GPIOProfileNormalTest.gpioNormalTest054);


/**
 * PIN 6を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/6?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest055 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '6',
    value: 50,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest055',
    GPIOProfileNormalTest.gpioNormalTest055);

/**
 * PIN 9のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/9?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest056 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '9',
    mode: 3,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest056',
    GPIOProfileNormalTest.gpioNormalTest056);


/**
 * PIN 9を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/9?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest057 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '9',
    value: 50,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest057',
    GPIOProfileNormalTest.gpioNormalTest057);

/**
 * PIN 10のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/10?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest058 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '10',
    mode: 3,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest058',
    GPIOProfileNormalTest.gpioNormalTest058);


/**
 * PIN 10を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/10?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest059 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '10',
    value: 50,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest059',
    GPIOProfileNormalTest.gpioNormalTest059);

/**
 * PIN 11のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/11?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest060 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'export',
    attribute: '11',
    mode: 3,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest060',
    GPIOProfileNormalTest.gpioNormalTest060);

/**
 * PIN 11を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/11?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest061 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '11',
    value: 50,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest061',
    GPIOProfileNormalTest.gpioNormalTest061);

/**
 * PIN 3を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/3?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest062 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '3',
    value: 255,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest062',
    GPIOProfileNormalTest.gpioNormalTest062);

/**
 * PIN 5を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/5?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest063 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '5',
    value: 255,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest063',
    GPIOProfileNormalTest.gpioNormalTest063);

/**
 * PIN 6を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/6?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest064 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '6',
    value: 255,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest064',
    GPIOProfileNormalTest.gpioNormalTest064);

/**
 * PIN 9を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/9?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest065 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '9',
    value: 255,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest065',
    GPIOProfileNormalTest.gpioNormalTest065);
/**
 * PIN 10を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/10?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest066 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '10',
    value: 255,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest066',
    GPIOProfileNormalTest.gpioNormalTest066);

/**
 * PIN 11を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/11?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest067 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'gpio',
    interface: 'analog',
    attribute: '11',
    value: 255,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('gpioNormalTest067',
    GPIOProfileNormalTest.gpioNormalTest067);
