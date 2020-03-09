QUnit.module("ECG Profile Abnormal Test", {
    setup: function () {
        init();
    }
});


/**
 * ECGプロファイルの異常系テストを行うクラス。
 * @class
 */
var ECGProfileAbnormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("ecg");
  builder.setAttribute("onECG");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function (json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
  },
  function (errorCode, errorMessage) {
      if (errorCode == 8) {
          assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
          assert.ok(true, 'not support');
      } else {
          assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
  });
}
QUnit.test("ECG", ECGProfileAbnormalTest.ecgAbnormalTest);

