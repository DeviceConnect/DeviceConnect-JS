QUnit.module("ECG Profile Abnormal Test", {
    before: function () {
        init();
    }
});


/**
 * ECGプロファイルの異常系テストを行うクラス。
 * @class
 */
let ECGProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでECGにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /ecg/onECG?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ECGProfileAbnormalTest.ecgAbnormalTest = function (assert) {
  let done = assert.async();
  sdk.post({
    profile: 'ecg',
    attribute: 'onECG',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
}
QUnit.test("ECG", ECGProfileAbnormalTest.ecgAbnormalTest);
