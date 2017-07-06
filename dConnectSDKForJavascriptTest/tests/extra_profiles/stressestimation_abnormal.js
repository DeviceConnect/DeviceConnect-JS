module("StressEstimation Profile Abnormal Test", {
    setup: function () {
        init();
    }
});


/**
 * StressEstimationプロファイルの異常系テストを行うクラス。
 * @class
 */
var StressEstimationProfileAbnormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("stressEstimation");
  builder.setAttribute("onStressEstimation");
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
QUnit.asyncTest("stress", StressEstimationProfileAbnormalTest.stressAbormalTest);

