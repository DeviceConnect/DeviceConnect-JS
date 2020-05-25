QUnit.module('Setting Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * Settingプロファイルの正常系テストを行うクラス。
 * @class
 */
let SettingProfileNormalTest = {};

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
  let testKind = new Array(1, 2, 3, 4, 5, 6);
  let testKindName = new Array('alarm', 'call', 'calling', 'mail', 'media player', 'other');
  let count = 0;
  let done = assert.async();
  let testFunc = (count) => {
    if (count == testKind.length) {
      done();
    } else {
      sdk.get({
        profile: dConnectSDK.constants.setting.PROFILE_NAME,
        interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
        attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
        params: {
          serviceId: getCurrentServiceId(),
          kind: testKind[count]
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result + ' kind=' + testKindName[count]);
        assert.ok(json.level >= 0 && json.level <= 1.0, 'level=' + json.level);
        testFunc(count + 1);
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        testFunc(count + 1);
      });
    }
  };
  testFunc(0);
};
QUnit.test('volumeNormalTest001(get)', SettingProfileNormalTest.volumeNormalTest001);

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
  let testKind = new Array(1, 2, 3, 4, 5, 6);
  let testKindName = new Array('alarm', 'call', 'calling', 'mail', 'media player', 'other');
  let count = 0;
  let volume = 1;
  let done = assert.async();
  let testFunc = (count) => {
    if (count == testKind.length) {
      done();
    } else {
      sdk.put({
        profile: dConnectSDK.constants.setting.PROFILE_NAME,
        interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
        attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
        params: {
          serviceId: getCurrentServiceId(),
          kind: testKind[count],
          level: volume
        }
      }).then(json => {
        assert.ok(true, 'put ok. result=' + json.result + ' kind=' + testKindName[count]);
        sdk.get({
          profile: dConnectSDK.constants.setting.PROFILE_NAME,
          interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
          attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
          params: {
            serviceId: getCurrentServiceId(),
            kind: testKind[count]
          }
        }).then(json => {
          assert.ok(true, 'get ok. result=' + json.result + ' kind=' + testKindName[count]);
          assert.ok(json.level == volume, 'level=' + json.level);
          testFunc(count + 1);
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
              'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
          testFunc(count + 1);
        });
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        testFunc(count + 1);
      });
    }
  };
  testFunc(0);
};
QUnit.test('volumeNormalTest002(put)', SettingProfileNormalTest.volumeNormalTest002);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    attribute: dConnectSDK.constants.setting.ATTR_DATE,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.date !== undefined, 'date=' + json.date);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('dateNormalTest001(get)', SettingProfileNormalTest.dateNormalTest001);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    attribute: dConnectSDK.constants.setting.ATTR_DATE,
    params: {
      serviceId: getCurrentServiceId(),
      date: createCurrentDateString()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.date !== undefined, 'date=' + json.date);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('dateNormalTest002(put)', SettingProfileNormalTest.dateNormalTest002);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.level != undefined, 'level=' + json.level);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('brightnessNormalTest001(get)', SettingProfileNormalTest.brightnessNormalTest001);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
    params: {
      serviceId: getCurrentServiceId(),
      level: 0.5
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    sdk.get({
      profile: dConnectSDK.constants.setting.PROFILE_NAME,
      interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
      attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.level != undefined, 'level=' + json.level);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('brightnessNormalTest002(put)', SettingProfileNormalTest.brightnessNormalTest002);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.time != undefined, 'time=' + json.time);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('sleepNormalTest001(get)', SettingProfileNormalTest.sleepNormalTest001);

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
  let sleep = 50000 + Math.floor(Math.random() * 10000);
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId(),
      time: sleep
    }
  }).then(json => {
    assert.ok(true, 'put ok. result=' + json.result + ' time=[' + sleep + ']');
    sdk.get({
      profile: dConnectSDK.constants.setting.PROFILE_NAME,
      interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
      attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      assert.ok(true, 'get ok. result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('sleepNormalTest002(put)', SettingProfileNormalTest.sleepNormalTest002);
