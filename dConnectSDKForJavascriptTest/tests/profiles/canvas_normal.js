module('Canvas Profile Normal Test', {
  setup: function() {
    init();
  }, teardown: function() {
    var img = document.getElementById('images');
    img.style.visibility = 'hidden';
  }
});

/**
 * Canvasプロファイルの異常系テストを行うクラス。
 * @class
 */
var CanvasProfileNormalTest = {};

CanvasProfileNormalTest.draw = function(text) {
  var width = 120;
  var height = 120;
  var canvas =  document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.beginPath();
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#ffffff'; 
  context.fillRect(0, 0, width, height);
  context.stroke();
  context.restore();
  context.save();
  
  context.beginPath();
  context.font = "18pt Arial";
  context.fillStyle = 'rgb(0, 0, 0)'; 
  for (var i = 0; i < 10; i++) {
    context.fillText(text, 10, (i + 1) * 20);
  }
  context.restore();
  context.save();

  canvas = canvas.toDataURL();
  var base64Data = canvas.split(',')[1];
  var data = window.atob(base64Data);
  var buff = new ArrayBuffer(data.length);
  var arr = new Uint8Array(buff);
  var blob, i, dataLen;
  for (i = 0, dataLen = data.length; i < dataLen; i++) {
      arr[i] = data.charCodeAt(i);
  }
  blob = new Blob([arr], {type: 'image/png'});
  return blob;
};

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileNormalTest.draw('drawImageNormalTest001');

  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('filename', 'test.png');
    formData.append('mimeType', 'image/png');
    formData.append('x', 0);
    formData.append('y', 0);
    formData.append('data', blob);

    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageNormalTest001(put)', CanvasProfileNormalTest.drawImageNormalTest001);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileNormalTest.draw('drawImageNormalTest002');

  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('mode', 'scales');
    formData.append('filename', 'test.png');
    formData.append('mimeType', 'image/png');
    formData.append('x', 50);
    formData.append('y', 50);
    formData.append('data', blob);

    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageNormalTest002(mode is scales)', CanvasProfileNormalTest.drawImageNormalTest002);


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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileNormalTest.draw('drawImageNormalTest003');

  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('mode', 'fills');
    formData.append('filename', 'test.png');
    formData.append('mimeType', 'image/png');
    formData.append('x', -50);
    formData.append('y', -50);
    formData.append('data', blob);

    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageNormalTest003(mode is fills)', CanvasProfileNormalTest.drawImageNormalTest003);


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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileNormalTest.draw('drawImageNormalTest001');

  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('filename', 'test.png');
    formData.append('mimeType', 'image/png');
    formData.append('data', blob);

    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      assert.ok(true, 'result=' + json.result);

      var builder = new dConnect.URIBuilder();
      builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
      builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);
      builder.setServiceId(serviceId);
      builder.setAccessToken(accessToken);

      var uri = builder.build();
      dConnect.delete(uri, null,  function(json) {
        assert.ok(true, 'result=' + json.result);
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(checkErrorCode(errorCode), 
            "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), 
          "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('deleteDrawImageNormalTest001(put)', CanvasProfileNormalTest.deleteDrawImageNormalTest001);
