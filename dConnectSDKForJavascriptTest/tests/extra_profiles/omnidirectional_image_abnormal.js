module('OmnidirectionalImageProfileAbnormalTest', {
  setup: function() {
    init();
    this.option = null;
  },
  teardown: function() {
    if (this.option !== null) {
      stopRoiView(this.option);
    }
  }
});

function startRoiView(option) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('omnidirectionalimage');
  builder.setAttribute('roi');
  builder.setServiceId(option.serviceId);
  builder.setAccessToken(option.accessToken);
  builder.addParameter('source', OMNI_IMG_URI);
  var uri = builder.build();
  dConnect.put(uri, null, null,
    function(json) {
      var uri = json.uri;
      option.uri = uri;
      option.onsuccess(uri);
    },
    function(errorCode, errorMessage) {
      var assert = option.assert;
      assert.ok(false, 'Failed to start ROI View; errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
}

function stopRoiView(option) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('omnidirectionalimage');
  builder.setAttribute('roi');
  builder.setServiceId(option.serviceId);
  builder.setAccessToken(option.accessToken);
  builder.addParameter('uri', option.uri);
  var uri = builder.build();
  dConnect.delete(uri, null,
    function(json) {
    },
    function(errorCode, errorMessage) {
    });
}

/**
 * Omnidirectional Imageプロファイルの異常系テストを行うクラス。
 * @class
 */
var OmnidirectionalImageProfileAbnormalTest = {};

/**
 * ROI画像表示開始APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putStartRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest001);

/**
 * ROI画像表示開始APIのsourceパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx&source=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('source', 'http://localhost:4035/xxxxx');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putStartRoiViewAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest002);

/**
 * ROI画像表示開始APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('getStartRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest001);

/**
 * ROI画像表示開始APIのsourceパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx&source=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('source', 'http://localhost:4035/xxxxx');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('getStartRoiViewAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest002);

/**
 * ROI画像表示終了APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.deleteStopRoiViewAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('deleteStopRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.deleteStopRoiViewAbnormalTest001);

/**
 * ROI画像表示設定APIのuriパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setInterface('roi');
    builder.setAttribute('settings');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamUriAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest001);

/**
 * ROI画像表示設定APIのuriパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectionalimage');
    builder.setInterface('roi');
    builder.setAttribute('settings');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('uri', 'http://localhost:9000/xxxxx');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamUriAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest002);

/**
 * ROI画像表示設定APIのxパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&x=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamXAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('x', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamXAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamXAbnormalTest001);

/**
 * ROI画像表示設定APIのyパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&y=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('y', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamYAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYAbnormalTest001);

/**
 * ROI画像表示設定APIのzパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&z=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamZAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('z', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamZAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamZAbnormalTest001);

/**
 * ROI画像表示設定APIのrollパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&roll=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('roll', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamRollAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest001);

/**
 * ROI画像表示設定APIのrollパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&roll=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('roll', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamRollAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest002);

/**
 * ROI画像表示設定APIのrollパラメータに360.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&roll=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest003 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('roll', '361.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamRollAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest003);

/**
 * ROI画像表示設定APIのyawパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&yaw=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('yaw', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamYawAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest001);

/**
 * ROI画像表示設定APIのyawパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&yaw=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('yaw', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamYawAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest002);

/**
 * ROI画像表示設定APIのyawパラメータに360.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&yaw=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest003 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('yaw', '361.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamYawAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest003);

/**
 * ROI画像表示設定APIのpitchパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&pitch=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('pitch', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamPitchAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest001);

/**
 * ROI画像表示設定APIのpitchパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&pitch=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('pitch', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamPitchAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest002);

/**
 * ROI画像表示設定APIのpitchパラメータに360.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&pitch=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest003 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('pitch', '361.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamPitchAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest003);

/**
 * ROI画像表示設定APIのfovパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&fov=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('fov', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamFovAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest001);

/**
 * ROI画像表示設定APIのfovパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&fov=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('fov', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamFovAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest002);

/**
 * ROI画像表示設定APIのfovパラメータに180.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&fov=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest003 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('fov', '181.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamFovAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest003);

/**
 * ROI画像表示設定APIのsphereSizeパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&sphereSize=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('sphereSize', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamSphereSizeAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest001);

/**
 * ROI画像表示設定APIのsphereSizeパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&sphereSize=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('sphereSize', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamSphereSizeAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest002);

/**
 * ROI画像表示設定APIのwidthパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&width=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('width', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamWidthAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest001);

/**
 * ROI画像表示設定APIのwidthパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&width=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('width', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamWidthAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest002);

/**
 * ROI画像表示設定APIのheightパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&height=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('height', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamHeightAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest001);

/**
 * ROI画像表示設定APIのheightパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&height=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest002 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('height', '-1.0');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamHeightAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest002);

/**
 * ROI画像表示設定APIのstereoパラメータに真理値でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&stereo=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamStereoAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('stereo', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamStereoAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamStereoAbnormalTest001);

/**
 * ROI画像表示設定APIのvrパラメータに真理値でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&vr=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamVrAbnormalTest001 = function(assert) {
  var option = {
    assert: assert,
    onsuccess: function(uri) {
      var builder = new dConnect.URIBuilder();
      builder.setProfile('omnidirectionalimage');
      builder.setInterface('roi');
      builder.setAttribute('settings');
      builder.setServiceId(option.serviceId);
      builder.setAccessToken(option.accessToken);
      builder.addParameter('uri', uri);
      builder.addParameter('vr', 'xxxxx');
      var uri = builder.build();
      dConnect.put(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        },
        function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode +
            ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
    }
  };
  this.option = option;
  searchTestService(function(accessToken, serviceId) {
    option.serviceId = serviceId;
    option.accessToken = accessToken;
    startRoiView(option);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsParamVrAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamVrAbnormalTest001);
