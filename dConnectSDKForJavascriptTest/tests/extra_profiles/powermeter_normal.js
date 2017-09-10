module('PowerMeterProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * PowerMeterプロファイルの正常系テストを行うクラス。
 * @class
 */
var PowerMeterProfileNormalTest = {};

/**
 * 電源状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.getPowerStateNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'powerstatus=' + json.powerstatus);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('getPowerStateNormalTest001(get)',
    PowerMeterProfileNormalTest.getPowerStateNormalTest001);

/**
 * 電源をオンするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.powerOnNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('powerOnNormalTest001(get)',
    PowerMeterProfileNormalTest.powerOnNormalTest001);

/**
 * 電源をオフするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /powermeter?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.powerOffNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('powerOffNormalTest001(get)',
    PowerMeterProfileNormalTest.powerOffNormalTest001);

/**
 * 積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest001(get)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest001);

/**
 * 日付を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>date=yyyy-MM-ddThh:mm:ssZ<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('date', createCurrentDateString());
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest002(date is now)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest002);

/**
 * 単位'Wh'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&unit=Wh<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('unit', 'Wh');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest003(unit is Wh)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest003);

/**
 * 単位'kWh'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&unit=kWh<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('unit', 'kWh');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest004(unit is kWh)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest004);

/**
 * コマ数'24'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&count=24<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('count', '24');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest005(count is 24)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest005);

/**
 * コマ数'48'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&count=48<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('count', '48');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest006(count is 48)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest006);

/**
 * 方向'normal'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&powerFlow=normal<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('powerFlow', 'normal');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest007(powerflow is normal)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest007);

/**
 * 方向'reverse'を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpower?serviceId=xxxx&accessToken=xxx>&powerFlow=reverse<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerNormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('integratedpower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('powerFlow', 'reverse');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
        assert.ok(true, 'unit=' + json.unit);
        assert.ok(true, 'count=' + json.count);
        assert.ok(true, 'powerFlow=' + json.powerFlow);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('integratedPowerNormalTest008(powerflow is reverse)',
    PowerMeterProfileNormalTest.integratedPowerNormalTest008);

/**
 * 瞬時電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouspower?serviceId=xxxx&accessToken=xxx&unit="A"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('instantaneouspower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'instantaneouspowervalue=' + json.instantaneouspowervalue);
        assert.ok(true, 'unit=' + json.unit);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('instantaneousPowerNormalTest001(get)',
    PowerMeterProfileNormalTest.instantaneousPowerNormalTest001);

/**
 * 単位'W'を指定して瞬時電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouspower?serviceId=xxxx&accessToken=xxx&unit=W<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('instantaneouspower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('unit', 'W');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'instantaneouspowervalue=' + json.instantaneouspowervalue);
        assert.ok(true, 'unit=' + json.unit);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('instantaneousPowerNormalTest002(unit is W)',
    PowerMeterProfileNormalTest.instantaneousPowerNormalTest002);

/**
 * 単位'kW'を指定して瞬時電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouspower?serviceId=xxxx&accessToken=xxx&unit=kW<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('instantaneouspower');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('unit', 'kW');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'instantaneouspowervalue=' + json.instantaneouspowervalue);
        assert.ok(true, 'unit=' + json.unit);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('instantaneousPowerNormalTest003(unit is kW))',
    PowerMeterProfileNormalTest.instantaneousPowerNormalTest003);

/**
 * 瞬時電流量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouscurrent?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousCurrentNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('instantaneouscurrent');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'rphase=' + json.instantaneouscurrentvalue.rphase);
        assert.ok(true, 'tphase=' + json.instantaneouscurrentvalue.tphase);
        assert.ok(true, 'unit=' + json.instantaneouscurrentvalue.unit);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('instantaneousCurrentNormalTest001(get)',
    PowerMeterProfileNormalTest.instantaneousCurrentNormalTest001);

/**
 * 単位'A'を指定して瞬時電流量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouscurrent?serviceId=xxxx&accessToken=xxx&unit=A<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousCurrentNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('instantaneouscurrent');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('unit', 'A');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'rphase=' + json.instantaneouscurrentvalue.rphase);
        assert.ok(true, 'tphase=' + json.instantaneouscurrentvalue.tphase);
        assert.ok(true, 'unit=' + json.instantaneouscurrentvalue.unit);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('instantaneousCurrentNormalTest002(unit is A)',
    PowerMeterProfileNormalTest.instantaneousCurrentNormalTest002);

/**
 * 単位'mA'を指定して瞬時電流量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneouscurrent?serviceId=xxxx&accessToken=xxx&unit=mA<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousCurrentNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('powermeter');
  builder.setAttribute('instantaneouscurrent');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('unit', 'mA');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(true, 'rphase=' + json.instantaneouscurrentvalue.rphase);
        assert.ok(true, 'tphase=' + json.instantaneouscurrentvalue.tphase);
        assert.ok(true, 'unit=' + json.instantaneouscurrentvalue.unit);
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('instantaneousCurrentNormalTest003(unit is mA)',
    PowerMeterProfileNormalTest.instantaneousCurrentNormalTest003);
