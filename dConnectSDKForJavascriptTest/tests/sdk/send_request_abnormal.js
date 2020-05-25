QUnit.module('Send Request Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.sendRequestメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let SendRequestMethodTest = {};


/* sdk.sendRequest */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('sendRequestTest, non exist parameters.',
  SendRequestMethodTest.sendRequestTest001);

/**
 *　Originとパラメータに引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest002 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin();
    sdk.sendRequest();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('sendRequestTest, non exist parameters and origin.',
  SendRequestMethodTest.sendRequestTest002);


/// null

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest011 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(null, null, null, null).then(json => {
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

QUnit.test('sendRequestTest, method and uri and header and data null.',
  SendRequestMethodTest.sendRequestTest011);

/**
 * 第一引数〜第五引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest012 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(null, null, null, null).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data and successCallback  null.',
  SendRequestMethodTest.sendRequestTest012);

/**
 * 第一引数〜第六引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest013 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback null.',
  SendRequestMethodTest.sendRequestTest013);


/**
 * 第一引数〜第六引数とOriginにnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest014 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(null);
    sdk.sendRequest(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin null.',
  SendRequestMethodTest.sendRequestTest014);

/// undefined

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest021 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(undefined, undefined, undefined, undefined).then(json => {
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

QUnit.test('sendRequestTest, method and uri and header and data undefined.',
  SendRequestMethodTest.sendRequestTest021);

/**
 * 第一引数〜第五引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest022 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(undefined, undefined, undefined, undefined).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data and successCallback  undefined.',
  SendRequestMethodTest.sendRequestTest022);

/**
 * 第一引数〜第六引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest023 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback undefined.',
  SendRequestMethodTest.sendRequestTest023);


/**
 * 第一引数〜第六引数とOriginにundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest024 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(undefined);
    sdk.sendRequest(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and Origin undefined.',
  SendRequestMethodTest.sendRequestTest024);

/// 数字

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest031 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(123, 123, 123, 123).then(json => {
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

QUnit.test('sendRequestTest, method and uri and header and data number.',
  SendRequestMethodTest.sendRequestTest031);

/**
 * 第一引数〜第五引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest032 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(123, 123, 123, 123).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data and successCallback  number.',
  SendRequestMethodTest.sendRequestTest032);

/**
 * 第一引数〜第六引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest033 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback number.',
  SendRequestMethodTest.sendRequestTest033);

/**
 * 第一引数〜第六引数とOriginに数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest034 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(123);
    sdk.sendRequest(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin number.',
  SendRequestMethodTest.sendRequestTest034);

/// 英字

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest041 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('abc','abc', 'abc', 'abc').then(json => {
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

QUnit.test('sendRequestTest, method and uri and header and data alphabet.',
  SendRequestMethodTest.sendRequestTest041);

/**
 * 第一引数〜第五引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest042 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('abc', 'abc', 'abc', 'abc').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data and successCallback  alphabet.',
  SendRequestMethodTest.sendRequestTest042);

/**
 * 第一引数〜第六引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest043 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback alphabet.',
  SendRequestMethodTest.sendRequestTest043);

/**
 * 第一引数〜第六引数とOriginに英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest044 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('abc');
    sdk.sendRequest('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and Origin alphabet.',
  SendRequestMethodTest.sendRequestTest044);

/// 日本語

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest051 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('あいう', 'あいう', 'あいう', 'あいう').then(json => {
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

QUnit.test('sendRequestTest, method and uri and header and data hiragana.',
  SendRequestMethodTest.sendRequestTest051);

/**
 * 第一引数〜第五引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest052 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('あいう', 'あいう', 'あいう', 'あいう').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data and successCallback  hiragana.',
  SendRequestMethodTest.sendRequestTest052);

/**
 * 第一引数〜第六引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest053 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback hiragana.',
  SendRequestMethodTest.sendRequestTest053);

/**
 * 第一引数〜第六引数とOriginに日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest054 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('あいう');
    sdk.sendRequest('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and Origin hiragana.',
  SendRequestMethodTest.sendRequestTest054);


/// 記号

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest061 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('sendRequestTest,  method and uri and header and data symbol.',
  SendRequestMethodTest.sendRequestTest061);

/**
 * 第一引数〜第五引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest062 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('sendRequestTest,method and uri and header and data and successCallback  symbol.',
  SendRequestMethodTest.sendRequestTest062);

/**
 * 第一引数〜第六引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest063 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback symbol.',
  SendRequestMethodTest.sendRequestTest063);

/**
 * 第一引数〜第六引数とOriginに記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest064 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    sdk.sendRequest('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and Origin symbol.',
  SendRequestMethodTest.sendRequestTest064);


/// 1000文字

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest071 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.test('sendRequestTest, method and uri and header and data limit.',
  SendRequestMethodTest.sendRequestTest071);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest072 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.test('sendRequestTest,method and uri and header and data and successCallback  limit.',
  SendRequestMethodTest.sendRequestTest072);

/**
 * 第一引数〜第五引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest073 = function(assert) {
  let done = assert.async();
  try {
    sdk.sendRequest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest, method and uri and header and data successCallback and errorCallback limit.',
  SendRequestMethodTest.sendRequestTest073);

/**
 * 第一引数〜第五引数とOriginに1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
SendRequestMethodTest.sendRequestTest074 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    sdk.sendRequest('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('sendRequestTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin limit.',
  SendRequestMethodTest.sendRequestTest074);
