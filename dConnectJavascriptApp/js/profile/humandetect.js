/**
 humandetect.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
var currentPath = '/';
var deleteMode;

/**
 * DeviceOrientation
 */
function showHumanDetect(serviceId) {
  initAll();
  setTitle('Human Detect Profile');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doHumanDetectBack',
      serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += getBodyDetectForm(serviceId, sessionKey);
  str += '<hr>';
  str += getHandDetectForm(serviceId, sessionKey);
  str += '<hr>';
  str += getFaceDetectForm(serviceId, sessionKey);

  reloadContent(str);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doHumanDetectBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

// ----------------------------------------------------------------
// Body Detect
// ----------------------------------------------------------------

/**
 * get body detect form.
 */
function getBodyDetectForm(serviceId, sessionKey) {
  var str = '';
  // body
  str += '<h1>BODY</h1>';
  // -------------------------------------------------------
  // get,register,unregister
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doHumanDetectBodyGet(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doHumanDetectBodyRegist(\'' +
          serviceId + '\', \'' + sessionKey + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doHumanDetectBodyUnregister(\'' +
          serviceId + '\', \'' + sessionKey +
          '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  // -------------------------------------------------------
  // div(optionvalues)
  str += '<div id="optionvalues">';
  // threshold
  str += '<div>';
  str += '<label for="threshold">threshold</label>';
  str += '<input type="text" id="body_threshold">';
  str += '</div>';
  // minWidth
  str += '<div>';
  str += '<label for="minWidth">minWidth</label>';
  str += '<input type="text" id="body_minWidth" size="10" maxlength="10">';
  str += '</div>';
  // maxWidth
  str += '<div>';
  str += '<label for="maxWidth">maxWidth</label>';
  str += '<input type="text" id="body_maxWidth" size="10" maxlength="10">';
  str += '</div>';
  // minHeight
  str += '<div>';
  str += '<label for="minHeight">minHeight</label>';
  str += '<input type="text" id="body_minHeight" size="10" maxlength="10">';
  str += '</div>';
  // maxHeight
  str += '<div>';
  str += '<label for="maxHeight">maxHeight</label>';
  str += '<input type="text" id="body_maxHeight" size="10" maxlength="10">';
  str += '</div>';
  // end of div(optionvalues)
  str += '</div>';
  // -------------------------------------------------------
  str += '<br>';
  str += '<div>';
  str += '<form  name="bodyDetectForm">';
  str += 'Response:<br>';
  str += '<div id="bodyDetectResponse" width="100%" height="100"></div>';
  str += '</form>';
  str += '</div>';

  return str;
}

/**
 * set body detect response.
 */
function setBodyDetectResponse(json) {
  var eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#bodyDetectResponse').html(eventInfo);
}

/**
 * get body option parameter.
 */
function addBodyOptionParameter(builder, section) {

  // threshold, minWidth, maxWidth, minHeight, maxHeight, interval
  var optionParams = ['threshold', 'minWidth', 'maxWidth', 'minHeight',
                      'maxHeight', 'interval'];
  for (var index in optionParams) {
    var optionParam = optionParams[index];
    var optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      builder.addParameter(optionParam, optionParamValue);
    }
  }
}

/**
 * Body Detect GET.
 */
function doHumanDetectBodyGet(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('body');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  addBodyOptionParameter(builder, 'body');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setBodyDetectResponse(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/body', errorCode, errorMessage);
  });
  showLoading();
}

/**
 * Body Detect EVENT Register.
 */
function doHumanDetectBodyRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onbodydetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  addBodyOptionParameter(builder);
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
    setBodyDetectResponse(json);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Body Detect Event Unregister
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

// ----------------------------------------------------------------
// Hand Detect
// ----------------------------------------------------------------

/**
 * get hand detect form.
 */
function getHandDetectForm(serviceId, sessionKey) {
  var str = '';
  // hand
  str += '<h1>HAND</h1>';
  // -------------------------------------------------------
  // get,register,unregister
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doHumanDetectHandGet(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doHumanDetectHandRegist(\'' +
          serviceId + '\', \'' + sessionKey + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doHumanDetectHandUnregister(\'' +
          serviceId + '\', \'' + sessionKey +
          '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  // -------------------------------------------------------
  // div(optionvalues)
  str += '<div id="optionvalues">';
  // threshold
  str += '<div>';
  str += '<label for="threshold">threshold</label>';
  str += '<input type="text" id="hand_threshold">';
  str += '</div>';
  // minWidth
  str += '<div>';
  str += '<label for="minWidth">minWidth</label>';
  str += '<input type="text" id="hand_minWidth" size="10" maxlength="10">';
  str += '</div>';
  // maxWidth
  str += '<div>';
  str += '<label for="maxWidth">maxWidth</label>';
  str += '<input type="text" id="hand_maxWidth" size="10" maxlength="10">';
  str += '</div>';
  // minHeight
  str += '<div>';
  str += '<label for="minHeight">minHeight</label>';
  str += '<input type="text" id="hand_minHeight" size="10" maxlength="10">';
  str += '</div>';
  // maxHeight
  str += '<div>';
  str += '<label for="maxHeight">maxHeight</label>';
  str += '<input type="text" id="hand_maxHeight" size="10" maxlength="10">';
  str += '</div>';
  // end of div(optionvalues)
  str += '</div>';
  // -------------------------------------------------------
  str += '<br>';
  str += '<div>';
  str += '<form  name="handDetectForm">';
  str += 'Response:<br>';
  str += '<div id="handDetectResponse" width="100%" height="100"></div>';
  str += '</form>';
  str += '</div>';
  return str;
}

/**
 * set hand detect response.
 */
function setHandDetectResponse(json) {
  var eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#handDetectResponse').html(eventInfo);
}

/**
 * get hand option parameter.
 */
function addHandOptionParameter(builder, section) {
  // threshold, minWidth, maxWidth, minHeight, maxHeight, interval
  var optionParams = ['threshold', 'minWidth', 'maxWidth', 'minHeight',
                      'maxHeight', 'interval'];
  for (var index in optionParams) {
    var optionParam = optionParams[index];
    var optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      builder.addParameter(optionParam, optionParamValue);
    }
  }
}

/**
 * Hand Detect GET.
 */
function doHumanDetectHandGet(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('hand');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  addHandOptionParameter(builder, 'hand');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setHandDetectResponse(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/hand', errorCode, errorMessage);
  });
  showLoading();
}

/**
 * Hand Detect EVENT Register.
 */
function doHumanDetectHandRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onhanddetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  addHandOptionParameter(builder);
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
    setHandDetectResponse(json);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Hand Detect Event Unregister
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

// ----------------------------------------------------------------
// Face Detect
// ----------------------------------------------------------------

/**
 * get face detect form.
 */
function getFaceDetectForm(serviceId, sessionKey) {
  var str = '';
  // face
  str += '<h1>FACE</h1>';
  // -------------------------------------------------------
  // get,register,unregister
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doHumanDetectFaceGet(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doHumanDetectFaceRegist(\'' +
          serviceId + '\', \'' + sessionKey + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doHumanDetectFaceUnregister(\'' +
          serviceId + '\', \'' + sessionKey +
          '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  // -------------------------------------------------------
  // div(options)
  str += '<div id="options">';
  // options
  str += '<label for="options">options</label>';
  // fieldset(options)
  str += '<fieldset data-role=\"controlgroup\" data-type=\"horizontal\">';
  // eye
  str += '<input type="checkbox" id="eye">';
  str += '<label for="eye">eye</label>';
  // nose
  str += '<input type="checkbox" id="nose">';
  str += '<label for="nose">nose</label>';
  // mouth
  str += '<input type="checkbox" id="mouth">';
  str += '<label for="mouth">mouth</label>';
  // blink
  str += '<input type="checkbox" id="blink">';
  str += '<label for="blink">blink</label>';
  // age
  str += '<input type="checkbox" id="age">';
  str += '<label for="age">age</label>';
  // gender
  str += '<input type="checkbox" id="gender">';
  str += '<label for="gender">gender</label>';
  // faceDirection
  str += '<input type="checkbox" id="faceDirection">';
  str += '<label for="faceDirection">faceDirection</label>';
  // gaze
  str += '<input type="checkbox" id="gaze">';
  str += '<label for="gaze">gaze</label>';
  // expression
  str += '<input type="checkbox" id="expression">';
  str += '<label for="expression">expression</label>';
  // end of fieldset(options)
  str += '</fieldset>';
  // end of div(options)
  str += '</div>';
  // -------------------------------------------------------
  // div(optionvalues)
  str += '<div id="optionvalues">';
  // threshold
  str += '<div>';
  str += '<label for="threshold">threshold</label>';
  str += '<input type="text" id="face_threshold">';
  str += '</div>';
  // minWidth
  str += '<div>';
  str += '<label for="minWidth">minWidth</label>';
  str += '<input type="text" id="face_minWidth" size="10" maxlength="10">';
  str += '</div>';
  // maxWidth
  str += '<div>';
  str += '<label for="maxWidth">maxWidth</label>';
  str += '<input type="text" id="face_maxWidth" size="10" maxlength="10">';
  str += '</div>';
  // minHeight
  str += '<div>';
  str += '<label for="minHeight">minHeight</label>';
  str += '<input type="text" id="face_minHeight" size="10" maxlength="10">';
  str += '</div>';
  // maxHeight
  str += '<div>';
  str += '<label for="maxHeight">maxHeight</label>';
  str += '<input type="text" id="face_maxHeight" size="10" maxlength="10">';
  str += '</div>';
  // eyeThreshold
  str += '<div>';
  str += '<label for="eyeThreshold">eyeThreshold</label>';
  str += '<input type="text" id="eyeThreshold">';
  str += '</div>';
  // noseThreshold
  str += '<div>';
  str += '<label for="noseThreshold">noseThreshold</label>';
  str += '<input type="text" id="noseThreshold">';
  str += '</div>';
  // mouthThreshold
  str += '<div>';
  str += '<label for="mouthThreshold">mouthThreshold</label>';
  str += '<input type="text" id="mouthThreshold">';
  str += '</div>';
  // blinkThreshold
  str += '<div>';
  str += '<label for="blinkThreshold">blinkThreshold</label>';
  str += '<input type="text" id="blinkThreshold">';
  str += '</div>';
  // ageThreshold
  str += '<div>';
  str += '<label for="ageThreshold">ageThreshold</label>';
  str += '<input type="text" id="ageThreshold">';
  str += '</div>';
  // genderThreshold
  str += '<div>';
  str += '<label for="genderThreshold">genderThreshold</label>';
  str += '<input type="text" id="genderThreshold">';
  str += '</div>';
  // faceDirectionThreshold
  str += '<div>';
  str += '<label for="faceDirectionThreshold">faceDirectionThreshold</label>';
  str += '<input type="text" id="faceDirectionThreshold">';
  str += '</div>';
  // gazeThreshold
  str += '<div>';
  str += '<label for="gazeThreshold">gazeThreshold</label>';
  str += '<input type="text" id="gazeThreshold">';
  str += '</div>';
  // expressionThreshold
  str += '<div>';
  str += '<label for="expressionThreshold">expressionThreshold</label>';
  str += '<input type="text" id="expressionThreshold">';
  str += '</div>';
  // interval
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="interval" size="10" maxlength="10">';
  str += '</div>';
  // end of div(optionvalues)
  str += '</div>';
  // -------------------------------------------------------
  str += '<br>';
  str += '<div>';
  str += '<form  name="faceDetectForm">';
  str += 'Response:<br>';
  str += '<div id="faceDetectResponse" width="100%" height="100"></div>';
  str += '</form>';
  str += '</div>';
  return str;
}

/**
 * set face detect response.
 */
function setFaceDetectResponse(json) {
  var eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#faceDetectResponse').html(eventInfo);
}

/**
 * get face option parameter.
 */
function addFaceOptionParameter(builder, section) {
  // options
  var optionKeys = ['eye', 'nose', 'mouth', 'blink', 'age', 'gender',
                    'faceDirection', 'gaze', 'expression'];
  var options = new Array();
  for (var index in optionKeys) {
    var optionKey = optionKeys[index];
    if ($('#' + optionKey + ':checked').val()) {
      options.push(optionKey);
    }
  }
  if (options.length > 0) {
    var strOptions = options.join(',');
    builder.addParameter('options', strOptions);
  }
  // threshold, minWidth, maxWidth, minHeight, maxHeight
  var optionParams = ['threshold', 'minWidth', 'maxWidth', 'minHeight',
                      'maxHeight'];
  for (var index in optionParams) {
    var optionParam = optionParams[index];
    var optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      builder.addParameter(optionParam, optionParamValue);
    }
  }
  // interval
  var optionParamValue = $('#interval').val();
  if (optionParamValue && optionParamValue.length > 0) {
    builder.addParameter('interval', optionParamValue);
  }
  // threshold(for options)
  var optionThresholds = ['eyeThreshold', 'noseThreshold', 'mouthThreshold',
                        'blinkThreshold', 'ageThreshold', 'genderThreshold',
                        'faceDirectionThreshold', 'gazeThreshold',
                        'expressionThreshold'];
  for (var index in optionThresholds) {
    var optionThreshold = optionThresholds[index];
    var optionThresholdValue = $('#' + optionThreshold).val();
    if (optionThresholdValue && optionThresholdValue.length > 0) {
      builder.addParameter(optionThreshold, optionThresholdValue);
    }
  }
}

/**
 * Face Detect GET.
 */
function doHumanDetectFaceGet(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setInterface('detection');
  builder.setAttribute('face');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  addFaceOptionParameter(builder, 'face');
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setFaceDetectResponse(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('GET detection/face', errorCode, errorMessage);
  });
  showLoading();
}

/**
 * Face Detect EVENT Register.
 */
function doHumanDetectFaceRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('humandetect');
  builder.setAttribute('onfacedetection');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.setSessionKey(sessionKey);
  addFaceOptionParameter(builder, 'face');
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
    setFaceDetectResponse(json);
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Face Detect Event Unregister
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

function getHumanDetectResponseString(json) {
  var str = '';
  if (json.result !== undefined) {
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
      var eyePoint = detect.eyePoints;
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
    if (detect.nosePoints) {
      var nosePoint = detect.nosePoints;
      str += '  (nosePoint)';
      str += ' noseX=' + nosePoint.noseX;
      str += ' noseY=' + nosePoint.noseY;
      str += ' noseWidth=' + nosePoint.noseWidth;
      str += ' noseHeight=' + nosePoint.noseHeight;
      str += ' confidence=' + nosePoint.confidence + '<br>';
    }
    if (detect.mouthPoints) {
      var mouthPoint = detect.mouthPoints;
      str += '  (mouthPoint)';
      str += ' mouthX=' + mouthPoint.mouthX;
      str += ' mouthY=' + mouthPoint.mouthY;
      str += ' mouthWidth=' + mouthPoint.mouthWidth;
      str += ' mouthHeight=' + mouthPoint.noseHeight;
      str += ' confidence=' + mouthPoint.confidence + '<br>';
    }
    if (detect.blinkResults) {
      var blinkResult = detect.blinkResults;
      str += '  (blinkResult)';
      str += ' leftEye=' + blinkResult.leftEye;
      str += ' rightEye=' + blinkResult.rightEye;
      str += ' confidence=' + blinkResult.confidence + '<br>';
    }
    if (detect.ageResults) {
      var ageResult = detect.ageResults;
      str += '  (ageResult)';
      str += ' age=' + ageResult.age;
      str += ' confidence=' + blinkResult.confidence + '<br>';
    }
    if (detect.genderResults) {
      var genderResult = detect.genderResults;
      str += '  (genderResult)';
      str += ' gender=' + genderResult.gender;
      str += ' confidence=' + genderResult.confidence + '<br>';
    }
    if (detect.faceDirectionResults) {
      var faceDirectionResult =
          detect.faceDirectionResults;
        str += '  (faceDirectionResult)';
        str += ' yaw=' + faceDirectionResult.yaw;
        str += ' pitch=' + faceDirectionResult.pitch;
        str += ' roll=' + faceDirectionResult.roll;
        str += ' confidence=' + faceDirectionResult.confidence + '<br>';
    }
    if (detect.gazeResults) {
      var gazeResult = detect.gazeResults;
      str += '  (gazeResult)';
      str += ' gazeLR=' + gazeResult.gazeLR;
      str += ' gazeUD=' + gazeResult.gazeUD;
      str += ' confidence=' + gazeResult.confidence + '<br>';
    }
    if (detect.expressionResults) {
      var expressionResult = detect.expressionResults;
      str += '  (expressionResult)';
      str += ' expression=' + expressionResult.expression;
      str += ' confidence=' + expressionResult.confidence + '<br>';
    }
  }
  return str;
}
