/**
 mediastreamrecording.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

  doGetMediaRecorderList(serviceId).then(recorders => {
    showRecorderList(serviceId, recorders);
  }).catch(e => {
    showRecorderList(serviceId);
  });
}

function showRecorderList(serviceId, recorders) {
  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId),
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
  let recorder;
  if (index !== undefined && showRecorderList.recorders !== undefined) {
    recorder = showRecorderList.recorders[index];
  }
  showRecorderFeatureList(serviceId, recorder);
}

function showRecorderFeatureListByTarget(serviceId, target) {
  let recorder, i;
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

  let btnStr = getBackButton('Recorder List', 'doFeatureListBack', serviceId),
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
  let btnStr = getBackButton('Recorder Features', 'doOptionsBack', serviceId),
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
    contents += '<b>previewBitRate:</b> ' + recorder.previewBitRate + '<br>';
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
  let params = {
    profile: 'mediastreamrecording',
    attribute: 'options',
    params: {
      serviceId: serviceId
    }
  };
  if (target !== null && target !== undefined) {
    params.params['target'] = target;
  }
  sdk.get(params).then(json => {
    showOptionList(serviceId, target, json);
  }).catch(e => {
    showError('GET mediastreamrecording/options', e.errorCode, e.errorMessage);
  });
}

function showOptionList(serviceId, target, currentOptions) {
  let str = '',
      btnStr = getBackButton('Recorder Features', 'doOptionsBack', serviceId),
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

    str += '<b>Preview Bit Rate (fps):</b>';
    str += '<input id="textBitRate" type="text" value="' +
            ((recorder.previewBitRate !== undefined) ? recorder.previewBitRate : '') + '"></input><br>';

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
    let op = {};
    op.serviceId = serviceId;
    op.target = target;
    op.mimeType = mimeTypes[0];

    // imageSizes
    if (imageSizes !== undefined) {
      let imageSizeIndex = $('[name=selectImageSizes]').val();
      let imageSize = imageSizes[imageSizeIndex];
      op.imageWidth = imageSize.width;
      op.imageHeight = imageSize.height;
    }

    // previewSizes
    if (previewSizes !== undefined) {
      let previewSizeIndex = $('[name=selectPreviewSizes]').val();
      let previewSize = previewSizes[previewSizeIndex];
      op.previewWidth = previewSize.width;
      op.previewHeight = previewSize.height;

      // bitrate
      let bitrate = $('#textBitRate').val();
      op.previewBitRate = bitrate !== '' ? bitrate : undefined;

      // previewMaxFrameRate
      let frameRate = $('#textMaxFrameRate').val();
      op.previewMaxFrameRate = frameRate !== '' ? frameRate : undefined;
    }

    // mimeType
    if (mimeTypes !== undefined) {
      let mimeTypeIndex = $('[name=selectMimeType]').val();
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
  let params = {
    profile: 'mediastreamrecording',
    attribute: 'options',
    params: {
      serviceId: op.serviceId
    }
  };
  if (op.target !== undefined) {
    params.params['target'] = op.target;
  }
  if (op.imageWidth !== undefined) {
    params.params['imageWidth'] = op.imageWidth;
  }
  if (op.imageHeight !== undefined) {
    params.params['imageHeight'] = op.imageHeight;
  }
  if (op.previewWidth !== undefined) {
    params.params['previewWidth'] = op.previewWidth;
  }
  if (op.previewHeight !== undefined) {
    params.params['previewHeight'] = op.previewHeight;
  }
  if (op.previewBitRate !== undefined) {
    params.params['previewBitRate'] = op.previewBitRate;
  }
  if (op.previewMaxFrameRate !== undefined) {
    params.params['previewMaxFrameRate'] = op.previewMaxFrameRate;
  }
  if (op.mimeType !== undefined) {
    params.params['mimeType'] = op.mimeType;
  }
  showLoading();
  sdk.put(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    doGetMediaRecorder(op.serviceId, op.target).then(recorder => {
      closeLoading();

      if (recorder === undefined) {
        alert('ERROR: ' + target + ' is not found.');
        return;
      }

      showRecorderFeatureList.recorder = recorder;
      alert("Success. Media Recorder options was set.");
    }).catch(e => {
      closeLoading()
      alert('ERROR: Failed to reload options: ' + errorMessage);
    });
  }).catch(e => {
    // Options API PUTがサポートされていない等、
    // エラーが発生した場合はデフォルト設定でプレビューを開始する.
    closeLoading();
    console.log('ERROR: PUT /mediastreamrecording/options: errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    alert('ERROR: Failed to put options: ' + e.errorMessage);
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
  let params = {
    profile: 'mediastreamrecording',
    attribute: 'preview',
    params: {
      serviceId: serviceId
    }
  };
  if (target !== null && target !== undefined) {
    params.params['target'] = target;
  }
  sdk.put(params).then(json => {
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
    let myUri = json.uri;
    myUri = myUri.replace('localhost', ip);
    $('#preview-uri').text(myUri);
    let img = $('#preview');
    if (img) {
      img.error(function() {
        alert('Failed to get a preview: URL=' + myUri);
      });

      if (useMJPEG()) {
        img.attr('src', myUri);
      } else {
        let timerId = setInterval(function() {
          img.attr('src', myUri + '?snapshot&' + Date.now());
        }, 250); // 10 fps
        doRegisterPreview.refreshTimerId = timerId;
      }
    }
  }).catch(e => {
    showError('PUT mediastreamrecording/preview', e.errorCode, e.errorMessage);
  });

  function useMJPEG() {
    let v = getWebkitMajorVersion();
    if (v === null) {
        return true;
    }
    return v > 534;
  }

  function getWebkitMajorVersion() {
    let ua = window.navigator.userAgent;
    let group = ua.match(/^.* applewebkit\/(\d+)\..*$/i);
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

  let params = {
    profile: 'mediastreamrecording',
    attribute: 'preview',
    params: {
      serviceId: serviceId
    }  };
  if (recorder !== null && recorder !== undefined) {
    params.params['target'] = recorder.id;
  }

  sdk.delete(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('DELETE mediastreamrecording/preview', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('Recorder Features', 'doPreviewBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  let str = '';
  str += getBackButton('Recorder Features', 'doTakephotoBack', serviceId);
  reloadHeader(str);
  reloadFooter(str);

  str += makeInputText('onPhoto', 'onPhoto', 'onPhoto')
  str += '<center>';
  str += '<img src="./css/images/cameraWait.png" width="100%" id="photo">';
  str += '</center><br>';
  str += takePhotoButton(serviceId, target);

  reloadContent(str);

  doRegisterOnPhoto(serviceId).then(json => {
    let params = {
      profile: 'mediastreamrecording',
      attribute: 'takephoto',
      params: {
        serviceId: serviceId
      }    };
    if (target !== null && target !== undefined) {
      params.params['target'] = target;
    }
	  sdk.post(params).then(json => {
  		if (DEBUG) {
  		  console.log('Response: ', json);
  		}

  		let myUri = json.uri;
  		myUri = myUri.replace('localhost', ip);
  		refreshImg(myUri, 'photo');
  		closeLoading();

  		$('#onPhoto').val(json.uri);

	  }).catch(e => {
  		showError('POST mediastreamrecording/takephoto', e.errorCode, e.errorMessage);
  		closeLoading();
	  });
  }).catch(e => {
    showError('POST mediastreamrecording/onphoto', e.errorCode, e.errorMessage);
    closeLoading();
  });

}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doTakephotoBack(serviceId) {
  let recorder = showRecorderFeatureList.recorder;
  doUnregisterOnPhoto(serviceId);
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doPreviewBack(serviceId) {
  let recorder = showRecorderFeatureList.recorder;
  doUnregisterPreview(serviceId, recorder);
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doRecordMediaBack(serviceId) {
  let recorder = showRecorderFeatureList.recorder;
  doUnregisterOnRecordingChange(serviceId);
  showRecorderFeatureList(serviceId, recorder);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doOptionsBack(serviceId) {
  let recorder = showRecorderFeatureList.recorder;
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
 * 画像のリフレッシュ
 *
 * @param {String} uri 画像のURI
 * @param {String} id 画像を表示するタグのID
 */
