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

FileProfileAbnormalTest.mkdir = function(dirName) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_MKDIR);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file.PARAM_PATH, dirName);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
    }, function(errorCode, errorMessage) {
    });
  }, function(errorCode, errorMessage) {
  });
};

FileProfileAbnormalTest.saveFile = function(fileName) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_SEND);

    var blob = FileProfileNormalTest.draw('file test');
    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('path', '/' + fileName);
    formData.append('mimeType', 'image/jpeg');
    formData.append('data', blob);
    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      console.log('success!! save for ' + fileName);
    }, function(errorCode, errorMessage) {
      console.log('failure!! save for ' + fileName);
    });

  }, function(errorCode, errorMessage) {
    console.log('failure!! save for ' + fileName);
  });
};

FileProfileAbnormalTest.rmfile = function(fileName) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_REMOVE);
    builder.addParameter(dConnect.constants.file.PARAM_PATH, fileName);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      console.log('success!! remove file for ' + fileName);
    }, function(errorCode, errorMessage) {
      console.log('failure!! remove file for ' + fileName);
    });

  }, function(errorCode, errorMessage) {
    console.log('failure!! remove file for ' + fileName);
  });
};

FileProfileAbnormalTest.rmdir = function(dirName) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
    builder.addParameter(dConnect.constants.file.PARAM_PATH, dirName);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      console.log('success!! remove dir for ' + dirName);
    }, function(errorCode, errorMessage) {
      console.log('failure!! remove dir for ' + dirName);
    });

  }, function(errorCode, errorMessage) {
    console.log('failure!! remove dir for ' + dirName);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
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
  searchTestService(function(accessToken, serviceId) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('listAbnormalTest018()', FileProfileAbnormalTest.listAbnormalTest018);

/**
 * 定義されていないGETメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/send?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_SEND);
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
QUnit.asyncTest('sendAbnormalTest001(Calling a get method that does not support.)', 
    FileProfileAbnormalTest.sendAbnormalTest001);

/**
 * 定義されていないPUTメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/send?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_SEND);
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
QUnit.asyncTest('sendAbnormalTest002(Calling a put method that does not support.)', FileProfileAbnormalTest.sendAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/send?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_SEND);
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
QUnit.asyncTest('sendAbnormalTest003(Calling a delete method that does not support.)', FileProfileAbnormalTest.sendAbnormalTest003);

/**
 * 必要なパラメータ(data)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/send?serviceId=xxxx&accessToken=xxx&mimeType='image/png'&path='photo.png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_SEND);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('sendAbnormalTest004()', FileProfileAbnormalTest.sendAbnormalTest004);

/**
 * 必要なパラメータ(path)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/send?serviceId=xxxx&accessToken=xxx&mimeType='image/png'&data='photo.png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_SEND);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('sendAbnormalTest005()', FileProfileAbnormalTest.sendAbnormalTest005);

/**
 * 必要なパラメータ(data, path)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/send?serviceId=xxxx&accessToken=xxx&mimeType='image/png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_SEND);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('sendAbnormalTest006()', FileProfileAbnormalTest.sendAbnormalTest006);

/**
 * 定義されていないPOSTメソッドでreceiveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/receive?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RECEIVE);
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
QUnit.asyncTest('receiveAbnormalTest001(Calling a post method that does not support.)', FileProfileAbnormalTest.receiveAbnormalTest001);

/**
 * 定義されていないPUTメソッドでreceiveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/receive?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RECEIVE);
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
QUnit.asyncTest('receiveAbnormalTest002(Calling a put method that does not support.)', FileProfileAbnormalTest.receiveAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでreceiveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/receive?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RECEIVE);
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
QUnit.asyncTest('receiveAbnormalTest003(Calling a delete method that does not support.)', FileProfileAbnormalTest.receiveAbnormalTest003);

/**
 * 必要なパラメータ（path）が無い状態でファイルのURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/receive?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RECEIVE);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('receiveAbnormalTest004(path does not exist.)', FileProfileAbnormalTest.receiveAbnormalTest004);

/**
 * ファイル0000が無い状態でファイル0000のURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/receive?serviceId=xxxx&accessToken=xxx&path='0000'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RECEIVE);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('receiveAbnormalTest005(Calling a delete method that does not support.)', FileProfileAbnormalTest.receiveAbnormalTest005);

/**
 * 定義されていないGETメソッドでremoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/remove?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_REMOVE);
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
QUnit.asyncTest('removeAbnormalTest001(Calling a get method that does not support.)', FileProfileAbnormalTest.removeAbnormalTest001);

/**
 * 定義されていないPUTメソッドでremoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/remove?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_REMOVE);
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
QUnit.asyncTest('removeAbnormalTest002(Calling a put method that does not support.)', FileProfileAbnormalTest.removeAbnormalTest002);

/**
 * 定義されていないPOSTメソッドでremoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/remove?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_REMOVE);
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
QUnit.asyncTest('removeAbnormalTest003(Calling a post method that does not support.)', FileProfileAbnormalTest.removeAbnormalTest003);

/**
 * 必要なパラメータ（path）が無い状態でファイルを削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/remove?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_REMOVE);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('removeAbnormalTest004(path does not exist.)', FileProfileAbnormalTest.removeAbnormalTest004);

/**
 * ファイル0000が無い状態でファイル0000のURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/remove?serviceId=xxxx&accessToken=xxx&path='0000'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_REMOVE);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('removeAbnormalTest005(0000 does not exist.)', FileProfileAbnormalTest.removeAbnormalTest005);

/**
 * 定義されていないGETメソッドでmkdirにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/mkdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_MKDIR);
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
QUnit.asyncTest('mkdirAbnormalTest001(Calling a get methd that does not support.)',
    FileProfileAbnormalTest.mkdirAbnormalTest001);

/**
 * 定義されていないPUTメソッドでmkdirにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/mkdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_MKDIR);
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
QUnit.asyncTest('mkdirAbnormalTest002(Calling a put methd that does not support.)',
    FileProfileAbnormalTest.mkdirAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでmkdirにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/mkdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_MKDIR);
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
QUnit.asyncTest('mkdirAbnormalTest003(Calling a delete methd that does not support.)', FileProfileAbnormalTest.mkdirAbnormalTest003);

/**
 * 必要なパラメータ（path）がない状態でディレクトリ作成を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/mkdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_MKDIR);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('mkdirAbnormalTest004()', FileProfileAbnormalTest.mkdirAbnormalTest004);

/**
 * ディレクトリもしくはファイル(dir1)が存在する状態でディレクトリdir1作成を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/mkdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest005 = function(assert) {
  FileProfileAbnormalTest.mkdir('/dir1');
  FileProfileAbnormalTest.saveFile('/dir1/rm_test.jpg');
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_MKDIR);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.file.PARAM_PATH, '/dir1');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('mkdirAbnormalTest005()', FileProfileAbnormalTest.mkdirAbnormalTest005);

/**
 * 定義されていないGETメソッドでrmdirにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/rmdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
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
QUnit.asyncTest('rmdirAbnormalTest001(Calling a get method that does not support.)',
    FileProfileAbnormalTest.rmdirAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでrmdirにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/rmdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
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
QUnit.asyncTest('rmdirAbnormalTest002(Calling a post method that does not support.)',
    FileProfileAbnormalTest.rmdirAbnormalTest002);

/**
 * 定義されていないPUTメソッドでrmdirにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/rmdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
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
QUnit.asyncTest('rmdirAbnormalTest003(Calling a put method that does not support.)',
    FileProfileAbnormalTest.rmdirAbnormalTest003);

/**
 * 必要なパラメータ（path）がない状態でディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/rmdir?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
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
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('rmdirAbnormalTest004(Path does not exist.)', FileProfileAbnormalTest.rmdirAbnormalTest004);

/**
 * dir1以下にファイルが有るときdir1を削除するリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/rmdir?serviceId=xxxx&accessToken=xxx&path='dir1'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.file.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter(dConnect.constants.file.PARAM_PATH, '/dir1');
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 1 || errorCode == 10 || errorCode == 16) {
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
QUnit.asyncTest('rmdirAbnormalTest005(Dir1 has some files.)', FileProfileAbnormalTest.rmdirAbnormalTest005);

/**
 * ディレクトリではないrm_test.jpgに対してディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/rmdir?serviceId=xxxx&accessToken=xxx&path='/dir/rm_test.jpg'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_RMDIR);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter(dConnect.constants.file.PARAM_PATH, '/dir1/rm_test.jpg');
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      FileProfileAbnormalTest.rmdir('/dir1');
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10 || errorCode == 16) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      FileProfileAbnormalTest.rmfile('/dir1/rm_test.jpg');
      FileProfileAbnormalTest.rmdir('/dir1');
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rmdirAbnormalTest006(1.jpeg is not directory.)', FileProfileAbnormalTest.rmdirAbnormalTest006);
