/**
 humandetection.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * DeviceOrientation
 */
function showHumanDetection(serviceId) {
  initAll();
  setTitle('Human Detection Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem',
      serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += getHumanDetectForm(serviceId);
  str += '<hr>';
  str += getBodyDetectForm(serviceId);
  str += '<hr>';
  str += getHandDetectForm(serviceId);
  str += '<hr>';
  str += getFaceDetectForm(serviceId);

  reloadContent(str);
}


// ----------------------------------------------------------------
// Human Detect
// ----------------------------------------------------------------

/**
 * get human detect form.
 */
function getHumanDetectForm(serviceId) {
  let str = '';
  // body
  str += '<h1>Human</h1>';
  // -------------------------------------------------------
  // get,register,unregister
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doHumanDetectHumanGet(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doHumanDetectHumanRegister(\'' +
          serviceId + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doHumanDetectHumanUnregister(\'' +
          serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="human_interval" size="10" maxlength="10">';
  str += '</div>';
  // end of div(optionvalues)
  str += '</div>';
  // -------------------------------------------------------
  str += '<br>';
  str += '<div>';
  str += '<form  name="humanDetectForm">';
  str += 'Response:<br>';
  str += '<div id="humanDetectResponse" width="100%" height="100"></div>';
  str += '</form>';
  str += '</div>';

  return str;
}

/**
 * set human detect response.
 */
function setHumanDetectResponse(json) {
  let eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#humanDetectResponse').html(eventInfo);
}

/**
 * get human option parameter.
 */
function addHumanOptionParameter(params, section) {

  // interval
  let optionParams = ['interval'];
  for (let index in optionParams) {
    let optionParam = optionParams[index];
    let optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      params[optionParam] = optionParamValue;
    }
  }
}

/**
 * Human Detect GET.
 */
function doHumanDetectHumanGet(serviceId) {

  let params = {
    profile: 'humandetection',
    attribute: 'ondetection',
    params: {
      serviceId: serviceId
    }
  };
  addHumanOptionParameter(params.params, 'human');

  sdk.get(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setHumanDetectResponse(json);
  }).catch(e => {
    closeLoading();
    showError('GET ondetection', e.errorCode, e.errorMessage);
  });
  showLoading();
}

/**
 * Human Detect EVENT Register.
 */
function doHumanDetectHumanRegister(serviceId, sessionKey) {
  let params = {
    profile: 'humandetection',
    attribute: 'ondetection',
    params: {
      serviceId: serviceId
    }
  };

  addHumanOptionParameter(params.params, 'human');

  sdk.addEventListener(params, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    let json = JSON.parse(message);
    setHumanDetectResponse(json);
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Human Detect Event Unregister
 */
function doHumanDetectHumanUnregister(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'humandetection',
    attribute: 'ondetection',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}


// ----------------------------------------------------------------
// Body Detect
// ----------------------------------------------------------------

/**
 * get body detect form.
 */
function getBodyDetectForm(serviceId, sessionKey) {
  let str = '';
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
          'onclick=\"doHumanDetectBodyRegister(\'' +
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
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="body_interval" size="10" maxlength="10">';
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
  let eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#bodyDetectResponse').html(eventInfo);
}

/**
 * get body option parameter.
 */
function addBodyOptionParameter(params, section) {

  // threshold, minWidth, maxWidth, minHeight, maxHeight, interval
  let optionParams = ['threshold', 'minWidth', 'maxWidth', 'minHeight',
                      'maxHeight', 'interval'];
  for (let index in optionParams) {
    let optionParam = optionParams[index];
    let optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      params[optionParam] = optionParamValue;
    }
  }
}

/**
 * Body Detect GET.
 */
function doHumanDetectBodyGet(serviceId) {
  let params = {
    profile: 'humandetection',
    attribute: 'onbodydetection',
    params: {
      serviceId: serviceId
    }
  };
  addBodyOptionParameter(params.params, 'body');

  sdk.get(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setBodyDetectResponse(json);
  }).catch(e => {
    closeLoading();
    showError('GET detection/body', e.errorCode, e.errorMessage);
  });
  showLoading();
}

/**
 * Body Detect EVENT Register.
 */
function doHumanDetectBodyRegister(serviceId, sessionKey) {
  let params = {
    profile: 'humandetection',
    attribute: 'onbodydetection',
    params: {
      serviceId: serviceId
    }
  };
  addBodyOptionParameter(params.params, 'body');
  sdk.addEventListener(params, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    let json = JSON.parse(message);
    setBodyDetectResponse(json);
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Body Detect Event Unregister
 */
function doHumanDetectBodyUnregister(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'humandetection',
    attribute: 'onbodydetection',
    params: {
      serviceId: serviceId
    }
  }).then(json => {

  }).catch(e => {
    alert(e.errorMessage);
  });
}

// ----------------------------------------------------------------
// Hand Detect
// ----------------------------------------------------------------

/**
 * get hand detect form.
 */
function getHandDetectForm(serviceId) {
  let str = '';
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
          'onclick=\"doHumanDetectHandRegister(\'' +
          serviceId + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doHumanDetectHandUnregister(\'' +
          serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
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
  // interval
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="hand_interval" size="10" maxlength="10">';
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
  let eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#handDetectResponse').html(eventInfo);
}

/**
 * get hand option parameter.
 */
function addHandOptionParameter(builder, section) {
  // threshold, minWidth, maxWidth, minHeight, maxHeight, interval
  let optionParams = ['threshold', 'minWidth', 'maxWidth', 'minHeight',
                      'maxHeight', 'interval'];
  for (let index in optionParams) {
    let optionParam = optionParams[index];
    let optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      builder.addParameter(optionParam, optionParamValue);
    }
  }
}

/**
 * Hand Detect GET.
 */
function doHumanDetectHandGet(serviceId) {
  let params = {
    profile: 'humandetection',
    attribute: 'onhanddetection',
    params: {
      serviceId: serviceId
    }
  };
  addHandOptionParameter(params.params, 'hand');
  sdk.get(params).then(json =>{
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setHandDetectResponse(json);
  }).catch(e => {
    closeLoading();
    showError('GET detection/hand', e.errorCode, e.errorMessage);
  });
  showLoading();
}

/**
 * Hand Detect EVENT Register.
 */
function doHumanDetectHandRegister(serviceId, sessionKey) {
  let params = {
    profile: 'humandetection',
    attribute: 'onhanddetection',
    params: {
      serviceId: serviceId
    }
  };
  addHandOptionParameter(params.params, 'hand');
  sdk.addEventListener(params, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    let json = JSON.parse(message);
    setHandDetectResponse(json);
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Hand Detect Event Unregister
 */
function doHumanDetectHandUnregister(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'humandetection',
    attribute: 'onhanddetection',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

// ----------------------------------------------------------------
// Face Detect
// ----------------------------------------------------------------

/**
 * get face detect form.
 */
function getFaceDetectForm(serviceId) {
  let str = '';
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
          'onclick=\"doHumanDetectFaceRegister(\'' +
          serviceId + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doHumanDetectFaceUnregister(\'' +
          serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
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
  let eventInfo = '[' + getStrTime() + ']' + '<br>';
  eventInfo += getHumanDetectResponseString(json);
  $('#faceDetectResponse').html(eventInfo);
}

/**
 * get face option parameter.
 */
function addFaceOptionParameter(params, section) {
  // options
  let optionKeys = ['eye', 'nose', 'mouth', 'blink', 'age', 'gender',
                    'faceDirection', 'gaze', 'expression'];
  let options = new Array();
  for (let index in optionKeys) {
    let optionKey = optionKeys[index];
    if ($('#' + optionKey + ':checked').val()) {
      options.push(optionKey);
    }
  }
  if (options.length > 0) {
    let strOptions = options.join(',');
    params['options'] = strOptions;
  }
  // threshold, minWidth, maxWidth, minHeight, maxHeight
  let optionParams = ['threshold', 'minWidth', 'maxWidth', 'minHeight',
                      'maxHeight'];
  for (let index in optionParams) {
    let optionParam = optionParams[index];
    let optionParamValue = $('#' + section + '_' + optionParam).val();
    if (optionParamValue && optionParamValue.length > 0) {
      params[optionParam] = optionParamValue;
    }
  }
  // interval
  let optionParamValue = $('#interval').val();
  if (optionParamValue && optionParamValue.length > 0) {
    params['interval'] = optionParamValue;
  }
  // threshold(for options)
  let optionThresholds = ['eyeThreshold', 'noseThreshold', 'mouthThreshold',
                        'blinkThreshold', 'ageThreshold', 'genderThreshold',
                        'faceDirectionThreshold', 'gazeThreshold',
                        'expressionThreshold'];
  for (let index in optionThresholds) {
    let optionThreshold = optionThresholds[index];
    let optionThresholdValue = $('#' + optionThreshold).val();
    if (optionThresholdValue && optionThresholdValue.length > 0) {
      params[optionThreshold] = optionThresholdValue;
    }
  }
}

/**
 * Face Detect GET.
 */
function doHumanDetectFaceGet(serviceId) {
  let params = {
    profile: 'humandetection',
    attribute: 'onfacedetection',
    params: {
      serviceId: serviceId
    }
  };
  addFaceOptionParameter(params, 'face');
  sdk.get(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    setFaceDetectResponse(json);
  }).catch(e => {
    closeLoading();
    showError('GET detection/face', e.errorCode, e.errorMessage);
  });
  showLoading();
}

/**
 * Face Detect EVENT Register.
 */
function doHumanDetectFaceRegister(serviceId, sessionKey) {
  let params = {
    profile: 'humandetection',
    attribute: 'onfacedetection',
    params: {
      serviceId: serviceId
    }
  };
  addFaceOptionParameter(params, 'face');
  sdk.addEventListener(params, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }
    let json = JSON.parse(message);
    setFaceDetectResponse(json);
  }).catch(e =>{
    alert(e.errorMessage);
  });
}

/**
 * Face Detect Event Unregister
 */
function doHumanDetectFaceUnregister(serviceId, sessionKey) {

  dConnect.removeEventListener({
    profile: 'humandetection',
    attribute: 'onfacedetection',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

function getStrTime() {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let strTime = hour + ':' + minute + ':' + second;
  return strTime;
}

function getHumanDetectResponseString(json) {
  let str = '';
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
  if (json.humanDetect) {
    str += 'humanDetect=' + json.humanDetect.exist + '<br>';
  }
  return str;
}

function getDetectsResponseString(detects) {
  let str = '';
  for (let detectIndex = 0; detectIndex < detects.length; detectIndex++) {
    let detect = detects[detectIndex];
    str += '(detect) x=' + detect.x + ' y=' + detect.y;
    str += ' width=' + detect.width + ' height=' + detect.height;
    str += ' confidence=' + detect.confidence + '<br>';
    if (detect.eyePoints) {
      let eyePoint = detect.eyePoints;
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
      let nosePoint = detect.nosePoints;
      str += '  (nosePoint)';
      str += ' noseX=' + nosePoint.noseX;
      str += ' noseY=' + nosePoint.noseY;
      str += ' noseWidth=' + nosePoint.noseWidth;
      str += ' noseHeight=' + nosePoint.noseHeight;
      str += ' confidence=' + nosePoint.confidence + '<br>';
    }
    if (detect.mouthPoints) {
      let mouthPoint = detect.mouthPoints;
      str += '  (mouthPoint)';
      str += ' mouthX=' + mouthPoint.mouthX;
      str += ' mouthY=' + mouthPoint.mouthY;
      str += ' mouthWidth=' + mouthPoint.mouthWidth;
      str += ' mouthHeight=' + mouthPoint.noseHeight;
      str += ' confidence=' + mouthPoint.confidence + '<br>';
    }
    if (detect.blinkResults) {
      let blinkResult = detect.blinkResults;
      str += '  (blinkResult)';
      str += ' leftEye=' + blinkResult.leftEye;
      str += ' rightEye=' + blinkResult.rightEye;
      str += ' confidence=' + blinkResult.confidence + '<br>';
    }
    if (detect.ageResults) {
      let ageResult = detect.ageResults;
      str += '  (ageResult)';
      str += ' age=' + ageResult.age;
      str += ' confidence=' + blinkResult.confidence + '<br>';
    }
    if (detect.genderResults) {
      let genderResult = detect.genderResults;
      str += '  (genderResult)';
      str += ' gender=' + genderResult.gender;
      str += ' confidence=' + genderResult.confidence + '<br>';
    }
    if (detect.faceDirectionResults) {
      let faceDirectionResult =
          detect.faceDirectionResults;
        str += '  (faceDirectionResult)';
        str += ' yaw=' + faceDirectionResult.yaw;
        str += ' pitch=' + faceDirectionResult.pitch;
        str += ' roll=' + faceDirectionResult.roll;
        str += ' confidence=' + faceDirectionResult.confidence + '<br>';
    }
    if (detect.gazeResults) {
      let gazeResult = detect.gazeResults;
      str += '  (gazeResult)';
      str += ' gazeLR=' + gazeResult.gazeLR;
      str += ' gazeUD=' + gazeResult.gazeUD;
      str += ' confidence=' + gazeResult.confidence + '<br>';
    }
    if (detect.expressionResults) {
      let expressionResult = detect.expressionResults;
      str += '  (expressionResult)';
      str += ' expression=' + expressionResult.expression;
      str += ' confidence=' + expressionResult.confidence + '<br>';
    }
  }
  return str;
}
