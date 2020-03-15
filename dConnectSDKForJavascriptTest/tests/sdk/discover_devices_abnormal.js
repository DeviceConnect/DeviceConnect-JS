QUnit.module('Discover Devices Method Test', {
  before: function() {
    TEST_TIMEOUT = 150000;
    init();
  }
});

/**
 * sdk.discoverDevicesメソッドのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 * @class
 */
let DiscoverDevicesTest = {};


/* sdk.discoverDevices */
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
  let done = assert.async();
  try {
    sdk.discoverDevices();
    assert.ok(true, 'Nothing happens');
    done();
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
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
  let done = assert.async();
  try {
    sdk.discoverDevices().then(json => {
      assert.ok(true, 'json: ' + json);
      done();
    }).catch(e => {
      assert.ok(false, 'Call ErrorCallback.');
      done();
    });
  } catch (e) {
    assert.equal(e.message, '2nd argument must be a function for callback.',
      'messsage=2nd argument must be a function for callback.');
    done();
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
  let done = assert.async();
  sdk.discoverDevices().catch(e => {
    assert.ok(false, 'Failed Timeout.');
    done();
  });
  assert.ok(true, 'Nothing happens');
  done();
};

QUnit.test('discoverDevicesTest, uri and successCallback null.', DiscoverDevicesTest.discoverDevicesTest012);
