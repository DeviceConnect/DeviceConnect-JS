module('PowerMeterProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * PowerMeterプロファイルの異常系テストを行うクラス。
 * @class
 */
var PowerMeterProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで電力計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.powermeterAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
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
QUnit.asyncTest('powermeterAbnormalTest001(Calling a post method that does not support.)',
    PowerMeterProfileNormalTest.powermeterAbnormalTest001);

/**
 * 定義されていないPUTメソッドで積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
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
QUnit.asyncTest('integratedPowerValueAbnormalTest001(Calling a put method that does not support.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
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
QUnit.asyncTest('integratedPowerValueAbnormalTest002(Calling a post method that does not support.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
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
QUnit.asyncTest('integratedPowerValueAbnormalTest003(Calling a delete method that does not support.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest003);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullで日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', null);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest003(date is null.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest003);

/**
 * undefinedで日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', undefined);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest004(date is undefined.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest004);

/**
 * 数字で日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', '1234');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest005(date is number.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest005);

/**
 * 英字で日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', 'abc');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest006(date is alphabet.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest006);

/**
 * 日本語で日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', 'あいう');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest007(date is hiragana.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest007);

/**
 * 記号で日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest008(date is symbol.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest008);

/**
 * 1000文字で日付を指定して積算電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx?date=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest009 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    },
    function(errorCode, errorMessage) {
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
QUnit.asyncTest('integratedPowerValueAbnormalTest009(date is limit.)',
    PowerMeterProfileNormalTest.integratedPowerValueAbnormalTest009);

/**
 * 定義されていないPUTメソッドで瞬間電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter/instantaneouspowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerValueAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('instantaneouspowervalue');
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
QUnit.asyncTest('instantaneousPowerValueAbnormalTest001(Calling a put method that does not support.)',
    PowerMeterProfileNormalTest.instantaneousPowerValueAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで瞬間電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /powermeter/instantaneouspowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerValueAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('instantaneouspowervalue');
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
QUnit.asyncTest('instantaneousPowerValueAbnormalTest002(Calling a post method that does not support.)',
    PowerMeterProfileNormalTest.instantaneousPowerValueAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで瞬間電力量にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /powermeter/instantaneouspowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerValueAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('instantaneouspowervalue');
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
QUnit.asyncTest('instantaneousPowerValueAbnormalTest003(Calling a delete method that does not support.)',
    PowerMeterProfileNormalTest.instantaneousPowerValueAbnormalTest003);
