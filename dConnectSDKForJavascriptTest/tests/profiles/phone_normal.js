module('Phone Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Phoneプロファイルのテストを行うクラス。
 * @class
 */
var PhoneProfileNormalTest = {};

/**
 * 117に電話発信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&phoneNumber='117'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="exopected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PhoneProfileNormalTest.callNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.phone.ATTR_CALL);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.phone.PARAM_PHONE_NUMBER, '117');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode) || errorCode == 16,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callTest001', PhoneProfileNormalTest.callNormalTest001);

/**
 * 電話のモードをサイレントモードに設定するテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: PUT</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&mode=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PhoneProfileNormalTest.setModeNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.phone.ATTR_SET);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.phone.PARAM_MODE, dConnect.constants.phone.PHONE_MODE_SILENT);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('setModeNormalTest(mode is 0(silent))', PhoneProfileNormalTest.setModeNormalTest001);

/**
 * 電話のモードをマナーモードに設定するテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: PUT</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&mode=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PhoneProfileNormalTest.setModeNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.phone.ATTR_SET);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.phone.PARAM_MODE, dConnect.constants.phone.PHONE_MODE_MANNER);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('setModeNormalTest002(mode is 1(manner))', PhoneProfileNormalTest.setModeNormalTest002);

/**
 * 電話のモードを通常モードに設定するテストを行う。
 * <h3>【HHTP通信】</h3>
 * <p id="test">
 * Method: PUT</br>
 * Path: /phone/call?serviceId=xxx&accessToken=xxx&mode=2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PhoneProfileNormalTest.setModeNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.phone.ATTR_SET);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.phone.PARAM_MODE, dConnect.constants.phone.PHONE_MODE_SOUND);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('setModeNormnalTest003(mode is 2(sound))', PhoneProfileNormalTest.setModeNormalTest003);

/**
 * 通話の状態変更を通知するイベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /phone/onconnect?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
PhoneProfileNormalTest.onConnectNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.phone.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.phone.ATTR_ON_CONNECT);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.phone.PROFILE_NAME && json.attribute === dConnect.constants.phone.ATTR_ON_CONNECT) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onConnectNormalTest001', PhoneProfileNormalTest.onConnectNormalTest001);
