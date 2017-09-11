module('Notification Profile Normal Test', {
  setup: function() {
    TEST_TIMEOUT = 60000;
    init();
  }
});

/**
 * Notificationプロファイルの正常系テストを行うクラス。
 * @class
 */
var NotificationProfileNormalTest = {};

/**
 * パラメータtypeを0でNotificationに文字列を通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=0&body='notify'&tag='TEST'<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is 0(call))');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest001(type is 0(call))', NotificationProfileNormalTest.notifyNormalTest001);

/**
 * パラメータtypeを1でNotificationに文字列を通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=1&body='notify'&tag='TEST'<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_MAIL);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is 1(mail))');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest002(type is 1(mail))', NotificationProfileNormalTest.notifyNormalTest002);

/**
 * パラメータtypeを2でNotificationに文字列を通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=2&body='notify'&tag='TEST'<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_SMS);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is 2(sms))');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest003(type is 2(sms))', NotificationProfileNormalTest.notifyNormalTest003);

/**
 * パラメータtypeを3でNotificationに文字列を通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=3&body='notify'&tag='TEST'<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_EVENT);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(type is 3(event))');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest004(type is 3(event))', NotificationProfileNormalTest.notifyNormalTest004);

/**
 * パラメータbodyとtagに長い文字列を指定してNotificationを通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=0&body='あいうえおあいうえお...'&tag='あいうえおあいうえお...'<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  var data = 'body=' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお';
  data += '&tag=';
  data += 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお';
  var uri = builder.build();
  dConnect.post(uri, null, data, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest005(body and tag is long string.)', NotificationProfileNormalTest.notifyNormalTest005);

/**
 * パラメータbodyとtagに特殊文字列を指定してNotificationを通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=0&body='!\"#$%&'()0=~|'{}@`*+;<,.>/_'&tag='!\"#$%&'()0=~|'{}@`*+;<,.>/_'<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, "!\"#$&'()0=~|'{}@`*+;<,.>/_");
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, "!\"#$&'()0=~|'{}@`*+;<,.>/_");

  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest006(body and tag is special characters.)', NotificationProfileNormalTest.notifyNormalTest006);

/**
 * パラメータbodyとtagに数値を指定してNotificationを通知するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&type=0&body=1&tag=2<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・notificationIdが返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 1);
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 2);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest007(body and tag is numerical value.)', NotificationProfileNormalTest.notifyNormalTest007);

/**
 * Notificationを通知を削除するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /notification/notify?serviceId=xxxx&notificationId=xxxx<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.notifyNormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.notification.PARAM_TYPE, dConnect.constants.notification.NOTIFICATION_TYPE_PHONE);
  builder.addParameter(dConnect.constants.notification.PARAM_BODY, 'notify(delete)');
  builder.addParameter(dConnect.constants.notification.PARAM_TAG, 'TEST');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'notificationId=' + json.notificationId);

    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.notification.ATTR_NOTIFY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.notification.PARAM_NOTIFICATION_ID, json.notificationId);
    var uri = builder.build();
    setTimeout(function() {
		dConnect.delete(uri, null, function(json) {
		  assert.ok(true, 'result=' + json.result);
		  QUnit.start();
		}, function(errorCode, errorMessage) {
		  assert.ok(checkErrorCode(errorCode),
			'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
		  QUnit.start();
		});
	}, 5000);
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('notifyNormalTest008(delete)', NotificationProfileNormalTest.notifyNormalTest008);

/**
 * Notificationプロファイルのonclickを登録するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /notification/onclick?serviceId=xxxx<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.onClickNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_CLICK);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.notification.PROFILE_NAME &&
      json.attribute === dConnect.constants.notification.ATTR_ON_CLICK) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onClickNormalTest001', NotificationProfileNormalTest.onClickNormalTest001);

/**
 * Notificationプロファイルのonshowを登録するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /notification/onshow?serviceId=xxxx<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.onShowNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_SHOW);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.notification.PROFILE_NAME &&
      json.attribute === dConnect.constants.notification.ATTR_ON_SHOW) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onShowNormalTest001', NotificationProfileNormalTest.onShowNormalTest001);

/**
 * Notificationプロファイルのoncloseを登録するテストを行う。
 * <p>
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /notification/onclose?serviceId=xxxx<br/>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
NotificationProfileNormalTest.onCloseNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.notification.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.notification.ATTR_ON_CLOSE);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.notification.PROFILE_NAME &&
      json.attribute === dConnect.constants.notification.ATTR_ON_CLOSE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onCloseNormalTest001', NotificationProfileNormalTest.onCloseNormalTest001);
