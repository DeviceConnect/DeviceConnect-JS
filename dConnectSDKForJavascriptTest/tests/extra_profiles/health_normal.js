module("Health Profile Normal Test", {
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
 * Path: /health/heartrate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・heartRateの値が返ってくること。<br/>
 * </p>
 */
HealthProfileNormalTest.heartrateNormalTest = function (assert) {
    searchTestService(function (accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("health");
        builder.setAttribute("heartrate");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null,
            function (json) {
                assert.ok(true, "result=" + json.result);
                assert.ok((json.heartRate != undefined && json.heartRate >= 0), "heartRate=" + json.heartRate);
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
QUnit.asyncTest("heartrate", HealthProfileNormalTest.heartrateNormalTest);

/**
 * Healthプロファイルのheartrateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /health/heartrate?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
HealthProfileNormalTest.heartrateEventNormalTest001 = function (assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("health");
    builder.setAttribute("heartrate");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
        if (json.profile === "health" && json.attribute === "heartrate") {
            assert.ok(true, message);
            assert.ok((json.heartRate != undefined && json.heartRate >= 0), "heartRate=" + json.heartRate);
            return true;
        }
        return false;
    });
}
QUnit.asyncTest("heartrateEventNormalTest001", HealthProfileNormalTest.heartrateEventNormalTest001);
