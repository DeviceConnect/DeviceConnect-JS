QUnit.module('LightProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * Lightプロファイルの異常系テストを行うクラス。
 * @class
 */
let LightProfileAbnormalTest = {};

/**
 * 存在しないlightIdを指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=10000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'light',
    params: {
      serviceId: getCurrentServiceId(),
      lightId: 10000000000000000000000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightOnAbnormalTest001',
    LightProfileAbnormalTest.lightOnAbnormalTest001);

/**
 * brightnessに全角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest002 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
    sdk.post({
      profile: 'light',
      params: {
        serviceId: getCurrentServiceId(),
        lightId: json.lights[0].lightId,
        brightness: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
        'あいうえおあいうえおあいうえお'
      }
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('lightOnAbnomalTest002',
    LightProfileAbnormalTest.lightOnAbnormalTest002);

/**
 * brightnessに半角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest003 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: 'abcdefgabcdefg' + 'abcdefgabcdefg' +
          'abcdefgabcdefg' + 'abcdefgabcdefg' +
          'abcdefgabcdefg'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest003',
    LightProfileAbnormalTest.lightOnAbnormalTest003);

/**
 * brightnessに特殊文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=!#$%?<>?#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest004 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: '#$%?<>?#$%&<>?#$%?<>?#$%&<>?' +
          '#$%?<>?#$%&<>?#$%?<>?#$%&<>?' +
          '#$%?<>?#$%&<>?'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest004',
    LightProfileAbnormalTest.lightOnAbnormalTest004);

/**
 * brightnessに仕様範囲外の数値を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=10000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest005 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: 10000
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest005',
    LightProfileAbnormalTest.lightOnAbnormalTest005);

/**
 * brightnessにマイナスの数値を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=-0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest006 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: -0.5
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest006',
    LightProfileAbnormalTest.lightOnAbnormalTest006);

/**
 * brightnessに空文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest007 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: ''
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest007',
    LightProfileAbnormalTest.lightOnAbnormalTest007);

/**
 * colorに全角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=0.5&color='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest008 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: 0.5,
          color: 'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });

};
QUnit.test('lightOnAbnormalTest008',
    LightProfileAbnormalTest.lightOnAbnormalTest008);

/**
 * colorに半角文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=0.5&color='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest009 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: 0.5,
          color: 'abcdefgabcdefg' + 'abcdefgabcdefg' + 'abcdefgabcdefg' +
          'abcdefgabcdefg' + 'abcdefgabcdefg'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest009',
    LightProfileAbnormalTest.lightOnAbnormalTest009);

/**
 * colorに特殊文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=0.5&color='#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOnAbnormalTest010 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.post({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          brightness: 0.5,
          color: '#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?' +
          '#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightOnAbnormalTest010',
    LightProfileAbnormalTest.lightOnAbnormalTest010);

/**
 * 存在しないlightIdを指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=10000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'light',
    params: {
      serviceId: getCurrentServiceId(),
      lightId: 10000000000000000000000,
      name: 'Hue Light Test'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest001',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest001);

/**
 * colorに全角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&color='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest002 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          color: 'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });

};
QUnit.test('lightStatusChangeAbnormalTest002',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest002);

/**
 * colorに半角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&color='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest003 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          color: 'abcdefgabcdefg' + 'abcdefgabcdefg' + 'abcdefgabcdefg' +
          'abcdefgabcdefg' + 'abcdefgabcdefg'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest003',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest003);

/**
 * colorに特殊文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&color='#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest004 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          color: '#$%&<>?' + '#$%&<>?' + '#$%&<>?' + '#$%&<>?' + '#$%&<>?'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest004',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest004);

/**
 * brightnessに仕様範囲外の数値をを指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest005 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 100
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest005',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest005);

/**
 * brightnessにマイナスの数値をを指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=-0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest006 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: -0.5
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest006',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest006);

/**
 * brightnessに全角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest007 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest007',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest007);

/**
 * brightnessに半角文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest008 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 'abcdefgabcdefg' + 'abcdefgabcdefg' + 'abcdefgabcdefg' +
          'abcdefgabcdefg' + 'abcdefgabcdefg'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest008',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest008);

/**
 * brightnessに空文字を指定してライトステータス変更リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=-0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest009 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: ''
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest009',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest009);

/**
 * flashingにnumber型で0を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest010 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: 0
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest010',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest010);

/**
 * flashingにnumber型でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=-1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest011 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: -1000
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest011',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest011);

/**
 * flashingに文字列でマイナスの値を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=-1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest012 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: '-1000'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest012',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest012);

/**
 * flashingに全角文字を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing='あいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest013 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: 'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお' + 'あいうえおあいうえおあいうえお' +
          'あいうえおあいうえおあいうえお'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest013',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest013);

/**
 * flashingに半角文字を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing='abcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest014 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: 'abcdefgabcdefgabcdefg'
              + 'abcdefgabcdefgabcdefg' + 'abcdefgabcdefgabcdefg'
              + 'abcdefgabcdefgabcdefg' + 'abcdefgabcdefgabcdefg'
            }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest014',
  LightProfileAbnormalTest.lightStatusChangeAbnormalTest014);

/**
 * flashingに特殊文字を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing='#$%&<>?...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest015 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: '#$%&<>?#$%&<>?#$%&<>?'
              + '#$%&<>?#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?#$%&<>?'
              + '#$%&<>?#$%&<>?#$%&<>?' + '#$%&<>?#$%&<>?#$%&<>?'
            }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest015',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest015);

/**
 * flashingに[100,-100,100,100]を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=100,-100,100,100<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest016 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: '100,-100,100,100'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest016',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest016);

/**
 * flashingに[100,0.1,0.1,0.2]を指定してライト点滅リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx&brightness=xxx&flashing=100,0.1,0.1,0.2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest017 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: 'Hue Light Test',
          brightness: 0.5,
          flashing: '100,0.1,0.1,0.2'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest017',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest017);

/**
 * nameを指定しないでライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest018 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest018',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest018);


/**
 * nameに空文字を指定してライト点灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightStatusChangeAbnormalTest019 = function(assert) {
  let done = assert.async();
  getLightId().then(json => {
      sdk.put({
        profile: 'light',
        params: {
          serviceId: getCurrentServiceId(),
          lightId: json.lights[0].lightId,
          name: ''
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        done();
      });
  }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode),
          'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
      done();
  });
};
QUnit.test('lightStatusChangeAbnormalTest019',
    LightProfileAbnormalTest.lightStatusChangeAbnormalTest019);

/**
 * 存在しないlightIdを指定してライト消灯リクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx&lightId=10000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ること。<br/>
 * </p>
 */
LightProfileAbnormalTest.lightOffAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'light',
    params: {
      serviceId: getCurrentServiceId(),
      lightId: 10000000000000000000000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('lightOffAbnormalTest001',
    LightProfileAbnormalTest.lightOffAbnormalTest001);
