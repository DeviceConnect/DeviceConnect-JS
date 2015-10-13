module('AirConditionerProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * AirConditionerプロファイルの正常系テストを行うクラス。
 * @class
 */
var AirConditionerProfileNormalTest = {};

/**
 * 電源状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.getPowerStateNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
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
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('getPowerStateNormalTest001(get)',
    AirConditionerProfileNormalTest.getPowerStateNormalTest001);

/**
 * 電源をオンするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerOnNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
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
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('powerOnNormalTest001(get)',
    AirConditionerProfileNormalTest.powerOnNormalTest001);

/**
 * 電源をオフするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.powerOffNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
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
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('powerOffNormalTest001(get)',
    AirConditionerProfileNormalTest.powerOffNormalTest001);

/**
 * 節電動作設定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/operationpowersaving?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationPowerSavingNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationpowersaving');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'operationpowersaving=' + json.operationpowersaving);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationPowerSavingNormalTest001(get)',
    AirConditionerProfileNormalTest.operationPowerSavingNormalTest001);

/**
 * 節電動作設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationpowersaving?serviceId=xxxx&accessToken=xxx&operationpowersaving=PowerSaving<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationPowerSavingNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationpowersaving');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationpowersaving', 'PowerSaving');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationPowerSavingNormalTest002(put)',
    AirConditionerProfileNormalTest.operationPowerSavingNormalTest002);

/**
 * 節電動作設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationpowersaving?serviceId=xxxx&accessToken=xxx&operationpowersaving=Normal<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationPowerSavingNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationpowersaving');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationpowersaving', 'Normal');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationPowerSavingNormalTest003(put)',
    AirConditionerProfileNormalTest.operationPowerSavingNormalTest003);

/**
 * 運転モード設定を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'operationmodesetting=' + json.operationmodesetting);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest001(get)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest001);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx&operationmodesetting=Other<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationmodesetting', 'Other');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest002(put - Other)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest002);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx&operationmodesetting=AirCirculator<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationmodesetting', 'AirCirculator');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest003(put - AirCirculator)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest003);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx&operationmodesetting=Dehumidification<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationmodesetting', 'Dehumidification');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest004(put - Dehumidification)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest004);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx&operationmodesetting=Heating<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationmodesetting', 'Heating');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest005(put - Heating)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest005);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx&operationmodesetting=Cooling<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationmodesetting', 'Cooling');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest006(put - Cooling)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest006);

/**
 * 運転モード設定を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/operationmodesetting?serviceId=xxxx&accessToken=xxx&operationmodesetting=Automatic<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.operationModeSettingNormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('operationmodesetting');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('operationmodesetting', 'Automatic');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('operationModeSettingNormalTest007(put - Automatic)',
    AirConditionerProfileNormalTest.operationModeSettingNormalTest007);

/**
 * 室内温度計測値を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/roomtemperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.roomTemperatureNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('roomtemperature');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'roomtemperature=' + json.roomtemperature);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('roomTemperatureNormalTest001(get)',
    AirConditionerProfileNormalTest.roomTemperatureNormalTest001);

/**
 * 温度設定値を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/temperaturevalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.temperatureValueNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('temperaturevalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'temperaturevalue=' + json.temperaturevalue);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('temperatureValueNormalTest001(get)',
    AirConditionerProfileNormalTest.temperatureValueNormalTest001);

/**
 * 温度設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/temperaturevalue?serviceId=xxxx&accessToken=xxx&temperaturevalue=25<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.temperatureValueNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('temperaturevalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('temperaturevalue', '25');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('temperatureValueNormalTest002(put)',
    AirConditionerProfileNormalTest.temperatureValueNormalTest002);

/**
 * 風量設定値を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'airflowvalue=' + json.airflowvalue);
          assert.ok(true, 'airflowauto=' + json.airflowauto);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest001(get)',
    AirConditionerProfileNormalTest.airflowValueNormalTest001);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.0');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest002(put - 0.0)',
    AirConditionerProfileNormalTest.airflowValueNormalTest002);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.12<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.12');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest003(put - 0.12)',
    AirConditionerProfileNormalTest.airflowValueNormalTest003);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.25<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.25');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest004(put - 0.25)',
    AirConditionerProfileNormalTest.airflowValueNormalTest004);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.38<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.38');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest005(put - 0.38)',
    AirConditionerProfileNormalTest.airflowValueNormalTest005);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.51<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.51');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest006(put - 0.51)',
    AirConditionerProfileNormalTest.airflowValueNormalTest006);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.64<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.64');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest007(put - 0.64)',
    AirConditionerProfileNormalTest.airflowValueNormalTest007);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.77<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.77');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest008(put - 0.77)',
    AirConditionerProfileNormalTest.airflowValueNormalTest008);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest009 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.90');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest009(put - 0.90)',
    AirConditionerProfileNormalTest.airflowValueNormalTest009);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest010 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '1.0');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest010(put - 1.0)',
    AirConditionerProfileNormalTest.airflowValueNormalTest010);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowauto=true<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest011 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowauto', 'true');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest011(put - Automatic[true])',
    AirConditionerProfileNormalTest.airflowValueNormalTest011);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.51&airflowauto=false<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest012 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.51');
    builder.addParameter('airflowauto', 'false');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest012(put Automatic[false], 0.51)',
    AirConditionerProfileNormalTest.airflowValueNormalTest012);

/**
 * 風量設定値を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/airflowvalue?serviceId=xxxx&accessToken=xxx&airflowvalue=0.51&airflowauto=true<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.airflowValueNormalTest013 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('airflowvalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('airflowvalue', '0.51');
    builder.addParameter('airflowauto', 'true');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('airflowValueNormalTest013(put - Automatic[true], 0.51)',
    AirConditionerProfileNormalTest.airflowValueNormalTest013);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('enlproperty');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'epc=' + json.properties[0].epc);
          assert.ok(true, 'value=' + json.properties[0].epc);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('enlPropertyNormalTest001(get)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest001);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('enlproperty');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80,0x8F');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'epc=' + json.properties[0].epc);
          assert.ok(true, 'value=' + json.properties[0].epc);
          assert.ok(true, 'epc=' + json.properties[1].epc);
          assert.ok(true, 'value=' + json.properties[1].epc);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('enlPropertyNormalTest002(get)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest002);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('enlproperty');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80,0x8F,0xB0,0xB3,0xBB');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'epc=' + json.properties[0].epc);
          assert.ok(true, 'value=' + json.properties[0].epc);
          assert.ok(true, 'epc=' + json.properties[1].epc);
          assert.ok(true, 'value=' + json.properties[1].epc);
          assert.ok(true, 'epc=' + json.properties[2].epc);
          assert.ok(true, 'value=' + json.properties[2].epc);
          assert.ok(true, 'epc=' + json.properties[3].epc);
          assert.ok(true, 'value=' + json.properties[3].epc);
          assert.ok(true, 'epc=' + json.properties[4].epc);
          assert.ok(true, 'value=' + json.properties[4].epc);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('enlPropertyNormalTest003(get)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest003);

/**
 * ECHONET Lite プロパティを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditoner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileNormalTest.enlPropertyNormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('airconditioner');
    builder.setAttribute('enlproperty');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80');
    builder.addParameter('value', '49');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('enlPropertyNormalTest004(put)',
    AirConditionerProfileNormalTest.enlPropertyNormalTest004);

