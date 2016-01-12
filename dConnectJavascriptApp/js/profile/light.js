/**
 light.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var lightProfileOriginalLightName;

/**
 * Light Menu
 *
 * @param {String}serviceId service ID
 */
function showSearchLight(serviceId) {
  closeLoading();
  initAll();

  setTitle('Light List');
  var btnStr = getBackButton('Device Top', 'doSearchLightBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  showLoading();
  requestLightSearchLight(serviceId, accessToken,function(json){
    listLights(serviceId, json.lights);
    closeLoading();
  },function(errorCode, errorMessage){
    showError('GET light', errorCode, errorMessage);
    closeLoading();
  });
}

/**
 * Back button to profile list
 *
 * @param {String}serviceId service ID
 * @param {String}sessionKey session key
 */
function doSearchLightBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Back button to light list
 *
 * @param {String}serviceId service ID
 * @param {String}sessionKey session key
 */
function doLightBack(serviceId, sessionKey) {
  showSearchLight(serviceId);
}

/**
 * Shows lights.
 * @param {string}serviceId service ID
 * @param {Array}lights array of light name
 */
function listLights(serviceId, lights) {
  var str = '';
  for (var i = 0; i < lights.length; i++) {
    var lightName = lights[i].name;

    if (lightName == 'Dice+ 1') {
      lightName = 'Dice+ [1]';
    } else if (lightName == 'Dice+ 2') {
      lightName = 'Dice+ [2]';
    } else if (lightName == 'Dice+ 4') {
      lightName = 'Dice+ [3]';
    } else if (lightName == 'Dice+ 8') {
      lightName = 'Dice+ [4]';
    } else if (lightName == 'Dice+ 16') {
      lightName = 'Dice+ [5]';
    } else if (lightName == 'Dice+ 32') {
      lightName = 'Dice+ [6]';
    } else if (lightName == 'Dice+ -1') {
      lightName = 'Dice+ [All]';
    }

    str += '<li><a href="javascript:showLight(' +
     '\'' + serviceId +'\',' +
    ' \'' + lights[i].lightId + '\',' +
    ' \'' + lights[i].name + '\');"' +
    ' value="' + lights[i].name +'">' + lightName + '</a></li>';
  }
  reloadList(str);
}

/**
 * Shows a light.
 */
function showLight(serviceId, lightId, lightName) {
  initAll();

  lightProfileOriginalLightName = lightName;

  setTitle('Light Profile (Light)');
  var btnStr = getBackButton('Light List', 'doLightBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var contents = $('#contents');

  contents.append('<h3>Light Name</h3>');
  contents.append('<input type="text" id="light-name-form" data-inline="true" value="' + lightName + '" />');
  // contents.append('<input id="changeLight" type="button" value="Change name" />');

  contents.append('<h3>Brightness of light</h3>');
  contents.append($('<label for="slider-0">Brightness:</label>'));
  contents.append($('<input type="range" name="slider"' +
                  ' id="brightness" value="100" min="0" max="100" step="1" />'));

  contents.append('<h3>Color of light</h3>');
  var divColor = $('<div />');
  divColor.append($('<label for="slider-0">Red:</label>'));
  divColor.append($('<input type="range" name="slider" id="red" value="25" min="0" max="255"  />'));

  divColor.append($('<label for="slider-0">Green:</label>'));
  divColor.append($('<input type="range" name="slider" id="green" value="25" min="0" max="255"  />'));

  divColor.append($('<label for="slider-0">Blue:</label>'));
  divColor.append($('<input type="range" name="slider" id="blue" value="25" min="0" max="255"  />'));
  contents.append(divColor);

  contents.append('<h3>Flashing of light</h3>');
  var divFlashing = $('<div />');
  divFlashing.append($('<input type="text" id="input-flashing" value="" placeholder="500,500,500,500,500,500,500,500"/>'));
  contents.append(divFlashing);

  contents.append($('<input type="button" onclick="javascript:doLight(' +
                    '\'' + serviceId + '\',\'' + lightId +'\',' +
                    ' 1);" value="On" name="On" id="On"/>'));

  contents.append($('<input type="button" onclick="javascript:doLight(' +
                    '\'' + serviceId + '\',\'' + lightId +'\',' +
                    ' 0);" value="Off" name="Off" id="Off"/>'));

  contents.append($('<input type="button" onclick="javascript:doStatusChange(' +
                    '\'' + serviceId + '\',\'' + lightId +'\',' +
                    ' 0);" value="StatusChange" name="StatusChange" id="StatusChange"/>'));

  reloadContent(contents.html());
}

/**
 * Turn on or off specified light
 *
 * @param {String} serviceId serviceID
 * @param {String} lightId light ID
 * @param {String} value ON=1, OFF=0
 */
function doLight(serviceId, lightId, value) {
  if (value == '1') {
    if(!checkFlashing()){
      return;
    }
    var brightness = document.getElementById('brightness').value / 100;
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    red = zeroPadding(parseInt(red).toString(16));
    green = zeroPadding(parseInt(green).toString(16));
    blue = zeroPadding(parseInt(blue).toString(16));
    var color = red + green + blue;
    var flashing = getFlashing();

    showLoading();
    requestLightOn(serviceId, accessToken, lightId, brightness, color, flashing,function(json){
      alert('Success');
      closeLoading();
    },function(errorCode, errorMessage){
      showError('POST light', errorCode, errorMessage);
      closeLoading();
    });
  } else {
    showLoading();
    requestLightOff(serviceId, accessToken, lightId,function(json){
      alert('Success');
      closeLoading();
    },function(errorCode, errorMessage){
      showError('DELETE light', errorCode, errorMessage);
      closeLoading();
    });
  }
}

/**
 * Change light status (including name)
 *
 * @param {String} serviceId serviceID
 * @param {String} lightId light ID
 * @param {String} value ON=1, OFF=0
 */
function doStatusChange(serviceId, lightId) {
  if(!checkFlashing()){
    return;
  }
  var brightness = document.getElementById('brightness').value / 100;
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;
  red = zeroPadding(parseInt(red).toString(16));
  green = zeroPadding(parseInt(green).toString(16));
  blue = zeroPadding(parseInt(blue).toString(16));
  var color = red + green + blue;
  var flashing = getFlashing();

  var name = $('#light-name-form').val();

  showLoading();
  requestLightChangeStatus(serviceId, accessToken, lightId, name, brightness, color, flashing, function(json){
    alert('Success');
    lightProfileOriginalLightName = name;
    closeLoading();
  },function(errorCode, errorMessage){
    showError('PUT light', errorCode, errorMessage);
    $('#light-name-form').val(lightProfileOriginalLightName);
    closeLoading();
  });
}

/**
 * Request light list.
 *
 * @param {String}serviceId service ID
 * @param {String}accessToken access token
 * @param {function}successCallback called when request succeeded
 * @param {function}errorCallback called when request failed
 */
function requestLightSearchLight(serviceId, accessToken, successCallback, errorCallback){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('light');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri:' + uri); }
  dConnect.get(uri, null, function(json){
    if (DEBUG) { console.log('Response: ', json); }
    successCallback(json);
  }, function(errorCode, errorMessage) {
    errorCallback(errorCode, errorMessage);
  });
}

/**
 * Request light on.
 *
 * @param {String}serviceId service ID
 * @param {String}accessToken access token
 * @param {String}lightId light ID
 * @param {String}brightness brightness(option)
 * @param {String}color color(option)
 * @param {String}flashing flashing(option)
 * @param {function}successCallback called when request succeeded
 * @param {function}errorCallback called when request failed
 */
function requestLightOn(serviceId, accessToken, lightId, brightness, color, flashing, successCallback, errorCallback){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('light');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('lightId', lightId);
  if(color !== undefined){
    builder.addParameter('color', color);
  }
  if(brightness !== undefined){
    builder.addParameter('brightness', brightness);
  }
  if(flashing !== undefined){
    builder.addParameter('flashing', flashing);
  }
  var uri = builder.build();
  if (DEBUG) { console.log('Uri: ' + uri); }
  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) { console.log('Response: ', json); }
    successCallback(json);
  }, function(errorCode, errorMessage) {
    errorCallback(errorCode, errorMessage);
  });
}

