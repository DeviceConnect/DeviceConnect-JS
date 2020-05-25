QUnit.module('DriveControllerProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * DriveControllerプロファイルの異常系テストを行うクラス。
 * @class
 */

let DriveControllerProfileAbnormalTest = {};

/**
 * 定義されていないGETメソッドで指定された方向に無線移動機器の移動を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=90&speed=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('moveAbnormalTest001(get not support method.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest001);

/**
 * 定義されていないPUTメソッドで指定された方向に無線移動機器の移動を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=90&speed=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('moveAbnormalTest002(put not support method.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで指定された方向に無線移動機器の移動を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=90&speed=0.5<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90,
      speed: 0.5
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('moveAbnormalTest003(delete not support method.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest003);

/**
 * POSTメソッドでangleとspeedを設定せずに無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest004(angle and speed not set)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest004);

/**
 * POSTメソッドでangle=かきくけこ, speed=あいうえおとして無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle='かきくけこ'&speed='あいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 'かきくけこ',
      speed: 'あいうえお'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest005(Set string in angle and speed.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest005);

/**
 * POSTメソッドでangle=12345, speed=67890として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=12345&speed=67890<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 12345,
      speed: 67890
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest006(Set big number in angle and speed.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest006);

/**
 * POSTメソッドでangle=abc, speed=defとして無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle='abc'&speed='def'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 'abc',
      speed: 'def'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest007(Set a string in angle and speed.)',
    DriveControllerProfileAbnormalTest.moveAbnormalTest007);


/**
 * POSTメソッドでangle=10000, speed=0.8として無線移動機器に移動リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/move?serviceId=xxxx&accessToken=xxx&angle=10000&speed=0.8<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.moveAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'move',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 10000,
      speed: 0.8
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest012',
    DriveControllerProfileAbnormalTest.moveAbnormalTest012);



/**
 * 定義されていないGETメソッドで無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.stopAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'drivecontroller',
    attribute: 'stop',
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
QUnit.test('stopAbnormalTest001(Calling a get method that does not support.)',
    DriveControllerProfileAbnormalTest.stopAbnormalTest001);

/**
 * 定義されていないPUTメソッドで無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.stopAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'stop',
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
QUnit.test('stopAbnormalTest002(Calling a put method that does not support.)',
    DriveControllerProfileAbnormalTest.stopAbnormalTest002);

/**
 * 定義されていないPOSTメソッドで無線移動機器の移動停止依頼を送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/stop?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.stopAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'stop',
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
QUnit.test('stopAbnormalTest003(Calling a post method that does not support.)',
    DriveControllerProfileAbnormalTest.stopAbnormalTest003);

/**
 * 定義されていないGETメソッドで指定された向きに無線移動機器の回転を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('rotateAbnormalTest001(Calling a get method that does not support.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest001);

/**
 * 定義されていないPOSTメソッドで指定された向きに無線移動機器の回転を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('rotateAbnormalTest002(Calling a post method that does not support.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest002);

/**
 * 定義されていないDELETEメソッドで指定された向きに無線移動機器の回転を開始させるテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=90<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 90
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('rotateAbnormalTest003(Calling a delete method that does not support.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest003);

/**
 * PUTメソッドでangleを指定せずに無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('rotateAbnormalTest004(Calling a put method without setting of angle.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest004);

/**
 * PUTメソッドでangle=あいうえおとして無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle='あいうえお'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 'あいうえお'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('rotateAbnormalTest005(Calling a put method with angle=あいうえお.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest005);

/**
 * PUTメソッドでangle=12345として無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle=12345<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 12345
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('rotateAbnormalTest006(Calling a put method with angle=12345.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest006);

/**
 * PUTメソッドでangle=abcとして無線移動機器に回転リクエストを送るテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /drivecontroller/rotate?serviceId=xxxx&accessToken=xxx&angle='abc'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
DriveControllerProfileAbnormalTest.rotateAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'drivecontroller',
    attribute: 'rotate',
    params: {
      serviceId: getCurrentServiceId(),
      angle: 'rotate'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('rotateAbnormalTest007(Calling a put method with angle=abc.)',
    DriveControllerProfileAbnormalTest.rotateAbnormalTest007);
