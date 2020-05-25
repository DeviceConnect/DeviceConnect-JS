/**
 mediaplayer.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * media_playerのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showMediaPlayer(serviceId) {
  initAll();

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('MediaPlayer Profile');

  let listHtml = '<li><a href="javascript:doMediaList(\'' +
              serviceId + '\');" value="MediaList">MediaList</a></li>';

  reloadList(listHtml);
}

/**
 * Media Listを取得する.
 *
 *
 * @param {String} serviceId サービスID
 */
function doMediaList(serviceId) {
  initAll();

  closeLoading();
  showLoading();

  setTitle('MediaPlayer Media List');

  let str = getBackButton('MediaPlayer TOP', 'doMediaListBack', serviceId);
  reloadContent(str);
  reloadHeader(str);

  sdk.get({
    profile: 'mediaplayer',
    attribute: 'medialist',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    let str = '';
    for (let i = 0; i < json.media.length; i++) {
      str += '<li><a href="javascript:doMediaPlayer(\'' +
              serviceId + '\',\'' + json.media[i].mediaId + '\',1);"  >';
      str += json.media[i].title + '</a></li>';
    }
    reloadList(str);
  }).catch(e => {
    closeLoading();
    showError('mediaplayer/medialist', e.errorCode, e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doMediaListBack(serviceId) {
  showMediaPlayer(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerToFileBack(serviceId) {
  showFileList(serviceId, currentPath, 1);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerBack(serviceId) {
  doUnregisterOnStatusChange(serviceId);
  doMediaList(serviceId);
}

/**
 * MusicPlayer onStatus Eventの登録
 *
 * @param {String} serviceId サービスID
 */
function doRegisterOnStatusChange(serviceId) {
  sdk.addEventListener({
    profile: 'mediaplayer',
    attribute: 'onstatuschange',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }
    let json = JSON.parse(message);
    if (json.mediaPlayer) {
      document.mediaPlayerForm.status.value = json.mediaPlayer.status;
      document.mediaPlayerForm.mediaId.value = json.mediaPlayer.mediaId;
      document.mediaPlayerForm.volume.value = json.mediaPlayer.volume;
      document.mediaPlayerForm.mimeType.value = json.mediaPlayer.mimeType;

      if (json.mediaPlayer.pos !== undefined) {
        $('#mediaPlayerSeek').val(json.mediaPlayer.pos);
        $('#mediaPlayerSeek').slider('refresh');
      }
      if (json.mediaPlayer.volume !== undefined) {
        $('#mediaPlayerVolume').val(json.mediaPlayer.volume * 100);
        $('#mediaPlayerVolume').slider('refresh');
      }
      if (json.mediaPlayer.status !== undefined) {
        if (status === 'mute') {
          $('#mediaPlayerMuteStatus').prop('selectedIndex', 1); // 1: Mute ON
          $('#mediaPlayerMuteStatus').slider('refresh');
        } else if (status === 'unmute') {
          $('#mediaPlayerMuteStatus').prop('selectedIndex', 0); // 0: Mute OFF
          $('#mediaPlayerMuteStatus').slider('refresh');
        }
      }
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * MusicPlayer onStatus Eventの削除
 *
 * @param {String} serviceId サービスID
 */
function doUnregisterOnStatusChange(serviceId) {
  sdk.removeEventListener({
    profile: 'mediaplayer',
    attribute: 'onstatuschange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * MediaPlayer
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 * @param {String} from FileListから実行か, MediaListからの実行か
 */
function doMediaPlayer(serviceId, id, from) {
  initAll();

  doRegisterOnStatusChange(serviceId);

  // back button to media player list
  if (from == 1) {
    let btnStr = getBackButton('Media List', 'doMediaPlayerBack', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);
  } else if (from == 2) {
    let btnStr = getBackButton('File Manager', 'doMediaPlayerToFileBack', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);
  }
  doMediaPlayerMediaGet(serviceId, id);
}

/**
 * メディアを設定する。
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 * @param {Integer} seek メディアの長さ
 */
function doMedia(serviceId, id, seek) {
  let str = '';
  str += '<form  name="mediaPlayerForm">';
  str += '<input type="text" id="mediaId" width="100%">';
  str += '<input type="text" id="mimeType" width="100%">';
  str += '<input type="text" id="volume" width="100%">';
  str += '<input type="text" id="status" width="100%">';
  str += '</form>';
  str += '<input type="text" value="' + id + '"/>';
  str += '<input data-icon="play" data-inline="true" data-mini="true"' +
        ' onclick="javascript:doMediaPlayerPlay(\'' + serviceId +
        '\', \'' + id + '\' );" type="button" value="Play"/>';
  str += '<input data-icon="play" data-inline="true" data-mini="true"' +
        ' onclick="javascript:doMediaPlayerResume(\'' + serviceId +
        '\', \'' + id + '\' );" type="button" value="Resume"/>';
  str += '<input data-icon="pause" data-inline="true" data-mini="true"' +
        ' onclick="javascript:doMediaPlayerPause(\'' +
        serviceId + '\');" type="button" value="Pause"/>';
  str += '<input data-icon="stop" data-inline="true" data-mini="true"' +
        ' onclick="javascript:doMediaPlayerStop(\'' +
        serviceId + '\');" type="button" value="Stop"/>';
  str += '<p>';
  str += '<label for="mediaPlayerSeek">Seek:</label>';
  str += '<input type="range" name="mediaPlayerSeek" id="mediaPlayerSeek"' +
        ' value="0" min="0" max=\'' + seek + '\' step="1" />';
  str += '<input type="button" onclick="doMediaPlayerSeekPut(\'' +
        serviceId + '\');" id="mediaPlayerSeekPut" value="Set seek" />';
  str += '</p>';
  str += '<p>';
  str += '<p>';
  str += '<label for="mediaPlayerVolume">Volume:</label>';
  str += '<input type="range" name="mediaPlayerVolume" id="mediaPlayerVolume"' +
        ' value="0" min="0" max="100" step="1" />';
  str += '<input type="button" onclick="doMediaPlayerVolumePut(\'' +
        serviceId + '\');" id="mediaPlayerVolumePut" value="Set volume" />';
  str += '</p>';
  str += '<p>';
  str += '<label for="mediaPlayerMuteStatus">Mute:</label>';
  str += '<select name="mediaPlayerMuteStatus" id="mediaPlayerMuteStatus"' +
        ' data-role="slider">';
  str += '<option value="off">Off</option>';
  str += '<option value="on">On</option>';
  str += '</select>';
  str += '</p>';
  reloadContent(str);

  $('#mediaPlayerMuteStatus').bind('change', function(event, ui) {
    if ($('#mediaPlayerMuteStatus').val() === 'off') {
      doMediaPlayerMuteChange(serviceId, false);
    } else if ($('#mediaPlayerMuteStatus').val() === 'on') {
      doMediaPlayerMuteChange(serviceId, true);
    }
  });
  $('#mediaPlayerSeek').slider('disable');
  $('#mediaPlayerSeek').slider('refresh');
  $('#mediaPlayerSeekPut').button('disable');
  $('#mediaPlayerSeekPut').button('refresh');
  $('#mediaPlayerVolume').slider('disable');
  $('#mediaPlayerVolume').slider('refresh');
  $('#mediaPlayerVolumePut').button('disable');
  $('#mediaPlayerVolumePut').button('refresh');
  $('#mediaPlayerMuteStatus').slider('disable');
  $('#mediaPlayerMuteStatus').slider('refresh');
  doMediaPlayerVolumeGet(serviceId);
  doMediaPlayerMuteGet(serviceId, id);
  doMediaPlayerStatusGet(serviceId);
  doMediaPlayerSeekGet(serviceId);
}

/**
 * PUT media メディアファイルの設定
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 * @param {Function} callback コールバック
 */
function doMediaPlayerMediaPut(serviceId, id, callback) {
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'media',
    params: {
      serviceId: serviceId,
      mediaId: id
    }
  }).then(json => {
    if (json.result == 0) {
      setTitle('MediaPlayer');
      initListView();
    } else {
      showError('PUT mediaplayer/media', json);
    }
    if (callback) {
      callback();
    }
  }).catch(e => {
    showError('PUT mediaplayer/media', e.errorCode, e.errorMessage);
  });
}
/**
 * GET media メディアファイルの取得
 *
 * @param {String}serviceId サービスID
 * @param {String}id メディアID
 */
function doMediaPlayerMediaGet(serviceId, id) {
  let params = {
    profile: 'mediaplayer',
    attribute: 'media',
    params: {
      serviceId: serviceId,
      mediaId: id
    }
  };
  if (myDeviceName.indexOf('Chromecast') != -1) {
    showLoading();
    doMediaPlayerMediaPut(serviceId, id, function() {
      sdk.get(params).then(json => {
        if (DEBUG) {
          console.log('Response: ', json);
        }
        let seek = json.duration;
        if (!json.duration) {
          seek = 100;
        }
        doMediaPlayerPlay(serviceId, id, function() {
          closeLoading();
          doMedia(serviceId, id, seek);
        });
      }).catch(e => {
        showError('GET mediaplayer/media', e.errorCode, e.errorMessage);
      });
    });
  } else {
    sdk.get(params).then(json => {
      if (DEBUG) {
        console.log('Response: ', json);
      }
      let seek = json.duration;
      if (!json.duration) {
        seek = 100;
      }
      doMedia(serviceId, id, seek);
    }).catch(e => {
      showError('GET mediaplayer/media', e.errorCode, e.errorMessage);
    });
  }
}

/**
 * メディア再生要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 * @param {Function} callback コールバック
 */
function doMediaPlayerPlay(serviceId, id, callback) {
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'play',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.result == 0) {

    } else {
      showError('PUT mediaplayer/play', json);
    }
    if (callback) {
      callback();
    }
  }).catch(e => {
    showError('PUT mediaplayer/play', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアresume要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 */
function doMediaPlayerResume(serviceId, id) {
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'resume',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediaplayer/resume', e.errorCode, e.errorMessage);
  });
}

/**
 * メディア停止要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerStop(serviceId) {
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'stop',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediaplayer/stop', e.errorCode, e.errorMessage);
  });
}

/**
 * メディア一時停止要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerPause(serviceId) {
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'pause',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediaplayer/pause', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアのシーク設定要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerSeekPut(serviceId) {
  let pos = $('#mediaPlayerSeek').val();
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'seek',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediaplayer/seek', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアの音量変更要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerVolumePut(serviceId) {
  let level = $('#mediaPlayerVolume').val() / 100;
  sdk.put({
    profile: 'mediaplayer',
    attribute: 'volume',
    params: {
      serviceId: serviceId,
      volume: volume
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediaplayer/volume', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアの音量取得要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerVolumeGet(serviceId) {
  sdk.get({
    profile: 'mediaplayer',
    attribute: 'volume',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    $('#mediaPlayerVolume').val(json.volume * 100);
    $('#mediaPlayerVolume').slider('enable');
    $('#mediaPlayerVolume').slider('refresh');
    $('#mediaPlayerVolumePut').button('enable');
    $('#mediaPlayerVolumePut').button('refresh');
  }).catch(e => {
    showError('GET mediaplayer/volume', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアのミュート開始または解除要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {Boolean} isMute ミュート開始の場合はtrue、ミュート解除の場合はfalse
 */
function doMediaPlayerMuteChange(serviceId, isMute) {
  let method;
  if (isMute) {
    method = 'PUT';
  } else {
    method = 'DELETE';
  }

  sdk.sendRequest(method, {
    profile: 'mediaplayer',
    attribute: 'mute',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError(method + ' mediaplayer/mute', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアのミュート状態要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} mediaId メディアID
 */
function doMediaPlayerMuteGet(serviceId, mediaId) {
  sdk.get({
    profile: 'mediaplayer',
    attribute: 'mute',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (json.result == 0) {
      let status = json.mute ? 1 : 0;
      $('#mediaPlayerMuteStatus').prop('selectedIndex', status);
      $('#mediaPlayerMuteStatus').slider('enable');
      $('#mediaPlayerMuteStatus').slider('refresh');
    } else {
      showError('GET mediaplayer/mute', json);
    }
    if (myDeviceName.indexOf('Chromecast') == -1) {
      doMediaPlayerMediaPut(serviceId, mediaId);
    }
  }).catch(e => {
    showError('GET mediaplayer/mute', e.errorCode, e.errorMessage);
    doMediaPlayerMediaPut(serviceId, mediaId);
  });
}

/**
 * メディアのSeek位置変更要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerSeekPut(serviceId) {
  let pos = $('#mediaPlayerSeek').val();

  sdk.put({
    profile: 'mediaplayer',
    attribute: 'seek',
    params: {
      serviceId: serviceId,
      pos: pos
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('PUT mediaplayer/seek', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアのSeek位置取得要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerSeekGet(serviceId) {
  sdk.get({
    profile: 'mediaplayer',
    attribute: 'seek',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    $('#mediaPlayerSeek').val(json.pos);
    $('#mediaPlayerSeek').slider('enable');
    $('#mediaPlayerSeek').slider('refresh');
    $('#mediaPlayerSeekPut').button('enable');
    $('#mediaPlayerSeekPut').button('refresh');
  }).catch(e => {
    showError('GET mediaplayer/seek', e.errorCode, e.errorMessage);
  });
}

/**
 * メディアの再生状態要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerStatusGet(serviceId) {
  sdk.get({
    profile: 'mediaplayer',
    attribute: 'playstatus',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    $('#status').val(json.status);
  }).catch(e => {
    showError('GET mediaplayer/volume', e.errorCode, e.errorMessage);
  });
}
