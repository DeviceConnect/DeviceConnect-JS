module('Setting Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * Settingプロファイルの異常系テストを行うクラス。
 * @class
 */
var SettingProfileAbnormalTest = {};

/**
 * 定義されていないkindのボリュームを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', -1);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
              assert.ok(false, 'json: ' + JSON.stringify(json));
              QUnit.start();
            }, function(errorCode, errorMessage) {
              if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
              QUnit.start();
            });
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('volumeAbnormalTest001(get)(kind is -1)', SettingProfileAbnormalTest.volumeAbnormalTest001);

/**
 * kindを文字列(this is a test.)でボリュームを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind='this is a test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 'this is a test.');
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest002(get)(kind is string)', SettingProfileAbnormalTest.volumeAbnormalTest002);

/**
 * kindを指定しないでボリュームを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/displayvolume?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest003(get)(omitted kind.)', SettingProfileAbnormalTest.volumeAbnormalTest003);

/**
 * kindに特殊文字を指定してボリュームを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind='!\"#$%&'()0=~|'{}@`*+;<,.>/_'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', "!\"#$%&'()0=~|'{}@`*+;<,.>/_");
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest004(get)(kind is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest004);

/**
 * kindに大きな数値を指定してボリュームを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=10000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 10000000);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest005(get)(kind is big number.)', SettingProfileAbnormalTest.volumeAbnormalTest005);

/**
 * kindに-1を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=-1&level=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', -1);
        builder.addParameter('level', 1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest006(put)(kind is -1.)', SettingProfileAbnormalTest.volumeAbnormalTest006);

/**
 * kindに文字列(this is a test.)を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind='this is a test.'&level=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 'this is a test.');
        builder.addParameter('level', 1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest007(put)(kind is string.)', SettingProfileAbnormalTest.volumeAbnormalTest007);

/**
 * kindに特殊文字を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind='!\"#$%&'()0=~|'{}@`*+;<,.>/_'&level=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', "!\"#$%&'()0=~|'{}@`*+;<,.>/_");
        builder.addParameter('level', 1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest008(put)(kind is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest008);

/**
 * kindに大きな数値を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=10000000&level=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest009 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 10000000);
        builder.addParameter('level', 1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest009(put)(kind is big number.)', SettingProfileAbnormalTest.volumeAbnormalTest009);

/**
 * levelに-1を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1&level=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest010 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        builder.addParameter('level', -1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest010(put)(level is -1.)', SettingProfileAbnormalTest.volumeAbnormalTest010);

/**
 * levelに100を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1&level=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest011 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        builder.addParameter('level', 100);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest011(put)(level is 100.)', SettingProfileAbnormalTest.volumeAbnormalTest011);

/**
 * levelに文字列を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1&level='this is test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest012 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        builder.addParameter('level', 'this is a test.');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest012(put)(level is string.)', SettingProfileAbnormalTest.volumeAbnormalTest012);

/**
 * levelに特殊文字を指定してボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1&level='this is test.'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest013 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        builder.addParameter('level', "!\"#$%&'()0=~|'{}@`*+;<,.>/_");
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest013(put)(level is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest013);

/**
 * levelを指定しないでボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest014 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support [errorCode=' + errorCode + ', errorMessage=' + errorMessage +']');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest014(put)(level is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest014);

/**
 * 定義されていないPOSTメソッドでvolumeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1&level=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest015 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        builder.addParameter('level', 1);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest015(Calling a post method that does not support.)', SettingProfileAbnormalTest.volumeAbnormalTest015);

/**
 * 定義されていないDELETEメソッドでvolumeにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /setting/displayvolume?serviceId=xxxx&accessToken=xxxx&kind=1&level=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.volumeAbnormalTest016 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
        builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('kind', 1);
        builder.addParameter('level', 1);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeAbnormalTest016(Calling a delete method that does not support.)', SettingProfileAbnormalTest.volumeAbnormalTest016);

/**
 * 定義されていないPOSTメソッドでdateにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /setting/displaydate?serviceId=xxxx&accessToken=xxxx&date=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.dateAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.setting.ATTR_DATE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('date', '');
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('dateAbnormalTest001(Calling a post method that does not support.)', SettingProfileAbnormalTest.dateAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでdateにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /setting/displaydate?serviceId=xxxx&accessToken=xxxx&date=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.dateAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.setting.ATTR_DATE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('date', '');
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              } else if (checkErrorCode(errorCode)) {
                assert.ok(true, 'not support');
              } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
              }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('dateAbnormalTest002(Calling a delete method that does not support.)', SettingProfileAbnormalTest.dateAbnormalTest002);

/**
 * levelに-1を指定して、ライト点灯のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaylight?serviceId=xxxx&accessToken=xxxx&level=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.lightAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('level', -1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightAbnormalTest001(level is -1)', SettingProfileAbnormalTest.lightAbnormalTest001);

/**
 * levelに文字を指定して、ライト点灯のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaylight?serviceId=xxxx&accessToken=xxxx&level='this is a test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.lightAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('level', 'this is a test.');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightAbnormalTest002(level is string)', SettingProfileAbnormalTest.lightAbnormalTest002);

/**
 * levelに特殊文字を指定して、ライト点灯のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaylight?serviceId=xxxx&accessToken=xxxx&level="!\"#$%&'()0=~|'{}@`*+;<,.>/_"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.lightAbnormalTest003 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('level', "!\"#$%&'()0=~|'{}@`*+;<,.>/_");
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightAbnormalTest003(level is special characters.)', SettingProfileAbnormalTest.lightAbnormalTest003);

/**
 * levelに最大値を超える数値を指定して、ライト点灯のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaylight?serviceId=xxxx&accessToken=xxxx&level=100000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.lightAbnormalTest004 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('level', 100000);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('lightAbnormalTest004(level is big number.)', SettingProfileAbnormalTest.lightAbnormalTest004);

/**
 * timeに-1を指定して、スリープ時間設定のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaysleep?serviceId=xxxx&accessToken=xxxx&time=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.sleepAbnormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('time', -1);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('sleepAbnormalTest001(time is -1)', SettingProfileAbnormalTest.sleepAbnormalTest001);

/**
 * sleepに文字を指定して、スリープ時間設定のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaysleep?serviceId=xxxx&accessToken=xxxx&time='this is a test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.sleepAbnormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('time', 'this is a test');
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert(false, 'result=' + json.result);
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('sleepAbnormalTest002(time is string)', SettingProfileAbnormalTest.sleepAbnormalTest002);

/**
 * sleepに特殊文字を指定して、スリープ時間設定のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/displaysleep?serviceId=xxxx&accessToken=xxxx&time="!\"#$%&'()0=~|'{}@`*+;<,.>/_"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.sleepAbnormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('time', "!\"#$%&'()0=~|'{}@`*+;<,.>/_");
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
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
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('sleepAbnormalTest003(time is special characters.)', SettingProfileAbnormalTest.sleepAbnormalTest003);

/**
 * 定義されていないPOSTメソッドで、sleepにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /setting/displaysleep?serviceId=xxxx&accessToken=xxxx&time=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.sleepAbnormalTest004 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('time',1000);
        var uri = builder.build();
        dConnect.post(uri, null, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('sleepAbnormalTest004(Calling a post method that does not support.)', SettingProfileAbnormalTest.sleepAbnormalTest004);

/**
 * 定義されていないDELETEメソッドで、sleepにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /setting/displaysleep?serviceId=xxxx&accessToken=xxxx&time=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
SettingProfileAbnormalTest.sleepAbnormalTest005 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('time',1000);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          QUnit.start();
        }, function(errorCode, errorMessage) {
          if (errorCode == 3) {
            assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          } else if (checkErrorCode(errorCode)) {
            assert.ok(true, 'not support');
          } else {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          }
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('sleepAbnormalTest005(Calling a delete method that does not support.)', SettingProfileAbnormalTest.sleepAbnormalTest005);
