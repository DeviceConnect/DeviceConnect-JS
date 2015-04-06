module('MediaPlayer Profile Abnormal Test', {
  setup: function() {
    TEST_TIMEOUT = 500000;
    init();
  }
});

/**
 * MediaPlayerProfileのテストを行うクラス。
 * @class
 */
var MediaPlayerProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでメディアリストにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('medialistAbnormalTest001(Calling a put method that does not support.)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでメディアリストにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('mediaListAbnormalTest002(Calling a post method that does not support.)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでメディアリストにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('mediaListAbnormalTest003(Calling a delete method that does not support.)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest003);

/**
 * パラメータorderにdescを指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&order='desc'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, 'desc');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest004(order is desc)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest004);

/**
 * パラメータorderに特殊文字(!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|},!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|})を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&order='!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|},!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_ORDER, "!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|},!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}");
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest005(order is special characters.)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest005);

/**
 * パラメータlimitに-1を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&limit=-1<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_LIMIT, -1);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest006(limit is minus(-1))', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest006);

/**
 * パラメータlimitに10.6を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&limit=10.6<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_LIMIT, 10.6);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest007(limit is float(10.6))', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest007);

/**
 * パラメータlimitに文字列を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&limit='this is a test.'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_LIMIT, 'this is a test.');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest008(limit is string)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest008);

/**
 * パラメータoffsetに-1を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&offset=-1<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest010 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_OFFSET, -1);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest010(offest is -1)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest010);

/**
 * パラメータoffsetに2.5を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&offset=2.5<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest011 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_OFFSET, 2.5);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest011(offest is float(2.5))', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest011);

/**
 * パラメータoffsetに文字列を指定してメディアリストを取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/media_list?serviceId=xxxx&accessToken=xxxx&offset='this is test.'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaListAbnormalTest012 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_OFFSET, 'this is a test.');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaListAbnormalTest012(offest is string)', MediaPlayerProfileAbnormalTest.mediaListAbnormalTest012);

/**
 * 定義されていないPOSTメソッドでメディアにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('mediaAbnormalTest001(Calling a post method that does not support.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでメディアにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('mediaAbnormalTest002(Calling a delete method that does not support.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest002);

/**
 * mediaIdに空文字を指定してメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxx&mediaId=''<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, '');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaAbnormalTest003(mediaId is empty.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest003);

/**
 * mediaIdに特殊文字を指定してメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxxmediaId='!\"#$%&'()-^¥@[;:],./__?><}*+{`|~=s'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, "!\"#$%&'()-^¥@[;:],./__?><}*+{`|~=");
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaAbnormalTest004(mediaId is specail charactors.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest004);

/**
 * mediaIdを指定しないでメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaAbnormalTest005(mediaId is omitted)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest005);

/**
 * 存在しないmediaIdに指定してメディアを設定するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxx&mediaId='media_test'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.mediaAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, 'media_test');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('mediaAbnormalTest006(mediaId is not exist.)', MediaPlayerProfileAbnormalTest.mediaAbnormalTest006);

/**
 * 定義されていないPOSTメソッドでメディアを再生するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/play?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayAbnormalTest001 = function(assert) {
  setMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('PlayAbnormalTest001', MediaPlayerProfileAbnormalTest.PlayAbnormalTest001);

/**
 * 定義されていないGETメソッドでメディアを再生するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/play?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayAbnormalTest002 = function(assert) {
  setMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('PlayAbnormalTest002', MediaPlayerProfileAbnormalTest.PlayAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでメディアを再生するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/play?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayAbnormalTest003 = function(assert) {
  setMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('PlayAbnormalTest003', MediaPlayerProfileAbnormalTest.PlayAbnormalTest003);

function getMediaList(success_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MEDIA_LIST);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
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

function playMedia(success_cb, error_cb) {
  setMedia(function(accessToken, serviceId) {
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

/**
 * 定義されていないGETメソッドでメディアの再生を一時停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/pause?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PauseAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('PauseAbnormalTest001', MediaPlayerProfileAbnormalTest.PauseAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでメディアの再生を一時停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/pause?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PauseAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('PauseAbnormalTest002', MediaPlayerProfileAbnormalTest.PauseAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでメディアの再生を一時停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/pause?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PauseAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('PauseAbnormalTest003', MediaPlayerProfileAbnormalTest.PauseAbnormalTest003);

/**
 * 定義されていないGETメソッドで一時停止中のメディアの再生を再開するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/resume?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.ResumeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('ResumeAbnormalTest001', MediaPlayerProfileAbnormalTest.ResumeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで一時停止中のメディアの再生を再開するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/resume?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.ResumeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('ResumeAbnormalTest002', MediaPlayerProfileAbnormalTest.ResumeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで一時停止中のメディアの再生を再開するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/resume?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.ResumeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('ResumeAbnormalTest003', MediaPlayerProfileAbnormalTest.ResumeAbnormalTest003);

/**
 * 定義されていないGETメソッドで、再生中のメディアを停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /media_player/stop?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.StopAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('StopAbnormalTest001', MediaPlayerProfileAbnormalTest.StopAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで、再生中のメディアを停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/stop?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.StopAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('StopAbnormalTest002', MediaPlayerProfileAbnormalTest.StopAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで、再生中のメディアを停止するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/stop?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.StopAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('StopAbnormalTest003', MediaPlayerProfileAbnormalTest.StopAbnormalTest003);

/**
 * 定義されていないPUTメソッドで、現在の再生状態を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/media?serviceId=xxxx?<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY_STATUS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('PlayStatusAbnormalTest001', MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで、現在の再生状態を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/media?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY_STATUS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('PlayStatusAbnormalTest002', MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで、現在の再生状態を取得するテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/play_status?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_PLAY_STATUS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('PlayStatusAbnormalTest003', MediaPlayerProfileAbnormalTest.PlayStatusAbnormalTest003);

/**
 * 定義されていないPOSTメソッドでseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&mediaId='ZZZZZZZ'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, 'ZZZZZZZ');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('seekAbnormalTest001', MediaPlayerProfileAbnormalTest.seekAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&mediaId='ZZZZZZZ'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_MEDIA_ID, 'ZZZZZZZ');
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('seekAbnormalTest002', MediaPlayerProfileAbnormalTest.seekAbnormalTest002);

/**
 * position=10.5に設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&position=10.5<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest003 = function(assert) {
  playMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_POS, 10.5);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
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
              if (errorCode == 10) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('seekAbnormalTest003', MediaPlayerProfileAbnormalTest.seekAbnormalTest003);

/**
 * position=-10に設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&position=-10<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest004 = function(assert) {
  playMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_POS, -10);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
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
              if (errorCode == 10) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('seekAbnormalTest004', MediaPlayerProfileAbnormalTest.seekAbnormalTest004);

/**
 * position=100000000に設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&position=100000000<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest005 = function(assert) {
  playMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_POS, 100000000);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));

          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
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
                assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                QUnit.start();
              });
            }, 3 * 1000);
            QUnit.stop();

          });
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, "not support");
          } else {
            assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          }
          QUnit.start();

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
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
          }, 3 * 1000);
          QUnit.stop();

        });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('seekAbnormalTest005', MediaPlayerProfileAbnormalTest.seekAbnormalTest005);

/**
 * positionに文字列を設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&position='this is a test.'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest006 = function(assert) {
  playMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_POS, 'this is a test.');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
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
              if (errorCode == 10) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('seekAbnormalTest006', MediaPlayerProfileAbnormalTest.seekAbnormalTest006);

/**
 * positionに特殊文字を設定してseekにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /media_player/seek?serviceId=xxxx&accessToken=xxxx&position='!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}'<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.seekAbnormalTest007 = function(assert) {
  playMedia(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_SEEK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_POS, "!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}");
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_player.ATTR_STOP);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
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
              if (errorCode == 10) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              QUnit.start();

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
                  assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                  QUnit.start();
                });
              }, 3 * 1000);
              QUnit.stop();

            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('seekAbnormalTest007', MediaPlayerProfileAbnormalTest.seekAbnormalTest007);

/**
 * サポートされていないPOSTメソッドでmuteにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /media_player/mute?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.muteAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_MUTE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('muteAbnormalTest001', MediaPlayerProfileAbnormalTest.muteAbnormalTest001);

/**
 * volumeの値に-1を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/volume?serviceId=xxx&accessToken=xxx&volume=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, -1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('volumeAbnormalTest001', MediaPlayerProfileAbnormalTest.volumeAbnormalTest001);

/**
 * volumeの値に10を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/volume?serviceId=xxx&accessToken=xxx&volume=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, 10);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('volumeAbnormalTest002', MediaPlayerProfileAbnormalTest.volumeAbnormalTest002);

/**
 * volumeに文字列を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/volume?serviceId=xxx&accessToken=xxx&volume='this is a test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, 'this is a test.');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('volumeAbnormalTest003', MediaPlayerProfileAbnormalTest.volumeAbnormalTest003);

/**
 * volumeに特殊文字を指定して音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /media_player/volume?serviceId=xxx&accessToken=xxx&volume='!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, "!\"#$%&'()0=~|@[';:],./_<>?_+*}`{~|}");
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
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
QUnit.asyncTest('volumeAbnormalTest004', MediaPlayerProfileAbnormalTest.volumeAbnormalTest004);

/**
 * 定義されていないPOSTメソッドで音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /media_player/volume?serviceId=xxx&accessToken=xxx&volume=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, 0.5);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('volumeAbnormalTest005', MediaPlayerProfileAbnormalTest.volumeAbnormalTest005);

/**
 * 定義されていないDELETEメソッドで音量設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /media_player/volume?serviceId=xxx&accessToken=xxx&volume=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 */
MediaPlayerProfileAbnormalTest.volumeAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_player.PARAM_VOLUME, 0.5);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('volumeAbnormalTest006', MediaPlayerProfileAbnormalTest.volumeAbnormalTest006);

/**
 * 定義されていないGETメソッドでメディア状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /media_player/onstatuschange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_ON_STATUS_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('onStatusChangeAbnormalTest001', MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでメディア状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /media_player/onstatuschange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_player.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_player.ATTR_ON_STATUS_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 8) {
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
QUnit.asyncTest('onStatusChangeAbnormalTest001', MediaPlayerProfileAbnormalTest.onStatusChangeAbnormalTest002);
