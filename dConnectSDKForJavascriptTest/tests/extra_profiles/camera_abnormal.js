QUnit.module('CameraProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Cameraプロファイルの異常系テストを行うクラス。
 * @class
 */
var CameraProfileAbnormalTest = {};

/**
 * directionにtestを指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='test'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'test');
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest001(Calling direction parameter in test.)',
    CameraProfileAbnormalTest.zoomAbnormalTest001);

/**
 * directionに空文字を指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=''&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 */
CameraProfileAbnormalTest.zoomAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', '');
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest002(Calling direction parameter in empty string.)',
    CameraProfileAbnormalTest.zoomAbnormalTest002);

/**
 * directionに数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=1000&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 1000);
  builder.addParameter('movement', 'start');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
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
QUnit.test('zoomAbnormalTest003(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest003);

/**
 * directionに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=1000000000000000000000000000000000000000000000000000000000&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction',
      1000000000000000000000000000000000000000000000000000000000);
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest004(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest004);

/**
 * directionに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=-1&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', -1);
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest005(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest005);

/**
 * directionに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='あいうえおあいうえお...'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction',
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお');
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest006(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest006);

/**
 * directionに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='abcdefgabcdefgabcdefgabcdefg...'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction',
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg');
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest007(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest007);

/**
 * directionに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction',
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()');
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest008(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest008);

/**
 * directionを指定せずにズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('movement', 'start');
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
QUnit.test('zoomAbnormalTest009(Calling no paramters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest009);

/**
 * movementにtestを指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest010 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement', 'test');
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
QUnit.test('zoomAbnormalTest010(Calling movement parameter in test.)',
    CameraProfileAbnormalTest.zoomAbnormalTest010);

/**
 * movementに空文字を指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest011 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement', '');
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
QUnit.test('zoomAbnormalTest011(Calling movement parameter in empty string.)',
    CameraProfileAbnormalTest.zoomAbnormalTest011);

/**
 * movementに数値を指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest012 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement', 1000);
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
QUnit.test('zoomAbnormalTest012(Calling movement parameter in empty string.)',
    CameraProfileAbnormalTest.zoomAbnormalTest012);

/**
 * movementに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest013 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement',
      1000000000000000000000000000000000000000000000000000000000);
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
QUnit.test('zoomAbnormalTest013(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest013);

/**
 * movementに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest014 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement', -1);
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
QUnit.test('zoomAbnormalTest014(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest014);

/**
 * movementに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest015 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement',
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお');
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
QUnit.test('zoomAbnormalTest015(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest015);

/**
 * movementに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest016 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement',
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg');
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
QUnit.test('zoomAbnormalTest016(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest016);

/**
 * movementに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest017 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement',
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()');
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
QUnit.test('zoomAbnormalTest017(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest017);

/**
 * movementを指定せずにズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest018 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
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
QUnit.test('zoomAbnormalTest018(Calling no paramters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest018);

/**
 * movement,directionを指定せずにズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest019 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
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
QUnit.test('zoomAbnormalTest019(Calling no paramters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest019);

/**
 * 定義していないPOSTメソッドでズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest020 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement', 'start');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
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
QUnit.test('zoomAbnormalTest020(Calling a post method that does not support.)',
    CameraProfileAbnormalTest.zoomAbnormalTest020);

/**
 * 定義していないDELETEメソッドでズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest021 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('camera');
  builder.setAttribute('zoom');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('direction', 'in');
  builder.addParameter('movement', 'start');
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
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
QUnit.test('zoomAbnormalTest021(Calling a delete method that does not support.)',
    CameraProfileAbnormalTest.zoomAbnormalTest021);
