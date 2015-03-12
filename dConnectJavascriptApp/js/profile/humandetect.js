/**
 humandetect.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
var currentPath = '/';
var deleteMode;

/**
 * HumanDetectプロファイルのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showHumanDetect(serviceId) {
  initAll();
  setTitle('Human Detect Profile', 'black');
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  var str = '';
  str += '<li><a href="javascript:showHumanDetectGet(\'' + serviceId +
    '\');" value="send">Detection GET API</a></li>';

  str += '<li><a href="javascript:showHumanDetectEventFace1(\'' + serviceId +
    '\');" value="send">FACE Detect EVENT (no option)</a></li>';
  str += '<li><a href="javascript:showHumanDetectEventFace2(\'' + serviceId +
    '\');" value="send">FACE Detect EVENT (interval=0)</a></li>';
  str += '<li><a href="javascript:showHumanDetectEventFace3(\'' + serviceId +
    '\');" value="send">FACE Detect EVENT (interval=10)</a></li>';
  str += '<li><a href="javascript:showHumanDetectEventFace4(\'' + serviceId +
    '\');" value="send">FACE Detect EVENT (options=all, threshold=0.1)</a></li>';
  str += '<li><a href="javascript:showHumanDetectEventFace5(\'' + serviceId +
    '\');" value="send">FACE Detect EVENT (options=all, threshold=0.5)</a></li>';


//  str += '<li><a href="javascript:showHumanDetectEvent(\'' + serviceId +
//  '\');" value="send">HumanDetect Detection EVENT API</a></li>';
  reloadList(str);
}

/**
 * PathからURIを取得
 *
 * @param {String} serviceId サービスID
 * @param {String} path パス
 */
