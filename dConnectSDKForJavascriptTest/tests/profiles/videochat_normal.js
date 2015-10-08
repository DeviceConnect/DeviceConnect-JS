module('VideoChat Profile Normal Test', {
  setup: function() {
    init();
  }
});

var VIDEOCHAT_CALL_TIME = 4000;

function findAddress(success_cb, error_cb) {
  setTimeout(function() {
    searchTestService(function(accessToken, serviceId) {
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
    }, function(errorCode, errorMessage) {
      error_cb(errorCode, errorMessage);
    });
  }, 1000);
}

function callAddress(success_cb, error_cb) {
  findAddress(function(accessToken, serviceId, addresses) {
    if (!isArray(addresses) || addresses.length == 0) {
      error_cb(-1, "addresses is invalid.");
      return;
    }
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      setTimeout(function() {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("videochat");
        builder.setAttribute("call");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter("config", VIDEOCHAT_CONFIG);
        builder.addParameter("addressId", addresses[0].addressId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          success_cb(accessToken, serviceId, addresses[0]);
        },function(errorCode, errorMessage) {
          error_cb(errorCode, errorMessage);
        });
      }, VIDEOCHAT_CALL_TIME);
    }, function(errorCode, errorMessage) {
      error_cb(errorCode, errorMessage);
    });
  }, function(errorCode, errorMessage) {
    error_cb(errorCode, errorMessage);
  });
}

/**
 * VideoChatプロファイルの正常系テストを行うクラス。
 * @class
 */
var VideoChatProfileNormalTest = {};

