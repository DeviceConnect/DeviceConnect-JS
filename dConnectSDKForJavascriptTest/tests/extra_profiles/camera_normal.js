QUnit.module('CameraProfileNormalTest', {
  before: function() {
    init();
  }
});

/**
 * Cameraプロファイルの正常系テストを行うクラス。
 * @class
 */
let CameraProfileNormalTest = {};

/**
 * ズーム倍率取得のテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /camera/zoom<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * ・zoomPositionに返ってくる値が0.0~1.0の間であること。<br/>
 * </p>
 */
CameraProfileNormalTest.zoomPositionNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: 'camera',
    attribute: 'zoom',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok((json.zoomPosition !== undefined &&
    json.zoomPosition <= 1.0 && 0.0 <= json.zoomPosition),
       'zoomPosition: ' + json.zoomPosition);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('zoomPositionNormalTest001(get)', CameraProfileNormalTest.zoomPositionNormalTest001);

/**
 * ズームインを行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
CameraProfileNormalTest.zoomNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    serviceId: getCurrentServiceId(),
    direction: 'in',
    movement: 'in-start'
  }).then(json => {
    assert.ok(true,
        'Success of the zoom to start. result=' + json.result);
    setTimeout(() => {
      sdk.put({
        profile: 'camera',
        attribute: 'zoom',
        serviceId: getCurrentServiceId(),
        direction: 'in',
        movement: 'in-stop'
      }).then(json => {
        assert.ok(true,
            'Success of the zoom to stop.result=' +
            json.result);
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
        done();
      });
    }, 2 * 1000);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('zoomNormalTest001(Zoom in the camera.)',
    CameraProfileNormalTest.zoomNormalTest001);

/**
 * 少しだけズームインするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxxx&accessToken=xxxx&direction='in'&movement='1shot'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくる。
 * </p>
 */
CameraProfileNormalTest.zoomNormalTest002 = function(assert) {
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    serviceId: getCurrentServiceId(),
    direction: 'in',
    movement: '1shot'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('zoomNormalTest002(Zoom in the camera only 1shot.)',
    CameraProfileNormalTest.zoomNormalTest002);

/**
 * 最小倍率までズームアウトするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxxx&accessToken=xxxx&direction='out'&movement='out'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * <p>
 */
CameraProfileNormalTest.zoomNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    serviceId: getCurrentServiceId(),
    direction: 'out',
    movement: 'in-start'
  }).then(json => {
    assert.ok(true,
        'Success of the zoom out to start. result=' + json.result);
    setTimeout(() => {
      sdk.put({
        profile: 'camera',
        attribute: 'zoom',
        serviceId: getCurrentServiceId(),
        direction: 'out',
        movement: 'in-stop'
      }).then(json => {
        assert.ok(true,
            'Success of the zoom out to stop.result=' +
            json.result);
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
        done();
      });
    }, 2 * 1000);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('zoomNormalTest003(Zoom out the camera.)',
    CameraProfileNormalTest.zoomNormalTest003);

/**
 * 1shot分だけズームアウトするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /camera/zoom?serviceId=xxxx&accessToken=xxxx&direction='out'&movement='1shot'<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * <p>
 */
CameraProfileNormalTest.zoomNormalTest004 = function(assert) {
  sdk.put({
    profile: 'camera',
    attribute: 'zoom',
    serviceId: getCurrentServiceId(),
    direction: 'out',
    movement: '1shot'
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e,errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('zoom(Zoom out the camera only 1shot.)',
    CameraProfileNormalTest.zoomNormalTest004);
