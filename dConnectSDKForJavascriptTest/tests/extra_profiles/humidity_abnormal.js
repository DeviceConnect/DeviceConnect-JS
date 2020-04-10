QUnit.module('HumidityProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * Humidityプロファイルの異常系テストを行うクラス。
 * @class
 */
let HumidityProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドで湿度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humidity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumidityProfileAbnormalTest.humidityAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'humidity',
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
QUnit.test('humidityAbnormalTest001',
    HumidityProfileAbnormalTest.humidityAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで湿度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /humidity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumidityProfileAbnormalTest.humidityAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'humidity',
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
QUnit.test('humidityAbnormalTest002',
    HumidityProfileAbnormalTest.humidityAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで湿度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /humidity?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumidityProfileAbnormalTest.humidityAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'humidity',
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
QUnit.test('humidityAbnormalTest003',
    HumidityProfileAbnormalTest.humidityAbnormalTest003);
