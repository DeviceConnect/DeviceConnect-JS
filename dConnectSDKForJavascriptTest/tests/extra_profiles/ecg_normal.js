module("ECG Profile Normal Test", {
    setup: function () {
        init();
    }
});


/**
 * ECGプロファイルの正常系テストを行うクラス。
 * @class
 */
var ECGProfileNormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("ecg");
  builder.setAttribute("onECG");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function (json) {
      assert.ok(true, "result=" + json.result);
      assert.ok((json.ecg != undefined && json.ecg.value >= 0), "ecg=" +  json);
      QUnit.start();
  },
  function (errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
  });
}
QUnit.asyncTest("ecg", ECGProfileNormalTest.ecgNormalTest);

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
    var builder = new dConnect.URIBuilder();
    builder.setProfile("ecg");
    builder.setAttribute("onECG");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
        if (json.profile === "ecg" && json.attribute === "onECG") {
            assert.ok(true, message);
            assert.ok((json.ecg != undefined && json.ecg.value >= 0), "ecg=" +  json);
            return true;
        }
        return false;
    });
}
QUnit.asyncTest("ECGEventNormalTest001", ECGProfileNormalTest.ecgEventNormalTest001);
