module("WalkState Profile Abnormal Test", {
    setup: function () {
        init();
    }
});


/**
 * WalkStateプロファイルの異常系テストを行うクラス。
 * @class
 */
var WalkStateProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで歩行状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /walkState/onWalkState?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
WalkStateProfileAbnormalTest.walkAbormalTest = function (assert) {
    searchTestService(function (accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("walkState");
        builder.setAttribute("onWalkState");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null,
            function (json) {
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
    },
    function (errorCode, errorMessage) {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
    });
}
QUnit.asyncTest("walk", WalkStateProfileAbnormalTest.walkAbormalTest);

