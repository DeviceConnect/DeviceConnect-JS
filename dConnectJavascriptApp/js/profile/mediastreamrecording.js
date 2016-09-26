/**
 mediastreamrecording.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * MediaStream Recordingプロファイルのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showMediastreamRecording(serviceId) {
  showMediastreamRecording.serviceId = serviceId;

  doGetMediaRecorderList(serviceId, {
    onrecorders: function(recorders) {
      showRecorderList(serviceId, recorders);
    },
    onerror: function(errorCode, errorMessage) {
      showRecorderList(serviceId);
    }
  });
}

function showRecorderList(serviceId, recorders) {
  var btnStr = getBackButton('Device Top', 'doMediaStreamRecordingBack', serviceId, ''),
      list = '',
      i, r;

  showRecorderList.recorders = recorders;

  initAll();
  setTitle('Media Recorder List');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  if (recorders !== undefined) {
    for (i = 0; i < recorders.length; i++) {
      r = recorders[i];
      list += '<li><a href="javascript:showRecorderFeatureListByIndex(\'' + serviceId + '\', \'' + i + '\');">' + r.name + '</a></li>';
    }
  }
  list += '<li><a href="javascript:showRecorderFeatureListByIndex(\'' + serviceId + '\');">&lt;Use Default&gt;</a></li>';
  reloadList(list);
}

function showRecorderFeatureListByIndex(serviceId, index) {
  var recorder;
  if (index !== undefined && showRecorderList.recorders !== undefined) {
    recorder = showRecorderList.recorders[index];
  }
  showRecorderFeatureList(serviceId, recorder);
}

function showRecorderFeatureListByTarget(serviceId, target) {
  var recorder, i;
  if (target !== undefined && showRecorderList.recorders !== undefined) {
    for (i = 0; i < showRecorderList.recorders.length; i++) {
      if (target === showRecorderList.recorders[i].id) {
        recorder = showRecorderList.recorders[i];
        break;
      }
    }
  }
  showRecorderFeatureList(serviceId, recorder);
}

function showRecorderFeatureList(serviceId, recorder) {
  showRecorderFeatureList.recorder = recorder;

  var btnStr = getBackButton('Recorder List', 'doFeatureListBack', serviceId, ''),
      list = '',
      contents = '';

  initAll();
  
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  if (recorder !== undefined) {
    setTitle('Media Recorder - ' + recorder.name);
    list += '<li><a href="javascript:doPreviewStart(\'' + serviceId + '\', \'' + recorder.id + '\');">Preview</a></li>';
    list += '<li><a href="javascript:doTakePhoto(\'' + serviceId + '\', \'' + recorder.id + '\');">Take Photo</a></li>';
    list += '<li><a href="javascript:doMediaRecord(\'' + serviceId + '\', \'' + recorder.id + '\');">Record</a></li>';
    list += '<li><a href="javascript:doRecorderOptions(\'' + serviceId + '\', \'' + recorder.id + '\');">Recorder Options</a></li>';
    list += '<li><a href="javascript:showRecorderInfo(\'' + serviceId + '\');">Recorder Info</a></li>';
  } else {
    setTitle('Media Recorder - Default Recorder');
    list += '<li><a href="javascript:doPreviewStart(\'' + serviceId + '\');">Preview</a></li>';
    list += '<li><a href="javascript:doTakePhoto(\'' + serviceId + '\');">Take Photo</a></li>';
    list += '<li><a href="javascript:doMediaRecord(\'' + serviceId + '\');">Record</a></li>';
  }
  reloadList(list);
}

function showRecorderInfo(serviceId) {
  var btnStr = getBackButton('Recorder Features', 'doOptionsBack', serviceId, ''),
      contents = '',
      recorder = showRecorderFeatureList.recorder;

  initAll();
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  if (recorder !== undefined) {
    contents += '<b>id:</b> ' + recorder.id + '<br>';
    contents += '<b>name:</b> ' + recorder.name + '<br>';
    contents += '<b>state:</b> ' + recorder.state + '<br>';
    contents += '<b>imageWidth:</b> ' + recorder.imageWidth + '<br>';
    contents += '<b>imageHeight:</b> ' + recorder.imageHeight + '<br>';
    contents += '<b>previewWidth:</b> ' + recorder.previewWidth + '<br>';
    contents += '<b>previewHeight:</b> ' + recorder.previewHeight + '<br>';
    contents += '<b>previewMaxFrameRate:</b> ' + recorder.previewMaxFrameRate + '<br>';
    if (recorder.audio) {
      contents += '<b>channels:</b> ' + recorder.audio.channels + '<br>';
      contents += '<b>sampleRate:</b> ' + recorder.audio.sampleRate + '<br>';
      contents += '<b>sampleSize:</b> ' + recorder.audio.sampleSize + '<br>';
      contents += '<b>blockSize:</b> ' + recorder.audio.blockSize + '<br>';
    }
  }
  reloadContent(contents);
}

function doRecorderOptions(serviceId, target) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('options');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (target !== null && target !== undefined) {
    builder.addParameter('target', target);
  }
  var uri = builder.build();

  dConnect.get(uri, null, function(json) {
    showOptionList(serviceId, target, json);
  }, function(errorCode, errorMessage) {
    showError('GET mediastreamrecording/options', errorCode, errorMessage);
  });
}

function showOptionList(serviceId, target, currentOptions) {
  var str = '',
      btnStr = getBackButton('Recorder Features', 'doOptionsBack', serviceId, ''),
      recorder = showRecorderFeatureList.recorder || {},
      imageSizes = currentOptions.imageSizes,
      previewSizes = currentOptions.previewSizes,
      mimeTypes = currentOptions.mimeType,
      i, item, option;

  initAll();
  setTitle('Media Recorder Options');
  
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  str += '<center>';
  if (imageSizes !== undefined) {
    str += '<b>Image Sizes:</b>';
    str += '<select name="selectImageSizes">';
    for (i = 0; i < imageSizes.length; i++) {
      item = imageSizes[i];
      option = item.width + 'x' + item.height;
      if (recorder.imageWidth !== undefined && recorder.imageHeight !== undefined
        && item.width === recorder.imageWidth && item.height === recorder.imageHeight) {
        str += '<option value="' + i  + '" selected>' + option + '</options>';
      } else {
        str += '<option value="' + i  + '">' + option + '</options>';
      }
    }
    str += '</select><br>';
  }
  if (previewSizes !== undefined) {
    str += '<b>Preview Sizes:</b>';
    str += '<select name="selectPreviewSizes">';
    for (i = 0; i < previewSizes.length; i++) {
      item = previewSizes[i];
      option = item.width + ' x ' + item.height;
      if (recorder.previewWidth !== undefined && recorder.previewHeight !== undefined
        && item.width === recorder.previewWidth && item.height === recorder.previewHeight) {
        str += '<option value="' + i  + '" selected>' + option + '</options>';
      } else {
        str += '<option value="' + i  + '">' + option + '</options>';
      }
    }
    str += '</select><br>';

    str += '<b>Preview Max Frame Rate (fps):</b>';
    str += '<input id="textMaxFrameRate" type="text" value="' + 
            ((recorder.previewMaxFrameRate !== undefined) ? recorder.previewMaxFrameRate : '') + '"></input><br>';
  }
  if (mimeTypes != undefined) {
    str += '<b>MIME Type:</b>';
    str += '<select name="selectMimeType">';
    for (i = 0; i < mimeTypes.length; i++) {
      item = mimeTypes[i];
      if (recorder.mimeType !== undefined && item === recorder.mimeType) {
        str += '<option value="' + i  + '" selected>' + item + '</options>';
      } else {
        str += '<option value="' + i  + '">' + item + '</options>';
      }
    }
    str += '</select><br>';
  }
  str += '<button id="submitOptions">Put Options</button>';
  str += '</center>';
  reloadContent(str);

  $('#submitOptions').on('click', function(e) {
    var op = {};
    op.serviceId = serviceId;
    op.target = target;
    op.mimeType = mimeTypes[0];

    // imageSizes
    if (imageSizes !== undefined) {
      var imageSizeIndex = $('[name=selectImageSizes]').val();
      var imageSize = imageSizes[imageSizeIndex];
      op.imageWidth = imageSize.width;
      op.imageHeight = imageSize.height;
    }

    // previewSizes
    if (previewSizes !== undefined) {
      var previewSizeIndex = $('[name=selectPreviewSizes]').val();
      var previewSize = previewSizes[previewSizeIndex];
      op.previewWidth = previewSize.width;
      op.previewHeight = previewSize.height;

      // previewMaxFrameRate
      var frameRate = $('#textMaxFrameRate').val();
      op.previewMaxFrameRate = frameRate !== '' ? frameRate : undefined;
    }

    // mimeType
    if (mimeTypes !== undefined) {
      var mimeTypeIndex = $('[name=selectMimeType]').val();
      op.mimeType = mimeTypes[mimeTypeIndex];
    }

    doChangeRecorderOptions(op);
  });
}

/**
 * レコーダーのオプションを変更する.
 * @param {String} op オプション
 */
