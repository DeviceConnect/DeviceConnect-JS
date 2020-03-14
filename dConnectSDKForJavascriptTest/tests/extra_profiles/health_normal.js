QUnit.module("Health Profile Normal Test", {
    before: function () {
        init();
    }
});


/**
 * Healthプロファイルの正常系テストを行うクラス。
 * @class
 */
let HealthProfileNormalTest = {};

/**
 * 心拍数を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /health/heart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・heartの値が返ってくること。<br/>
 * </p>
 */
HealthProfileNormalTest.heartNormalTest = function (assert) {
  let done = assert.async();
  sdk.get({
    profile: 'health',
    attribute: 'heart',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, "result=" + json.result);
    assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
}
QUnit.test("heart", HealthProfileNormalTest.heartNormalTest);

/**
 * Healthプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /health/heart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
HealthProfileNormalTest.heartEventNormalTest001 = function (assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: "health",
    attribute: "heart",
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
        let json = JSON.parse(message);
        if (json.profile === "health" && json.attribute === "heart") {
            assert.ok(true, message);
            assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
            return true;
        }
        return false;
    });
}
QUnit.test("heartEventNormalTest001", HealthProfileNormalTest.heartEventNormalTest001);



/**
 * 心拍数を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /health/onHeart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・heartの値が返ってくること。<br/>
 * </p>
 */
HealthProfileNormalTest.onheartNormalTest = function (assert) {
  let done = assert.async();
  sdk.get({
    profile: 'health',
    attribute: 'onHeart',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, "result=" + json.result);
    assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
}
QUnit.test("onHeart", HealthProfileNormalTest.onheartNormalTest);

/**
 * Healthプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /health/onHeart?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
HealthProfileNormalTest.onheartEventNormalTest001 = function (assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: "health",
    attribute: "onHeart",
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
        let json = JSON.parse(message);
        if (json.profile === "health" && json.attribute === "onHeart") {
            assert.ok(true, message);
            assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
            return true;
        }
        return false;
    });
}
QUnit.test("onheartEventNormalTest001", HealthProfileNormalTest.onheartEventNormalTest001);
