QUnit.module('EchonetLiteProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * EchonetLiteプロファイルの異常系テストを行うクラス。
 * @class
 */
let EchonetLiteProfileAbnormalTest = {};
/**
 * 定義されていないPOSTメソッドでECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80,0x8F,0xB0,0xB3,0xBB'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('propertyAbnormalTestt001(Calling a post method that does not support.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest001);

/**
 * 定義されていないDELETEメソッドでECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80,0x8F,0xB0,0xB3,0xBB'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
QUnit.test('propertyAbnormalTest002(Calling a delete method that does not support.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest002);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: null
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest003(epc is null.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest003);

/**
 * undefinedでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: undefined
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest004(epc is undefined.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest004);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '1234'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('propertyAbnormalTest005(epc is number.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest005);

/**
 * 英字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: 'abc'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('propertyAbnormalTest006(epc is alphabet.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest006);

/**
 * 日本語でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: 'あいう'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('propertyAbnormalTest007(epc is hiragana.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest007);

/**
 * 特殊記号でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest008(epc is symbol.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest008);

/**
 * 1000文字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&
epc=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest009(epc is limit.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest009);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=null&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: null,
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest010(epc is null.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest010);

/**
 * undefinedでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=undefined&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: undefined,
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest011(epc is undefined.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest011);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=1234&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '1234',
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest012(epc is number.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest012);

/**
 * 英字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=abc&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: 'abc',
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest013(epc is alphabet.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest013);

/**
 * 日本語でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=あいう&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: 'あいう',
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest014(epc is hiragana.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest014);

/**
 * 特殊記号でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc:  '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest015(epc is symbol.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest015);

/**
 * 1000文字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&
epc=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest016 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc:  'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
      value: '49'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest016(epc is limit.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest016);

    /// null
    /// undefined
    /// 数字
    /// 英字
    /// 日本語
    /// 記号
    /// 1000文字

/**
 * nullでvalueを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=null<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest017 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: ''
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest017(value is null.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest017);

/**
 * undefinedでEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=undefined<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest018 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: undefined
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest018(value is undefined.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest018);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest019 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: '1234'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest019(value is out of range.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest019);

/**
 * 数字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=-1234<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest020 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: '-1234'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest020(value is out of range.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest020);

/**
 * 英字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=abc<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest021 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: 'abc'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest021(value is alphabet.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest021);

/**
 * 日本語でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=あいう<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest022 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: 'あいう'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest022(value is hiragana.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest022);

/**
 * 特殊記号でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest023 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~='
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest023(value is symbol.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest023);

/**
 * 1000文字でEPCを指定してECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxxepc=0x80&
value=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest024 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId(),
      epc: '0x80',
      value: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest024(value is limit.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest024);

/**
 * パラメータ指定なしでECHONET Lite プロパティにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileAbnormalTest.propertyAbnormalTest025 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'echonetLite',
    attribute: 'property',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('propertyAbnormalTest025(parameter is not set.)',
    EchonetLiteProfileAbnormalTest.propertyAbnormalTest025);
