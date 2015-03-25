module('LightProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Lightプロファイルの異常系テストを行うクラス。
 * @class
 */
var LightProfileAbnormalTest = {};

function getLightId(success_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, function(errorCode, errorMessage) {
      error_cb(errorCode, errorMessage);
    });
  }, function(errorCode, errorMessage) {
    error_cb(errorCode, errorMessage);
  });
}

function getLightGroupId(success_cb, error_cb) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAttribute('group');
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      success_cb(accessToken, serviceId, json);
    }, function(errorCode, errorMessage) {
      error_cb(errorCode, errorMessage);
    });
  }, function(errorCode, errorMessage) {
    error_cb(errorCode, errorMessage);
  });
}

/**
 * lightIdを指定しないでライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
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
QUnit.asyncTest('lightOnAbnormalTest001',
    LightProfileAbnormalTest.lightOnAbnormalTest001);

/**
 * 存在しないlightIdを指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx
 *        &lightId=10000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', 10000000000000000000000);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest002',
    LightProfileAbnormalTest.lightOnAbnormalTest002);

/**
 * brightnessに全角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest003 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness',
        'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnomalTest003',
    LightProfileAbnormalTest.lightOnAbnormalTest003);

/**
 * brightnessに半角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest004 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness',
        'abcdefgabcdefg' + 'abcdefgabcdefg' +
        'abcdefgabcdefg' + 'abcdefgabcdefg' +
        'abcdefgabcdefg');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest004',
    LightProfileAbnormalTest.lightOnAbnormalTest004);

/**
 * brightnessに特殊文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=!#$%?<>?#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest005 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness',
        '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
        '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
        '#$%?<>?#$%&<>?');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest005',
    LightProfileAbnormalTest.lightOnAbnormalTest005);

/**
 * brightnessに仕様範囲外の数値を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=10000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest006 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 10000);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest006',
    LightProfileAbnormalTest.lightOnAbnormalTest006);

/**
 * brightnessにマイナスの数値を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=-0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest007 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', -0.5);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest007',
    LightProfileAbnormalTest.lightOnAbnormalTest007);

/**
 * colorに全角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=0.5&color='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest008 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('color',
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest008',
    LightProfileAbnormalTest.lightOnAbnormalTest008);

/**
 * colorに半角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=0.5&color='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest009 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('color',
        'abcdefgabcdefg' + 'abcdefgabcdefg' + 'abcdefgabcdefg' +
        'abcdefgabcdefg' + 'abcdefgabcdefg');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest009',
    LightProfileAbnormalTest.lightOnAbnormalTest009);

/**
 * colorに特殊文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=0.5&color='#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest010 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('color',
        '#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?' +
        '#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnAbnormalTest010',
    LightProfileAbnormalTest.lightOnAbnormalTest010);

/**
 * 存在しないlightIdを指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=10000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', 10000000000000000000000);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest001',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest001);

/**
 * colorに全角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&color='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest002 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('color',
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest002',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest002);

/**
 * colorに半角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&color='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest003 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('color',
        'abcdefgabcdefg' + 'abcdefgabcdefg' + 'abcdefgabcdefg' +
        'abcdefgabcdefg' + 'abcdefgabcdefg');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest003',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest003);

/**
 * colorに特殊文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&color='#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest004 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('color',
        '#$%&<>?' + '#$%&<>?' + '#$%&<>?' + '#$%&<>?' + '#$%&<>?');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest004',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest004);

/**
 * brightnessに仕様範囲外の数値をを指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest005 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 100);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest005',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest005);

/**
 * brightnessにマイナスの数値をを指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=-0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest006 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', -0.5);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest006',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest006);

/**
 * brightnessに全角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest007 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness',
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest007',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest007);

/**
 * brightnessに半角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest008 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness',
        'abcdefgabcdefg' + 'abcdefgabcdefg' + 'abcdefgabcdefg' +
        'abcdefgabcdefg' + 'abcdefgabcdefg');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest008',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest008);

/**
 * brightnessにマイナスの数値を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=-0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest009 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', -0.5);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest009',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest009);

/**
 * flashingにnumber型で0を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest010 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('flashing', 0);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest010',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest010);

/**
 * flashingにnumber型でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=-1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest011 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('flashing', -1000);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest011',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest011);

/**
 * flashingにnumber型でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=-1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest012 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('flashing', -1000);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest012',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest012);

/**
 * flashingに全角文字でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest013 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('flashing',
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest013',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest013);

/**
 * flashingに半角文字でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest013 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('flashing', 'abcdefgabcdefgabcdefg' 
        + 'abcdefgabcdefgabcdefg' + 'abcdefgabcdefgabcdefg' 
        + 'abcdefgabcdefgabcdefg' + 'abcdefgabcdefgabcdefg');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest013',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest013);

/**
 * flashingに特殊文字でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing='#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest014 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', json.lights[0].lightId);
    builder.addParameter('brightness', 0.5);
    builder.addParameter('flashing', '#$%&<>?#$%&<>?#$%&<>?' 
        + '#$%&<>?#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?#$%&<>?' 
        + '#$%&<>?#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?#$%&<>?');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightStatusChangeAbnormalTest014',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest014);

/**
 * 存在しないlightIdを指定してライト消灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=10000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOffAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightId', 10000000000000000000000);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOffAbnormalTest001',
    LightProfileAbnormalTest.lightOffAbnormalTest001);

/**
 * nameを指定しないでgroup作成リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx&lightIds=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest001 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightIds', json.lights[0].lightId);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest001(get)', 
    LightProfileAbnormalTest.groupCreateAbnormalTest001);

/**
 * nameに数値を指定してgroup作成リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx&lightIds=xxx&name=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest002 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightIds', json.lights[0].lightId);
    builder.addParameter('name', 1000);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest002', LightProfileAbnormalTest.groupCreateAbnormalTest002);

/**
 * nameに数値を指定してgroup作成リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx&lightIds=xxx&name=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest003 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightIds', json.lights[0].lightId);
    builder.addParameter('name', 1000);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest003', LightProfileAbnormalTest.groupCreateAbnormalTest003);

/**
 * lightIdsに存在しないlightIdを指定してgroup作成リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx&lightIds='10000000'&name='testGroup'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest004 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightIds', '10000000');
    builder.addParameter('name', 'testGroup');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest004', 
    LightProfileAbnormalTest.groupCreateAbnormalTest004);

/**
 * lightIdsに存在しないlightIdを指定してgroup作成リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx&lightIds='10000000'&name='testGroup'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest005 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightIds', '10000000');
    builder.addParameter('name', 'testGroup');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest005', LightProfileAbnormalTest.groupCreateAbnormalTest005);

/**
 * lightIdsにnumber型の値を指定してgroup作成リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx&lightIds='10000000'&name='testGroup'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest006 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('lightIds', 1);
    builder.addParameter('name', 'testGroup');
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest006', LightProfileAbnormalTest.groupCreateAbnormalTest006);

/**
 * 定義されていないメソッドでライトのグループを作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null,
      function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        QUnit.start();
      }, function(errorCode, errorMessage) {
        if (errorCode == 8) {
          assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        } else if (checkErrorCode(errorCode)) {
          assert.ok(true, 'not support');
        } else {
          assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        }
        QUnit.start();
      });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest007', 
    LightProfileAbnormalTest.groupCreateAbnormalTest007);

/**
 * 定義されていないメソッドでライトのグループを作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest008', LightProfileAbnormalTest.groupCreateAbnormalTest008);

/**
 * 定義されていないメソッドでライトのグループを作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupCreateAbnormalTest009 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest009', LightProfileAbnormalTest.groupCreateAbnormalTest009);

/**
 * 定義されていないGETメソッドでライトのグループを削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /light/group/clear?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupClearAbnormalTest010 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('clear');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupClearAbnormalTest010', LightProfileAbnormalTest.groupClearAbnormalTest010);

/**
 * 定義されていないPOSTメソッドでライトのグループを削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light/group/clear?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupClearAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('clear');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupClearAbnormalTest001', LightProfileAbnormalTest.groupClearAbnormalTest001);

/**
 * 定義されていないPUTメソッドでライトのグループを削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light/group/clear?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.groupClearAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('clear');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 8) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateAbnormalTest002', LightProfileAbnormalTest.groupClearAbnormalTest002);

