QUnit.module('DiceProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Diceプロファイルの正常系テストを行うクラス。
 * @class
 */
let DiceProfileNormalTest = {};

/**
 * ダイスの目を取得する
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /dice/ondice?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * ・ダイスの目が送られてくること。<br/>
 * </p>
 */
DiceProfileNormalTest.ondiceNormalTest = function(assert) {
  let params = {
    profile: 'dice',
    attribute: 'ondice',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
    let json = JSON.parse(message);
    if (json.profile === 'dice' && json.attribute === 'ondice') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('ondiceNormalTest', DiceProfileNormalTest.ondiceNormalTest);

/**
 * 磁力センサー値を通知するイベント
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /dice/magnetometer/onmagnetometer?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
DiceProfileNormalTest.onmagnetometerNormalTest = function(assert) {
  let params = {
    profile: 'dice',
    interface: 'magnetometer',
    attribute: 'ondice',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 2000, message => {
    let json = JSON.parse(message);
    if (json.profile === 'dice' &&
        json.interface === 'magnetometer' &&
        json.attribute === 'onmagnetometer') {
      assert.ok(true, message);
      return true;
    }
    return false;
  });
};
QUnit.test('onmagnetometerNormalTest.',
    DiceProfileNormalTest.onmagnetometerNormalTest);
