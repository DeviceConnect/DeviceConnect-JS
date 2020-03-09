QUnit.module('Notification Profile Abnormal Test', {
  before: function() {
    TEST_TIMEOUT = 60000;
    init();
  }
});

/**
 * Notificationプロファイルの異常系テストを行うクラス。
 * @class
 */
let NotificationProfileAbnormalTest = {};

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    type: -1,
    body: 'notify(type is invalid parameter(-1).)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('notifyAbnormalTest001(type is invalid parameter(-1).)', NotificationProfileAbnormalTest.notifyAbnormalTest001);

/**
 * パラメータtypeを指定しないでNotificationに文字列を通知するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/notify?serviceId=xxxx&body='notifyAbnormalTest002(omitted type.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.notifyAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    body: 'notifyAbnormalTest002(omitted type.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('notifyAbnormalTest002(omitted type.)', NotificationProfileAbnormalTest.notifyAbnormalTest002);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    type: 'test',
    body: 'notify(type is invalid parameter(test).)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('notifyAbnormalTest003(type is invalid parameter(test).)', NotificationProfileAbnormalTest.notifyAbnormalTest003);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body: 'notify(Calling a put method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('notifyAbnormalTest004(Calling a put method that does not support.)', NotificationProfileAbnormalTest.notifyAbnormalTest004);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body: 'notify(Calling a get method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('notifyAbnormalTest005(Calling a get method that does not support.)', NotificationProfileAbnormalTest.notifyAbnormalTest005);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    notificationId: 'this is a test.'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('notifyAbnormalTest006(notificationId is not exist.)', NotificationProfileAbnormalTest.notifyAbnormalTest006);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('notifyAbnormalTest007(omitted notificationId)', NotificationProfileAbnormalTest.notifyAbnormalTest007);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_NOTIFY,
    serviceId: serviceId,
    notificationId: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('notifyAbnormalTest008(notificationId is empty.)', NotificationProfileAbnormalTest.notifyAbnormalTest008);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_CLICK,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body:'notify(Calling a get method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onClickAbnormalTest001', NotificationProfileAbnormalTest.onClickAbnormalTest001);

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
 let serviceId = getCurrentServiceId();
 let done = assert.async();
 sdk.get({
   profile: dConnectSDK.constants.notification.PROFILE_NAME,
   attribute: dConnectSDK.constants.notification.ATTR_ON_CLICK,
   serviceId: serviceId,
   type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
   body:'notify(Calling a get method that does not support.)',
   tag: 'TEST'
 }).then(json => {
   assert.ok(false, 'json: ' + JSON.stringify(json));
   done();
 }).catch(e => {
   checkSuccessErrorCode(assert, e, 3);
   done();
 });
};
QUnit.test('onClickAbnormalTest002', NotificationProfileAbnormalTest.onClickAbnormalTest002);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_SHOW,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body:'notify(Calling a get method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onShowAbnormalTest001', NotificationProfileAbnormalTest.onShowAbnormalTest001);

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
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_SHOW,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body:'notify(Calling a get method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onShowAbnormalTest002', NotificationProfileAbnormalTest.onShowAbnormalTest002);

/**
 * Notificationプロファイルのoncloseを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /notification/onclose?serviceId=xxxx&accessToken=xxx&body='notify(Calling a post method that does not support.)'&tag='TEST'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onCloseAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_CLOSE,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body:'notify(Calling a post method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onCloseAbnormalTest001', NotificationProfileAbnormalTest.onCloseAbnormalTest001);
/**
 * Notificationプロファイルのoncloseを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /notification/onclose?serviceId=xxxx&accessToken=xxx&body='notify(Calling a get method that does not support.)'&tag='TEST'br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
NotificationProfileAbnormalTest.onCloseAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.notification.PROFILE_NAME,
    attribute: dConnectSDK.constants.notification.ATTR_ON_CLOSE,
    serviceId: serviceId,
    type: dConnectSDK.constants.notification.NOTIFICATION_TYPE_PHONE,
    body:'notify(Calling a post method that does not support.)',
    tag: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });

};
QUnit.test('onCloseAbnormalTest002', NotificationProfileAbnormalTest.onCloseAbnormalTest002);
