QUnit.module("PoseEstimation Profile Abnormal Test", {
    before: function () {
        init();
    }
});


/**
 * PoseEstimationプロファイルの異常系テストを行うクラス。
 * @class
 */
let PoseEstimationProfileAbnormalTest = {};

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
  let done = assert.async();
  sdk.post({
    profile: 'poseEstimation',
    attribute: 'onPoseEstimation',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
}
QUnit.test("pose", PoseEstimationProfileAbnormalTest.poseAbormalTest);
