module('Battery Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Batteryプロファイルのテストを行うクラス。
 * @class
 */
var BatteryProfileNormalTest = {};

/**
 * バッテリーの全属性取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.allNormalTest001 = function(assert) {
  searchTestService(function(mAccessToken, mServiceId, supported) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setServiceId(mServiceId);
        builder.setAccessToken(mAccessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              if (json.level === undefined) {
                assert.ok(true, 'level=' + json.level);
              } else {
                assert.ok(json.level >= 0.0 && json.level <= 1.0, 'level=' + json.level);
              }
              assert.ok(true, 'charging=' + json.charging);
              if (json.chargingTime === undefined) {
                assert.ok(true, 'chargingTime=' + json.chargingTime);
              } else {
                assert.ok(json.chargingTime >= 0, 'chargingTime=' + json.chargingTime);
              }
              if (json.dischargingTime === undefined) {
                assert.ok(true, json.dischargingTime);
              } else {
                assert.ok(true, 'dischargingTime=' + json.dischargingTime);
              }
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('allNormalTest001', BatteryProfileNormalTest.allNormalTest001);

/**
 * バッテリーレベルを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・levelが0.0〜1.0の範囲に収まっていること。<br/>
 * </p>
 */

BatteryProfileNormalTest.levelNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId, supported) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_LEVEL);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok((json.level != undefined && 0 <= json.level && json.level <= 1.0), 'level=' + json.level);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('levelNormalTest001', BatteryProfileNormalTest.levelNormalTest001);

/**
 * バッテリーのチャージング時間を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・chargingTime >= 0が返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.chargingTimeNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId, supported) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING_TIME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              if (json.result === dConnect.constants.RESULT_ERROR) {
                if (supported) {
                  assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_ATTRIBUTE, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
                } else {
                  assert.equal(json.errorCode, dConnect.constants.ErrorCode.NOT_SUPPORT_PROFILE, 'errorCode=' + json.errorCode + ' errorMessage=' + json.errorMessage);
                }
              } else {
                assert.ok(true, 'result=' + json.result);
                assert.ok((json.chargingTime != undefined && json.chargingTime >= 0), 'chargingTime=' + json.chargingTime);
              }
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('chargingTimeNormalTest001', BatteryProfileNormalTest.chargingTimeNormalTest001);

/**
 * バッテリーの放電時間を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・dischargingTime >= 0が返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.dischargingTimeNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId, supported) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_DISCHARGING_TIME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok((json.dischargingTime && json.dischargingTime >= 0), 'dischargingTime=' + json.dischargingTime);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('dischargingTimeNormalTest001', BatteryProfileNormalTest.dischargingTimeNormalTest001);

/**
 * バッテリーの充電フラグを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・chargingにtrueかfalseが返ってくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.batteryNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok(json.charging !== undefined, 'charging=' + json.charging);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('batteryNormalTest001', BatteryProfileNormalTest.batteryNormalTest001);

/**
 * Batteryプロファイルのonbatterychangeの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/onbatterychange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.onBatteryChangeNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.battery.ATTR_ON_BATTERY_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.battery.PROFILE_NAME && json.attribute === dConnect.constants.battery.ATTR_ON_BATTERY_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onBatteryChangeNormalTest001', BatteryProfileNormalTest.onBatteryChangeNormalTest001);

/**
 * Batteryプロファイルのonchargingchangeを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/onchargingchange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileNormalTest.onChargingChangeNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.battery.ATTR_ON_CHARGING_CHANGE);
  openWebsocket(builder, assert, 10000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === dConnect.constants.battery.PROFILE_NAME && json.attribute === dConnect.constants.battery.ATTR_ON_CHARGING_CHANGE) {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.asyncTest('onChargingChangeNormalTest001', BatteryProfileNormalTest.onChargingChangeNormalTest001);
