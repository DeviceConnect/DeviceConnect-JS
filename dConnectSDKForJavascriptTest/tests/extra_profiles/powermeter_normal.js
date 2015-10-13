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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'powerstate=' + json.powerMeter);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
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
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
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
QUnit.asyncTest('powerOffNormalTest001(get)',
    PowerMeterProfileNormalTest.powerOffNormalTest001);

/**
 * 積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
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
QUnit.asyncTest('integratedPowerValueNormalTest001(get)',
    PowerMeterProfileNormalTest.integratedPowerValueNormalTest001);

/**
 * 日付を指定して積算電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/integratedpowervalue?serviceId=xxxx&accessToken=xxx>date=yyyy-MM-ddThh:mm:ssZ<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.integratedPowerValueNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('integratedpowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('date', createCurrentDateString());
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'integratedpowervalue=' + json.integratedpowervalue);
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
QUnit.asyncTest('integratedPowerValueNormalTest002(date is now)',
    PowerMeterProfileNormalTest.integratedPowerValueNormalTest002);

/**
 * 瞬間電力量を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /powermeter/instantaneous?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
PowerMeterProfileNormalTest.instantaneousPowerValueNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('powermeter');
    builder.setAttribute('instantaneouspowervalue');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'instantaneouspowervalue=' + json.instantaneouspowervalue);
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
QUnit.asyncTest('instantaneousPowerValueNormalTest001(get)',
    PowerMeterProfileNormalTest.instantaneousPowerValueNormalTest001);
