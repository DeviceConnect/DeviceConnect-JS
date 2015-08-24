module('OmnidirectionalImageProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

function startRoiView(option) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('omnidirectional_image');
  builder.setAttribute('roi');
  builder.setServiceId(option.serviceId);
  builder.setAccessToken(option.accessToken);
  builder.addParameter('source', OMNI_IMG_URI);
  var uri = builder.build();
  dConnect.put(uri, null, null,
    function(json) {
      option.onsuccess(json.uri);
    },
    function(errorCode, errorMessage) {
      var assert = option.assert;
      assert.ok(false, 'Failed to start ROI View; errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
}

/**
 * Omnidirectional Imageプロファイルの異常系テストを行うクラス。
 * @class
 */
var OmnidirectionalImageProfileAbnormalTest = {};

/**
 * ROI画像表示開始APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.startRoiViewAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectional_image');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('startRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.startRoiViewAbnormalTest001);

/**
 * ROI画像表示開始APIのsourceパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx&source=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.startRoiViewAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectional_image');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('source', 'http://localhost:4035/xxxxx');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('startRoiViewAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.startRoiViewAbnormalTest002);

/**
 * ROI画像表示終了APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.stopRoiViewAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectional_image');
    builder.setAttribute('roi');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('stopRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.stopRoiViewAbnormalTest001);

/**
 * ROI画像表示設定APIのuriパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectional_image');
    builder.setInterface('roi');
    builder.setAttribute('settings');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsAbnormalTest001);

/**
 * ROI画像表示設定APIのuriパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('omnidirectional_image');
    builder.setInterface('roi');
    builder.setAttribute('settings');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('uri', 'http://localhost:9000/xxxxx');
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == 10) {
        assert.ok(true, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      } else if (checkErrorCode(errorCode)) {
        assert.ok(true, 'not support');
      } else {
        assert.ok(false, 'errorCode=' + errorCode +
        ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsAbnormalTest002);

/**
 * ROI画像表示設定APIのxパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&x=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    startRoiView({
      serviceId: serviceId,
      accessToken: accessToken,
      assert: assert,
      onsuccess: function(uri) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('omnidirectional_image');
        builder.setInterface('roi');
        builder.setAttribute('settings');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('uri', uri);
        builder.addParameter('x', 'xxxxx');
        var uri = builder.build();
        dConnect.put(uri, null, null,
          function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
          },
          function(errorCode, errorMessage) {
            if (errorCode == 10) {
              assert.ok(true, 'errorCode=' + errorCode +
              ', errorMessage=' + errorMessage);
            } else if (checkErrorCode(errorCode)) {
              assert.ok(true, 'not support');
            } else {
              assert.ok(false, 'errorCode=' + errorCode +
              ', errorMessage=' + errorMessage);
            }
            QUnit.start();
          });
      }
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode +
    ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('putRoiViewSettingsAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsAbnormalTest003);