function doGetUriFromPath(serviceId, path) {
  var path = $('#path').val();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('canvas');
  builder.setAttribute('receive');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('path', path);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('uri:' + json.uri + '\n' + 'mimeType:' + json.mimeType);
  }, function(errorCode, errorMessage) {
    showError('GET canvas/receive', errorCode, errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doHumanDetectBack(serviceId, sessionKey) {
  if (sessionKey != '') {
    doHumanDetectBodyUnregister(serviceId, sessionKey);
    doHumanDetectHandUnregister(serviceId, sessionKey);
    doHumanDetectFaceUnregister(serviceId, sessionKey);
  }
  searchDevice(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doHumanDetectBodyBack(serviceId, sessionKey) {
  showHumanDetect(serviceId);
}

/**
 * 人体検知GET送信フォームを表示する.
 *
 * @param {String} serviceId　サービスID
 */
function showHumanDetectGet(serviceId) {
  initAll();
  setTitle('HumanDetect Profile(GET API)');
  var btnStr = getBackButton('HumanDetect Top', 'doHumanDetectBodyBack',
    serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);
  var str = '';
  // body
  str += '<h1>body</h1>';
  str += '<input type="button" name="bodyDetectButtonTest1" ';
  str += 'id="bodyDetectButtonTest1" value="Body Detect GET (no option)" ';
  str += 'onclick="doHumanDetectBodyGetTest1(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="bodyDetectButtonTest2" ';
  str += 'id="bodyDetectButtonTest2" value="Body Detect GET (threshold = 0.0)" ';
  str += 'onclick="doHumanDetectBodyGetTest2(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="bodyDetectButtonTest3" ';
  str += 'id="bodyDetectButtonTest3" value="Body Detect GET (threshold = 0.5)" ';
  str += 'onclick="doHumanDetectBodyGetTest3(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="bodyDetectButtonTest4" ';
  str += 'id="bodyDetectButtonTest4" value="Body Detect GET (threshold = 1.0)" ';
  str += 'onclick="doHumanDetectBodyGetTest4(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="bodyDetectButtonTest5" ';
  str += 'id="bodyDetectButtonTest5" value="Body Detect GET (minW/H = 0.1, maxW/H = 0.8)" ';
  str += 'onclick="doHumanDetectBodyGetTest5(\'' + serviceId + '\');"/>';
  // hand
  str += '<h1>hand</h1>';
  str += '<input type="button" name="handDetectButtonTest1" ';
  str += 'id="handDetectButtonTest1" value="Hand Detect GET (no option)" ';
  str += 'onclick="doHumanDetectHandGetTest1(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="handDetectButtonTest2" ';
  str += 'id="handDetectButtonTest2" value="Hand Detect GET (threshold = 0.0)" ';
  str += 'onclick="doHumanDetectHandGetTest2(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="handDetectButtonTest3" ';
  str += 'id="handDetectButtonTest3" value="Hand Detect GET (threshold = 0.5)" ';
  str += 'onclick="doHumanDetectHandGetTest3(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="handDetectButtonTest4" ';
  str += 'id="handDetectButtonTest4" value="Hand Detect GET (threshold = 1.0)" ';
  str += 'onclick="doHumanDetectHandGetTest4(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="handDetectButtonTest5" ';
  str += 'id="handDetectButtonTest5" value="Hand Detect GET (minW/H = 0.1, maxW/H = 0.8)" ';
  str += 'onclick="doHumanDetectHandGetTest5(\'' + serviceId + '\');"/>';
  // face
  str += '<h1>face</h1>';
  str += '<input type="button" name="faceDetectButtonTest1" ';
  str += 'id="faceDetectButtonTest1" value="Face Detect GET (no option)" ';
  str += 'onclick="doHumanDetectFaceGetTest1(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButtonTest2" ';
  str += 'id="faceDetectButtonTest2" value="Face Detect GET (threshold = 0.0)" ';
  str += 'onclick="doHumanDetectFaceGetTest2(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButtonTest3" ';
  str += 'id="faceDetectButtonTest3" value="Face Detect GET (threshold = 0.5)" ';
  str += 'onclick="doHumanDetectFaceGetTest3(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButtonTest4" ';
  str += 'id="faceDetectButtonTest4" value="Face Detect GET (threshold = 1.0)" ';
  str += 'onclick="doHumanDetectFaceGetTest4(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButtonTest5" ';
  str += 'id="faceDetectButtonTest5" value="Face Detect GET (minW/H = 0.1, maxW/H = 0.8)" ';
  str += 'onclick="doHumanDetectFaceGetTest5(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButtonTest6" ';
  str += 'id="faceDetectButtonTest6" value="FACE Detect GET (options all, threshold=0.1)" ';
  str += 'onclick="doHumanDetectFaceGetTest6(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButtonTest7" ';
  str += 'id="faceDetectButtonTest7" value="FACE Detect GET (options all, threshold=0.5)" ';
  str += 'onclick="doHumanDetectFaceGetTest7(\'' + serviceId + '\');"/>';
  reloadContent(str);
}

// ----------------------------------------------------------------
// Body Detect GET
// ----------------------------------------------------------------

/**
 * Body Detect GET (no option).
 */
function doHumanDetectBodyGetTest1(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('body');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/body', errorCode, errorMessage);
  });
}

/**
 * Body Detect GET (threshold = 0.0).
 */
function doHumanDetectBodyGetTest2(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('body');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','0.0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/body', errorCode, errorMessage);
  });
}

/**
 * Body Detect GET (threshold = 0.5).
 */
function doHumanDetectBodyGetTest3(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('body');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','0.5');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/body', errorCode, errorMessage);
  });
}

/**
 * Body Detect GET (threshold = 1.0).
 */
function doHumanDetectBodyGetTest4(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('body');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','1.0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/body', errorCode, errorMessage);
  });
}

/**
 * Body Detect GET (minW/H = 0.1, maxW/H = 0.8).
 */
function doHumanDetectBodyGetTest5(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('body');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth','0.1');
  builder.addParameter('minHeight','0.1');
  builder.addParameter('maxWidth','0.8');
  builder.addParameter('maxHeight','0.8');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/body', errorCode, errorMessage);
  });
}

// ----------------------------------------------------------------
// Hand Detect GET
// ----------------------------------------------------------------

/**
 * Hand Detect GET (no option).
 */
function doHumanDetectHandGetTest1(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('hand');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/hand', errorCode, errorMessage);
  });
}

