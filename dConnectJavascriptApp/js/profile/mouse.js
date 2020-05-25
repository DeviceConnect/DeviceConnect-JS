/**
 mouse.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

let mMouseLastX;
let mMouseLastY;
let mStartTime;
let mDragFlag = false;
let mMouseMode;

/* Show Mouse page */
function showMouse(serviceId) {
    initAll();
    setTitle('Mouse Profile');

    let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let contents = '<div style="text-align: center;">';
    contents += '<div id="hogpBox" style="margin: auto;background-color:#ccc; width: 320px;height: 320px;"></div>';
    contents += '<div>';
    contents += '<button class="ui-btn ui-btn-inline" onclick="sendMouseClick(\'' + serviceId +  '\', \'left\')">左</button>';
    contents += '<button class="ui-btn ui-btn-inline" onclick="sendMouseClick(\'' + serviceId +  '\', \'middle\')">中</button>';
    contents += '<button class="ui-btn ui-btn-inline" onclick="sendMouseClick(\'' + serviceId +  '\', \'right\')">右</button>';
    contents += '</div>';
    contents += '</div>';
    contents += '<p id="mouseOutputX">Ｘ座標：</p>';
    contents += '<p id="mouseOutputY">Ｙ座標：</p>';
    reloadContent(contents);

    let supportTouch = 'ontouchend' in document;

    let EVENTNAME_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';
    let EVENTNAME_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
    let EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

    $("#hogpBox").bind(EVENTNAME_TOUCHSTART, event => {
        onMouseDown(serviceId, event);
    });

    $("#hogpBox").bind(EVENTNAME_TOUCHEND, event => {
        onMouseUp(serviceId, event);
    });

    $("#hogpBox").bind(EVENTNAME_TOUCHMOVE, event => {
        onMouseMove(serviceId, event);
        event.preventDefault();
    });

    $("#hogpBox").bind('mouseleave', event => {
        onMouseUp(serviceId, event);
    });

    $("#hogpBox").bind('touchcancel', event => {
        onMouseUp(serviceId, event);
    });

    getMouseMode(serviceId);
}

function onMouseDown(serviceId, event) {
    mMouseLastX = event.clientX;
    mMouseLastY = event.clientY;
    mStartTime = Date.now();
    mDragFlag = true;
}

function onMouseUp(serviceId, event) {
    mDragFlag = false;
}

function onMouseMove(serviceId, event) {
    if (!mDragFlag) {
        return;
    }

    let endTime = Date.now();
    if (endTime - mStartTime < 40) {
        return;
    }

    let original = event.originalEvent;
    let x, y;
    if (original.changedTouches) {
        x = original.changedTouches[0].pageX;
        y = original.changedTouches[0].pageY;
    } else {
        x = event.pageX;
        y = event.pageY;
    }

    if (mMouseMode == 'absolute') {
        dx = Math.round(event.offsetX) / 320.0;
        dy = Math.round(event.offsetY) / 320.0;
    } else {
        dx = Math.round(x - mMouseLastX) / 127.0;
        dy = Math.round(y - mMouseLastY) / 127.0;
    }

    $("#mouseOutputX").html("Ｘ座標：" + x);
    $("#mouseOutputY").html("Ｙ座標：" + y);

    sendMouseMove(serviceId, dx, dy);

    mMouseLastX = x;
    mMouseLastY = y;
    mStartTime = endTime;
}

function sendMouseMove(serviceId, x, y) {
    sdk.post({
      profile: 'mouse',
      params: {
        serviceId: serviceId,
        x: x,
        y: y
      }
    }).then(json => {
        console.log('success');
    }).catch(e => {
        console.log('Failed to send move pointer. message=' + e.errorMessage);
    });
}

function sendMouseClick(serviceId, button) {
    sdk.post({
      profile: 'mouse',
      attribute: 'click',
      params: {
        serviceId: serviceId,
        button: button
      }
    }).then(json => {
        console.log('success');
    }).catch(e => {
        console.log('Failed to send move pointer. message=' + e.errorMessage);
    });
}

function getMouseMode(serviceId) {
    sdk.get({
      profile: 'mouse',
      params: {
        serviceId: serviceId
      }
    }).then(json => {
        console.log('success');
        console.log(json);
        mMouseMode = json.mouse.type;
    }).catch(e => {
        console.log('Failed to get mouse info. message=' + e.errorMessage);
    });
}
