module('DriveControllerProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * DriveControllerプロファイルの異常系テストを行うクラス。
 * @class
 */

var DriveControllerProfileAbnormalTest = {};

/**
 * 定義されていないGETメソッドで指定された方向に無線移動機器の移動を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=90&speed=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest001 = function(assert) {
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
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 3) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('moveAbnormalTest001(get not support method.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest001);

/**
 * 定義されていないPUTメソッドで指定された方向に無線移動機器の移動を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=90&speed=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest002 = function(assert) {
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
};
QUnit.asyncTest('moveAbnormalTest002(put not support method.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで指定された方向に無線移動機器の移動を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=90&speed=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest003 = function(assert) {
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
};
QUnit.asyncTest('moveAbnormalTest003(delete not support method.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest003);

/**
 * POSTメソッドでangleとspeedを設定せずに無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('moveAbnormalTest004(angle and speed not set)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest004);

/**
 * POSTメソッドでangle=かきくけこ, speed=あいうえおとして無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle='かきくけこ'&speed='あいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 'かきくけこ');
  builder.addParameter('speed', 'あいうえお');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    QUnit.start();
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
  });
};
QUnit.asyncTest('moveAbnormalTest005(Set string in angle and speed.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest005);

/**
 * POSTメソッドでangle=12345, speed=67890として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=12345&speed=67890<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 12345);
  builder.addParameter('speed', 67890);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    QUnit.start();
    assert.ok(false, 'json: ' + JSON.stringify(json));
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('moveAbnormalTest006(Set big number in angle and speed.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest006);

/**
 * POSTメソッドでangle=abc, speed=defとして無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle='abc'&speed='def'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 'abc');
  builder.addParameter('speed', 'def');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('moveAbnormalTest007(Set a string in angle and speed.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest007);


/**
 * POSTメソッドでangle=10000, speed=0.8として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=10000&speed=0.8<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest012 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('move');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 10000);
  builder.addParameter('speed', 0.8);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('moveAbnormalTest012',
    DriveControllerProfileAbnormalTest.moveAbnormalTest012);



/**
 * 定義されていないGETメソッドで無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.stopAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
};
QUnit.asyncTest('stopAbnormalTest001(Calling a get method that does not support.)',
    DriveControllerProfileAbnormalTest.stopAbnormalTest001);

/**
 * 定義されていないPUTメソッドで無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.stopAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
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
};
QUnit.asyncTest('stopAbnormalTest002(Calling a put method that does not support.)',
    DriveControllerProfileAbnormalTest.stopAbnormalTest002);

/**
 * 定義されていないPOSTメソッドで無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.stopAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('stop');
  builder.setServiceId(serviceId);
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
};
QUnit.asyncTest('stopAbnormalTest003(Calling a post method that does not support.)',
    DriveControllerProfileAbnormalTest.stopAbnormalTest003);

/**
 * 定義されていないGETメソッドで指定された向きに無線移動機器の回転を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
};
QUnit.asyncTest('rotateAbnormalTest001(Calling a get method that does not support.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで指定された向きに無線移動機器の回転を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
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
};
QUnit.asyncTest('rotateAbnormalTest002(Calling a post method that does not support.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで指定された向きに無線移動機器の回転を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 90);
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
};
QUnit.asyncTest('rotateAbnormalTest003(Calling a delete method that does not support.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest003);

/**
 * PUTメソッドでangleを指定せずに無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rotateAbnormalTest004(Calling a put method without setting of angle.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest004);

/**
 * PUTメソッドでangle=あいうえおとして無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle='あいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 'あいうえお');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rotateAbnormalTest005(Calling a put method with angle=あいうえお.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest005);

/**
 * PUTメソッドでangle=12345として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=12345<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 12345);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rotateAbnormalTest006(Calling a put method with angle=12345.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest006);

/**
 * PUTメソッドでangle=abcとして無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle='abc'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('drivecontroller');
  builder.setAttribute('rotate');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('angle', 'abc');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('rotateAbnormalTest007(Calling a put method with angle=abc.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest007);

