QUnit.module('Get System Info Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.getSystemInfoメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let GetSystemInfoMethodTest = {};


/* sdk.getSystemInfo */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
GetSystemInfoMethodTest.getSystemInfoTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemInfo();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('getSystemInfoTest, non exist parameters.',
  GetSystemInfoMethodTest.getSystemInfoTest001);


/// null

/**
 * 第一引数にnullを設定した場合のテストを行う。
 *
 * <p>
 * 【期待する動作】<br/>
 * ・何も起こらないこと。<br/>
 * </p>
 */
GetSystemInfoMethodTest.getSystemInfoTest011 = function(assert) {
  let done = assert.async();
  try {
    sdk.getSystemInfo().then(json => {
      assert.ok(true, 'Success.');
      done();
    });
  } catch (e) {
    assert.ok(false, e.message);
    done();
  }
};

QUnit.test('getSystemInfoTest,  successCallback null.',
  GetSystemInfoMethodTest.getSystemInfoTest011);
