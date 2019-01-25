module('Phone Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Phoneプロファイルの異常系テストを行うクラス。
 * @class
 */
var PhoneProfileAbnormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('callState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
}
QUnit.asyncTest('callStateAbnormalTest001(Calling a post method that does not support', PhoneProfileAbnormalTest.callStateAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('callState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
}
QUnit.asyncTest('callStateAbnormalTest002(Calling a put method that does not support', PhoneProfileAbnormalTest.callStateAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('callState');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
}
QUnit.asyncTest('callStateAbnormalTest003(Calling a delete method that does not support', PhoneProfileAbnormalTest.callStateAbnormalTest003);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('acceptCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('acceptCallAbnormalTest001(Calling a get method that does not support', PhoneProfileAbnormalTest.acceptCallAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('acceptCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('acceptCallAbnormalTest002(Calling a put method that does not support', PhoneProfileAbnormalTest.acceptCallAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('acceptCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('acceptCallAbnormalTest003(Calling a delete method that does not support', PhoneProfileAbnormalTest.acceptCallAbnormalTest003);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('rejectCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rejectCallAbnormalTest001(Calling a get method that does not support', PhoneProfileAbnormalTest.rejectCallAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('rejectCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rejectCallAbnormalTest002(Calling a put method that does not support', PhoneProfileAbnormalTest.rejectCallAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('rejectCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rejectCallAbnormalTest003(Calling a delete method that does not support', PhoneProfileAbnormalTest.rejectCallAbnormalTest003);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('endCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('endCallAbnormalTest001(Calling a get method that does not support', PhoneProfileAbnormalTest.endCallAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('endCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('endCallAbnormalTest002(Calling a put method that does not support', PhoneProfileAbnormalTest.endCallAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('endCall');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('endCallAbnormalTest003(Calling a delete method that does not support', PhoneProfileAbnormalTest.endCallAbnormalTest003);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest001(omitted phoneNumber)', PhoneProfileAbnormalTest.callAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_PHONE_NUMBER,
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
    '00000000000000000000000000000000000000000000000000' +
    '00000000000000000000000000000000000000000000000000');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest002(phoneNumber is long string)', PhoneProfileAbnormalTest.callAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_PHONE_NUMBER, "!\"#$%&'()0=~|`{@[}*+;:]_?><,./'");
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest003(phoneNumber is special characters)', PhoneProfileAbnormalTest.callAbnormalTest003);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_PHONE_NUMBER, '117');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest004(Calling a get method that does not support', PhoneProfileAbnormalTest.callAbnormalTest004);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_PHONE_NUMBER, '117');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest005(Calling a put method that does not support', PhoneProfileAbnormalTest.callAbnormalTest005);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_PHONE_NUMBER, '117');
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest006(Calling a delete method that does not support', PhoneProfileAbnormalTest.callAbnormalTest006);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_SET);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('setModeAbnormalTest001(omitted mode)', PhoneProfileAbnormalTest.setModeAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_SET);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_MODE, -1);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('setModeAbnormalTest002(mode is invalid(-1))', PhoneProfileAbnormalTest.setModeAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_SET);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_MODE, 'test');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('setModeAbnormalTest003(mode is string)', PhoneProfileAbnormalTest.setModeAbnormalTest003);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_SET);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.phone.PARAM_MODE, "!\"#$%&'()0=~|`{@[}*+;:]_?><,./'");
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('setAbnormalTest004(mode is special characters)', PhoneProfileAbnormalTest.setModeAbnormalTest004);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('onCallStateChange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onCallStateChangeAbnormalTest001(Calling a post method that does not support', PhoneProfileAbnormalTest.onCallStateChangeAbnormalTest001);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute('onCallStateChange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onCallStateChangeAbnormalTest002(Calling a get method that does not support', PhoneProfileAbnormalTest.onCallStateChangeAbnormalTest002);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_ON_CONNECT);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onConnectAbnormalTest001(Calling a post method that does not support', PhoneProfileAbnormalTest.onConnectAbnormalTest001);

/**
 * 定義されていないGETメソッドでリクエストを送信する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /phone/onConnect?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
PhoneProfileAbnormalTest.onConnectAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_ON_CONNECT);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('onConnectAbnormalTest002(Calling a get method that does not support', PhoneProfileAbnormalTest.onConnectAbnormalTest002);
