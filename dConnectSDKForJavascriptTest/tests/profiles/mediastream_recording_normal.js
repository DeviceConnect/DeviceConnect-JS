QUnit.module('MediaStreamRecording Profile Normal Test', {
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
let MediaStreamRecordingProfileNormalTest = {};


/**
 * デバイスが利用可能なカメラ一覧を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/mediarecorder?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.mediarecorderNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MEDIARECORDER,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.recorders !== undefined,
        'json.recorders=' + JSON.stringify(json.recorders))
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('mediarecorderNormalTest001(get)', MediaStreamRecordingProfileNormalTest.mediarecorderNormalTest001);
}
/**
 * デバイスがサポートしている撮影、録画、録音のオプションを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mediastreamrecording/options?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 *
 */
MediaStreamRecordingProfileNormalTest.optionsNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_OPTIONS,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('optionsNormalTest001(get)', MediaStreamRecordingProfileNormalTest.optionsNormalTest001);
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
MediaStreamRecordingProfileNormalTest.optionsNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_OPTIONS,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    let imageSizes = json.recorders[0].imageSizes;
    let previewSizes = json.recorders[0].previewSizes;
    let mimeType = json.recorders[0].mimeType[0];
    let size;

    let params = {
      profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_OPTIONS,
      params: {
        serviceId: getCurrentServiceId(),
        mimeType: mimeType
      }
    };
    if (imageSizes !== undefined) {
      size = imageSizes[0];
      params.params[dConnectSDK.constants.mediaStreamRecording.PARAM_IMAGE_WIDTH] = size.width;
      params.params[dConnectSDK.constants.mediaStreamRecording.PARAM_IMAGE_HEIGHT] = size.height;
    }
    if (previewSizes !== undefined) {
      size = previewSizes[0];
      params.params[dConnectSDK.constants.mediaStreamRecording.PARAM_PREVIEW_WIDTH] = size.width;
      params.params[dConnectSDK.constants.mediaStreamRecording.PARAM_PREVIEW_HEIGHT] = size.height;
      // NOTE: The previewMaxFrameRate parameter will be tested by scenario tests.
    }
    sdk.put(params).then(json => {
      assert.ok(true, 'result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('optionsNormalTest002(put)', MediaStreamRecordingProfileNormalTest.optionsNormalTest002);
}
/**
 * デバイスに写真撮影を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/takephoto?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.takePhotoNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_TAKE_PHOTO,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'uri=' + json.uri);

    let loadflag = false;
    let img = document.getElementById('image');
    img.onload = function() {
      loadflag = true;
    };
    img.onerror = function() {
      loadflag = false;
    };
    if (DEVICE_CONNECT_HOST === 'localhost') {
      img.src = json.uri;
    } else {
      img.src = json.uri.replace('localhost', DEVICE_CONNECT_HOST);
    }
    setTimeout(() => {
      assert.ok(loadflag, 'image load ok');
      done();
    }, 5000);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('takePhotoNormalTest001', MediaStreamRecordingProfileNormalTest.takePhotoNormalTest001);
}
/**
 * デバイスに動画撮影を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mediastreamrecording/record?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.recordNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'uri=' + json.uri);

    setTimeout(() => {
      sdk.put({
        profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
        params: {
          serviceId: getCurrentServiceId()
        }
      }).then(json => {
        assert.ok(true, "stop ok");
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
    }, 5 * 1000);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('recordNormalTest001', MediaStreamRecordingProfileNormalTest.recordNormalTest001);
}
/**
 * デバイスに録画のミュートを指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/mutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.mutetrackNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_MUTETRACK,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('mutetrackNormalTest001', MediaStreamRecordingProfileNormalTest.mutetrackNormalTest001);
}
/**
 * デバイスに録画のミュート解除を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/umnmutetrack?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.unmutetrackNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_UNMUTETRACK,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('unmutetrackNormalTest001', MediaStreamRecordingProfileNormalTest.unmutetrackNormalTest001);
}
/**
 * デバイスに録画の一時停止を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/pause?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.pauseAndResumeNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';
  let done = assert.async();
  record().then(uri => {
    setTimeout(() => {
      sdk.put({
        profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
        params: {
          serviceId: getCurrentServiceId()
        }
      }).then(json => {
        assert.ok(true, 'pause ok. result=' + json.result);
        setTimeout(() => {
          sdk.put({
            profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
            attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RESUME,
            params: {
              serviceId: getCurrentServiceId()
            }
          }).then(json => {
            assert.ok(true, 'resume ok. result=' + json.result);
            done();
          }).catch(e => {
            assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
            done();
          });
        }, 3 * 1000);
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        done();
      });
    }, 3 * 1000);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('pauseAndResumeNormalTest001', MediaStreamRecordingProfileNormalTest.pauseAndResumeNormalTest001);
}
/**
 * デバイス動画撮影の停止を指示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/stop?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。<br/>
 * </p>
 */
MediaStreamRecordingProfileNormalTest.stopNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';
  let done = assert.async();
  setTimeout(function(){
    sdk.put({
      profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      assert.ok(true, 'resume ok. result=' + json.result);
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 16);
      done();
    });
  }, 2 * 1000);
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('stopNormalTest001', MediaStreamRecordingProfileNormalTest.stopNormalTest001);
}

/**
 * プレビューを開始するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/preview?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.previewNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PREVIEW,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'preview ok. result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('previewNormalTest001', MediaStreamRecordingProfileNormalTest.previewNormalTest001);
}
/**
 * プレビューを停止するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /mediastreamrecording/preview?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.previewNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PREVIEW,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS != 'record') {
  QUnit.test('previewNormalTest002', MediaStreamRecordingProfileNormalTest.previewNormalTest002);
}
/**
 * 写真撮影通知イベントを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/onphoto?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * ・撮影イベントが送られてくること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.onPhotoNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';
  let params = {
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_ON_PHOTO,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME &&
        json.attribute === dConnectSDK.constants.mediaStreamRecording.ATTR_ON_PHOTO) {
      let photo = json.photo;
      let img = document.getElementById('image');
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
  QUnit.test('onPhotoNormalTest001', MediaStreamRecordingProfileNormalTest.onPhotoNormalTest001);
}

/**
 * 録画通知イベントを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /mediastreamrecording/onrecordingchange?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultが0であること。
 * ・撮影イベントが送られてくること。
 * </p>
 */
MediaStreamRecordingProfileNormalTest.onRecordingChangeNormalTest001 = function(assert) {
  let params = {
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_ON_RECORDING_CHANGE,
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME &&
        json.attribute === dConnectSDK.constants.mediaStreamRecording.ATTR_ON_RECORDING_CHANGE) {
	  assert.ok(true, message);
      return true;
    }
    assert.ok(false, message);
    return false;
  });
};
if (IS_TEST_STATUS != 'picture') {
  QUnit.test('onRecordingChangeNormalTest001', MediaStreamRecordingProfileNormalTest.onRecordingChangeNormalTest001);
}
