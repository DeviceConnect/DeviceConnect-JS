module("WalkState Profile Normal Test", {
    setup: function () {
        init();
    }
});


/**
 * WalkStateプロファイルの正常系テストを行うクラス。
 * @class
 */
var WalkStateProfileNormalTest = {};

/**
 * 歩行状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /walkState/onWalkState?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・walkの値が返ってくること。<br/>
 * </p>
 */
WalkStateProfileNormalTest.walkNormalTest = function (assert) {
    searchTestService(function (accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("walkState");
        builder.setAttribute("onWalkState");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null,
            function (json) {
                assert.ok(true, "result=" + json.result);
                assert.ok((json.walk != undefined && json.walk.step >= 0), "walk=" + json.walk);
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
QUnit.asyncTest("walk", WalkStateProfileNormalTest.walkNormalTest);

/**
 * WalkStateプロファイルのWalkStateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /walkState/onWalkState?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
WalkStateProfileNormalTest.walkEventNormalTest001 = function (assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("walkState");
    builder.setAttribute("onWalkState");
    openWebsocket(builder, assert, 10000, function (message) {
        var json = JSON.parse(message);
        if (json.profile === "walkState" && json.attribute === "onWalkState") {
            assert.ok(true, message);
            assert.ok((json.walk != undefined && json.walk.step >= 0), "walk=" + json.walk);
            return true;
        }
        return false;
    });
}
QUnit.asyncTest("walkEventNormalTest001", WalkStateProfileNormalTest.walkEventNormalTest001);
