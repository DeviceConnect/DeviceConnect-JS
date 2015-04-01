QUnit.config.reorder = false;

module('MediaPlayer Profile Normal Test', {
  setup: function() {
    TEST_TIMEOUT = 500000;
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&mimeType='audio/'<br/>
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
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'audio/');
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&mimeType='video/'<br/>
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
    builder.addParameter(dConnect.constants.media_player.PARAM_MIME_TYPE, 'video/');
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&mimeType=1<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&mimeType='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz....'<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&order='duration,asc'<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&order='duration,desc'<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&query='a'<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&query=1<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&query='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz....'<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&limit=0.<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&limit=10.<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx<br/>
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
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxx&offset=3<br/>
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
 * Path: /media_player/media_list?serviceId=xxxxaccessToken=xxxx&offset=10000000<br/>
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
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxx&mediaId=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaNormalTest001 = function(assert) {
  getMediaList(function(accessToken, serviceId, list) {
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
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxx&mediaId=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.mediaNormalTest002 = function(assert) {
  getMediaList(function(accessToken, serviceId, list) {
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
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
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
 * Path: /media_player/play?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.playNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('playNormalTest001(put)', MediaPlayerProfileNormalTest.playNormalTest001);

/**
 * メディア再生を停止するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.stopMediaNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    setTimeout(function() {
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, 3 * 1000);
  }, function(errorCode, errorMessage, supported) {
    assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('stopMediaNormalTest001(put)', MediaPlayerProfileNormalTest.stopMediaNormalTest001);

/**
 * メディアの再生状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /media_player/play_status?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.playStatusNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    setTimeout(function() {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY_STATUS);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, 3 * 1000);
  }, function(errorCode, errorMessage) {
    assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('playStatusNormalTest001(get)', MediaPlayerProfileNormalTest.playStatusNormalTest001);

/**
 * メディアの再生位置を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.seekNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    setTimeout(function() {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, 3 * 1000);
  }, function(errorCode, errorMessage, supported) {
    assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekNormalTest001(get)', MediaPlayerProfileNormalTest.seekNormalTest001);

/**
 * メディアの再生位置を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxx&pos=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.seekNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_POS, 0);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage, supported) {
    assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekNormalTest002(put)', MediaPlayerProfileNormalTest.seekNormalTest002);

/**
 * メディアのミュート状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /media_player/mute?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.muteNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.mute != undefined, 'mute=' + json.mute);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mute(get)', MediaPlayerProfileNormalTest.muteNormalTest001);

/**
 * メディアのミュート状態を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/mute?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.muteNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(res) {
      assert.ok(true, 'put ok. result=' + res.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(errorCode > 0, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('muteNormalTest002(put)', MediaPlayerProfileNormalTest.muteNormalTest002);

/**
 * メディアのミュート状態を解除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /media_player/mute?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.muteNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(res) {
      assert.ok(true, 'delete ok. result=' + res.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('muteNormalTest003(delete)', MediaPlayerProfileNormalTest.muteNormalTest003);

/**
 * メディアの再生音量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /media_player/seek?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.volumeNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.volume >= 0, 'volume=' + json.volume);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeNormalTest001(get)', MediaPlayerProfileNormalTest.volumeNormalTest001);

/**
 * メディアの再生音量を0.5に設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxx&accessToken=xxx&volume=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・レスポンスが返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileNormalTest.volumeNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, 0.5);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(errorCode > 0, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volume(put)', MediaPlayerProfileNormalTest.volumeNormalTest002);

/**
 * メディアの再生状態取得イベントするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /media_player/onstatuschange?serviceId=xxx&accessToken=xxx<br/>
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

function getMediaList(success_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, 'duration,desc');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, error_cb);
  }, error_cb);
}

function setMedia(success_cb, error_cb) {
  getMediaList(function(accessToken, serviceId, list) {
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