/**
 * Request light off.
 *
 * @param {String}serviceId service ID
 * @param {String}accessToken access token
 * @param {String}lightId light ID
 * @param {function}successCallback called when request succeeded
 * @param {function}errorCallback called when request failed
 */
function requestLightOff(serviceId, accessToken, lightId, successCallback, errorCallback){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('light');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('lightId', lightId);
  var uri = builder.build();
  if (DEBUG) { console.log('Uri: ' + uri); }
  dConnect.delete(uri, null, function(json) {
    if (DEBUG) { console.log('Response: ', json); }
    successCallback(json);
  }, function(errorCode, errorMessage) {
    errorCallback(errorCode, errorMessage);
  });
}

/**
 * Request change light status.
 *
 * @param {String}serviceId service ID
 * @param {String}accessToken access token
 * @param {String}lightId light ID
 * @param {String}name light name
 * @param {String}brightness brightness(option)
 * @param {String}color color(option)
 * @param {String}flashing flashing(option)
 * @param {function}successCallback called when request succeeded
 * @param {function}errorCallback called when request failed
 */
function requestLightChangeStatus(serviceId, accessToken, lightId, name, brightness, color, flashing, successCallback, errorCallback){
  var builder = new dConnect.URIBuilder();
  builder.setProfile('light');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('lightId', lightId);
  builder.addParameter('name', name);
  if(color !== undefined){
    builder.addParameter('color', color);
  }
  if(brightness !== undefined){
    builder.addParameter('brightness', brightness);
  }
  if(flashing !== undefined){
    builder.addParameter('flashing', flashing);
  }
  var uri = builder.build();
  if (DEBUG) { console.log('Uri: ' + uri); }
  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) { console.log('Response: ', json); }
    successCallback(json);
  }, function(errorCode, errorMessage) {
    errorCallback(errorCode, errorMessage);
  });
}

/**
 * flashingの入力状況をチェックする。不正な値な場合はエラーダイアログが表示される。
 *
 * @return 適正値であればtrue
 */
function checkFlashing(){
  var flashing = getFlashing();
  if(flashing === undefined){
    return true;
  }
  var values = flashing.split(',');
  var wrongValue = false;
  $.each(values, function(index, value){
    if(wrongValue){
      return;
    }
    if(!isNumeric(value) || value < 0){
      wrongValue = true;
    }
  });
  if(wrongValue){
    alert('flashing value is wrong. please check ex)500,500,500,500');
    return false;
  } else {
    return true;
  }
}

/**
 * flashing値を取得する
 *
 * @return flashing値。未入力の場合はundefined
 */
function getFlashing(){
  var flashing = $('#input-flashing').val();
  if(flashing === ''){
    return undefined;
  }
  return flashing;
}

/**
 * 数字かどうかを判定する
 *
 * @param {Object} obj
 */
function isNumeric(obj) {
  return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
}

/**
 * 1桁の場合は、0を先頭につける
 *
 * @param {Integer} value
 */
function zeroPadding(value) {
  if (value.length == 1) {
    return '0' + value;
  } else {
    return value;
  }
}
