QUnit.module('Get System Device Info Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.getSystemDeviceInfoメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let GetSystemDeviceInfoMethodTest = {};

/* sdk.getSystemDeviceInfo */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo().catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    console.log("after?");
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('getSystemDeviceInfoTest, non exist parameters.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest001);


/// null

/**
 * 第一引数と第二引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest011 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo(null).then(json => {
    assert.ok(false, 'Success Callback.:' + json);
    done();
  }).catch(e => {
    assert.ok(true, 'Success Timeout.');
    done();
  });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback null.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest011);


/**
 * 第一引数〜第三引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest012 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo(null).catch(e => {
      assert.ok(true, 'Success Timeout.');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback null.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest012);

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest013 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo(null).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback null.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest013);



/// undefined

/**
 * 第一引数と第二引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest021 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo(undefined).then(json => {
    assert.ok(false, 'Error Callback:' + json);
    done();
  }).catch(e => {
    assert.ok(true, 'Success Timeout.');
    done();
  });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback undefined.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest021);


/**
 * 第一引数〜第三引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest022 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo(undefined).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback undefined.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest022);

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest023 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo(undefined).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback undefined.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest023);


/// 数字

/**
 * 第一引数と第二引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest031 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo(123).then(json => {
    assert.ok(false, 'Success Callback:' + json);
    done();
  }).catch(e => {
    assert.ok(true, 'Success Timeout.');
    done();
  });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback number.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest031);


/**
 * 第一引数〜第三引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest032 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo(123).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback number.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest032);

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest033 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo(123).catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback number.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest033);




/// 英字

/**
 * 第一引数と第二引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest041 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo('abc').then(json => {
    assert.ok(false, 'Error Callback:' + json);
    done();
  }).catch(e => {
    assert.ok(true, 'Success Timeout.');
    done();
  });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback alphabet.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest041);


/**
 * 第一引数〜第三引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest042 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('abc').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback alphabet.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest042);

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest043 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('abc').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback alphabet.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest043);



/// 日本語

/**
 * 第一引数と第二引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest051 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo('あいう').then(json => {
    assert.ok(false, 'Error Callback:' + json);
    done();
  }).catch(e => {
    assert.ok(true, 'Success Timeout.');
    done();
  });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback hiragana.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest051);


/**
 * 第一引数〜第三引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest052 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('あいう').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback hiragana.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest052);

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest053 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('あいう').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    })
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback hiragana.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest053);


/// 記号

/**
 * 第一引数と第二引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest061 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=')
    .then(json => {
      assert.ok(false, 'Error Callback:' + json);
      done();
    }).catch(e => {
      assert.ok(true, 'Success Timeout.');
      done();
    });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback symbol.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest061);


/**
 * 第一引数〜第三引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest062 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback symbol.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest062);

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest063 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback symbol.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest063);

/// 1000文字

/**
 * 第一引数と第二引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest071 = function(assert) {
  let done = assert.async();
  sdk.getSystemDeviceInfo('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl')
  .then(json => {
      assert.ok(false, 'Error Callback:' + json);
      done();
    }).catch(e => {
      assert.ok(true, 'Success Timeout.');
      done();
    });
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback limit.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest071);


/**
 * 第一引数〜第三引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest072 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl')
    .catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback limit.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest072);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest073 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemDeviceInfo('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl').catch(e => {
      assert.ok(true, 'Nothing happens');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemDeviceInfoTest, uri and accessToken, successCallback, errorCallback limit.',
  GetSystemDeviceInfoMethodTest.getSystemDeviceInfoTest073);
