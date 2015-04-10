/**
 touch.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Touch
 */
function showTouch(serviceId) {
  initAll();
  setTitle('Touch Profile(Event)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showOnTouch(\'' + serviceId +
           '\');" >Show Touch(ontouch)</a></li>';
  str += '<li><a href="javascript:showOnTouchStart(\'' + serviceId +
           '\');" >Show Touch(ontouchstart)</a></li>';
  str += '<li><a href="javascript:showOnTouchEnd(\'' + serviceId +
           '\');" >Show Touch(ontouchend)</a></li>';
  str += '<li><a href="javascript:showOnDoubleTap(\'' + serviceId +
           '\');" >Show Touch(ondoubletap)</a></li>';
  str += '<li><a href="javascript:showOnTouchMove(\'' + serviceId +
           '\');" >Show Touch(ontouchmove)</a></li>';
  str += '<li><a href="javascript:showOnTouchCancel(\'' + serviceId +
           '\');" >Show Touch(ontouchcancel)</a></li>';
  str += '<li><a href="javascript:showTouchEvent(\'' + serviceId +
           '\');" >Touch Event(ontouch)</a></li>';
  str += '<li><a href="javascript:showTouchStartEvent(\'' + serviceId +
           '\');" >Touch Event(ontouchstart)</a></li>';
  str += '<li><a href="javascript:showTouchEndEvent(\'' + serviceId +
           '\');" >Touch Event(ontouchend)</a></li>';
  str += '<li><a href="javascript:showDoubleTapEvent(\'' + serviceId +
           '\');" >Touch Event(ondoubletap)</a></li>';
  str += '<li><a href="javascript:showTouchMoveEvent(\'' + serviceId +
           '\');" >Touch Event(ontouchmove)</a></li>';
  str += '<li><a href="javascript:showTouchCancelEvent(\'' + serviceId +
           '\');" >Touch Event(ontouchcancel)</a></li>';
  reloadList(str);
}

/**
 * Show OnTouch
 *
 * @param {String}serviceId サービスID
 */
function showOnTouch(serviceId) {
  initAll();
  setTitle('Show Touch(ontouch)');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchForm">';
  str += 'Touch<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnTouch(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idT0" width="100%">';
  str += '<input type="text" id="idT1" width="100%">';
  str += '<input type="text" id="idT2" width="100%">';
  str += '<input type="text" id="idT3" width="100%">';
  str += '<input type="text" id="idT4" width="100%">';
  str += '<input type="text" id="idT5" width="100%">';
  str += '<input type="text" id="idT6" width="100%">';
  str += '<input type="text" id="idT7" width="100%">';
  str += '<input type="text" id="idT8" width="100%">';
  str += '<input type="text" id="idT9" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnTouch
 */
function doGetOnTouch(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouch');
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

    var i;
    for (i = 0; i < 10; i++) {
      switch (i) {
      case 0: $('#idT0').val(''); break;
      case 1: $('#idT1').val(''); break;
      case 2: $('#idT2').val(''); break;
      case 3: $('#idT3').val(''); break;
      case 4: $('#idT4').val(''); break;
      case 5: $('#idT5').val(''); break;
      case 6: $('#idT6').val(''); break;
      case 7: $('#idT7').val(''); break;
      case 8: $('#idT8').val(''); break;
      case 9: $('#idT9').val(''); break;
      }
    }

    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idT0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idT1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idT2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idT3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idT4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idT5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idT6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idT7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idT8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idT9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
      }
    }

  }, function(errorCode, errorMessage) {
    showError('GET touch', errorCode, errorMessage);
  });
}

