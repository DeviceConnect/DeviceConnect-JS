QUnit.module('Discover Devices Method Test', {
  setup: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * dConnect.discoverDevicesメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
var DiscoverDevicesTest = {};


/* dConnect.discoverDevices */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest001 = function(assert) {
  try {
    dConnect.discoverDevices();
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }

};
QUnit.test('discoverDevices, non exist parameters.', DiscoverDevicesTest.discoverDevicesTest001);


/// null
/**
 * 第一引数にnullを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest011 = function(assert) {
  try {
    dConnect.discoverDevices(null, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback null.',
  DiscoverDevicesTest.discoverDevicesTest011);

/**
 * 第一引数と第二引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest012 = function(assert) {
  dConnect.discoverDevices(null, null, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('discoverDevicesTest, uri and successCallback null.', DiscoverDevicesTest.discoverDevicesTest012);


/**
 * 第一引数と第三引数と第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest013 = function(assert) {
  try {
    dConnect.discoverDevices(null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback null.',
  DiscoverDevicesTest.discoverDevicesTest013);



/// undefined
/**
 * 第一引数にundefinedを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest021 = function(assert) {
  try {
    dConnect.discoverDevices(undefined, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback undefined.',
  DiscoverDevicesTest.discoverDevicesTest021);

/**
 * 第一引数と第二引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest022 = function(assert) {
  dConnect.discoverDevices(undefined, undefined, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('discoverDevicesTest, uri and successCallback undefined.',
  DiscoverDevicesTest.discoverDevicesTest022);


/**
 * 第一引数と第三引数と第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest023 = function(assert) {
  try {
    dConnect.discoverDevices(undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback undefined.',
  DiscoverDevicesTest.discoverDevicesTest023);


/// 数字
/**
 * 第一引数に数字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest031 = function(assert) {
  try {
    dConnect.discoverDevices(123, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback number.',
  DiscoverDevicesTest.discoverDevicesTest031);

/**
 * 第一引数と第二引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest032 = function(assert) {
  dConnect.discoverDevices(123, 123, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('discoverDevicesTest, uri and successCallback number.',
  DiscoverDevicesTest.discoverDevicesTest032);


/**
 * 第一引数と第三引数と第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest033 = function(assert) {
  try {
    dConnect.discoverDevices(123, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback number.',
  DiscoverDevicesTest.discoverDevicesTest033);

/// 英字
/**
 * 第一引数に英字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest041 = function(assert) {
  try {
    dConnect.discoverDevices('abc', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback alphabet.',
  DiscoverDevicesTest.discoverDevicesTest041);

/**
 * 第一引数と第二引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest042 = function(assert) {
  dConnect.discoverDevices('abc', 'abc', function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('discoverDevicesTest, uri and successCallback alphabet.',
  DiscoverDevicesTest.discoverDevicesTest042);


/**
 * 第一引数と第三引数と第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest043 = function(assert) {
  try {
    dConnect.discoverDevices('abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback alphabet.',
  DiscoverDevicesTest.discoverDevicesTest043);



/// 日本語
/**
 * 第一引数に日本語を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest051 = function(assert) {
  try {
    dConnect.discoverDevices('あいう', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback hiragana.',
  DiscoverDevicesTest.discoverDevicesTest051);

/**
 * 第一引数と第二引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest052 = function(assert) {
  dConnect.discoverDevices('あいう', 'あいう', function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('discoverDevicesTest, uri and successCallback hiragana.',
  DiscoverDevicesTest.discoverDevicesTest052);


/**
 * 第一引数と第三引数と第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest053 = function(assert) {
  try {
    dConnect.discoverDevices('あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback hiragana.',
  DiscoverDevicesTest.discoverDevicesTest053);


/// 記号
/**
 * 第一引数に記号を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest061 = function(assert) {
  try {
    dConnect.discoverDevices('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback symbol.',
  DiscoverDevicesTest.discoverDevicesTest061);

/**
 * 第一引数と第二引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest062 = function(assert) {
  dConnect.discoverDevices('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
    '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function() {
      assert.ok(true, 'Success Timeout.');
      QUnit.start();
    });
};

QUnit.test('discoverDevicesTest, uri and successCallback symbol.',
  DiscoverDevicesTest.discoverDevicesTest062);


/**
 * 第一引数と第三引数と第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest063 = function(assert) {
  try {
    dConnect.discoverDevices('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback symbol.',
  DiscoverDevicesTest.discoverDevicesTest063);


/// 1000文字
/**
 * 第一引数に1000文字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest071 = function(assert) {
  try {
    dConnect.discoverDevices('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Call ErrorCallback.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and eventCallback limit.',
  DiscoverDevicesTest.discoverDevicesTest071);

/**
 * 第一引数と第二引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest072 = function(assert) {
  dConnect.discoverDevices('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl', function() {
      assert.ok(true, 'Success Timeout.');
      QUnit.start();
    });
};

QUnit.test('discoverDevicesTest, uri and successCallback limit.',
  DiscoverDevicesTest.discoverDevicesTest072);


/**
 * 第一引数と第三引数と第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DiscoverDevicesTest.discoverDevicesTest073 = function(assert) {
  try {
    dConnect.discoverDevices('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('discoverDevicesTest, uri and successCallback, errorCallback limit.',
  DiscoverDevicesTest.discoverDevicesTest073);
