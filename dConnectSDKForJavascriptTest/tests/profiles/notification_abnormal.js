module('Notification Profile Abnormal Test', {
  setup: function() {
    TEST_TIMEOUT = 60000;
    init();
  }
});

/**
 * Notificationプロファイルの異常系テストを行うクラス。
 * @class
 */
var NotificationProfileAbnormalTest = {};

/**
 * パラメータtypeを-1でNotificationに文字列を通知するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=-1&body='notify(type is invalid parameter(-1).)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, -1);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is invalid parameter(-1).)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest001(type is invalid parameter(-1).)', NotificationProfileAbnormalTest.notifyAbnormalTest001);

/**
 * パラメータtypeを指定しないでNotificationに文字列を通知するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&body='notify(type is invalid parameter(-1).)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is invalid parameter(-1).)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest002(omitted type.)', NotificationProfileAbnormalTest.notifyAbnormalTest002);

/**
 * パラメータtypeを文字列(test)でNotificationに文字列を通知するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=test&body='notify(type is invalid parameter(test).)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, 'test');
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is invalid parameter(test).)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest003(type is invalid parameter(test).)', NotificationProfileAbnormalTest.notifyAbnormalTest003);

/**
 * 定義されていなPUTメソッドでNotificationを通知するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /notification/notify?serviceId=xxxx&type=0&body='notify(Calling a put method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a put method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest004(Calling a put method that does not support.)', NotificationProfileAbnormalTest.notifyAbnormalTest004);

/**
 * 定義されていなGETメソッドでNotificationを通知するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /notification/notify?serviceId=xxxx&type=0&body=n'otify(Calling a get method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest005(Calling a get method that does not support.)', NotificationProfileAbnormalTest.notifyAbnormalTest005);

/**
 * 存在しないnotficationIdを指定してNotificationを通知を削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /notification/notify?serviceId=xxxx&notificationId='this is a test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_NOTIFICATION_ID, 'this is a test.');
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest006(notificationId is not exist.)', NotificationProfileAbnormalTest.notifyAbnormalTest006);

/**
 * notficationIdを指定しないでNotificationを通知を削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /notification/notify?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest007(omitted notificationId)', NotificationProfileAbnormalTest.notifyAbnormalTest007);

/**
 * notficationに空文字を指定してNotificationを通知を削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /notification/notify?serviceId=xxxx&notificationId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.addParameter(dConnect.constants.notification.PARAM_NOTIFICATION_ID, '');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('notifyAbnormalTest008(notificationId is empty.)', NotificationProfileAbnormalTest.notifyAbnormalTest008);

/**
 * 定義されていないPOSTメソッドでClick検知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/onclick?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onClickAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_CLICK);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('onClickAbnormalTest001', NotificationProfileAbnormalTest.onClickAbnormalTest001);

/**
 * 定義されていないGETメソッドでClick検知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /notification/onclick?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onClickAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_CLICK);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('onClickAbnormalTest002', NotificationProfileAbnormalTest.onClickAbnormalTest002);

/**
 * Notificationプロファイルのonshowを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/onshow?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onShowAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_SHOW);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('onShowAbnormalTest001', NotificationProfileAbnormalTest.onShowAbnormalTest001);

/**
 * Notificationプロファイルのonshowを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /notification/onshow?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onShowAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_SHOW);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('onShowAbnormalTest002', NotificationProfileAbnormalTest.onShowAbnormalTest002);

/**
 * Notificationプロファイルのoncloseを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/onclose?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onCloseAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_CLOSE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('onCloseAbnormalTest001', NotificationProfileAbnormalTest.onCloseAbnormalTest001);
/**
 * Notificationプロファイルのoncloseを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/onclose?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onCloseAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_CLOSE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(Calling a get method that does not support.)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, "json: " + JSON.stringify(json));
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
QUnit.asyncTest('onCloseAbnormalTest002', NotificationProfileAbnormalTest.onCloseAbnormalTest002);