/**
 * Show Touch Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchEvent(serviceId) {
  initAll();
  setTitle('Touch Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doTouchEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchForm">';
  str += 'Touch<br>';
  str += '<input type="text" id="idT0" width="100%">';
  str += '<input type="text" id="idT1" width="100%">';
  str += '<input type="text" id="idT2" width="100%">';
  str += '<input type="text" id="idT3" width="100%">';
  str += '<input type="text" id="idT4" width="100%">';
  str += '<input type="text" id="idT5" width="100%">';
  str += '<input type="text" id="idT6" width="100%">';
  str += '<input type="text" id="idT7" width="100%">';
  str += '<input type="text" id="idT8" width="100%">';
  str += '<input type="text" id="idT9" width="100%">';
  str += '</form>';
  reloadContent(str);

  doTouchRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show OnTouchStart
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchStart(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchstart)');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchstartForm">';
  str += 'TouchStart<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnTouchStart(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idS0" width="100%">';
  str += '<input type="text" id="idS1" width="100%">';
  str += '<input type="text" id="idS2" width="100%">';
  str += '<input type="text" id="idS3" width="100%">';
  str += '<input type="text" id="idS4" width="100%">';
  str += '<input type="text" id="idS5" width="100%">';
  str += '<input type="text" id="idS6" width="100%">';
  str += '<input type="text" id="idS7" width="100%">';
  str += '<input type="text" id="idS8" width="100%">';
  str += '<input type="text" id="idS9" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnTouchStart
 */
function doGetOnTouchStart(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchstart');
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

    var i;
    for (i = 0; i < 10; i++) {
      switch (i) {
      case 0: $('#idS0').val(''); break;
      case 1: $('#idS1').val(''); break;
      case 2: $('#idS2').val(''); break;
      case 3: $('#idS3').val(''); break;
      case 4: $('#idS4').val(''); break;
      case 5: $('#idS5').val(''); break;
      case 6: $('#idS6').val(''); break;
      case 7: $('#idS7').val(''); break;
      case 8: $('#idS8').val(''); break;
      case 9: $('#idS9').val(''); break;
      }
    }

    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idS0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idS1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idS2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idS3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idS4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idS5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idS6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idS7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idS8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idS9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
      }
    }
  }, function(errorCode, errorMessage) {
    showError('GET touchstart', errorCode, errorMessage);
  });
}

/**
 * Show TouchStart Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchStartEvent(serviceId) {
  initAll();
  setTitle('TouchStart Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doTouchStartEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchstartForm">';
  str += 'TouchStart<br>';
  str += '<input type="text" id="idS0" width="100%">';
  str += '<input type="text" id="idS1" width="100%">';
  str += '<input type="text" id="idS2" width="100%">';
  str += '<input type="text" id="idS3" width="100%">';
  str += '<input type="text" id="idS4" width="100%">';
  str += '<input type="text" id="idS5" width="100%">';
  str += '<input type="text" id="idS6" width="100%">';
  str += '<input type="text" id="idS7" width="100%">';
  str += '<input type="text" id="idS8" width="100%">';
  str += '<input type="text" id="idS9" width="100%">';
  str += '</form>';
  reloadContent(str);

  doTouchStartRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show OnTouchEnd
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchEnd(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchEnd)');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchendForm">';
  str += 'TouchEnd<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnTouchEnd(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idE0" width="100%">';
  str += '<input type="text" id="idE1" width="100%">';
  str += '<input type="text" id="idE2" width="100%">';
  str += '<input type="text" id="idE3" width="100%">';
  str += '<input type="text" id="idE4" width="100%">';
  str += '<input type="text" id="idE5" width="100%">';
  str += '<input type="text" id="idE6" width="100%">';
  str += '<input type="text" id="idE7" width="100%">';
  str += '<input type="text" id="idE8" width="100%">';
  str += '<input type="text" id="idE9" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnTouchEnd
 */
function doGetOnTouchEnd(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchend');
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

    var i;
    for (i = 0; i < 10; i++) {
      switch (i) {
      case 0: $('#idE0').val(''); break;
      case 1: $('#idE1').val(''); break;
      case 2: $('#idE2').val(''); break;
      case 3: $('#idE3').val(''); break;
      case 4: $('#idE4').val(''); break;
      case 5: $('#idE5').val(''); break;
      case 6: $('#idE6').val(''); break;
      case 7: $('#idE7').val(''); break;
      case 8: $('#idE8').val(''); break;
      case 9: $('#idE9').val(''); break;
      }
    }

    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idE0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idE1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idE2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idE3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idE4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idE5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idE6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idE7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idE8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idE9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
      }
    }
  }, function(errorCode, errorMessage) {
    showError('GET touchend', errorCode, errorMessage);
  });
}

