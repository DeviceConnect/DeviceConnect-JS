QUnit.module('MessageHook Profile Abnormal Test', {
    before: function() {
        init();
    }
});

/**
 * MessageHookプロファイルの異常系テストを行うクラス。
 * @class
 */
let MessageHookProfileAbnormalTest = {};

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    serviceId: getCurrentServiceId(),
    channelId: SLACK_CHANNEL_ID
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('messageTest001', MessageHookProfileAbnormalTest.messageTest001);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    serviceId: getCurrentServiceId(),
    text: 'qunitテストメッセージ'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('messageTest002', MessageHookProfileAbnormalTest.messageTest002);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    serviceId: getCurrentServiceId(),
    channelId: 'TEST_CHANNEL_ID',
    text: 'qunitテストメッセージ'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('messageTest003', MessageHookProfileAbnormalTest.messageTest003);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    serviceId: getCurrentServiceId(),
    channelId: SLACK_CHANNEL_ID,
    text: 'qunitテストメッセージ',
    resource: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('messageTest004', MessageHookProfileAbnormalTest.messageTest004);

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
  let done = assert.async();
  sdk.post({
    profile: 'messageHook',
    attribute: 'message',
    serviceId: getCurrentServiceId(),
    channelId: SLACK_CHANNEL_ID,
    text: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('messageTest005', MessageHookProfileAbnormalTest.messageTest005);
