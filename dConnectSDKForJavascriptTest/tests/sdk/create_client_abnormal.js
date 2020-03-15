QUnit.module('Create Client Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.createClientメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let CreateClientMethodTest = {};


/* sdk.createClient */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
CreateClientMethodTest.createClientTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.createClient();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }

};
QUnit.test('createClientTest, non exist parameters.',
  CreateClientMethodTest.createClientTest001);
