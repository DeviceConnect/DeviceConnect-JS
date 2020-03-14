QUnit.module('RemoteControllerProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * RemoteControllerプロファイルの異常系テストを行うクラス。
 * @class
 */
let RemoteControllerProfileAbnormalTest = {};

/**
 * messageに空文字を指定して赤外線を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remotecontroller?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'remotecontroller',
    serviceId: getCurrentServiceId(),
    message: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('remoteControllerAbnormalTest001',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest001);

/**
 * messageを指定しないで赤外線を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remotecontroller?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'remotecontroller',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('remoteControllerAbnormalTest002',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest002);

/**
 * messageに数値を指定して赤外線を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remotecontroller?serviceId=xxx&accessToken=xxx&message=123456789<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'remotecontroller',
    serviceId: getCurrentServiceId(),
    message: 123456789
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('remoteControllerAbnormalTest003',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest003);

/**
 * messageに全角文字を指定して赤外線情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remotecontroller?serviceId=xxx&accessToken=xxx&message="あいうえおあいうえおあいうえお..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'remotecontroller',
    serviceId: getCurrentServiceId(),
    message: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('remoteControllerAbnormalTest004',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest004);

/**
 * messageに半角文字を指定して赤外線情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remotecontroller?serviceId=xxx&accessToken=xxx&message="abcdefgabcdefgabcdefgabcdefg..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'remotecontroller',
    serviceId: getCurrentServiceId(),
    message: 'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('remoteControllerAbnormalTest005',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest005);

/**
 * messageに特殊文字を指定して赤外線情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remotecontroller?serviceId=xxx&accessToken=xxx&message="!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'remotecontroller',
    serviceId: getCurrentServiceId(),
    message: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('remoteControllerAbnormalTest006',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest006);
