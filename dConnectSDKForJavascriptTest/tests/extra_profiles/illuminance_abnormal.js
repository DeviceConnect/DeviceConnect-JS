QUnit.module('IlluminanceProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * Illuminanceプロファイルの異常系テストを行うクラス。
 * @class
 */
let IlluminanceProfileAbnormalTest = {};

/**
 * 定義されていないPUTメソッドで照度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /illuminance?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
IlluminanceProfileAbnormalTest.illuminanceAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'illuminance',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('illuminanceAbnormalTest001',
    IlluminanceProfileAbnormalTest.illuminanceAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで照度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /illuminance?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
IlluminanceProfileAbnormalTest.illuminanceAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'illuminance',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('illuminanceAbnormalTest002',
    IlluminanceProfileAbnormalTest.illuminanceAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで照度計にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /illuminance?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
IlluminanceProfileAbnormalTest.illuminanceAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'illuminance',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });

};
QUnit.test('illuminanceAbnormalTest003',
    IlluminanceProfileAbnormalTest.illuminanceAbnormalTest003);
