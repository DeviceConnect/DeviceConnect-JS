QUnit.module('EchonetLiteProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * EchonetLiteプロファイルの正常系テストを行うクラス。
 * @class
 */
let EchonetLiteProfileNormalTest = {};

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    serviceId: getCurrentServiceId(),
    epc: '0x80'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'epc=' + json.properties[0].epc);
    assert.ok(true, 'value=' + json.properties[0].epc);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('propertyNormalTest001(get)',
    EchonetLiteProfileNormalTest.propertyNormalTest001);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    serviceId: getCurrentServiceId(),
    epc: '0x80,0x81'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'epc=' + json.properties[0].epc);
    assert.ok(true, 'value=' + json.properties[0].epc);
    assert.ok(true, 'epc=' + json.properties[1].epc);
    assert.ok(true, 'value=' + json.properties[1].epc);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('propertyNormalTest002(get)',
    EchonetLiteProfileNormalTest.propertyNormalTest002);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    serviceId: getCurrentServiceId(),
    epc: '0x80,0x81,0x82'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'epc=' + json.properties[0].epc);
    assert.ok(true, 'value=' + json.properties[0].epc);
    assert.ok(true, 'epc=' + json.properties[1].epc);
    assert.ok(true, 'value=' + json.properties[1].epc);
    assert.ok(true, 'epc=' + json.properties[2].epc);
    assert.ok(true, 'value=' + json.properties[2].epc);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('propertyNormalTest003(get)',
    EchonetLiteProfileNormalTest.propertyNormalTest003);

/**
 * ECHONET Lite プロパティを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: '49'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('propertyNormalTest004(put)',
    EchonetLiteProfileNormalTest.propertyNormalTest004);
