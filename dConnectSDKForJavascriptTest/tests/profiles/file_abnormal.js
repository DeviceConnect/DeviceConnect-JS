module('File Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Fileプロファイルのテストを行うクラス。
 * @class
 */
var FileProfileAbnormalTest = {};

FileProfileAbnormalTest.mkdir = function(dirName, successCB, errorCB) {
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

FileProfileAbnormalTest.saveFile = function(fileName, successCB, errorCB) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);

  var blob = FileProfileNormalTest.draw('file test');
  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('path',  fileName);
  formData.append('mimeType', 'image/jpeg');
  formData.append('forceOverwrite', true);
  formData.append('data', blob);
  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    console.log('success!! save for ' + fileName);
    if (successCB) {
        successCB(accessToken, serviceId);
    }
  }, function(errorCode, errorMessage) {
    console.log('failure!! save for ' + fileName);
    if (errorCB) {
        errorCB(errorCode, errorMessage);
    }
  });
};

FileProfileAbnormalTest.rmfile = function(fileName, successCB, errorCB) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, fileName);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    console.log('success!! remove file for ' + fileName);
    if (successCB) {
        successCB(accessToken, serviceId);
    }
  }, function(errorCode, errorMessage) {
    console.log('failure!! remove file for ' + fileName);
    if (errorCB) {
        errorCB(errorCode, errorMessage);
    }
  });
};

FileProfileAbnormalTest.rmdir = function(dirName, successCB, errorCB) {
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
    if (successCB) {
        successCB(accessToken, serviceId);
    }
  }, function(errorCode, errorMessage) {
    console.log('failure!! remove dir for ' + dirName);
    if (errorCB) {
        errorCB(errorCode, errorMessage);
    }
  });
};

