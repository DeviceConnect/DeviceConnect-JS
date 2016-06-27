module('FileDescriptor Profile Normal Test', {
  setup: function() {
    init();
    FileDescriptorProfileNormalTest.saveFile('test_r.txt');
    FileDescriptorProfileNormalTest.saveFile('test_rw.txt');
  }
});

/**
 * FileDescripterプロファイルのテストを行うクラス。
 * @class
 */
var FileDescriptorProfileNormalTest = {};
FileDescriptorProfileNormalTest.saveFile = function(fileName) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_SEND);

    var blob = new Blob(['0123456789'], {type: 'text/plain'});
    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('path', '/' + fileName);
    formData.append('mimeType', 'text/plain');
    formData.append('data', blob);
    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      console.log('success!! for ' + fileName);
    }, function(errorCode, errorMessage) {
      console.log('failure!! for ' + fileName);
    });

  }, function(errorCode, errorMessage) {
    console.log('failure!! for ' + fileName);
  });
};

FileDescriptorProfileNormalTest.draw = function(text) {
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
  blob = new Blob([arr], {type: 'image/png'});
  return blob;
};

FileDescriptorProfileNormalTest.open = function(fileName, flag) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, fileName);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, flag);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {

    }, function(errorCode, errorMessage) {
    });
  }, function(errorCode, errorMessage) {
  });
};

FileDescriptorProfileNormalTest.close = function(fileName) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, fileName);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
    }, function(errorCode, errorMessage) {
    });
  }, function(errorCode, errorMessage) {
  });
};


/**
 * FileDescripterプロファイルのopenでtext_r.txtを開くテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /filedescriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'&flag='r'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileNormalTest.openNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, dConnect.constants.file_descriptor.FLAG_R);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openNormalTest001', FileDescriptorProfileNormalTest.openNormalTest001);

/**
 * test_r.txtを閉じるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /filedescriptor/close?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileNormalTest.closeNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('closeNormalTest001', FileDescriptorProfileNormalTest.closeNormalTest001);

/**
 * FileDescripterプロファイルのopenでtest_rw.txtを開くテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /filedescriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&flag='rw'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileNormalTest.openNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, dConnect.constants.file_descriptor.FLAG_RW);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openNormalTest002', FileDescriptorProfileNormalTest.openNormalTest002);

/**
 * test_rw.txtの先頭にデータを書き込むテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /filedescriptor/write?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */

FileDescriptorProfileNormalTest.writeNormalTest001 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileNormalTest.draw('writeNormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 0);

    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeNormalTest001', FileDescriptorProfileNormalTest.writeNormalTest001);

/**
 * test_rw.txtの先頭から100バイトのオフセットでデータを書き込むテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /filedescriptor/write?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&position=0&media='writeNormalTest002'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */

FileDescriptorProfileNormalTest.writeNormalTest002 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileNormalTest.draw('writeNormalTest002');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 0);

    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeNormalTest002', FileDescriptorProfileNormalTest.writeNormalTest002);

/**
 * ファイル読み込みのテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /filedescriptor/read?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&position=0&length=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */

FileDescriptorProfileNormalTest.readNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_LENGTH, 10);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readNormalTest001', FileDescriptorProfileNormalTest.readNormalTest001);

/**
 * test_rw.txtを閉じるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /filedescriptor/close?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileNormalTest.closeNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('closeNormalTest002', FileDescriptorProfileNormalTest.closeNormalTest002);

/**
 * onWatch。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT, DELETE<br/>
 * Path: /filedescriptor/onwatchfile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */

FileDescriptorProfileNormalTest.onWatchFileNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file_descriptor.ATTR_ON_WATCH_FILE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.file_descriptor.PROFILE_NAME && json.attribute === dConenct.constants.file_descriptor.ATTR_ON_WATCH_FILE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onWatchFileNormalTest001', FileDescriptorProfileNormalTest.onWatchFileNormalTest001);

/**
 * FileDescripterプロファイルのテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /filedescriptor/onwatchfile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */

FileDescriptorProfileNormalTest.onWatchFileNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_ON_WATCH_FILE);
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
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onWatchFileNormalTest002', FileDescriptorProfileNormalTest.onWatchFileNormalTest002);
