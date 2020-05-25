QUnit.module('Canvas Profile Normal Test', {
  before: function() {
    init();
  }, after: function() {
    let img = document.getElementById('images');
    img.style.visibility = 'hidden';
  }
});

/**
 * Canvasプロファイルの異常系テストを行うクラス。
 * @class
 */
let CanvasProfileNormalTest = {};

/**
 * デフォルトのモードでデバイスに画像表示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
CanvasProfileNormalTest.drawImageNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageNormalTest001');

  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: 0,
      y: 0,
      data: blob
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('drawImageNormalTest001(put)', CanvasProfileNormalTest.drawImageNormalTest001);

/**
 * scalesのモードでデバイスに画像表示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
CanvasProfileNormalTest.drawImageNormalTest002 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageNormalTest002');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      mode: 'scales',
      filename: 'test.png',
      mimeType: 'image/png',
      x: 50,
      y: 50,
      data: blob
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('drawImageNormalTest002(mode is scales)', CanvasProfileNormalTest.drawImageNormalTest002);


/**
 * fillsのモードでデバイスに画像表示するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
CanvasProfileNormalTest.drawImageNormalTest003 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageNormalTest003');

  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      mode: 'fills',
      filename: 'test.png',
      mimeType: 'image/png',
      x: -50,
      y: -50,
      data: blob
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('drawImageNormalTest003(mode is fills)', CanvasProfileNormalTest.drawImageNormalTest003);


/**
 * デフォルトのモードでデバイスに画像表示するテストを行う。
 * 画像はURIで指定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
CanvasProfileNormalTest.drawImageNormalTest004 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      uri: 'https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/img_HTMLApplicationManual/image2.png'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('drawImageNormalTest004(put, uri)', CanvasProfileNormalTest.drawImageNormalTest004);


/**
 * デバイスから画像を削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileNormalTest.deleteDrawImageNormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageNormalTest001');

  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      data: blob
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    setTimeout( () => {
      sdk.delete({
        profile: dConnectSDK.constants.canvas.PROFILE_NAME,
        attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
        params: {
          serviceId: getCurrentServiceId()
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        done();
      });
    }, 10 * 1000);

  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('deleteDrawImageNormalTest001(delete)', CanvasProfileNormalTest.deleteDrawImageNormalTest001);
