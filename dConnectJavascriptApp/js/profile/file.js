/**
 file.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var currentPath = '/';
var deleteMode;

/**
 * Fileプロファイルのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showFile(serviceId) {
  initAll();
  setTitle('File Profile', 'black');

  var btnStr = getBackButton('Device Top', 'doFileBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  var path = '/';
  if (myDeviceName.indexOf('Pebble') != -1) {
    str += '<li><a href="javascript:showFileSend(\'' +
          serviceId + '\');" value="send">File Send</a></li>';
  } else if (myDeviceName.indexOf('SmartWatch') != -1) {
    str += '<li><a href="javascript:showFileSend(\'' +
          serviceId + '\');" value="send">File Send</a></li>';
  } else {
    str += '<li><a href="javascript:showFileList(\'' +
          serviceId + '\',\'' + path +
          '\');" value="list">File Manager</a></li>';
    str += '<li><a href="javascript:showFileSend(\'' +
          serviceId + '\');" value="send">File Send</a></li>';
    str += '<li><a href="javascript:showFileReceive(\'' +
          serviceId + '\',\'' + path +
          '\');" value="send">File Receive</a></li>';
  }
  reloadList(str);
}

/**
 * ファイルURIの取得
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 */
function showFileReceive(serviceId, path) {
  initAll();

  var btnStr = getBackButton('File Top', 'doFileRecieveBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += makeInputText('path', 'path', 'path')
  str += '<input type="button" onclick="javascript:doFileGetUriFromPath(\'' +
        serviceId + '\',\'' + path +
        '\');" value="Get URI from PATH" type="button" >';
  reloadContent(str);
}

/**
 * PathからURIを取得
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 */
function doFileGetUriFromPath(serviceId, path) {
  var path = $('#path').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('receive');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert('uri:' + json.uri + '\n' + 'mimeType:' + json.mimeType);
  }, function(errorCode, errorMessage) {
    showError('GET file/receive', errorCode, errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doFileBack(serviceId, sessionKey) {
  searchDevice(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doFileListBack(serviceId, sessionKey) {
  showFile(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doFileSendBack(serviceId, sessionKey) {
  showFile(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doFileRecieveBack(serviceId, sessionKey) {
  showFile(serviceId);
}

/**
 * ファイル一覧の表示<br>
 * uri:/file/list
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 * @param {Number} mode 表示モード(1: normal, 2:削除)
 */
function showFileList(serviceId, path, mode) {
  initAll();

  closeLoading();
  showLoading();

  var btnStr = getBackButton('File Top', 'doFileListBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  deleteMode = false;

  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('list');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    if (mode === 2) {
      setTitle('File list(Delete Mode)', 'red');
    } else {
      setTitle('File list', 'black');
    }
    currentPath = path;

    var cmdStr = '<input data-icon="folder" data-inline="true"' +
                ' data-mini="true"' +
                ' onclick="javascript:showFileList(\'' + serviceId +
                '\',\'/\');" type="button" value=" / "/>';
    cmdStr += '<input data-icon="delete" data-inline="true" data-mini="true"' +
              ' onclick="javascript:changeDeleteMode(\'' + serviceId +
              '\');" type="button" value="Delete Mode"/>';
    cmdStr += '<input data-icon="folder" data-inline="true" data-mini="true"' +
              ' onclick="javascript:doMKDir(\'' + serviceId +
              '\');" type="button" value="mkdir"/>';

    if (mode != 2) {
      reloadMenu(cmdStr);
    }

    var listStr = '';
    for (var i = 0; i < json.files.length; i++) {
      var iconName = getFileIcon(json.files[i].mimeType,
                    json.files[i].fileType);
      if (json.files[i].fileType == '1') {
        listStr += '<li>';
        listStr += '<a href="javascript:doFileAction(\'' + serviceId +
                  '\',\'' + json.files[i].path + '\',\'dir/folder\');"  >';
        if (mode == 2) {
          listStr += '<img src="css/images/icon_del.png">';
        }
        listStr += '<img src=\'' + iconName + '\' >' +
                  json.files[i].fileName + '</a></li>';
      } else {
        listStr += '<li>';
        listStr += '<a href="javascript:doFileAction(\'' +
                  serviceId + '\',\'' + json.files[i].path +
                  '\',\'' + json.files[i].mimeType +
                  '\');"  >';
        if (mode == 2) {
          listStr += '<img src="css/images/icon_del.png">';
        }
        listStr += '<img src=\'' + iconName + '\' >' +
                  json.files[i].fileName + '</a></li>';
      }
    }
    closeLoading();
    reloadList(listStr);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET file/list', errorCode, errorMessage);
  });
}

/**
 * UIをファイル削除モードに遷移させる.
 *
 * @param {String} serviceId サービスID
 */
function changeDeleteMode(serviceId) {
  setTitle('File list(Delete Mode)', 'red');

  showFileList(serviceId, currentPath, 2);

  var cmdStr = '';
  cmdStr += '<input data-icon="folder" data-inline="true"' +
            ' data-mini="true" onclick="javascript:showFileList(\'' +
            serviceId +
            '\',\'/\',\'1\');" type="button" value=" / "/>';
  cmdStr += '<input data-icon="delete" data-inline="true" data-mini="true"' +
            ' onclick="javascript:changeNormalMode(\'' + serviceId +
            '\');" type="button" value="Normal  Mode"/>';
  cmdStr += '<input data-icon="folder" data-inline="true" data-mini="true"' +
            ' onclick="javascript:doMKDir(\'' + serviceId +
            '\');" type="button" value="mkdir"/>';

  reloadMenu(cmdStr);
  deleteMode = true;
}

/**
 * UIをファイル閲覧モードに遷移させる.
 *
 * @param {String}serviceId サービスID
 */
function changeNormalMode(serviceId) {
  deleteMode = false;
  setTitle('File list', 'black');

  showFileList(serviceId, currentPath, 1);

  var cmdStr = '';
  cmdStr = '<input data-icon="folder" data-inline="true" data-mini="true"' +
          ' onclick="javascript:showFileList(\'' + serviceId +
          '\',\'/\');" type="button" value=" / " />';
  cmdStr += '<input data-icon="delete" data-inline="true" data-mini="true"' +
          ' onclick="javascript:changeDeleteMode(\'' + serviceId +
          '\');" type="button" value="Delete  Mode" />';
  cmdStr += '<input data-icon="folder" data-inline="true" data-mini="true"' +
          ' onclick="javascript:doMKDir(\'' + serviceId +
          '\');" type="button" value="mkdir"/>';
  reloadMenu(cmdStr);
}

/**
 * Get Icon
 *
 * @param {String} mimeType MIME/Type
 * @param {String} fileType 0ならフォルダ,1ならファイル
 * @return {String} アイコンのURI
 */
function getFileIcon(mimeType, fileType) {
  if (fileType == '1') {
    iconName = 'css/images/icon_folder.png';
  } else if ((mimeType == 'audio/mpeg') || (mimeType == 'audio/x-wav') ||
      (mimeType == 'audio/x-ms-wma') || (mimeType == 'audio/mp3') ||
      (mimeType == 'audio/ogg') || (mimeType == 'audio/mp4')) {
    iconName = 'css/images/icon_music.png';
  } else if ((mimeType == 'image/png') || (mimeType == 'image/jpeg') ||
      (mimeType == 'image/jpg') || (mimeType == 'image/bmp')) {
    iconName = 'css/images/icon_pic.png';
  } else if ((mimeType == 'video/3gpp') || (mimeType == 'video/mp4') ||
      (mimeType == 'video/m4v') || (mimeType == 'video/3gpp2') ||
      (mimeType == 'video/mpeg')) {
    iconName = 'css/images/icon_video.png';
  } else {
    iconName = 'css/images/icon_file.png';
  }
  return iconName;
}

/**
 * MIME/TYPE毎にActionを振り分け
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 * @param {String} mimeType MIME/TYPE
 */
function doFileAction(serviceId, path, mimeType) {
  if (deleteMode) {
    if (mimeType == 'dir/folder') {
      doRMDir(serviceId, path);
    } else {
      doDeleteFile(serviceId, path, mimeType);
    }
  } else {
    initAll();
    if (mimeType == 'dir/folder') {
      showFileList(serviceId, path);
    } else if ((mimeType == 'audio/mpeg') || (mimeType == 'audio/x-wav') ||
        (mimeType == 'audio/x-ms-wma') || (mimeType == 'audio/mp3') ||
        (mimeType == 'audio/ogg') || (mimeType == 'audio/mp4')) {
      doMediaPlay(serviceId, path);
    } else if ((mimeType == 'image/png') || (mimeType == 'image/jpeg') ||
        (mimeType == 'image/jpg') || (mimeType == 'image/bmp')) {
      doImageShow(serviceId, path);
    } else if ((mimeType == 'video/3gpp') || (mimeType == 'video/mp4') ||
        (mimeType == 'video/m4v') || (mimeType == 'video/3gpp2') ||
        (mimeType == 'video/mpeg')) {
      doMediaPlay(serviceId, path);
    } else {
      alert('Unsupported MIME-Type: ' + mimeType);
      showFileList(serviceId, currentPath, 1);

    }
  }
}

/**
 * Video/Musicの再生
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 */
function doMediaPlay(serviceId, path) {
  var sessionKey = currentClientId;
  doRegisterOnStatusChange(serviceId, sessionKey);
  doMediaPlayer(serviceId, path, 2);
}

/**
 * ファイル削除要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @path {String} path パス
 */
function doDeleteFile(serviceId, path) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('remove');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert('deleted ' + path);
    changeDeleteMode(serviceId);
  }, function(errorCode, errorMessage) {
    showError('DELETE file/remove', errorCode, errorMessage);
    changeDeleteMode(serviceId);
  });
}

/**
 * ディレクトリ作成要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMKDir(serviceId) {
  var path = window.prompt('ディレクトリ名を入力してください');
  if (path == null) {
    return;
  }
  if (path.substring(0, 1) != '/') {
    path = currentPath + '/' + path;
  } else {
    path = currentPath + path;
  }
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('mkdir');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var oncomplete = function() {
    var fileMode = 1;
    if (deleteMode) {
      fileMode = 2;
    }
    if (deleteMode) {
      changeDeleteMode(serviceId);
    } else {
      changeNormalMode(serviceId);
    }
    showFileList(serviceId, currentPath, fileMode);
  };

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('mkdir ' + path);
    oncomplete();
  }, function(errorCode, errorMessage) {
    showError('POST file/mkdir', errorCode, errorMessage);
    oncomplete();
  });
}
/**
 * ディレクトリ削除要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} dir ディレクトリ名
 */
function doRMDir(serviceId, dir) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('rmdir');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', dir);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var oncomplete = function() {
    var fileMode = 1;
    if (deleteMode) {
      fileMode = 2;
    }
    if (deleteMode) {
      changeNormalMode(serviceId);
    } else {
      changeDeleteMode(serviceId);
    }
    showFileList(serviceId, currentPath, fileMode);
  };

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('rmdir ' + dir);
    oncomplete();
  }, function(errorCode, errorMessage) {
    showError('DELETE file/rmdir', errorCode, errorMessage);
    oncomplete();
  });
}
/**
 * ファイル送信フォームを表示する.
 *
 * @param {String} serviceId　サービスID
 */
function showFileSend(serviceId) {
  initAll();
  setTitle('File Profile(Send)');

  var btnStr = getBackButton('File Top', 'doFileSendBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('send');
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var str = '';
  str += '<form action="' + uri + '" method="POST"' +
        ' enctype="multipart/form-data" id="fileForm"><br>';
  str += '<input type="hidden" name="serviceId" value="' + serviceId + '"/>';
  str += '<input type="hidden" name="accessToken" value="' +
        accessToken + '"/>';
  str += makeInputText('path', 'path', 'path');
  str += '<input type="file" name="data" id="data"/>';
  str += '<input type="button" name="sendButton" id="sendButton"' +
        ' value="Upload" onclick="doFileSend(\'' + serviceId + '\');"/>';
  str += '</form>';

  reloadContent(str);

  $('#data').change(
      function() {
        if (!this.files.length) {
          alert('File is null');
          return;
        } else {
          var file = '/' + this.files[0].name;
          $('#path').val(file);
        }
      }
  );
}

/**
 * ファイル送信処理.
 *
 *  @param {String} serviceId サービスID
 */
function doFileSend(serviceId) {
  closeLoading();
  showLoading();

  var myForm = document.getElementById('fileForm');
  var myFormData = new FormData(myForm);
  var myXhr = new XMLHttpRequest();

  myXhr.open(myForm.method, myForm.action, true);
  myXhr.onreadystatechange = function() {
    if (myXhr.readyState === 4) {
      if (myXhr.status === 200 || myXhr.status == 0) {
        if (DEBUG) {
          console.log('Response:' + myXhr.responseText)
        }
        var str = '';
        var obj = JSON.parse(myXhr.responseText);
        if (obj.result == 0) {
          alert('success:file/send');
          $('#path').val('');
          $('#data').val('');
        } else {
          showError('PUT file/send', obj.errorCode, obj.errorMessage);
        }
      } else {
        alert('error:' + myXhr.status);
      }
      closeLoading();
    }
  };
  myXhr.send(myFormData);
}

/**
 * 画像の表示
 *
 * @param {String} serviceId サービスID
 * @path {String} path パス名
 */
function doImageShow(serviceId, path) {
  initAll();
  setTitle('ImageShow');

  var btnStr = getBackButton('File List', 'doImageShowBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('receive');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    json.uri = json.uri.replace('localhost', ip);
    var str = '';
    str += '<img src="' + json.uri + '" width="100%">';
    str += '</center><br>';
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    showError('GET file/receive', errorCode, errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doImageShowBack(serviceId, sessionKey) {
  showFileList(serviceId, currentPath);
}
