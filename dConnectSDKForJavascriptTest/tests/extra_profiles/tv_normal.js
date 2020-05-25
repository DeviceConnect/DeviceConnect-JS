QUnit.module('TV Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * TVプロファイルの正常系テストを行うクラス。
 * @class
 */
let TVProfileNormalTest = {};

/**
 * スマートデバイスの電源状態を取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.powerStatusNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '128',
      value: '0.5'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('GetPowerStatusNormalTest001', TVProfileNormalTest.powerStatusNormalTest001);


/**
 * スマートデバイスの電源をオンにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.powerOnNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVPowerOnNormalTest001', TVProfileNormalTest.powerOnNormalTest001);

/**
 * スマートデバイスの電源をオフにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /tv<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.powerOffNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'tv',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVPowerOffNormalTest001', TVProfileNormalTest.powerOffNormalTest001);


/**
 * スマートデバイスのチャンネルを1に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '1'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVChangeChannelTest001', TVProfileNormalTest.changeChannelNormalTest001);

/**
 * スマートデバイスのチャンネルを2に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '2'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest002', TVProfileNormalTest.changeChannelNormalTest002);

/**
 * スマートデバイスのチャンネルを3に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '3'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest003', TVProfileNormalTest.changeChannelNormalTest003);


/**
 * スマートデバイスのチャンネルを4に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '4'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest004', TVProfileNormalTest.changeChannelNormalTest004);

/**
 * スマートデバイスのチャンネルを5に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '5'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest005', TVProfileNormalTest.changeChannelNormalTest005);

/**
 * スマートデバイスのチャンネルを6に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '6'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest006', TVProfileNormalTest.changeChannelNormalTest006);


/**
 * スマートデバイスのチャンネルを7に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '7'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest007', TVProfileNormalTest.changeChannelNormalTest007);

/**
 * スマートデバイスのチャンネルを8に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '8'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVChangeChannelTest008', TVProfileNormalTest.changeChannelNormalTest008);

/**
 * スマートデバイスのチャンネルを9に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '9'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest009', TVProfileNormalTest.changeChannelNormalTest009);

/**
 * スマートデバイスのチャンネルを10に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '10'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest010', TVProfileNormalTest.changeChannelNormalTest010);

/**
 * スマートデバイスのチャンネルを11に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '11'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest011', TVProfileNormalTest.changeChannelNormalTest011);

/**
 * スマートデバイスのチャンネルを12に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      tuning: '12'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVChangeChannelTest012', TVProfileNormalTest.changeChannelNormalTest012);

/**
 * スマートデバイスのチャンネルを次局に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      control: 'next'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVChangeChannelTest013', TVProfileNormalTest.changeChannelNormalTest013);

/**
 * スマートデバイスのチャンネルを前局に変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/channel<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeChannelNormalTest014 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: getCurrentServiceId(),
      control: 'previous'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVChangeChannelTest014', TVProfileNormalTest.changeChannelNormalTest014);

/**
 * スマートデバイスのボリュームを上げる。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeVolumeNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'volume',
    params: {
      serviceId: getCurrentServiceId(),
      control: 'up'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVchangeVolumeNormalTest001', TVProfileNormalTest.changeVolumeNormalTest001);


/**
 * スマートデバイスのボリュームを下げる。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/volume<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeVolumeNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'volume',
    params: {
      serviceId: getCurrentServiceId(),
      control: 'down'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVchangeVolumeNormalTest002', TVProfileNormalTest.changeVolumeNormalTest002);



/**
 * スマートデバイスの選択放送波地デジに変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeBroadcastwaveNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    params: {
      serviceId: getCurrentServiceId(),
      select: 'DTV'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveNormalTest001', TVProfileNormalTest.changeBroadcastwaveNormalTest001);


/**
 * スマートデバイスの選択放送波BSに変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeBroadcastwaveNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    params: {
      serviceId: getCurrentServiceId(),
      select: 'BS'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVchangeBroadcastwaveNormalTest002', TVProfileNormalTest.changeBroadcastwaveNormalTest002);


/**
 * スマートデバイスの選択放送波CSに変更する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/broadcastwave<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.changeBroadcastwaveNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    params: {
      serviceId: getCurrentServiceId(),
      select: 'CS'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVchangeBroadcastwaveNormalTest003', TVProfileNormalTest.changeBroadcastwaveNormalTest003);


/**
 * スマートデバイスのミュートをオンにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/mute<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.muteOnNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'mute',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('TVmuteOnNormalTest001', TVProfileNormalTest.muteOnNormalTest001);


/**
 * スマートデバイスのミュートをオフにする。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /tv/mute<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.muteOffNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'tv',
    attribute: 'mute',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('TVmuteOffNormalTest001', TVProfileNormalTest.muteOffNormalTest001);



/**
 * スマートデバイスがサポートしているECHONET Lite 機器オブジェクトプロパティの設定内容を取得する。（必須プロパティのみ）
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.getEchonetLitePropertyNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'tv',
    attribute: 'enlproperty',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '128,129'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('GetEchonetLitePropertyNormalTest001', TVProfileNormalTest.getEchonetLitePropertyNormalTest001);


/**
 * 該当デバイスがサポートしているECHONET Lite 機器オブジェクトプロパティに設定を行う。（必須プロパティのみ）
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /tv/enlproperty<br>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。
 * </p>
 */
TVProfileNormalTest.setEchonetLitePropertyNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'tv',
    attribute: 'enlproperty',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '128',
      value: '49'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
      'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('SetEchonetLitePropertyNormalTest001', TVProfileNormalTest.setEchonetLitePropertyNormalTest001);
