QUnit.module('Notification Profile Normal Test', {
  before: function() {
    TEST_TIMEOUT = 60000;
    init();
  }
});

/**
 * Notificationプロファイルの正常系テストを行うクラス。
 * @class
 */
let NotificationProfileNormalTest = {};

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
      body: 'notify(type is 0(call))',
      tag: 'TEST'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest001(type is 0(call))', NotificationProfileNormalTest.notifyNormalTest001);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_MAIL,
      body: 'notify(type is 1(mail))',
      tag: 'TEST'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest002(type is 1(mail))', NotificationProfileNormalTest.notifyNormalTest002);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_SMS,
      body: 'notify(type is 2(sms))',
      tag: 'TEST'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest003(type is 2(sms))', NotificationProfileNormalTest.notifyNormalTest003);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_EVENT,
      body: 'notify(type is 2(sms))',
      tag: 'TEST'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest004(type is 3(event))', NotificationProfileNormalTest.notifyNormalTest004);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
      body: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお',
      tag: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest005(body and tag is long string.)', NotificationProfileNormalTest.notifyNormalTest005);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
      body: "!\"#$&'()0=~|'{}@`*+;<,.>/_",
      tag: "!\"#$&'()0=~|'{}@`*+;<,.>/_"
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest006(body and tag is special characters.)', NotificationProfileNormalTest.notifyNormalTest006);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
      body: 1,
      tag: 2
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest007(body and tag is numerical value.)', NotificationProfileNormalTest.notifyNormalTest007);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    params: {
      serviceId: getCurrentServiceId(),
      type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
      body: 'notify(delete)',
      tag: 'TEST'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.notificationId !== undefined, 'notificationId=' + json.notificationId);
    setTimeout(() => {
      sdk.delete({
        profile: dConnectSDK.constants.notification.PROFILE_NAME,
        attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
        params: {
          serviceId: getCurrentServiceId(),
          notificationId: json.notificationId
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
    }, 5 * 1000);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('notifyNormalTest008(delete)', NotificationProfileNormalTest.notifyNormalTest008);

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
  let params = {
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_CLICK,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.notification.PROFILE_NAME &&
      json.attribute === dConnectSDK.constants.notification.ATTR_ON_CLICK) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onClickNormalTest001', NotificationProfileNormalTest.onClickNormalTest001);

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
  let params = {
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_SHOW,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.notification.PROFILE_NAME &&
      json.attribute === dConnectSDK.constants.notification.ATTR_ON_SHOW) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onShowNormalTest001', NotificationProfileNormalTest.onShowNormalTest001);

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
  let params = {
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_CLOSE,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 5000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.notification.PROFILE_NAME &&
      json.attribute === dConnectSDK.constants.notification.ATTR_ON_CLOSE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onCloseNormalTest001', NotificationProfileNormalTest.onCloseNormalTest001);
