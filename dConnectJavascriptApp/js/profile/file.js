/**
 file.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
let currentPath = '/';

let deleteMode;
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

  let btnStr = getBackButton('Device Top', 'doFileBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  let path = '/';
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

  let btnStr = getBackButton('File Top', 'doFileRecieveBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  let forceOverwrite = $('#forceOverwrite').val();
  let oldPath = $('#oldPath').val();
  let newPath = $('#newPath').val();

  sdk.put({
    profile: 'file',
    params: {
      serviceId: serviceId,
      oldPath: oldPath,
      newPath: newPath,
      forceOverwrite: forceOverwrite
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert(oldPath + 'を' + 'へ' + newPath + '移動しました。');
  }).catch(e => {
    showError('PUT file', e.errorCode, e.errorMessage);
  });
}
/**
 * ディレクトリの移動。
 *
 * @param {String} serviceId サービスID
 */
function showMoveDirectory(serviceId) {
  initAll();

  let btnStr = getBackButton('File Top', 'doFileRecieveBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  let oldPath = $('#oldPath').val();
  let newPath = $('#newPath').val();
  sdk.put({
    profile: 'file',
    attribute: 'directory',
    params: {
      serviceId: serviceId,
      oldPath: oldPath,
      newPath: newPath
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert(oldPath + 'を' + 'へ' + newPath + '移動しました。');
  }).catch(e => {
    showError('PUT file/directory', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('File Top', 'doFileRecieveBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  let path = $('#path').val();
  sdk.get({
    profile: 'file',
    params: {
      serviceId: serviceId,
      path: path
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert('uri:' + json.uri + '\n' + 'mimeType:' + json.mimeType);
  }).catch(e => {
    showError('GET file/receive', e.errorCode, e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doFileBack(serviceId) {
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
 */
function doFileSendBack(serviceId) {
  showFile(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doFileRecieveBack(serviceId) {
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

  let btnStr = getBackButton('File Top', 'doFileListBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  deleteMode = false;
  sdk.get({
    profile: 'file',
    attribute: 'list',
    params: {
      serviceId: serviceId,
      path: path
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    if (mode === FILE_MODE_DELETE) {
      setTitle('File list(Delete Mode)', 'red');
    } else {
      setTitle('File list', 'black');
    }
    currentPath = path;

    let cmdStr = '<input data-icon="folder" data-inline="true"' +
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

    let listStr = '';
    for (let i = 0; i < json.files.length; i++) {
      let iconName = getFileIcon(json.files[i].mimeType,
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
  }).catch(e => {
    closeLoading();
    showError('GET file/list', e.errorCode, e.errorMessage);
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

  let cmdStr = '';
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

  let cmdStr = '';
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
  doRegisterOnStatusChange(serviceId);
  doMediaPlayer(serviceId, path, FILE_MODE_DELETE);
}

/**
 * ファイル削除要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @path {String} path パス
 */
function doDeleteFile(serviceId, path) {
  sdk.delete({
    profile: 'file',
    params: {
      serviceId: serviceId,
      path: path
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    alert('deleted ' + path);
    changeDeleteMode(serviceId);
  }).catch(e => {
    showError('DELETE file/remove', e.errorCode, e.errorMessage);
    changeDeleteMode(serviceId);
  });
}

/**
 * ディレクトリ作成要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMKDir(serviceId) {
  let path = window.prompt('ディレクトリ名を入力してください');
  if (path == null) {
    return;
  }
  let defaultPath = path;
  if (path.substring(0, 1) != '/') {
    path = currentPath + '/' + path;
  } else {
    path = currentPath + path;
  }
  let oncomplete = () => {
    let fileMode = FILE_MODE_NORMAL;
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

  sdk.post({
    profile: 'file',
    attribute: 'directory',
    params: {
      serviceId: serviceId,
      path: path
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('mkdir ' + defaultPath);
    oncomplete();
  }).catch(e => {
    showError('POST file/mkdir', e.errorCode, e.errorMessage);
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
  let oncomplete = function() {
    let fileMode = FILE_MODE_DELETE;
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

  sdk.delete({
    profile: 'file',
    attribute: 'directory',
    params: {
      serviceId: serviceId,
      path: dir,
      forceRemove: forceRemove
    }
  }).then(json =>  {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('rmdir ' + dir);
    oncomplete();
  }).catch(e => {
    if (e.errorCode == 16) {   //Illegal device state.
      if(window.confirm('削除に失敗しました。ディレクトリの中にファイルがあります。全て削除しますか？')) {
         doRMDir(serviceId, dir, true);
         return;
      }
    } else {
       showError('DELETE file/rmdir', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('File Top', 'doFileSendBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form id="fileForm"><br>';
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
          let file = '/' + this.files[0].name;
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

  let myForm = document.getElementById('fileForm');
  let inputs = myForm.elements;
  let params = { serviceId };
  parseInputElements(inputs, params);

  sdk.post({
    profile: 'file',
    params
  }).then(json => {
    closeLoading();
    alert('success:file/send');
  }).catch(e => {
    closeLoading();
    showError('PUT file/send', e.errorCode, e.errorMessage);
  });
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

  let btnStr = getBackButton('File List', 'doImageShowBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  sdk.get({
    profile: 'file',
    params: {
      serviceId: serviceId,
      path: path
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    json.uri = json.uri.replace('localhost', ip);
    let str = '';
    str += '<img crossorigin="anonymous" src="' + json.uri + '" width="100%">';
    str += '</center><br>';
    reloadContent(str);
  }).catch(e =>  {
    showError('GET file/receive', e.errorCode, e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doImageShowBack(serviceId) {
  showFileList(serviceId, currentPath);
}

/**
 * Selectタグによる選択用のUIの作成.
 *
 */
function makeSelectBoolean(typeName) {
  let btnStr = '';
  btnStr += '<div data-role="fieldcontain">';
  btnStr += '  <label for="boolean">' + typeName +':</label>';
  btnStr += '  <select id="' + typeName + '" name="' + typeName + '">';
  btnStr += '    <option value="false">false</option>';
  btnStr += '    <option value="true">true</option>';
  btnStr += '  </select>';
  btnStr += '</div>';
  return btnStr;
}
