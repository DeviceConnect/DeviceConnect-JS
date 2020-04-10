QUnit.module('DriveControllerProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * DriveControllerプロファイルの正常系テストを行うクラス。
 * @class
 */
let DriveControllerProfileNormalTest = {};

/**
 * angle=0, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 0,
      speed: 0.1
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest001',
    DriveControllerProfileNormalTest.moveNormalTest001);

/**
 * angle=0, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 0,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest002',
    DriveControllerProfileNormalTest.moveNormalTest002);

/**
 * angle=0, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 0,
      speed: 1.0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest003',
    DriveControllerProfileNormalTest.moveNormalTest003);

/**
 * angle=90, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 0.1
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest004',
    DriveControllerProfileNormalTest.moveNormalTest004);

/**
 * angle=90, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest005',
    DriveControllerProfileNormalTest.moveNormalTest005);

/**
 * angle=90, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 1.0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest006',
    DriveControllerProfileNormalTest.moveNormalTest006);

/**
 * angle=180, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 180,
      speed: 0.1
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest007',
    DriveControllerProfileNormalTest.moveNormalTest007);

/**
 * angle=180, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 180,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest008',
    DriveControllerProfileNormalTest.moveNormalTest008);

/**
 * angle=180, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest009 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 180,
      speed: 1.0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest009',
    DriveControllerProfileNormalTest.moveNormalTest009);

/**
 * angle=270, speed=0.1として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest010 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 270,
      speed: 0.1
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest010',
    DriveControllerProfileNormalTest.moveNormalTest010);

/**
 * angle=270, speed=0.5として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest011 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 270,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest011',
    DriveControllerProfileNormalTest.moveNormalTest011);

/**
 * angle=270, speed=1.0として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest012 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 270,
      speed: 1.0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest012',
    DriveControllerProfileNormalTest.moveNormalTest012);

/**
 * angle=90, speed=0.666666666として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.moveNormalTest013 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 0.666666666
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveNormalTest013',
    DriveControllerProfileNormalTest.moveNormalTest013);

/**
 * 無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.stopNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'stop',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('stopNormalTest001',
    DriveControllerProfileNormalTest.stopNormalTest001);

/**
 * angle=0として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('rotateNormalTest001',
    DriveControllerProfileNormalTest.rotateNormalTest001);

/**
 * angle=90として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('rotateNormalTest002',
    DriveControllerProfileNormalTest.rotateNormalTest002);

/**
 * angle=180として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 180
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('rotateNormalTest003',
    DriveControllerProfileNormalTest.rotateNormalTest003);

/**
 * angle=270として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileNormalTest.rotateNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 270
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('rotateNormalTest004',
    DriveControllerProfileNormalTest.rotateNormalTest004);
