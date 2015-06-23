module('Authorization Method Test', {
  setup: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * dConnect.authorizationメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
var AuthorizationMethodTest = {};


/* dConnect.authorization */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest001 = function(assert) {
  try {
    dConnect.authorization();
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    QUnit.start();
  }

};
QUnit.asyncTest('authorizationTest, non exist parameters.',
  AuthorizationMethodTest.authorizationTest001);


/// null

/**
 * 第一引数〜第二引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest011 = function(assert) {
  try {
    dConnect.authorization(null, null, function(clientId, accessToken) {
      assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName null.',
  AuthorizationMethodTest.authorizationTest011);

/**
 * 第一引数〜第三引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest012 = function(assert) {
  try {
    dConnect.authorization(null, null, null, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  null.',
  AuthorizationMethodTest.authorizationTest012);

/**
 * 第一引数〜第四引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest013 = function(assert) {
  try {
    dConnect.authorization(null, null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback null.',
  AuthorizationMethodTest.authorizationTest013);
/**
 * scope値がnullの配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest014 = function(assert) {
  try {
    var scopes = [null, null];
    dConnect.authorization(scopes, null, null, null);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope null array.',
  AuthorizationMethodTest.authorizationTest014);

/// undefined

/**
 * 第一引数〜第二引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest021 = function(assert) {
  try {
    dConnect.authorization(undefined, undefined, function(clientId, accessToken) {
      assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName undefined.',
  AuthorizationMethodTest.authorizationTest021);

/**
 * 第一引数〜第三引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest022 = function(assert) {
  try {
    dConnect.authorization(undefined, undefined, undefined, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  undefined.',
  AuthorizationMethodTest.authorizationTest022);

/**
 * 第一引数〜第四引数にundefinedを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest023 = function(assert) {
  try {
    dConnect.authorization(undefined, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback undefined.',
  AuthorizationMethodTest.authorizationTest023);
/**
 * scope値がundefinedの配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest024 = function(assert) {
  try {
    var scopes = [undefined, undefined];
    dConnect.authorization(scopes, undefined, undefined, undefined);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope undefined array.',
  AuthorizationMethodTest.authorizationTest024);


/// 数字

/**
 * 第一引数〜第二引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest031 = function(assert) {
  try {
    dConnect.authorization(123, 123, function(clientId, accessToken) {
      assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName number.',
  AuthorizationMethodTest.authorizationTest031);

/**
 * 第一引数〜第三引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest032 = function(assert) {
  try {
    dConnect.authorization(123, 123, 123, function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  number.',
  AuthorizationMethodTest.authorizationTest032);

/**
 * 第一引数〜第四引数に数字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest033 = function(assert) {
  try {
    dConnect.authorization(123, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback number.',
  AuthorizationMethodTest.authorizationTest033);
/**
 * scope値が数字の配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest034 = function(assert) {
  try {
    var scopes = [123, 123];
    dConnect.authorization(scopes, 123, 123, 123);
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope number array.',
  AuthorizationMethodTest.authorizationTest034);


/// 英字

/**
 * 第一引数〜第二引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest041 = function(assert) {
  try {
    dConnect.authorization('abc', 'abc', function(clientId, accessToken) {
      assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName alphabet.',
  AuthorizationMethodTest.authorizationTest041);

/**
 * 第一引数〜第三引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest042 = function(assert) {
  try {
    dConnect.authorization('abc', 'abc', 'abc', function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  alphabet.',
  AuthorizationMethodTest.authorizationTest042);

/**
 * 第一引数〜第四引数に英字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest043 = function(assert) {
  try {
    dConnect.authorization('abc', 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback alphabet.',
  AuthorizationMethodTest.authorizationTest043);
/**
 * scope値が英字の配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest044 = function(assert) {
  try {
    var scopes = ['abc', 'abc'];
    dConnect.authorization(scopes, 'abc', 'abc', 'abc');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope number alphabet.',
  AuthorizationMethodTest.authorizationTest044);

/// 日本語

/**
 * 第一引数〜第二引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest051 = function(assert) {
  try {
    dConnect.authorization('あいう', 'あいう', function(clientId, accessToken) {
      assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName hiragana.',
  AuthorizationMethodTest.authorizationTest051);

/**
 * 第一引数〜第三引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest052 = function(assert) {
  try {
    dConnect.authorization('あいう', 'あいう', 'あいう', function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  hiragana.',
  AuthorizationMethodTest.authorizationTest052);

/**
 * 第一引数〜第四引数に日本語を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest053 = function(assert) {
  try {
    dConnect.authorization('あいう', 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback hiragana.',
  AuthorizationMethodTest.authorizationTest053);
/**
 * scope値が日本語の配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest054 = function(assert) {
  try {
    var scopes = ['あいう', 'あいう'];
    dConnect.authorization(scopes, 'あいう', 'あいう', 'あいう');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope number hiragana.',
  AuthorizationMethodTest.authorizationTest054);


/// 記号

/**
 * 第一引数〜第二引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest061 = function(assert) {
  try {
    dConnect.authorization('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function(clientId, accessToken) {
      assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName symbol.',
  AuthorizationMethodTest.authorizationTest061);

/**
 * 第一引数〜第三引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest062 = function(assert) {
  try {
    dConnect.authorization('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', function(errorCode, errorMessage) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
      QUnit.start();
    });
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  symbol.',
  AuthorizationMethodTest.authorizationTest062);

/**
 * 第一引数〜第四引数に記号を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest063 = function(assert) {
  try {
    dConnect.authorization('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback symbol.',
  AuthorizationMethodTest.authorizationTest063);
/**
 * scope値が記号の配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest064 = function(assert) {
  try {
    var scopes = ['!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='];
    dConnect.authorization(scopes, '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope number symbol.',
  AuthorizationMethodTest.authorizationTest064);


/// 1000文字

/**
 * 第一引数〜第二引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest071 = function(assert) {
  try {
    dConnect.authorization('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      function(clientId, accessToken) {
        assert.ok(false, 'Success.=' + clientId + ", " + accessToken);
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

QUnit.asyncTest('authorizationTest,  scope and applicationName limit.',
  AuthorizationMethodTest.authorizationTest071);

/**
 * 第一引数〜第三引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest072 = function(assert) {
  try {
    dConnect.authorization('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.asyncTest('authorizationTest, scope and applicationname and successCallback  limit.',
  AuthorizationMethodTest.authorizationTest072);

/**
 * 第一引数〜第四引数に1000文字を設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest073 = function(assert) {
  try {
    dConnect.authorization('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
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

QUnit.asyncTest('authorizationTest, scope and applicationname successCallback and errorCallback limit.',
  AuthorizationMethodTest.authorizationTest073);
/**
 * scope値が1000文字の配列を入れる。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
AuthorizationMethodTest.authorizationTest074 = function(assert) {
  try {
    var scopes = ['abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'];
    dConnect.authorization(scopes, 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
    assert.ok(true, 'Nothing happens');
    QUnit.start();
  } catch (e) {
    assert.ok(false, e.message);
    QUnit.start();
  }
};

QUnit.asyncTest('authorizationTest, scope number limit.',
  AuthorizationMethodTest.authorizationTest074);