function refreshImg(uri, id) {
  if (!loadFlag) {
    loadFlag = true;
    let img = $('#' + id);
    if (img) {
      // MEMO: iOSではonloadがこないタイミングがあるので、その場合はタイムアウトさせる
      let timeout = setInterval(function() {
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
  doRegisterOnRecordingChange(serviceId).then(json => {
	  initAll();
	  let btnStr = getBackButton('Recorder Features', 'doRecordMediaBack', serviceId);
	  reloadHeader(btnStr);
	  reloadContent(mediaStopButton(serviceId, target));
	  reloadFooter(btnStr);

	  setTitle('Recording, now');

	  sendRecordRequest(serviceId, target).then(json => {
    }).catch(e => {
      showError('POST mediastreamrecording/record', e.errorCode, e.errorMessage);
	  });

	  function sendRecordRequest(serviceId, target) {
      let params = {
        profile: 'mediastreamrecording',
        attribute: 'record',
        params: {
          serviceId: serviceId
        }
      };
      if (target !== null && target !== undefined) {
        params.params['target'] = target;
      }
      return new Promise((resolve, reject) => {
    		sdk.post(params).then(json => {
    		  if (DEBUG) {
    			console.log('Response: ', json);
    		  }

    		  resolve();
    		}).catch(e => {
    		  reject(e);
    		});
      });
	  }
  }).catch(e => {
    showError('POST mediastreamrecording/onStatusChange', e.errorCode, e.errorMessage);

  });
}

/**
 * Media停止
 *
 * @param {String} serviceId サービスID
 */
function doMediaStop(serviceId, target) {
  let params = {
    profile: 'mediastreamrecording',
    attribute: 'stop',
    params: {
      serviceId: serviceId
    }  };
  if (target !== null && target !== undefined) {
    params.params['target'] = target;
  }

  sdk.put(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediastreamrecording/stop', e.errorCode, e.errorMessage);
  });
}

/**
 * レコーダー情報リストを取得する.
 *
 * @param {String} serviceId サービスID
 */
function doGetMediaRecorderList(serviceId, callback) {
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: 'mediastreamrecording',
      attribute: 'mediarecorder',
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      if (DEBUG) {
        console.log('Response: ', json);
      }
      resolve(json.recorders);
    }).catch(e => {
      reject(e);
    });
  });
}

