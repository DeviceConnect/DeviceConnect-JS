QUnit.module('HumanDetection Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * HumanDetectionプロファイルの異常系テストを行うクラス。
 * @class
 */
let HumanDetectionProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest001 = function(assert) {
  let PROFILE_NAME = 'humanDetection';
  let ATTR_ERROR = 'onDetection';
  let done = assert.async();
  sdk.post({
    profile: PROFILE_NAME,
    attribute: ATTR_ERROR,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCallErrorPostApiAbnormalTest001(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest002 = function(assert) {
  let PROFILE_NAME = 'humanDetection';
  let ATTR_ERROR = 'onBodyDetection';
  let done = assert.async();
  sdk.post({
    profile: PROFILE_NAME,
    attribute: ATTR_ERROR,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCallErrorPostApiAbnormalTest002(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest002);
/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003 = function(assert) {
  let PROFILE_NAME = 'humanDetection';
  let ATTR_ERROR = 'onHandDetection';
  let done = assert.async();
  sdk.post({
    profile: PROFILE_NAME,
    attribute: ATTR_ERROR,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCallErrorPostApiAbnormalTest003(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003);

/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003 = function(assert) {
  let PROFILE_NAME = 'humanDetection';
  let ATTR_ERROR = 'onFaceDetection';
  let done = assert.async();
  sdk.post({
    profile: PROFILE_NAME,
    attribute: ATTR_ERROR,
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCallErrorPostApiAbnormalTest003(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003);

/**
 * intervalに非常に桁の大きな数値を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onDetection',
    serviceId: getCurrentServiceId(),
    interval: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('humanIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onDetection',
    serviceId: getCurrentServiceId(),
    interval: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('humanIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onDetection',
    serviceId: getCurrentServiceId(),
    interval: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('humanIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onDetection',
    serviceId: getCurrentServiceId(),
    interval: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('humanIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onDetection',
    serviceId: getCurrentServiceId(),
    interval: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('humanIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    interval: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    interval: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    interval: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    interval: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    interval: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minWidth: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minWidth: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minHeight: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    minHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onBodyDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('bodyMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minWidth: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minWidth: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minHeight: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    minHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onHandDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('handMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    interval: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    interval: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    interval: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    interval: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    interval: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minWidth: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minWidth: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minWidth: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxWidth: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minHeight:  -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    minHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    maxHeight: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest005);


/**
 * eyeThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    eyeThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceEyeThresholdAbnormalTest001(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest001);

/**
 * eyeThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    eyeThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceEyeThresholdAbnormalTest002(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest002);

/**
 * eyeThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    eyeThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceEyeThresholdAbnormalTest003(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest003);

/**
 * eyeThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    eyeThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceEyeThresholdAbnormalTest004(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest004);

/**
 * eyeThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    eyeThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceEyeThresholdAbnormalTest005(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest005);


/**
 * noseThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    noseThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceNoseThresholdAbnormalTest001(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest001);

/**
 * noseThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    noseThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceNoseThresholdAbnormalTest002(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest002);

/**
 * noseThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    noseThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceNoseThresholdAbnormalTest003(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest003);

/**
 * noseThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    noseThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceNoseThresholdAbnormalTest004(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest004);

/**
 * noseThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    noseThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceNoseThresholdAbnormalTest005(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest005);


/**
 * mouthThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    mouthThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMouthThresholdAbnormalTest001(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest001);

/**
 * mouthThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    mouthThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMouthThresholdAbnormalTest002(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest002);

/**
 * mouthThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    mouthThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMouthThresholdAbnormalTest003(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest003);

/**
 * mouthThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    mouthThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMouthThresholdAbnormalTest004(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest004);

/**
 * mouthThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    mouthThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceMouthThresholdAbnormalTest005(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest005);


/**
 * blinkThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    blinkThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceBlinkThresholdAbnormalTest001(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest001);

/**
 * blinkThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    blinkThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceBlinkThresholdAbnormalTest002(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest002);

/**
 * blinkThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    blinkThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceBlinkThresholdAbnormalTest003(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest003);

/**
 * blinkThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    blinkThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceBlinkThresholdAbnormalTest004(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest004);

/**
 * blinkThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    blinkThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceBlinkThresholdAbnormalTest005(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest005);


/**
 * ageThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    ageThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceAgeThresholdAbnormalTest001(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest001);

/**
 * ageThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    ageThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceAgeThresholdAbnormalTest002(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest002);

/**
 * ageThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    ageThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceAgeThresholdAbnormalTest003(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest003);

/**
 * ageThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    ageThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceAgeThresholdAbnormalTest004(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest004);

/**
 * ageThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    ageThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceAgeThresholdAbnormalTest005(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest005);


/**
 * genderThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    genderThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGenderThresholdAbnormalTest001(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest001);

/**
 * genderThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    genderThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGenderThresholdAbnormalTest002(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest002);

/**
 * genderThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    genderThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGenderThresholdAbnormalTest003(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest003);

/**
 * genderThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    genderThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGenderThresholdAbnormalTest004(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest004);

/**
 * genderThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    genderThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGenderThresholdAbnormalTest005(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest005);


/**
 * faceDirectionThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    faceDirectionThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceFaceDirectionThresholdAbnormalTest001(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest001);

/**
 * faceDirectionThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    faceDirectionThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceFaceDirectionThresholdAbnormalTest002(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest002);

/**
 * faceDirectionThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    faceDirectionThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceFaceDirectionThresholdAbnormalTest003(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest003);

/**
 * faceDirectionThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    faceDirectionThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceFaceDirectionThresholdAbnormalTest004(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest004);

/**
 * faceDirectionThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    faceDirectionThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceFaceDirectionThresholdAbnormalTest005(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest005);


/**
 * gazeThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    gazeThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGazeThresholdAbnormalTest001(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest001);

/**
 * gazeThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    gazeThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('faceGazeThresholdAbnormalTest002(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest002);

/**
 * gazeThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    gazeThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGazeThresholdAbnormalTest003(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest003);

/**
 * gazeThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    gazeThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGazeThresholdAbnormalTest004(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest004);

/**
 * gazeThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    gazeThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceGazeThresholdAbnormalTest005(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest005);


/**
 * expressionThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    expressionThreshold: 1000000000000000000000000000000000000000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceExpressionThresholdAbnormalTest001(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest001);

/**
 * expressionThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    expressionThreshold: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('faceExpressionThresholdAbnormalTest002(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest002);

/**
 * expressionThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    expressionThreshold: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceExpressionThresholdAbnormalTest003(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest003);

/**
 * expressionThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    expressionThreshold: 'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg' +
    'abcdefgabcdefgabcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceExpressionThresholdAbnormalTest004(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest004);

/**
 * expressionThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'humanDetection',
    attribute: 'onFaceDetection',
    serviceId: getCurrentServiceId(),
    expressionThreshold: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
    '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('faceExpressionThresholdAbnormalTest005(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest005);
