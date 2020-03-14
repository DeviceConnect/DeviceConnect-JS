QUnit.module('DeviceProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Deviceプロファイルの正常系テストを行うクラス。
 * @class
 */
let DeviceProfileNormalTest = {};

/**
 * デバイスに接続するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /device/pairing?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DeviceProfileNormalTest.postPairingNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'device',
    attribute: 'pairing',
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
QUnit.test('postPairingNormalTest001(post)',
    DeviceProfileNormalTest.postPairingNormalTest001);

/**
 * デバイスと切断するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /device/pairing?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DeviceProfileNormalTest.deletePairingNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'device',
    attribute: 'pairing',
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
QUnit.test('deletePairingNormalTest001(delete)',
    DeviceProfileNormalTest.deletePairingNormalTest001);
