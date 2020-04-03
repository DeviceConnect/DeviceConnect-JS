QUnit.module('TV Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * TVプロファイルの異常系テストを行うクラス。
 * @class
 */
let TVProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで電源状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /tv<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.powerStatusAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('GetPowerStatusAbnormalTest001', TVProfileAbnormalTest.powerStatusAbnormalTest001);



/**
 * 定義されていないGETメソッドでチャンネル操作にアクセスするテストを行う。。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: '1'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest001', TVProfileAbnormalTest.changeChannelAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでチャンネル操作にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: '1'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
QUnit.test('TVChangeChannelAbnormalTest002', TVProfileAbnormalTest.changeChannelAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでチャンネル操作にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: '2'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
QUnit.test('TVChangeChannelAbnormalTest003', TVProfileAbnormalTest.changeChannelAbnormalTest003);


/**
 * スマートデバイスのtuning にひらがなを設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest004', TVProfileAbnormalTest.changeChannelAbnormalTest004);

/**
 * スマートデバイスのtuning に英字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest005', TVProfileAbnormalTest.changeChannelAbnormalTest005);

/**
 * スマートデバイスのtuning に特殊文字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnoramlTest006', TVProfileAbnormalTest.changeChannelAbnormalTest006);


/**
 * スマートデバイスのチャンネルを-1に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: '-1'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest007', TVProfileAbnormalTest.changeChannelAbnormalTest007);

/**
 * スマートデバイスのチャンネルを10000000000000000000000に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: 10000000000000000000000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest008', TVProfileAbnormalTest.changeChannelAbnormalTest008);

/**
 * スマートデバイスのチャンネルを1.5に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    tuning: 1.5
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest009', TVProfileAbnormalTest.changeChannelAbnormalTest009);

/**
 * スマートデバイスのチャンネルのcontrolにひらがなを設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    control: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest010', TVProfileAbnormalTest.changeChannelAbnormalTest010);

/**
 * スマートデバイスのチャンネルのcontrolに英字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    control: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest011', TVProfileAbnormalTest.changeChannelAbnormalTest011);

/**
 * スマートデバイスのチャンネルのcontrolに特殊記号を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeChannelAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    serviceId: getCurrentServiceId(),
    control: '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVChangeChannelAbnormalTest012', TVProfileAbnormalTest.changeChannelAbnormalTest012);


/**
 * 定義されていないGETメソッドでヴォリューム操作にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeVolumeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'volume',
    serviceId: getCurrentServiceId(),
    control: 'up'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVchangeVolumeAbnormalTest001', TVProfileAbnormalTest.changeVolumeAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでヴォリューム操作にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeVolumeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'volume',
    serviceId: getCurrentServiceId(),
    control: 'up'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVchangeVolumeAbnormalTest002', TVProfileAbnormalTest.changeVolumeAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでヴォリューム操作にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeVolumeAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'tv',
    attribute: 'volume',
    serviceId: getCurrentServiceId(),
    control: 'up'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVchangeVolumeAbnormalTest003', TVProfileAbnormalTest.changeVolumeAbnormalTest003);

/**
 * スマートデバイスのボリューム操作で conrolにひらがなを設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeVolumeAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'volume',
    serviceId: getCurrentServiceId(),
    control: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVchangeVolumeAbnormalTest004', TVProfileAbnormalTest.changeVolumeAbnormalTest004);

/**
 * スマートデバイスのボリューム操作で conrolに英字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeVolumeAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'volume',
    serviceId: getCurrentServiceId(),
    control: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVchangeVolumeAbnormalTest005', TVProfileAbnormalTest.changeVolumeAbnormalTest005);


/**
 * スマートデバイスのボリューム操作で conrolに特殊文字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeVolumeAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'volume',
    serviceId: getCurrentServiceId(),
    control: '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVchangeVolumeAbnormalTest006', TVProfileAbnormalTest.changeVolumeAbnormalTest006);



/**
 * 定義されていないGETメソッドでスマートデバイスの選択放送波地デジに変更するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'broadcastwave',
    serviceId: getCurrentServiceId(),
    select: 'DTV'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest001', TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでスマートデバイスの選択放送波地デジに変更するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'broadcastwave',
    serviceId: getCurrentServiceId(),
    select: 'DTV'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest002', TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest002);


/**
 * 定義されていないDELETEメソッドでスマートデバイスの選択放送波地デジに変更するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'tv',
    attribute: 'broadcastwave',
    serviceId: getCurrentServiceId(),
    select: 'DTV'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest003', TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest003);


/**
 * スマートデバイスの選択放送波にひらがなを設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    serviceId: getCurrentServiceId(),
    select: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest004', TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest004);


/**
 * スマートデバイスの選択放送波に英字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    serviceId: getCurrentServiceId(),
    select: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest005',
      TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest005);

/**
 * スマートデバイスの選択放送波に特殊文字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    serviceId: getCurrentServiceId(),
    select: '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest006', TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest006);




/**
 * 定義されていないGETメソッドでスマートデバイスのミュートをオンにするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/mute<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.muteOnAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'mute',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVmuteOnAbnormalTest001', TVProfileAbnormalTest.muteOnAbnormalTest001);


/**
 * 定義されていないPOSTメソッドでスマートデバイスのミュートをオフにするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /tv/mute<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.muteOffAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'mute',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('TVmuteOffAbnormalTest001', TVProfileAbnormalTest.muteOffAbnormalTest001);



/**
 * 定義されていないPOSTメソッドでスマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する
 * テストを行う。
 *
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.echonetLitePropertyAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128,129'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest001', TVProfileAbnormalTest.echonetLitePropertyAbnormalTest001);


/**
 定義されていないPOSTメソッドでスマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を設定する
 * テストを行う。 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileAbnormalTest.echonetLitePropertyAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128,129'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest002', TVProfileAbnormalTest.echonetLitePropertyAbnormalTest002);


/**
 * スマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する。（必須プロパティのみ）
 * epcにひらがなを設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest003', TVProfileNormalTest.echonetLitePropertyAbnormalTest003);


/**
 * スマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する。（必須プロパティのみ）
 * epcに英字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest004', TVProfileNormalTest.echonetLitePropertyAbnormalTest004);


/**
 * スマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する。（必須プロパティのみ）
 * epcに特殊記号を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest005', TVProfileNormalTest.echonetLitePropertyAbnormalTest005);


/**
 * スマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する。（必須プロパティのみ）
 * epcに-1を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128,-1,129'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest006', TVProfileNormalTest.echonetLitePropertyAbnormalTest006);


/**
 * スマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する。（必須プロパティのみ）
 * epcに実数を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128,0.5,129'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest007', TVProfileNormalTest.echonetLitePropertyAbnormalTest007);


/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * value にひらがなを設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128',
    value: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest008', TVProfileNormalTest.echonetLitePropertyAbnormalTest008);


/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * value に英字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128',
    value: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest009', TVProfileNormalTest.echonetLitePropertyAbnormalTest009);


/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * value に特殊文字を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128',
    value: '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest010', TVProfileNormalTest.echonetLitePropertyAbnormalTest010);

/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * value に-1を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128',
    value: '-1'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest011', TVProfileNormalTest.echonetLitePropertyAbnormalTest011);

/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * value に存在しない値を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128',
    value: '10000000000000000000000'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest012', TVProfileNormalTest.echonetLitePropertyAbnormalTest012);


/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * value に実数を設定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。
 * </p>
 */
TVProfileNormalTest.echonetLitePropertyAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    serviceId: getCurrentServiceId(),
    epc: '128',
    value: '0.5'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('EchonetLitePropertyAbnormalTest013', TVProfileNormalTest.echonetLitePropertyAbnormalTest013);
