/**
 mouse.js
 Copyright (c) 2017 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var mMouseLastX;
var mMouseLastY;
var mStartTime;
var mDragFlag = false;
var mMouseMode;

/* Show Mouse page */
function showMouse(serviceId) {
    initAll();
    setTitle('Mouse Profile');

    var sessionKey = currentClientId;
    var btnStr = getBackButton('Device Top', 'searchSystem', serviceId, sessionKey);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    var contents = '<div style="text-align: center;">';
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

    var supportTouch = 'ontouchend' in document;

    var EVENTNAME_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';
    var EVENTNAME_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
    var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

    $("#hogpBox").bind(EVENTNAME_TOUCHSTART, function(event) {
        onMouseDown(serviceId, event);
    });

    $("#hogpBox").bind(EVENTNAME_TOUCHEND, function(event) {
        onMouseUp(serviceId, event);
    });

    $("#hogpBox").bind(EVENTNAME_TOUCHMOVE, function(event) {
        onMouseMove(serviceId, event);
        event.preventDefault();
    });
    
    $("#hogpBox").bind('mouseleave', function(event) {
        onMouseUp(serviceId, event);
    });

    $("#hogpBox").bind('touchcancel', function(event) {
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

    var endTime = Date.now();
    if (endTime - mStartTime < 40) {
        return;
    }

    var original = event.originalEvent;
    var x, y;
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
    var builder = new dConnect.URIBuilder();
    builder.setProfile('mouse');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('x', x);
    builder.addParameter('y', y);
    
    var uri = builder.build();
    console.log(uri);
    dConnect.post(uri, null, null, function(json) {
        console.log('success');
    }, function(errorCode, errorMessage) {
        console.log('Failed to send move pointer. message=' + errorMessage);
    });
}

function sendMouseClick(serviceId, button) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('mouse');
    builder.setAttribute('click');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('button', button);
    
    var uri = builder.build();
    dConnect.post(uri, null, null, function(json) {
        console.log('success');
    }, function(errorCode, errorMessage) {
        console.log('Failed to send move pointer. message=' + errorMessage);
    });
}

function getMouseMode(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('mouse');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
        console.log('success');
        console.log(json);
        mMouseMode = json.mouse.type;
    }, function(errorCode, errorMessage) {
        console.log('Failed to get mouse info. message=' + errorMessage);
    });
}

