QUnit.module('CameraProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * Cameraプロファイルの異常系テストを行うクラス。
 * @class
 */
let CameraProfileAbnormalTest = {};

/**
 * directionにtestを指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='test'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'test',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest001(Calling direction parameter in test.)',
    CameraProfileAbnormalTest.zoomAbnormalTest001);

/**
 * directionに空文字を指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=''&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 */
CameraProfileAbnormalTest.zoomAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: '',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest002(Calling direction parameter in empty string.)',
    CameraProfileAbnormalTest.zoomAbnormalTest002);

/**
 * directionに数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=1000&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 1000,
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest003(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest003);

/**
 * directionに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=1000000000000000000000000000000000000000000000000000000000&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 1000000000000000000000000000000000000000000000000000000000,
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest004(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest004);

/**
 * directionに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction=-1&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: -1,
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest005(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest005);

/**
 * directionに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='あいうえおあいうえお...'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest006(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest006);

/**
 * directionに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='abcdefgabcdefgabcdefgabcdefg...'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest007(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest007);

/**
 * directionに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest008(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest008);

/**
 * directionを指定せずにズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest009(Calling no paramters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest009);

/**
 * movementにtestを指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='test'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 'test'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest010(Calling movement parameter in test.)',
    CameraProfileAbnormalTest.zoomAbnormalTest010);

/**
 * movementに空文字を指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=''<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: ''
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest011(Calling movement parameter in empty string.)',
    CameraProfileAbnormalTest.zoomAbnormalTest011);

/**
 * movementに数値を指定してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 1000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest012(Calling movement parameter in empty string.)',
    CameraProfileAbnormalTest.zoomAbnormalTest012);

/**
 * movementに非常に桁の大きな数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=1000000000000000000000000000000000000000000000000000000000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 1000000000000000000000000000000000000000000000000000000000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest013(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest013);

/**
 * movementに非常に桁のマイナスの数値を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement=-1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: -1
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest014(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest014);

/**
 * movementに全角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='あいうえおあいうえお...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' +
      'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('zoomAbnormalTest015(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest015);

/**
 * movementに半角文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='abcdefgabcdefgabcdefgabcdefg...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest016 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg' +
      'abcdefgabcdefgabcdefgabcdefg'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest016(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest016);

/**
 * movementに特殊文字を入力してズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()...'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest017 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()' +
      '!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()!#$%&()'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest017(Calling direction parameter in special characters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest017);

/**
 * movementを指定せずにズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest018 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('zoomAbnormalTest018(Calling no paramters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest018);

/**
 * movement,directionを指定せずにズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest019 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
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
QUnit.test('zoomAbnormalTest019(Calling no paramters.)',
    CameraProfileAbnormalTest.zoomAbnormalTest019);

/**
 * 定義していないPOSTメソッドでズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest020 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('zoomAbnormalTest020(Calling a post method that does not support.)',
    CameraProfileAbnormalTest.zoomAbnormalTest020);

/**
 * 定義していないDELETEメソッドでズームにアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /camera/zoom?serviceId=xxx&accessToken=xxx&direction='in'&movement='start'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
CameraProfileAbnormalTest.zoomAbnormalTest021 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'camera',
    attribute: 'zoom',
    params: {
      serviceId: getCurrentServiceId(),
      direction: 'in',
      movement: 'start'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 3);
    done();
  });
};
QUnit.test('zoomAbnormalTest021(Calling a delete method that does not support.)',
    CameraProfileAbnormalTest.zoomAbnormalTest021);
