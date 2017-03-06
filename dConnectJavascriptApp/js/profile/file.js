/**
 file.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var currentPath = '/';
var deleteMode;
const FILE_MODE_NORMAL = 1;
const FILE_MODE_DELETE = 2;
const FILE_TYPE_FOLDER = '0';
const FILE_TYPE_FILE = '1';
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
  str += '<li><a href="javascript:showFileList(\'' +
        serviceId + '\',\'' + path +
        '\');" value="list">File Manager</a></li>';
  str += '<li><a href="javascript:showFileSend(\'' +
        serviceId + '\');" value="send">File Send</a></li>';
  str += '<li><a href="javascript:showFileReceive(\'' +
        serviceId + '\');" value="receive">File Receive</a></li>';
  str += '<li><a href="javascript:showFileMove(\'' +
        serviceId + '\');" value="move">File Move</a></li>';
  str += '<li><a href="javascript:showMoveDirectory(\'' +
        serviceId + '\');" value="mvDir">Move Directory</a></li>';
  reloadList(str);
}

/**
 * ファイルの移動。
 *
 * @param {String} serviceId サービスID
 */
function showFileMove(serviceId) {
  initAll();

  var btnStr = getBackButton('File Top', 'doFileRecieveBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += makeSelectBoolean('forceOverwrite');
  str += makeInputText('oldPath', 'oldPath', 'oldPath');
  str += makeInputText('newPath', 'newPath', 'newPath');
  str += '<input type="button" onclick="javascript:doFileMove(\'' +
        serviceId + '\');" value="Move File" type="button" >';
  reloadContent(str);
}

/**
 * URIからファイルを移動。
 *
 * @param {String} serviceId サービスID
 */
function doFileMove(serviceId) {
  var forceOverwrite = $('#forceOverwrite').val();
  var oldPath = $('#oldPath').val();
  var newPath = $('#newPath').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('oldPath', oldPath);
  builder.addParameter('newPath', newPath);
  builder.addParameter('forceOverwrite', forceOverwrite);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert(oldPath + 'を' + 'へ' + newPath + '移動しました。');
  }, function(errorCode, errorMessage) {
    showError('PUT file', errorCode, errorMessage);
  });
}
/**
 * ディレクトリの移動。
 *
 * @param {String} serviceId サービスID
 */
function showMoveDirectory(serviceId) {
  initAll();

  var btnStr = getBackButton('File Top', 'doFileRecieveBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += makeInputText('oldPath', 'oldPath', 'oldPath');
  str += makeInputText('newPath', 'newPath', 'newPath');
  str += '<input type="button" onclick="javascript:doDirectoryMove(\'' +
        serviceId + '\');" value="Move Directory" type="button" >';
  reloadContent(str);
}

/**
 * URIからディレクトリを移動。
 *
 * @param {String} serviceId サービスID
 */
function doDirectoryMove(serviceId) {
  var oldPath = $('#oldPath').val();
  var newPath = $('#newPath').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('directory');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('oldPath', oldPath);
  builder.addParameter('newPath', newPath);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert(oldPath + 'を' + 'へ' + newPath + '移動しました。');
  }, function(errorCode, errorMessage) {
    showError('PUT file/directory', errorCode, errorMessage);
  });
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
  str += makeInputText('path', 'path', 'path');
  str += '<input type="button" onclick="javascript:doFileGetUriFromPath(\'' +
        serviceId + '\');" value="Get URI from PATH" type="button" >';
  reloadContent(str);
}

/**
 * PathからURIを取得
 *
 * @param {String} serviceId サービスID
 */
function doFileGetUriFromPath(serviceId) {
  var path = $('#path').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
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

    if (mode === FILE_MODE_DELETE) {
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

    if (mode != FILE_MODE_DELETE) {
      reloadMenu(cmdStr);
    }

    var listStr = '';
    for (var i = 0; i < json.files.length; i++) {
      var iconName = getFileIcon(json.files[i].mimeType,
                    json.files[i].fileType);
      if (json.files[i].fileType == FILE_TYPE_FILE) {
        listStr += '<li>';
        listStr += '<a href="javascript:doFileAction(\'' + serviceId +
                  '\',\'' + json.files[i].path + '\',\'dir/folder\');"  >';
        if (mode == FILE_MODE_DELETE) {
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
        if (mode == FILE_MODE_DELETE) {
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

  showFileList(serviceId, currentPath, FILE_MODE_DELETE);

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

  showFileList(serviceId, currentPath, FILE_MODE_NORMAL);

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
  if (fileType == FILE_TYPE_FILE) {
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
      doRMDir(serviceId, path, false);
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
        (mimeType == 'image/jpg') || (mimeType == 'image/bmp') || (mimeType == 'image/gif')) {
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
  doMediaPlayer(serviceId, path, FILE_MODE_DELETE);
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
  var defaultPath = path;
  if (path.substring(0, 1) != '/') {
    path = currentPath + '/' + path;
  } else {
    path = currentPath + path;
  }
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('directory');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var oncomplete = function() {
    var fileMode = FILE_MODE_NORMAL;
    if (deleteMode) {
      fileMode = FILE_MODE_DELETE;
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
    alert('mkdir ' + defaultPath);
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
 * @param {Boolean} forceRemove 強制削除フラグ
 */
function doRMDir(serviceId, dir, forceRemove) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file');
  builder.setAttribute('directory');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', dir);
  builder.addParameter('forceRemove', forceRemove);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var oncomplete = function() {
    var fileMode = FILE_MODE_DELETE;
    if (deleteMode) {
      fileMode = FILE_MODE_NORMAL;
    }
    console.log("file:" + fileMode);

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
    if (errorCode == 16) {   //Illegal device state.
      if(window.confirm('削除に失敗しました。ディレクトリの中にファイルがあります。全て削除しますか？')) {
         doRMDir(serviceId, dir, true);
         return;
      }
    } else {
       showError('DELETE file/rmdir', errorCode, errorMessage);
    }
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
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var str = '';
  str += '<form action="' + uri + '" method="POST"' +
        ' enctype="multipart/form-data" id="fileForm"><br>';
  str += '<input type="hidden" name="serviceId" value="' + serviceId + '"/>';
  str += '<input type="hidden" name="accessToken" value="' + accessToken + '"/>';
  str += makeSelectBoolean('forceOverwrite');
  str += makeInputText('path', 'path', 'path');
  str += makeInputText('uri', 'uri', 'uri');
  str += '<input type="file" name="data" id="data"/>';
  str += '<input type="button" name="sendButton" id="sendButton"' +
        ' value="Upload" onclick="doFileSend(\'' + serviceId + '\');"/>';
  str += '</form>';

  reloadContent(str);

  $('#data').change(
      function() {
        if (!this.files.length) {
          alert('File is null');
        } else {
          var file = '/' + this.files[0].name;
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
  
  try {
    if (myFormData.get('uri') === '') {
      myFormData.delete('uri');
    }
  } catch (e) {
  }

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
    str += '<img crossorigin="anonymous" src="' + json.uri + '" width="100%">';
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

/**
 * Selectタグによる選択用のUIの作成.
 * 
 */
function makeSelectBoolean(typeName) {
  var btnStr = '';
  btnStr += '<div data-role="fieldcontain">';
  btnStr += '  <label for="boolean">' + typeName +':</label>';
  btnStr += '  <select id="' + typeName + '" name="' + typeName + '">';
  btnStr += '    <option value="false">false</option>';
  btnStr += '    <option value="true">true</option>';
  btnStr += '  </select>';
  btnStr += '</div>';
  return btnStr;
}
