module('DriveControllerProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * DriveControllerプロファイルの正常系テストを行うクラス。
 * @class
 */
var DriveControllerProfileNormalTest = {};

/**
 * angle=0, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 0);
  builder.addParameter('speed', 0.1);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest001',
    DriveControllerProfileNormalTest.moveNormalTest001);

/**
 * angle=0, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 0);
  builder.addParameter('speed', 0.5);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest002',
    DriveControllerProfileNormalTest.moveNormalTest002);

/**
 * angle=0, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 0);
  builder.addParameter('speed', 1.0);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest003',
    DriveControllerProfileNormalTest.moveNormalTest003);

/**
 * angle=90, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
  builder.addParameter('speed', 0.1);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest004',
    DriveControllerProfileNormalTest.moveNormalTest004);

/**
 * angle=90, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
  builder.addParameter('speed', 0.5);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest005',
    DriveControllerProfileNormalTest.moveNormalTest005);

/**
 * angle=90, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
  builder.addParameter('speed', 1.0);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest006',
    DriveControllerProfileNormalTest.moveNormalTest006);

/**
 * angle=180, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 180);
  builder.addParameter('speed', 0.1);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest007',
    DriveControllerProfileNormalTest.moveNormalTest007);

/**
 * angle=180, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 180);
  builder.addParameter('speed', 0.5);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest008',
    DriveControllerProfileNormalTest.moveNormalTest008);

/**
 * angle=180, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 180);
  builder.addParameter('speed', 1.0);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest009',
    DriveControllerProfileNormalTest.moveNormalTest009);

/**
 * angle=270, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest010 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 270);
  builder.addParameter('speed', 0.1);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest010',
    DriveControllerProfileNormalTest.moveNormalTest010);

/**
 * angle=270, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest011 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 270);
  builder.addParameter('speed', 0.5);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest011',
    DriveControllerProfileNormalTest.moveNormalTest011);

/**
 * angle=270, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest012 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 270);
  builder.addParameter('speed', 1.0);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest012',
    DriveControllerProfileNormalTest.moveNormalTest012);

/**
 * angle=90, speed=0.666666666として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest013 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
  builder.addParameter('speed', 0.666666666);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('moveNormalTest013',
    DriveControllerProfileNormalTest.moveNormalTest013);

/**
 * 無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.stopNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('stopNormalTest001',
    DriveControllerProfileNormalTest.stopNormalTest001);

/**
 * angle=0として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 0);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rotateNormalTest001',
    DriveControllerProfileNormalTest.rotateNormalTest001);

/**
 * angle=90として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rotateNormalTest002',
    DriveControllerProfileNormalTest.rotateNormalTest002);

/**
 * angle=180として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 180);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rotateNormalTest003',
    DriveControllerProfileNormalTest.rotateNormalTest003);

/**
 * angle=270として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 270);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
        'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('rotateNormalTest004',
    DriveControllerProfileNormalTest.rotateNormalTest004);