function doChangeRecorderOptions(op) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('options');
  builder.setServiceId(op.serviceId);
  builder.setAccessToken(accessToken);
  if (op.target !== undefined) {
    builder.addParameter('target', op.target);
  }
  if (op.imageWidth !== undefined) {
    builder.addParameter('imageWidth', op.imageWidth);
  }
  if (op.imageHeight !== undefined) {
    builder.addParameter('imageHeight', op.imageHeight);
  }
  if (op.previewWidth !== undefined) {
    builder.addParameter('previewWidth', op.previewWidth);
  }
  if (op.previewHeight !== undefined) {
    builder.addParameter('previewHeight', op.previewHeight);
  }
  if (op.previewMaxFrameRate !== undefined) {
    builder.addParameter('previewMaxFrameRate', op.previewMaxFrameRate);
  }
  if (op.mimeType !== undefined) {
    builder.addParameter('mimeType', op.mimeType);
  }
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  showLoading();
  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    doGetMediaRecorder(op.serviceId, op.target, {
      onrecorder: function(recorder) {
        closeLoading();

        if (recorder === undefined) {
          alert('ERROR: ' + target + ' is not found.');
          return;
        }

        showRecorderFeatureList.recorder = recorder;
        alert("Success. Media Recorder options was set.");
      },
      onerror: function(errorCode, errorMessage) {
        closeLoading()
        alert('ERROR: Failed to reload options: ' + errorMessage);
      }
    });
  }, function(errorCode, errorMessage) {
    // Options API PUTがサポートされていない等、
    // エラーが発生した場合はデフォルト設定でプレビューを開始する.
    closeLoading();
    console.log('ERROR: PUT /mediastreamrecording/options: errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    alert('ERROR: Failed to put options: ' + errorMessage);
  });
}

