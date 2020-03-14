QUnit.module('VideoChat Profile Normal Test', {
  before: function() {
    init();
  }
});

let VIDEOCHAT_CALL_TIME = 4000;



/**
 * VideoChatプロファイルの正常系テストを行うクラス。
 * @class
 */
let VideoChatProfileNormalTest = {};

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
  let done = assert.async();
  sdk.get({
    profile: 'videochat',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    config: VIDEOCHAT_CONFIG
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
		assert.ok(json.name != undefined, 'name=' + json.name);
		assert.ok(json.addressId != undefined, 'addressId=' + json.addressId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('profileNormalTest001(get)', VideoChatProfileNormalTest.profileNormalTest001);

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
  let done = assert.async();
  let TEST_NAME = "TestName_" + new Date().getTime();
  sdk.put({
    profile: 'videochat',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    config: VIDEOCHAT_CONFIG,
    name: TEST_NAME
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    sdk.get({
      profile: 'videochat',
      attribute: 'profile',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      assert.equal(json.name, TEST_NAME, 'name=' + json.name);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('profileNormalTest002(put)', VideoChatProfileNormalTest.profileNormalTest002);

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
  sdk.get({
    profile: 'videochat',
    attribute: 'address',
    serviceId: getCurrentServiceId(),
    config: VIDEOCHAT_CONFIG
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(isArray(json.addresses), 'addresses=' + json.addresses);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('addressNormalTest001(get)', VideoChatProfileNormalTest.addressNormalTest001);

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
  sdk.get({
    profile: 'videochat',
    attribute: 'address',
    serviceId: getCurrentServiceId(),
    config: VIDEOCHAT_CONFIG,
    addressId: address.addressId
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
		assert.ok(isArray(json.addresses), 'addresses=' + json.addresses);

		let address = json.addresses[0];
    sdk.get({
      profile: 'videochat',
      attribute: 'address',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG
    }).then(json => {
      assert.ok(isArray(json.addresses), 'addresses=' + json.addresses);
			assert.equal(json.addresses.length, 1, 'addresses.length=' + json.addresses.length);
			assert.equal(json.addresses[0].name, address.name, 'name=' + json.addresses[0].name);
			assert.equal(json.addresses[0].addressId, address.addressId, 'addressId=' + json.addresses[0].addressId);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('addressNormalTest002(addressId is set)', VideoChatProfileNormalTest.addressNormalTest002);


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
  findAddress(VIDEOCHAT_CONFIG, VIDEOCHAT_CALL_TIME).then(addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: addresses[0].addressId
    }).then(json => {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");

      setTimeout(() => {
        sdk.delete({
          profile: 'videochat',
          attribute: 'call',
          serviceId: getCurrentServiceId(),
          config: VIDEOCHAT_CONFIG,
          addressId: addresses[0].addressId
        }).then(json => {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          done();
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
                'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
          done();
        });
      }, VIDEOCHAT_CALL_TIME);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('callNormalTest001(post)', VideoChatProfileNormalTest.callNormalTest001);

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
  findAddress(VIDEOCHAT_CONFIG, VIDEOCHAT_CALL_TIME).then(addresses) {
    assert.ok(true, 'get address is ok. [result=0]');

    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: addresses[0].addressId,
      video: VIDEO_URI
    }).then(json => {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");

      setTimeout(() => {
        sdk.delete({
          profile: 'videochat',
          attribute: 'call',
          serviceId: getCurrentServiceId(),
          config: VIDEOCHAT_CONFIG,
          addressId: addresses[0].addressId
        }).then(json => {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
          done();
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
                'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
          done();
        });
      }, VIDEOCHAT_CALL_TIME);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('callNormalTest002(video is image url)',
          VideoChatProfileNormalTest.callNormalTest002);

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
  findAddress(VIDEOCHAT_CONFIG, VIDEOCHAT_CALL_TIME).then(addresses) {
    assert.ok(true, 'get address is ok. [result=0]');
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: addresses[0].addressId,
      video: "false"
    }).then(json => {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");

      setTimeout(() => {
        sdk.delete({
          profile: 'videochat',
          attribute: 'call',
          serviceId: getCurrentServiceId(),
          config: VIDEOCHAT_CONFIG,
          addressId: addresses[0].addressId
        }).then(json => {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
                'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
          done();
        });
      }, VIDEOCHAT_CALL_TIME);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('callNormalTest003(video is false)', VideoChatProfileNormalTest.callNormalTest003);

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
  findAddress(VIDEOCHAT_CONFIG, VIDEOCHAT_CALL_TIME).then(addresses) {
    assert.ok(true, 'get address is ok. [result=0]');
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: addresses[0].addressId,
      audio: AUDIO_URI
    }).then(json => {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");

      setTimeout(() => {
        sdk.delete({
          profile: 'videochat',
          attribute: 'call',
          serviceId: getCurrentServiceId(),
          config: VIDEOCHAT_CONFIG,
          addressId: addresses[0].addressId
        }).then(json => {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
                'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
          done();
        });
      }, VIDEOCHAT_CALL_TIME);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('callNormalTest004(audio is uri)',
      VideoChatProfileNormalTest.callNormalTest004);

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
  findAddress(VIDEOCHAT_CONFIG, VIDEOCHAT_CALL_TIME).then(addresses) {
    assert.ok(true, 'get address is ok. [result=0]');
    sdk.post({
      profile: 'videochat',
      attribute: 'call',
      serviceId: getCurrentServiceId(),
      config: VIDEOCHAT_CONFIG,
      addressId: addresses[0].addressId,
      audio: "false"
    }).then(json => {
      assert.ok(true, 'call is ok. [result=' + json.result + "]");

      setTimeout(() => {
        sdk.delete({
          profile: 'videochat',
          attribute: 'call',
          serviceId: getCurrentServiceId(),
          config: VIDEOCHAT_CONFIG,
          addressId: addresses[0].addressId
        }).then(json => {
          assert.ok(true, 'stopcall is ok. [result=' + json.result + "]");
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
                'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
          done();
        });
      }, VIDEOCHAT_CALL_TIME);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('callNormalTest005(audio is false)',
    VideoChatProfileNormalTest.callNormalTest005);

/**
 * onincomingイベント登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/onincoming?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メッセージにonincomingのイベントが通知されること。<br/>
 * ・onincomingのイベントにaddressIdが格納されていること。<br/>
 * ・onincomingのイベントにnameが格納されていること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.onincomingNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: "videochat",
    attribute: "onincoming",
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === "videochat" && json.attribute === "onincoming") {
      assert.ok(json.onincoming != undefined, "onincoming=" + json.onincoming);
      assert.ok(json.onincoming.name != undefined, "onincoming.name=" + json.onincoming.name);
      assert.ok(json.onincoming.addressId != undefined, "onincoming.addressId=" + json.onincoming.addressId);
      return true;
    }
    assert.ok(false, "message=" + message);
    return false;
  });
};
QUnit.test('onincomingNormalTest001(event)',
    VideoChatProfileNormalTest.onincomingNormalTest001);

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
  let serviceId = getCurrentServiceId();
  let params = {
    profile: "videochat",
    attribute: "oncall",
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
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
QUnit.test('oncallNormalTest001(event)', VideoChatProfileNormalTest.oncallNormalTest001);

/**
 * onhangupイベント登録するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /videochat/onhangup?serviceId=xxxx&accessToken=xxxx&config=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・メッセージにoncallのイベントが通知されること。<br/>
 * ・onhangupのイベントにaddressIdが格納されていること。<br/>
 * ・onhangupのイベントにnameが格納されていること。<br/>
 * </p>
 */
VideoChatProfileNormalTest.onhangupNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let params = {
    profile: "videochat",
    attribute: "onhangup",
    serviceId: serviceId
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === "videochat" && json.attribute === "onhangup") {
      assert.ok(json.onhangup != undefined, "onhangup=" + json.onhangup);
      assert.ok(json.onhangup.name != undefined, "onhangup.name=" + json.onhangup.name);
      assert.ok(json.onhangup.addressId != undefined, "onhangup.addressId=" + json.onhangup.addressId);
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
QUnit.test('onhangupNormalTest001(event)', VideoChatProfileNormalTest.onhangupNormalTest001);
