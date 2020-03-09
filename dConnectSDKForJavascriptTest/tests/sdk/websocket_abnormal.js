QUnit.module('Event Test', {
  setup: function() {
    TEST_TIMEOUT = 120000;
    init();
  }
});

/**
 * Event関連のテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
var EventTest = {};

///etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest001 = function(assert) {
  try {
    dConnect.addEventListener();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};
QUnit.test('addEvent, non exist parameter.',
  EventTest.addEventTest001);

/**
 *　uriにhttp://www.google.comを指定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・Success Callbackが返ってくる。<br/>
 * </p>
 */
EventTest.addEventTest002 = function(assert) {
  dConnect.addEventListener("http://www.google.com", function(){}, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'No Event.');
    QUnit.start();
  });
};
QUnit.test('addEvent, uri "http://www.google.com".',
  EventTest.addEventTest002);



/// null
/**
 * 第一引数と第二引数にnullを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest011 = function(assert) {
  try {
    dConnect.addEventListener(null, null, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
          'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback null.',
  EventTest.addEventTest011);

/**
 * 第一引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest012 = function(assert) {
    dConnect.addEventListener(null, function(){}, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success Timeout.');
      QUnit.start();
    });
};

QUnit.test('addEvent, uri null.', EventTest.addEventTest012);


/**
 * 第一引数と第三引数と第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest013 = function(assert) {
  try {
    dConnect.addEventListener(null, function(){}, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback null.',
  EventTest.addEventTest013);


/// undefined
/**
 * 第一引数と第二引数にundefinedを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest021 = function(assert) {
  try {
    dConnect.addEventListener(undefined, undefined, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback undefined.',
  EventTest.addEventTest021);

/**
 * 第一引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest022 = function(assert) {
  dConnect.addEventListener(undefined, function(){}, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('addEvent, uri undefined.', EventTest.addEventTest022);


/**
 * 第一引数と第三引数と第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest023 = function(assert) {
  try {
    dConnect.addEventListener(undefined, function(){}, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback undefined.',
  EventTest.addEventTest023);

/// 数字
/**
 * 第一引数と第二引数に数字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest031 = function(assert) {
  try {
    dConnect.addEventListener(123, 123, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback number.',
  EventTest.addEventTest031);

/**
 * 第一引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest032 = function(assert) {
  dConnect.addEventListener(123, function(){}, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('addEvent, uri number.', EventTest.addEventTest032);


/**
 * 第一引数と第三引数と第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest033 = function(assert) {
  try {
    dConnect.addEventListener(123, function(){}, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback number.',
  EventTest.addEventTest033);

/// 英字
/**
 * 第一引数と第二引数に英字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest041 = function(assert) {
  try {
    dConnect.addEventListener('abc', 'abc', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback alphabet.',
  EventTest.addEventTest041);

/**
 * 第一引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest042 = function(assert) {
  dConnect.addEventListener('abc', function() {
  }, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('addEvent, uri alphabet.', EventTest.addEventTest042);


/**
 * 第一引数と第三引数と第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest043 = function(assert) {
  try {
    dConnect.addEventListener('abc', function(){}, 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback alphabet.',
  EventTest.addEventTest043);


/// 日本語
/**
 * 第一引数と第二引数に日本語を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest051 = function(assert) {
  try {
    dConnect.addEventListener('あいう', 'あいう', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback hiragana.',
  EventTest.addEventTest051);

/**
 * 第一引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest052 = function(assert) {
  dConnect.addEventListener('あいう', function() {
  }, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('addEvent, uri hiragana.', EventTest.addEventTest052);


/**
 * 第一引数と第三引数と第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest053 = function(assert) {
  try {
    dConnect.addEventListener('あいう', function(){}, 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback hiragana.',
  EventTest.addEventTest053);

/// 記号
/**
 * 第一引数と第二引数に記号を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest061 = function(assert) {
  try {
    dConnect.addEventListener('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback symbol.',
  EventTest.addEventTest061);

/**
 * 第一引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest062 = function(assert) {
  dConnect.addEventListener('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function() {
  }, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('addEvent, uri symbol.', EventTest.addEventTest062);


/**
 * 第一引数と第三引数と第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest063 = function(assert) {
  try {
    dConnect.addEventListener('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function(){},
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback symbol.',
  EventTest.addEventTest063);


/// 1000文字
/**
 * 第一引数と第二引数に1000文字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.addEventTest071 = function(assert) {
  try {
    dConnect.addEventListener('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and eventCallback limit.',
  EventTest.addEventTest071);

/**
 * 第一引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが返ってくること。<br/>
 * </p>
 */
EventTest.addEventTest072 = function(assert) {
  dConnect.addEventListener('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl', function() {
  }, function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'Success Timeout.');
    QUnit.start();
  });
};

QUnit.test('addEvent, uri limit.', EventTest.addEventTest072);


/**
 * 第一引数と第三引数と第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
EventTest.addEventTest073 = function(assert) {
  try {
    dConnect.addEventListener('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function(){}, 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('addEvent, uri and successCallback, errorCallback limit.',
  EventTest.addEventTest073);



///etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
EventTest.removeEventTest001 = function(assert) {
    dConnect.removeEventListener();
    assert.ok(true, "Error");
    QUnit.start();
};
QUnit.test('removeEvent, non exist parameter.',
  EventTest.removeEventTest001);

/**
 *　uriにhttp://www.google.comを指定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・Success Callbackが返ってくる。<br/>
 * </p>
 */
