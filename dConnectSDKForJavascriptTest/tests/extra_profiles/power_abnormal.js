QUnit.module('Power Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Powerプロファイルの異常系テストを行うクラス。
 * @class
 */
let PowerProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで電源状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /power<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PowerProfileAbnormalTest.powerStatusAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'power',
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
QUnit.test('GetPowerStatusAbnormalTest001', PowerProfileAbnormalTest.powerStatusAbnormalTest001);
