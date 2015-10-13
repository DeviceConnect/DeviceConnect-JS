module('MediaStreamRecording Profile Normal Test', {
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
var MediaStreamRecordingProfileNormalTest = {};

MediaStreamRecordingProfileNormalTest.record = function(success_cb, fail_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      success_cb(accessToken, serviceId, json.uri);
    }, function(errorCode, errorMessage) {
      fail_cb(errorCode, errorMessage);
    });
  }, function(errorCode, errorMessage) {
    error_cb(errorCode, errorMessage);
  });
};

MediaStreamRecordingProfileNormalTest.pause = function(success_cb, fail_cb, error_cb) {
  MediaStreamRecordingProfileNormalTest.record(function(accessToken, serviceId, uri) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      success_cb(accessToken, serviceId, uri);
    }, fail_cb);
  } , fail_cb, error_cb);
};

MediaStreamRecordingProfileNormalTest.stop = function(accessToken, serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
  }, function(errorCode, errorMessage) {
  });
};

/**
 * デバイスが利用可能なカメラ一覧を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastream_recording/mediarecorder?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.mediarecorderNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MEDIARECORDER);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.recorders !== undefined,
          'json.recorders=' + JSON.stringify(json.recorders))
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('mediarecorderNormalTest001(get)', MediaStreamRecordingProfileNormalTest.mediarecorderNormalTest001);
}
/**
 * デバイスがサポートしている撮影、録画、録音のオプションを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastream_recording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 *
 */
MediaStreamRecordingProfileNormalTest.optionsNormalTest001 = function(assert) {
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
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('optionsNormalTest001(get)', MediaStreamRecordingProfileNormalTest.optionsNormalTest001);
}
/**
 * デバイスの録画、録音オプションを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.optionsNormalTest002 = function(assert) {
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
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('optionsNormalTest002(put)', MediaStreamRecordingProfileNormalTest.optionsNormalTest002);
}
/**
 * デバイスに写真撮影を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastream_recording/takephoto?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.takePhotoNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_TAKE_PHOTO);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(true, 'uri=' + json.uri);

      var loadflag = false;
      var img = document.getElementById('image');
      img.onload = function() {
        assert.ok(true, 'load ok');
        loadflag = true;
      };
      img.onerror = function() {
        assert.ok(false, 'load error');
      };
      img.src = json.uri;
      setTimeout(function() {
        assert.ok(loadflag, 'image load ok');
        QUnit.start();
      }, 5000);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('takePhotoNormalTest001', MediaStreamRecordingProfileNormalTest.takePhotoNormalTest001);
}
/**
 * デバイスに動画撮影を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastream_recording/record?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.recordNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RECORD);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok(true, 'uri=' + json.uri);

          setTimeout(function() {
                var builder = new dConnect.URIBuilder();
                builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
                builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
                builder.setServiceId(serviceId);
                builder.setAccessToken(accessToken);
                var uri = builder.build();
                dConnect.put(uri, null, null, function(json) {
                  assert.ok(true, "stop ok");
                  QUnit.start();
                }, function(errorCode, errorMessage) {
                  assert.ok(true,
                      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                  QUnit.start();
                });
              }, 5000);
        }, function(errorCode, errorMessage) {
              assert.ok(true,
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('recordNormalTest001', MediaStreamRecordingProfileNormalTest.recordNormalTest001);
}
/**
 * デバイスに録画のミュートを指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/mutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.mutetrackNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_MUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('mutetrackNormalTest001', MediaStreamRecordingProfileNormalTest.mutetrackNormalTest001);
}
/**
 * デバイスに録画のミュート解除を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/umnmutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.unmutetrackNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_UNMUTETRACK);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
            assert.ok(true, 'result=' + json.result);
            QUnit.start();
          }, function(errorCode, errorMessage) {
            assert.ok(checkErrorCode(errorCode),
                'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            QUnit.start();
          });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('unmutetrackNormalTest001', MediaStreamRecordingProfileNormalTest.unmutetrackNormalTest001);
}
/**
 * デバイスに録画の一時停止を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/pause?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.pauseAndResumeNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  MediaStreamRecordingProfileNormalTest.record(function(accessToken, serviceId, uri) {
    setTimeout(function() {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_PAUSE);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'pause ok. result=' + json.result);
        setTimeout(function() {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_RESUME);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(true, 'resume ok. result=' + json.result);
              QUnit.start();
          }, function(errorCode, errorMessage){
              assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            }
          );
        }, 1500);
      }, function(errorCode, errorMessage) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, 1500);
  }, function(errorCode, errorMessage) {
    assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('pauseAndResumeNormalTest001', MediaStreamRecordingProfileNormalTest.pauseAndResumeNormalTest001);
}
/**
 * デバイス動画撮影の停止を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/stop?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.stopNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  searchTestService(function(accessToken, serviceId, uri) {
    setTimeout(function(){
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_STOP);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode) || (errorCode == dConnect.constants.ErrorCode.ILLEGAL_DEVICE_STATE),
          'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
    }, 2000);
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode) || errorCode == dConnect.constants.ErrorCode.ILLEGAL_DEVICE_STATE, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('stopNormalTest001', MediaStreamRecordingProfileNormalTest.stopNormalTest001);
}
/**
 * プレビュー通知イベントを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/ondataavailable?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.onDataAvailableNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_DATA_AVAILABLE);
  openWebsocket(builder, assert, 5000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.media_stream_recording.PROFILE_NAME &&
        json.attribute === dConnect.constants.media_stream_recording.ATTR_ON_DATA_AVAILABLE) {
      var media = json.media;
      var img = document.getElementById('preview');
      img.src = json.uri;
      assert.ok(true, 'uri=' + media.uri);
      return true;
    }
    return false;
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('onDataAvailableNormalTest001', MediaStreamRecordingProfileNormalTest.onDataAvailableNormalTest001);
}
/**
 * プレビューを表示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/preview?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * ・uriにwebサーバへのURIがあること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.onPreviewNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
  builder.setAttribute('preview');
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.media_stream_recording.PROFILE_NAME && json.attribute === 'preview') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.asyncTest('onPreviewNormalTest001', MediaStreamRecordingProfileNormalTest.onPreviewNormalTest001);
}
/**
 * プレビュー通知イベントを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastream_recording/onphoto?serviceId=xxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * ・撮影イベントが送られてくること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.onPhotoNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.media_stream_recording.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.media_stream_recording.ATTR_ON_PHOTO);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.media_stream_recording.PROFILE_NAME &&
        json.attribute === dConnect.constants.media_stream_recording.ATTR_ON_PHOTO) {
      var photo = json.photo;
      var img = document.getElementById('image');
      if (DEVICE_CONNECT_HOST === 'localhost') {
        img.src = photo.uri;
      } else {
        img.src = photo.uri.replace('localhost', DEVICE_CONNECT_HOST);
      }
      assert.ok(true, 'uri=' + photo.uri);
      return true;
    }
    return false;
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.asyncTest('onPhotoNormalTest001', MediaStreamRecordingProfileNormalTest.onPhotoNormalTest001);
}