/**
 * Show TouchEnd Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchEndEvent(serviceId) {
  initAll();
  setTitle('TouchEnd Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doTouchEndEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchendForm">';
  str += 'TouchEnd<br>';
  str += '<input type="text" id="idE0" width="100%">';
  str += '<input type="text" id="idE1" width="100%">';
  str += '<input type="text" id="idE2" width="100%">';
  str += '<input type="text" id="idE3" width="100%">';
  str += '<input type="text" id="idE4" width="100%">';
  str += '<input type="text" id="idE5" width="100%">';
  str += '<input type="text" id="idE6" width="100%">';
  str += '<input type="text" id="idE7" width="100%">';
  str += '<input type="text" id="idE8" width="100%">';
  str += '<input type="text" id="idE9" width="100%">';
  str += '</form>';
  reloadContent(str);

  doTouchEndRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show OnDoubleTap
 *
 * @param {String}serviceId サービスID
 */
function showOnDoubleTap(serviceId) {
  initAll();
  setTitle('Show Touch(ondoubletap)');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="doubletapForm">';
  str += 'DoubleTap<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnDoubleTap(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idD0" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnDoubleTap
 */
function doGetOnDoubleTap(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ondoubletap');
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

    $('#idD0').val('');

    if (json.touch) {
      if (json.touch.touches) {
        $('#idD0').val('id: ' + json.touch.touches[0].id +
          ' x: ' + json.touch.touches[0].x +
          ' y: ' + json.touch.touches[0].y);
      }
    }
  }, function(errorCode, errorMessage) {
    showError('GET doubletap', errorCode, errorMessage);
  });
}

/**
 * Show DoubleTap Event
 *
 * @param {String}serviceId サービスID
 */
function showDoubleTapEvent(serviceId) {
  initAll();
  setTitle('DoubleTap Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doDoubleTapEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="doubletapForm">';
  str += 'DoubleTap<br>';
  str += '<input type="text" id="idD0" width="100%">';
  str += '</form>';
  reloadContent(str);

  doDoubleTapRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show OnTouchMove
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchMove(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchmove)');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchmoveForm">';
  str += 'TouchMove<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnTouchMove(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idM0" width="100%">';
  str += '<input type="text" id="idM1" width="100%">';
  str += '<input type="text" id="idM2" width="100%">';
  str += '<input type="text" id="idM3" width="100%">';
  str += '<input type="text" id="idM4" width="100%">';
  str += '<input type="text" id="idM5" width="100%">';
  str += '<input type="text" id="idM6" width="100%">';
  str += '<input type="text" id="idM7" width="100%">';
  str += '<input type="text" id="idM8" width="100%">';
  str += '<input type="text" id="idM9" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnTouchMove
 */
function doGetOnTouchMove(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchmove');
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

    var i;
    for (i = 0; i < 10; i++) {
      switch (i) {
      case 0: $('#idM0').val(''); break;
      case 1: $('#idM1').val(''); break;
      case 2: $('#idM2').val(''); break;
      case 3: $('#idM3').val(''); break;
      case 4: $('#idM4').val(''); break;
      case 5: $('#idM5').val(''); break;
      case 6: $('#idM6').val(''); break;
      case 7: $('#idM7').val(''); break;
      case 8: $('#idM8').val(''); break;
      case 9: $('#idM9').val(''); break;
      }
    }

    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idM0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idM1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idM2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idM3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idM4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idM5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idM6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idM7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idM8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idM9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
      }
    }
  }, function(errorCode, errorMessage) {
    showError('GET touchmove', errorCode, errorMessage);
  });
}

/**
 * Show TouchMove Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchMoveEvent(serviceId) {
  initAll();
  setTitle('TouchMove Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doTouchMoveEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchmoveForm">';
  str += 'TouchMove<br>';
  str += '<input type="text" id="idM0" width="100%">';
  str += '<input type="text" id="idM1" width="100%">';
  str += '<input type="text" id="idM2" width="100%">';
  str += '<input type="text" id="idM3" width="100%">';
  str += '<input type="text" id="idM4" width="100%">';
  str += '<input type="text" id="idM5" width="100%">';
  str += '<input type="text" id="idM6" width="100%">';
  str += '<input type="text" id="idM7" width="100%">';
  str += '<input type="text" id="idM8" width="100%">';
  str += '<input type="text" id="idM9" width="100%">';
  str += '</form>';
  reloadContent(str);

  doTouchMoveRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show OnTouchCancel
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchCancel(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchcancel)');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchcancelForm">';
  str += 'TouchCancel<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnTouchCancel(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idC0" width="100%">';
  str += '<input type="text" id="idC1" width="100%">';
  str += '<input type="text" id="idC2" width="100%">';
  str += '<input type="text" id="idC3" width="100%">';
  str += '<input type="text" id="idC4" width="100%">';
  str += '<input type="text" id="idC5" width="100%">';
  str += '<input type="text" id="idC6" width="100%">';
  str += '<input type="text" id="idC7" width="100%">';
  str += '<input type="text" id="idC8" width="100%">';
  str += '<input type="text" id="idC9" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnTouchCancel
 */
