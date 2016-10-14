module('MessageHook Profile Abnormal Test', {
    setup: function() {
        init();
    }
});

/**
 * MessageHookプロファイルの異常系テストを行うクラス。
 * @class
 */
var MessageHookProfileAbnormalTest = {};

/**
 * メッセージを設定せずに送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MessageHookProfileAbnormalTest.messageTest001 = function(assert) {
    searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('messageHook');
        builder.setAttribute('message');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('channelId', SLACK_CHANNEL_ID);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
            assert.ok(false, 'result=' + json.result);
            QUnit.start();
        }, function(errorCode, errorMessage) {
            assert.ok(true, 'errorCode=' + errorCode);
            QUnit.start();
        });
    }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('messageTest001', MessageHookProfileAbnormalTest.messageTest001);

/**
 * チャンネルIDを設定せずに送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MessageHookProfileAbnormalTest.messageTest002 = function(assert) {
    searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('messageHook');
        builder.setAttribute('message');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('text', 'qunitテストメッセージ');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
            assert.ok(false, 'result=' + json.result);
            QUnit.start();
        }, function(errorCode, errorMessage) {
            assert.ok(true, 'errorCode=' + errorCode);
            QUnit.start();
        });
    }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('messageTest002', MessageHookProfileAbnormalTest.messageTest002);

/**
 * チャンネルIDに適当な文字を設定して送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MessageHookProfileAbnormalTest.messageTest003 = function(assert) {
    searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('messageHook');
        builder.setAttribute('message');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('channelId', 'TEST_CHANNEL_ID');
        builder.addParameter('text', 'qunitテストメッセージ');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
            assert.ok(false, 'result=' + json.result);
            QUnit.start();
        }, function(errorCode, errorMessage) {
            assert.ok(true, 'errorCode=' + errorCode);
            QUnit.start();
        });
    }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('messageTest003', MessageHookProfileAbnormalTest.messageTest003);

/**
 * resourceに適当な文字を設定して送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MessageHookProfileAbnormalTest.messageTest004 = function(assert) {
    searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('messageHook');
        builder.setAttribute('message');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('channelId', SLACK_CHANNEL_ID);
        builder.addParameter('text', 'qunitテストメッセージ');
        builder.addParameter('resource', 'abc');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
            assert.ok(false, 'result=' + json.result);
            QUnit.start();
        }, function(errorCode, errorMessage) {
            assert.ok(true, 'errorCode=' + errorCode);
            QUnit.start();
        });
    }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('messageTest004', MessageHookProfileAbnormalTest.messageTest004);

/**
 * textに空文字を設定して送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MessageHookProfileAbnormalTest.messageTest005 = function(assert) {
    searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('messageHook');
        builder.setAttribute('message');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('channelId', SLACK_CHANNEL_ID);
        builder.addParameter('text', '');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
            assert.ok(false, 'result=' + json.result);
            QUnit.start();
        }, function(errorCode, errorMessage) {
            assert.ok(true, 'errorCode=' + errorCode);
            QUnit.start();
        });
    }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('messageTest005', MessageHookProfileAbnormalTest.messageTest005);