/**
 * プロフィールを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・nameに名前が格納されていること。<br/>
 * ・addressIdにIDが格納されていること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.profileNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("profile");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(json.name != undefined, 'name=' + json.name);
      assert.ok(json.addressId != undefined, 'addressId=' + json.addressId);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileNormalTest001(get)', VideoChatProfileNormalTest.profileNormalTest001);

/**
 * プロフィールを登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/profile?serviceId=xxxx&accessToken=xxxx&config=xxxx&name=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.profileNormalTest002 = function(assert) {
  var TEST_NAME = "TestName_" + new Date().getTime();
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("profile");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("name", TEST_NAME)
    var uri = builder.build();
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      var builder = new dConnect.URIBuilder();
      builder.setProfile("videochat");
      builder.setAttribute("profile");
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter("config", VIDEOCHAT_CONFIG);
      var uri = builder.build();
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.equal(json.name, TEST_NAME, 'name=' + json.name);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('profileNormalTest002(put)', VideoChatProfileNormalTest.profileNormalTest002);

/**
 * アドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.addressNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("address");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(isArray(json.addresses), 'addresses=' + json.addresses);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressNormalTest001(get)', VideoChatProfileNormalTest.addressNormalTest001);

/**
 * addressIdを指定してアドレスを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /videochat/address?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・addressesに1つの配列が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.addressNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("address");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      assert.ok(isArray(json.addresses), 'addresses=' + json.addresses);
      
      var address = json.addresses[0];
      
      var builder = new dConnect.URIBuilder();
      builder.setProfile("videochat");
      builder.setAttribute("address");
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);
      builder.addParameter("config", VIDEOCHAT_CONFIG);
      builder.addParameter("addressId", address.addressId)
      var uri = builder.build();
      dConnect.get(uri, null, function(json) {
        assert.ok(true, 'result=' + json.result);
        assert.ok(isArray(json.addresses), 'addresses=' + json.addresses);
        assert.equal(json.addresses.length, 1, 'addresses.length=' + json.addresses.length);
        assert.equal(json.addresses[0].name, address.name, 'name=' + json.addresses[0].name);
        assert.equal(json.addresses[0].addressId, address.addressId, 'addressId=' + json.addresses[0].addressId);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
        QUnit.start();
      });
      
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('addressNormalTest002(addressId is set)', VideoChatProfileNormalTest.addressNormalTest002);


/**
 * addressIdを指定してcallするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.callNormalTest001 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");
      
      setTimeout(function() {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("videochat");
        builder.setAttribute("call");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter("config", VIDEOCHAT_CONFIG);
        builder.addParameter("addressId", addresses[0].addressId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          QUnit.start();
        },function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, VIDEOCHAT_CALL_TIME);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callNormalTest001(post)', VideoChatProfileNormalTest.callNormalTest001);

/**
 * videoに画像のURLを指定してcallするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&video=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.callNormalTest002 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("video", VIDEO_URI);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");
      
      setTimeout(function() {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("videochat");
        builder.setAttribute("call");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter("config", VIDEOCHAT_CONFIG);
        builder.addParameter("addressId", addresses[0].addressId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          QUnit.start();
        },function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, VIDEOCHAT_CALL_TIME);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callNormalTest002(video is image url)', VideoChatProfileNormalTest.callNormalTest002);

/**
 * videoにfalseを指定してcallするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&video=false<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.callNormalTest003 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("video", "false");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");
      
      setTimeout(function() {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("videochat");
        builder.setAttribute("call");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter("config", VIDEOCHAT_CONFIG);
        builder.addParameter("addressId", addresses[0].addressId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          QUnit.start();
        },function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, VIDEOCHAT_CALL_TIME);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callNormalTest003(video is false)', VideoChatProfileNormalTest.callNormalTest003);

/**
 * audioにuriを指定してcallするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=false<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.callNormalTest004 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("audio", AUDIO_URI);
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");
      
      setTimeout(function() {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("videochat");
        builder.setAttribute("call");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter("config", VIDEOCHAT_CONFIG);
        builder.addParameter("addressId", addresses[0].addressId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          QUnit.start();
        },function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, VIDEOCHAT_CALL_TIME);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callNormalTest004(audio is uri)', VideoChatProfileNormalTest.callNormalTest004);

/**
 * audioにfalseを指定してcallするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /videochat/call?serviceId=xxxx&accessToken=xxxx&config=xxxx&addressId=xxxx&audio=false<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.callNormalTest005 = function(assert) {
  findAddress(function(accessToken, serviceId, addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    var builder = new dConnect.URIBuilder();
    builder.setProfile("videochat");
    builder.setAttribute("call");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("config", VIDEOCHAT_CONFIG);
    builder.addParameter("addressId", addresses[0].addressId);
    builder.addParameter("audio", "false");
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");
      
      setTimeout(function() {
        var builder = new dConnect.URIBuilder();
        builder.setProfile("videochat");
        builder.setAttribute("call");
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        builder.addParameter("config", VIDEOCHAT_CONFIG);
        builder.addParameter("addressId", addresses[0].addressId);
        var uri = builder.build();
        dConnect.delete(uri, null, function(json) {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          QUnit.start();
        },function(errorCode, errorMessage) {
          assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
          QUnit.start();
        });
      }, VIDEOCHAT_CALL_TIME);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('callNormalTest005(audio is false)', VideoChatProfileNormalTest.callNormalTest005);

/**
 * incomingイベント登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/incoming?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メッセージにincomingのイベントが通知されること。<br/>
 * ・incomingのイベントにaddressIdが格納されていること。<br/>
 * ・incomingのイベントにnameが格納されていること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.incomingNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("incoming");
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  openWebsocket(builder, assert, 10 * 1000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === "videochat" && json.attribute === "incoming") {
      assert.ok(json.incoming != undefined, "incoming=" + json.incoming);
      assert.ok(json.incoming.name != undefined, "incoming.name=" + json.incoming.name);
      assert.ok(json.incoming.addressId != undefined, "incoming.addressId=" + json.incoming.addressId);
      return true;
    }
    assert.ok(false, "message=" + message);
    return false;
  });
};
QUnit.asyncTest('incomingNormalTest001(event)', VideoChatProfileNormalTest.incomingNormalTest001);

/**
 * oncallイベント登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/oncall?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メッセージにoncallのイベントが通知されること。<br/>
 * ・oncallのイベントにaddressIdが格納されていること。<br/>
 * ・oncallのイベントにnameが格納されていること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.oncallNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("oncall");
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  openWebsocket(builder, assert, 10 * 1000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === "videochat" && json.attribute === "oncall") {
      assert.ok(json.oncall[0] != undefined, "oncall=" + json.oncall[0]);
      assert.ok(json.oncall[0].name != undefined, "oncall.name=" + json.oncall[0].name);
      assert.ok(json.oncall[0].addressId != undefined, "oncall.addressId=" + json.oncall[0].addressId);
      return true;
    }
    assert.ok(false, "message=" + message);
    return false;
  });

  setTimeout(function() {
    callAddress(function(accessToken, serviceId, address) {
      assert.ok(true, "address=" + address);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    });
  }, 500);
};
QUnit.asyncTest('oncallNormalTest001(event)', VideoChatProfileNormalTest.oncallNormalTest001);

/**
 * hangupイベント登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/hangup?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メッセージにoncallのイベントが通知されること。<br/>
 * ・hangupのイベントにaddressIdが格納されていること。<br/>
 * ・hangupのイベントにnameが格納されていること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.hangupNormalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile("videochat");
  builder.setAttribute("hangup");
  builder.addParameter("config", VIDEOCHAT_CONFIG);
  openWebsocket(builder, assert, 10 * 1000, function(message) {
    var json = JSON.parse(message);
    if (json.profile === "videochat" && json.attribute === "hangup") {
      assert.ok(json.hangup != undefined, "hangup=" + json.hangup);
      assert.ok(json.hangup.name != undefined, "hangup.name=" + json.hangup.name);
      assert.ok(json.hangup.addressId != undefined, "hangup.addressId=" + json.hangup.addressId);
      return true;
    }
    assert.ok(false, "message=" + message);
    return false;
  });
  
  setTimeout(function() {
    callAddress(function(accessToken, serviceId, address) {
      assert.ok(true, "address=" + address);
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
    });
  }, 500);
};
QUnit.asyncTest('hangupNormalTest001(event)', VideoChatProfileNormalTest.hangupNormalTest001);

