module('File Profile Normal Test', {
  setup: function() {
    init();
    for (var i = 0; i < 10; i++) {
        FileProfileNormalTest.saveFile(i + '.jpg');
    }
  }
});

/**
 * Fileプロファイルのテストを行なうクラス
 * @class
 */

var FileProfileNormalTest = {};

FileProfileNormalTest.saveFile = function(fileName, successCB, errorCB) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);

  var blob = FileProfileNormalTest.draw('file test');
  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('path', '/' + fileName);
  formData.append('mimeType', 'image/jpeg');
  formData.append('data', blob);
  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
      if (successCB) {
          successCB(accessToken, serviceId);
      }
  }, function(errorCode, errorMessage) {
      if (errorCB) {
          errorCB(errorCode, errorMessage);
      }
  });
};


FileProfileNormalTest.mkdir = function(dirName, successCB, errorCB) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, dirName);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      if (successCB) {
          successCB(accessToken, serviceId);
      }
  }, function(errorCode, errorMessage) {
      if (errorCB) {
          errorCB(errorCode, errorMessage);
      }
  });
};


FileProfileNormalTest.removeFile = function(fileName, successCB, errorCB) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, fileName);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
      if (successCB) {
          successCB(accessToken, serviceId);
      }
  }, function(errorCode, errorMessage) {
      if (errorCB) {
          errorCB(errorCode, errorMessage);
      }
  });
};
FileProfileNormalTest.rmdir = function(dirName, successCB, errorCB) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, dirName);
  builder.addParameter('forceRemove', true);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    console.log('success!! remove dir for ' + dirName);
  }, function(errorCode, errorMessage) {
    console.log('failure!! remove dir for ' + dirName);
  });
};


FileProfileNormalTest.draw = function(text) {
  var width = 120;
  var height = 120;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.beginPath();
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.stroke();
  context.restore();
  context.save();

  context.beginPath();
  context.font = "18pt Arial";
  context.fillStyle = 'rgb(0, 0, 0)';
  for (var i = 0; i < 10; i++) {
    context.fillText(text, 10, (i + 1) * 20);
  }
  context.restore();
  context.save();

  canvas = canvas.toDataURL();
  var base64Data = canvas.split(',')[1];
  var data = window.atob(base64Data);
  var buff = new ArrayBuffer(data.length);
  var arr = new Uint8Array(buff);
  var blob, i, dataLen;
  for (i = 0, dataLen = data.length; i < dataLen; i++) {
    arr[i] = data.charCodeAt(i);
  }
  blob = new Blob([arr], {type: 'image/jpeg'});
  return blob;
};

