QUnit.module("PoseEstimation Profile Normal Test", {
    before: function () {
        init();
    }
});


/**
 * PoseEstimationプロファイルの正常系テストを行うクラス。
 * @class
 */
let PoseEstimationProfileNormalTest = {};

/**
 * 姿勢推定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /poseEstimation/onPoseEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・poseの値が返ってくること。<br/>
 * </p>
 */
PoseEstimationProfileNormalTest.poseNormalTest = function (assert) {
  let done = assert.async();
  sdk.get({
    profile: 'poseEstimation',
    attribute: 'onPoseEstimation',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, "result=" + json.result);
    assert.ok(json.pose != undefined, "pose=" + json.pose);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
}
QUnit.test("pose", PoseEstimationProfileNormalTest.poseNormalTest);

/**
 * PoseEstimationプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /poseEstimation/onPoseEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
PoseEstimationProfileNormalTest.poseEventNormalTest001 = function (assert) {
  let params = {
    profile: 'poseEstimation',
    attribute: 'onPoseEstimation',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
        let json = JSON.parse(message);
        if (json.profile === "poseEstimation"
            && json.attribute === "onPoseEstimation") {
            assert.ok(true, message);
            assert.ok(json.pose != undefined, "pose=" + json.pose);
            return true;
        }
        return false;
    });
}
QUnit.test("poseEventNormalTest001", PoseEstimationProfileNormalTest.poseEventNormalTest001);
