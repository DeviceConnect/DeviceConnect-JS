QUnit.module("Health Profile Normal Test", {
    setup: function () {
        init();
    }
});


/**
 * Healthプロファイルの正常系テストを行うクラス。
 * @class
 */
var HealthProfileNormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("health");
  builder.setAttribute("heart");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function (json) {
      assert.ok(true, "result=" + json.result);
      assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
      QUnit.start();
  },
  function (errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
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
    var builder = new dConnect.URIBuilder();
    builder.setProfile("health");
    builder.setAttribute("heart");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("health");
  builder.setAttribute("onHeart");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function (json) {
      assert.ok(true, "result=" + json.result);
      assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
      QUnit.start();
  },
  function (errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
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
    var builder = new dConnect.URIBuilder();
    builder.setProfile("health");
    builder.setAttribute("onHeart");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
        if (json.profile === "health" && json.attribute === "onHeart") {
            assert.ok(true, message);
            assert.ok((json.heart != undefined && json.heart.rate.value >= 0), "heart=" + json.heart);
            return true;
        }
        return false;
    });
}
QUnit.test("onheartEventNormalTest001", HealthProfileNormalTest.onheartEventNormalTest001);
