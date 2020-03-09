QUnit.module('TV Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * TVプロファイルの異常系テストを行うクラス。
 * @class
 */
var TVProfileAbnormalTest = {};

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '1');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '1');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '2');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning',
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning',
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning',
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', '-1');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', 10000000000000000000000);
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('tuning', 1.5);
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control',
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control',
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control',
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'up');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'up');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control', 'up');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control',
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control',
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('control',
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select', 'DTV');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select', 'DTV');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select', 'DTV');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select',
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select',
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg');
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
};
QUnit.test('TVchangeBroadcastwaveAbnormalTest005', TVProfileAbnormalTest.changeBroadcastwaveAbnormalTest005);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('select',
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('mute');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('mute');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128,129');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128,129');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc',
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc',
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc',
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc','128,-1,129');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc','128,0.5,129');
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value',
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
    'あいうえおあいうえおあいうえお');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value',
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg' + 'abcdefgabcdefg' +
    'abcdefgabcdefg');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value',
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?' + '#$%?<>?#$%&<>?' +
    '#$%?<>?#$%&<>?');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value','-1');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value','10000000000000000000000');
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('enlproperty');
  builder.setAccessToken(accessToken);
  builder.setServiceId(serviceId);
  builder.addParameter('epc', '128');
  builder.addParameter('value','0.5');
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
};
QUnit.test('EchonetLitePropertyAbnormalTest013', TVProfileNormalTest.echonetLitePropertyAbnormalTest013);
