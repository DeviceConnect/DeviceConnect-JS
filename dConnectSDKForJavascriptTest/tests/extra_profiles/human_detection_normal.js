QUnit.module('HumanDetect Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * HumanDetectプロファイルの正常系テストを行うクラス。
 * @class
 */
let HumanDetectProfileNormalTest = {};

/**
 * 人体検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/ondetection?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onDetectionNormalTest001 = function(assert) {
  let PROFILE_NAME = 'humandetect';
  let ATTR_ON_DETECTION = 'ondetection';
  let serviceId = getCurrentServiceId();
  let params = {
    profile: PROFILE_NAME,
    attribute: ATTR_ON_DETECTION,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onDetectionNormalTest001', HumanDetectProfileNormalTest.onDetectionNormalTest001);


/**
 * 人体検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/onbodydetection?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onBodyDetectionNormalTest001 = function(assert) {
  let PROFILE_NAME = 'humandetect';
  let ATTR_ON_BODY_DETECTION = 'onbodydetection';
  let serviceId = getCurrentServiceId();
  let params = {
    profile: PROFILE_NAME,
    attribute: ATTR_ON_BODY_DETECTION,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_BODY_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onBodyDetectionNormalTest001', HumanDetectProfileNormalTest.onBodyDetectionNormalTest001);

/**
 * 手検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/onhanddetection?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onHandDetectionNormalTest001 = function(assert) {
  let PROFILE_NAME = 'humandetect';
  let ATTR_ON_HAND_DETECTION = 'onhanddetection';
  let serviceId = getCurrentServiceId();
  let params = {
    profile: PROFILE_NAME,
    attribute: ATTR_ON_HAND_DETECTION,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_HAND_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onHandDetectionNormalTest001', HumanDetectProfileNormalTest.onHandDetectionNormalTest001);

/**
 * 顔検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/onfacedetection?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onFaceDetectionNormalTest001 = function(assert) {
  let PROFILE_NAME = 'humandetect';
  let ATTR_ON_FACE_DETECTION = 'onfacedetection';
  let serviceId = getCurrentServiceId();
  let params = {
    profile: PROFILE_NAME,
    attribute: ATTR_ON_FACE_DETECTION,
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_FACE_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onFaceDetectionNormalTest001', HumanDetectProfileNormalTest.onFaceDetectionNormalTest001);