/**
 * 定義されていないPUTメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
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
};
QUnit.asyncTest('listAbnormalTest001(Calling a put method that does not support.)', 
    FileProfileAbnormalTest.listAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
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
};
QUnit.asyncTest('listAbnormalTest002(Calling a post method that does not support.)', 
    FileProfileAbnormalTest.listAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
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
};
QUnit.asyncTest('listAbnormalTest003(Calling a delete method that does not support.)',
    FileProfileAbnormalTest.listAbnormalTest003);

/**
 * order=-1000を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order=-1000<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, -1000);
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
};
QUnit.asyncTest('listAbnormalTest004(order is minus(-1000))', FileProfileAbnormalTest.listAbnormalTest004);

/**
 * order=100.55を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order=100.55<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 100.55);
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
};
QUnit.asyncTest('listAbnormalTest005(order is float(100.55))', FileProfileAbnormalTest.listAbnormalTest005);

/**
 * order=pathを指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path');
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
};
QUnit.asyncTest('listAbnormalTest006(order is string(path))', FileProfileAbnormalTest.listAbnormalTest006);

/**
 * order='abcdef'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='abcdef'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'abcdef');
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
};
QUnit.asyncTest('listAbnormalTest007(order is string(abcdef))', FileProfileAbnormalTest.listAbnormalTest007);

/**
 * order='あいうえお'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='あいうえお'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'あいうえお');
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
};
QUnit.asyncTest('listAbnormalTest008(order is string(あいうえお))', FileProfileAbnormalTest.listAbnormalTest008);

/**
 * order='#$%()'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='#$%()'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, '#$%()');
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
};
QUnit.asyncTest('listAbnormalTest009(order is special character(#$%()))', FileProfileAbnormalTest.listAbnormalTest009);

/**
 * order='path,asc' ,limit=-100を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=-100<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest010 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, -100);
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
};
QUnit.asyncTest('listAbnormalTest010()', FileProfileAbnormalTest.listAbnormalTest010);

/**
 * order='path,asc',limit=100.5を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=100.5<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest011 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_LIMIT, 100.5);
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
};
QUnit.asyncTest('listAbnormalTest011()', FileProfileAbnormalTest.listAbnormalTest011);

/**
 * order='path,asc',offset=10.5を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=10.5<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest012 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 10.5);
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
};
QUnit.asyncTest('listAbnormalTest012()', FileProfileAbnormalTest.listAbnormalTest012);

/**
 * order='path,asc',offset=-100を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=-100<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest013 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, -100);
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
};
QUnit.asyncTest('listAbnormalTest013()', FileProfileAbnormalTest.listAbnormalTest013);

/**
 * order='path,asc',offset=1000000を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=1000000<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest014 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 1000000);
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
};
QUnit.asyncTest('listAbnormalTest014()', FileProfileAbnormalTest.listAbnormalTest014);

/**
 * order='path,asc',offset=1000000を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=1000000<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest015 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_OFFSET, 1000000);
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
};
QUnit.asyncTest('listAbnormalTest015()', FileProfileAbnormalTest.listAbnormalTest015);

/**
 * path=temp, order='path,asc'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&path=tmp&order='path,asc'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest016 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_PATH, 'tmp');
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
};
QUnit.asyncTest('listAbnormalTest016()', FileProfileAbnormalTest.listAbnormalTest016);

/**
 * path=temp, order='path,asc'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&path=tmp&order='path,asc'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest017 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,asc');
  builder.addParameter(dConnect.constants.file.PARAM_PATH, 'tmp');
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
};
QUnit.asyncTest('listAbnormalTest017()', FileProfileAbnormalTest.listAbnormalTest017);

/**
 * path=temp, order='path,desc'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&path=tmp&order='path,desc'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest018 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_LIST);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_ORDER, 'path,desc');
  builder.addParameter(dConnect.constants.file.PARAM_PATH, 'tmp');
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
};
QUnit.asyncTest('listAbnormalTest018()', FileProfileAbnormalTest.listAbnormalTest018);


/**
 * 必要なパラメータ(data)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&mimeType='image/png'&path='photo.png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_MIME_TYPE, 'image/png');
  builder.addParameter(dConnect.constants.file.PARAM_PATH, 'photo.png');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
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
};
QUnit.asyncTest('sendAbnormalTest001()', FileProfileAbnormalTest.sendAbnormalTest001);



/**
 * 必要なパラメータ(path)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&mimeType='image/png'&data='photo.png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_MIME_TYPE, 'image/png');
  builder.addParameter('data', 'photo.png');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
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
};
QUnit.asyncTest('sendAbnormalTest002()', FileProfileAbnormalTest.sendAbnormalTest002);

/**
 * 必要なパラメータ(data, path)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&mimeType='image/png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_MIME_TYPE, 'image/png');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
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
};
QUnit.asyncTest('sendAbnormalTest003()', FileProfileAbnormalTest.sendAbnormalTest003);

/**
 * forceOverwriteがfalseのときに上書きに失敗するテスト.
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='/send_abnormal_test005.jpg'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.sendAbnormalTest004 = function(assert) {
  FileProfileNormalTest.saveFile('/send_abnormal_test005.jpg', function() {
      var accessToken = getCurrentAccessToken();
      var serviceId = getCurrentServiceId();
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);
      var blob = FileProfileNormalTest.draw('file test');
      var formData = new FormData();
      formData.append('serviceId', serviceId);
      formData.append('accessToken', accessToken);
      formData.append('path', '/send_abnormal_test005.jpg');
      formData.append('mimeType', 'image/jpeg');
      formData.append('data', blob);
      formData.append('forceOverwrite', false);
      var uri = builder.build();
      dConnect.post(uri, null, formData, function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        FileProfileAbnormalTest.rmfile('/send_abnormal_test005.jpg');
        QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 10) {
          assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        }
        FileProfileAbnormalTest.rmfile('/send_abnormal_test005.jpg');
        QUnit.start();
      });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });

};
QUnit.asyncTest('sendAbnormalTest004()', FileProfileNormalTest.sendAbnormalTest004);

/**
 * 必要なパラメータ（path）が無い状態でファイルのURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
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
};
QUnit.asyncTest('receiveAbnormalTest001(path does not exist.)', FileProfileAbnormalTest.receiveAbnormalTest001);

/**
 * ファイル0000が無い状態でファイル0000のURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='0000'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '0000');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10 || errorCode == 16) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('receiveAbnormalTest002(Calling a delete method that does not support.)', FileProfileAbnormalTest.receiveAbnormalTest002);

/**
 * 必要なパラメータ(oldPath, newPath)がない状態でmoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
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
};
QUnit.asyncTest('moveAbnormalTest001()', FileProfileAbnormalTest.moveAbnormalTest001);

/**
 * 存在しない画像を指定された状態でmoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=moveAbnormalTest002.jpg<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('oldPath', 'moveAbnormalTest002.jpg');
  builder.addParameter('newPath', 'moveAbnormalTest002_1.jpg');
  var uri = builder.build();
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
};
QUnit.asyncTest('moveAbnormalTest002()', FileProfileAbnormalTest.moveAbnormalTest002);

/**
 * ディレクトリが指定された状態でmoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveAbnormalTest003_1
 *       &newOldPath=/moveAbnormalTest003_2<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest003 = function(assert) {
  FileProfileAbnormalTest.mkdir('moveAbnormalTest003_1', function(accessToken, serviceId) {
    FileProfileAbnormalTest.mkdir('/moveAbnormalTest003_2/moveAbnormalTest003_1',  function(accessToken, serviceId) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.file.PROFILE_NAME);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter('oldPath', '/moveAbnormalTest003_1');
          builder.addParameter('newPath', '/moveAbnormalTest003_2');
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
                assert.ok(false, 'json: ' + JSON.stringify(json));
                FileProfileAbnormalTest.rmdir('/moveAbnormalTest003_1');
                FileProfileAbnormalTest.rmdir('/moveAbnormalTest003_2');
                QUnit.start();
          }, function(errorCode, errorMessage) {
            if (errorCode == 10) {
              assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
            } else if (checkErrorCode(errorCode)) {
              assert.ok(true, "not support");
            } else {
              assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
            }
            FileProfileAbnormalTest.rmdir('/moveAbnormalTest003_1');
            FileProfileAbnormalTest.rmdir('/moveAbnormalTest003_2');
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
QUnit.asyncTest('moveAbnormalTest003()', FileProfileAbnormalTest.moveAbnormalTest003);

/**
 * 移動先に同じファイルが存在している場合に、moveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveAbnormalTest004.jpg
 *       &newOldPath=/moveAbnormalTest004<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest004 = function(assert) {
  FileProfileAbnormalTest.saveFile('/moveAbnormalTest004.jpg', function(accessToken, serviceId) {
    FileProfileAbnormalTest.mkdir('moveAbnormalTest004', function(accessToken, serviceId) {
      FileProfileAbnormalTest.saveFile('/moveAbnormalTest004/moveAbnormalTest004.jpg', function(accessToken, serviceId) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.file.PROFILE_NAME);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter('oldPath', '/moveAbnormalTest004.jpg');
          builder.addParameter('newPath', '/moveAbnormalTest004');
          builder.addParameter('forceOverwrite', false);
          var uri = builder.build();
          dConnect.put(uri, null, null, function(json) {
                assert.ok(false, 'json: ' + JSON.stringify(json));
                FileProfileAbnormalTest.rmfile('/moveAbnormalTest004.jpg');
                FileProfileAbnormalTest.rmdir('/moveAbnormalTest004');
                QUnit.start();
          }, function(errorCode, errorMessage) {
              if (errorCode == 10) {
                assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, "not support");
              } else {
                assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              }
              FileProfileAbnormalTest.rmfile('/moveAbnormalTest004.jpg');
              FileProfileAbnormalTest.rmdir('/moveAbnormalTest004');
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
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });

};
QUnit.asyncTest('moveAbnormalTest004()', FileProfileAbnormalTest.moveAbnormalTest004);

/**
 * 移動先に同じファイルが存在している場合にforceOverwrite=falseの時に、moveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveAbnormalTest005.jpg
 *       &newOldPath=/moveAbnormalTest005&forceOverwrite=false<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest005 = function(assert) {
  FileProfileAbnormalTest.saveFile('moveAbnormalTest005.jpg', function(accessToken, serviceId) {
    FileProfileAbnormalTest.mkdir('moveAbnormalTest005', function(accessToken, serviceId) {
      FileProfileAbnormalTest.saveFile('/moveAbnormalTest005/moveAbnormalTest005.jpg', function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('oldPath', 'moveAbnormalTest005.jpg');
        builder.addParameter('newPath', '/moveAbnormalTest005');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              FileProfileAbnormalTest.rmdir('/moveAbnormalTest005');
              QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, "not support");
          } else {
            assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          }
          FileProfileAbnormalTest.rmfile('moveAbnormalTest005.jpg');
          FileProfileAbnormalTest.rmdir('/moveAbnormalTest005');
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), 'In Save file errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        FileProfileAbnormalTest.rmfile('moveAbnormalTest005.jpg');
        FileProfileAbnormalTest.rmdir('/moveAbnormalTest005');
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'Mkdir errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      FileProfileAbnormalTest.rmfile('moveAbnormalTest005.jpg');
      FileProfileAbnormalTest.rmdir('/moveAbnormalTest005');
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    FileProfileAbnormalTest.rmfile('moveAbnormalTest005.jpg');
    FileProfileAbnormalTest.rmdir('/moveAbnormalTest005');
    assert.ok(checkErrorCode(errorCode), 'Save file errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveAbnormalTest005()', FileProfileAbnormalTest.moveAbnormalTest005);

/**
 * 必要なパラメータ（path）が無い状態でファイルを削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10 || errorCode == 16) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('removeAbnormalTest001(path does not exist.)', FileProfileAbnormalTest.removeAbnormalTest001);

/**
 * ファイル0000が無い状態でファイル0000のURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='0000'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter(dConnect.constants.file.PARAM_PATH, '0000');
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode ==1 || errorCode == 10 || errorCode == 16) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('removeAbnormalTest002(0000 does not exist.)', FileProfileAbnormalTest.removeAbnormalTest002);


/**
 * 必要なパラメータ（path）がない状態でディレクトリ作成を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
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
};
QUnit.asyncTest('mkdirAbnormalTest001()', FileProfileAbnormalTest.mkdirAbnormalTest001);

/**
 * ディレクトリもしくはファイル(mkdirAbnormalTest002)が存在する状態でディレクトリmkdirAbnormalTest002作成を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest002 = function(assert) {
  FileProfileAbnormalTest.mkdir('/mkdirAbnormalTest002', function(accessToken, serviceId) {
    FileProfileAbnormalTest.saveFile('/mkdirAbnormalTest002/mkdirAbnormalTest002.jpg', function(accessToken, serviceId) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.file.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter(dConnect.constants.file.PARAM_PATH, '/mkdirAbnormalTest002');
          var uri = builder.build();
          dConnect.post(uri, null, null, function(json) {
                assert.ok(false, 'json: ' + JSON.stringify(json));
                FileProfileAbnormalTest.rmdir('/mkdirAbnormalTest002');
                QUnit.start();
              }, function(errorCode, errorMessage) {
                if (errorCode == 10 || errorCode == 16) {
                  assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                } else if (checkErrorCode(errorCode)) {
                  assert.ok(true, "not support");
                } else {
                  assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                }
                FileProfileAbnormalTest.rmdir('/mkdirAbnormalTest002');
                QUnit.start();
              });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      FileProfileAbnormalTest.rmdir('/mkdirAbnormalTest002');
      QUnit.start();
    });

  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('mkdirAbnormalTest002()', FileProfileAbnormalTest.mkdirAbnormalTest002);


/**
 * 必要なパラメータ(oldPath, newPath)がない状態でMoveDirectoryにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mvDirAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
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
};
QUnit.asyncTest('mvDirAbnormalTest001(Invalid path.)', FileProfileAbnormalTest.mvDirAbnormalTest001);

/**
 * 存在しないディレクトリを指定された状態でMoveDirectoryにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&oldPath=/mvDirAbnormalTest002_1
 *       &newPath=/mvDirAbnormalTest002_2<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mvDirAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('oldPath', 'mvDirAbnormalTest002_1');
  builder.addParameter('newPath', 'mvDirAbnormalTest002_2');
  var uri = builder.build();
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
};
QUnit.asyncTest('mvDirAbnormalTest002(Non exist dir.)', FileProfileAbnormalTest.mvDirAbnormalTest002);

/**
 * ファイルが指定された状態でMoveDirectoryにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&oldPath=/mvDirAbnormalTest003.jpg
 *       &newOldPath=/moveAbnormalTest003<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mvDirAbnormalTest003 = function(assert) {
  FileProfileAbnormalTest.saveFile('mvDirAbnormalTest003.jpg', function(accessToken, serviceId) {
    FileProfileAbnormalTest.mkdir('/mvDirAbnormalTest003', function(accessToken, serviceId) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter('oldPath', '/mvDirAbnormalTest003.jpg');
      builder.addParameter('newPath', '/mvDirAbnormalTest003');
      var uri = builder.build();
      dConnect.put(uri, null, null, function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            FileProfileAbnormalTest.rmfile('/mvDirAbnormalTest003.jpg');
            FileProfileAbnormalTest.rmdir('/mvDirAbnormalTest003');
            QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 10) {
          assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        }
        FileProfileAbnormalTest.rmfile('/mvDirAbnormalTest003.jpg');
        FileProfileAbnormalTest.rmdir('/mvDirAbnormalTest003');
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
QUnit.asyncTest('mvDirAbnormalTest003()', FileProfileAbnormalTest.mvDirAbnormalTest003);



/**
 * 必要なパラメータ（path）がない状態でディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.file.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
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
};
QUnit.asyncTest('rmdirAbnormalTest001(Path does not exist.)', FileProfileAbnormalTest.rmdirAbnormalTest001);

/**
 * rmdirAbnormalTest002以下にファイルが有るときrmdirAbnormalTest002を削除するリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path=rmdirAbnormalTest002<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest002 = function(assert) {
  FileProfileAbnormalTest.mkdir('rmdirAbnormalTest002', function(accessToken, serviceId) {
    FileProfileAbnormalTest.saveFile('/rmdirAbnormalTest002/rmdirAbnormalTest002.jpg', function(accessToken, serviceId) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile(dConnect.constants.file.PROFILE_NAME);
          builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter(dConnect.constants.file.PARAM_PATH, '/rmdirAbnormalTest002');
          var uri = builder.build();
          dConnect.delete(uri, null, function(json) {
                assert.ok(false, 'json: ' + JSON.stringify(json));
                FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest002');
                QUnit.start();
              }, function(errorCode, errorMessage) {
                if (errorCode == 1 || errorCode == 10 || errorCode == 16) {
                  assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                } else if (checkErrorCode(errorCode)) {
                  assert.ok(true, "not support");
                } else {
                  assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
                }
                FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest002');
                QUnit.start();
              });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'Save File errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest002');
      QUnit.start();
    });

  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'mkdir errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rmdirAbnormalTest002(Dir1 has some files.)', FileProfileAbnormalTest.rmdirAbnormalTest002);

/**
 * ディレクトリではないrm_test.jpgに対してディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir/rm_test.jpg'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest003 = function(assert) {
  FileProfileAbnormalTest.mkdir('rmdirAbnormalTest003', function(accessToken, serviceId) {
    FileProfileAbnormalTest.saveFile('/rmdirAbnormalTest003/rmdirAbnormalTest003.jpg', function(accessToken, serviceId) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter(dConnect.constants.file.PARAM_PATH, '/rmdirAbnormalTest003/rmdirAbnormalTest003.jpg');
      var uri = builder.build();
      dConnect.delete(uri, null, function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest003');
        QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 10 || errorCode == 16) {
          assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        }
        FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest003');
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
QUnit.asyncTest('rmdirAbnormalTest003(1.jpeg is not directory.)', FileProfileAbnormalTest.rmdirAbnormalTest003);


/**
 * forceRemoveがfalseの時にファイルが存在しているディレクトリに対してディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir/rm_test.jpg'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest004 = function(assert) {
  FileProfileAbnormalTest.mkdir('rmdirAbnormalTest004', function(accessToken, serviceId) {
  FileProfileAbnormalTest.saveFile('/rmdirAbnormalTest004/rmdirAbnormalTest004.jpg', function(accessToken, serviceId) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.file.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.file.ATTR_DIRECTORY);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter(dConnect.constants.file.PARAM_PATH, '/rmdirAbnormalTest004');
      builder.addParameter('forceRemove', false);
      var uri = builder.build();
      dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          FileProfileAbnormalTest.rmfile('/rmdirAbnormalTest004/rmdirAbnormalTest004.jpg');
          FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest004');
          QUnit.start();
      }, function(errorCode, errorMessage) {
          if (errorCode == 10 || errorCode == 16) {
              assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          } else if (checkErrorCode(errorCode)) {
              assert.ok(true, "not support");
          } else {
              assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          }
          FileProfileAbnormalTest.rmfile('/rmdirAbnormalTest004/rmdirAbnormalTest004.jpg');
          FileProfileAbnormalTest.rmdir('/rmdirAbnormalTest004');
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
QUnit.asyncTest('rmdirAbnormalTest004(Overwrite is false)', FileProfileAbnormalTest.rmdirAbnormalTest004);
