module('MediaStreamRecording Profile Abnormal Test', {
  setup: function() {
    init();
  }, teardown: function() {
    var img = document.getElementById('images');
    img.style.visibility = 'hidden';
  }
});

/**
 * MediaStreamRecordingプロファイルのテストを行うクラス。
 * @class
 */
var MediaStreamRecordingProfileAbnormalTest = {};

MediaStreamRecordingProfileAbnormalTest.stopRecord = function(){
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      console.log('record stop success.');
    }, function(errorCode, errorMessage) {
      console.log('record stop failed.');
    });

  }, function(errorCode, errorMessage) {
    console.log('record stop request failure');
  });
}

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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MEDIARECORDER);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('mediarecorderAbnormalTest001(Calling a put method that does not support.)', MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MEDIARECORDER);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('mediarecorderAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MEDIARECORDER);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('mediarecorderAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.mediarecorderAbnormalTest003);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest001(Calling a put method that does not support.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest002(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest003(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest003);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 100);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest004()', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest004);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest005()', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest005);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, '#$%!?^#$%!?^');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest006(target is special character.)',
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, '');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest007(target is empty.)', MediaStreamRecordingProfileAbnormalTest.pictureAbnormalTest007);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'abcdefgabcdefg');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('pictureAbnormalTest008()',
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};