EventTest.removeEventTest002 = function(assert) {
  dConnect.removeEventListener("http://www.google.com", function() {
    assert.ok(false, 'Error.');
    QUnit.start();
  }, function() {
    assert.ok(true, 'No Event.');
    QUnit.start();
  });
};
QUnit.test('removeEvent, uri "http://www.google.com".',
  EventTest.removeEventTest002);

/// null
/**
 * 第一引数にnullを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest011 = function(assert) {
  try {
    dConnect.removeEventListener(null, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri null.',
  EventTest.removeEventTest011);

/**
 * 第一引数と第二引数にnullを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest012 = function(assert) {
  try {
    dConnect.removeEventListener(null, null, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback null.',
  EventTest.removeEventTest012);

/**
 * すべての引数にnullを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest013 = function(assert) {
  try {
    dConnect.removeEventListener(null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback null.',
  EventTest.removeEventTest013);

/// undefined
/**
 * 第一引数にundefinedを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest021 = function(assert) {
  try {
    dConnect.removeEventListener(undefined, function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.ok(true, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri undefined.',
  EventTest.removeEventTest021);

/**
 * 第一引数と第二引数にundefinedを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest022 = function(assert) {
  try {
    dConnect.removeEventListener(undefined, undefined, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback undefined.',
  EventTest.removeEventTest022);

/**
 * すべての引数にundefinedを設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest023 = function(assert) {
  try {
    dConnect.removeEventListener(undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback undefined.',
  EventTest.removeEventTest023);


/// 数字
/**
 * 第一引数に数字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest031 = function(assert) {
  try {
    dConnect.removeEventListener('123', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri number.',
  EventTest.removeEventTest031);

/**
 * 第一引数と第二引数に数字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest032 = function(assert) {
  try {
    dConnect.removeEventListener('123', '123', function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback number.',
  EventTest.removeEventTest032);

/**
 * すべての引数に数字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest033 = function(assert) {
  try {
    dConnect.removeEventListener('123', '123', '123');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback number.',
  EventTest.removeEventTest033);


/// 英字
/**
 * 第一引数に英字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest041 = function(assert) {
  try {
    dConnect.removeEventListener('abc', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri alphabet.',
  EventTest.removeEventTest041);

/**
 * 第一引数と第二引数に英字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest042 = function(assert) {
  try {
    dConnect.removeEventListener('abc', 'abc', function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback alphabet.',
  EventTest.removeEventTest042);

/**
 * すべての引数に英字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest043 = function(assert) {
  try {
    dConnect.removeEventListener('abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback alphabet.',
  EventTest.removeEventTest043);


/// 日本語
/**
 * 第一引数に日本語を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest051 = function(assert) {
  try {
    dConnect.removeEventListener('あいう', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri hiragana.',
  EventTest.removeEventTest051);

/**
 * 第一引数と第二引数に日本語を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest052 = function(assert) {
  try {
    dConnect.removeEventListener('あいう', 'あいう', function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback hiragana.',
  EventTest.removeEventTest052);

/**
 * すべての引数に日本語を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest053 = function(assert) {
  try {
    dConnect.removeEventListener('あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback hiragana.',
  EventTest.removeEventTest053);


/// 記号
/**
 * 第一引数に記号を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest061 = function(assert) {
  try {
    dConnect.removeEventListener('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri symbol.',
  EventTest.removeEventTest061);

/**
 * 第一引数と第二引数に記号を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest062 = function(assert) {
  try {
    dConnect.removeEventListener('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback symbol.',
  EventTest.removeEventTest062);

/**
 * すべての引数に記号を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest063 = function(assert) {
  try {
    dConnect.removeEventListener('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback symbol.',
  EventTest.removeEventTest063);


/// 1000文字
/**
 * 第一引数に1000文字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest071 = function(assert) {
  try {
    dConnect.removeEventListener('hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function() {
      assert.ok(false, 'Error.');
      QUnit.start();
    }, function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri limit.',
  EventTest.removeEventTest071);

/**
 * 第一引数と第二引数に1000文字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・errorCallbackが呼ばれること。<br/>
 * </p>
 */
EventTest.removeEventTest072 = function(assert) {
  try {
    dConnect.removeEventListener('hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl', function() {
      assert.ok(true, 'Success.');
      QUnit.start();
    });
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback limit.',
  EventTest.removeEventTest072);

/**
 * すべての引数に1000文字を設定した場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起きないこと。<br/>
 * </p>
 */
EventTest.removeEventTest073 = function(assert) {
  try {
    dConnect.removeEventListener('hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(false, e.message);
    QUnit.start();
  }
};

QUnit.test('removeEvent, uri and successCallback, errorCallback limit.',
  EventTest.removeEventTest073);






/**
 * Websocketの接続、切断を100繰り返すテストを行う。
 * <p>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・問題なく接続・切断が行われること。<br/>
 * ・途中でエラーが発生しないこと。<br/>
 * </p>
 */
EventTest.addEventTest999 = function(assert) {
  var testFunc = function(count) {
    if (count >= 100) {
      QUnit.start();
      return;
    }

    dConnect.connectWebSocket('test_' + count,
      function(eventCode, eventMessage) {
        if (eventCode == 0) {
          assert.ok(true, 'test_' + count + ' connected.');
          setTimeout(function() {
            dConnect.disconnectWebSocket();
          }, 200);
        } else if (eventCode == 1) {
          assert.ok(true, 'test_' + count + ' disconnected.');
          setTimeout(function() {
            testFunc(count + 1);
          }, 200);
        } else {
          assert.ok(false, 'error: ' + eventMessage);
        }
      });
  }
  testFunc(0);

};

QUnit.test('100 times the connect and disconnect of Websocket.',
          EventTest.addEventTest999);
