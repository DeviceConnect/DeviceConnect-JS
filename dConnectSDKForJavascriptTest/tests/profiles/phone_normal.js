QUnit.module('Phone Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Phoneプロファイルのテストを行うクラス。
 * @class
 */
let PhoneProfileNormalTest = {};

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_CALL,
    params: {
      serviceId: getCurrentServiceId(),
      phoneNumber: '117'
    }
  }).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 16);
    done();
  });
};
QUnit.test('callTest001', PhoneProfileNormalTest.callNormalTest001);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId(),
      mode: dConnectSDK.constants.phone.PHONE_MODE_SILENT
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
QUnit.test('setModeNormalTest(mode is 0(silent))', PhoneProfileNormalTest.setModeNormalTest001);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId(),
      mode: dConnectSDK.constants.phone.PHONE_MODE_MANNER
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
QUnit.test('setModeNormalTest002(mode is 1(manner))', PhoneProfileNormalTest.setModeNormalTest002);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_SET,
    params: {
      serviceId: getCurrentServiceId(),
      mode: dConnectSDK.constants.phone.PHONE_MODE_SOUND
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
QUnit.test('setModeNormnalTest003(mode is 2(sound))', PhoneProfileNormalTest.setModeNormalTest003);

/**
 * 通話の状態変更を通知するイベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /phone/onconnect?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
PhoneProfileNormalTest.onConnectNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.phone.PROFILE_NAME,
    attribute: dConnectSDK.constants.phone.ATTR_ON_CONNECT,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 5000, message => {    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.phone.PROFILE_NAME && json.attribute === dConnectSDK.constants.phone.ATTR_ON_CONNECT) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onConnectNormalTest001', PhoneProfileNormalTest.onConnectNormalTest001);
