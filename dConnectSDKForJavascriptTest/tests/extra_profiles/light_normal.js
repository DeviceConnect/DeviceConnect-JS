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

function getLightGroupId(successCallback, errorCallback) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setAttribute('group');
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
 * ライトのグループを作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /light/group/create?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.groupCreateNormalTest001 = function(assert) {
  getLightId(function(accessToken, serviceId, json) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setInterface('group');
    builder.setAttribute('create');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var lights = "";
    for (var i = 0; i < json.lights.length; i++) {
      if (i !== 0) {
        lights += ',';
      }
      lights += json.lights[i].lightId;
    }
    console.log("grouped lights: " + lights);
    builder.addParameter('lightIds', lights);
    builder.addParameter('groupName','testLightGroup');
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode) ||
        errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER,
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupCreateNormalTest001(post)',
  LightProfileNormalTest.groupCreateNormalTest001);


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

/**
 * ライトのグループなどを識別するID等を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /light/group?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.groupNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('light');
    builder.setAttribute('group');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      console.log('GroupID:' + json.lightGroups[0].groupId);
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupNormalTest001(get)', LightProfileNormalTest.groupNormalTest001);

/**
 * 指定されたライトのグループを点灯するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /light/group?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.groupNormalTest002 = function(assert) {
  getLightGroupId(function(accessToken, serviceId, json) {
    if (json.lightGroups) {
      for (var i = 0; i < json.lightGroups.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setAttribute('group');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('color', 'ff0000');
        builder.addParameter('groupId', json.lightGroups[i].groupId);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }
    } else {
      assert.ok(false, 'no lightGroups.');
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupNormalTest002(post)', LightProfileNormalTest.groupNormalTest002);

/**
 * 指定されたライトのグループの色を指定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /light/group?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.groupNormalTest003 = function(assert) {
  getLightGroupId(function(accessToken, serviceId, json) {
    if (json.lightGroups) {
      for (var i = 0; i < json.lightGroups.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setAttribute('group');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('color', 'cc0000');
        builder.addParameter('groupId', json.lightGroups[i].groupId);
        builder.addParameter('name','groupTest' + i);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }
    } else {
      assert.ok(false, 'no lightGroups.');
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupNormalTest003(put)', LightProfileNormalTest.groupNormalTest003);

/**
 * 指定されたライトのグループを消灯するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /light/group?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.groupNormalTest004 = function(assert) {
  getLightGroupId(function(accessToken, serviceId, json) {
    if (json.lightGroups) {
      for (var i = 0; i < json.lightGroups.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setAttribute('group');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('groupId', json.lightGroups[i].groupId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }
    } else {
      assert.ok(false, 'no lightGroups.');
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupNormalTest004(delete)',
    LightProfileNormalTest.groupNormalTest004);

/**
 * ライトのグループを削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /light/group/clear?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.groupClearNormalTest001 = function(assert) {
  getLightGroupId(function(accessToken, serviceId, json) {
    if (json.lightGroups) {
      console.log("group: " + json.lightGroups);
      for (var i = 0; i < json.lightGroups.length; i++) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('light');
        builder.setInterface('group');
        builder.setAttribute('clear');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('groupId', json.lightGroups[i].groupId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode) ||
            errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER,
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }
    } else {
      assert.ok(false, 'no lights');
      QUnit.start();
    }
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('groupClearNormalTest001(delete)',
    LightProfileNormalTest.groupClearNormalTest001);
