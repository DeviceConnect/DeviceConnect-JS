module('FileDescriptor Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * FileDescripterプロファイルのテストを行うクラス。
 * @class
 */
var FileDescriptorProfileAbnormalTest = {};

FileDescriptorProfileAbnormalTest.draw = function(text) {
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

FileDescriptorProfileAbnormalTest.closeFile = function(fileName) {
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
 * 定義されていないPUTメソッドでfile_descriptor/openにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest001(Calling a put method that does not support.)', FileDescriptorProfileAbnormalTest.openAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでfile_descriptor/openにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest002(Calling a post method that does not support.)', FileDescriptorProfileAbnormalTest.openAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでfile_descriptor/openにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest003(Calling a delete method that does not support.)', FileDescriptorProfileAbnormalTest.openAbnormalTest003);

/**
 * test_r.txtを既に開いている事が前提。flagにrを指定してtest_r.txtを開く。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'&flag='r'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest004 = function(assert) {
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
      assert.ok(true, 'json: ' + JSON.stringify(json));
      dConnect.get(uri, null, function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 16) {
          assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        }

        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      if (errorCode == 16) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest004(Test_r.txt is already opened.)', FileDescriptorProfileAbnormalTest.openAbnormalTest004);

/**
 * test_r.txtを既に開いている事が前提。flagにrwを指定してtest_r.txtを開く。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'&flag='rw'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, dConnect.constants.file_descriptor.FLAG_RW);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 16) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest005(Test_r.txt is already opened.)', FileDescriptorProfileAbnormalTest.openAbnormalTest005);

/**
 * test_rw.txtを既に開いている事が前提。flagにrを指定してtest_rw.txtを開く。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&flag='r'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, dConnect.constants.file_descriptor.FLAG_R);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'json: ' + JSON.stringify(json));
      dConnect.get(uri, null, function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 16) {
          assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        }
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      if (errorCode == 16) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest006(Test_rw.txt is already opened.)', FileDescriptorProfileAbnormalTest.openAbnormalTest006);

/**
 * test_rw.txtを既に開いている事が前提。flagにrwを指定してtest_rw.txtを開く。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&flag='rw'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest007 = function(assert) {
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
      assert.ok(false, 'json: ' + JSON.stringify(json));
      FileDescriptorProfileNormalTest.close('test_rw.txt');
      FileDescriptorProfileNormalTest.close('test_r.txt');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 16) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      FileDescriptorProfileNormalTest.close('test_rw.txt');
      FileDescriptorProfileNormalTest.close('test_r.txt');

      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    FileDescriptorProfileNormalTest.close('test_rw.txt');
    FileDescriptorProfileNormalTest.close('test_r.txt');

    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest007(Test_rw.txt is already opened.)', FileDescriptorProfileAbnormalTest.openAbnormalTest007);

/**
 * flag='abcdef'を指定してリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&flag='abcdef'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, 'abcdef');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest008()', FileDescriptorProfileAbnormalTest.openAbnormalTest008);

/**
 * flag='あいうえお'を指定してリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&flag='あいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest009 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, 'あいうえお');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest009()', FileDescriptorProfileAbnormalTest.openAbnormalTest009);

/**
 * flag='#$%()'を指定してリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/open?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&flag='#$%&()'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.openAbnormalTest010 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_FLAG, '#$%()');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('openAbnormalTest010()', FileDescriptorProfileAbnormalTest.openAbnormalTest010);

/**
 * 定義されていないGETメソッドでfile_descriptor/writeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest001(Calling a get method that does not support.)', FileDescriptorProfileAbnormalTest.writeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでfile_descriptor/writeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest002(Calling a post method that does not support.)', FileDescriptorProfileAbnormalTest.writeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでfile_descriptor/writeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest003(Calling a delete method that does not support.)', FileDescriptorProfileAbnormalTest.writeAbnormalTest003);

/**
 * position=-10を指定して、test_rw.txtへのデータ書き込みリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&position=-10&media='writeAbnormalTest001'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest004 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = FileDescriptorProfileNormalTest.draw('writeAbnormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, -10);
    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest004()', FileDescriptorProfileAbnormalTest.writeAbnormalTest004);

/**
 * position=10.5を指定して、test_rw.txtへのデータ書き込みリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&position=10.5&media='writeAbnormalTest001'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest005 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';
  FileDescriptorProfileNormalTest.open('/test_rw.txt', 'rw');
  var blob = FileDescriptorProfileNormalTest.draw('writeAbnormalTest001');
  searchTestService(function(accessToken, serviceId) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 10.5);
    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest005()', FileDescriptorProfileAbnormalTest.writeAbnormalTest005);

/**
 * 必要なパラメータ（path）がない状態でデータ書き込みを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&position=10&media='writeAbnormalTest001'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest006 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = FileDescriptorProfileNormalTest.draw('writeAbnormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 10);
    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest006()', FileDescriptorProfileAbnormalTest.writeAbnormalTest006);

/**
 * 必要なパラメータ（media）がない状態でデータ書き込みを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&path='/test_rw.txt'&position=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest007 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = FileDescriptorProfileNormalTest.draw('writeAbnormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '/test_rw.txt');
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 10);
    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest007()', FileDescriptorProfileAbnormalTest.writeAbnormalTest007);

/**
 * 必要なパラメータ（path, media）がない状態でデータ書き込みを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&position=-10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest008 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = FileDescriptorProfileNormalTest.draw('writeAbnormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 10);
    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest008()', FileDescriptorProfileAbnormalTest.writeAbnormalTest008);

/**
 * pathに<>:*?"/\|と入力してデータ書き込みを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&path='<>:*?"/\\|'&position=10&media='writeAbnormalTest001'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest009 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';
  var blob = FileDescriptorProfileNormalTest.draw('writeAbnormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '<>:*?"/\\|');
    formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
    formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 10);
    var uri = builder.build();
    dConnect.put(uri, null, formData, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest009()', FileDescriptorProfileAbnormalTest.writeAbnormalTest009);

/**
 * test_r.txtを既にflag=rで開いている事が前提。wフラグが立てていない状態でファイル書き込みを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/write?serviceId=xxxx&accessToken=xxx&path='test_r.txt'&position=10&media='writeAbnormalTest001'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.writeAbnormalTest010 = function(assert) {
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = FileDescriptorProfileNormalTest.draw('writeNormalTest001');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_OPEN);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_MEDIA, dConnect.constants.file_descriptor.FLAG_R);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'json: ' + JSON.stringify(json));
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.file_descriptor.ATTR_WRITE);

      var formData = new FormData();
      formData.append('serviceId', serviceId);
      formData.append('accessToken', accessToken);
      formData.append(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
      formData.append(dConnect.constants.file_descriptor.PARAM_MEDIA, blob);
      formData.append(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
      var uri = builder.build();
      dConnect.put(uri, null, formData, function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 16) {
          assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        }
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('writeAbnormalTest010()', FileDescriptorProfileAbnormalTest.writeAbnormalTest010);

/**
 * 定義されていないPUTメソッドでfile_descriptor/readにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest001(Calling a put method that does not support.)', FileDescriptorProfileAbnormalTest.readAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでfile_descriptor/readにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest002(Calling a post method that does not support.)', FileDescriptorProfileAbnormalTest.readAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでfile_descriptor/readにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest003(Calling a delete method that does not support.)', FileDescriptorProfileAbnormalTest.readAbnormalTest003);

/**
 * position=0,length=-10を指定してtest_r.txtからのデータ取得リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'&position=0&length=-10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_LENGTH, -10);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest004()', FileDescriptorProfileAbnormalTest.readAbnormalTest004);

/**
 * position=0,length=10.5を指定してtest_r.txtからのデータ取得リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'&position=0&length=10.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_LENGTH, 10.5);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest005()', FileDescriptorProfileAbnormalTest.readAbnormalTest005);

/**
 * 必要なパラメータ（path）が無い状態でデータ取得リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx&position=0&length=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_LENGTH, 10);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest006()', FileDescriptorProfileAbnormalTest.readAbnormalTest006);

/**
 * 必要なパラメータ（length）が無い状態でデータ取得リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx&path='/test_r.txt'&position=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/test_r.txt');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest007()', FileDescriptorProfileAbnormalTest.readAbnormalTest007);

/**
 * 必要なパラメータ（path, length）が無い状態でデータ取得リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/read?serviceId=xxxx&accessToken=xxx&position=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.readAbnormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_READ);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_POSITION, 0);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
	   QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=', +errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('readAbnormalTest008()', FileDescriptorProfileAbnormalTest.readAbnormalTest008);

/**
 * 定義されていないGETメソッドでfile_descriptor/closeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/close?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.closeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('closeAbnormalTest001(Calling a get method that does not support.)', FileDescriptorProfileAbnormalTest.closeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでfile_descriptor/closeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file_descriptor/close?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.closeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('closeAbnormalTest002(Calling a post method that does not support.)', FileDescriptorProfileAbnormalTest.closeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでfile_descriptor/closeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file_descriptor/close?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.closeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('closeAbnormalTest003(Calling a delete method that does not support.)', FileDescriptorProfileAbnormalTest.closeAbnormalTest003);

/**
 * ファイル0000を開いていない事が前提。ファイル0000を閉じる。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file_descriptor/close?serviceId=xxxx&accessToken=xxx&path='/0000'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.closeAbnormalTest004 = function(assert) {
  FileDescriptorProfileAbnormalTest.closeFile('/test_r.txt');
  FileDescriptorProfileAbnormalTest.closeFile('/test_rw.txt');
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_CLOSE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    builder.addParameter(dConnect.constants.file_descriptor.PARAM_PATH, '/0000');
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('closeAbnormalTest004()', FileDescriptorProfileAbnormalTest.closeAbnormalTest004);

/**
 * 定義されていないPOSTメソッドでfile_descriptor/onwatchfileにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file_descriptor/onwatchfile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileDescriptorProfileAbnormalTest.onWatchFileAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file_descriptor.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file_descriptor.ATTR_ON_WATCH_FILE);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey('test');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('onWatchFileAbnormalTest001', FileDescriptorProfileAbnormalTest.onWatchFileAbnormalTest001);
