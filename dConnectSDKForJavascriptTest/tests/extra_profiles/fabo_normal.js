QUnit.module('FaBoProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * FaBoプロファイルの正常系テストを行うクラス。
 * @class
 */
let FaBoProfileNormalTest = {};

/**
 * 仮想サービス一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・サービス一覧が取得できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.getFaBoServiceNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(json.services != undefined, 'services=' + JSON.stringify(json.services));
    done();
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getFaBoServiceNormalTest001',
        FaBoProfileNormalTest.getFaBoServiceNormalTest001);


/**
 * 新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method:POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.postFaBoServiceNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: 'fabo',
    attribute: 'service',
    serviceId: getCurrentServiceId(),
    name: 'TEST'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('postFaBoServiceNormalTest001', FaBoProfileNormalTest.postFaBoServiceNormalTest001);

/**
 * 仮想サービス更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method:PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・サービス名が更新できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.putFaBoServiceNormalTest001 = function(assert) {
  let done = assert.async();
  createFaBoService().then(vid => {
    sdk.post({
      profile: 'fabo',
      attribute: 'service',
      serviceId: getCurrentServiceId(),
      vid: vid,
      name: 'TEST UPDATE'
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }).catch(e => {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }).finally(() => {
      FaBoProfileAbnormalTest.deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('putFaBoServiceNormalTest001',
      FaBoProfileNormalTest.putFaBoServiceNormalTest001);

/**
 * 仮想サービス削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method:DELETE<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・サービスが削除できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.deleteFaBoServiceNormalTest001 = function(assert) {
  let done = assert.async();
  createFaBoService().then(vid => {
    sdk.delete({
      profile: 'fabo',
      attribute: 'service',
      serviceId: getCurrentServiceId(),
      vid: vid
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('deleteFaBoServiceNormalTest001',
        FaBoProfileNormalTest.deleteFaBoServiceNormalTest001);

/**
 * プロファイル一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.getFaBoProfileNormalTest001 = function(assert) {
  let done = assert.async();
  createFaBoService().then(vid => {
    sdk.get({
      profile: 'fabo',
      attribute: 'service',
      serviceId: getCurrentServiceId(),
      vid: vid
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }).catch(e => {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }).finally(() => {
      deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('getFaBoProfileNormalTest001',
    FaBoProfileNormalTest.getFaBoProfileNormalTest001);


/**
 * プロファイル作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=xxx&type=1&pins=D2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.postFaBoServiceNormalTest001 = function(assert) {
  let done = assert.async();
  createFaBoService().then(vid => {
    sdk.post({
      profile: 'fabo',
      attribute: 'service',
      serviceId: getCurrentServiceId(),
      vid: vid,
      type: 1,
      pins: 'D2'
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }).catch(e => {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }).finally(() => {
      deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('postFaBoServiceNormalTest001',
      FaBoProfileNormalTest.postFaBoServiceNormalTest001);

/**
 * プロファイルを更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=xxx&type=1&pins=D2,D3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・プロファイルを更新できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.putFaBoProfileNormalTest001 = function(assert) {
  let done = assert.async();
  createFaBoProfile().then(vid => {
    sdk.post({
      profile: 'fabo',
      attribute: 'profile',
      serviceId: getCurrentServiceId(),
      vid: vid,
      type: 1,
      pins: 'D2,D3'
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }).catch(e => {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }).finally(() => {
      deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('putFaBoProfileNormalTest001', FaBoProfileNormalTest.putFaBoProfileNormalTest001);


/**
 * プロファイルを削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=xxx&type=1&pins=D2,D3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.deleteFaBoServiceNormalTest001 = function(assert) {
  let done = assert.async();
  createFaBoProfile().then(vid => {
    sdk.delete({
      profile: 'fabo',
      attribute: 'profile',
      serviceId: getCurrentServiceId(),
      vid: vid,
      type: 1
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }).catch(e => {
      assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }).finally(() => {
      deleteFaBoService(vid);
      done();
    });
  }).catch(e => {
    assert.ok(false, 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('deleteFaBoServiceNormalTest001', FaBoProfileNormalTest.deleteFaBoServiceNormalTest001);
