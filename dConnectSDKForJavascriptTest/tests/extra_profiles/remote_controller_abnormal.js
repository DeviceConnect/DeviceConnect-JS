module('RemoteControllerProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * RemoteControllerプロファイルの異常系テストを行うクラス。
 * @class
 */
var RemoteControllerProfileAbnormalTest = {};

/**
 * messageに空文字を指定して赤外線を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remote_controller?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest001 =
    function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('remote_controller');
    builder.setServiceId(serviceId);
    builder.addParameter('message', '');
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
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
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('remoteControllerAbnormalTest001',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest001);

/**
 * messageを指定しないで赤外線を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remote_controller?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('remote_controller');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
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
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('remoteControllerAbnormalTest002',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest002);

/**
 * messageに数値を指定して赤外線を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remote_controller?serviceId=xxx&accessToken=xxx&message=123456789<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('remote_controller');
    builder.setServiceId(serviceId);
    builder.addParameter('message', 123456789);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
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
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('remoteControllerAbnormalTest003',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest003);

/**
 * messageに全角文字を指定して赤外線情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remote_controller?serviceId=xxx&accessToken=xxx&message="あいうえおあいうえおあいうえお..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('remote_controller');
        builder.setServiceId(serviceId);
        builder.addParameter('message',
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
            'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお');
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
            assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, "not support");
          } else {
            assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
          }
          QUnit.start();
        });
      }, function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('remoteControllerAbnormalTest004',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest004);

/**
 * messageに半角文字を指定して赤外線情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remote_controller?serviceId=xxx&accessToken=xxx&message="abcdefgabcdefgabcdefgabcdefg..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('remote_controller');
    builder.setServiceId(serviceId);
    builder.addParameter('message',
        'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
        'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
        'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
        'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg' +
        'abcdefgabcdefgabcdefgabcdefg');
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('remoteControllerAbnormalTest005',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest005);

/**
 * messageに特殊文字を指定して赤外線情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /remote_controller?serviceId=xxx&accessToken=xxx&message="!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('remote_controller');
    builder.setServiceId(serviceId);
    builder.addParameter('message',
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
        '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()');
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, "not support");
      } else {
        assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false,
        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('remoteControllerAbnormalTest006',
    RemoteControllerProfileAbnormalTest.remoteControllerAbnormalTest006);
