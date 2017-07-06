module("PoseEstimation Profile Abnormal Test", {
    setup: function () {
        init();
    }
});


/**
 * PoseEstimationプロファイルの異常系テストを行うクラス。
 * @class
 */
var PoseEstimationProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで姿勢推定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /poseEstimation/onPoseEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PoseEstimationProfileAbnormalTest.poseAbormalTest = function (assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("poseEstimation");
  builder.setAttribute("onPoseEstimation");
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
QUnit.asyncTest("pose", PoseEstimationProfileAbnormalTest.poseAbormalTest);

