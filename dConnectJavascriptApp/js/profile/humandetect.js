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
    '\');" value="send">HumanDetect Detection GET API</a></li>';
  str += '<li><a href="javascript:showHumanDetectEvent(\'' + serviceId +
    '\');" value="send">HumanDetect Detection EVENT API</a></li>';
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
  str += '<input type="button" name="bodyDetectButton" ';
  str += 'id="bodyDetectButton" value="Body Detect GET" ';
  str += 'onclick="doHumanDetectBodyGet(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="handDetectButton" ';
  str += 'id="handDetectButton" value="Hand Detect GET" ';
  str += 'onclick="doHumanDetectHandGet(\'' + serviceId + '\');"/>';
  str += '<input type="button" name="faceDetectButton" ';
  str += 'id="faceDetectButton" value="Face Detect GET" ';
  str += 'onclick="doHumanDetectFaceGet(\'' + serviceId + '\', null);"/>';
  str += '<input type="button" name="faceDetectButtonAllOption" ';
  str += 'id="faceDetectButtonAllOption" value="Face Detect GET(AllOption)" ';
  str += 'onclick="doHumanDetectFaceGet(\'' + serviceId + '\',' ;
  str += '\'eye,nose,mouth,blink,age,gender,faceDirection,aze,expression\'';
  str += ');"/>';
  reloadContent(str);
}

/**
 * Human Detect Body.
 */
function doHumanDetectBodyGet(serviceId) {
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
 * Human Detect Hand.
 */
function doHumanDetectHandGet(serviceId) {
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
 * Human Detect Face.
 */
function doHumanDetectFaceGet(serviceId, options) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (options != null) {
    builder.addParameter('options', options);
  }
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
  str += 'result=' + json.result + '<br>';
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
