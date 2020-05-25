QUnit.module('SDK Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * SDKで用意されているその他のメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let SDKMethodTest = {};


/* sdk.checkDeviceConnect */
////etc
/**
 *　引数を無しにした場合のテストを行う
 *
 * <p>
 * 【期待する動作】<br/>
 * ・エラーが発生すること。<br/>
 * </p>
 */
SDKMethodTest.checkDeviceConnectTest001 = function(assert) {
  let done = assert.async();
  try {
    sdk.checkDeviceConnect();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
  }
};
QUnit.test('checkDeviceConnectTest, non exist parameters.',
  SDKMethodTest.checkDeviceConnectTest001);
