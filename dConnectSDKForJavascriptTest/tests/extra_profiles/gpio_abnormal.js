QUnit.module('GPIOProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * GPIOプロファイルの正常系テストを行うクラス。
 * @class
 */
var GPIOProfileAbnormalTest = {};

/**
 * 指定範囲外のPIN番号を指定して、GPIOのDigital値を取得
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/digital/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('21');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest001',
    GPIOProfileAbnormalTest.gpioAbnormalTest001);

/**
 * 指定範囲外のPIN番号を指定して、GPIOのAnalog値を取得
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/analog/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('analog');
  builder.setAttribute('21');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest002',
    GPIOProfileAbnormalTest.gpioAbnormalTest002);

/**
 * 規定外のAttributeを送信
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/test/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('test');
  builder.setAttribute('21');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest003',
    GPIOProfileAbnormalTest.gpioAbnormalTest003);

/**
 * 指定範囲外のPIN番号を指定して、exportを実行
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/21<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('export');
  builder.setAttribute('21');
  builder.addParameter('mode', 1);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest004',
    GPIOProfileAbnormalTest.gpioAbnormalTest004);

/**
 * modeの値を指定しない.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/19<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('export');
  builder.setAttribute('19');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest005',
    GPIOProfileAbnormalTest.gpioAbnormalTest005);

/**
 * modeの値を1,2,3,4以外に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/19
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=10<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('export');
  builder.setAttribute('19');
  builder.addParameter('mode', 10);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest006',
    GPIOProfileAbnormalTest.gpioAbnormalTest006);

/**
 * modeの値を文字列に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/19?<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=aaa<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('export');
  builder.setAttribute('19');
  builder.addParameter('mode', 'aaaa');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest007',
    GPIOProfileAbnormalTest.gpioAbnormalTest007);

/**
 * 指定範囲外のPIN番号を指定して、digitalを実行
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/21<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('21');
  builder.addParameter('value', 1);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest008',
    GPIOProfileAbnormalTest.gpioAbnormalTest008);

/**
 * valueの値を指定しない.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('5');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest009',
    GPIOProfileAbnormalTest.gpioAbnormalTest009);

/**
 * valueの値を0,1以外に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5
 * POST Value: serviceId=xxxx&accessToken=xxx&value=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest010 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('5');
  builder.addParameter('value', 4);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest010',
    GPIOProfileAbnormalTest.gpioAbnormalTest010);

/**
 * valueの値を文字列に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&value=aaa<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest011 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('5');
  builder.addParameter('value', 'aaaa');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest011',
    GPIOProfileAbnormalTest.gpioAbnormalTest011);

/**
 * 指定範囲外のPIN番号を指定して、analogを実行
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/1<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&value=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest012 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('analog');
  builder.setAttribute('1');
  builder.addParameter('value', 100);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest012',
    GPIOProfileAbnormalTest.gpioAbnormalTest012);

/**
 * valueの値を指定しない.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/15<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest013 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('analog');
  builder.setAttribute('3');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest013',
    GPIOProfileAbnormalTest.gpioAbnormalTest013);

/**
 * valueの値を256以上に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/15
 * POST Value: serviceId=xxxx&accessToken=xxx&value=300<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest014 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('analog');
  builder.setAttribute('3');
  builder.addParameter('value', 300);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest014',
    GPIOProfileAbnormalTest.gpioAbnormalTest014);

/**
 * valueの値を文字列に設定.
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/15<br/>
 * POST Value: serviceId=xxxx&accessToken=xxx&mode=aaa<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに10が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest015 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('analog');
  builder.setAttribute('3');
  builder.addParameter('value', 'aaaa');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest015',
    GPIOProfileAbnormalTest.gpioAbnormalTest015);

/**
 * 指定範囲外のPIN番号を指定して、指定PINをHIGHに
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest016 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('21');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest016',
    GPIOProfileAbnormalTest.gpioAbnormalTest016);

/**
 * 規定外のAttributeを送信
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/test/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest017 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('test');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest017',
    GPIOProfileAbnormalTest.gpioAbnormalTest017);

/**
 * 指定範囲外のPIN番号を指定して、指定PINをLOWに
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest018 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('digital');
  builder.setAttribute('21');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest018',
    GPIOProfileAbnormalTest.gpioAbnormalTest018);

/**
 * 規定外のAttributeを送信
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/test/21?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに8が返ってくること。<br/>
 * </p>
 */
GPIOProfileAbnormalTest.gpioAbnormalTest019 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('gpio');
  builder.setInterface('test');
  builder.setAttribute('21');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.test('gpioAbnormalTest019',
    GPIOProfileAbnormalTest.gpioAbnormalTest019);




