QUnit.module('DiceProfileAbnomalTest', {
  before: function() {
    init();
  }
});

/**
 * Diceプロファイルの異常系テストを行うクラス。
 * @class
 */
let DiceProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでダイスロールイベントにアクセスするテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /dice/ondice?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DiceProfileAbnormalTest.onDiceAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'dice',
    attribute: 'ondice',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onDiceAbnormalTest001(post not support method)',
    DiceProfileAbnormalTest.onDiceAbnormalTest001);


/**
 * 定義されていないPOSTメソッドで磁力計取得イベントにアクセスするテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /dice/onmagnetometer?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DiceProfileAbnormalTest.onMagnetometerAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'dice',
    interface: 'magnetometer',
    attribute: 'onmagnetometer',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onMagnetometerAbnormalTest001(post not support method.)',
    DiceProfileAbnormalTest.onMagnetometerAbnormalTest001);

/**
 * 定義されていないGETメソッドでダイスロールイベントにアクセスするテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /dice/ondice?serviceId=xxxx&accessToken=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DiceProfileAbnormalTest.onMagnetometerAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'dice',
    interface: 'magnetometer',
    attribute: 'onmagnetometer',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('onMagnetometerAbnormalTest002(get not support method.)',
    DiceProfileAbnormalTest.onMagnetometerAbnormalTest002);
