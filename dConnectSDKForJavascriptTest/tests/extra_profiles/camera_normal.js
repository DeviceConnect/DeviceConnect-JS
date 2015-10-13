module('CameraProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Cameraプロファイルの正常系テストを行うクラス。
 * @class
 */
var CameraProfileNormalTest = {};

/**
 * ズーム倍率取得のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /camera/zoom<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * ・zoomPositionに返ってくる値が0.0~1.0の間であること。<br/>
 * </p>
 */
CameraProfileNormalTest.zoomPositionNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('camera');
        builder.setAttribute('zoom');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(true, 'result=' + json.result);
              assert.ok((json.zoomPosition !== undefined &&
              json.zoomPosition <= 1.0 && 0.0 <= json.zoomPosition),
                 'zoomPosition: ' + json.zoomPosition);
              QUnit.start();
            },
        function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
              'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('zoomPositionNormalTest001(get)', CameraProfileNormalTest.zoomPositionNormalTest001);

/**
 * ズームインを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
CameraProfileNormalTest.zoomNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('camera');
        builder.setAttribute('zoom');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('direction', 'in');
        builder.addParameter('movement', 'start');
        var uri = builder.build();
        dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true,
                  'Success of the zoom to start. result=' + json.result);
              setTimeout(function() {
                var builder = new dConnect.URIBuilder();
                builder.setProfile('camera');
                builder.setAttribute('zoom');
                builder.setServiceId(serviceId);
                builder.setAccessToken(accessToken);
                builder.addParameter('direction', 'in');
                builder.addParameter('movement', 'stop');
                var uri = builder.build();
                dConnect.put(uri, null, null,
                    function(json) {
                      assert.ok(true,
                          'Success of the zoom to stop.result=' +
                          json.result);
                      QUnit.start();
                    },
                    function(errorCode, errorMessage) {
                      assert.ok(checkErrorCode(errorCode),
                          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
                      QUnit.start();
                    });
              }, 2000);
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('zoomNormalTest001(Zoom in the camera.)',
    CameraProfileNormalTest.zoomNormalTest001);

/**
 * 少しだけズームインするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxxx&accessToken=xxxx&direction='in'&movement='1shot'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくる。
 * </p>
 */
CameraProfileNormalTest.zoomNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('camera');
        builder.setAttribute('zoom');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('direction', 'in');
        builder.addParameter('movement', '1shot');
        var uri = builder.build();
        dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('zoomNormalTest002(Zoom in the camera only 1shot.)',
    CameraProfileNormalTest.zoomNormalTest002);

/**
 * 最小倍率までズームアウトするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxxx&accessToken=xxxx&direction='out'&movement='out'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * <p>
 */
CameraProfileNormalTest.zoomNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('camera');
        builder.setAttribute('zoom');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('direction', 'out');
        builder.addParameter('movement', 'start');
        var uri = builder.build();
        dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true,
                  'Success of the zoom out to start. result=' + json.result);
              setTimeout(function() {
                var builder = new dConnect.URIBuilder();
                builder.setProfile('camera');
                builder.setAttribute('zoom');
                builder.setServiceId(serviceId);
                builder.setAccessToken(accessToken);
                builder.addParameter('direction', 'out');
                builder.addParameter('movement', 'stop');
                var uri = builder.build();
                dConnect.put(uri, null, null,
                    function(json) {
                      assert.ok(true,
                          'Success of the zoom to stop.result=' +
                          json.result);
                      QUnit.start();
                    },
                    function(errorCode, errorMessage) {
                      assert.ok(checkErrorCode(errorCode),
                          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
                      QUnit.start();
                    });
              }, 1500);
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('zoomNormalTest003(Zoom out the camera.)',
    CameraProfileNormalTest.zoomNormalTest003);

/**
 * 1shot分だけズームアウトするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxxx&accessToken=xxxx&direction='out'&movement='1shot'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * <p>
 */
CameraProfileNormalTest.zoomNormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('camera');
        builder.setAttribute('zoom');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('direction', 'out');
        builder.addParameter('movement', '1shot');
        var uri = builder.build();
        dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('zoom(Zoom out the camera only 1shot.)',
    CameraProfileNormalTest.zoomNormalTest004);
