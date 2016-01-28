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

    str += '<li><a href="javascript:doPreparePreview(\'' +
            serviceId + '\');">Preview</a></li>';
    str += '<li><a href="javascript:doTakePhoto(\'' +
            serviceId + '\');">Take Photo</a></li>';

  } else {
    setTitle('MediastreamRecording Profile');

    str += '<li><a href="javascript:doPreparePreview(\'' +
            serviceId + '\');">Preview</a></li>';
    str += '<li><a href="javascript:doTakePhoto(\'' +
            serviceId + '\');">Take Photo</a></li>';
    str += '<li><a href="javascript:doMediaRecord(\'' +
            serviceId + '\',\'video\');">Record Video</a></li>';
    str += '<li><a href="javascript:doMediaRecord(\'' +
            serviceId + '\',\'audio\');">Record Audio</a></li>';
  }

  str += '<div data-role="popup" id="popupPreviewSettings" data-history="false" style="font-size:10pt">' +
         '<div data-role="header"><h3>I/O Settings</h3></div>' +
         '<div data-role="main" style="padding:12px;">' +
         '<p>Set empty if you do not change.</p>' + 
         '<h4>Input</h4>' +
         '<div class="ui-field-contain"><label for="preview-input-width" id="input-width"></label><input id="preview-input-width" name="preview-input-width" type="text" /></div>' +
         '<div class="ui-field-contain"><label for="preview-input-height" id="input-height"></label><input id="preview-input-height" name="preview-input-height" type="text" /></div>' +
         '<hr>' +
         '<h4>Output</h4>' +
         '<div class="ui-field-contain"><label for="preview-output-width">Width (1px ~)</label><input id="preview-output-width" name="preview-output-width" type="text" /></div>' +
         '<div class="ui-field-contain"><label for="preview-output-height">Height (1px ~)</label><input id="preview-output-height" name="preview-output-height" type="text" /></div>' +
         '<div class="ui-field-contain"><label for="preview-output-max-fps">Max Frame Rate (Unit: fps)</label><input id="preview-output-max-fps" name="preview-output-max-fps" type="text" /></div>' +
         '<button class="ui-btn" onclick="javascript:doChangeRecorderOptions(\'' + serviceId + '\');">Start</button>' +
         '</div>' +
         '</div>';

  reloadList(str);

  $('#preview-output-max-fps').val('10');
}

function doPreparePreview(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('options');
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

    var w = json.imageWidth;
    var h = json.imageHeight;

    $('#input-width').text('Width (' + w.min + 'px ~ ' + w.max + 'px)');
    $('#input-height').text('Height (' + h.min + 'px ~ ' + h.max + 'px)');
    if ($('#preview-input-width').val() === '') {
      $('#preview-input-width').val(String(w.max));
    }
    if ($('#preview-input-height').val() === '') {
      $('#preview-input-height').val(String(h.max));
    }
    $('#popupPreviewSettings').popup('open');
  }, function(errorCode, errorMessage) {
    // Options API GETがサポートされていない等、
    // エラーが発生した場合はデフォルト設定でプレビューを開始する.
    doPreviewStart(serviceId);
  });
}

/**
 * レコーダーのオプションを変更する
 *
 * @param {String} serviceId サービスID
 */
function doChangeRecorderOptions(serviceId) {
  var imageWidth = $('#preview-input-width').val();
  var imageHeight = $('#preview-input-height').val();
  if (imageWidth === '' || imageHeight === '') {
    doPreviewStart(serviceId);
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('options');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('imageWidth', imageWidth);
  builder.addParameter('imageHeight', imageHeight);
  builder.addParameter('mimeType', 'video/x-mjpeg');
  var uri = builder.build();

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    doPreviewStart(serviceId);
  }, function(errorCode, errorMessage) {
    // Options API PUTがサポートされていない等、
    // エラーが発生した場合はデフォルト設定でプレビューを開始する.
    alert('Preview setting was failed.\nSo, Preview will started with default setting.');
    doPreviewStart(serviceId);
  });
}

/**
 * previewを開始する.
 *
 * @param {String} serviceId サービスID
 */
