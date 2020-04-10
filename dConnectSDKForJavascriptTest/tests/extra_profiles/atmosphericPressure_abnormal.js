QUnit.module('AtmosphericPressureProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * AtmosphericPressureプロファイルの異常系テストを行うクラス。
 * @class
 */
let AtmosphericPressureProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドで気圧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /AtmosphericPressure?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AtmosphericPressureProfileAbnormalTest.atmosphericPressureAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'atmosphericPressure',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('atmosphericPressureAbnormalTest001',
        AtmosphericPressureProfileAbnormalTest.atmosphericPressureAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで気圧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /atmosphericPressure?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AtmosphericPressureProfileAbnormalTest.atmosphericPressureAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'atmosphericPressure',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('atmosphericPressureAbnormalTest002',
        AtmosphericPressureProfileAbnormalTest.atmosphericPressureAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで気圧にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /atmosphericPressure?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AtmosphericPressureProfileAbnormalTest.atmosphericPressureAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'atmosphericPressure',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('atmosphericPressureAbnormalTest003',
        AtmosphericPressureProfileAbnormalTest.atmosphericPressureAbnormalTest003);
