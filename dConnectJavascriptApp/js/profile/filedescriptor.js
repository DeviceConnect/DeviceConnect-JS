/**
 filedescriptor.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * File Descriptorプロファイルのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showFileDescriptor(serviceId) {
  initAll();

  var btnStr = getBackButton('Device Top', 'doFileDescriptorBack',
      serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  var sessionKey = currentClientId;

  var str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetOnWatchFile(\'' +
        serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" onclick=\"doRegisterOnWatchFile(\'' +
          serviceId + '\', \'' + sessionKey +
          '\')\" type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
        ' onclick=\"doUnregisterOnWatchFile(\'' + serviceId + '\', \'' +
        sessionKey + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<form  name="fileDescriptorForm">';
  str += '<div class="ui-field-contain">';
  str += '<label for="path">Path:</label>';
  str += '<input type="text" data-mini="true" name="path" id="path" value="">';
  str += '</div>';
  str += '<SELECT name="flag" id="flag">';
  str += '<OPTION value="rw">Read/Write</OPTION>';
  str += '<OPTION value="r">Read</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input type="button" onclick="doOpenFile(\'' + serviceId +
          '\');" id="openFile" value="Open file" />';

  reloadContent(str);
}

/**
 * Backボタン.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doFileDescriptorBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Backボタン.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doOpenFileBack(serviceId, sessionKey) {
  doUnregisterOnWatchFile(serviceId, sessionKey);
  showFileDescriptor(serviceId);
}

/**
 * ファイルオープン要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doOpenFile(serviceId) {
  var sessionKey = currentClientId;
  var flag = $('#flag').val();
  var path = $('#path').val();
  var btnStr = getBackButton('FileDescriptor Top', 'doOpenFileBack',
                  serviceId, sessionKey);

  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('open');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  builder.addParameter('flag', flag);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri:' + uri)
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    initAll();
    initContent();
    var str = '';
    str += '<form  name="fileDescriptorForm">';
    str += '<center>';
    str += '<div class="ui-grid-a">';
    str += '<div class="ui-block-a"><div class="ui-bar ui-bar-a">Path: ' +
          path + '</div></div>';
    str += '<div class="ui-block-b"><div class="ui-bar ui-bar-a">Flag: ' +
          flag + '</div></div>';
    str += '</div>'
    str += '<input type="text" name="event" id="event" value="">';
    str += '</center>';
    reloadMenu(str);
    var str = '';
    str += getFileWriteHtml(serviceId, path, flag, sessionKey);
    str += getFileReadHtml(serviceId, path, flag, sessionKey);
    str += getCloseHtml(serviceId, sessionKey);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    showError('file_descriptor/open', errorCode, errorMessage);
  });
}

/**
 * ファイル書き込み要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doWriteFile(serviceId, sessionKey) {
  var position = document.fileDescriptorWriteForm.position.value;
  var path = document.fileDescriptorWriteForm.path.value;
  var flag = document.fileDescriptorWriteForm.flag.value;

  var form = document.getElementById('fileDescriptorWriteForm');
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', form.action, false);
  xhr.onreadystatechange = function() {
    var obj = {errorMessage: 'Unknown Error'};
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status == 0) {
        obj = JSON.parse(xhr.responseText);
        if (obj.result == 0) {
          var str = '';
          str += getFileWriteHtml(serviceId, path, flag, sessionKey);
          str += getFileReadHtml(serviceId, path, flag, sessionKey);
          str += getCloseHtml(serviceId, sessionKey);
          str += getProfileListLink(serviceId);
          $('#contents').html(str).trigger('create');
          alert('Succeeded to write.');
          return;
        }
      }
    }
    showError('PUT file_descriptor/write', obj.errorCode, obj.errorMessage);
  };
  xhr.send(formData);
}

/**
 * ファイル読み込み要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doReadFile(serviceId, sessionKey) {
  var length = document.fileDescriptorReadForm.length.value;
  var position = document.fileDescriptorReadForm.position.value;
  var path = document.fileDescriptorReadForm.path.value;
  var flag = document.fileDescriptorReadForm.flag.value;

  initResult();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('read');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  builder.addParameter('position', position);
  builder.addParameter('length', length);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    setTitle('Read');
    var result = json.fileData;

    var str = '';
    str += getFileWriteHtml(serviceId, path, flag, sessionKey);
    str += getFileReadHtml(serviceId, path, flag, sessionKey);

    str += '<textarea cols="40" rows="10" name="textarea-8" id="textarea-8">';
    str += result;
    str += '</textarea>';
    str += getCloseHtml(serviceId, sessionKey);

    reloadContent(str);
  }, function(errorCode, errorMessage) {
    showError('GET file_descriptor/read', errorCode, errorMessage);
  });
}

/**
 * ファイルクローズ要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doCloseFile(serviceId, sessionKey) {
  var path = document.fileDescriptorReadForm.path.value;

  initResult();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('close');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    setTitle('Close');
    showFileDescriptor(serviceId, sessionKey);
  }, function(errorCode, errorMessage) {
    showError('PUT file_descriptor/close', errorCode, errorMessage);
  });
}

/*
 * OnWatchFileイベントの登録.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doGetOnWatchFile(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('onwatchfile');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (json.file) {
      alert('UPDATE: ' + json.file.path);
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
}
/*
 * OnWatchFileイベントの登録.
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doRegisterOnWatchFile(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('onwatchfile');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    if (DEBUG) {
      console.log('Event-Message: ' + message);
    }
    var json = JSON.parse(message);
    if (json.profile === 'file_descriptor') {
      document.fileDescriptorForm.event.value = json.file.curr;
      if (DEBUG) {
        console.log(json.file.curr);
      }
    }
  }, function() {
    if (DEBUG) {
      console.log('Success to add event listener');
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
}

/*
 * OnWatchFileイベントの削除.
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doUnregisterOnWatchFile(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('onwatchfile');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.removeEventListener(uri, function() {
    if (DEBUG) {
      console.log('Success to remove event listener');
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ', errorMessage=' + errorMessage);
  });
}

/*
 * ファイル書き込み用HTMLを生成する.
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 * @param {String} flag RWのフラグ
 * @param {String} sessionKey セッションKey
 */
