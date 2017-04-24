module('VideoChat Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

function findAddress(success_cb, error_cb) {
  setTimeout(function() {
    var accessToken = getCurrentAccessToken();
    var serviceId = getCurrentServiceId();
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("address");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      success_cb(accessToken, serviceId, json.addresses);
    }, function(errorCode, errorMessage) {
      error_cb(errorCode, errorMessage);
    });
  }, 1000);
}

/**
 * VideoChatプロファイルの異常系テストを行うクラス。
 * @class
 */
var VideoChatProfileAbnormalTest = {};

/**
 * configに数値(1)を入れて、プロフィールを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", -1);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest001(config is number(-1))', VideoChatProfileAbnormalTest.profileAbnormalTest001);


/**
 * nameを指定せずに、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest002(name is not set.)', VideoChatProfileAbnormalTest.profileAbnormalTest002);

/**
 * nameに数値を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("name", -1);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest003(name is number(-1).)', VideoChatProfileAbnormalTest.profileAbnormalTest003);

/**
 * nameに特殊文字(!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_)を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("name", "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_");
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest004(name is special characters.)', VideoChatProfileAbnormalTest.profileAbnormalTest004);

/**
 * nameに長い文字(1000byte)を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=abcdefghijk・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("name", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij");
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest005(name is long string.)', VideoChatProfileAbnormalTest.profileAbnormalTest005);

/**
 * nameに空文字を入れて、プロフィールを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("name", "");
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest006(name is empty string)', VideoChatProfileAbnormalTest.profileAbnormalTest006);

/**
 * 定義されていないPOSTメソッドでprofileにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("name", "test");
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest007(Calling a post method that does not support.)', VideoChatProfileAbnormalTest.profileAbnormalTest007);


/**
 * 定義されていないDELETEメソッドでprofileにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.profileAbnormalTest008 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("profile");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("name", "test");
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileAbnormalTest008(Calling a delete method that does not support.)', VideoChatProfileAbnormalTest.profileAbnormalTest008);

/**
 * addressIdに-1を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "-1");
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest001(addressId is number)', VideoChatProfileAbnormalTest.addressAbnormalTest001);

/**
 * addressIdに空文字を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "");
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest002(addressId is empty string)', VideoChatProfileAbnormalTest.addressAbnormalTest002);

/**
 * addressIdに特殊文字(!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_)を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_");
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest003(addressId is special characters.)', VideoChatProfileAbnormalTest.addressAbnormalTest003);

/**
 * addressIdに長い文字列(1000byte0を入れて、アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに空の配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij");
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(true, 'json: ' + JSON.stringify(json));
    assert.equal(json.addresses.length, 0, "json.addresses.length=" + json.addresses.length);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest004(addressId is long string.)', VideoChatProfileAbnormalTest.addressAbnormalTest004);

/**
 * 定義されていないPUTメソッドでaddressにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest005(Calling a put method that does not support.)', VideoChatProfileAbnormalTest.addressAbnormalTest005);

/**
 * 定義されていないPOSTメソッドでaddressにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest006 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest006(Calling a post method that does not support.)', VideoChatProfileAbnormalTest.addressAbnormalTest006);

/**
 * 定義されていないDELETEメソッドでaddressにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.addressAbnormalTest007 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("address");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressAbnormalTest007(Calling a delete method that does not support.)', VideoChatProfileAbnormalTest.addressAbnormalTest007);

/**
 * addressIdに-1を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("call");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "-1");
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest001(addressId is number)', VideoChatProfileAbnormalTest.callAbnormalTest001);

/**
 * addressIdを指定せずに、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("call");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest002(addressId is not set.)', VideoChatProfileAbnormalTest.callAbnormalTest002);

/**
 * addressIdに空文字を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("call");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "");
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest003(addressId is empty string.)', VideoChatProfileAbnormalTest.callAbnormalTest003);

/**
 * addressIdに特殊文字(!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest004 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("call");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_");
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest004(addressId is special characters.)', VideoChatProfileAbnormalTest.callAbnormalTest004);

/**
 * addressIdに長い文字列(1000byte)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest005 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("call");
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  builder.addParameter("addressId", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
      "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij");
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    } else {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest005(addressId is long string.)', VideoChatProfileAbnormalTest.callAbnormalTest005);

/**
 * videoに数値(-1)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest006 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("video", "-1");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest006(video is number(-1).)', VideoChatProfileAbnormalTest.callAbnormalTest006);


/**
 * videoに特殊文字(!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_")を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&video=!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest007 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("video", "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest007(video is special characters.)', VideoChatProfileAbnormalTest.callAbnormalTest007);

/**
 * videoに長い文字列を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&video=abcdef・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest008 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("video", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest008(video is long string.)', VideoChatProfileAbnormalTest.callAbnormalTest008);

/**
 * audioに数値(-1)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest009 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("audio", "-1");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest009(audio is number(-1).)', VideoChatProfileAbnormalTest.callAbnormalTest009);


/**
 * audioに特殊文字(!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_")を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_"<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest010 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("audio", "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest010(audio is special characters.)', VideoChatProfileAbnormalTest.callAbnormalTest010);

/**
 * audioに長い文字列(1000byte)を入れて、callするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=abcdef・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest011 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("audio", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      if (errorCode == dConnect.constants.ErrorCode.INVALID_REQUEST_PARAMETER) {
        assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      } else {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      }
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest011(audio is long string.)', VideoChatProfileAbnormalTest.callAbnormalTest011);

/**
 * addressIdを指定しないでstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest012 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest012(address is not set on delete method.)', VideoChatProfileAbnormalTest.callAbnormalTest012);

/**
 * addressIdに空文字を指定してstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest013 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", "");
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest013(address is empty string on delete method.)', VideoChatProfileAbnormalTest.callAbnormalTest013);

/**
 * addressIdに特殊文字列("!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_")を指定してstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest014 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", "!\"#$%&'()-^¥@[;:],./_=~|`{+*}<>?_");
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest014(address is specail charactors on delete method.)', VideoChatProfileAbnormalTest.callAbnormalTest014);


/**
 * addressIdに長い文字列(1000byte)を指定してstopcallを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=abcdef・・・<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest015 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" + 
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij" +
        "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij");
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest015(address is long string on delete method.)', VideoChatProfileAbnormalTest.callAbnormalTest015);


/**
 * 定義されていないGETメソッドでcallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest016 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest016(Calling a get method that does not support.)', VideoChatProfileAbnormalTest.callAbnormalTest016);

/**
 * 定義されていないPUTメソッドでcallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.callAbnormalTest017 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callAbnormalTest017(Calling a put method that does not support.)', VideoChatProfileAbnormalTest.callAbnormalTest017);

/**
 * 定義されていないPUTメソッドでonincomingにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/onincoming?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onincomingAbnormalTest001 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("onincoming");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('OnincomingAbnormalTest001(Calling a get method that does not support.)', VideoChatProfileAbnormalTest.onincomingAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonincomingにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/onincoming?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onincomingAbnormalTest002 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("onincoming");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('OnincomingAbnormalTest002(Calling a post method that does not support.)', VideoChatProfileAbnormalTest.onincomingAbnormalTest002);

/**
 * 定義されていないPUTメソッドでoncallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/oncall?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.oncallAbnormalTest001 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("oncall");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('OncallAbnormalTest001(Calling a get method that does not support.)', VideoChatProfileAbnormalTest.oncallAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでoncallにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/oncall?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.oncallAbnormalTest002 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("oncall");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('OncallAbnormalTest002(Calling a post method that does not support.)', VideoChatProfileAbnormalTest.oncallAbnormalTest002);


/**
 * 定義されていないPUTメソッドでonhangupにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/onhangup?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onhangupAbnormalTest001 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("onhangup");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('OnhangupAbnormalTest001(Calling a get method that does not support.)', VideoChatProfileAbnormalTest.onhangupAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonhangupにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/onhangup?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
VideoChatProfileAbnormalTest.onhangupAbnormalTest002 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("onhangup");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('OnhangupAbnormalTest002(Calling a post method that does not support.)', VideoChatProfileAbnormalTest.onhangupAbnormalTest002);


