QUnit.module('Canvas Profile Abnormal Test', {
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
let CanvasProfileAbnormalTest = {};
/**
 * 定義されていないPUTメソッドで画像表示にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest001 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest001');
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest001(put)', CanvasProfileAbnormalTest.drawImageAbnormalTest001);

/**
 * 定義されていないGETメソッドで画像表示にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest002 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
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
QUnit.test('drawImageAbnormalTest002(get)', CanvasProfileAbnormalTest.drawImageAbnormalTest002);

/**
 * mimeTypeにnumber型の値を指定した場合に画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType=100&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに10が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest003 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest003');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 100,
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest003', CanvasProfileAbnormalTest.drawImageAbnormalTest003);

/**
 * mimeTypeに文字列で数値を指定した場合に画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="100"&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest004 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest004');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: '100',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest004', CanvasProfileAbnormalTest.drawImageAbnormalTest004);

/**
 * mimeTypeに全角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="あいうえお...""&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest005 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest005');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'あいうえお',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest005', CanvasProfileAbnormalTest.drawImageAbnormalTest005);

/**
 * mimeTypeに半角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="abcdefg...""&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest006 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest006');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'abcdefg',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest006', CanvasProfileAbnormalTest.drawImageAbnormalTest006);

/**
 * mimeTypeに特殊文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="#$%&'()...""&data=xxx&dx=0&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest007 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest007');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: '!"#$%&\'()-^¥@[;:],./__?<}*+{`|~=',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest007', CanvasProfileAbnormalTest.drawImageAbnormalTest007);

/**
 * xに全角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&x="あいうえお..."&y=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに10が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest008 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest008');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: 'あいうえお',
      y: 0,
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};

QUnit.test('drawImageAbnormalTest008', CanvasProfileAbnormalTest.drawImageAbnormalTest008);

/**
 * xに半角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&x="abcdefg..."&y=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに10が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest009 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest009');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: 'abcdefg',
      y: 0,
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest009', CanvasProfileAbnormalTest.drawImageAbnormalTest009);

/**
 * xに特殊文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&dx="#$%&'()..."&dy=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest010 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest010');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=',
      y: 0,
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest010', CanvasProfileAbnormalTest.drawImageAbnormalTest010);

/**
 * dxに全角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&x=0&y="あいうえお..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest011 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest011');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: 0,
      y: 'あいうえお',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest011', CanvasProfileAbnormalTest.drawImageAbnormalTest011);

/**
 * dxに半角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&x=0&y="abcdefg..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに10が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest012 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest012');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: 0,
      y: 'abcdefg',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest012', CanvasProfileAbnormalTest.drawImageAbnormalTest012);

/**
 * dxに特殊文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&mimeType="image/png"&data=xxx&dx=0&dy="#$%&'()..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest013 = function(assert) {
  let img = document.getElementById('images');
  img.style.visibility = 'visible';

  let blob = draw('drawImageAbnormalTest013');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      filename: 'test.png',
      mimeType: 'image/png',
      x: 0,
      y: '!"#$%&\'()=~|`{+*}<>?__/.,]:;[@¥^-',
      data: blob
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('drawImageAbnormalTest013', CanvasProfileAbnormalTest.drawImageAbnormalTest013);

/**
 * uriに半角文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&uri="abcdefg..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに10が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      uri: 'abcdefg'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
/*
QUnit.test('drawImageAbnormalTest014', CanvasProfileAbnormalTest.drawImageAbnormalTest014);
*/
/**
 * uriに特殊文字で値を指定して画像描画にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /canvas/drawimage?serviceId=xxxx&accessToken=xxx&uri="#$%&'()..."<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * ・errCodeに3が返ってくること。<br/>
 * </p>
 */
CanvasProfileAbnormalTest.drawImageAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.canvas.PROFILE_NAME,
    attribute: dConnectSDK.constants.canvas.ATTR_DRAWIMAGE,
    params: {
      serviceId: getCurrentServiceId(),
      uri: '!"#$%&\'()=~|`{+*}<>?__/.,]:;[@¥^-'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
/*
QUnit.test('drawImageAbnormalTest015', CanvasProfileAbnormalTest.drawImageAbnormalTest015);
*/