/**
 * previewを開始する.
 *
 * @param {String} serviceId サービスID
 * @param {String} target レコーダーID
 */
function doRegisterPreview(serviceId, target) {
  if (doRegisterPreview.refreshTimerId != undefined) {
    clearInterval(doRegisterPreview.refreshTimerId);
    doRegisterPreview.refreshTimerId = undefined;
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('preview');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (target !== null && target !== undefined) {
    builder.addParameter('target', target);
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
    if (json.audio) {
      registerAudioSocket(json.audio.uri);
      return;
    }
    var myUri = json.uri;
    myUri = myUri.replace('localhost', ip);
    $('#preview-uri').text(myUri);
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
    showError('PUT mediastreamrecording/preview', errorCode, errorMessage);
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
 * @param {String} recorder レコーダー
 */
function doUnregisterPreview(serviceId, recorder) {
  if (doRegisterPreview.refreshTimerId != undefined) {
    clearInterval(doRegisterPreview.refreshTimerId);
    doRegisterPreview.refreshTimerId = undefined;
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('preview');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (recorder !== null && recorder !== undefined) {
    builder.addParameter('target', recorder.id);
  }
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('DELETE mediastreamrecording/preview', errorCode, errorMessage);
  });
}

/**
 * プレビューを開始する.
 *
 * @param {String} serviceId サービスID
 * @param {String} target レコーダーID
 */
function doPreviewStart(serviceId, target) {
  initAll();
  setTitle('Preview');

  var btnStr = getBackButton('Recorder Features', 'doPreviewBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<center>';
  str += '<div id="preview-uri"></div>';
  str += '<img src="./css/images/cameraWait.png" width="100%" id="preview">';
  str += '</center><br>';
  reloadContent(str);

  doRegisterPreview(serviceId, target);
}

/**
 * Take Photo
 *
 * @param {String} serviceId サービスID
 * @param {String} target レコーダーID
 */
function doTakePhoto(serviceId, target) {

  initAll();

  showLoading();
  loadFlag = false;
  var sessionKey = currentClientId;

  var str = '';
  str += getBackButton('Recorder Features', 'doTakephotoBack', serviceId, sessionKey);
  reloadHeader(str);
  reloadFooter(str);

  var str = '';
  str += makeInputText('onPhoto', 'onPhoto', 'onPhoto')
  str += '<center>';
  str += '<img src="./css/images/cameraWait.png" width="100%" id="photo">';
  str += '</center><br>';
  str += takePhotoButton(serviceId, target);

  reloadContent(str);

  doRegisterOnPhoto(serviceId, sessionKey);

  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
    console.log("Failed to connect websocket. errorCode=" + errorCode + " errorMessage=" + errorMessage);
  });

  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('takephoto');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (target !== null && target !== undefined) {
    builder.addParameter('target', target);
  }
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

    $('#onPhoto').val(json.uri);
  }, function(errorCode, errorMessage) {
    showError('POST mediastreamrecording/takephoto', errorCode, errorMessage);
    closeLoading();
  });

}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションキー
 */
