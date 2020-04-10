QUnit.module('VideoChat Profile Abnormal Test', {
  before: function() {
    init();
  }
});

let VIDEOCHAT_CONFIG ={};
/**
 * VideoChatプロファイルの異常系テストを行うクラス。
 * @class
 */
let VideoChatProfileAbnormalTest = {};

/**
 * configに数値(1)を入れて、プロフィールを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('profileAbnormalTest001(config is number(-1))', VideoChatProfileAbnormalTest.profileAbnormalTest001);


/**
 * nameを指定せずに、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('profileAbnormalTest002(name is not set.)',
        VideoChatProfileAbnormalTest.profileAbnormalTest002);

/**
 * nameに数値を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      name: -1
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('profileAbnormalTest003(name is number(-1).)',
      VideoChatProfileAbnormalTest.profileAbnormalTest003);

/**
 * nameに特殊文字(!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_)を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      name: "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('profileAbnormalTest004(name is special characters.)', VideoChatProfileAbnormalTest.profileAbnormalTest004);

/**
 * nameに長い文字(1000byte)を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=abcdefghijk・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      name: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('profileAbnormalTest005(name is long string.)', VideoChatProfileAbnormalTest.profileAbnormalTest005);

/**
 * nameに空文字を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      name: ""
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('profileAbnormalTest006(name is empty string)',
      VideoChatProfileAbnormalTest.profileAbnormalTest006);

/**
 * 定義されていないPOSTメソッドでprofileにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      name: "test"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('profileAbnormalTest007(Calling a post method that does not support.)',
        VideoChatProfileAbnormalTest.profileAbnormalTest007);


/**
 * 定義されていないDELETEメソッドでprofileにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'videochat',
    attribute: 'profile',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      name: "test"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('profileAbnormalTest008(Calling a delete method that does not support.)',
  VideoChatProfileAbnormalTest.profileAbnormalTest008);

/**
 * addressIdに-1を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: "-1"
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('addressAbnormalTest001(addressId is number)', VideoChatProfileAbnormalTest.addressAbnormalTest001);

/**
 * addressIdに空文字を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: ""
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('addressAbnormalTest002(addressId is empty string)',
        VideoChatProfileAbnormalTest.addressAbnormalTest002);

/**
 * addressIdに特殊文字(!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_)を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('addressAbnormalTest003(addressId is special characters.)', VideoChatProfileAbnormalTest.addressAbnormalTest003);

/**
 * addressIdに長い文字列(1000byte0を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
        }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('addressAbnormalTest004(addressId is long string.)', VideoChatProfileAbnormalTest.addressAbnormalTest004);

/**
 * 定義されていないPUTメソッドでaddressにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('addressAbnormalTest005(Calling a put method that does not support.)',
      VideoChatProfileAbnormalTest.addressAbnormalTest005);

/**
 * 定義されていないPOSTメソッドでaddressにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('addressAbnormalTest006(Calling a post method that does not support.)', VideoChatProfileAbnormalTest.addressAbnormalTest006);

/**
 * 定義されていないDELETEメソッドでaddressにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'videochat',
    attribute: 'address',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('addressAbnormalTest007(Calling a delete method that does not support.)',
        VideoChatProfileAbnormalTest.addressAbnormalTest007);

/**
 * addressIdに-1を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'videochat',
    attribute: 'call',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: "-1"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest001(addressId is number)',
      VideoChatProfileAbnormalTest.callAbnormalTest001);

/**
 * addressIdを指定せずに、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'videochat',
    attribute: 'call',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest002(addressId is not set.)', VideoChatProfileAbnormalTest.callAbnormalTest002);

/**
 * addressIdに空文字を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'videochat',
    attribute: 'call',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: ""
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest003(addressId is empty string.)', VideoChatProfileAbnormalTest.callAbnormalTest003);

/**
 * addressIdに特殊文字(!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'videochat',
    attribute: 'call',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest004(addressId is special characters.)',
        VideoChatProfileAbnormalTest.callAbnormalTest004);

/**
 * addressIdに長い文字列(1000byte)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'videochat',
    attribute: 'call',
    params: {
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
          "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
        }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest005(addressId is long string.)', VideoChatProfileAbnormalTest.callAbnormalTest005);

/**
 * videoに数値(-1)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest006 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId,
        video: "-1"
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });

  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest006(video is number(-1).)',
        VideoChatProfileAbnormalTest.callAbnormalTest006);


/**
 * videoに特殊文字(!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_")を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&video=!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest007 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId,
        video: "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest007(video is special characters.)', VideoChatProfileAbnormalTest.callAbnormalTest007);

/**
 * videoに長い文字列を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&video=abcdef・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest008 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId,
        video: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
          }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest008(video is long string.)', VideoChatProfileAbnormalTest.callAbnormalTest008);

/**
 * audioに数値(-1)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest009 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId,
        audio: "-1"
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest009(audio is number(-1).)', VideoChatProfileAbnormalTest.callAbnormalTest009);


/**
 * audioに特殊文字(!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_")を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest010 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId,
        audio: "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest010(audio is special characters.)',
      VideoChatProfileAbnormalTest.callAbnormalTest010);

/**
 * audioに長い文字列(1000byte)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=abcdef・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest011 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId,
        audio: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
          }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest011(audio is long string.)', VideoChatProfileAbnormalTest.callAbnormalTest011);

/**
 * addressIdを指定しないでstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest012 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.delete({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest012(address is not set on delete method.)',
          VideoChatProfileAbnormalTest.callAbnormalTest012);

/**
 * addressIdに空文字を指定してstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest013 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.delete({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: ""
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest013(address is empty string on delete method.)',
        VideoChatProfileAbnormalTest.callAbnormalTest013);

/**
 * addressIdに特殊文字列("!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_")を指定してstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest014 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.delete({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest014(address is specail charactors on delete method.)',
        VideoChatProfileAbnormalTest.callAbnormalTest014);


/**
 * addressIdに長い文字列(1000byte)を指定してstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=abcdef・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest015 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.delete({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
            "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"
          }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest015(address is long string on delete method.)', VideoChatProfileAbnormalTest.callAbnormalTest015);


/**
 * 定義されていないGETメソッドでcallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest016 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.delete({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest016(Calling a get method that does not support.)',
        VideoChatProfileAbnormalTest.callAbnormalTest016);

/**
 * 定義されていないPUTメソッドでcallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest017 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.put({
      profile: 'videochat',
      attribute: 'call',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('callAbnormalTest017(Calling a put method that does not support.)',
          VideoChatProfileAbnormalTest.callAbnormalTest017);

/**
 * 定義されていないPUTメソッドでonincomingにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/onincoming?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onincomingAbnormalTest001 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.get({
      profile: 'videochat',
      attribute: 'onincoming',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('OnincomingAbnormalTest001(Calling a get method that does not support.)',
        VideoChatProfileAbnormalTest.onincomingAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonincomingにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/onincoming?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onincomingAbnormalTest002 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'onincoming',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('OnincomingAbnormalTest002(Calling a post method that does not support.)',
        VideoChatProfileAbnormalTest.onincomingAbnormalTest002);

/**
 * 定義されていないPUTメソッドでoncallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/oncall?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.oncallAbnormalTest001 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.get({
      profile: 'videochat',
      attribute: 'oncall',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('OncallAbnormalTest001(Calling a get method that does not support.)',
        VideoChatProfileAbnormalTest.oncallAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでoncallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/oncall?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.oncallAbnormalTest002 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'oncall',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('OncallAbnormalTest002(Calling a post method that does not support.)',
        VideoChatProfileAbnormalTest.oncallAbnormalTest002);


/**
 * 定義されていないPUTメソッドでonhangupにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/onhangup?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onhangupAbnormalTest001 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.get({
      profile: 'videochat',
      attribute: 'onhangup',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('OnhangupAbnormalTest001(Calling a get method that does not support.)',
      VideoChatProfileAbnormalTest.onhangupAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonhangupにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/onhangup?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onhangupAbnormalTest002 = function(assert) {
  let done = assert.async();
  findAddress(VIDEOCHAT_CONFIG).then(adresses => {
    sdk.post({
      profile: 'videochat',
      attribute: 'onhangup',
      params: {
        serviceId: getCurrentServiceId(),
        config: VIDEOCHAT_CONFIG,
        addressId: addresses[0].addressId
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    done();
  });
};
QUnit.test('OnhangupAbnormalTest002(Calling a post method that does not support.)',
      VideoChatProfileAbnormalTest.onhangupAbnormalTest002);
