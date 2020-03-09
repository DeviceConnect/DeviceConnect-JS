QUnit.module('HumanDetection Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * HumanDetectionプロファイルの異常系テストを行うクラス。
 * @class
 */
var HumanDetectionProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest001 = function(assert) {
  var PROFILE_NAME = 'humanDetection';
  var ATTR_ERROR = 'onDetection';
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ERROR);
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
};
QUnit.test('onCallErrorPostApiAbnormalTest001(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest002 = function(assert) {
  var PROFILE_NAME = 'humanDetection';
  var ATTR_ERROR = 'onBodyDetection';
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ERROR);
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
};
QUnit.test('onCallErrorPostApiAbnormalTest002(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest002);
/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003 = function(assert) {
  var PROFILE_NAME = 'humanDetection';
  var ATTR_ERROR = 'onHandDetection';
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ERROR);
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
};
QUnit.test('onCallErrorPostApiAbnormalTest003(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003);

/**
 * 定義されていないPOSTメソッドでイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003 = function(assert) {
  var PROFILE_NAME = 'humanDetection';
  var ATTR_ERROR = 'onFaceDetection';
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(PROFILE_NAME);
  builder.setAttribute(ATTR_ERROR);
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
};
QUnit.test('onCallErrorPostApiAbnormalTest003(post)', HumanDetectionProfileAbnormalTest.onCallErrorPostApiAbnormalTest003);

/**
 * intervalに非常に桁の大きな数値を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('humanIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('humanIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('humanIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('humanIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('humanIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.humanIntervalAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してonBodyDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onBodyDetection?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onBodyDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('bodyMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.bodyMaxHeightAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してonHandDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onHandDetection?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onHandDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('handMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.handMaxHeightAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('interval',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxWidth',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('maxHeight',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMaxHeightAbnormalTest005);


/**
 * eyeThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('eyeThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceEyeThresholdAbnormalTest001(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest001);

/**
 * eyeThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('eyeThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceEyeThresholdAbnormalTest002(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest002);

/**
 * eyeThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('eyeThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceEyeThresholdAbnormalTest003(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest003);

/**
 * eyeThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('eyeThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceEyeThresholdAbnormalTest004(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest004);

/**
 * eyeThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&eyeThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('eyeThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceEyeThresholdAbnormalTest005(Calling eyeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceEyeThresholdAbnormalTest005);


/**
 * noseThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('noseThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceNoseThresholdAbnormalTest001(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest001);

/**
 * noseThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('noseThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceNoseThresholdAbnormalTest002(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest002);

/**
 * noseThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('noseThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceNoseThresholdAbnormalTest003(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest003);

/**
 * noseThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('noseThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceNoseThresholdAbnormalTest004(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest004);

/**
 * noseThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&noseThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('noseThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceNoseThresholdAbnormalTest005(Calling noseThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceNoseThresholdAbnormalTest005);


/**
 * mouthThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('mouthThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMouthThresholdAbnormalTest001(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest001);

/**
 * mouthThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('mouthThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMouthThresholdAbnormalTest002(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest002);

/**
 * mouthThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('mouthThreshold',
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
  dConnect.get(uri, null, function(json) {
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
};
QUnit.test('faceMouthThresholdAbnormalTest003(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest003);

/**
 * mouthThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('mouthThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMouthThresholdAbnormalTest004(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest004);

/**
 * mouthThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&mouthThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('mouthThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceMouthThresholdAbnormalTest005(Calling mouthThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceMouthThresholdAbnormalTest005);


/**
 * blinkThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('blinkThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceBlinkThresholdAbnormalTest001(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest001);

/**
 * blinkThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('blinkThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceBlinkThresholdAbnormalTest002(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest002);

/**
 * blinkThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('blinkThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceBlinkThresholdAbnormalTest003(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest003);

/**
 * blinkThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('blinkThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceBlinkThresholdAbnormalTest004(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest004);

/**
 * blinkThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&blinkThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('blinkThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceBlinkThresholdAbnormalTest005(Calling blinkThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceBlinkThresholdAbnormalTest005);


/**
 * ageThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('ageThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceAgeThresholdAbnormalTest001(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest001);

/**
 * ageThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('ageThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceAgeThresholdAbnormalTest002(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest002);

/**
 * ageThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('ageThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceAgeThresholdAbnormalTest003(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest003);

/**
 * ageThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('ageThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceAgeThresholdAbnormalTest004(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest004);

/**
 * ageThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&ageThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('ageThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceAgeThresholdAbnormalTest005(Calling ageThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceAgeThresholdAbnormalTest005);


/**
 * genderThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('genderThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGenderThresholdAbnormalTest001(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest001);

/**
 * genderThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('genderThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGenderThresholdAbnormalTest002(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest002);

/**
 * genderThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('genderThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGenderThresholdAbnormalTest003(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest003);

/**
 * genderThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('genderThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGenderThresholdAbnormalTest004(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest004);

/**
 * genderThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&genderThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('genderThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGenderThresholdAbnormalTest005(Calling genderThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGenderThresholdAbnormalTest005);


/**
 * faceDirectionThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('faceDirectionThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceFaceDirectionThresholdAbnormalTest001(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest001);

/**
 * faceDirectionThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('faceDirectionThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceFaceDirectionThresholdAbnormalTest002(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest002);

/**
 * faceDirectionThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('faceDirectionThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceFaceDirectionThresholdAbnormalTest003(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest003);

/**
 * faceDirectionThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('faceDirectionThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceFaceDirectionThresholdAbnormalTest004(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest004);

/**
 * faceDirectionThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('faceDirectionThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceFaceDirectionThresholdAbnormalTest005(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest005);


/**
 * gazeThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('gazeThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGazeThresholdAbnormalTest001(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest001);

/**
 * gazeThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('gazeThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGazeThresholdAbnormalTest002(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest002);

/**
 * gazeThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('gazeThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGazeThresholdAbnormalTest003(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest003);

/**
 * gazeThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('gazeThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGazeThresholdAbnormalTest004(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest004);

/**
 * gazeThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&gazeThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('gazeThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceGazeThresholdAbnormalTest005(Calling gazeThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceGazeThresholdAbnormalTest005);


/**
 * expressionThresholdに非常に桁の大きな数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('expressionThreshold',
      1000000000000000000000000000000000000000000000000000000000);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceExpressionThresholdAbnormalTest001(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest001);

/**
 * expressionThresholdに非常に桁のマイナスの数値を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('expressionThreshold', -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceExpressionThresholdAbnormalTest002(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest002);

/**
 * expressionThresholdに全角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('expressionThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceExpressionThresholdAbnormalTest003(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest003);

/**
 * expressionThresholdに半角文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('expressionThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceExpressionThresholdAbnormalTest004(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest004);

/**
 * expressionThresholdに特殊文字を入力してonFaceDetectionにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humanDetection/onFaceDetection?serviceId=xxx&accessToken=xxx&expressionThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humanDetection');
  builder.setAttribute('onFaceDetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('expressionThreshold',
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
  dConnect.get(uri, null, function(json) {
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
QUnit.test('faceExpressionThresholdAbnormalTest005(Calling expressionThreshold parameter in special characters.)',
    HumanDetectionProfileAbnormalTest.faceExpressionThresholdAbnormalTest005);
