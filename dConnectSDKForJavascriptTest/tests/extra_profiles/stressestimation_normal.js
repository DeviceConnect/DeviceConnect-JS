module("StressEstimation Profile Normal Test", {
    setup: function () {
        init();
    }
});


/**
 * StressEstimationプロファイルの正常系テストを行うクラス。
 * @class
 */
var StressEstimationProfileNormalTest = {};

/**
 * ストレス推定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /stressEstimation/onStressEstimation?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・heartの値が返ってくること。<br/>
 * </p>
 */
StressEstimationProfileNormalTest.stressNormalTest = function (assert) {
    searchTestService(function (accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("stressEstimation");
        builder.setAttribute("onStressEstimation");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null,
            function (json) {
                assert.ok(true, "result=" + json.result);
                assert.ok((json.stress != undefined && json.stress.lfhf >= 0), "stress=" + json.stress);
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
QUnit.asyncTest("stress", StressEstimationProfileNormalTest.stressNormalTest);

/**
 * StressEstimationプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /stressEstimation/onStressEstimation?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
StressEstimationProfileNormalTest.stressEventNormalTest001 = function (assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("stressEstimation");
    builder.setAttribute("onStressEstimation");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
        if (json.profile === "stressEstimation" && json.attribute === "onStressEstimation") {
            assert.ok(true, message);
            assert.ok((json.stress != undefined && json.stress.lfhf >= 0), "stress=" + json.stress);
            return true;
        }
        return false;
    });
}
QUnit.asyncTest("StressEventNormalTest001", StressEstimationProfileNormalTest.stressEventNormalTest001);
