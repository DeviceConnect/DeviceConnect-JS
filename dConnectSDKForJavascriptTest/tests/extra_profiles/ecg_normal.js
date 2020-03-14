QUnit.module("ECG Profile Normal Test", {
    before: function () {
        init();
    }
});


/**
 * ECGプロファイルの正常系テストを行うクラス。
 * @class
 */
let ECGProfileNormalTest = {};

/**
 * ECGを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /ecg/onECG?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・ecgの値が返ってくること。<br/>
 * </p>
 */
ECGProfileNormalTest.ecgNormalTest = function (assert) {
  let done = assert.async();
  sdk.get({
    profile: 'ecg',
    attribute: 'onECG',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, "result=" + json.result);
    assert.ok((json.ecg != undefined && json.ecg.value >= 0), "ecg=" +  json);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
}
QUnit.test("ecg", ECGProfileNormalTest.ecgNormalTest);

/**
 * ECGプロファイルのECGの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /ecg/onECG?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
ECGProfileNormalTest.ecgEventNormalTest001 = function (assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: 'ecg',
    attribute: 'onECG',
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
        let json = JSON.parse(message);
        if (json.profile === "ecg" && json.attribute === "onECG") {
            assert.ok(true, message);
            assert.ok((json.ecg != undefined && json.ecg.value >= 0), "ecg=" +  json);
            return true;
        }
        return false;
    });
}
QUnit.test("ECGEventNormalTest001", ECGProfileNormalTest.ecgEventNormalTest001);
