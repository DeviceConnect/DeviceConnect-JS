module('Setting Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * Settingプロファイルの正常系テストを行うクラス。
 * @class
 */
var SettingProfileNormalTest = {};

/**
 * ボリュームを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/volume?serviceId=xxxx&kind=x<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・levelにボリューム(0.0〜1.0)が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.volumeNormalTest001 = function(assert) {
  var testKind = new Array(1, 2, 3, 4, 5, 6);
  var testKindName = new Array('alarm', 'call', 'calling', 'mail', 'media player', 'other');
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var testFunc = function(count) {
          if (count == testKind.length) {
            QUnit.start();
          } else {
            var builder = new dConnect.URIBuilder();
            builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
            builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
            builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
            builder.setServiceId(serviceId);
            builder.setAccessToken(accessToken);
            builder.addParameter('kind', testKind[count]);
            var uri = builder.build();
            dConnect.get(uri, null, function(json) {
                  assert.ok(true, 'result=' + json.result + ' kind=' + testKindName[count]);
                  assert.ok(json.level >= 0 && json.level <= 1.0, 'level=' + json.level);
                  testFunc(count + 1);
                }, function(errorCode, errorMessage) {
                  assert.ok(checkErrorCode(errorCode),
                      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                  testFunc(count + 1);
                });
          }
        };
        testFunc(0);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeNormalTest001(get)', SettingProfileNormalTest.volumeNormalTest001);

/**
 * ボリュームを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/volume?serviceId=xxxx&kind=x&level=1.0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.volumeNormalTest002 = function(assert) {
  var testKind = new Array(1, 2, 3, 4, 5, 6);
  var testKindName = new Array('alarm', 'call', 'calling', 'mail', 'media player', 'other');
  var volume = 1;
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var testFunc = function(count) {
          if (count == testKind.length) {
            QUnit.start();
          } else {
            var builder = new dConnect.URIBuilder();
            builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
            builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
            builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
            builder.setServiceId(serviceId);
            builder.setAccessToken(accessToken);
            builder.addParameter('kind', testKind[count]);
            builder.addParameter('level', volume);
            var uri = builder.build();
            dConnect.put(uri, null, null, function(json) {
                  assert.ok(true, 'put ok. result=' + json.result + ' kind=' + testKindName[count]);

                  var builder = new dConnect.URIBuilder();
                  builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
                  builder.setInterface(dConnect.constants.setting.INTERFACE_SOUND);
                  builder.setAttribute(dConnect.constants.setting.ATTR_VOLUME);
                  builder.setServiceId(serviceId);
                  builder.setAccessToken(accessToken);
                  builder.addParameter('kind', testKind[count]);
                  var uri = builder.build();
                  dConnect.get(uri, null, function(json) {
                        assert.ok(true, 'get ok. result=' + json.result + ' kind=' + testKindName[count]);
                        assert.ok(json.level == volume, 'level=' + json.level);
                        testFunc(count + 1);
                      }, function(errorCode, errorMessage) {
                        assert.ok(checkErrorCode(errorCode),
                            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                        testFunc(count + 1);
                      });
                }, function(errorCode, errorMessage) {
                  assert.ok(checkErrorCode(errorCode),
                      'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                  testFunc(count + 1);
                });
          }
        };
        testFunc(0);
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('volumeNormalTest002(put)', SettingProfileNormalTest.volumeNormalTest002);

/**
 * 日付を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/date?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・日付が取得できること。<br/>
 * </p>
 */
SettingProfileNormalTest.dateNormalTest001 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.setting.ATTR_DATE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(json.date !== undefined, 'date=' + json.date);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('dateNormalTest001(get)', SettingProfileNormalTest.dateNormalTest001);

/**
 * 日付を設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/date?serviceId=xxxx&date='yyyy-MM-ddThh:mm:ssZ'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.dateNormalTest002 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setAttribute(dConnect.constants.setting.ATTR_DATE);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('date', createCurrentDateString());
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('dateNormalTest002(put)', SettingProfileNormalTest.dateNormalTest002);

/**
 * バックライトの輝度を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/display/brightness?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.brightnessNormalTest001 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(json.level != undefined, 'level=' + json.level);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('brightnessNormalTest001(get)', SettingProfileNormalTest.brightnessNormalTest001);

/**
 * バックライトの輝度を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/display/brightness?serviceId=xxx&accessToken=xxx&level=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.brightnessNormalTest002 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('level', 0.5);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'result=' + json.result);

              var builder = new dConnect.URIBuilder();
              builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
              builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
              builder.setAttribute(dConnect.constants.setting.ATTR_BRIGHTNESS);
              builder.setServiceId(serviceId);
              builder.setAccessToken(accessToken);
              var uri = builder.build();
              dConnect.get(uri, null, function(json) {
                assert.ok(true, 'result=' + json.result);
                assert.ok(json.level != undefined, 'level=' + json.level);
                QUnit.start();
               }, function(errorCode, errorMessage) {
                assert.ok(checkErrorCode(errorCode),
                        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
              });
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('brightnessNormalTest002(put)', SettingProfileNormalTest.brightnessNormalTest002);

/**
 * スリープ状態に入るまでの設定時間を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /setting/display/sleep?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.sleepNormalTest001 = function(assert) {
  var count = 0;
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
        dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(json.time != undefined, 'time=' + json.time);
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
            });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
   });
};
QUnit.asyncTest('sleepNormalTest001(get)', SettingProfileNormalTest.sleepNormalTest001);

/**
 * スリープ状態に入るまでの設定時間を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /setting/display/sleep?serviceId=xxx&accessToken=xxx&time=50000~60000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
SettingProfileNormalTest.sleepNormalTest002 = function(assert) {
  var sleep = 50000 + Math.floor(Math.random() * 10000);
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
        builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
        builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter('time', sleep);
        var uri = builder.build();
        dConnect.put(uri, null, null, function(json) {
              assert.ok(true, 'put ok. result=' + json.result + ' time=[' + sleep + ']');
              var builder = new dConnect.URIBuilder();
              builder.setProfile(dConnect.constants.setting.PROFILE_NAME);
              builder.setInterface(dConnect.constants.setting.INTERFACE_DISPLAY);
              builder.setAttribute(dConnect.constants.setting.ATTR_SLEEP);
              builder.setServiceId(serviceId);
              builder.setAccessToken(accessToken);
              var uri = builder.build();
              dConnect.get(uri, null, function(json) {
                assert.ok(true, 'get ok. result=' + json.result);
                QUnit.start();
              }, function(errorCode, errorMessage) {
                assert.ok(checkErrorCode(errorCode),
                        'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
                  });
        }, function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
          QUnit.start();
        });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
   });
};
QUnit.asyncTest('sleepNormalTest002(put)', SettingProfileNormalTest.sleepNormalTest002);
