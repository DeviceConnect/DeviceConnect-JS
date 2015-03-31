module('HumanDetect Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * HumanDetectプロファイルの異常系テストを行うクラス。
 * @class
 */
var HumanDetectProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /humandetect/error?serviceId=xxxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに8が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.onCallErrorPostApiAbnormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var ATTR_ERROR = 'error';
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(PROFILE_NAME);
    builder.setAttribute(ATTR_ERROR);
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
QUnit.asyncTest('onCallErrorPostApiAbnormalTest001(post)', HumanDetectProfileAbnormalTest.onCallErrorPostApiAbnormalTest001);

/**
 * 定義されていないPUTメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /humandetect/error?serviceId=xxxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.onCallErrorPutApiAbnormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var ATTR_ERROR = 'error';
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(PROFILE_NAME);
    builder.setAttribute(ATTR_ERROR);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey('test');
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
QUnit.asyncTest('onCallErrorPutApiAbnormalTest001(post)', HumanDetectProfileAbnormalTest.onCallErrorPutApiAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでタッチ通知イベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /humandetect/error?serviceId=xxxx&accessToken=xxx&sessionKey=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.onCallErrorDeleteApiAbnormalTest001 = function(assert) {
  var PROFILE_NAME = 'humandetect';
  var ATTR_ERROR = 'error';
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(PROFILE_NAME);
    builder.setAttribute(ATTR_ERROR);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey('test');
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
QUnit.asyncTest('onCallErrorDeleteApiAbnormalTest001(post)', HumanDetectProfileAbnormalTest.onCallErrorDeleteApiAbnormalTest001);


/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/body?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('interval',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('interval', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/body?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minWidth',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minWidth', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/body?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxWidth',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxWidth', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/body?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minHeight',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minHeight', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/body?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxHeight',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxHeight', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('body');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('bodyMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.bodyMaxHeightAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/hand?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handIntervalAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('interval',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handIntervalAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('interval', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handIntervalAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handIntervalAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handIntervalAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/hand?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minWidth',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minWidth', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/hand?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxWidth',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxWidth', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/hand?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minHeight',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minHeight', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/hand?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxHeight',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxHeight', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('hand');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('handMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.handMaxHeightAbnormalTest005);

/*---------------------------------------------------------------------*/

/**
 * intervalに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&interval=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('interval',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceIntervalAbnormalTest001(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest001);

/**
 * intervalに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('interval', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceIntervalAbnormalTest002(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest002);

/**
 * intervalに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceIntervalAbnormalTest003(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest003);

/**
 * intervalに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceIntervalAbnormalTest004(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest004);

/**
 * intervalに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&interval='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceIntervalAbnormalTest005(Calling interval parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceIntervalAbnormalTest005);


/**
 * minWidthに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&minWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minWidth',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinWidthAbnormalTest001(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest001);

/**
 * minWidthに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minWidth', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinWidthAbnormalTest002(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest002);

/**
 * minWidthに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinWidthAbnormalTest003(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest003);

/**
 * minWidthに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinWidthAbnormalTest004(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest004);

/**
 * minWidthに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinWidthAbnormalTest005(Calling minWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinWidthAbnormalTest005);


/**
 * maxWidthに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&maxWidth=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxWidth',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxWidthAbnormalTest001(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest001);

/**
 * maxWidthに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxWidth', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxWidthAbnormalTest002(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest002);

/**
 * maxWidthに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxWidthAbnormalTest003(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest003);

/**
 * maxWidthに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxWidthAbnormalTest004(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest004);

/**
 * maxWidthに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxWidth='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxWidthAbnormalTest005(Calling maxWidth parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxWidthAbnormalTest005);


/**
 * minHeightに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&minHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minHeight',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinHeightAbnormalTest001(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest001);

/**
 * minHeightに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('minHeight', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinHeightAbnormalTest002(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest002);

/**
 * minHeightに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinHeightAbnormalTest003(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest003);

/**
 * minHeightに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinHeightAbnormalTest004(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest004);

/**
 * minHeightに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&minHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMinHeightAbnormalTest005(Calling minHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMinHeightAbnormalTest005);

/**
 * maxHeightに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&maxHeight=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxHeight',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxHeightAbnormalTest001(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest001);

/**
 * maxHeightに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('maxHeight', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxHeightAbnormalTest002(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest002);

/**
 * maxHeightに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxHeightAbnormalTest003(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest003);

/**
 * maxHeightに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxHeightAbnormalTest004(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest004);

/**
 * maxHeightに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&maxHeight='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMaxHeightAbnormalTest005(Calling maxHeight parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMaxHeightAbnormalTest005);


/**
 * eyeThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&eyeThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('eyeThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceEyeThresholdAbnormalTest001(Calling eyeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest001);

/**
 * eyeThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&eyeThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('eyeThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceEyeThresholdAbnormalTest002(Calling eyeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest002);

/**
 * eyeThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&eyeThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceEyeThresholdAbnormalTest003(Calling eyeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest003);

/**
 * eyeThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&eyeThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceEyeThresholdAbnormalTest004(Calling eyeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest004);

/**
 * eyeThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&eyeThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceEyeThresholdAbnormalTest005(Calling eyeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceEyeThresholdAbnormalTest005);


/**
 * noseThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&noseThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('noseThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceNoseThresholdAbnormalTest001(Calling noseThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest001);

/**
 * noseThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&noseThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('noseThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceNoseThresholdAbnormalTest002(Calling noseThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest002);

/**
 * noseThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&noseThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceNoseThresholdAbnormalTest003(Calling noseThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest003);

/**
 * noseThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&noseThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceNoseThresholdAbnormalTest004(Calling noseThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest004);

/**
 * noseThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&noseThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceNoseThresholdAbnormalTest005(Calling noseThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceNoseThresholdAbnormalTest005);


/**
 * mouthThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&mouthThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('mouthThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMouthThresholdAbnormalTest001(Calling mouthThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest001);

/**
 * mouthThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&mouthThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('mouthThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMouthThresholdAbnormalTest002(Calling mouthThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest002);

/**
 * mouthThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&mouthThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMouthThresholdAbnormalTest003(Calling mouthThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest003);

/**
 * mouthThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&mouthThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMouthThresholdAbnormalTest004(Calling mouthThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest004);

/**
 * mouthThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&mouthThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceMouthThresholdAbnormalTest005(Calling mouthThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceMouthThresholdAbnormalTest005);


/**
 * blinkThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&blinkThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('blinkThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceBlinkThresholdAbnormalTest001(Calling blinkThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest001);

/**
 * blinkThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&blinkThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('blinkThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceBlinkThresholdAbnormalTest002(Calling blinkThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest002);

/**
 * blinkThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&blinkThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceBlinkThresholdAbnormalTest003(Calling blinkThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest003);

/**
 * blinkThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&blinkThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceBlinkThresholdAbnormalTest004(Calling blinkThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest004);

/**
 * blinkThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&blinkThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceBlinkThresholdAbnormalTest005(Calling blinkThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceBlinkThresholdAbnormalTest005);


/**
 * ageThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&ageThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('ageThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceAgeThresholdAbnormalTest001(Calling ageThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest001);

/**
 * ageThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&ageThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('ageThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceAgeThresholdAbnormalTest002(Calling ageThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest002);

/**
 * ageThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&ageThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceAgeThresholdAbnormalTest003(Calling ageThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest003);

/**
 * ageThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&ageThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceAgeThresholdAbnormalTest004(Calling ageThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest004);

/**
 * ageThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&ageThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceAgeThresholdAbnormalTest005(Calling ageThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceAgeThresholdAbnormalTest005);


/**
 * genderThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&genderThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('genderThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGenderThresholdAbnormalTest001(Calling genderThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest001);

/**
 * genderThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&genderThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('genderThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGenderThresholdAbnormalTest002(Calling genderThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest002);

/**
 * genderThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&genderThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGenderThresholdAbnormalTest003(Calling genderThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest003);

/**
 * genderThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&genderThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGenderThresholdAbnormalTest004(Calling genderThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest004);

/**
 * genderThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&genderThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGenderThresholdAbnormalTest005(Calling genderThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGenderThresholdAbnormalTest005);


/**
 * faceDirectionThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&faceDirectionThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('faceDirectionThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceFaceDirectionThresholdAbnormalTest001(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest001);

/**
 * faceDirectionThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&faceDirectionThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('faceDirectionThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceFaceDirectionThresholdAbnormalTest002(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest002);

/**
 * faceDirectionThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceFaceDirectionThresholdAbnormalTest003(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest003);

/**
 * faceDirectionThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceFaceDirectionThresholdAbnormalTest004(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest004);

/**
 * faceDirectionThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&faceDirectionThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceFaceDirectionThresholdAbnormalTest005(Calling faceDirectionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceFaceDirectionThresholdAbnormalTest005);


/**
 * gazeThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&gazeThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('gazeThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGazeThresholdAbnormalTest001(Calling gazeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest001);

/**
 * gazeThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&gazeThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('gazeThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGazeThresholdAbnormalTest002(Calling gazeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest002);

/**
 * gazeThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&gazeThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGazeThresholdAbnormalTest003(Calling gazeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest003);

/**
 * gazeThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&gazeThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGazeThresholdAbnormalTest004(Calling gazeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest004);

/**
 * gazeThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&gazeThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceGazeThresholdAbnormalTest005(Calling gazeThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceGazeThresholdAbnormalTest005);


/**
 * expressionThresholdに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/detection/face?serviceId=xxx&accessToken=xxx&expressionThreshold=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('expressionThreshold',
            1000000000000000000000000000000000000000000000000000000000);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceExpressionThresholdAbnormalTest001(Calling expressionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest001);

/**
 * expressionThresholdに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&expressionThreshold=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('expressionThreshold', -1);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceExpressionThresholdAbnormalTest002(Calling expressionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest002);

/**
 * expressionThresholdに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&expressionThreshold='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceExpressionThresholdAbnormalTest003(Calling expressionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest003);

/**
 * expressionThresholdに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&expressionThreshold='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceExpressionThresholdAbnormalTest004(Calling expressionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest004);

/**
 * expressionThresholdに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /humandetect/zoom?serviceId=xxx&accessToken=xxx&expressionThreshold='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('humandetect');
        builder.setInterface('detection');
        builder.setAttribute('face');
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
        dConnect.get(uri, null,
            function(json) {
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
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('faceExpressionThresholdAbnormalTest005(Calling expressionThreshold parameter in special characters.)',
    HumanDetectProfileAbnormalTest.faceExpressionThresholdAbnormalTest005);
