QUnit.module('Phone Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Phoneプロファイルの異常系テストを行うクラス。
 * @class
 */
let PhoneProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /phone/callState?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callStateAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'callState',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
}
QUnit.test('callStateAbnormalTest001(Calling a post method that does not support',
            PhoneProfileAbnormalTest.callStateAbnormalTest001);

/**
 * 定義されていないPUTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /phone/callState?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callStateAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'callState',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
}
QUnit.test('callStateAbnormalTest002(Calling a put method that does not support',
          PhoneProfileAbnormalTest.callStateAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /phone/callState?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callStateAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'callState',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
}
QUnit.test('callStateAbnormalTest003(Calling a delete method that does not support',
              PhoneProfileAbnormalTest.callStateAbnormalTest003);

/**
 * 定義されていないGETメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /phone/acceptCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.acceptCallAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'acceptCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('acceptCallAbnormalTest001(Calling a get method that does not support',
          PhoneProfileAbnormalTest.acceptCallAbnormalTest001);

/**
 * 定義されていないPUTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /phone/acceptCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.acceptCallAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'acceptCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('acceptCallAbnormalTest002(Calling a put method that does not support',
      PhoneProfileAbnormalTest.acceptCallAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /phone/acceptCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.acceptCallAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'acceptCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('acceptCallAbnormalTest003(Calling a delete method that does not support',
          PhoneProfileAbnormalTest.acceptCallAbnormalTest003);

/**
 * 定義されていないGETメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /phone/rejectCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.rejectCallAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'rejectCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('rejectCallAbnormalTest001(Calling a get method that does not support', PhoneProfileAbnormalTest.rejectCallAbnormalTest001);

/**
 * 定義されていないPUTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /phone/rejectCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.rejectCallAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'rejectCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('rejectCallAbnormalTest002(Calling a put method that does not support', PhoneProfileAbnormalTest.rejectCallAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /phone/rejectCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.rejectCallAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'rejectCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('rejectCallAbnormalTest003(Calling a delete method that does not support', PhoneProfileAbnormalTest.rejectCallAbnormalTest003);

/**
 * 定義されていないGETメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /phone/endCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.endCallAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'endCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('endCallAbnormalTest001(Calling a get method that does not support', PhoneProfileAbnormalTest.endCallAbnormalTest001);

/**
 * 定義されていないPUTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /phone/endCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.endCallAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'endCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('endCallAbnormalTest002(Calling a put method that does not support', PhoneProfileAbnormalTest.endCallAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /phone/endCall?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.endCallAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'endCall',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('endCallAbnormalTest003(Calling a delete method that does not support', PhoneProfileAbnormalTest.endCallAbnormalTest003);

/**
 * phoneNumberを指定せずに電話発信をするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * <p>
 */
PhoneProfileAbnormalTest.callAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest001(omitted phoneNumber)', PhoneProfileAbnormalTest.callAbnormalTest001);

/**
 * 桁が非常に大きいphoneNumberを指定して電話発信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /phone/call?serviceId=xxx&accesToken=xxx&phoneNumbre='00000000000000000000000000000000000000000000000000...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * <p>
 */
PhoneProfileAbnormalTest.callAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId(),
      phoneNumber: '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000' +
      '00000000000000000000000000000000000000000000000000'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest002(phoneNumber is long string)', PhoneProfileAbnormalTest.callAbnormalTest002);

/**
 * phoneNumberに特殊文字を指定して電話発信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&phoneNumber='!\"#$%&'()0=~|`{@[}*+;:]_?><,./''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId(),
      phoneNumber: "!\"#$%&'()0=~|`{@[}*+;:]_?><,./'"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('callAbnormalTest003(phoneNumber is special characters)', PhoneProfileAbnormalTest.callAbnormalTest003);

/**
 * 定義されていないGETメソッドで電話発信にアクセスするテスト行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&phoneNumber='117'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId(),
      phoneNumber: '117'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('callAbnormalTest004(Calling a get method that does not support', PhoneProfileAbnormalTest.callAbnormalTest004);

/**
 * 定義されていないPUTメソッドで電話発信にアクセスするテスト行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&phoneNumber='117'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId(),
      phoneNumber: '117'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('callAbnormalTest005(Calling a put method that does not support', PhoneProfileAbnormalTest.callAbnormalTest005);

/**
 * 定義されていないDELETEメソッドで電話発信にアクセスするテスト行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&phoneNumber='117'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.callAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId(),
      phoneNumber: '117'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('callAbnormalTest006(Calling a delete method that does not support', PhoneProfileAbnormalTest.callAbnormalTest006);

/**
 * modeを指定せずにモード設定のテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: put</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PhoneProfileAbnormalTest.setModeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('setModeAbnormalTest001(omitted mode)', PhoneProfileAbnormalTest.setModeAbnormalTest001);

/**
 * modeに-1を指定してモード設定のテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: put</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&mode=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PhoneProfileAbnormalTest.setModeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId(),
      mode: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('setModeAbnormalTest002(mode is invalid(-1))', PhoneProfileAbnormalTest.setModeAbnormalTest002);

/**
 * modeに文字を指定してモード設定のテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: put</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&mode="test"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PhoneProfileAbnormalTest.setModeAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId(),
      mode: 'test'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('setModeAbnormalTest003(mode is string)', PhoneProfileAbnormalTest.setModeAbnormalTest003);

/**
 * modeに特殊文字を指定してモード設定のテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: put</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&mode='!\"#$%&'()0=~|`{@[}*+;:]_?><,./''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PhoneProfileAbnormalTest.setModeAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId(),
      mode: "!\"#$%&'()0=~|`{@[}*+;:]_?><,./'"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('setAbnormalTest004(mode is special characters)', PhoneProfileAbnormalTest.setModeAbnormalTest004);

/**
 * 定義されていないPOSTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /phone/onCallStateChange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.onCallStateChangeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'onCallStateChange',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCallStateChangeAbnormalTest001(Calling a post method that does not support', PhoneProfileAbnormalTest.onCallStateChangeAbnormalTest001);

/**
 * 定義されていないGETメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /phone/onCallStateChange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.onCallStateChangeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: 'onCallStateChange',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCallStateChangeAbnormalTest002(Calling a get method that does not support',
        PhoneProfileAbnormalTest.onCallStateChangeAbnormalTest002);

/**
 * 定義されていないPOSTメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /phone/onconnect?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.onConnectAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_ON_CONNECT,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onConnectAbnormalTest001(Calling a post method that does not support', PhoneProfileAbnormalTest.onConnectAbnormalTest001);