/**
 * Hand Detect GET (threshold = 0.0).
 */
function doHumanDetectHandGetTest2(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('hand');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','0.0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/hand', errorCode, errorMessage);
  });
}

/**
 * Hand Detect GET (threshold = 0.5).
 */
function doHumanDetectHandGetTest3(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('hand');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','0.5');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/hand', errorCode, errorMessage);
  });
}

/**
 * Hand Detect GET (threshold = 1.0).
 */
function doHumanDetectHandGetTest4(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('hand');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','1.0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/hand', errorCode, errorMessage);
  });
}

/**
 * Hand Detect GET (minW/H = 0.1, maxW/H = 0.8).
 */
function doHumanDetectHandGetTest5(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('hand');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth','0.1');
  builder.addParameter('minHeight','0.1');
  builder.addParameter('maxWidth','0.8');
  builder.addParameter('maxHeight','0.8');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/hand', errorCode, errorMessage);
  });
}

// ----------------------------------------------------------------
// Face Detect GET
// ----------------------------------------------------------------

/**
 * Face Detect GET (no option).
 */
function doHumanDetectFaceGetTest1(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

/**
 * Face Detect GET (threshold = 0.0).
 */
function doHumanDetectFaceGetTest2(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','0.0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

/**
 * Face Detect GET (threshold = 0.5).
 */
function doHumanDetectFaceGetTest3(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','0.5');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

/**
 * Face Detect GET (threshold = 1.0).
 */
function doHumanDetectFaceGetTest4(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('threshold','1.0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

/**
 * Face Detect GET (minW/H = 0.1, maxW/H = 0.8).
 */
function doHumanDetectFaceGetTest5(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('minWidth','0.1');
  builder.addParameter('minHeight','0.1');
  builder.addParameter('maxWidth','0.8');
  builder.addParameter('maxHeight','0.8');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

/**
 * FACE Detect GET (options all, threshold=0.1)
 */
function doHumanDetectFaceGetTest6(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('options',
    'eye,nose,mouth,blink,age,gender,faceDirection,gaze,expression');
  builder.addParameter('eyeThreshold','0.1');
  builder.addParameter('noseThreshold','0.1');
  builder.addParameter('mouthThreshold','0.1');
  builder.addParameter('blinkThreshold','0.1');
  builder.addParameter('ageThreshold','0.1');
  builder.addParameter('genderThreshold','0.1');
  builder.addParameter('faceDirectionThreshold','0.1');
  builder.addParameter('gazeThreshold','0.1');
  builder.addParameter('expressionThreshold','0.1');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

/**
 * FACE Detect GET (options all, threshold=0.5)
 */
function doHumanDetectFaceGetTest7(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('options',
    'eye,nose,mouth,blink,age,gender,faceDirection,gaze,expression');
  builder.addParameter('eyeThreshold','0.5');
  builder.addParameter('noseThreshold','0.5');
  builder.addParameter('mouthThreshold','0.5');
  builder.addParameter('blinkThreshold','0.5');
  builder.addParameter('ageThreshold','0.5');
  builder.addParameter('genderThreshold','0.5');
  builder.addParameter('faceDirectionThreshold','0.5');
  builder.addParameter('gazeThreshold','0.5');
  builder.addParameter('expressionThreshold','0.5');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = getHumanDetectResponseString(json);
    reloadContent(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
}

function getHumanDetectResponseString(json) {
  var str = '';
  if (json.result) {
    str += 'result=' + json.result + '<br>';
  }
  if (json.bodyDetects) {
    str += 'bodyDetects=' + json.bodyDetects.length + '<br>';
    str += getDetectsResponseString(json.bodyDetects);
  }
  if (json.handDetects) {
    str += 'handDetects=' + json.handDetects.length + '<br>';
    str += getDetectsResponseString(json.handDetects);
  }
  if (json.faceDetects) {
    str += 'faceDetects=' + json.faceDetects.length + '<br>';
    str += getDetectsResponseString(json.faceDetects);
  }
  return str;
}

function getDetectsResponseString(detects) {
  var str = '';
  for (var detectIndex = 0; detectIndex < detects.length; detectIndex++) {
    var detect = detects[detectIndex];
    str += '(detect) x=' + detect.x + ' y=' + detect.y;
    str += ' width=' + detect.width + ' height=' + detect.height;
    str += ' confidence=' + detect.confidence + '<br>';
    if (detect.eyePoints) {
      for (var eyePointIndex = 0; eyePointIndex < eyePoint.length;
        eyePointIndex++) {
        var eyePoint = detect.eyePoints[eyePointIndex];
        str += '  <eyePoint> leftEyeX=' + eyePoint.leftEyeX;
        str += ' leftEyeY=' + eyePoint.leftEyeY;
        str += ' leftEyeWidth=' + eyePoint.leftEyeWidth;
        str += ' leftEyeHeight=' + eyePoint.leftEyeHeight + '<br>';
        str += '             ';
        str += 'rightEyeX=' + eyePoint.rightEyeX;
        str += ' rightEyeY=' + eyePoint.rightEyeY;
        str += ' rightEyeWidth=' + eyePoint.rightEyeWidth;
        str += ' rightEyeHeight=' + eyePoint.rightEyeHeight + '<br>';
        str += '             confidence=' + eyePoint.confidence + '<br>';
      }
    }
    if (detect.nosePoints) {
      for (var nosePointIndex = 0; nosePointIndex < detect.nosePoints.length;
        nosePointIndex++) {
        var nosePoint = detect.nosePoints[nosePointIndex];
        str += '  (nosePoint)';
        str += ' noseX=' + nosePoint.noseX;
        str += ' noseY=' + nosePoint.noseY;
        str += ' noseWidth=' + nosePoint.noseWidth;
        str += ' noseHeight=' + nosePoint.noseHeight;
        str += ' confidence=' + nosePoint.confidence + '<br>';
      }
    }
    if (detect.mouthPoints) {
      for (var mouthPointIndex = 0;
        mouthPointIndex < detect.mouthPoints.length; mouthPointIndex++) {
        var mouthPoint = detect.mouthPoints[mouthPointIndex];
        str += '  (mouthPoint)';
        str += ' mouthX=' + mouthPoint.mouthX;
        str += ' mouthY=' + mouthPoint.mouthY;
        str += ' mouthWidth=' + mouthPoint.mouthWidth;
        str += ' mouthHeight=' + mouthPoint.noseHeight;
        str += ' confidence=' + mouthPoint.confidence + '<br>';
      }
    }
    if (detect.blinkResults) {
      for (var blinkResultIndex = 0;
        blinkResultIndex < detect.blinkResults.length; blinkResultIndex++) {
        var blinkResult = detect.blinkResults[blinkResultIndex];
        str += '  (blinkResult)';
        str += ' leftEye=' + blinkResult.leftEye;
        str += ' rightEye=' + blinkResult.rightEye;
        str += ' confidence=' + blinkResult.confidence + '<br>';
      }
    }
    if (detect.ageResults) {
      for (var ageResultIndex = 0; ageResultIndex < detect.ageResults.length;
        ageResultIndex++) {
        var ageResult = detect.ageResults[ageResultIndex];
        str += '  (ageResult)';
        str += ' age=' + ageResult.age;
        str += ' confidence=' + blinkResult.confidence + '<br>';
      }
    }
    if (detect.genderResults) {
      for (var genderResultIndex = 0;
        genderResultIndex < detect.genderResults.length; genderResultIndex++) {
        var genderResult = detect.genderResults[genderResultIndex];
        str += '  (genderResult)';
        str += ' gender=' + genderResult.gender;
        str += ' confidence=' + genderResult.confidence + '<br>';
      }
    }
    if (detect.faceDirectionResults) {
      for (var faceDirectionResultIndex;
        faceDirectionResultIndex < detect.faceDirectionResults.length;
        faceDirectionResultIndex++) {
        var faceDirectionResult =
          detect.faceDirectionResults[faceDirectionResultIndex];
        str += '  (faceDirectionResult)';
        str += ' yaw=' + faceDirectionResult.yaw;
        str += ' pitch=' + faceDirectionResult.pitch;
        str += ' roll=' + faceDirectionResult.roll;
        str += ' confidence=' + faceDirectionResult.confidence + '<br>';
      }
    }
    if (detect.gazeResults) {
      for (var gazeResultIndex = 0;
        gazeResultIndex < detect.gazeResults.length; gazeResultIndex++) {
        var gazeResult = detect.gazeResults[gazeResultIndex];
        str += '  (gazeResult)';
        str += ' gazeLR=' + gazeResult.gazeLR;
        str += ' gazeUD=' + gazeResult.gazeUD;
        str += ' confidence=' + gazeResult.confidence + '<br>';
      }
    }
    if (detect.expressionResults) {
      for (var expressionResultIndex = 0;
        expressionResultIndex < detect.expressionResults.length;
        expressionResultIndex++) {
        var expressionResult = detect.expressionResults[expressionResultIndex];
        str += '  (expressionResult)';
        str += ' expression=' + expressionResult.expression;
        str += ' confidence=' + expressionResult.confidence + '<br>';
      }
    }
  }
  return str;
}


// ----------------------------------------------------------------
// Face Detect EVENT
// ----------------------------------------------------------------

/**
 * FACE Detect EVENT (no option).
 *
 * @param {String} serviceId　service id
 */
function showHumanDetectEventFace1(serviceId) {
  initAll();
  setTitle('FACE Detect EVENT (no option)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form  name="humanDetectForm">';
  str += '<h1>FACE Detect EVENT (no option).</h1><br><br>';
  str += '<div id="eventInfoFace1" width="100%"></div>';
  str += '</form>';
  reloadContent(str);

  doHumanDetectFaceRegist1(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}

/**
 * FACE Detect EVENT (interval=0).
 *
 * @param {String} serviceId　service id
 */
function showHumanDetectEventFace2(serviceId) {
  initAll();
  setTitle('FACE Detect EVENT (interval=0)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form  name="humanDetectForm">';
  str += '<h1>FACE Detect EVENT (interval=0).</h1><br><br>';
  str += '<div id="eventInfoFace2" width="100%"></div>';
  str += '</form>';
  reloadContent(str);

  doHumanDetectFaceRegist2(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}

/**
 * FACE Detect EVENT (interval=10).
 *
 * @param {String} serviceId　service id
 */
function showHumanDetectEventFace3(serviceId) {
  initAll();
  setTitle('FACE Detect EVENT (interval=10)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form  name="humanDetectForm">';
  str += '<h1>FACE Detect EVENT (interval=10).</h1><br><br>';
  str += '<div id="eventInfoFace3" width="100%"></div>';
  str += '</form>';
  reloadContent(str);

  doHumanDetectFaceRegist3(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}

/**
 * FACE Detect EVENT (options=all, threshold=0.1).
 *
 * @param {String} serviceId　service id
 */
function showHumanDetectEventFace4(serviceId) {
  initAll();
  setTitle('FACE Detect EVENT (options=all, threshold=0.1)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form  name="humanDetectForm">';
  str += '<h1>FACE Detect EVENT (options=all, threshold=0.1).</h1><br><br>';
  str += '<div id="eventInfoFace4" width="100%"></div>';
  str += '</form>';
  reloadContent(str);

  doHumanDetectFaceRegist4(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}

/**
 * FACE Detect EVENT (options=all, threshold=0.5).
 *
 * @param {String} serviceId　service id
 */
function showHumanDetectEventFace5(serviceId) {
  initAll();
  setTitle('FACE Detect EVENT (options=all, threshold=0.5)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form  name="humanDetectForm">';
  str += '<h1>FACE Detect EVENT (options=all, threshold=0.5).</h1><br><br>';
  str += '<div id="eventInfoFace5" width="100%"></div>';
  str += '</form>';
  reloadContent(str);

  doHumanDetectFaceRegist5(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}




// ※削除

/**
 * 人体検知Eventフォームを表示する.
 *
 * @param {String} serviceId　サービスID
 */
function showHumanDetectEvent(serviceId) {
  initAll();
  setTitle('Human Detect Profile(Event)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
    serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form  name="humanDetectForm">';
  str += 'Event(body)<br>';
  str += '<input type="text" id="eventInfoBody" width="100%">';
  str += 'Event(hand)<br>';
  str += '<input type="text" id="eventInfoHand" width="100%">';
  str += 'Event(face)<br>';
  str += '<input type="text" id="eventInfoFace" width="100%">';
  str += '</form>';
  reloadContent(str);

  doHumanDetectFaceRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {
  });
}
/**
 * Human Detect Event Register (body)
 */
function doHumanDetectBodyeRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onbodydetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' + bodyLength +
      ' hand:' + handLength + ' face:' + faceLength;
    $('#eventInfoBody').val(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Human Detect Event Register (hand)
 */
function doHumanDetectHandRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onhanddetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' + bodyLength +
      ' hand:' + handLength + ' face:' + faceLength;
    $('#eventInfoHand').val(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * FACE Detect EVENT (no option) Register.
 */
function doHumanDetectFaceRegist1(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' +
      bodyLength + ' hand:' + handLength + ' face:' + faceLength + '<br>';
    eventInfo += getHumanDetectResponseString(json);
    
    $('#eventInfoFace1').html(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * FACE Detect EVENT (interval=0).
 */
function doHumanDetectFaceRegist2(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  builder.addParameter('interval','0');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' +
      bodyLength + ' hand:' + handLength + ' face:' + faceLength + '<br>';
    eventInfo += getHumanDetectResponseString(json);
    
    $('#eventInfoFace2').html(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * FACE Detect EVENT (interval=10).
 */
function doHumanDetectFaceRegist3(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  builder.addParameter('interval','10');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' +
      bodyLength + ' hand:' + handLength + ' face:' + faceLength + '<br>';
    eventInfo += getHumanDetectResponseString(json);
    
    $('#eventInfoFace3').html(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * FACE Detect EVENT (options=all, threshold=0.1).
 */
function doHumanDetectFaceRegist4(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  builder.addParameter('options',
    'eye,nose,mouth,blink,age,gender,faceDirection,gaze,expression');
  builder.addParameter('threshold','0.1');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' +
      bodyLength + ' hand:' + handLength + ' face:' + faceLength + '<br>';
    eventInfo += getHumanDetectResponseString(json);
    
    $('#eventInfoFace4').html(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * FACE Detect EVENT (options=all, threshold=0.5).
 */
function doHumanDetectFaceRegist5(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  builder.addParameter('options',
    'eye,nose,mouth,blink,age,gender,faceDirection,gaze,expression');
  builder.addParameter('threshold','0.5');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' +
      bodyLength + ' hand:' + handLength + ' face:' + faceLength + '<br>';
    eventInfo += getHumanDetectResponseString(json);
    
    $('#eventInfoFace5').html(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Human Detect Event Register (face)
 */
function doHumanDetectFaceRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  builder.addParameter('options',
    'eye,nose,mouth,blink,age,gender,faceDirection,gaze,expression');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    var json = JSON.parse(message);
    var bodyLength = 0;
    var handLength = 0;
    var faceLength = 0;
    if (json.bodyDetects) {
      bodyLength = json.bodyDetects.length;
    }
    if (json.handDetects) {
      handLength = json.handDetects.length;
    }
    if (json.faceDetects) {
      faceLength = json.faceDetects.length;
    }
    var eventInfo = '[' + getStrTime() + '] body:' +
      bodyLength + ' hand:' + handLength + ' face:' + faceLength;
    $('#eventInfoFace').val(eventInfo);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Human Detect Event Unregister (body)
 */
function doHumanDetectBodyUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onbodydetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Human Detect Event Unregister (hand)
 */
function doHumanDetectHandUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onhanddetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Human Detect Event Unregister (face)
 */
function doHumanDetectFaceUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

function getStrTime() {
  var now = new Date();

  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var strTime = hour + ':' + minute + ':' + second;
  return strTime;
}