if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest001(Calling a put method that does not support.)',
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
 QUnit.asyncTest('recordAbnormalTest002(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest003(Calling a get method that does not support.)',
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 100);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest004()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest004);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest005()',
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, '#$%!?^#$%!?^');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest006()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest006);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, '');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(true, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest007(target is empty.)', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest007);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'abcdefgabcdefg');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest008()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest008);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TIME_SLICE, 'あいうえおあいうえおあいうえお');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest010()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest010);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TIME_SLICE, '#$%!?^#$%!?^');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest011()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest011);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TIME_SLICE, '');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(true, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest012(timeslice is empty.)', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest012);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TIME_SLICE, 'abcdefgabcdefg');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest013()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest013);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TIME_SLICE, -1);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordAbnormalTest014()', MediaStreamRecordingProfileAbnormalTest.recordAbnormalTest014);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    QUnit.start();
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest001()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest002()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest003()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest003);
}
/**
 * targetを数値に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 100);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest004()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest004);
}
/**
 * targetを日本語の文字列に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target='あいうえおあいうえおあいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'あいうえおあいうえおあいうえお');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest005()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest005);
}
/**
 * targetを特殊文字に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target='#$%!?^#$%!?^'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, '#$%!?^#$%!?^');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest006()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest006);
}
/**
 * targetを空文字に設定して動画撮影に対して一時停止リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx&target=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, '');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest007(target is empty.)', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest007);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'abcdefgabcdefg');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    QUnit.start();
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest008()', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest008);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'media_test');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAbnormalTest009(media_test does not exist.)', MediaStreamRecordingProfileAbnormalTest.pauseAbnormalTest009);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'media_test');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10 || errorCode == 16) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('resumeAbnormalTest001(media_test does not exist.)', MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest001);
}
/**
 * 定義されていないGETメソッドで動画撮影に対して録画再開リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/resume?serviceId=xxx&accessToken=xxx&target='media_test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'media_test');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    QUnit.start();
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('resumeAbnormalTest002(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'media_test');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('resumeAbnormalTest003(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest003);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.media_stream_recording.PARAM_TARGET, 'media_test');
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('resumeAbnormalTest004(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest004);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RESUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 16) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('resumeAbnormalTest005', MediaStreamRecordingProfileAbnormalTest.resumeAbnormalTest005);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('muteAbnormalTest001(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('muteAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('muteAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest003);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
			dConnect.put(uri, null, null, function(json) {
			  assert.ok(false, 'json: ' + JSON.stringify(json));
			  QUnit.start();
			}, function(errorCode, errorMessage) {
			  if (errorCode == 16) {
				assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
			  } else if (checkErrorCode(errorCode)) {
				assert.ok(true, 'not support');
			  } else {
				assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
			  }
			  QUnit.start();
			});
        }, function(errorCode, errorMessage) {
          if (errorCode == 16) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('muteAbnormalTest004(Already muted.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest004);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_UNMUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('muteAbnormalTest001(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.muteAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_UNMUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('unmuteAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_UNMUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('unmuteAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest003);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_UNMUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
			dConnect.put(uri, null, null, function(json) {
			  assert.ok(true, 'json: ' + JSON.stringify(json));
			  QUnit.start();
			}, function(errorCode, errorMessage) {
			  if (errorCode == 3) {
				assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
			  } else if (checkErrorCode(errorCode)) {
				assert.ok(true, 'not support');
			  } else {
				assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
			  }
			  QUnit.start();
			});
        }, function(errorCode, errorMessage) {
          if (errorCode == 16) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('unmuteAbnormalTest004(Already unmuted.)', MediaStreamRecordingProfileAbnormalTest.unmuteAbnormalTest004);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('stopAbnormalTest001(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('stopAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('stopAbnormalTest003(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest003);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'json: ' + JSON.stringify(json));

      setTimeout(function(){
        dConnect.put(uri, null, null, function(json){
          assert.ok(false, 'json: ' + JSON.stringify(json));
        }, function(errorCode, errorMessage) {
          if (errorCode == 16) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
      }, 2000);
    }, function(errorCode, errorMessage) {
      if (errorCode == 16) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('stopAbnormalTest004(Already stopped.)', MediaStreamRecordingProfileAbnormalTest.stopAbnormalTest004);
}
/**
 * デバイスの録画、録音オプションを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_OPTIONS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('optionsAbnormalTest001()', MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest001);
}
/**
 * デバイスの録画、録音オプションを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_OPTIONS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('optionsAbnormalTest002()', MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest002);
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
MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_OPTIONS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('optionsAbnormalTest003(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest003);
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
MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_OPTIONS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('optionsAbnormalTest004(Calling a delete method that does not support.)', MediaStreamRecordingProfileAbnormalTest.optionsAbnormalTest004);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_PHOTO);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
           } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('onPhotoAbnormalTest001', MediaStreamRecordingProfileAbnormalTest.onPhotoAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_PHOTO);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('onPhotoAbnormalTest002', MediaStreamRecordingProfileAbnormalTest.onPhotoAbnormalTest002);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_RECORDING_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('onRecordingChangeAbnormalTest001', MediaStreamRecordingProfileAbnormalTest.onRecordingChangeAbnormalTest001);
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
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_RECORDING_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('onRecordingChangeAbnormalTest002', MediaStreamRecordingProfileAbnormalTest.onRecordingChangeAbnormalTest002);
}

/**
 * 定義されていないGETメソッドで録画プレビュー通知イベントにアクセスする異常系テスト。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/ondataavailable?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.onDataAvailableAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_DATA_AVAILABLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('onDataAvailableAbnormalTest001', MediaStreamRecordingProfileAbnormalTest.onDataAvailableAbnormalTest001);
}
/**
 * 定義されていないPOSTメソッドで録画プレビュー通知イベントにアクセスする異常系テスト。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/ondataavailable?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.onDataAvailableAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_DATA_AVAILABLE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('onDataAvailableAbnormalTest002', MediaStreamRecordingProfileAbnormalTest.onDataAvailableAbnormalTest002);
}

/**
 * 定義されていないGETメソッドでプレビューAPIリクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/preview?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが1であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileAbnormalTest.previewAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PREVIEW);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('previewAbnormalTest001(Calling a get method that does not support.)', MediaStreamRecordingProfileAbnormalTest.previewAbnormalTest001);
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
MediaStreamRecordingProfileAbnormalTest.previewAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PREVIEW);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 8) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('previewAbnormalTest002(Calling a post method that does not support.)', MediaStreamRecordingProfileAbnormalTest.previewAbnormalTest002);
}