function doTakephotoBack(serviceId, sessionKey) {
  var recorder = showRecorderFeatureList.recorder;
  doUnregisterOnPhoto(serviceId, sessionKey);
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doPreviewBack(serviceId) {
  var recorder = showRecorderFeatureList.recorder;
  doUnregisterPreview(serviceId, recorder);
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doRecordMediaBack(serviceId) {
  var recorder = showRecorderFeatureList.recorder;
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doOptionsBack(serviceId) {
  var recorder = showRecorderFeatureList.recorder;
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doFeatureListBack(serviceId) {
  showMediastreamRecording(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doMediaStreamRecordingBack(serviceId) {
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
 * 指定したレコーダーでレコーディングを開始する.
 *
 * @param {String} serviceId サービスID
 * @param {String} target レコーダーID
 */
function doMediaRecord(serviceId, target) {
  initAll();

  var btnStr = getBackButton('Recorder Features', 'doRecordMediaBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('Recording, now');

　sendRecordRequest(serviceId, target, {
    onsuccess: function() {
      reloadContent(mediaStopButton(serviceId, target));
    },
    onerror: function(errorCode, errorMessage) {
      showError('POST mediastreamrecording/record', errorCode, errorMessage);
    }
  });

  function sendRecordRequest(serviceId, target, cb) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('mediastreamrecording');
    builder.setAttribute('record');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    if (target !== null && target !== undefined) {
      builder.addParameter('target', target);
    }
    var uri = builder.build();

    if (DEBUG) {
      console.log('Uri: ' + uri);
    }

    dConnect.post(uri, null, null, function(json) {
      if (DEBUG) {
        console.log('Response: ', json);
      }

      cb.onsuccess();
    }, function(errorCode, errorMessage) {
      cb.onerror(errorCode, errorMessage);
    });
  }
}

/**
 * Media停止
 *
 * @param {String} serviceId サービスID
 */
function doMediaStop(serviceId, target) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (target !== null && target !== undefined) {
    builder.addParameter('target', target);
  }
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
    showError('PUT mediastreamrecording/stop', errorCode, errorMessage);
  });
}

/**
 * レコーダー情報リストを取得する.
 *
 * @param {String} serviceId サービスID
 * @param {Object} callback レコーダー情報リスト取得処理のコールバック
 */
function doGetMediaRecorderList(serviceId, callback) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
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
    callback.onrecorders(json.recorders);
  }, callback.onerror);
}

/**
 * 特定のレコーダー情報を取得する.
 *
 * @param {String} serviceId サービスID
 * @param {String} target レコーダーID
 * @param {Object} callback レコーダー情報取得処理のコールバック
 */
function doGetMediaRecorder(serviceId, target, callback) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mediastreamrecording');
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
    callback.onrecorder(targetRecorder);
  }, callback.onerror);
}

