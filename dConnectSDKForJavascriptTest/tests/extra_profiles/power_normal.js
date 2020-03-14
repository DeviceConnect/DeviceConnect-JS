QUnit.module('Power Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Powerプロファイルの正常系テストを行うクラス。
 * @class
 */
let PowerProfileNormalTest = {};

/**
 * スマートデバイスの電源状態を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
PowerProfileNormalTest.powerStatusNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'power',
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
QUnit.test('GetPowerStatusNormalTest001', PowerProfileNormalTest.powerStatusNormalTest001);


/**
 * スマートデバイスの電源をオンにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
PowerProfileNormalTest.powerOnNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'power',
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
QUnit.test('PowerPowerOnNormalTest001', PowerProfileNormalTest.powerOnNormalTest001);

/**
 * スマートデバイスの電源をオフにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
PowerProfileNormalTest.powerOffNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'power',
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
QUnit.test('PowerPowerOffNormalTest001', PowerProfileNormalTest.powerOffNormalTest001);
