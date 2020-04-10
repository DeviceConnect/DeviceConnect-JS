QUnit.module('DeviceProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * Deviceプロファイルの異常系テストを行うクラス。
 * @class
 */
let DeviceProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /device/pairing?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DeviceProfileAbnormalTest.pairingAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'device',
    attribute: 'pairing',
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
QUnit.test('pairingAbnormalTest001(Calling a get method that does not support.)',
    DeviceProfileAbnormalTest.pairingAbnormalTest001);

/**
 * 定義されていないPUTメソッドでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /device/pairing?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DeviceProfileAbnormalTest.pairingAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'device',
    attribute: 'pairing',
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
QUnit.test('pairingAbnormalTest002(Calling a put method that does not support.)',
    DeviceProfileAbnormalTest.pairingAbnormalTest002);
