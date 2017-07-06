module('TemperatureProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * Temperatureプロファイルの異常系テストを行うクラス。
 * @class
 */
var TemperatureProfileAbnormalTest = {};


/**
 * 定義されていないPOSTメソッドで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        QUnit.start();
      },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('temperatureAbnormalTest001',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest001);

/**
 * 定義されていないDELETEメソッドで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('temperatureAbnormalTest002',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest002);


    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字


/**
 * nullで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=null&type=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', null);
  builder.addParameter('type', null);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest003',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest003);


/**
 * undefinedで温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=undefined&type=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', undefined);
  builder.addParameter('type', undefined);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest004',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest004);


/**
 * 数字で温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=1234&type=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', 1234);
  builder.addParameter('type', 1234);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest005',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest005);

/**
 * 数字で温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=1234&type=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', '1234');
  builder.addParameter('type', '1234');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest006',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest006);


/**
 * 英字で温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=abc&type=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', 'abc');
  builder.addParameter('type', 'abc');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest007',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest007);


/**
 * 日本語で温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=あいう&type=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', 'あいう');
  builder.addParameter('type', 'あいう');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest008',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest008);

/**
 * 特殊文字で温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=&type=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest009 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.addParameter('type', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest009',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest009);

/**
 * 1000文字で温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx&temperature=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl
 * &type=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest010 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('temperature', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.addParameter('type', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest010',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest010);


/**
 * temperatureが不足している場合の温度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /temperature?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
TemperatureProfileAbnormalTest.temperatureAbnormalTest011 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('temperature');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('type', '1');
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  },
  function(errorCode, errorMessage) {
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
QUnit.asyncTest('temperatureAbnormalTest011',
    TemperatureProfileAbnormalTest.temperatureAbnormalTest011);

