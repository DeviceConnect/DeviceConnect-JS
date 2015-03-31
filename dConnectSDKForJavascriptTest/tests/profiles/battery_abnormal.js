module('Battery Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Batteryプロファイルのテストを行うクラス。
 * @class
 */
var BatteryProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドでバッテリーの全属性にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.allAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
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
QUnit.asyncTest('allAbnormalTest001(Calling a put method that does not support.)', BatteryProfileAbnormalTest.allAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーの全属性にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.allAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
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
QUnit.asyncTest('allAbnormalTest002(Calling a post method that does not support.)', BatteryProfileAbnormalTest.allAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーの全属性にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.allAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
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
QUnit.asyncTest('allAbnormalTest003(Calling a delete method that does not support.)', BatteryProfileAbnormalTest.allAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーレベルにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/level?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.levelAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_LEVEL);
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
QUnit.asyncTest('levelAbnormalTest001(Calling a put method that does not support.)', BatteryProfileAbnormalTest.levelAbnormalTest001);

/**
 * 定義されていないPUTメソッドでバッテリーレベルにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/level?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.levelAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_LEVEL);
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
QUnit.asyncTest('levelAbnormalTest002(Calling a post method that does not support.)', BatteryProfileAbnormalTest.levelAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーレベルにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/level?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.levelAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_LEVEL);
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
QUnit.asyncTest('levelAbnormalTest003(Calling a delete method that does not support.)', BatteryProfileAbnormalTest.levelAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーのチャージング時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.chargingTimeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING_TIME);
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
QUnit.asyncTest('chargingTimeAbnormalTest001(Calling a put method that does not support.)', BatteryProfileAbnormalTest.chargingTimeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーのチャージング時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.chargingTimeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING_TIME);
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
QUnit.asyncTest('chargingTimeAbnormalTest002(Calling a post method that does not support.)', BatteryProfileAbnormalTest.chargingTimeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーのチャージング時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/chargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.chargingTimeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING_TIME);
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
QUnit.asyncTest('chargingTimeAbnormalTest003(Calling a delete method that does not support.)', BatteryProfileAbnormalTest.chargingTimeAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーの放電時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.dischargingTimeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_DISCHARGING_TIME);
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
QUnit.asyncTest('dischargingTimeAbnormalTest001(Calling a put method that does not support.)', BatteryProfileAbnormalTest.dischargingTimeAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーの放電時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.dischargingTimeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_DISCHARGING_TIME);
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
QUnit.asyncTest('dischargingTimeAbnormalTest002(Calling a post method that does not support.)', BatteryProfileAbnormalTest.dischargingTimeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーの放電時間にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/dischargingTime?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.dischargingTimeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_DISCHARGING_TIME);
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
QUnit.asyncTest('dischargingTimeAbnormalTest003(Calling a delete method that does not support.)', BatteryProfileAbnormalTest.dischargingTimeAbnormalTest003);

/**
 * 定義されていないPUTメソッドでバッテリーの充電フラグにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id=test">
 * Method: PUT<br/>
 * Path: /battery/charging?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.batteryAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING);
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
QUnit.asyncTest('chargingAbnormalTest001(Calling a put method that does not support.)', BatteryProfileAbnormalTest.batteryAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでバッテリーの充電フラグにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/charging?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.batteryAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING);
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
QUnit.asyncTest('chargingAbnormalTest002(Calling a post method that does not support.)', BatteryProfileAbnormalTest.batteryAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでバッテリーの充電フラグにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /battery/charging?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.batteryAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_CHARGING);
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
QUnit.asyncTest('chargingAbnormalTest003(Calling a delete method that does not support.)', BatteryProfileAbnormalTest.batteryAbnormalTest003);

/**
 * 定義されていないPOSTメソッドでバッテリー状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/onbatterychange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_ON_BATTERY_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
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
QUnit.asyncTest('onBatteryChangeAbnormalTest001', BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest001);

/**
 * 定義されていないGETメソッドでバッテリー状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/onbatterychange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_ON_BATTERY_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
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
QUnit.asyncTest('onBatteryChangeAbnormalTest002', BatteryProfileAbnormalTest.onBatteryChangeAbnormalTest002);

/**
 * 定義されていないPOSTメソッドで充電状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /battery/onchargingchange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onChargingChangeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_ON_CHARGING_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
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
QUnit.asyncTest('onChargingChangeAbnormalTest001', BatteryProfileAbnormalTest.onChargingChangeAbnormalTest001);

/**
 * 定義されていないGETメソッドで充電状態取得イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /battery/onchargingchange?serviceId=xxxx&accessToken=xxx&sessionKey=xxxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
BatteryProfileAbnormalTest.onChargingChangeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.battery.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.battery.ATTR_ON_CHARGING_CHANGE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.setSessionKey('test');
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
QUnit.asyncTest('onChargingChangeAbnormalTest002', BatteryProfileAbnormalTest.onChargingChangeAbnormalTest002);
