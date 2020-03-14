QUnit.module('FaBoProfileAbnormalTest', {
  before: function() {
    init();
  }
});

/**
 * FaBoプロファイルの正常系テストを行うクラス。
 * @class
 */
let FaBoProfileAbnormalTest = {};

/**
 * nameを指定せずに新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoServiceAbnormalTest001',
        FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest001);

/**
 * nameに32文字を超える文字を指定して新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=0123456789012345678901234567890123<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest002 = function(assert) {
    let done = assert.async();
    sdk.post({
      profile: 'fabo',
      attribute: 'service',
      serviceId: getCurrentServiceId(),
      name: "0123456789012345678901234567890123"
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
};
QUnit.test('postFaBoServiceAbnormalTest002',
      FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest002);

/**
 * nameに空文字を指定して新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest003 = function(assert) {
    let done = assert.async();
    sdk.post({
      profile: 'fabo',
      attribute: 'service',
      serviceId: getCurrentServiceId(),
      name: ""
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
      done();
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
      done();
    });
};
QUnit.test('postFaBoServiceAbnormalTest003',
    FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest003);


/**
 * vidを指定せずに仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    name: "TEST"
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putFaBoServiceAbnormalTest001', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest001);

/**
 * nameを指定せずに仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    vid: "mouse_service_id"
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putFaBoServiceAbnormalTest002', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest002);

/**
 * nameを32文字を超える文字列を指定して仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&name=0123456789012345678901234567890123<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    vid: "mouse_service_id",
    name: '0123456789012345678901234567890123'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putFaBoServiceAbnormalTest003',
      FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest003);

/**
 * nameを空文字を指定して仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    vid: "mouse_service_id",
    name: ''
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putFaBoServiceAbnormalTest004',
    FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest004);


/**
 * vidに存在しないidを指定して仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=001&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    vid: "001",
    name: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('putFaBoServiceAbnormalTest005', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest005);

/**
 * vidを指定しないで仮想サービス削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=001&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoServiceAbnormalTest001',
      FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest001);

/**
 * vidに存在しないidを指定して仮想サービス削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=001&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    vid: '001'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoServiceAbnormalTest002',
        FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest002);


/**
 * vidを指定せずにプロファイル一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('getFaBoProfileAbnormalTest001',
      FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest001);



/**
 * vidに存在しないvidを指定してプロファイル一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=001<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: '001'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('getFaBoProfileAbnormalTest002',
    FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest002);


/**
 * vidを指定せずにプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest001',
    FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest001);



/**
 * vidを存在しないidを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=001<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: '001'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest002',
      FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest002);


/**
 * typeに存在しないtypeを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=111111<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id',
    type: 111111
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest003', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest003);



/**
 * pinsを指定しないでプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id',
    type: 1
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest004',
        FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest004);

/**
 * pinsに存在しないピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1&pins=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id',
    type: 1,
    pins: '1000'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest005',
    FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest005);


/**
 * pinsに文字列を指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1&pins=1,,,1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id',
    type: 1,
    pins: 'test'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest007', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest007);



/**
 * pinsに既に使用されているピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=3&pins=D2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest008 = function(assert) {
  let done = assert.async();
  createFaBoProfile().then(vid => {
    sdk.post({
      profile: 'fabo',
      attribute: 'profile',
      serviceId: getCurrentServiceId(),
      vid: vid,
      type: 3,
      pins: 'D2'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      FaBoProfileAbnormalTest.deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest008',
    FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest008);

/**
 * 複数のピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=2&pins=A1,A2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest009 = function(assert) {
  let done = assert.async();
  createFaBoProfile().then(vid => {
    sdk.post({
      profile: 'fabo',
      attribute: 'profile',
      serviceId: getCurrentServiceId(),
      vid: vid,
      type: 2,
      pins: 'A1,A2'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      FaBoProfileAbnormalTest.deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest009',
      FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest009);


/**
 * アナログを要求しているプロファイルにデジタルピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=2&pins=D4<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest010 = function(assert) {
  let done = assert.async();
  createFaBoProfile().then(vid => {
    sdk.post({
      profile: 'fabo',
      attribute: 'profile',
      serviceId: getCurrentServiceId(),
      vid: vid,
      type: 2,
      pins: 'D4'
    }).then(json => {
      assert.ok(false, 'json: ' + JSON.stringify(json));
    }).catch(e => {
      checkSuccessErrorCode(assert, e, 10);
    }).finally(() => {
      FaBoProfileAbnormalTest.deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('postFaBoProfileAbnormalTest010',
      FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest010);

/**
 * パラメータを指定しないでプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoProfileAbnormalTest001',
 FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest001);

/**
 * vidに不正な値を指定してプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=001<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: '001'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoProfileAbnormalTest002',
        FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest002);

/**
 * typeを指定しないでプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoProfileAbnormalTest003',
      FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest003);

/**
 * typeを存在しない値を指定してプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id',
    type: 1000
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoProfileAbnormalTest004',
      FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004);


/**
 * typeに文字列を指定してプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: 'fabo',
    attribute: 'profile',
    serviceId: getCurrentServiceId(),
    vid: 'mouse_service_id',
    type: 'TEST'
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('deleteFaBoProfileAbnormalTest004',
      FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004);
