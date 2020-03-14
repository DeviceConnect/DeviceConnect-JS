QUnit.module("StressEstimation Profile Abnormal Test", {
    before: function () {
        init();
    }
});


/**
 * StressEstimationプロファイルの異常系テストを行うクラス。
 * @class
 */
let StressEstimationProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでストレス推定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /stressEstimation/onStressEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
StressEstimationProfileAbnormalTest.stressAbormalTest = function (assert) {
  let done = assert.async();
  sdk.put({
    profile: 'stressEstimation',
    attribute: 'onStressEstimation',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
}
QUnit.test("stress", StressEstimationProfileAbnormalTest.stressAbormalTest);
