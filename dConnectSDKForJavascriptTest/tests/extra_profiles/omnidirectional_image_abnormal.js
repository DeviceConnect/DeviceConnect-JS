QUnit.module('OmnidirectionalImageProfileAbnormalTest', {
  before: function() {
    init();
    this.option = null;
  },
  after: function() {
    if (this.option !== null) {
      stopRoiView(this.option);
    }
  }
});

function startRoiView(option) {
  return new Promise((resolve, reject) => {
    sdk.put({
      profile: 'omnidirectionalimage',
      attribute: 'roi',
      serviceId: option.serviceId,
      source: OMNI_IMG_URI
    }).then(json => {
      let uri = json.uri;
      option.uri = uri;
      resolve(uri);
    }).catch(e => {
      let assert = option.assert;
      assert.ok(false, 'Failed to start ROI View; errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      reject(e);
    });
  });
}

function stopRoiView(option) {
  sdk.delete({
    profile: 'omnidirectionalimage',
    attribute: 'roi',
    serviceId: option.serviceId,
    uri: option.uri
  }).then(json => {
  }).catch(e => {
  });
}

/**
 * Omnidirectional Imageプロファイルの異常系テストを行うクラス。
 * @class
 */
let OmnidirectionalImageProfileAbnormalTest = {};

/**
 * ROI画像表示開始APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'omnidirectionalimage',
    attribute: 'roi',
    serviceId: getCurrentServiceId(),
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putStartRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest001);

/**
 * ROI画像表示開始APIのsourceパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx&source=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'omnidirectionalimage',
    attribute: 'roi',
    serviceId: getCurrentServiceId(),
    source: 'http://localhost:4035/xxxxx'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putStartRoiViewAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putStartRoiViewAbnormalTest002);

/**
 * ROI画像表示開始APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'omnidirectionalimage',
    attribute: 'roi',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('getStartRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest001);

/**
 * ROI画像表示開始APIのsourceパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx&source=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'omnidirectionalimage',
    attribute: 'roi',
    serviceId: getCurrentServiceId(),
    source: 'http://localhost:4035/xxxxx'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('getStartRoiViewAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.getStartRoiViewAbnormalTest002);

/**
 * ROI画像表示終了APIのsourceパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /omnidirectional/roi?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.deleteStopRoiViewAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'omnidirectionalimage',
    attribute: 'roi',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteStopRoiViewAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.deleteStopRoiViewAbnormalTest001);

/**
 * ROI画像表示設定APIのuriパラメータを指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'omnidirectionalimage',
    interface: 'roi',
    attribute: 'settings',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamUriAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest001);

/**
 * ROI画像表示設定APIのuriパラメータに存在しないURIを指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'omnidirectionalimage',
    interface: 'roi',
    attribute: 'settings',
    serviceId: getCurrentServiceId(),
    uri: 'http://localhost:9000/xxxxx'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamUriAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamUriAbnormalTest002);

/**
 * ROI画像表示設定APIのxパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&x=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamXAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      x: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamXAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamXAbnormalTest001);

/**
 * ROI画像表示設定APIのyパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&y=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYAbnormalTest001 = function(assert) {
  this.option = option;
  let accessToken = getCurrentAccessToken();
  let serviceId = getCurrentServiceId();
  option.serviceId = serviceId;
  option.accessToken = accessToken;
  startRoiView(option);
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      y: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamYAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYAbnormalTest001);

/**
 * ROI画像表示設定APIのzパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&z=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamZAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      z: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamZAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamZAbnormalTest001);

/**
 * ROI画像表示設定APIのrollパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&roll=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      roll: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamRollAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest001);

/**
 * ROI画像表示設定APIのrollパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&roll=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      roll: '-0.1'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamRollAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest002);

/**
 * ROI画像表示設定APIのrollパラメータに360.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&roll=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest003 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      roll: '361.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamRollAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamRollAbnormalTest003);

/**
 * ROI画像表示設定APIのyawパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&yaw=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      yaw: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamYawAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest001);

/**
 * ROI画像表示設定APIのyawパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&yaw=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      yaw: '-1.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamYawAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest002);

/**
 * ROI画像表示設定APIのyawパラメータに360.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&yaw=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest003 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      yaw: '361.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamYawAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamYawAbnormalTest003);

/**
 * ROI画像表示設定APIのpitchパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&pitch=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      pitch: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamPitchAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest001);

/**
 * ROI画像表示設定APIのpitchパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&pitch=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      pitch: '-1.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamPitchAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest002);

/**
 * ROI画像表示設定APIのpitchパラメータに360.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&pitch=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest003 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      pitch: '361.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamPitchAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamPitchAbnormalTest003);

/**
 * ROI画像表示設定APIのfovパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&fov=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      fov: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamFovAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest001);

/**
 * ROI画像表示設定APIのfovパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&fov=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      fov: '-1.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamFovAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest002);

/**
 * ROI画像表示設定APIのfovパラメータに180.0より大きい値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&fov=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest003 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      fov: '181.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamFovAbnormalTest003',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamFovAbnormalTest003);

/**
 * ROI画像表示設定APIのsphereSizeパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&sphereSize=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      sphereSize: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamSphereSizeAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest001);

/**
 * ROI画像表示設定APIのsphereSizeパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&sphereSize=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      sphereSize: '-1.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamSphereSizeAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamSphereSizeAbnormalTest002);

/**
 * ROI画像表示設定APIのwidthパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&width=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      width: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamWidthAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest001);

/**
 * ROI画像表示設定APIのwidthパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&width=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      width: '-1.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamWidthAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamWidthAbnormalTest002);

/**
 * ROI画像表示設定APIのheightパラメータに10進数文字列でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&height=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      height: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamHeightAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest001);

/**
 * ROI画像表示設定APIのheightパラメータに負の値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&height=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest002 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      height: '-1.0'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamHeightAbnormalTest002',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamHeightAbnormalTest002);

/**
 * ROI画像表示設定APIのstereoパラメータに真理値でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&stereo=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamStereoAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      stereo: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamStereoAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamStereoAbnormalTest001);

/**
 * ROI画像表示設定APIのvrパラメータに真理値でない値を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /omnidirectional/roi/settings?serviceId=xxx&accessToken=xxx&uri=xxx&vr=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamVrAbnormalTest001 = function(assert) {
  let option = {
    assert: assert,
    serviceId: getCurrentServiceId()
  };
  let done = assert.async();
  startRoiView(option).then(uri => {
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      serviceId: getCurrentServiceId(),
      uri: uri,
      vr: 'xxxx'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putRoiViewSettingsParamVrAbnormalTest001',
  OmnidirectionalImageProfileAbnormalTest.putRoiViewSettingsParamVrAbnormalTest001);
