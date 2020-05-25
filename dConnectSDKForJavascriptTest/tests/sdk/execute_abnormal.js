QUnit.module('Execute Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.executeメソッドのテストを行うクラス。
 * sdk.setExtendedOrigiのテストも行う。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let ExecuteMethodTest = {};


/* sdk.execute */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('executeTest, non exist parameters.',
  ExecuteMethodTest.executeTest001);

/**
 *　引数を無しにした場合、Origin値を設定しなかった場合のテストを行う
 *
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest002 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin();
    sdk.execute();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('executeTest, non exist parameters and Origin.',
  ExecuteMethodTest.executeTest002);

/// null

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest011 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(null, null, null, null).then(json => {
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

QUnit.test('executeTest, method and uri and header and data null.',
  ExecuteMethodTest.executeTest011);

/**
 * 第一引数〜第五引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest012 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(null, null, null, null).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data and successCallback  null.',
  ExecuteMethodTest.executeTest012);

/**
 * 第一引数〜第六引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest013 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback null.',
  ExecuteMethodTest.executeTest013);

/**
 * 第一引数〜第六引数とOriginにnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest014 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(null);
    sdk.execute(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin null.',
  ExecuteMethodTest.executeTest014);

/// undefined

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest021 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(undefined, undefined, undefined, undefined).then(json => {
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

QUnit.test('executeTest, method and uri and header and data undefined.',
  ExecuteMethodTest.executeTest021);

/**
 * 第一引数〜第五引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest022 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(undefined, undefined, undefined, undefined).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data and successCallback  undefined.',
  ExecuteMethodTest.executeTest022);

/**
 * 第一引数〜第六引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest023 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback undefined.',
  ExecuteMethodTest.executeTest023);

/**
 * 第一引数〜第六引数とOriginにundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest024 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(undefined);
    sdk.execute(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin undefined.',
  ExecuteMethodTest.executeTest024);


/// 数字

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest031 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(123, 123, 123, 123).then(json => {
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

QUnit.test('executeTest, method and uri and header and data number.',
  ExecuteMethodTest.executeTest031);

/**
 * 第一引数〜第五引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest032 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(123, 123, 123, 123).catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data and successCallback  number.',
  ExecuteMethodTest.executeTest032);

/**
 * 第一引数〜第六引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest033 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback number.',
  ExecuteMethodTest.executeTest033);

/**
 * 第一引数〜第六引数とOriginに数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest034 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin(123);
    sdk.execute(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback' +
  'and origin number.',
  ExecuteMethodTest.executeTest034);


/// 英字

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest041 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('abc','abc', 'abc', 'abc').then(json => {
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

QUnit.test('executeTest, method and uri and header and data alphabet.',
  ExecuteMethodTest.executeTest041);

/**
 * 第一引数〜第五引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest042 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('abc', 'abc', 'abc', 'abc').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data and successCallback  alphabet.',
  ExecuteMethodTest.executeTest042);

/**
 * 第一引数〜第六引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest043 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback alphabet.',
  ExecuteMethodTest.executeTest043);

/**
 * 第一引数〜第六引数とOriginに英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest044 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('abc');
    sdk.execute('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin alphabet.',
  ExecuteMethodTest.executeTest044);



/// 日本語

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest051 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('あいう', 'あいう', 'あいう', 'あいう').then(json => {
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

QUnit.test('executeTest, method and uri and header and data hiragana.',
  ExecuteMethodTest.executeTest051);

/**
 * 第一引数〜第五引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest052 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('あいう', 'あいう', 'あいう', 'あいう').catch(e => {
      assert.ok(true, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data and successCallback  hiragana.',
  ExecuteMethodTest.executeTest052);

/**
 * 第一引数〜第六引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest053 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback hiragana.',
  ExecuteMethodTest.executeTest053);


/**
 * 第一引数〜第六引数とOriginに日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest054 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('あいう');
    sdk.execute('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin hiragana.',
  ExecuteMethodTest.executeTest054);

/// 記号

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest061 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('executeTest,  method and uri and header and data symbol.',
  ExecuteMethodTest.executeTest061);

/**
 * 第一引数〜第五引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest062 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('executeTest,method and uri and header and data and successCallback  symbol.',
  ExecuteMethodTest.executeTest062);

/**
 * 第一引数〜第六引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest063 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback symbol.',
  ExecuteMethodTest.executeTest063);


/**
 * 第一引数〜第六引数とOriginに記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest064 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    sdk.execute('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.test('executeTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin symbol.',
  ExecuteMethodTest.executeTest064);



/// 1000文字

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest071 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl')
      .then(json => {
        assert.ok(false, 'Success.=' + responseText);
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

QUnit.test('executeTest, method and uri and header and data limit.',
  ExecuteMethodTest.executeTest071);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest072 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.test('executeTest,method and uri and header and data and successCallback  limit.',
  ExecuteMethodTest.executeTest072);

/**
 * 第一引数〜第五引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest073 = function(assert) {
  let done = assert.async();
  try {
    sdk.execute('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest, method and uri and header and data successCallback and errorCallback limit.',
  ExecuteMethodTest.executeTest073);

/**
 * 第一引数〜第五引数とOriginに1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
ExecuteMethodTest.executeTest074 = function(assert) {
  let done = assert.async();
  try {
    sdk.setExtendedOrigin('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    sdk.execute('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl','abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('executeTest,' +
  ' method and uri and header and data successCallback and errorCallback and origin limit.',
  ExecuteMethodTest.executeTest074);
