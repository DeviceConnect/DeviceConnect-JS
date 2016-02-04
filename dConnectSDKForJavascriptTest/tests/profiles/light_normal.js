module('LightProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Lightプロファイルの正常系テストを行うクラス。
 * @class
 */
var LightProfileNormalTest = {};

function getLightId(successCallback, errorCallback) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              successCallback(accessToken, serviceId, json);
              QUnit.start();
            }, function(errorCode, errorMessage) {
              errorCallback(errorCode, errorMessage);
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        errorCallback(errorCode, errorMessage);
        QUnit.start();
      });
}

/**
 * ライト情報を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.getLightIdNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result + ", light:" + json.lights[0].lightId);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('getLightIdNormalTest001(get)', LightProfileNormalTest.getLightIdNormalTest001);

/**
 * ライトを点灯するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.lightOnNormalTest001 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    if (json.lights) {
      for (var i = 0; i < json.lights.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('color', 'ff0000');
        builder.addParameter('lightId', json.lights[i].lightId);
        builder.addParameter('flashing', '500,500,500,500,500,500');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
        });
      }
      setTimeout(function() {
        QUnit.start();
      }, 3000);
    } else {
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOnNormalTest001(post)', LightProfileNormalTest.lightOnNormalTest001);

/**
 * ライトのステータスを変更するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.statusChangeNormalTest001 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    if (json.lights) {
      for (var i = 0; i < json.lights.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('color', 'ff0000');
        builder.addParameter('name', 'Hue Light Test');
        builder.addParameter('lightId', json.lights[i].lightId);
        builder.addParameter('flashing', '500,500,500,500,500,500');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
        });
      }
      setTimeout(function() {
        QUnit.start();
      }, 3000);
    } else {
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('statusChangeNormalTest001(put)', LightProfileNormalTest.statusChangeNormalTest001);


/**
 * ライトを消灯するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.lightOffNormalTest001 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    if (json.lights) {

      for (var i = 0; i < json.lights.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('lightId', json.lights[i].lightId);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
        });
      }

      setTimeout(function() {
        for (var i = 0; i < json.lights.length; i++) {
          var builder = new dConnect.URIBuilder();
          builder.setProfile('light');
          builder.setServiceId(serviceId);
          builder.setAccessToken(accessToken);
          builder.addParameter('lightId', json.lights[i].lightId);
          var uri = builder.build();
          dConnect.delete(uri, null, function(json) {
            assert.ok(true, 'result=' + json.result);
          }, function(errorCode, errorMessage) {
            assert.ok(checkErrorCode(errorCode),
                'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          });
        }
      }, 2000);

      setTimeout(function() {
        QUnit.start();
      }, 3000);
    } else {
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightOffNormalTest001(delete)', LightProfileNormalTest.lightOffNormalTest001);
