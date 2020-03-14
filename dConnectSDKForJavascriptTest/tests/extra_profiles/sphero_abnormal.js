QUnit.module('SpheroProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * RemoteControllerプロファイルの異常系テストを行うクラス。
 * @class
 */
let SpheroProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでonquaternionイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /sphero/onquaternion?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
SpheroProfileAbnormalTest.onQuaternionAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'sphero',
    interface: 'quaternion',
    attribute: 'onquaternion',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onQuaternionAbnormalTest001',
    SpheroProfileAbnormalTest.onQuaternionAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでonquaternionイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /sphero/onlocator?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
SpheroProfileAbnormalTest.onLocatorAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'sphero',
    interface: 'locator',
    attribute: 'onlocator',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onLocatorAbnormalTest001',
    SpheroProfileAbnormalTest.onLocatorAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでoncollisionイベントにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /sphero/oncollision?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
SpheroProfileAbnormalTest.onCollisionAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'sphero',
    interface: 'collision',
    attribute: 'oncollision',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('onCollisionAbnormalTest001',
    SpheroProfileAbnormalTest.onCollisionAbnormalTest001);
