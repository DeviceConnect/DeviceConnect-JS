QUnit.module("Health Profile Abnormal Test", {
    before: function () {
        init();
    }
});


/**
 * Healthプロファイルの異常系テストを行うクラス。
 * @class
 */
let HealthProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで心拍数にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /health/heart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HealthProfileAbnormalTest.heartAbormalTest = function (assert) {
  let done = assert.async();
  sdk.post({
    profile: 'health',
    attribute: 'heart',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
}
QUnit.test("heart", HealthProfileAbnormalTest.heartAbormalTest);

/**
 * 定義されていないPOSTメソッドで心拍数にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /health/onheart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HealthProfileAbnormalTest.onHeartAbormalTest = function (assert) {
  let done = assert.async();
  sdk.post({
    profile: 'health',
    attribute: 'onHeart',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
}
QUnit.test("onheart", HealthProfileAbnormalTest.onHeartAbormalTest);
