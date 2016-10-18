QUnit.config.reorder = false;
var MEDIA_TIMEOUT = 3;
module('MediaPlayer Profile Normal Test', {
  setup: function() {
    TEST_TIMEOUT = 120000;
    if (DEVICE_NAME === "Chromecast") {
      MEDIA_TIMEOUT = 40;
    }
    init();
  }
});


/**
 * MediaPlayerProfileのテストを行うクラス。
 * @class
 */
var MediaPlayerProfileNormalTest = {};

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest001(get)', MediaPlayerProfileNormalTest.mediaListNormalTest001);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'audio/mpeg');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest002', MediaPlayerProfileNormalTest.mediaListNormalTest002);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'video/mp4');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest003', MediaPlayerProfileNormalTest.mediaListNormalTest003);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 1);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest004(mimeType is number.)', MediaPlayerProfileNormalTest.mediaListNormalTest004);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest005(mimeType is long string.)', MediaPlayerProfileNormalTest.mediaListNormalTest005);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, 'duration,asc');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      var duration = 0;
      for (var i = 0; i < json.media.length; i++) {
        assert.ok(duration <= json.media[i].duration, 'duration=' + json.media[i].duration + ' [title=' + json.media[i].title + ']');
        duration = json.media[i].duration;
      }
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest006(order is duration,asc)', MediaPlayerProfileNormalTest.mediaListNormalTest006);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, 'duration,desc');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      var duration = Number.MAX_VALUE;
      for (var i = 0; i < json.media.length; i++) {
        assert.ok(duration >= json.media[i].duration, 'duration=' + json.media[i].duration + ' [title=' + json.media[i].title + ']');
        duration = json.media[i].duration;
      }
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest007(order is duration,desc)', MediaPlayerProfileNormalTest.mediaListNormalTest007);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_QUERY, 'a');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest008(query is special characters.)', MediaPlayerProfileNormalTest.mediaListNormalTest008);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_QUERY, 1);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest009(query is number)', MediaPlayerProfileNormalTest.mediaListNormalTest009);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_QUERY, 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest010(query is long string)', MediaPlayerProfileNormalTest.mediaListNormalTest010);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_LIMIT, 0);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest011(limit is 0)', MediaPlayerProfileNormalTest.mediaListNormalTest011);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_LIMIT, 10);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest012(limit is 10)', MediaPlayerProfileNormalTest.mediaListNormalTest012);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest013(limit is 10)', MediaPlayerProfileNormalTest.mediaListNormalTest013);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_OFFSET, 3);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.count >= 0, 'count=' + json.count);
      assert.ok(json.media !== undefined, 'media is ok.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest014(offset is 3)', MediaPlayerProfileNormalTest.mediaListNormalTest014);

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_OFFSET, 10000000);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'json: ' + JSON.stringify(json));
      assert.ok(json.media[0] == undefined, 'listed media is 0.');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaListNormalTest015(offest is big number)', MediaPlayerProfileNormalTest.mediaListNormalTest015);

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
  getVideoMediaList(function(accessToken, serviceId, list) {
    if (list.count < 1) {
      assert.ok(false, 'This device has no media.');
      QUnit.start();
      return;
    }

    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, list.media[0].mediaId);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaNormalTest001(get)', MediaPlayerProfileNormalTest.mediaNormalTest001);

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
  getVideoMediaList(function(accessToken, serviceId, list) {
    if (list.count < 1) {
      assert.ok(false, 'This device has no media.');
      QUnit.start();
      return;
    }

    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, list.media[0].mediaId);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mediaNormalTest002(put)', MediaPlayerProfileNormalTest.mediaNormalTest002);

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
  setVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('playNormalTest001(put)', MediaPlayerProfileNormalTest.playNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId) {
     sleep(3 * 1000);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_PAUSE);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'pause ok. result=' + json.result);
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          if (json.result === dConnect.constants.RESULT_ERROR) {
            if (supported) {
              assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_ATTRIBUTE, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
            } else {
              assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_PROFILE, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
            }
          } else {
            assert.ok(true, 'resume ok. result=' + json.result);
          }
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          sleep(3 * 1000);
          dConnect.put(uri, null, null, function(json) {
            assert.ok(true, 'result=' + json.result);
            QUnit.start();
          }, function(errorCode, errorMessage) {
            assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
            QUnit.start();
          });
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
    if (supported) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }

  });
};
QUnit.asyncTest('pauseAndResumeNormalTest001(put)', MediaPlayerProfileNormalTest.pauseAndResumeNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    sleep(3 * 1000);
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('stopMediaNormalTest001(put)', MediaPlayerProfileNormalTest.stopMediaNormalTest001);

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
  getAudioMediaList(function(accessToken, serviceId, list) {
    if (list.count < 1) {
      assert.ok(false, 'this device does not have a media.');
      QUnit.start();
      return;
    }

    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, list.media[0].mediaId);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result + ', set mediaId=' + list.media[0].mediaId);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('audiomediaNormalTest002(put)', MediaPlayerProfileNormalTest.audiomediaNormalTest002);

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
  getAudioMediaList(function(accessToken, serviceId, list) {
    if (list.count < 1) {
      assert.ok(false, 'this device does not have a media.');
      QUnit.start();
      return;
    }

    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, list.media[0].mediaId);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result + ', media=' + json.mediaId);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('audiomediaNormalTest001(get)', MediaPlayerProfileNormalTest.audiomediaNormalTest001);

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
  setAudioMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('audioplayNormalTest001(put)', MediaPlayerProfileNormalTest.audioplayNormalTest001);

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
  playAudioMedia(function(accessToken, serviceId) {
      sleep(3 * 1000);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_PAUSE);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'pause ok. result=' + json.result);

        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'resume ok. result=' + json.result);
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          sleep(3 * 1000);
          dConnect.put(uri, null, null, function(json) {
            assert.ok(true, 'result=' + json.result);
            QUnit.start();
          }, function(errorCode, errorMessage) {
            assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
            QUnit.start();
          });

        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('audiopauseAndResumeNormalTest001(put)', MediaPlayerProfileNormalTest.audiopauseAndResumeNormalTest001);

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
  playAudioMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('audiostopMediaNormalTest001(put)', MediaPlayerProfileNormalTest.audiostopMediaNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY_STATUS);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(true, 'status=' + json.status);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });

    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('playStatusNormalTest001(get)', MediaPlayerProfileNormalTest.playStatusNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId, json) {
     sleep(MEDIA_TIMEOUT * 1000);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(json.pos >= 0, 'pos=' + json.pos);

        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        sleep(3 * 1000);
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekNormalTest001(get)', MediaPlayerProfileNormalTest.seekNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_POS, 0);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekNormalTest002(put)', MediaPlayerProfileNormalTest.seekNormalTest002);

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
  playAudioMedia(function(accessToken, serviceId, json) {
      sleep(MEDIA_TIMEOUT * 1000);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(json.pos >= 0, 'pos=' + json.pos);
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        sleep(3 * 1000);
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekNormalTest003(get)', MediaPlayerProfileNormalTest.seekNormalTest003);

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
  playAudioMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_POS, 0);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });

    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekNormalTest004(put)', MediaPlayerProfileNormalTest.seekNormalTest004);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.mute != undefined, 'mute=' + json.mute);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });

    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mute(get)', MediaPlayerProfileNormalTest.muteNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    sleep(MEDIA_TIMEOUT * 1000);
    dConnect.put(uri, null, null, function(res) {
      assert.ok(true, 'put ok. result=' + res.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'get ok. result=' + json.result);
        assert.ok(json.mute == true, 'mute=' + json.mute);
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        sleep(2 * 1000);
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          QUnit.start();
        });

      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        sleep(2 * 1000);
         dConnect.put(uri, null, null, function(json) {
             assert.ok(true, 'result=' + json.result);
             QUnit.start();
         }, function(errorCode, errorMessage) {
             assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
             QUnit.start();
         });
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(2 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('muteNormalTest002(put)', MediaPlayerProfileNormalTest.muteNormalTest002);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    sleep(MEDIA_TIMEOUT * 1000);
    dConnect.delete(uri, null, function(res) {
      assert.ok(true, 'delete ok. result=' + res.result);

      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.get(uri, null, function(json) {
        if (json.result === dConnect.constants.RESULT_ERROR) {
          if (supported) {
            assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
          } else {
            assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_PROFILE, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
          }
          QUnit.start();
        } else {
            assert.ok(true, 'get ok. result=' + json.result);
            assert.ok(json.mute == false, 'mute=' + json.mute);

            var builder = new dConnect.URIBuilder();
            builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
            builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
            builder.setServiceId(serviceId);
            builder.setAccessToken(accessToken);
            var uri = builder.build();
            sleep(2 * 1000);
            dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
        }
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(2 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('muteNormalTest003(delete)', MediaPlayerProfileNormalTest.muteNormalTest003);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.volume >= 0, 'volume=' + json.volume);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(2 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeNormalTest001(get)', MediaPlayerProfileNormalTest.volumeNormalTest001);

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
  playVideoMedia(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, 0.5);
    var uri = builder.build();
    sleep(MEDIA_TIMEOUT * 1000);
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      sleep(3 * 1000);
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volume(put)', MediaPlayerProfileNormalTest.volumeNormalTest002);

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
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_ON_STATUS_CHANGE);
    openWebsocket(builder, assert, 5000, function(message) {
      var json = JSON.parse(message);
      if (json.profile === dConnect.constants.media_player.PROFILE_NAME && json.attribute === dConnect.constants.media_player.ATTR_ON_STATUS_CHANGE) {
        assert.ok(true, message);
        return true;
      };
      return false;
    });
};
QUnit.asyncTest('onStatusChangeNormalTest001', MediaPlayerProfileNormalTest.onStatusChangeNormalTest001);

/**
 * テスト終了。再生停止。
 */
QUnit.asyncTest('stopMedia', MediaPlayerProfileNormalTest.stopMediaNormalTest001);

function getVideoMediaList(success_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'video/');
    builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, 'duration,desc');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, error_cb);
  }, error_cb);
}

function setVideoMedia(success_cb, error_cb) {
  getVideoMediaList(function(accessToken, serviceId, list) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, list.media[0].mediaId);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        success_cb(accessToken, serviceId, json);
      }, error_cb);
  }, error_cb);
}

function playVideoMedia(success_cb, error_cb) {
  setVideoMedia(function(accessToken, serviceId) {
    sleep(1 * 1000);
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, error_cb);
  }, error_cb);
}

function getAudioMediaList(success_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'audio/mpeg');
    builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, 'duration,desc');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, error_cb);
  }, error_cb);
}

function setAudioMedia(success_cb, error_cb) {
  getAudioMediaList(function(accessToken, serviceId, list) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, list.media[0].mediaId);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, error_cb);
  }, error_cb);
}

function playAudioMedia(success_cb, error_cb) {
  setAudioMedia(function(accessToken, serviceId) {
    sleep(1 * 1000);
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, error_cb);
  }, error_cb);
}

