QUnit.module('MediaPlayer Profile Abnormal Test', {
  before: function() {
    TEST_TIMEOUT = 120000;
    init();
  }
});

/**
 * MediaPlayerProfileのテストを行うクラス。
 * @class
 */
let MediaPlayerProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでメディアリストにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('medialistAbnormalTest001(Calling a put method that does not support.)',
    MediaPlayerProfileAbnormalTest.mediaListAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでメディアリストにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('mediaListAbnormalTest002(Calling a post method that does not support.)',
    MediaPlayerProfileAbnormalTest.mediaListAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでメディアリストにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('mediaListAbnormalTest003(Calling a delete method that does not support.)',
      MediaPlayerProfileAbnormalTest.mediaListAbnormalTest003);

/**
 * パラメータorderにdescを指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&order='desc'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    order: 'desc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest004(order is desc)',
      MediaPlayerProfileAbnormalTest.mediaListAbnormalTest004);

/**
 * パラメータorderに特殊文字(!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|},!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|})を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&order='!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|},!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    order: "!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|},!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}"
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest005(order is special characters.)',
        MediaPlayerProfileAbnormalTest.mediaListAbnormalTest005);

/**
 * パラメータlimitに-1を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&limit=-1<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest006 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    limit: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest006(limit is minus(-1))', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest006);

/**
 * パラメータlimitに10.6を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&limit=10.6<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest007 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    limit: 10.6
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest007(limit is float(10.6))',
      MediaPlayerProfileAbnormalTest.mediaListAbnormalTest007);

/**
 * パラメータlimitに文字列を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&limit='this is a test.'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest008 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    limit: 'this is a test.'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest008(limit is string)',
        MediaPlayerProfileAbnormalTest.mediaListAbnormalTest008);

/**
 * パラメータoffsetに-1を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&offset=-1<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest010 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    offset: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest010(offest is -1)',
        MediaPlayerProfileAbnormalTest.mediaListAbnormalTest010);

/**
 * パラメータoffsetに2.5を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&offset=2.5<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest011 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    offset: 2.5
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest011(offest is float(2.5))',
        MediaPlayerProfileAbnormalTest.mediaListAbnormalTest011);

/**
 * パラメータoffsetに文字列を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxxx&offset='this is test.'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest012 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    serviceId: serviceId,
    offset: 'this is a test.'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaListAbnormalTest012(offest is string)',
        MediaPlayerProfileAbnormalTest.mediaListAbnormalTest012);

/**
 * 定義されていないPOSTメソッドでメディアにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('mediaAbnormalTest001(Calling a post method that does not support.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでメディアにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('mediaAbnormalTest002(Calling a delete method that does not support.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest002);

/**
 * mediaIdに空文字を指定してメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxx&mediaId=''<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
    serviceId: serviceId,
    mediaId: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaAbnormalTest003(mediaId is empty.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest003);

/**
 * mediaIdに特殊文字を指定してメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxxmediaId='!\"#$%&'()-^¥@[;:],./__?><}*+{`|~=s'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
    serviceId: serviceId,
    mediaId: "!\"#$%&'()-^¥@[;:],./__?><}*+{`|~="
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaAbnormalTest004(mediaId is specail charactors.)',
            MediaPlayerProfileAbnormalTest.mediaAbnormalTest004);

/**
 * mediaIdを指定しないでメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaAbnormalTest005(mediaId is omitted)',
            MediaPlayerProfileAbnormalTest.mediaAbnormalTest005);

/**
 * 存在しないmediaIdに指定してメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxx&mediaId='media_test'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest006 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
    serviceId: serviceId,
    mediaId: "media_test"
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mediaAbnormalTest006(mediaId is not exist.)',
          MediaPlayerProfileAbnormalTest.mediaAbnormalTest006);

/**
 * 定義されていないPOSTメソッドでメディアを再生するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/play?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayAbnormalTest001 = function(assert) {
  let done = assert.async();
  setMedia().then(serviceId => {
    sdk.post({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
      serviceId: serviceId
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 8);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('PlayAbnormalTest001', MediaPlayerProfileAbnormalTest.PlayAbnormalTest001);

/**
 * 定義されていないGETメソッドでメディアを再生するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/play?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayAbnormalTest002 = function(assert) {
  let done = assert.async();
  setMedia().then(serviceId => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
      serviceId: serviceId
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 8);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('PlayAbnormalTest002', MediaPlayerProfileAbnormalTest.PlayAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでメディアを再生するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/play?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayAbnormalTest003 = function(assert) {
  let done = assert.async();
  setMedia().then(serviceId => {
    sdk.delete({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
      serviceId: serviceId
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 8);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('PlayAbnormalTest003', MediaPlayerProfileAbnormalTest.PlayAbnormalTest003);



/**
 * 定義されていないGETメソッドでメディアの再生を一時停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/pause?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PauseAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_PAUSE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('PauseAbnormalTest001', MediaPlayerProfileAbnormalTest.PauseAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでメディアの再生を一時停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/pause?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PauseAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_PAUSE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('PauseAbnormalTest002', MediaPlayerProfileAbnormalTest.PauseAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでメディアの再生を一時停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/pause?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PauseAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_PAUSE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('PauseAbnormalTest003', MediaPlayerProfileAbnormalTest.PauseAbnormalTest003);

/**
 * 定義されていないGETメソッドで一時停止中のメディアの再生を再開するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/resume?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.ResumeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('ResumeAbnormalTest001', MediaPlayerProfileAbnormalTest.ResumeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで一時停止中のメディアの再生を再開するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/resume?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.ResumeAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('ResumeAbnormalTest002', MediaPlayerProfileAbnormalTest.ResumeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで一時停止中のメディアの再生を再開するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/resume?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.ResumeAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_RESUME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('ResumeAbnormalTest003', MediaPlayerProfileAbnormalTest.ResumeAbnormalTest003);

/**
 * 定義されていないGETメソッドで、再生中のメディアを停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/stop?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.StopAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_STOP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('StopAbnormalTest001', MediaPlayerProfileAbnormalTest.StopAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで、再生中のメディアを停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/stop?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.StopAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_STOP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('StopAbnormalTest002', MediaPlayerProfileAbnormalTest.StopAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで、再生中のメディアを停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/stop?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.StopAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_STOP,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('StopAbnormalTest003', MediaPlayerProfileAbnormalTest.StopAbnormalTest003);

/**
 * 定義されていないPUTメソッドで、現在の再生状態を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx?<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY_STATUS,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    sleep(1 * 1000);
    stopMedia(done);
  });
};
QUnit.test('PlayStatusAbnormalTest001', MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで、現在の再生状態を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY_STATUS,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    sleep(1 * 1000);
    stopMedia(done);
  });
};
QUnit.test('PlayStatusAbnormalTest002', MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで、現在の再生状態を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/playStatus?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY_STATUS,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    sleep(1 * 1000);
    stopMedia(done);
  });
};
QUnit.test('PlayStatusAbnormalTest003', MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest003);

/**
 * 定義されていないPOSTメソッドでseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&mediaId='ZZZZZZZ'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
    serviceId: serviceId,
    mediaId: 'ZZZZZZZ'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    sleep(1 * 1000);
    stopMedia(done);
  });
};
QUnit.test('seekAbnormalTest001', MediaPlayerProfileAbnormalTest.seekAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&mediaId='ZZZZZZZ'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
    serviceId: serviceId,
    mediaId: 'ZZZZZZZ'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    sleep(1 * 1000);
    stopMedia(done);
  });

};
QUnit.test('seekAbnormalTest002', MediaPlayerProfileAbnormalTest.seekAbnormalTest002);

/**
 * position=10.5に設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&position=10.5<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest003 = function(assert) {
  let done = assert.async();
  playMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      serviceId: serviceId,
      pos: 10.5
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      console.log("2" + e);
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      sleep(1 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    console.log(e);
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    stopMedia(done);
  });
};
QUnit.test('seekAbnormalTest003', MediaPlayerProfileAbnormalTest.seekAbnormalTest003);

/**
 * position=-10に設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&position=-10<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest004 = function(assert) {
  let done = assert.async();
  playMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      serviceId: serviceId,
      pos: -10
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      sleep(1 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    stopMedia(done);
  });
};
QUnit.test('seekAbnormalTest004', MediaPlayerProfileAbnormalTest.seekAbnormalTest004);

/**
 * position=100000000に設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&position=100000000<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest005 = function(assert) {
  let done = assert.async();
  playMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      serviceId: serviceId,
      pos: 100000000
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      sleep(1 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    stopMedia(done);
  });
};
QUnit.test('seekAbnormalTest005', MediaPlayerProfileAbnormalTest.seekAbnormalTest005);

/**
 * positionに文字列を設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&position='this is a test.'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest006 = function(assert) {
  let done = assert.async();
  playMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      serviceId: serviceId,
      pos: 'this is a test.'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      sleep(1 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    stopMedia(done);
  });
};
QUnit.test('seekAbnormalTest006', MediaPlayerProfileAbnormalTest.seekAbnormalTest006);

/**
 * positionに特殊文字を設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxxx&position='!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest007 = function(assert) {
  let done = assert.async();
  playMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      serviceId: serviceId,
      pos: "!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}"
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      sleep(1 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    stopMedia(done);
  });
};
QUnit.test('seekAbnormalTest007', MediaPlayerProfileAbnormalTest.seekAbnormalTest007);

/**
 * サポートされていないPOSTメソッドでmuteにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /mediaplayer/mute?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.muteAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MUTE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('muteAbnormalTest001', MediaPlayerProfileAbnormalTest.muteAbnormalTest001);

/**
 * volumeの値に-1を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/volume?serviceId=xxx&accessToken=xxx&volume=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
    serviceId: serviceId,
    volume: -1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest001', MediaPlayerProfileAbnormalTest.volumeAbnormalTest001);

/**
 * volumeの値に10を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/volume?serviceId=xxx&accessToken=xxx&volume=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
    serviceId: serviceId,
    volume: 10
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('volumeAbnormalTest002', MediaPlayerProfileAbnormalTest.volumeAbnormalTest002);

/**
 * volumeに文字列を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/volume?serviceId=xxx&accessToken=xxx&volume='this is a test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest003 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
    serviceId: serviceId,
    volume: 'this is a test.'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest003', MediaPlayerProfileAbnormalTest.volumeAbnormalTest003);

/**
 * volumeに特殊文字を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/volume?serviceId=xxx&accessToken=xxx&volume='!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
    serviceId: serviceId,
    volume: "!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}"
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest004', MediaPlayerProfileAbnormalTest.volumeAbnormalTest004);

/**
 * 定義されていないPOSTメソッドで音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediaplayer/volume?serviceId=xxx&accessToken=xxx&volume=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest005 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
    serviceId: serviceId,
    volume: 0.5
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('volumeAbnormalTest005', MediaPlayerProfileAbnormalTest.volumeAbnormalTest005);

/**
 * 定義されていないDELETEメソッドで音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediaplayer/volume?serviceId=xxx&accessToken=xxx&volume=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest006 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
    serviceId: serviceId,
    volume: 0.5
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('volumeAbnormalTest006', MediaPlayerProfileAbnormalTest.volumeAbnormalTest006);

/**
 * 定義されていないGETメソッドでメディア状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/onstatuschange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_ON_STATUS_CHANGE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onStatusChangeAbnormalTest001', MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでメディア状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediaplayer/onstatuschange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_ON_STATUS_CHANGE,
    serviceId: serviceId
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onStatusChangeAbnormalTest001', MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest002);