function getFileWriteHtml(serviceId, path, flag, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('file_descriptor');
  builder.setAttribute('write');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  var str = '';
  str += '<form  action="' + uri + '" method="PUT"' +
        ' enctype="multipart/form-data" name="fileDescriptorWriteForm"' +
        ' id="fileDescriptorWriteForm"><br>';
  str += '<div class="ui-field-contain">';
  str += '<label for="media">File:</label>';
  str += '<input type="file" name="media" id="media" value="">';
  str += '<label>Position:</label>';
  str += '<input type="text" data-mini="true" name="position"' +
        ' id="position" value="">';
  str += '</div>';

  str += '<input type="hidden" name="path" id="path" value="' + path + '">';
  str += '<input type="hidden" name="flag" id="flag" value="' + flag + '">';

  str += '<input type="button" onclick="doWriteFile(\'' + serviceId +
        '\',\'' + sessionKey + '\');" id="writeFile" value="Write file"  />';
  str += '</form>';
  return str;
}

/*
 * ファイル読み込み用HTMLを生成する.
 *
 * @param {String}serviceId サービスID
 * @param {String}path パス
 * @param {String}flag RWのフラグ
 * @param {String}sessionKey セッションKey
 */
function getFileReadHtml(serviceId, path, flag, sessionKey) {
  var str = '';
  str += '<form  name="fileDescriptorReadForm">';
  str += '<div class="ui-field-contain">';
  str += '<label>Position:</label>';
  str += '<input type="text" data-mini="true" name="position"' +
  ' id="position" value="">';
  str += '<input type="hidden" name="path" id="path" value="' + path + '">';
  str += '<input type="hidden" name="flag" id="flag" value="' + flag + '">';
  str += '<label for="length">Length:</label>';
  str += '<input type="text" data-mini="true" name="length"' +
  ' id="length" value="">';
  str += '</div>';
  str += '<input type="button" onclick="doReadFile(\'' +
  serviceId + '\',\'' + sessionKey +
  '\');" id="readFile" value="Read file"  />';
  str += '</form>';
  return str;
}

/*
 * ファイルクローズ用HTMLを生成する.
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKey
 */
function getCloseHtml(serviceId, sessionKey) {
  return '<input type="button" onclick="doCloseFile(\'' +
      serviceId + '\', \'' + sessionKey +
      '\');" value="Close file"  />';
}
