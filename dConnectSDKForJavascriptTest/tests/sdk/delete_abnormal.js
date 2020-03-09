QUnit.module('Delete Method Test', {
  setup: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * dConnect.deleteメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
var DeleteMethodTest = {};

/* dConnect.delete */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest001 = function(assert) {
  try {
    dConnect.delete();
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }

};
QUnit.test('deleteTest, non exist parameters.',
  DeleteMethodTest.deleteTest001);

/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest002 = function(assert) {
  try {
    dConnect.setExtendedOrigin();
    dConnect.delete();
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }

};
QUnit.test('deleteTest, non exist parameters. and origin',
  DeleteMethodTest.deleteTest002);

/// null

/**
 * 第一引数〜第二引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest011 = function(assert) {
  try {
    dConnect.delete(null, null, function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });


  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest,  uri and header null.',
  DeleteMethodTest.deleteTest011);

/**
 * 第一引数〜第三引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest012 = function(assert) {
  try {
    dConnect.delete(null, null, null, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header and successCallback  null.',
  DeleteMethodTest.deleteTest012);

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest013 = function(assert) {
  try {
    dConnect.delete(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback null.',
  DeleteMethodTest.deleteTest013);

/**
 * 第一引数〜第四引数とOriginにnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest014 = function(assert) {
  try {
    dConnect.setExtendedOrigin(null);
    dConnect.delete(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback and origin null.',
  DeleteMethodTest.deleteTest014);

/// undefined

/**
 * 第一引数〜第二引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest021 = function(assert) {
  try {
    dConnect.delete(undefined, undefined, function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header undefined.',
  DeleteMethodTest.deleteTest021);

/**
 * 第一引数〜第三引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest022 = function(assert) {
  try {
    dConnect.delete(undefined, undefined, undefined, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest,uri and header and successCallback undefined.',
  DeleteMethodTest.deleteTest022);

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest023 = function(assert) {
  try {
    dConnect.delete(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest,uri and header successCallback and errorCallback undefined.',
  DeleteMethodTest.deleteTest023);

/**
 * 第一引数〜第四引数とOriginにundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest024 = function(assert) {
  try {
    dConnect.setExtendedOrigin(undefined);
    dConnect.delete(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest,uri and header successCallback and errorCallback and origin undefined.',
  DeleteMethodTest.deleteTest024);

/// 数字

/**
 * 第一引数〜第二引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest031 = function(assert) {
  try {
    dConnect.delete(123, 123, function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest,  uri and header number.',
  DeleteMethodTest.deleteTest031);

/**
 * 第一引数〜第三引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest032 = function(assert) {
  try {
    dConnect.delete(123, 123, 123, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header and successCallback number.',
  DeleteMethodTest.deleteTest032);

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest033 = function(assert) {
  try {
    dConnect.delete(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback number.',
  DeleteMethodTest.deleteTest033);

/**
 * 第一引数〜第四引とOriginに数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest034 = function(assert) {
  try {
    dConnect.setExtendedOrigin(123);
    dConnect.delete(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback and Origin number.',
  DeleteMethodTest.deleteTest034);

/// 英字

/**
 * 第一引数〜第二引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest041 = function(assert) {
  try {
    dConnect.delete('abc', 'abc', function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header alphabet.',
  DeleteMethodTest.deleteTest041);

/**
 * 第一引数〜第三引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest042 = function(assert) {
  try {
    dConnect.delete('abc', 'abc', 'abc', function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header and successCallback alphabet.',
  DeleteMethodTest.deleteTest042);

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest043 = function(assert) {
  try {
    dConnect.delete('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback alphabet.',
  DeleteMethodTest.deleteTest043);

/**
 * 第一引数〜第四引数とOriginに英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest044 = function(assert) {
  try {
    dConnect.setExtendedOrigin('abc');
    dConnect.delete('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback and origin alphabet.',
  DeleteMethodTest.deleteTest044);



/// 日本語

/**
 * 第一引数〜第二引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest051 = function(assert) {
  try {
    dConnect.delete('あいう', 'あいう', function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header hiragana.',
  DeleteMethodTest.deleteTest051);

/**
 * 第一引数〜第三引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest052 = function(assert) {
  try {
    dConnect.delete('あいう', 'あいう', 'あいう', function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header and successCallback hiragana.',
  DeleteMethodTest.deleteTest052);

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest053 = function(assert) {
  try {
    dConnect.delete('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback hiragana.',
  DeleteMethodTest.deleteTest053);

/**
 * 第一引数〜第四引数とoriginに日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest054 = function(assert) {
  try {
    dConnect.setExtendedOrigin('あいう');
    dConnect.delete('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback and origin hiragana.',
  DeleteMethodTest.deleteTest054);


/// 記号

/**
 * 第一引数〜第二引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest061 = function(assert) {
  try {
    dConnect.delete('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      function(json) {
        assert.ok(false, 'Success.=' + json);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header symbol.',
  DeleteMethodTest.deleteTest061);

/**
 * 第一引数〜第三引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest062 = function(assert) {
  try {
    dConnect.delete('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      function(errorCode, errorMessage) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header and successCallback symbol.',
  DeleteMethodTest.deleteTest062);

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest063 = function(assert) {
  try {
    dConnect.delete('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback symbol.',
  DeleteMethodTest.deleteTest063);

/**
 * 第一引数〜第四引数とOriginに記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest064 = function(assert) {
  try {
    dConnect.setExtendedOrigin('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    dConnect.delete('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback and origin symbol.',
  DeleteMethodTest.deleteTest064);



/// 1000文字

/**
 * 第一引数〜第二引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーコールバックが呼ばれること。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest071 = function(assert) {
  try {
    dConnect.delete('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function(json) {
        assert.ok(false, 'Success.=' + json);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest,  uri and header limit.',
  DeleteMethodTest.deleteTest071);

/**
 * 第一引数〜第三引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest072 = function(assert) {
  try {
    dConnect.delete('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function(errorCode, errorMessage) {
        assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header and successCallback limit.',
  DeleteMethodTest.deleteTest072);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest073 = function(assert) {
  try {
    dConnect.delete('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback limit.',
  DeleteMethodTest.deleteTest073);


/**
 * 第一引数〜第四引数とOriginに1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
DeleteMethodTest.deleteTest074 = function(assert) {
  try {
    dConnect.setExtendedOrigin('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    dConnect.delete('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.test('deleteTest, uri and header successCallback and errorCallback and origin limit.',
  DeleteMethodTest.deleteTest074);