function doRegisterPreview(serviceId) {
  if (doRegisterPreview.refreshTimerId != undefined) {
    clearInterval(doRegisterPreview.refreshTimerId);
    doRegisterPreview.refreshTimerId = undefined;
  }
  var previewWidth = $('#preview-output-width').val();
  var previewHeight = $('#preview-output-height').val();
  var previewMaxFps = $('#preview-output-max-fps').val();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastream_recording');
  builder.setAttribute('preview');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (previewWidth !== '') {
    builder.addParameter('width', previewWidth);
  }
  if (previewHeight !== '') {
    builder.addParameter('height', previewHeight);
  }
  if (previewMaxFps !== '') {
    builder.addParameter('maxFrameRate', previewMaxFps);
  }
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    $("html,body").animate({
        scrollTop : $('#preview').offset().top
    }, {
        queue : false
    });

    var myUri = json.uri;
    myUri = myUri.replace('localhost', ip);
    $('#preview-uri').html(myUri);
    var img = $('#preview');
    if (img) {
      img.error(function() {
        alert('Failed to get a preview: URL=' + myUri);
      });

      if (useMJPEG()) {
        img.attr('src', myUri);
      } else {
        var timerId = setInterval(function() {
          img.attr('src', myUri + '?snapshot&' + Date.now());
        }, 250); // 10 fps
        doRegisterPreview.refreshTimerId = timerId;
      }
    }
  }, function(errorCode, errorMessage) {
    showError('PUT mediastream_recording/preview', errorCode, errorMessage);
  });

  function useMJPEG() {
    var v = getWebkitMajorVersion();
    if (v === null) {
        return true;
    }
    return v > 534;
  }

  function getWebkitMajorVersion() {
    var ua = window.navigator.userAgent;
    var group = ua.match(/^.* applewebkit\/(\d+)\..*$/i);
    if (group === null) {
      return null;
    }
    if (group.length > 1) {
      return Number(group[1]);
    }
    return null;
  }
}

/**
 * previewを終了する.
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterPreview(serviceId) {
  if (doRegisterPreview.refreshTimerId != undefined) {
    clearInterval(doRegisterPreview.refreshTimerId);
    doRegisterPreview.refreshTimerId = undefined;
  }

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
  $('#popupPreviewSettings').popup("close");

  var sessionKey = currentClientId;

  initAll();

  setTitle('Preview');

  var btnStr = getBackButton('MediaStreamRecording Top',
                      'doPreviewBack', serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<center>';
  str += '<div id="preview-uri"></div>';
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
  str += '<img src="./css/images/cameraWait.png" width="100%" id="photo">';
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
 * @param {String} target メディアの種類。video、またはaudioを指定する
 */
function doMediaRecord(serviceId, target) {
  initAll();

  var btnStr = getBackButton('MediaStreamRecording Top', 'doRecordMediaBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Recording, now');

　doGetMediaRecorder(serviceId, target, {
    onrecorder: function(recorder) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('mediastream_recording');
      builder.setAttribute('record');
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      if (recorder !== undefined) {
        builder.addParameter('target', recorder.id);
      }
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
    },

    onerror: function(errorCode, errorMessage) {
      showError('POST mediastream_recording/mediarecorder', errorCode, errorMessage);
    }
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
 * レコーダー情報を取得する.
 *
 * @param {String} serviceId サービスID
 * @param {String} target メディアの種類。video、またはaudioを指定する
 * @param {Object} callback レコーダー情報取得処理のコールバック
 */
function doGetMediaRecorder(serviceId, target, callback) {
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

    var targetRecorder = undefined;
    var recorders = json.recorders;
    for (var i = 0; i < recorders.length; i++) {
      var recorder = recorders[i];
      if (recorder.id.indexOf(target) !== -1) {
        targetRecorder = recorder;
        break;
      }
    }
    if (targetRecorder === undefined) {
      for (var i = 0; i < recorders.length; i++) {
        var recorder = recorders[i];
        if (recorder.mimeType && recorder.mimeType.indexOf(target) !== -1) {
          targetRecorder = recorder;
          break;
        }
      }
    }
    callback.onrecorder(targetRecorder);
  }, callback.onerror);
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
