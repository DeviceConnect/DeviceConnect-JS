module('Canvas Profile Abnormal Test', {
  setup: function() {
    TEST_TIMEOUT = 60000;

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
var CanvasProfileAbnormalTest = {};

CanvasProfileAbnormalTest.draw = function(text) {
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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest001');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
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
  dConnect.put(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest001(put)', CanvasProfileAbnormalTest.drawImageAbnormalTest001);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest002');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest002(get)', CanvasProfileAbnormalTest.drawImageAbnormalTest002);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest003');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 100);
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest003', CanvasProfileAbnormalTest.drawImageAbnormalTest003);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest004');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', '100');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest004', CanvasProfileAbnormalTest.drawImageAbnormalTest004);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest005');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'あいうえお');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest005', CanvasProfileAbnormalTest.drawImageAbnormalTest005);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest006');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'abcdefg');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest006', CanvasProfileAbnormalTest.drawImageAbnormalTest006);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest007');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', '!"#$%&\'()-^¥@[;:],./__?<}*+{`|~=');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest007', CanvasProfileAbnormalTest.drawImageAbnormalTest007);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest008');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('x', 'あいうえお');
  formData.append('y', 0);
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};

QUnit.asyncTest('drawImageAbnormalTest008', CanvasProfileAbnormalTest.drawImageAbnormalTest008);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest009');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('x', 'abcdefg');
  formData.append('y', 0);
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest009', CanvasProfileAbnormalTest.drawImageAbnormalTest009);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest010');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('x', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  formData.append('y', 0);
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest010', CanvasProfileAbnormalTest.drawImageAbnormalTest010);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest011');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('x', 0);
  formData.append('y', 'あいうえお');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest011', CanvasProfileAbnormalTest.drawImageAbnormalTest011);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest012');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('x', 0);
  formData.append('y', 'abcdefg');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest012', CanvasProfileAbnormalTest.drawImageAbnormalTest012);

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
  var img = document.getElementById('images');
  img.style.visibility = 'visible';

  var blob = CanvasProfileAbnormalTest.draw('drawImageAbnormalTest013');

  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);

  var formData = new FormData();
  formData.append('serviceId', serviceId);
  formData.append('accessToken', accessToken);
  formData.append('filename', 'test.png');
  formData.append('mimeType', 'image/png');
  formData.append('x', 0);
  formData.append('y', '!"#$%&\'()=~|`{+*}<>?__/.,]:;[@¥^-');
  formData.append('data', blob);

  var uri = builder.build();
  dConnect.post(uri, null, formData, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('drawImageAbnormalTest013', CanvasProfileAbnormalTest.drawImageAbnormalTest013);

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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('uri', 'abcdefg');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
/*
QUnit.asyncTest('drawImageAbnormalTest014', CanvasProfileAbnormalTest.drawImageAbnormalTest014);
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
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.canvas.PROFILE_NAME);
  builder.setAttribute(dConnect.constants.canvas.ATTR_DRAWIMAGE);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('uri', '!"#$%&\'()=~|`{+*}<>?__/.,]:;[@¥^-');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 10) {
      assert.ok(true, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
    }
    QUnit.start();
  });
};
/*
QUnit.asyncTest('drawImageAbnormalTest015', CanvasProfileAbnormalTest.drawImageAbnormalTest015);
*/
