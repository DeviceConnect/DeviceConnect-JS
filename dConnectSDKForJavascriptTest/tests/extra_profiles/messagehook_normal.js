module('MessageHook Profile Normal Test', {
    setup: function() {
        init();
    }
});

/**
 * MessageHookプロファイルのテストを行うクラス。
 * @class
 */
var MessageHookProfileNormalTest = {};

/**
 * チャンネル一覧を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /messageHook/channel?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MessageHookProfileNormalTest.channelTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messageHook');
  builder.setAttribute('channel');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.asyncTest('channelTest001', MessageHookProfileNormalTest.channelTest001);

/**
 * メッセージを送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MessageHookProfileNormalTest.messageTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('messageHook');
    builder.setAttribute('onmessage');
    openWebsocket(builder, assert, 5000, function(message) {
        var json = JSON.parse(message);
        if (json.profile === 'messageHook' && json.attribute === 'message') {
            assert.ok(true, message);
            return true;
        }
        return false;
    });
};
QUnit.asyncTest('messageTest001', MessageHookProfileNormalTest.messageTest001);


/**
 * メッセージを送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MessageHookProfileNormalTest.messageTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messageHook');
  builder.setAttribute('message');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('channelId', SLACK_CHANNEL_ID);
  builder.addParameter('text', 'qunitテストメッセージ');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.asyncTest('messageTest002', MessageHookProfileNormalTest.messageTest002);

/**
 * リソース付きのメッセージを送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MessageHookProfileNormalTest.messageTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messageHook');
  builder.setAttribute('message');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('channelId', SLACK_CHANNEL_ID);
  builder.addParameter('text', 'リソース付きのテストメッセージ');
  builder.addParameter('resource', SLACK_TEST_RESOURCE_URI);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.asyncTest('messageTest003', MessageHookProfileNormalTest.messageTest003);

/**
 * 1000文字のメッセージを送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MessageHookProfileNormalTest.messageTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messageHook');
  builder.setAttribute('message');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('channelId', SLACK_CHANNEL_ID);
  builder.addParameter('text', '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' + 
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' + 
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' + 
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' + 
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
  '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.asyncTest('messageTest004', MessageHookProfileNormalTest.messageTest004);

/**
 * 特殊文字を含むメッセージを送信を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /messageHook/message?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MessageHookProfileNormalTest.messageTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messageHook');
  builder.setAttribute('message');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('channelId', SLACK_CHANNEL_ID);
  builder.addParameter('text', '!"#$%&\'()=~|`{+*}<>?__/.,]:;[@¥^-');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });
};
QUnit.asyncTest('messageTest005', MessageHookProfileNormalTest.messageTest005);
