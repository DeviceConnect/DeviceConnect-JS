module('TemperatureProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Temperatureプロファイルの異常系テストを行うクラス。
 * @class
 */
var TemperatureProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?deviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('temperature');
    builder.setServiceId(deviceId);
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
QUnit.asyncTest('temperatureAbnormalTest001',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /temperature?deviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('temperature');
    builder.setServiceId(deviceId);
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
QUnit.asyncTest('temperatureAbnormalTest002',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /temperature?deviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('temperature');
    builder.setServiceId(deviceId);
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
QUnit.asyncTest('temperatureAbnormalTest003',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest003);
