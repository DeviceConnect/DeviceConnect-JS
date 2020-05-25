QUnit.module('Request AccessToken Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.requestAccessTokenメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let RequestAccessTokenMethodTest = {};


/* sdk.requestAccessToken */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken().catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('requestAccessTokenTest, non exist parameters.',
  RequestAccessTokenMethodTest.requestAccessTokenTest001);


/// null

/**
 * 第一引数〜第二引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest011 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(null, null, null).then(accessToken => {
      assert.ok(false, 'Success.=' + accessToken);
      done();
    }).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest,  clientId and scope null.',
  RequestAccessTokenMethodTest.requestAccessTokenTest011);

/**
 * 第一引数〜第三引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest012 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(null, null, null).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback  null.',
  RequestAccessTokenMethodTest.requestAccessTokenTest012);

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest013 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(null, null, null).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback null.',
  RequestAccessTokenMethodTest.requestAccessTokenTest013);

/**
 * scope配列にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest014 = function(assert) {
  let done = assert.async();
  try {
    let scope = [null];
    sdk.requestAccessToken(null, scope, null).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, scope array null.',
  RequestAccessTokenMethodTest.requestAccessTokenTest014);



/// undefined

/**
 * 第一引数〜第二引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest021 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(undefined, undefined, undefined).then(accessToken => {
      assert.ok(false, 'Success.=' + json);
      done();
    }).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope undefined.',
  RequestAccessTokenMethodTest.requestAccessTokenTest021);

/**
 * 第一引数〜第三引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest022 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(undefined, undefined, undefined).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback undefined.',
  RequestAccessTokenMethodTest.requestAccessTokenTest022);

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest023 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(undefined, undefined, undefined).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback undefined.',
  RequestAccessTokenMethodTest.requestAccessTokenTest023);

/**
 * scope配列にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest024 = function(assert) {
  let done = assert.async();
  try {
    let scope = [undefined];
    sdk.requestAccessToken(undefined, scope, undefined).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, scope array undefined.',
  RequestAccessTokenMethodTest.requestAccessTokenTest024);



/// 数字

/**
 * 第一引数〜第二引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest031 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(123, 123, 123).then(json => {
      assert.ok(false, 'Success.=' + json);
      done();
    }).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope number.',
  RequestAccessTokenMethodTest.requestAccessTokenTest031);

/**
 * 第一引数〜第三引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest032 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(123, 123, 123).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback number.',
  RequestAccessTokenMethodTest.requestAccessTokenTest032);

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest033 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken(123, 123, 123).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback number.',
  RequestAccessTokenMethodTest.requestAccessTokenTest033);

/**
 * scope配列に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest034 = function(assert) {
  let done = assert.async();
  try {
    let scope = [123];
    sdk.requestAccessToken(123, scope, 123).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, scope array  number.',
  RequestAccessTokenMethodTest.requestAccessTokenTest034);



/// 英字

/**
 * 第一引数〜第二引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest041 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('abc', 'abc', 'abc').then(json => {
      assert.ok(false, 'Success.=' + json);
      done();
    }).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest,  clientId and scope alphabet.',
  RequestAccessTokenMethodTest.requestAccessTokenTest041);

/**
 * 第一引数〜第三引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest042 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('abc', 'abc', 'abc').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback alphabet.',
  RequestAccessTokenMethodTest.requestAccessTokenTest042);

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest043 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('abc', 'abc', 'abc').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback alphabet.',
  RequestAccessTokenMethodTest.requestAccessTokenTest043);

/**
 * scope配列に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest044 = function(assert) {
  let done = assert.async();
  try {
    let scope = ['abc'];
    sdk.requestAccessToken('abc', scope, 'abc').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback alphabet.',
  RequestAccessTokenMethodTest.requestAccessTokenTest044);




/// 日本語

/**
 * 第一引数〜第二引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest051 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('あいう', 'あいう', 'あいう').then(json => {
      assert.ok(false, 'Success.=' + json);
      done();
    }).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest,  clientId and scope hiragana.',
  RequestAccessTokenMethodTest.requestAccessTokenTest051);

/**
 * 第一引数〜第三引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest052 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('あいう', 'あいう', 'あいう').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback hiragana.',
  RequestAccessTokenMethodTest.requestAccessTokenTest052);

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest053 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('あいう', 'あいう', 'あいう').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback hiragana.',
  RequestAccessTokenMethodTest.requestAccessTokenTest053);

/**
 * scope配列に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest054 = function(assert) {
  let done = assert.async();
  try {
    let scope = ['あいう'];
    sdk.requestAccessToken('あいう', scope, 'あいう').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, scope array hiragana.',
  RequestAccessTokenMethodTest.requestAccessTokenTest054);



/// 記号

/**
 * 第一引数〜第二引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest061 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=')
      .then(json => {
        assert.ok(false, 'Success.=' + json);
        done();
      }).catch(e => {
        assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest,  clientId and scope symbol.',
  RequestAccessTokenMethodTest.requestAccessTokenTest061);

/**
 * 第一引数〜第三引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest062 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=')
      .catch(e => {
        assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback symbol.',
  RequestAccessTokenMethodTest.requestAccessTokenTest062);

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest063 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=').catch(e => {
        assert.ok(true, 'Nothing happens');
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope successCallback and errorCallback symbol.',
  RequestAccessTokenMethodTest.requestAccessTokenTest063);

/**
 * scope配列に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest064 = function(assert) {
  let done = assert.async();
  try {
    let scope = ['!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='];
    sdk.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      scope,
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=').catch(e => {
        assert.ok(true, 'Nothing happens');
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, scope array symbol.',
  RequestAccessTokenMethodTest.requestAccessTokenTest064);




/// 1000文字

/**
 * 第一引数〜第二引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest071 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl')
    .then(json => {
        assert.ok(false, 'Success.=' + json);
        done();
    }).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest,  clientId and scope limit.',
  RequestAccessTokenMethodTest.requestAccessTokenTest071);

/**
 * 第一引数〜第三引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest072 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl')
    .catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scope and successCallback limit.',
  RequestAccessTokenMethodTest.requestAccessTokenTest072);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest073 = function(assert) {
  let done = assert.async();
  try {
    sdk.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl').catch(e => {
        assert.ok(true, 'Nothing happens');
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, clientId and scopes successCallback and errorCallback limit.',
  RequestAccessTokenMethodTest.requestAccessTokenTest073);


/**
 * scopの配列に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
RequestAccessTokenMethodTest.requestAccessTokenTest074 = function(assert) {
  let done = assert.async();
  try {
    let scope = ['abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'];
    sdk.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      scope, 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl').catch(e => {
        assert.ok(true, 'Nothing happens');
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('requestAccessTokenTest, scope array limit.',
  RequestAccessTokenMethodTest.requestAccessTokenTest074);
