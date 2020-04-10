QUnit.module('Setting Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Settingプロファイルの異常系テストを行うクラス。
 * @class
 */
let SettingProfileAbnormalTest = {};

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest001(get)(kind is -1)', SettingProfileAbnormalTest.volumeAbnormalTest001);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 'this is a test.'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest002(get)(kind is string)',
      SettingProfileAbnormalTest.volumeAbnormalTest002);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest003(get)(omitted kind.)',
      SettingProfileAbnormalTest.volumeAbnormalTest003);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: "!\"#$%&'()0=~|'{}@`*+;<,.>/_"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest004(get)(kind is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest004);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 10000000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest005(get)(kind is big number.)', SettingProfileAbnormalTest.volumeAbnormalTest005);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: -1,
      level: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest006(put)(kind is -1.)', SettingProfileAbnormalTest.volumeAbnormalTest006);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 'this is a test.',
      level: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest007(put)(kind is string.)', SettingProfileAbnormalTest.volumeAbnormalTest007);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: "!\"#$%&'()0=~|'{}@`*+;<,.>/_",
      level: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest008(put)(kind is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest008);

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
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 10000000,
      level: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest009(put)(kind is big number.)', SettingProfileAbnormalTest.volumeAbnormalTest009);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1,
      level: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest010(put)(level is -1.)', SettingProfileAbnormalTest.volumeAbnormalTest010);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1,
      level: 100
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest011(put)(level is 100.)', SettingProfileAbnormalTest.volumeAbnormalTest011);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1,
      level: 'this is a test.'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest012(put)(level is string.)', SettingProfileAbnormalTest.volumeAbnormalTest012);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1,
      level: "!\"#$%&'()0=~|'{}@`*+;<,.>/_"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest013(put)(level is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest013);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('volumeAbnormalTest014(put)(level is special characters.)', SettingProfileAbnormalTest.volumeAbnormalTest014);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1,
      level: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('volumeAbnormalTest015(Calling a post method that does not support.)', SettingProfileAbnormalTest.volumeAbnormalTest015);

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
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_SOUND,
    attribute: dConnectSDK.constants.setting.ATTR_VOLUME,
    params: {
      serviceId: getCurrentServiceId(),
      kind: 1,
      level: 1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('volumeAbnormalTest016(Calling a delete method that does not support.)', SettingProfileAbnormalTest.volumeAbnormalTest016);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    attribute: dConnectSDK.constants.setting.ATTR_DATE,
    params: {
      serviceId: getCurrentServiceId(),
      date: ''
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('dateAbnormalTest001(Calling a post method that does not support.)', SettingProfileAbnormalTest.dateAbnormalTest001);

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
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    attribute: dConnectSDK.constants.setting.ATTR_DATE,
    params: {
      serviceId: getCurrentServiceId(),
      date: ''
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('dateAbnormalTest002(Calling a delete method that does not support.)', SettingProfileAbnormalTest.dateAbnormalTest002);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
    params: {
      serviceId: getCurrentServiceId(),
      level: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightAbnormalTest001(level is -1)', SettingProfileAbnormalTest.lightAbnormalTest001);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
    params: {
      serviceId: getCurrentServiceId(),
      level: 'this is a test.'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightAbnormalTest002(level is string)', SettingProfileAbnormalTest.lightAbnormalTest002);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
    params: {
      serviceId: getCurrentServiceId(),
      level: "!\"#$%&'()0=~|'{}@`*+;<,.>/_"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightAbnormalTest003(level is special characters.)', SettingProfileAbnormalTest.lightAbnormalTest003);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_BRIGHTNESS,
    params: {
      serviceId: getCurrentServiceId(),
      level: 100000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightAbnormalTest004(level is big number.)', SettingProfileAbnormalTest.lightAbnormalTest004);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId(),
      time: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('sleepAbnormalTest001(time is -1)', SettingProfileAbnormalTest.sleepAbnormalTest001);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId(),
      time: 'this is a test'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('sleepAbnormalTest002(time is string)', SettingProfileAbnormalTest.sleepAbnormalTest002);

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
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId(),
      time: "!\"#$%&'()0=~|'{}@`*+;<,.>/_"
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('sleepAbnormalTest003(time is special characters.)', SettingProfileAbnormalTest.sleepAbnormalTest003);

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
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId(),
      time: 1000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('sleepAbnormalTest004(Calling a post method that does not support.)', SettingProfileAbnormalTest.sleepAbnormalTest004);

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
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.setting.PROFILE_NAME,
    interface: dConnectSDK.constants.setting.INTERFACE_DISPLAY,
    attribute: dConnectSDK.constants.setting.ATTR_SLEEP,
    params: {
      serviceId: getCurrentServiceId(),
      time: 1000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('sleepAbnormalTest005(Calling a delete method that does not support.)', SettingProfileAbnormalTest.sleepAbnormalTest005);
