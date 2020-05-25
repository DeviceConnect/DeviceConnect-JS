QUnit.config.reorder = false;
let MEDIA_TIMEOUT = 3;
QUnit.module('MediaPlayer Profile Normal Test', {
  before: function() {
    TEST_TIMEOUT = 120000;
    init();
  }
});


/**
 * MediaPlayerProfileのテストを行うクラス。
 * @class
 */
let MediaPlayerProfileNormalTest = {};

/**
 * メディアリストを全部取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest001(get)', MediaPlayerProfileNormalTest.mediaListNormalTest001);

/**
 * mimeTypeをaudio/mpegに指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&mimeType='audio/mpeg'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 'audio/'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });

};
QUnit.test('mediaListNormalTest002', MediaPlayerProfileNormalTest.mediaListNormalTest002);

/**
 * mimeTypeをvideo/mp4に指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&mimeType='video/mp4'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 'video/'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });

};
QUnit.test('mediaListNormalTest003', MediaPlayerProfileNormalTest.mediaListNormalTest003);

/**
 * パラメータmimeTypeに数値を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&mimeType=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 1
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest004(mimeType is number.)', MediaPlayerProfileNormalTest.mediaListNormalTest004);

/**
 * パラメータmimeTypeに長い文字列を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&mimeType='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz....'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest005(mimeType is long string.)', MediaPlayerProfileNormalTest.mediaListNormalTest005);

/**
 * パラメータorderにduration,ascを指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&order='duration,asc'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'duration,asc'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    let duration = 0;
    for (let i = 0; i < json.media.length; i++) {
      assert.ok(duration <= json.media[i].duration, 'duration=' + json.media[i].duration + ' [title=' + json.media[i].title + ']');
      duration = json.media[i].duration;
    }
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest006(order is duration,asc)', MediaPlayerProfileNormalTest.mediaListNormalTest006);

/**
 * パラメータorderにduration,descを指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&order='duration,desc'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'duration,desc'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    let duration = Number.MAX_VALUE;
    for (let i = 0; i < json.media.length; i++) {
      assert.ok(duration >= json.media[i].duration, 'duration=' + json.media[i].duration + ' [title=' + json.media[i].title + ']');
      duration = json.media[i].duration;
    }
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });

};
QUnit.test('mediaListNormalTest007(order is duration,desc)', MediaPlayerProfileNormalTest.mediaListNormalTest007);

/**
 * パラメータqueryにアルファベットaを指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&query='a'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      query: 'a'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest008(query is special characters.)', MediaPlayerProfileNormalTest.mediaListNormalTest008);

/**
 * パラメータqueryに数値を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&query=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest009 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      query: 1
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });

};
QUnit.test('mediaListNormalTest009(query is number)', MediaPlayerProfileNormalTest.mediaListNormalTest009);

/**
 * パラメータqueryに長い文字列を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&query='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz....'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest010 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      query: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });

};
QUnit.test('mediaListNormalTest010(query is long string)', MediaPlayerProfileNormalTest.mediaListNormalTest010);

/**
 * パラメータlimitに0を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&limit=0.<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest011 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      limit: 0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest011(limit is 0)', MediaPlayerProfileNormalTest.mediaListNormalTest011);

/**
 * パラメータlimitに10を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&limit=10.<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest012 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      limit: 10
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest012(limit is 10)', MediaPlayerProfileNormalTest.mediaListNormalTest012);

/**
 * メディアリストを全部取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest013 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest013(All)', MediaPlayerProfileNormalTest.mediaListNormalTest013);

/**
 * パラメータoffsetに3を指定してメディアリストを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxx&accessToken=xxx&offset=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest014 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      offset: 3
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });

};
QUnit.test('mediaListNormalTest014(offset is 3)', MediaPlayerProfileNormalTest.mediaListNormalTest014);

/**
 * パラメータoffsetに大きな数値を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /mediaplayer/medialist?serviceId=xxxxaccessToken=xxxx&offset=10000000<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaListNormalTest015 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      offset: 10000000
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.count >= 0, 'count=' + json.count);
    assert.ok(json.media !== undefined, 'media is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaListNormalTest015(offest is big number)', MediaPlayerProfileNormalTest.mediaListNormalTest015);

/**
 * メディア情報を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxx&mediaId=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaNormalTest001 = function(assert) {
  let done = assert.async();
  getVideoMediaList().then(list => {
    if (list.count < 1) {
      assert.ok(false, 'This device has no media.');
      done();
      return;
    }
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
      params: {
        serviceId: getCurrentServiceId(),
        mediaId: list.media[0].mediaId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaNormalTest001(get)', MediaPlayerProfileNormalTest.mediaNormalTest001);

/**
 * メディアを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxx&mediaId=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaNormalTest002 = function(assert) {
  let done = assert.async();
  getVideoMediaList().then(list => {
    if (list.count < 1) {
      assert.ok(false, 'This device has no media.');
      done();
      return;
    }
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
      params: {
        serviceId: getCurrentServiceId(),
        mediaId: list.media[0].mediaId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mediaNormalTest002(put)', MediaPlayerProfileNormalTest.mediaNormalTest002);

/**
 * メディアを再生するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/play?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メディアが再生されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.playNormalTest001 = function(assert) {
  let done = assert.async();
  setVideoMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      stopMedia(done);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('playNormalTest001(put)', MediaPlayerProfileNormalTest.playNormalTest001);

/**
 * メディアの一時停止と再生再開を続けてテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/pause?serviceId=xxx<br/>
 *       /mediaplayer/stop?serviceId=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メディアが一時停止したあとに再生が再開されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.pauseAndResumeNormalTest001 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
     sleep(3 * 1000);
      sdk.put({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_PAUSE,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        assert.ok(true, 'pause ok. result=' + json.result);
        sdk.put({
          profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
          attribute: dConnectSDK.constants.mediaPlayer.ATTR_RESUME,
          params: {
            serviceId: serviceId
          }
        }).then(json => {
          assert.ok(true, 'resume ok. result=' + json.result);
          sleep(3 * 1000);
          stopMedia(done);
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
          done();
        });
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        done();
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      sleep(3 * 1000);
      stopMedia(done);
  });
};
QUnit.test('pauseAndResumeNormalTest001(put)', MediaPlayerProfileNormalTest.pauseAndResumeNormalTest001);

/**
 * メディア再生を停止するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メディアが停止されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.stopMediaNormalTest001 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    assert.ok(true, 'play ok. result=0');
    sleep(3 * 1000);
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_STOP,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      assert.ok(true, 'stop ok. result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    console.log("???:" + e);
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('stopMediaNormalTest001(put)', MediaPlayerProfileNormalTest.stopMediaNormalTest001);

/**
 * メディアを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxx&mediaId=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.audiomediaNormalTest002 = function(assert) {
  let done = assert.async();
  getAudioMediaList().then(list => {
    if (list.count < 1) {
      assert.ok(false, 'this device does not have a media.');
      done();
      return;
    }

    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
      params: {
        serviceId: getCurrentServiceId(),
        mediaId: list.media[0].mediaId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result + ', set mediaId=' + list.media[0].mediaId);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('audiomediaNormalTest002(put)', MediaPlayerProfileNormalTest.audiomediaNormalTest002);

/**
 * 設定したメディアを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/media?serviceId=xxxx&accessToken=xxx&mediaId=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.audiomediaNormalTest001 = function(assert) {
  let done = assert.async();
  getAudioMediaList().then(list => {
    if (list.count < 1) {
      assert.ok(false, 'this device does not have a media.');
      done();
      return;
    }
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
      params: {
        serviceId: getCurrentServiceId(),
        mediaId: list.media[0].mediaId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result + ', media=' + json.title);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('audiomediaNormalTest001(get)', MediaPlayerProfileNormalTest.audiomediaNormalTest001);

/**
 * メディアを再生するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/play?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・音楽が再生されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.audioplayNormalTest001 = function(assert) {
  let done = assert.async();
  sleep(1 * 1000);
  setAudioMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      stopMedia(done);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('audioplayNormalTest001(put)', MediaPlayerProfileNormalTest.audioplayNormalTest001);

/**
 * メディアの一時停止と再生再開を続けてテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/pause?serviceId=xxx<br/>
 *       /mediaplayer/stop?serviceId=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メディアが一時停止したあとに再生が再開されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.audiopauseAndResumeNormalTest001 = function(assert) {
  let done = assert.async();
  playAudioMedia().then(serviceId => {
      sleep(3 * 1000);
      sdk.put({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_PAUSE,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        assert.ok(true, 'pause ok. result=' + json.result);
        sdk.put({
          profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
          attribute: dConnectSDK.constants.mediaPlayer.ATTR_RESUME,
          params: {
            serviceId: serviceId
          }
        }).then(json => {
          assert.ok(true, 'resume ok. result=' + json.result);
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        }).finally(() => {
          sleep(3 * 1000);
          stopMedia(done);
        });
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        done();
      });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('audiopauseAndResumeNormalTest001(put)', MediaPlayerProfileNormalTest.audiopauseAndResumeNormalTest001);

/**
 * メディア再生を停止するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・音楽が停止されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.audiostopMediaNormalTest001 = function(assert) {
  let done = assert.async();
  playAudioMedia().then(serviceId => {
    let params = {
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_STOP,
      params: {
        serviceId: serviceId
      }
    };
    sdk.put(params).then(json => {
      assert.ok(true, 'result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('audiostopMediaNormalTest001(put)', MediaPlayerProfileNormalTest.audiostopMediaNormalTest001);

/**
 * メディアの再生状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/playstatus?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.playStatusNormalTest001 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY_STATUS,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      assert.ok(true, 'status=' + json.status);
      sleep(3 * 1000);
      stopMedia(done);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('playStatusNormalTest001(get)', MediaPlayerProfileNormalTest.playStatusNormalTest001);

/**
 * メディアの再生位置を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・再生位置が取得できること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.seekNormalTest001 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
     sleep(MEDIA_TIMEOUT * 1000);
      sdk.get({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        assert.ok(json.pos >= 0, 'pos=' + json.pos);
        sleep(3 * 1000);
        stopMedia(done);
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        done();
      });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('seekNormalTest001(get)', MediaPlayerProfileNormalTest.seekNormalTest001);

/**
 * メディアの再生位置を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxx&pos=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・再生位置が変更されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.seekNormalTest002 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      params: {
        serviceId: serviceId,
        pos: 0
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      stopMedia(done);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('seekNormalTest002(put)', MediaPlayerProfileNormalTest.seekNormalTest002);

/**
 * メディアの再生位置を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・再生位置が取得できること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.seekNormalTest003 = function(assert) {
  let done = assert.async();
  playAudioMedia().then(serviceId => {
      sleep(MEDIA_TIMEOUT * 1000);
      sdk.get({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        assert.ok(json.pos >= 0, 'pos=' + json.pos);
        sleep(3 * 1000);
        stopMedia(done);
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        done();
      });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('seekNormalTest003(get)', MediaPlayerProfileNormalTest.seekNormalTest003);

/**
 * メディアの再生位置を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxxx&accessToken=xxx&pos=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・再生位置が変更されること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.seekNormalTest004 = function(assert) {
  let done = assert.async();
  playAudioMedia().then(serviceId => {
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_SEEK,
      params: {
        serviceId: serviceId,
        pos: 0
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      sleep(3 * 1000);
      stopMedia(done);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('seekNormalTest004(put)', MediaPlayerProfileNormalTest.seekNormalTest004);

/**
 * メディアのミュート状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/mute?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.muteNormalTest001 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MUTE,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.mute != undefined, 'mute=' + json.mute);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    }).finally(() => {
      sleep(3 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('mute(get)', MediaPlayerProfileNormalTest.muteNormalTest001);

/**
 * メディアのミュート状態を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/mute?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.muteNormalTest002 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sleep(MEDIA_TIMEOUT * 1000);
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MUTE,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      assert.ok(true, 'put ok. result=' + json.result);
      sleep(3 * 1000);
      sdk.get({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_MUTE,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        assert.ok(true, 'get ok. result=' + json.result);
        assert.ok(json.mute == true, 'mute=' + json.mute);
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      }).finally(() => {
        sleep(2 * 1000);
        stopMedia(done);
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      sleep(2 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('muteNormalTest002(put)', MediaPlayerProfileNormalTest.muteNormalTest002);

/**
 * メディアのミュート状態を解除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediaplayer/mute?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.muteNormalTest003 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sleep(MEDIA_TIMEOUT * 1000);
    sdk.delete({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MUTE,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      assert.ok(true, 'delete ok. result=' + json.result);
      sleep(3 * 1000);
      sdk.get({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_MUTE,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        assert.ok(true, 'get ok. result=' + json.result);
        assert.ok(json.mute == false, 'mute=' + json.mute);

        sleep(2 * 1000);
        stopMedia(done);
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        stopMedia(done);
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
      sleep(2 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('muteNormalTest003(delete)', MediaPlayerProfileNormalTest.muteNormalTest003);

/**
 * メディアの再生音量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/seek?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.volumeNormalTest001 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.volume >= 0, 'volume=' + json.volume);
      sleep(2 * 1000);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    }).finally(() => {
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('volumeNormalTest001(get)', MediaPlayerProfileNormalTest.volumeNormalTest001);

/**
 * メディアの再生音量を0.5に設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediaplayer/seek?serviceId=xxx&accessToken=xxx&volume=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.volumeNormalTest002 = function(assert) {
  let done = assert.async();
  playVideoMedia().then(serviceId => {
    sleep(MEDIA_TIMEOUT * 1000);
    sdk.put({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_VOLUME,
      params: {
        serviceId: serviceId,
        volume: 0.5
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }).finally(() => {
      sleep(3 * 1000);
      stopMedia(done);
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    stopMedia(done);
  });
};
QUnit.test('volume(put)', MediaPlayerProfileNormalTest.volumeNormalTest002);

/**
 * メディアの再生状態取得イベントするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediaplayer/onstatuschange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.onStatusChangeNormalTest001 = function(assert) {
    let params = {
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_ON_STATUS_CHANGE,
      params: {
        serviceId: getCurrentServiceId()
      }
    };
    openWebsocket(params, assert, 10000, message => {
      let json = JSON.parse(message);
      if (json.profile === dConnectSDK.constants.mediaPlayer.PROFILE_NAME
         && json.attribute === dConnectSDK.constants.mediaPlayer.ATTR_ON_STATUS_CHANGE) {
        assert.ok(true, message);
        return true;
      };
      return false;
    });
};
QUnit.test('onStatusChangeNormalTest001', MediaPlayerProfileNormalTest.onStatusChangeNormalTest001);

/**
 * テスト終了。再生停止。
 */
QUnit.test('stopMedia', MediaPlayerProfileNormalTest.stopMediaNormalTest001);
