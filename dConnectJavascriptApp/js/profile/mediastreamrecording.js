/**
 mediastreamrecording.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * MediastreamRecording Menu
 *
 * @param {String} serviceId サービスID
 */
function showMediastreamRecording(serviceId) {

  initAll();

  var btnStr = getBackButton('Device Top', 'doMediaStreamRecordingBack',
                          serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  if (myDeviceName.indexOf('Sony Camera') != -1) {
    setTitle('MediastreamRecording Profile(Sony Camera)');

    str += '<li><a href="javascript:doPreviewStart(\'' +
            serviceId + '\');">Preview</a></li>';
    str += '<li><a href="javascript:doTakePhoto(\'' +
            serviceId + '\');">Take Photo</a></li>';

  } else {
    setTitle('MediastreamRecording Profile');

    str += '<li><a href="javascript:doPreviewStart(\'' +
            serviceId + '\');">Preview</a></li>';
    str += '<li><a href="javascript:doTakePhoto(\'' +
            serviceId + '\');">Take Photo</a></li>';
    str += '<li><a href="javascript:doMediaRecord(\'' +
            serviceId + '\',\'video\');">Record Video</a></li>';
    str += '<li><a href="javascript:doMediaRecord(\'' +
            serviceId + '\',\'audio\');">Record Audio</a></li>';
  }
  reloadList(str);
}

/**
 * previewを開始する.
 *
 * @param {String} serviceId サービスID
 */
function doRegisterPreview(serviceId) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('preview');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    var myUri = json.uri;
    myUri = myUri.replace('localhost', ip);
    var img = $('#preview');
    if (img) {
      img.error(function() {
        alert('Failed to get a preview: URL=' + myUri);
      });
      img.attr('src', myUri);
    }
  }, function(errorCode, errorMessage) {
    showError('PUT mediastream_recording/preview', errorCode, errorMessage);
  });
}

/**
 * previewを終了する.
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterPreview(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('preview');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('DELETE mediastream_recording/preview', errorCode, errorMessage);
  });
}

/**
 * Previewの開始
 *
 * @param {String} serviceId サービスID
 */

function doPreviewStart(serviceId) {
  var sessionKey = currentClientId;

  initAll();

  setTitle('preview');

  var btnStr = getBackButton('MediaStreamRecording Top',
                      'doPreviewBack', serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<center>';
  str += '<img src="./css/images/cameraWait.png" width="100%" id="preview">';
  str += '</center><br>';
  reloadContent(str);

  doRegisterPreview(serviceId);
}

/**
 * Take Photo
 *
 * @param {String} serviceId サービスID
 */
function doTakePhoto(serviceId) {

  initAll();

  showLoading();
  loadFlag = false;
  var sessionKey = currentClientId;

  var str = '';
  str += getBackButton('MediaStreamRecording Top',
                  'doTakephotoBack', serviceId, sessionKey);
  reloadHeader(str);

  var str = '';
  str += makeInputText('onPhoto', 'onPhoto', 'onPhoto')
  str += '<center>';
  str += '<img src="./css/images/cameraWait.png" id="photo">';
  str += '</center><br>';
  str += takePhotoButton(serviceId);

  reloadContent(str);

  var str = '';
  str += getBackButton('MediaStreamRecording Top',
                    'doTakephotoBack', serviceId, sessionKey);
  reloadFooter(str);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('takephoto');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri)
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    var myUri = json.uri;
    myUri = myUri.replace('localhost', ip);
    refreshImg(myUri, 'photo');
    closeLoading();
  }, function(errorCode, errorMessage) {
    showError('POST mediastream_recording/takephoto', errorCode, errorMessage);
    closeLoading();
  });

  doRegisterOnPhoto(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションキー
 */
function doTakephotoBack(serviceId, sessionKey) {
  doUnregisterOnPhoto(serviceId, sessionKey);
  showMediastreamRecording(serviceId);
}

function doPreviewStop(serviceId, sessionKey) {
  doUnregisterPreview(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doPreviewBack(serviceId, sessionKey) {
  doUnregisterPreview(serviceId);
  showMediastreamRecording(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEYY
 */
function doRecordMediaBack(serviceId, sessionKey) {
  showMediastreamRecording(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doMediaStreamRecordingBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * 画像のリフレッシュ
 *
 * @param {String} uri 画像のURI
 * @param {String} id 画像を表示するタグのID
 */
function refreshImg(uri, id) {
  if (!loadFlag) {
    loadFlag = true;
    var img = $('#' + id);
    if (img) {
      // MEMO: iOSではonloadがこないタイミングがあるので、その場合はタイムアウトさせる
      var timeout = setInterval(function() {
        loadFlag = false;
        clearInterval(timeout);
      }, 500);

      img.attr('onload', function() {
        loadFlag = false;
        clearInterval(timeout);
      });
      img.attr('crossorigin', 'anonymous');
      img.attr('src', uri + '?' + Date.now());
    }
  }
}

/**
 * Media Recorder Target指定実行
 *
 * @param {String} serviceId サービスID
 * @param {String} target ターゲット(video, audio)
 */
function doMediaRecord(serviceId, target) {
  initAll();

  var btnStr = getBackButton('MediaStreamRecording Top', 'doRecordMediaBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Recording, now');

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('record');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('target', target);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    reloadContent(mediaStopButton(serviceId));
  }, function(errorCode, errorMessage) {
    showError('POST mediastream_recording/record', errorCode, errorMessage);
  });
}

/**
 * Media停止
 *
 * @param {String} serviceId サービスID
 */
function doMediaStop(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    showMediastreamRecording(serviceId);
  }, function(errorCode, errorMessage) {
    showError('PUT mediastream_recording/stop', errorCode, errorMessage);
  });
}

/**
 * Media Recorder情報の取得
 *
 * @param {String} serviceId サービスID
 */
function doGetMediaRecorder(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('mediarecorder');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('GET mediastream_recording/mediarecorder',
                    errorCode, errorMessage);
  });
}

/**
 * メディアの停止
 *
 * @param {String} serviceId サービスID
 */
function mediaStopButton(serviceId) {
  var str = '';
  str += '<center>';
  str += '<input data-icon="stop"  ';
  str += 'onclick="javascript:doMediaStop(\'' +
          serviceId + '\');" type="button" value="Stop"/>';
  str += '</center>';
  return str;
}

/**
 * メディアの停止
 *
 * @param {String} serviceId サービスID
 */
function previewStopButton(serviceId, sessionKey) {
  var str = '';
  str += '<center>';
  str += '<input data-icon="stop"  ';
  str += 'onclick="javascript:doPreviewStop(\'' +
          serviceId + '\', \'' + sessionKey +
          '\');" type="button" value="Stop"/>';
  str += '</center>';
  return str;
}

/**
 * 写真の撮影
 *
 * @param {String} serviceId サービスID
 */
function takePhotoButton(serviceId) {
  var str = '';
  str += '<center>';
  str += '<input data-icon="stop"  ';
  str += 'onclick="javascript:doTakePhoto(\'' +
          serviceId + '\');" type="button" value="takePhoto"/>';
  str += '</center>';
  return str;
}

/**
 * onPhotoイベントの登録
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションキー
 */
function doRegisterOnPhoto(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('onphoto');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('sessionKey', sessionKey);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    var json = JSON.parse(message);
    $('#onPhoto').val(json.photo.path + ':' + json.photo.mimeType);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * onPhotoイベントの解除
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションキー
 */
function doUnregisterOnPhoto(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('onphoto');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('sessionKey', sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}
