QUnit.module('MessageHook Profile Normal Test', {
    before: function() {
        init();
    }
});

/**
 * MessageHookプロファイルのテストを行うクラス。
 * @class
 */
let MessageHookProfileNormalTest = {};

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
  let done = assert.async();
  sdk.get({
    profile: 'messageHook',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('channelTest001', MessageHookProfileNormalTest.channelTest001);

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
    let params = {
      profile: 'messageHook',
      attribute: 'message',
      params: {
        serviceId: getCurrentServiceId()
      }
    };
    openWebsocket(params, assert, 10000, message => {
        let json = JSON.parse(message);
        if (json.profile === 'messageHook' && json.attribute === 'message') {
            assert.ok(true, message);
            return true;
        }
        return false;
    });
};
QUnit.test('messageTest001', MessageHookProfileNormalTest.messageTest001);


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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    params: {
      serviceId: getCurrentServiceId(),
      channelId: SLACK_CHANNEL_ID,
      text: 'qunitテストメッセージ'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('messageTest002', MessageHookProfileNormalTest.messageTest002);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    params: {
      serviceId: getCurrentServiceId(),
      channelId: SLACK_CHANNEL_ID,
      text: 'リソース付きのテストメッセージ',
      resource: SLACK_TEST_RESOURCE_URI
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('messageTest003', MessageHookProfileNormalTest.messageTest003);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    params: {
      serviceId: getCurrentServiceId(),
      channelId: SLACK_CHANNEL_ID,
      text: '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789' +
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('messageTest004', MessageHookProfileNormalTest.messageTest004);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    params: {
      serviceId: getCurrentServiceId(),
      channelId: SLACK_CHANNEL_ID,
      text: '!"#$%&\'()=~|`{+*}<>?__/.,]:;[@¥^-'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('messageTest005', MessageHookProfileNormalTest.messageTest005);