/**
 * GETメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest001', FileProfileNormalTest.listNormalTest001);

/**
 * order=path,ascを指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest002', FileProfileNormalTest.listNormalTest002);

/**
 * order=path,descを指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest003', FileProfileNormalTest.listNormalTest003);

/**
 * order=path,asc , limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 10);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest004', FileProfileNormalTest.listNormalTest004);

/**
 * order=path,desc , limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 10);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest006', FileProfileNormalTest.listNormalTest006);

/**
 * order=path,asc , limit=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 0);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest007', FileProfileNormalTest.listNormalTest007);

/**
 * order=path,desc , limit=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&limit=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 0);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest008', FileProfileNormalTest.listNormalTest008);

/**
 * order=path,asc ,offset=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.listNormalTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 0);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest009', FileProfileNormalTest.listNormalTest009);

/**
 * order=path,desc ,offset=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&offset=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest010 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 0);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest010', FileProfileNormalTest.listNormalTest010);

/**
 * order=path,asc ,offset=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest011 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 0);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest011', FileProfileNormalTest.listNormalTest011);

/**
 * order=path,desc ,offset=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&offset=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest012 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 0);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest012', FileProfileNormalTest.listNormalTest012);

/**
 * order=path,asc ,offset=0, limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=0&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest013 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 0);
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 10);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest013', FileProfileNormalTest.listNormalTest013);

/**
 * order=path,desc ,offset=0 ,limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&offset=0&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest014 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 0);
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 10);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('listNormalTest014', FileProfileNormalTest.listNormalTest014);

/**
 * order=path,asc ,path=/を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&path='/'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest015 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '/');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('listNormalTest015', FileProfileNormalTest.listNormalTest015);
}
/**
 * order=path,desc ,path=/を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&path='/'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest016 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '/');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('listNormalTest016', FileProfileNormalTest.listNormalTest016);
}
/**
 *
 * POSTメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.sendNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);

  var blob = FileProfileNormalTest.draw('file test');
  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('path', '/1_2.jpg');
  formData.append('mimeType', 'image/jpeg');
  formData.append('data', blob);
  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(true, 'result=' + json.result);
    FileProfileNormalTest.removeFile('/1_2.jpg');
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('sendNormalTest001', FileProfileNormalTest.sendNormalTest001);


/**
 *
 * すでに存在しているファイルをforceWrite=trueの時にPOSTメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.sendNormalTest002 = function(assert) {
  FileProfileNormalTest.saveFile('/2_2.jpg', function(accessToken, serviceId) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);

      var blob = FileProfileNormalTest.draw('file test');
      var formData = new FormData();
      formData.append('serviceId', serviceId);
      formData.append('accessToken', accessToken);
      formData.append('path', '/2_2.jpg');
      formData.append('mimeType', 'image/jpeg');
      formData.append('data', blob);
      formData.append('forceOverwrite', true);
      var uri = builder.build();
      dConnect.post(uri, null, formData, function(json) {
          assert.ok(true, 'result=' + json.result);
          FileProfileNormalTest.removeFile('/2_2.jpg');
          QUnit.start();
      }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          FileProfileNormalTest.removeFile('/2_2.jpg');
          QUnit.start();
      });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    FileProfileNormalTest.removeFile('/2_2.jpg');
    QUnit.start();
  });
};
QUnit.asyncTest('sendNormalTest002', FileProfileNormalTest.sendNormalTest002);

/**
 * 1.jpgが存在するのが前提。1.jpgへのURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='/1.jpg<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.receiveNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '/1.jpg');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('receiveNormalTest001', FileProfileNormalTest.receiveNormalTest001);
}
/**
 * moveNormalTest001.jpgが存在するのが前提。/moveNormalTest001へ移動する。
 * newPathにファイル名を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveNormalTest001.jpg
 *       &newPath=/moveNormalTest001/moveNormalTest001.jpg<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.moveNormalTest001 = function(assert) {
  FileProfileNormalTest.saveFile('moveNormalTest001.jpg', function(accessToken, serviceId) {
    FileProfileNormalTest.mkdir('moveNormalTest001', function(accessToken, serviceId) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter('oldPath', '/moveNormalTest001.jpg');
      builder.addParameter('newPath', '/moveNormalTest001/moveNormalTest001.jpg');
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        FileProfileAbnormalTest.rmdir('/moveNormalTest001');
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        FileProfileAbnormalTest.rmfile('/moveNormalTest001.jpg');
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });

  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('moveNormalTest001', FileProfileNormalTest.moveNormalTest001);
}

/**
 * moveNormalTest002.jpgが存在するのが前提。/moveNormalTest002へ移動する。
 * newPathにファイル名を指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveNormalTest002.jpg
 *       &newPath=/moveNormalTest002<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.moveNormalTest002 = function(assert) {
  FileProfileNormalTest.saveFile('/moveNormalTest002.jpg', function(accessToken, serviceId) {
    FileProfileNormalTest.mkdir('moveNormalTest002', function(accessToken, serviceId) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.file.PROFILE_NAME);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter('oldPath', '/moveNormalTest002.jpg');
          builder.addParameter('newPath', '/moveNormalTest002');
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
            assert.ok(true, 'result=' + json.result);
            FileProfileAbnormalTest.rmdir('/moveNormalTest002');
            QUnit.start();
          }, function(errorCode, errorMessage) {
            assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
            FileProfileAbnormalTest.rmfile('/moveNormalTest002.jpg');
            QUnit.start();
          });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('moveNormalTest002', FileProfileNormalTest.moveNormalTest002);
}

/**
 * moveNormalTest003.jpgが存在するのが前提。forceOverwrite=trueで/moveNormalTest003へ移動する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveNormalTest003.jpg
 *       &newPath=/moveNormalTest003&forceOverwrite=true<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.moveNormalTest003 = function(assert) {
  FileProfileNormalTest.saveFile('moveNormalTest003.jpg', function(accessToken, serviceId) {
    FileProfileNormalTest.mkdir('moveNormalTest003', function(accessToken, serviceId) {
      FileProfileNormalTest.saveFile('/moveNormalTest003/moveNormalTest003.jpg', function(accessToken, serviceId) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.file.PROFILE_NAME);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter('oldPath', '/moveNormalTest003.jpg');
          builder.addParameter('newPath', '/moveNormalTest003');
          builder.addParameter('forceOverwrite', true);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
                assert.ok(true, 'result=' + json.result);
                FileProfileAbnormalTest.rmdir('/moveNormalTest003');
                QUnit.start();
              }, function(errorCode, errorMessage) {
                assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                FileProfileAbnormalTest.rmfile('/moveNormalTest003.jpg');
                FileProfileAbnormalTest.rmdir('/moveNormalTest003');
                QUnit.start();
              });
      }, function(errorCode, errorMessage) {
        FileProfileAbnormalTest.rmfile('/moveNormalTest003.jpg');
        FileProfileAbnormalTest.rmdir('/moveNormalTest003');
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });

    }, function(errorCode, errorMessage) {
      FileProfileAbnormalTest.rmfile('/moveNormalTest003.jpg');
      FileProfileAbnormalTest.rmdir('/moveNormalTest003');
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    FileProfileAbnormalTest.rmfile('/moveNormalTest003.jpg');
    FileProfileAbnormalTest.rmdir('/moveNormalTest003');
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('moveNormalTest003', FileProfileNormalTest.moveNormalTest003);
}
/**
 * DELETEメソッドでremoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='/dir1/rm_test.jpg'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.removeNormalTest001 = function(assert) {
  FileProfileNormalTest.saveFile('/rm_test.jpg', function(accessToken, serviceId) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter(dConnect.constants.file.PARAM_PATH, '/rm_test.jpg');
      var uri = builder.build();
      dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });

};
if (IS_TEST_STATUS == 'none') {
  QUnit.asyncTest('removeNormalTest001', FileProfileNormalTest.removeNormalTest001);
}
/**
 * ディレクトリdir1がある事が前提。dir1を削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir1'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.rmdirNormalTest001 = function(assert) {
  FileProfileNormalTest.mkdir('rmdirNormalTest001', function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file.PARAM_PATH, '/rmdirNormalTest001');
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rmdirNormalTest001', FileProfileNormalTest.rmdirNormalTest001);

/**
 * ディレクトリmkdirNormalTest001が存在しない事が前提。ディレクトリmkdirNormalTest001を作成する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='mkdirNormalTest001'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.mkdirNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, 'mkdirNormalTest001');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    FileProfileAbnormalTest.rmdir('mkdirNormalTest001');
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    FileProfileAbnormalTest.rmdir('mkdirNormalTest001');
    QUnit.start();
  });
};
QUnit.asyncTest('mkdirNormalTest001', FileProfileNormalTest.mkdirNormalTest001);

/**
 * ディレクトリ/dir2と/dir2/dir3が存在しない事が前提。ディレクトリdir2とdir2/dir3を作成する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir2/dir3'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.mkdirNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '/dir2/dir3');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mkdirNormalTest002', FileProfileNormalTest.mkdirNormalTest002);

/**
 * ディレクトリ/dir2/dir3がある事が前提。dir2と、その下のdir3を削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir2/dir3'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.rmdirNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '/dir2');
  builder.addParameter('forceRemove', true);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rmdirNormalTest002', FileProfileNormalTest.rmdirNormalTest002);




/**
 * /mvdirNormalTest001_1を/mvdirNormalTest001_2に移動する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&oldPath=/mvdirNormalTest001_1<br />
 *       &newPath=/mvdirNormalTest001_2
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.mvdirNormalTest001 = function(assert) {
  FileProfileAbnormalTest.mkdir('mvdirNormalTest001_1', function(accessToken, serviceId) {
    FileProfileAbnormalTest.mkdir('mvdirNormalTest001_2', function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('oldPath', '/mvdirNormalTest001_1');
        builder.addParameter('newPath', '/mvdirNormalTest001_2');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          FileProfileAbnormalTest.rmdir('mvdirNormalTest001_1');
          FileProfileAbnormalTest.rmdir('mvdirNormalTest001_2');
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          FileProfileAbnormalTest.rmdir('mvdirNormalTest001_1');
          FileProfileAbnormalTest.rmdir('mvdirNormalTest001_2');
          QUnit.start();
        });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      FileProfileAbnormalTest.rmdir('mvdirNormalTest001_1');
      FileProfileAbnormalTest.rmdir('mvdirNormalTest001_2');
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mvdirNormalTest001', FileProfileNormalTest.mvdirNormalTest001);