/**
 * メディアの停止
 *
 * @param {String} serviceId サービスID
 * @param {String} target 動作させているデバイスのターゲット
 */
function mediaStopButton(serviceId, target) {
  var str = '';
  str += '<center>';
  str += '<input data-icon="stop"  ';
  if (target !== undefined && target !== null) {
    str += 'onclick="javascript:doMediaStop(\'' +
          serviceId + '\', \'' + target + '\');" type="button" value="Stop"/>';
  } else {
    str += 'onclick="javascript:doMediaStop(\'' +
          serviceId + '\');" type="button" value="Stop"/>';
  }
  str += '</center>';
  return str;
}

/**
 * 写真の撮影
 *
 * @param {String} serviceId サービスID
 */
function takePhotoButton(serviceId, target) {
  var str = '';
  str += '<center>';
  str += '<input data-icon="stop"  ';
  if (target !== undefined && target !== null) {
      str += 'onclick="javascript:doTakePhoto(\'' +
          serviceId + '\', \'' + target + '\');" type="button" value="takePhoto"/>';
  } else {
      str += 'onclick="javascript:doTakePhoto(\'' +
          serviceId + '\');" type="button" value="takePhoto"/>';
  }
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
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('onphoto');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

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
  builder.setProfile('mediastreamrecording');
  builder.setAttribute('onphoto');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}


var ws;
var ctx = new (window.AudioContext || window.webkitAudioContext);
var initial_delay_sec = 0;
var scheduled_time = 0;

function playChunk(audio_src, scheduled_time) {
  if (audio_src.start) {
    audio_src.start(scheduled_time);
  } else {
    audio_src.noteOn(scheduled_time);
  }
}

function playAudioStream(audio_f32) {
  console.log("DATA: " + audio_f32.length);

  var audio_buf = ctx.createBuffer(1, audio_f32.length, 44100);
  var audio_src = ctx.createBufferSource();
  var current_time = ctx.currentTime;

  audio_buf.getChannelData(0).set(audio_f32);

  audio_src.buffer = audio_buf;
  audio_src.connect(ctx.destination);

  if (current_time < scheduled_time) {
    playChunk(audio_src, scheduled_time);
    scheduled_time += audio_buf.duration;
  } else {
    playChunk(audio_src, current_time);
    scheduled_time = current_time + audio_buf.duration + initial_delay_sec;
  }
}

function registerAudioSocket(uri) {
  var wsUrl = uri.replace('localhost', ip);
  $('#preview-uri').text(wsUrl);
  ws = new WebSocket(wsUrl.replace("http", "ws"));
  ws.binaryType = "arraybuffer";

  ws.open = function() {
    console.log("open");
  }

  ws.onclose = function() {
    console.log("close");
  }

  ws.onerror = function(e) {
    console.log(String(e));
  }

  ws.onmessage = function(evt) {
    console.log("onmessage: " + evt.data.constructor);

    if (evt.data.constructor !== ArrayBuffer) {
      return;
    }
   //playAudioStream(new Int16Array(evt.data));

    var audio = new Int16Array(evt.data);
    var len = audio.length;

    var audioFloat32 = new Float32Array(len);
    for (var i = 0; i < len; i++) {
      audioFloat32[i] = audio[i] / 32768.0;
    }
    playAudioStream(audioFloat32);
  };

}