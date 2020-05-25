QUnit.module("StressEstimation Profile Normal Test", {
    before: function () {
        init();
    }
});


/**
 * StressEstimationプロファイルの正常系テストを行うクラス。
 * @class
 */
let StressEstimationProfileNormalTest = {};

/**
 * ストレス推定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /stressEstimation/onStressEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・heartの値が返ってくること。<br/>
 * </p>
 */
StressEstimationProfileNormalTest.stressNormalTest = function (assert) {
  let done = assert.async();
  sdk.get({
    profile: 'stressEstimation',
    attribute: 'onStressEstimation',
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
}
QUnit.test("stress", StressEstimationProfileNormalTest.stressNormalTest);

/**
 * StressEstimationプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /stressEstimation/onStressEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
StressEstimationProfileNormalTest.stressEventNormalTest001 = function (assert) {
  let params = {
    profile: 'stressEstimation',
    attribute: 'onStressEstimation',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
      let json = JSON.parse(message);
        if (json.profile === "stressEstimation" && json.attribute === "onStressEstimation") {
            assert.ok(true, message);
            assert.ok((json.stress != undefined && json.stress.lfhf >= 0), "stress=" + json.stress);
            return true;
        }
        return false;
    });
}
QUnit.test("StressEventNormalTest001", StressEstimationProfileNormalTest.stressEventNormalTest001);
