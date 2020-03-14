QUnit.module('PowerMeterProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * PowerMeterプロファイルの正常系テストを行うクラス。
 * @class
 */
let PowerMeterProfileNormalTest = {};

/**
 * 電源状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.getPowerStateNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'powerstatus=' + json.powerstatus);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getPowerStateNormalTest001(get)',
    PowerMeterProfileNormalTest.getPowerStateNormalTest001);

/**
 * 電源をオンするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.powerOnNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'powermeter',
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
QUnit.test('powerOnNormalTest001(get)',
    PowerMeterProfileNormalTest.powerOnNormalTest001);

/**
 * 電源をオフするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.powerOffNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'powermeter',
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
QUnit.test('powerOffNormalTest001(get)',
    PowerMeterProfileNormalTest.powerOffNormalTest001);

/**
 * 積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest001(get)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest001);

/**
 * 日付を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>date=yyyy-MM-ddThh:mm:ssZ<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    date: createCurrentDateString()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest002(date is now)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest002);

/**
 * 単位'Wh'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&unit=Wh<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    unit: 'Wh'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('integratedPowerNormalTest003(unit is Wh)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest003);

/**
 * 単位'kWh'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&unit=kWh<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    unit: 'kWh'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest004(unit is kWh)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest004);

/**
 * コマ数'24'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&count=24<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    count: '24'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest005(count is 24)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest005);

/**
 * コマ数'48'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&count=48<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    count: '48'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest006(count is 48)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest006);

/**
 * 方向'normal'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&powerFlow=normal<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    powerFlow: 'normal'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest007(powerflow is normal)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest007);

/**
 * 方向'reverse'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&powerFlow=reverse<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'integratedpower',
    serviceId: getCurrentServiceId(),
    powerFlow: 'reverse'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'integratedpower=' + json.integratedpower);
    assert.ok(true, 'unit=' + json.unit);
    assert.ok(true, 'count=' + json.count);
    assert.ok(true, 'powerFlow=' + json.powerFlow);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('integratedPowerNormalTest008(powerflow is reverse)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest008);

/**
 * 瞬時電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouspower?serviceId=xxxx&accessToken=xxx&unit="A"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'instantaneouspower',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'instantaneouspower=' + json.instantaneouspower);
    assert.ok(true, 'unit=' + json.unit);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('instantaneousPowerNormalTest001(get)',
    PowerMeterProfileNormalTest.instantaneousPowerNormalTest001);

/**
 * 単位'W'を指定して瞬時電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouspower?serviceId=xxxx&accessToken=xxx&unit=W<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'instantaneouspower',
    serviceId: getCurrentServiceId(),
    unit: 'W'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'instantaneouspower=' + json.instantaneouspower);
    assert.ok(true, 'unit=' + json.unit);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('instantaneousPowerNormalTest002(unit is W)',
    PowerMeterProfileNormalTest.instantaneousPowerNormalTest002);

/**
 * 単位'kW'を指定して瞬時電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouspower?serviceId=xxxx&accessToken=xxx&unit=kW<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'instantaneouspower',
    serviceId: getCurrentServiceId(),
    unit: 'kW'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'instantaneouspower=' + json.instantaneouspower);
    assert.ok(true, 'unit=' + json.unit);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('instantaneousPowerNormalTest003(unit is kW))',
    PowerMeterProfileNormalTest.instantaneousPowerNormalTest003);

/**
 * 瞬時電流量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouscurrent?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousCurrentNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'instantaneouscurrent',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'rphase=' + json.instantaneouscurrent.rphase);
    assert.ok(true, 'tphase=' + json.instantaneouscurrent.tphase);
    assert.ok(true, 'unit=' + json.instantaneouscurrent.unit);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('instantaneousCurrentNormalTest001(get)',
    PowerMeterProfileNormalTest.instantaneousCurrentNormalTest001);

/**
 * 単位'A'を指定して瞬時電流量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouscurrent?serviceId=xxxx&accessToken=xxx&unit=A<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousCurrentNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'instantaneouscurrent',
    serviceId: getCurrentServiceId(),
    unit: 'A'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'rphase=' + json.instantaneouscurrent.rphase);
    assert.ok(true, 'tphase=' + json.instantaneouscurrent.tphase);
    assert.ok(true, 'unit=' + json.instantaneouscurrent.unit);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('instantaneousCurrentNormalTest002(unit is A)',
    PowerMeterProfileNormalTest.instantaneousCurrentNormalTest002);

/**
 * 単位'mA'を指定して瞬時電流量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouscurrent?serviceId=xxxx&accessToken=xxx&unit=mA<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousCurrentNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'powermeter',
    attribute: 'instantaneouscurrent',
    serviceId: getCurrentServiceId(),
    unit: 'mA'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'rphase=' + json.instantaneouscurrent.rphase);
    assert.ok(true, 'tphase=' + json.instantaneouscurrent.tphase);
    assert.ok(true, 'unit=' + json.instantaneouscurrent.unit);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('instantaneousCurrentNormalTest003(unit is mA)',
    PowerMeterProfileNormalTest.instantaneousCurrentNormalTest003);
