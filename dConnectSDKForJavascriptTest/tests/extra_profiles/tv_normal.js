QUnit.module('TV Profile Normal Test', {
  setup: function() {
    init();
  }
});

/**
 * TVプロファイルの正常系テストを行うクラス。
 * @class
 */
var TVProfileNormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '1');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '2');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '3');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '4');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '5');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '6');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '7');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '8');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '9');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '10');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '11');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '12');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'next');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'previous');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'up');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'down');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select', 'DTV');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select', 'BS');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select', 'CS');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('mute');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('mute');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128,129');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value', '49');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode),
      'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.test('SetEchonetLitePropertyNormalTest001', TVProfileNormalTest.setEchonetLitePropertyNormalTest001);
