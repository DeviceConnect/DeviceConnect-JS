QUnit.module('LightProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Lightプロファイルの正常系テストを行うクラス。
 * @class
 */
let LightProfileNormalTest = {};

/**
 * ライト情報を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.getLightIdNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: 'light',
    serviceId: serviceId
  }).then(json => {
    assert.ok(true, 'result=' + json.result + ", light:" + json.lights[0].lightId);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getLightIdNormalTest001(get)', LightProfileNormalTest.getLightIdNormalTest001);

/**
 * ライトを点灯するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.lightOnNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  getLightId().then(json => {
    if (json.lights) {
      for (let i = 0; i < json.lights.length; i++) {
        sdk.post({
          profile: 'light',
          serviceId: serviceId,
          lightId: json.lights[i].lightId,
          flashing: '500,500,500,500,500,500'
        }).then(json => {
          assert.ok(true, 'result=' + json.result);
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
              'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
        });
      }
      setTimeout(function() {
        done();
      }, 5 * 1000);
    } else {
      done();
    }
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('lightOnNormalTest001(post)', LightProfileNormalTest.lightOnNormalTest001);

/**
 * ライトのステータスを変更するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.statusChangeNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  getLightId().then(json => {
    if (json.lights) {
      for (let i = 0; i < json.lights.length; i++) {
        sdk.put({
          profile: 'light',
          serviceId: serviceId,
          lightId: json.lights[i].lightId,
          name: 'Hue Light Test',
          color: 'ff0000',
          flashing: '500,500,500,500,500,500'
        }).then(json => {
          assert.ok(true, 'result=' + json.result);
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
              'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
        });
      }
      setTimeout(function() {
        done();
      }, 5 * 1000);
    } else {
      done();
    }
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('statusChangeNormalTest001(put)', LightProfileNormalTest.statusChangeNormalTest001);


/**
 * ライトを消灯するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /light?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ること。<br/>
 * </p>
 */
LightProfileNormalTest.lightOffNormalTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  getLightId().then(json => {
    if (json.lights) {
      for (let i = 0; i < json.lights.length; i++) {
        sdk.post({
          profile: 'light',
          serviceId: serviceId,
          lightId: json.lights[i].lightId
        }).then(json => {
          assert.ok(true, 'result=' + json.result);
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode),
              'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
        });
      }
      setTimeout(function() {
        for (let i = 0; i < json.lights.length; i++) {
          sdk.delete({
            profile: 'light',
            serviceId: serviceId,
            lightId: json.lights[i].lightId
          }).then(json => {
            assert.ok(true, 'result=' + json.result);
          }).catch(e => {
            assert.ok(checkErrorCode(e.errorCode),
                'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
          });
        }
      }, 2000);
      setTimeout(function() {
        done();
      }, 3 * 1000);
    } else {
      done();
    }
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('lightOffNormalTest001(delete)', LightProfileNormalTest.lightOffNormalTest001);
