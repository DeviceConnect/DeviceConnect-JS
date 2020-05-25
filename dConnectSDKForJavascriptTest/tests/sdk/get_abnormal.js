QUnit.module('Get Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.getメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let GetMethodTest = {};


/* sdk.get */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
GetMethodTest.getTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.get().catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('getTest, non exist parameters.',
  GetMethodTest.getTest001);

/**
 *　Origiと引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
GetMethodTest.getTest002 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin();
    sdk.get().catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('getTest, non exist parameters and Origin.',
  GetMethodTest.getTest002);



/// null

/**
 * 第一引数〜第二引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest011 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(null, null).then(json => {
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

QUnit.test('getTest,  uri and header null.',
  GetMethodTest.getTest011);

/**
 * 第一引数〜第三引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest012 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(null, null).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header and successCallback  null.',
  GetMethodTest.getTest012);

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest013 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(null, null).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback null.',
  GetMethodTest.getTest013);

/**
 * 第一引数〜第四引数とOriginにnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest014 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(null);
    sdk.get(null, null).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback and origin null.',
  GetMethodTest.getTest014);

/// undefined

/**
 * 第一引数〜第二引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest021 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(undefined, undefined).then(json => {
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

QUnit.test('getTest,  uri and header undefined.',
  GetMethodTest.getTest021);

/**
 * 第一引数〜第三引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest022 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(undefined, undefined).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header and successCallback undefined.',
  GetMethodTest.getTest022);

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest023 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(undefined, undefined).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback undefined.',
  GetMethodTest.getTest023);

/**
 * 第一引数〜第四引数とOriginにundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest024 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(undefined);
    sdk.get(undefined, undefined).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest,' +
  ' uri and header successCallback and errorCallback and Origin undefined.',
  GetMethodTest.getTest024);


/// 数字

/**
 * 第一引数〜第二引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest031 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(123, 123).then(json => {
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

QUnit.test('getTest,  uri and header number.',
  GetMethodTest.getTest031);

/**
 * 第一引数〜第三引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest032 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(123, 123).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header and successCallback number.',
  GetMethodTest.getTest032);

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest033 = function(assert) {
  let done = assert.async();
  try {
    sdk.get(123, 123).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback number.',
  GetMethodTest.getTest033);

/**
 * 第一引数〜第四引数とOriginに数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest034 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(123);
    sdk.get(123, 123).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest,' +
  ' uri and header successCallback and errorCallback and Origin number.',
  GetMethodTest.getTest034);


/// 英字

/**
 * 第一引数〜第二引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest041 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('abc', 'abc').then(json => {
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

QUnit.test('getTest,  uri and header alphabet.',
  GetMethodTest.getTest041);

/**
 * 第一引数〜第三引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest042 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('abc', 'abc').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });

  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header and successCallback alphabet.',
  GetMethodTest.getTest042);

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest043 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('abc', 'abc').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback alphabet.',
  GetMethodTest.getTest043);

/**
 * 第一引数〜第四引数とOriginに英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest044 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('abc');
    sdk.get('abc', 'abc').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest,' +
  'uri and header successCallback and errorCallback and origin alphabet.',
  GetMethodTest.getTest044);


/// 日本語

/**
 * 第一引数〜第二引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest051 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('あいう', 'あいう').then(json => {
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

QUnit.test('getTest,  uri and header hiragana.',
  GetMethodTest.getTest051);

/**
 * 第一引数〜第三引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest052 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('あいう', 'あいう').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header and successCallback hiragana.',
  GetMethodTest.getTest052);

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest053 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('あいう', 'あいう').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback hiragana.',
  GetMethodTest.getTest053);

/**
 * 第一引数〜第四引数とOriginに日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest054 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('あいう');
    sdk.get('あいう', 'あいう').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, ' +
  'uri and header successCallback and errorCallback and origin hiragana.',
  GetMethodTest.getTest054);



/// 記号

/**
 * 第一引数〜第二引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest061 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('getTest,  uri and header symbol.',
  GetMethodTest.getTest061);

/**
 * 第一引数〜第三引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest062 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('getTest, uri and header and successCallback symbol.',
  GetMethodTest.getTest062);

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest063 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=').catch(e => {
        assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback symbol.',
  GetMethodTest.getTest063);

/**
 * 第一引数〜第四引数とOriginに記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest064 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    sdk.get('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=').catch(e => {
        assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest,' +
  ' uri and header successCallback and errorCallback and origin symbol.',
  GetMethodTest.getTest064);


/// 1000文字

/**
 * 第一引数〜第二引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
GetMethodTest.getTest071 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.test('getTest,  uri and header limit.',
  GetMethodTest.getTest071);

/**
 * 第一引数〜第三引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest072 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.test('getTest, uri and header and successCallback limit.',
  GetMethodTest.getTest072);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest073 = function(assert) {
  let done = assert.async();
  try {
    sdk.get('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl').catch(e => {
        assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest, uri and header successCallback and errorCallback limit.',
  GetMethodTest.getTest073);


/**
 * 第一引数〜第四引数とOriginに1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetMethodTest.getTest074 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    sdk.get('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl').catch(e => {
        assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getTest,' +
  ' uri and header successCallback and errorCallback and origin limit.',
  GetMethodTest.getTest074);
