module("PoseEstimation Profile Normal Test", {
    setup: function () {
        init();
    }
});


/**
 * PoseEstimationプロファイルの正常系テストを行うクラス。
 * @class
 */
var PoseEstimationProfileNormalTest = {};

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
    searchTestService(function (accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("poseEstimation");
        builder.setAttribute("onPoseEstimation");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null,
            function (json) {
                assert.ok(true, "result=" + json.result);
                assert.ok(json.pose != undefined, "pose=" + json.pose);
                QUnit.start();
            },
            function (errorCode, errorMessage) {
                assert.ok(checkErrorCode(errorCode),
                    'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
                QUnit.start();
            });
    },
    function (errorCode, errorMessage) {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
    });
}
QUnit.asyncTest("pose", PoseEstimationProfileNormalTest.poseNormalTest);

/**
 * PoseEstimationプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /poseEstimation/onPoseEstimation?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
PoseEstimationProfileNormalTest.poseEventNormalTest001 = function (assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("poseEstimation");
    builder.setAttribute("onPoseEstimation");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
        if (json.profile === "poseEstimation" && json.attribute === "onPoseEstimation") {
            assert.ok(true, message);
            assert.ok(json.pose != undefined, "pose=" + json.pose);
            return true;
        }
        return false;
    });
}
QUnit.asyncTest("poseEventNormalTest001", PoseEstimationProfileNormalTest.poseEventNormalTest001);
