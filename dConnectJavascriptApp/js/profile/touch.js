/**
 touch.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Touch
 */
function showTouch(serviceId) {
  initAll();
  setTitle('Touch Profile(Event)');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  str += '<li><a href="javascript:showOnTouchChange(\'' + serviceId +
           '\');" >Show Touch(ontouchchange)</a></li>';
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
  str += '<li><a href="javascript:showTouchChangeEvent(\'' + serviceId +
           '\');" >Touch Event(ontouchchange)</a></li>';
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
  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  sdk.get({
    profile: 'touch',
    attribute: 'ontouch',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let i;
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
        let i;
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

  }).catch(e => {
    showError('GET touch', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('Touch Top', 'doTouchEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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

  doTouchRegister(serviceId);
}

/**
 * Show OnTouchStart
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchStart(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchstart)');

  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  sdk.get({
    profile: 'touch',
    attribute: 'ontouchstart',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let i;
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
        let i;
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
  }).catch(e => {
    showError('GET touchstart', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('Touch Top', 'doTouchStartEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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

  doTouchStartRegister(serviceId);
}

/**
 * Show OnTouchEnd
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchEnd(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchEnd)');

  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  sdk.get({
    profile: 'touch',
    attribute: 'ontouchend',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let i;
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
        let i;
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
  }).catch(e => {
    showError('GET touchend', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('Touch Top', 'doTouchEndEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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

  doTouchEndRegister(serviceId);
}

/**
 * Show OnDoubleTap
 *
 * @param {String}serviceId サービスID
 */
function showOnDoubleTap(serviceId) {
  initAll();
  setTitle('Show Touch(ondoubletap)');

  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  sdk.get({
    profile: 'touch',
    attribute: 'ondoubletap',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
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
  }).catch(e => {
    showError('GET doubletap', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('Touch Top', 'doDoubleTapEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="doubletapForm">';
  str += 'DoubleTap<br>';
  str += '<input type="text" id="idD0" width="100%">';
  str += '</form>';
  reloadContent(str);

  doDoubleTapRegister(serviceId);
}

/**
 * Show OnTouchMove
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchMove(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchmove)');

  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  sdk.get({
    profile: 'touch',
    attribute: 'ontouchmove',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let i;
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
        let i;
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
  }).catch(e => {
    showError('GET touchmove', e.errorCode, e.errorMessage);
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

  let btnStr = getBackButton('Touch Top', 'doTouchMoveEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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

  doTouchMoveRegister(serviceId);
}

/**
 * Show OnTouchCancel
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchCancel(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchcancel)');

  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
  sdk.get({
    profile: 'touch',
    attribute: 'ontouchcancel',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let i;
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
  }).catch(e => {
    showError('GET touchcancel', e.errorCode, e.errorMessage);
  });
}

/**
 * Show TouchCancel Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchCancelEvent(serviceId) {
  initAll();
  setTitle('TouchCancel Event');

  let btnStr = getBackButton('Touch Top', 'doTouchCancelEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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

  doTouchCancelRegister(serviceId);
}
/**
 * Show OnTouchChange
 *
 * @param {String}serviceId サービスID
 */
function showOnTouchChange(serviceId) {
  initAll();
  setTitle('Show Touch(ontouchcancel)');

  let btnStr = getBackButton('Touch Top', 'doOnTouchBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="touchchangeForm">';
  str += 'TouchChange<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnTouchChange(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="state" width="100%">';
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
 * Get OnTouchChange
 */
function doGetOnTouchChange(serviceId) {
  sdk.get({
    profile: 'touch',
    attribute: 'ontouchchange',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    let i;
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
    $('#state').val('');
    if (json.touch) {
      $('#state').val('state: ' + json.touch.state);
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
  }).catch(e => {
    showError('GET touchchange', e.errorCode, e.errorMessage);
  });
}
/**
 * Show TouchChange Event
 *
 * @param {String}serviceId サービスID
 */
function showTouchChangeEvent(serviceId) {
  initAll();
  setTitle('TouchChange Event');

  let btnStr = getBackButton('Touch Top', 'doTouchChangeEventBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<form name="touchchangeForm">';
  str += 'TouchChange<br>';
  str += '<input type="text" id="state" width="100%">';
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

  doTouchChangeRegister(serviceId);
}


/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doOnTouchBack(serviceId) {
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doTouchEventBack(serviceId) {
  doTouchUnregister(serviceId);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doTouchStartEventBack(serviceId) {
  doTouchStartUnregister(serviceId);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doTouchEndEventBack(serviceId) {
  doTouchEndUnregister(serviceId);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doDoubleTapEventBack(serviceId) {
  doDoubleTapUnregister(serviceId);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doTouchMoveEventBack(serviceId) {
  doTouchMoveUnregister(serviceId);
  showTouch(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doTouchCancelEventBack(serviceId) {
  doTouchCancelUnregister(serviceId);
  showTouch(serviceId);
}
/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doTouchChangeEventBack(serviceId) {
  doTouchChangeUnregister(serviceId);
  showTouch(serviceId);
}
/**
 * Touch Event Register.
 */
function doTouchRegister(serviceId) {
  sdk.addEventListener({
    profile: 'touch',
    attribute: 'ontouch',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      if (json.touch.touches) {
        let i;
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
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Start Event Register.
 */
function doTouchStartRegister(serviceId) {
   sdk.addEventListener({
    profile: 'touch',
    attribute: 'ontouchstart',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      if (json.touch.touches) {
        let i;
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
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch End Event Register.
 */
function doTouchEndRegister(serviceId) {
  sdk.addEventListener({
    profile: 'touch',
    attribute: 'ontouchend',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      if (json.touch.touches) {
        let i;
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
  }).catch(e => {
    alert(e. errorMessage);
  });
}

/**
 * Double Tap Event Register.
 */
function doDoubleTapRegister(serviceId) {
  sdk.addEventListener({
    profile: 'touch',
    attribute: 'ondoubletap',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      if (json.touch.touches) {
        $('#idD0').val('');
        $('#idD0').val('id: ' + json.touch.touches[0].id +
          ' x: ' + json.touch.touches[0].x +
          ' y: ' + json.touch.touches[0].y);
      }
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Move Event Register.
 */
function doTouchMoveRegister(serviceId) {
  sdk.addEventListener({
    profile: 'touch',
    attribute: 'ontouchmove',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      if (json.touch.touches) {
        let i;
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
  }).catch(e => {
    alert(e. errorMessage);
  });
}

/**
 * Touch Cancel Event Register.
 */
function doTouchCancelRegister(serviceId) {
  sdk.addEventListener({
    profile: 'touch',
    attribute: 'ontouchcancel',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      if (json.touch.touches) {
        let i;
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
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Change Event Register.
 */
function doTouchChangeRegister(serviceId) {
  sdk.addEventListener({
    profile: 'touch',
    attribute: 'ontouchchange',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    let json = JSON.parse(message);
    if (json.touch) {
      console.log(json.touch.state);
      $('#state').val('state: ' + json.touch.state);
      if (json.touch.touches) {
        let i;
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
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Event Unregist
 */
function doTouchUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ontouch',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Start Event Unregist
 */
function doTouchStartUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ontouchstart',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch End Event Unregist
 */
function doTouchEndUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ontouchend',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Double Tap Event Unregist
 */
function doDoubleTapUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ondoubletap',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Move Event Unregist
 */
function doTouchMoveUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ontouchmove',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}

/**
 * Touch Cancel Event Unregist
 */
function doTouchCancelUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ontouchcancel',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}
/**
 * Touch Change Event Unregist
 */
function doTouchChangeUnregister(serviceId, sessionKey) {
  sdk.removeEventListener({
    profile: 'touch',
    attribute: 'ontouchchange',
    params: {
      serviceId: serviceId
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}
