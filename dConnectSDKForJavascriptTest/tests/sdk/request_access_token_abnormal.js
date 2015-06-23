module('Request AccessToken Method Test', {
  setup: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * dConnect.requestAccessTokenメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
var RequestAccessTokenMethodTest = {};


/* dConnect.requestAccessToken */
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
  try {
    dConnect.requestAccessToken();
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }

};
QUnit.asyncTest('requestAccessTokenTest, non exist parameters.',
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
  try {
    dConnect.requestAccessToken(null, null, function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest,  clientId and scope null.',
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
  try {
    dConnect.requestAccessToken(null, null, null, function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback  null.',
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
  try {
    dConnect.requestAccessToken(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback null.',
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
  try {
    var scope = [null];
    dConnect.requestAccessToken(null, scope, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, scope array null.',
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
  try {
    dConnect.get(undefined, undefined, function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    //assert.ok(true, 'Nothing happens');
    //QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope undefined.',
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
  try {
    dConnect.requestAccessToken(undefined, undefined, undefined, function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback undefined.',
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
  try {
    dConnect.requestAccessToken(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback undefined.',
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
  try {
    var scope = [undefined];
    dConnect.requestAccessToken(undefined, scope, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, scope array undefined.',
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
  try {
    dConnect.requestAccessToken(123, 123, function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope number.',
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
  try {
    dConnect.requestAccessToken(123, 123, 123, function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback number.',
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
  try {
    dConnect.requestAccessToken(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback number.',
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
  try {
    var scope = [123];
    dConnect.requestAccessToken(123, scope, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, scope array  number.',
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
  try {
    dConnect.requestAccessToken('abc', 'abc', function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest,  clientId and scope alphabet.',
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
  try {
    dConnect.requestAccessToken('abc', 'abc', 'abc', function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback alphabet.',
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
  try {
    dConnect.requestAccessToken('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback alphabet.',
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
  try {
    var scope = ['abc'];
    dConnect.requestAccessToken('abc', scope, 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback alphabet.',
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
  try {
    dConnect.requestAccessToken('あいう', 'あいう', function(json) {
      assert.ok(false, 'Success.=' + json);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest,  clientId and scope hiragana.',
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
  try {
    dConnect.requestAccessToken('あいう', 'あいう', 'あいう', function(errorCode, errorMessage) {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback hiragana.',
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
  try {
    dConnect.requestAccessToken('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback hiragana.',
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
  try {
    var scope = ['あいう'];
    dConnect.requestAccessToken('あいう', scope, 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, scope array hiragana.',
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
  try {
    dConnect.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      function(json) {
        assert.ok(false, 'Success.=' + json);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest,  clientId and scope symbol.',
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
  try {
    dConnect.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback symbol.',
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
  try {
    dConnect.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
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

QUnit.asyncTest('requestAccessTokenTest, clientId and scope successCallback and errorCallback symbol.',
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
  try {
    var scope = ['!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='];
    dConnect.requestAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      scope,
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, scope array symbol.',
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
  try {
    dConnect.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function(json) {
        assert.ok(false, 'Success.=' + json);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest,  clientId and scope limit.',
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
  try {
    dConnect.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function(errorCode, errorMessage) {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
    assert.ok(true, 'Nothing happens');
    QUnit.start();

  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, clientId and scope and successCallback limit.',
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
  try {
    dConnect.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.asyncTest('requestAccessTokenTest, clientId and scopes successCallback and errorCallback limit.',
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
  try {
    var scope = ['abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'];
    dConnect.requestAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      scope, 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('requestAccessTokenTest, scope array limit.',
  RequestAccessTokenMethodTest.requestAccessTokenTest074);

