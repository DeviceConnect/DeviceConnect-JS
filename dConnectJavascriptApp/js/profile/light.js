/**
 light.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

let lightProfileOriginalLightName;

/**
 * Light Menu
 *
 * @param {String}serviceId service ID
 */
function showSearchLight(serviceId) {
  closeLoading();
  initAll();

  setTitle('Light List');
  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  showLoading();
  requestLightSearchLight(serviceId).then(json => {
    listLights(serviceId, json.lights);
    closeLoading();
  }).catch(e => {
    showError('GET light', e.errorCode, e.errorMessage);
    closeLoading();
  });
}

/**
 * Back button to light list
 *
 * @param {String}serviceId service ID
 */
function doLightBack(serviceId) {
  showSearchLight(serviceId);
}

/**
 * Shows lights.
 * @param {string}serviceId service ID
 * @param {Array}lights array of light name
 */
function listLights(serviceId, lights) {
  let str = '';
  for (let i = 0; i < lights.length; i++) {
    let lightName = lights[i].name;

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
  let btnStr = getBackButton('Light List', 'doLightBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let contents = $('#contents');

  contents.append('<h3>Light Name</h3>');
  contents.append('<input type="text" id="light-name-form" data-inline="true" value="' + lightName + '" />');
  // contents.append('<input id="changeLight" type="button" value="Change name" />');

  contents.append('<h3>Brightness of light</h3>');
  contents.append($('<label for="slider-0">Brightness:</label>'));
  contents.append($('<input type="range" name="slider"' +
                  ' id="brightness" value="100" min="0" max="100" step="1" />'));

  contents.append('<h3>Color of light</h3>');
  let divColor = $('<div />');
  divColor.append($('<label for="slider-0">Red:</label>'));
  divColor.append($('<input type="range" name="slider" id="red" value="25" min="0" max="255"  />'));

  divColor.append($('<label for="slider-0">Green:</label>'));
  divColor.append($('<input type="range" name="slider" id="green" value="25" min="0" max="255"  />'));

  divColor.append($('<label for="slider-0">Blue:</label>'));
  divColor.append($('<input type="range" name="slider" id="blue" value="25" min="0" max="255"  />'));
  contents.append(divColor);

  contents.append('<h3>Flashing of light</h3>');
  let divFlashing = $('<div />');
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
    let brightness = document.getElementById('brightness').value / 100;
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    red = zeroPadding(parseInt(red).toString(16));
    green = zeroPadding(parseInt(green).toString(16));
    blue = zeroPadding(parseInt(blue).toString(16));
    let color = red + green + blue;
    let flashing = getFlashing();

    showLoading();
    requestLightOn(serviceId, lightId, brightness, color, flashing).then(json => {
      alert('Success');
      closeLoading();
    }).catch(e => {
      showError('POST light', e.errorCode, e.errorMessage);
      closeLoading();
    });
  } else {
    showLoading();
    requestLightOff(serviceId, lightId).then(json => {
      alert('Success');
      closeLoading();
    }).catch(e => {
      showError('DELETE light', e.errorCode, e.errorMessage);
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
  let brightness = document.getElementById('brightness').value / 100;
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  red = zeroPadding(parseInt(red).toString(16));
  green = zeroPadding(parseInt(green).toString(16));
  blue = zeroPadding(parseInt(blue).toString(16));
  let color = red + green + blue;
  let flashing = getFlashing();

  let name = $('#light-name-form').val();

  showLoading();
  requestLightChangeStatus(serviceId, lightId, name, brightness, color, flashing).then(json => {
    alert('Success');
    lightProfileOriginalLightName = name;
    closeLoading();
  }).catch(e => {
    showError('PUT light', e.errorCode, e.errorMessage);
    $('#light-name-form').val(lightProfileOriginalLightName);
    closeLoading();
  });
}

/**
 * Request light list.
 *
 * @param {String}serviceId service ID
 */
function requestLightSearchLight(serviceId){
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: 'light',
      params: {
        serviceId: serviceId
      }
    }).then(json => {
      if (DEBUG) { console.log('Response: ', json); }
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

/**
 * Request light on.
 *
 * @param {String}serviceId service ID
 * @param {String}lightId light ID
 * @param {String}brightness brightness(option)
 * @param {String}color color(option)
 * @param {String}flashing flashing(option)
 */
function requestLightOn(serviceId, lightId, brightness, color, flashing){
  let params = {
    profile: 'light',
    params: {
      serviceId: serviceId,
      lightId: lightId
    }
  };
  if(color !== undefined){
    params.params['color'] = color;
  }
  if(brightness !== undefined){
    params.params['brightness'] = brightness;
  }
  if(flashing !== undefined){
    params.params['flashing'] = flashing;
  }
  return new Promise((resolve, reject) => {
    sdk.post(params).then(json => {
      if (DEBUG) { console.log('Response: ', json); }
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

/**
 * Request light off.
 *
 * @param {String}serviceId service ID
 * @param {String}lightId light ID
 */
function requestLightOff(serviceId, lightId){
  return new Promise((resolve, reject) => {
    sdk.delete({
      profile: 'light',
      params: {
        serviceId: serviceId,
        lightId: lightId
      }
    }).then(json => {
      if (DEBUG) { console.log('Response: ', json); }
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

/**
 * Request change light status.
 *
 * @param {String}serviceId service ID
 * @param {String}lightId light ID
 * @param {String}name light name
 * @param {String}brightness brightness(option)
 * @param {String}color color(option)
 * @param {String}flashing flashing(option)
 */
function requestLightChangeStatus(serviceId, lightId, name, brightness, color, flashing){
  let params = {
    profile: 'light',
    params: {
      serviceId: serviceId,
      lightId: lightId,
      name: name
    }
  };
  if(color !== undefined){
    params.params['color'] = color;
  }
  if(brightness !== undefined){
    params.params['brightness'] = brightness;
  }
  if(flashing !== undefined){
    params.params['flashing'] = flashing;
  }
  return new Promise((resolve, reject) => {
    sdk.put(params).then(json => {
      if (DEBUG) { console.log('Response: ', json); }
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

/**
 * flashingの入力状況をチェックする。不正な値な場合はエラーダイアログが表示される。
 *
 * @return 適正値であればtrue
 */
function checkFlashing(){
  let flashing = getFlashing();
  if(flashing === undefined){
    return true;
  }
  let values = flashing.split(',');
  let wrongValue = false;
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
  let flashing = $('#input-flashing').val();
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