/**
 * 特定のレコーダー情報を取得する.
 *
 * @param {String} serviceId サービスID
 * @param {String} target レコーダーID
 */
function doGetMediaRecorder(serviceId, target) {
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: 'mediastreamrecording',
      attribute: 'mediarecorder',
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      if (DEBUG) {
        console.log('Response: ', json);
      }

      let targetRecorder = undefined;
      let recorders = json.recorders;
      for (let i = 0; i < recorders.length; i++) {
        let recorder = recorders[i];
        if (recorder.id.indexOf(target) !== -1) {
          targetRecorder = recorder;
          break;
        }
      }
      resolve(targetRecorder);
    }).catch(e => {
      reject(e);
    });
  });
}

/**
 * メディアの停止
 *
 * @param {String} serviceId サービスID
 * @param {String} target 動作させているデバイスのターゲット
 */
function mediaStopButton(serviceId, target) {
  let str = '';
  str += makeInputText('Status', 'status', 'status');
  str += makeInputText('URI', 'uri', 'uri');
  str += makeInputText('Path', 'path', 'path');
  str += makeInputText('MimeType', 'mimeType', 'mimeType');
  str += makeInputText('ErrorMessage', 'errorMessage', 'errorMessage');
  str += '<center>';
  str += '<input data-icon="play"  ';
    if (target !== undefined && target !== null) {
    str += 'onclick="javascript:doMediaRecord(\'' +
          serviceId + '\', \'' + target + '\');" type="button" value="Record"/>';
  } else {
    str += 'onclick="javascript:doMediaRecord(\'' +
          serviceId + '\');" type="button" value="Record"/>';
  }
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
  let str = '';
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
 */
function doRegisterOnPhoto(serviceId) {
  return new Promise((resolve, reject) => {
    sdk.addEventListener({
      profile: 'mediastreamrecording',
      attribute: 'onphoto',
      params: {
        serviceId: serviceId
      }
    }, message => {
      // イベントメッセージが送られてくる
      if (DEBUG) {
        console.log('Event-Message:' + message)
      }

      let json = JSON.parse(message);
      $('#onPhoto').val(json.photo.path + ':' + json.photo.mimeType);

    }).then(json => {
      resolve(json);
    }).catch(e => {
      alert(e.errorMessage);
      reject(e);
    });
  });
}

/**
 * onPhotoイベントの解除
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterOnPhoto(serviceId) {
  sdk.removeEventListener({
    profile: 'mediastreamrecording',
    attribute: 'onphoto',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}


/**
 * onRecordingChangeイベントの登録
 *
 * @param {String} serviceId サービスID
 */
function doRegisterOnRecordingChange(serviceId) {
  return new Promise((resolve, reject) => {
    sdk.addEventListener({
      profile: 'mediastreamrecording',
      attribute: 'onRecordingChange',
      params: {
        serviceId: serviceId
      }
    }, message => {
      // イベントメッセージが送られてくる
      if (DEBUG) {
        console.log('Event-Message:' + message)
      }

      let json = JSON.parse(message);
      $('#status').val(json.media.status);
      $('#uri').val(json.media.uri);
      $('#path').val(json.media.path);
      $('#mimeType').val(json.media.mimeType);
      if (json.media.errorMessage) {
  	    $('#errorMessage').val(json.media.errorMessage);
  	   }
    }).then(json => {
    	resolve(json);
    }).catch(e => {
      alert(e.errorMessage);
      reject(e);
    });
  });
}

/**
 * onRecordingChangeイベントの解除
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterOnRecordingChange(serviceId) {
  sdk.removeEventListener({
    profile: 'mediastreamrecording',
    attribute: 'onRecordingChange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}


let ws;
let ctx = new (window.AudioContext || window.webkitAudioContext);
let initial_delay_sec = 0;
let scheduled_time = 0;

function playChunk(audio_src, scheduled_time) {
  if (audio_src.start) {
    audio_src.start(scheduled_time);
  } else {
    audio_src.noteOn(scheduled_time);
  }
}

function playAudioStream(audio_f32) {
  console.log("DATA: " + audio_f32.length);

  let audio_buf = ctx.createBuffer(1, audio_f32.length, 44100);
  let audio_src = ctx.createBufferSource();
  let current_time = ctx.currentTime;

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
  let wsUrl = uri.replace('localhost', ip);
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

    let audio = new Int16Array(evt.data);
    let len = audio.length;

    let audioFloat32 = new Float32Array(len);
    for (let i = 0; i < len; i++) {
      audioFloat32[i] = audio[i] / 32768.0;
    }
    playAudioStream(audioFloat32);
  };

}
