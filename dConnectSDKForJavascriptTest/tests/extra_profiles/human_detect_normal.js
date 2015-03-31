module('HumanDetect Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * HumanDetectプロファイルの正常系テストを行うクラス。
 * @class
 */
var HumanDetectProfileNormalTest = {};

/**
 * 人体検出APIにGETでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /humandetect/detection/body?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
HumanDetectProfileNormalTest.detectionBodyNormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var INTERFACE = 'detection';
  var ATTR_DETECTION_BODY = 'body';
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(PROFILE_NAME);
    builder.setInterface(INTERFACE);
    builder.setAttribute(ATTR_DETECTION_BODY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('detectionBodyNormalTest001', HumanDetectProfileNormalTest.detectionBodyNormalTest001);


/**
 * 手検出APIにGETでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /humandetect/detection/hand?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
HumanDetectProfileNormalTest.detectionHandNormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var INTERFACE = 'detection';
  var ATTR_DETECTION_HAND = 'hand';
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(PROFILE_NAME);
    builder.setInterface(INTERFACE);
    builder.setAttribute(ATTR_DETECTION_HAND);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('detectionHandNormalTest001', HumanDetectProfileNormalTest.detectionHandNormalTest001);

/**
 * 顔検出APIにGETでアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
HumanDetectProfileNormalTest.detectionFaceNormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var INTERFACE = 'detection';
  var ATTR_DETECTION_FACE = 'face';
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(PROFILE_NAME);
    builder.setInterface(INTERFACE);
    builder.setAttribute(ATTR_DETECTION_FACE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('detectionFaceNormalTest001', HumanDetectProfileNormalTest.detectionFaceNormalTest001);


/**
 * 人体検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/onbodydetection?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onBodyDetectionNormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var ATTR_ON_BODY_DETECTION = 'onbodydetection';
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ON_BODY_DETECTION);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_BODY_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onBodyDetectionNormalTest001', HumanDetectProfileNormalTest.onBodyDetectionNormalTest001);

/**
 * 手検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/onhanddetection?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が蹴ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onHandDetectionNormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var ATTR_ON_HAND_DETECTION = 'onhanddetection';
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ON_HAND_DETECTION);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_HAND_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onHandDetectionNormalTest001', HumanDetectProfileNormalTest.onHandDetectionNormalTest001);

/**
 * 顔検出通知イベントの登録と解除のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /humandetect/onfacedetection?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
HumanDetectProfileNormalTest.onFaceDetectionNormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var ATTR_ON_FACE_DETECTION = 'onfacedetection';
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ON_FACE_DETECTION);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === PROFILE_NAME && json.attribute === ATTR_ON_FACE_DETECTION) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onFaceDetectionNormalTest001', HumanDetectProfileNormalTest.onFaceDetectionNormalTest001);



