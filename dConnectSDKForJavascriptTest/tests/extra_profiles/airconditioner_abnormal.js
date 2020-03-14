QUnit.module('AirConditionerProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * AirConditionerプロファイルの異常系テストを行うクラス。
 * @class
 */
let AirConditionerProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでAirConditionerにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /airconditioner?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airconditionerAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('airconditionerAbnormalTest001(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.airconditionerAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=PowerSaving<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: 'PowerSaving'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest001(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest001);

/**
 * 定義されていないDELETEメソッドで節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=PowerSaving<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: 'PowerSaving'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest002(Calling a delete method that does not support.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest002);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullで節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest003(operationpowersaving is null.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest003);

/**
 * undefinedで節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest004(operationpowersaving is undefined.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest004);

/**
 * 数字で節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest005(operationpowersaving is number.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest005);

/**
 * 英字で節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest006(operationpowersaving is alphabet.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest006);

/**
 * 日本語で節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest007(operationpowersaving is hiragana.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest007);

/**
 * 特殊記号で節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&powersaving=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest008(operationpowersaving is symbol.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest008);

/**
 * 1000文字で節電動作を指定して節電動作設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&
operationpowersaving=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.powerSavingAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'powersaving',
    serviceId: getCurrentServiceId(),
    powersaving: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('powerSavingAbnormalTest009(operationpowersaving is limit.)',
    AirConditionerProfileAbnormalTest.powerSavingAbnormalTest009);

/**
 * 定義されていないPOSTメソッドで運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /airconditioner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Automatic<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: 'Automatic'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest001(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest001);

/**
 * 定義されていないDELETEメソッドで運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner/modesetting?serviceId=xxxx&accessToken=xxx&modesetting=Automatic<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: 'Automatic'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest002(Calling a delete method that does not support.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest002);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullで運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&modesetting=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest003(operationmodesetting is null.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest003);

/**
 * undefinedで運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&modesetting=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest004(operationmodesetting is undefined.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest004);

/**
 * 数字で運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx?operationmodesetting=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest005(operationmodesetting is number.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest005);

/**
 * 英字で運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx?&modesetting=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest006(operationmodesetting is alphabet.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest006);

/**
 * 日本語で運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&modesetting=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest007(operationmodesetting is hiragana.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest007);

/**
 * 特殊記号で運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx&modesetting=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest008(operationmodesetting is symbol.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest008);

/**
 * 1000文字で運転モードを指定して運転モード設定にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/powersaving?serviceId=xxxx&accessToken=xxx?
operationmodesetting=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.modeSettingAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'modesetting',
    serviceId: getCurrentServiceId(),
    modesetting: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('ModeSettingAbnormalTest009(operationmodesetting is limit.)',
    AirConditionerProfileAbnormalTest.modeSettingAbnormalTest009);

/**
 * 定義されていないPUTメソッドで室内温度計測値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/roomtemperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.roomTemperatureAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'roomtemperature',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('roomTemperatureAbnormalTest001(Calling a put method that does not support.)',
    AirConditionerProfileAbnormalTest.roomTemperatureAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで室内温度計測値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /powermeter/instantaneouspowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.roomTemperatureAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    attribute: 'roomtemperature',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('roomTemperatureAbnormalTest(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.roomTemperatureAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで室内温度計測値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /powermeter/instantaneouspowervalue?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.roomTemperatureAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    attribute: 'roomtemperature',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('roomTemperatureAbnormalTest003(Calling a delete method that does not support.)',
    AirConditionerProfileAbnormalTest.roomTemperatureAbnormalTest003);

/**
 * 定義されていないPOSTメソッドで温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=25<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: '25'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('temperatureAbnormalTest001(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest001);

/**
 * 定義されていないDELETEメソッドで温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=25<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: '25'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('temperatureAbnormalTest002(Calling a delete method that does not support.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest002);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullで温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest003(temperature is null.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest003);

/**
 * undefinedで温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest004(temperature is undefined.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest004);

/**
 * 数字で温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest005(temperature is number.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest005);

/**
 * 英字で温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest006(temperature is alphabet.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest006);

/**
 * 日本語で温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest007(temperature is hiragana.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest007);

/**
 * 特殊記号で温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&temperature=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest008(temperature is symbol.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest008);

/**
 * 1000文字で温度設定を指定して温度設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/temperature?serviceId=xxxx&accessToken=xxx&
temperaturevalue=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.temperatureAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'temperature',
    serviceId: getCurrentServiceId(),
    temperature: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('temperatureAbnormalTest009(temperature is limit.)',
    AirConditionerProfileAbnormalTest.temperatureAbnormalTest009);

/**
 * 定義されていないPOSTメソッドで風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.51<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: '0.51'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('airflowAbnormalTest001(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest001);

/**
 * 定義されていないDELETEメソッドで風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=0.51<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: '0.51'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('airflowAbnormalTest002(Calling a delete method that does not support.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest002);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullで風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflowserviceId=xxxx&accessToken=xxx&airflow=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest003(airflow is null.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest003);

/**
 * undefinedで風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest004(airflow is undefined.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest004);

/**
 * 数字で風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest005(airflow is number.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest005);

/**
 * 英字で風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest006(airflow is alphabet.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest006);

/**
 * 日本語で風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest007(airflow is hiragana.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest007);

/**
 * 特殊記号で風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflow=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest008(airflow is symbol.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest008);

/**
 * 1000文字で風量設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&
airflow=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflow: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest009(airflow is limit.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest009);

/**
 * nullで風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflowserviceId=xxxx&accessToken=xxx&airflowauto=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest010(airflowauto is null.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest010);

/**
 * undefinedで風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest011(airflowauto is undefined.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest011);

/**
 * 数字で風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest012(airflowauto is number.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest012);

/**
 * 英字で風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest013(airflowauto is alphabet.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest013);

/**
 * 日本語で風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest014(airflowauto is hiragana.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest014);

/**
 * 特殊記号で風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest015(airflowauto is symbol.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest015);

/**
 * 1000文字で風量自動モード設定を指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&
airflowauto=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest016 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest016(airflowauto is limit.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest016);

/**
 * falseで風量自動モード設定を指定、風量設定を指定せずに風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=false<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest017 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: 'false'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest017(airflowauto is false, airflowvalue is not set.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest017);

/**
 * 風量自動モード設定、風量設定を指定せずに風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest018 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest018(airflowauto, airflowvalue is not set.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest018);

/**
 * falseで風量自動モード設定を指定、風量設定を指定範囲外指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=false&airflow=1.51<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest019 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: 'false',
    airflow: '1.51'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('airflowAbnormalTest019(airflowauto is false, airflowvalue is out of range.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest019);

/**
 * falseで風量自動モード設定を指定、風量設定を指定範囲外指定して風量設定値にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/airflow?serviceId=xxxx&accessToken=xxx&airflowauto=false&airflow=-1.51<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.airflowAbnormalTest020 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'airflow',
    serviceId: getCurrentServiceId(),
    airflowauto: 'false',
    airflow: '-1.51'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('airflowAbnormalTest020(airflowauto is false, airflowvalue is out of range.)',
    AirConditionerProfileAbnormalTest.airflowAbnormalTest020);

/**
 * 定義されていないPOSTメソッドでECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80,0x8F,0xB0,0xB3,0xBB'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
QUnit.test('enlPropertyAbnormalTestt001(Calling a post method that does not support.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80,0x8F,0xB0,0xB3,0xBB'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest002(Calling a delete method that does not support.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest002);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest003(epc is null.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest003);

/**
 * undefinedでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest004(epc is undefined.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest004);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest005(epc is number.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest005);

/**
 * 英字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest006(epc is alphabet.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest006);

/**
 * 日本語でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest007(epc is hiragana.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest007);

/**
 * 特殊記号でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest008(epc is symbol.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest008);

/**
 * 1000文字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&
epc=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest009(epc is limit.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest009);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=null&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest010 = function(assert) {
  let done = assert.async();
  let params = {
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: null
  };
  params[''] = '49';
  sdk.put(params).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest010(epc is null.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest010);

/**
 * undefinedでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=undefined&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest011 = function(assert) {
  let done = assert.async();
  let params = {
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: undefined
  };
  params[''] = '49';
  sdk.put(params).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest011(epc is undefined.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest011);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=1234&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '1234',
    value: '49'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest012(epc is number.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest012);

/**
 * 英字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=abc&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'abc',
    value: '49'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest013(epc is alphabet.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest013);

/**
 * 日本語でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=あいう&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'あいう',
    value: '49'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest014(epc is hiragana.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest014);

/**
 * 特殊記号でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
    value: '49'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest015(epc is symbol.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest015);

/**
 * 1000文字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&
epc=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest016 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
    value: '49'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest016(epc is limit.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest016);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullでvalueを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest017 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: null
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest017(value is null.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest017);

/**
 * undefinedでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest018 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: undefined
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest018(value is undefined.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest018);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest019 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: '1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest019(value is out of range.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest019);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=-1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest020 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: '-1234'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest020(value is out of range.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest020);

/**
 * 英字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest021 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: 'abc'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest021(value is alphabet.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest021);

/**
 * 日本語でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest022 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: 'あいう'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest022(value is hiragana.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest022);

/**
 * 特殊記号でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx&epc=0x80&value=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest023 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest023(value is symbol.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest023);

/**
 * 1000文字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxxepc=0x80&
value=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest024 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '0x80',
    value: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest024(value is limit.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest024);

/**
 * パラメータ指定なしでECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /airconditioner/enlproperty?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest025 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'airconditioner',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('enlPropertyAbnormalTest025(parameter is not set.)',
    AirConditionerProfileAbnormalTest.enlPropertyAbnormalTest025);
