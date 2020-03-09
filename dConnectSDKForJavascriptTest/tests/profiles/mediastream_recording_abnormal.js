QUnit.module('MediaStreamRecording Profile Abnormal Test', {
  before: function() {
    init();
  }, after: function() {
    let img = document.getElementById('images');
    img.style.visibility = 'hidden';
  }
});

/**
 * MediaStreamRecordingプロファイルのテストを行うクラス。
 * @class
 */
let MediaStreamRecordingProfileAbnormalTest = {};

/**
 * 定義されてないPUTメソッドでカメラ一覧にアクセスする異常系テストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/mediarecorder?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに3が返ってくること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MEDIARECORDER,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('mediarecorderAbnormalTest001(Calling a put method that does not support.)', MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest001);
}
/**
 * 定義されてないPOSTメソッドでカメラ一覧にアクセスする異常系テストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/mediarecorder?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに3が返ってくること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MEDIARECORDER,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('mediarecorderAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest002);
}
/**
 * 定義されてないDELETEメソッドでカメラ一覧にアクセスする異常系テストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/mediarecorder?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに3が返ってくること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MEDIARECORDER,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('mediarecorderAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest003);
}
/**
 * 定義されていないPUTメソッドで写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest001(Calling a put method that does not support.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest001);
}
/**
 * 定義されていないDELETEメソッドで写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest002(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest002);
}
/**
 * 定義されていないGETメソッドで写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest003(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest003);
}
/**
 * targetを数値に設定して写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId,
    target: 100
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest004()', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest004);
}
/**
 * targetを日本語の文字列に設定して写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target='あいうえおあいうえおあいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId,
    target: 'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest005()', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest005);
}
/**
 * targetを特殊文字に設定して写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target='#$%!?^#$%!?^'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest006 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId,
    target: '#$%!?^#$%!?^'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest006(target is special character.)',
    MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest006);
}
/**
 * targetを空文字に設定して写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest007 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId,
    target: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest007(target is empty.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest007);
}
/**
 * targetを英文字列に設定して写真撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target='abcdefgabcdefg'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest008 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    serviceId: serviceId,
    target: 'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('pictureAbnormalTest008()',
    MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest008);
}
/**
 * 定義されていないPUTメソッドで動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};

if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest001(Calling a put method that does not support.)',
    MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest001);
}
/**
 * 定義されていないDELETEメソッドで動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
 QUnit.test('recordAbnormalTest002(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest002);
}
/**
 * 定義されていないGETメソッドで動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest003(Calling a get method that does not support.)',
    MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest003);
}
/**
 * targetを数値に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx&target=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    target: 100
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest004()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest004);
}
/**
 * targetを日本語の文字列に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx&target='あいうえおあいうえおあいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    target: 'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest005()',
    MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest005);
}

/**
 * targetを特殊文字に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx&target='#$%!?^#$%!?^'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest006 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    target: '#$%!?^#$%!?^'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest006()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest006);
}
/**
 * targetを空文字に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest007 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    target: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest007(target is empty.)', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest007);
}
/**
 * targetを英文字列に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&target='abcdefgabcdefg'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest008 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    target: 'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest008()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest008);
}
/**
 * timesliceを日本語の文字列に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx&timeslice='あいうえおあいうえおあいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest010 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    timeslice: 'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest010()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest010);
}
/**
 * timesliceを特殊文字に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx&timeslice='#$%!?^#$%!?^'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest011 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    timeslice: '#$%!?^#$%!?^'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest011()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest011);
}
/**
 * timesliceを空文字に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&timeslice=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest012 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    timeslice: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest012(timeslice is empty.)', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest012);
}
/**
 * timesliceを英文字列に設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&timeslice='abcdefgabcdefg'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest013 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    timeslice: 'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest013()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest013);
}
/**
 * timesliceをマイナスに設定して動画撮影リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/picture?serviceId=xxx&accessToken=xxx&timeslice=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest014 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    serviceId: serviceId,
    timeslice: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordAbnormalTest014()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest014);
}
/**
 * 定義されていないGETメソッドで動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest001()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドで動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest002()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest002);
}
/**
 * 定義されていないDELETEメソッドで動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest003()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest003);
}
/**
 * targetを数値に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId,
    target: 100
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest004()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest004);
}
/**
 * targetを日本語の文字列に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target='あいうえおあいうえおあいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId,
    target: 'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest005()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest005);
}
/**
 * targetを特殊文字に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target='#$%!?^#$%!?^'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest006 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId,
    target: '#$%!?^#$%!?^'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest006()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest006);
}
/**
 * targetを空文字に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest007 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId,
    target: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest007(target is empty.)', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest007);
}
/**
 * targetを英文字列に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target='abcdefgabcdefg'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest008 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId,
    target: 'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest008()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest008);
}
/**
 * targetを存在しないIDに設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target='media_test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest009 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
    serviceId: serviceId,
    target: 'media_test'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAbnormalTest009(media_test does not exist.)',
        MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest009);
}
/**
 * targetを存在しないIDに設定して動画撮影に対して録画再開リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/resume?serviceId=xxx&accessToken=xxx&target='media_test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RESUME,
    serviceId: serviceId,
    target: 'media_test'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    if (e.errorCode == 10 || e.errorCode == 16) {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    } else if (checkErrorCode(e.errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('resumeAbnormalTest001(media_test does not exist.)',
      MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest001);
}
/**
 * 定義されていないGETメソッドで動画撮影に対して録画再開リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/resume?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('resumeAbnormalTest002(Calling a get method that does not support.)',
      MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest002);
}
/**
 * 定義されていないPOSTメソッドで動画撮影に対して録画再開リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/resume?serviceId=xxx&accessToken=xxx&target='media_test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });

};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('resumeAbnormalTest003(Calling a post method that does not support.)',
      MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest003);
}
/**
 * 定義されていないDELETEメソッドで動画撮影に対して録画再開リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/resume?serviceId=xxx&accessToken=xxx&target='media_test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('resumeAbnormalTest004(Calling a delete method that does not support.)',
        MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest004);
}
/**
 * 一時停止していない動画撮影に対して録画再開リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/resume?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 16);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('resumeAbnormalTest005', MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest005);
}
/**
 * 定義されていないGETメソッドでミュートリクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/mutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MUTETRACK,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('muteAbnormalTest001(Calling a get method that does not support.)',
          MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドでミュートリクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/mutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MUTETRACK,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('muteAbnormalTest002(Calling a post method that does not support.)',
            MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest002);
}
/**
 * 定義されていないDELETEメソッドでミュートリクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/mutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MUTETRACK,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('muteAbnormalTest003(Calling a delete method that does not support.)',
        MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest003);
}


/**
 * 既にミュートされている録画に対してミュートリクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/mutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MUTETRACK,
    serviceId: serviceId
  };
  let done = assert.async();
  sdk.put(params).then(json => {
    sdk.put(params).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 16);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 16);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('muteAbnormalTest004(Already muted.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest004);
}
/**
 * 定義されていないGETメソッドでミュート解除リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/unmutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_UNMUTETRACK,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('muteAbnormalTest001(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドでミュート解除リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/unmutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_UNMUTETRACK,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('unmuteAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest002);
}
/**
 * 定義されていないDELETEメソッドでミュート解除リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/unmutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_UNMUTETRACK,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('unmuteAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest003);
}


/**
 * 既にミュート解除されている動画撮影に対してミュート解除リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/unmutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest004 = function(assert) {

  let serviceId = getCurrentServiceId();
  let done = assert.async();
  let params = {
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_UNMUTETRACK,
    serviceId: serviceId
  };
  sdk.put(params).then(json => {
    sdk.put(params).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 3);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 16);
    done();
  });

};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('unmuteAbnormalTest004(Already unmuted.)', MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest004);
}
/**
 * 定義されていないGETメソッドで動画撮影停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/stop?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('stopAbnormalTest001(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドで動画撮影停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/stop?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('stopAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest002);
}
/**
 * 定義されていないDELETEメソッドで動画撮影停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/stop?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('stopAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest003);
}
/**
 * 既に停止されている動画撮影に対して動画撮影停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/stop?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  let params = {
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
    serviceId: serviceId
  };
  sdk.put(params).then(json => {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    setTimeout(() => {
      sdk.put(params).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 16);
        done();
      });
    }, 2 * 1000);
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 16);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('stopAbnormalTest004(Already stopped.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest004);
}

/**
 * 定義されていないPOSTメソッドでデバイスの録画、録音オプションにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * ・errorCodeが3であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_OPTIONS,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('optionsAbnormalTest001(Calling a post method that does not support.)',
      MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest001);
}
/**
 * 定義されていないDELETEメソッドでデバイスの録画、録音オプションにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * ・errorCodeが3であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_OPTIONS,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('optionsAbnormalTest002(Calling a delete method that does not support.)',
          MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest002);
}
/**
 * 定義されていないGETメソッドで写真撮影通知イベントにアクセスする異常系テスト。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/onphoto?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.onPhotoAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_ON_PHOTO,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('onPhotoAbnormalTest001', MediaStreamRecordingProfileAbnormalTest.onPhotoAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドで写真撮影通知イベントにアクセスする異常系テスト。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/onphoto?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.onPhotoAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_ON_PHOTO,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('onPhotoAbnormalTest002', MediaStreamRecordingProfileAbnormalTest.onPhotoAbnormalTest002);
}

/**
 * 定義されていないGETメソッドで録画状態変化取得イベントにアクセスする異常系テスト。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/onrecordingchangeserviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.onRecordingChangeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_ON_RECORDING_CHANGE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('onRecordingChangeAbnormalTest001',
      MediaStreamRecordingProfileAbnormalTest.onRecordingChangeAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドで録画状態変化通知イベントにアクセスする異常系テスト。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/onrecordingchange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.onRecordingChangeAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_ON_RECORDING_CHANGE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('onRecordingChangeAbnormalTest002', MediaStreamRecordingProfileAbnormalTest.onRecordingChangeAbnormalTest002);
}

/**
 * 定義されていないPOSTメソッドでプレビューAPIリクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/preview?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.previewAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PREVIEW,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('previewAbnormalTest001(Calling a post method that does not support.)',
          MediaStreamRecordingProfileAbnormalTest.previewAbnormalTest001);
}