function doGetOnTouchCancel(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchcancel');
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

    var i;
    for (i = 0; i < 10; i++) {
      switch (i) {
      case 0: $('#idC0').val(''); break;
      case 1: $('#idC1').val(''); break;
      case 2: $('#idC2').val(''); break;
      case 3: $('#idC3').val(''); break;
      case 4: $('#idC4').val(''); break;
      case 5: $('#idC5').val(''); break;
      case 6: $('#idC6').val(''); break;
      case 7: $('#idC7').val(''); break;
      case 8: $('#idC8').val(''); break;
      case 9: $('#idC9').val(''); break;
      }
    }

    if (json.touch) {
      if (json.touch.touches) {
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idC0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idC1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idC2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idC3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idC4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idC5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idC6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idC7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idC8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idC9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
      }
    }
  }, function(errorCode, errorMessage) {
    showError('GET touchcancel', errorCode, errorMessage);
  });
}

/**
 * Show TouchCancel Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchCancelEvent(serviceId) {
  initAll();
  setTitle('TouchMove Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('Touch Top', 'doTouchCancelEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="touchcancelForm">';
  str += 'TouchCancel<br>';
  str += '<input type="text" id="idC0" width="100%">';
  str += '<input type="text" id="idC1" width="100%">';
  str += '<input type="text" id="idC2" width="100%">';
  str += '<input type="text" id="idC3" width="100%">';
  str += '<input type="text" id="idC4" width="100%">';
  str += '<input type="text" id="idC5" width="100%">';
  str += '<input type="text" id="idC6" width="100%">';
  str += '<input type="text" id="idC7" width="100%">';
  str += '<input type="text" id="idC8" width="100%">';
  str += '<input type="text" id="idC9" width="100%">';
  str += '</form>';
  reloadContent(str);

  doTouchCancelRegist(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doTouchBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doOnTouchBack(serviceId, sessionKey) {
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doTouchEventBack(serviceId, sessionKey) {
  doTouchUnregister(serviceId, sessionKey);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doTouchStartEventBack(serviceId, sessionKey) {
  doTouchStartUnregister(serviceId, sessionKey);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doTouchEndEventBack(serviceId, sessionKey) {
  doTouchEndUnregister(serviceId, sessionKey);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doDoubleTapEventBack(serviceId, sessionKey) {
  doDoubleTapUnregister(serviceId, sessionKey);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doTouchMoveEventBack(serviceId, sessionKey) {
  doTouchMoveUnregister(serviceId, sessionKey);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doTouchCancelEventBack(serviceId, sessionKey) {
  doTouchCancelUnregister(serviceId, sessionKey);
  showTouch(serviceId);
}

/**
 * Touch Event Regist
 */
function doTouchRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouch');
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
    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idT0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idT1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idT2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idT3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idT4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idT5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idT6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idT7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idT8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idT9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
        for (i; i < 10; i++) {
          switch (i) {
          case 0: $('#idT0').val(''); break;
          case 1: $('#idT1').val(''); break;
          case 2: $('#idT2').val(''); break;
          case 3: $('#idT3').val(''); break;
          case 4: $('#idT4').val(''); break;
          case 5: $('#idT5').val(''); break;
          case 6: $('#idT6').val(''); break;
          case 7: $('#idT7').val(''); break;
          case 8: $('#idT8').val(''); break;
          case 9: $('#idT9').val(''); break;
          }
        }
      }
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Touch Start Event Regist
 */
function doTouchStartRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchstart');
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
    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idS0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idS1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idS2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idS3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idS4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idS5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idS6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idS7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idS8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idS9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
        for (i; i < 10; i++) {
          switch (i) {
          case 0: $('#idS0').val(''); break;
          case 1: $('#idS1').val(''); break;
          case 2: $('#idS2').val(''); break;
          case 3: $('#idS3').val(''); break;
          case 4: $('#idS4').val(''); break;
          case 5: $('#idS5').val(''); break;
          case 6: $('#idS6').val(''); break;
          case 7: $('#idS7').val(''); break;
          case 8: $('#idS8').val(''); break;
          case 9: $('#idS9').val(''); break;
          }
        }
      }
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Touch End Event Regist
 */
function doTouchEndRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchend');
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
    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idE0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idE1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idE2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idE3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idE4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idE5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idE6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idE7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idE8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idE9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
        for (i; i < 10; i++) {
          switch (i) {
          case 0: $('#idE0').val(''); break;
          case 1: $('#idE1').val(''); break;
          case 2: $('#idE2').val(''); break;
          case 3: $('#idE3').val(''); break;
          case 4: $('#idE4').val(''); break;
          case 5: $('#idE5').val(''); break;
          case 6: $('#idE6').val(''); break;
          case 7: $('#idE7').val(''); break;
          case 8: $('#idE8').val(''); break;
          case 9: $('#idE9').val(''); break;
          }
        }
      }
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Double Tap Event Regist
 */
function doDoubleTapRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ondoubletap');
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
    if (json.touch) {
      if (json.touch.touches) {
        $('#idD0').val('');
        $('#idD0').val('id: ' + json.touch.touches[0].id +
          ' x: ' + json.touch.touches[0].x +
          ' y: ' + json.touch.touches[0].y);
      }
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Touch Move Event Regist
 */
function doTouchMoveRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchmove');
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
    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idM0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idM1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idM2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idM3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idM4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idM5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idM6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idM7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idM8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idM9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
        for (i; i < 10; i++) {
          switch (i) {
          case 0: $('#idM0').val(''); break;
          case 1: $('#idM1').val(''); break;
          case 2: $('#idM2').val(''); break;
          case 3: $('#idM3').val(''); break;
          case 4: $('#idM4').val(''); break;
          case 5: $('#idM5').val(''); break;
          case 6: $('#idM6').val(''); break;
          case 7: $('#idM7').val(''); break;
          case 8: $('#idM8').val(''); break;
          case 9: $('#idM9').val(''); break;
          }
        }
      }
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Touch Cancel Event Regist
 */
function doTouchCancelRegist(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchcancel');
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
    if (json.touch) {
      if (json.touch.touches) {
        var i;
        for (i = 0; i < json.touch.touches.length; i++) {
          switch (i) {
          case 0:
            $('#idC0').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 1:
            $('#idC1').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 2:
            $('#idC2').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 3:
            $('#idC3').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 4:
            $('#idC4').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 5:
            $('#idC5').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 6:
            $('#idC6').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 7:
            $('#idC7').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 8:
            $('#idC8').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          case 9:
            $('#idC9').val('id: ' + json.touch.touches[i].id +
              ' x: ' + json.touch.touches[i].x +
              ' y: ' + json.touch.touches[i].y);
            break;
          }
        }
        for (i; i < 10; i++) {
          switch (i) {
          case 0: $('#idC0').val(''); break;
          case 1: $('#idC1').val(''); break;
          case 2: $('#idC2').val(''); break;
          case 3: $('#idC3').val(''); break;
          case 4: $('#idC4').val(''); break;
          case 5: $('#idC5').val(''); break;
          case 6: $('#idC6').val(''); break;
          case 7: $('#idC7').val(''); break;
          case 8: $('#idC8').val(''); break;
          case 9: $('#idC9').val(''); break;
          }
        }
      }
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Touch Event Unregist
 */
function doTouchUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouch');
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
 * Touch Start Event Unregist
 */
function doTouchStartUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchstart');
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
 * Touch End Event Unregist
 */
function doTouchEndUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchend');
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
 * Double Tap Event Unregist
 */
function doDoubleTapUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ondoubletap');
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
 * Touch Move Event Unregist
 */
function doTouchMoveUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchmove');
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
 * Touch Cancel Event Unregist
 */
function doTouchCancelUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('touch');
  builder.setAttribute('ontouchcancel');
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
