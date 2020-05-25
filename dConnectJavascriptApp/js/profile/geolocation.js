/**
 geolocation.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Geolocation
 */
function showGeolocation(serviceId) {
  initAll();
  setTitle('Geolocation Profile(Event)');

  let btnStr = getBackButton('Device Top', 'doGeolocationBack',
      serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGeolocationGet(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<div>';
  str += '<SELECT name="highAccuracyGet" id="highAccuracyGet">';
  str += '<OPTION value="null_value">指定なし</OPTION>';
  str += '<OPTION value="false">通常精度</OPTION>';
  str += '<OPTION value="true">高精度</OPTION>';
  str += '</SELECT>';
  str += '</div>';
  str += '<div>';
  str += '<label for="maximumAge">MaximumAge</label>';
  str += '<input type="text" id="set_maximumAge" size="10" maxlength="10">';
  str += '</div>';

  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doGeolocationRegist(\'' +
          serviceId + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doGeolocationUnregister(\'' +
          serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';
  str += '<div>';
  str += '<SELECT name="highAccuracyEvent" id="highAccuracyEvent">';
  str += '<OPTION value="null_value">指定なし</OPTION>';
  str += '<OPTION value="false">通常精度</OPTION>';
  str += '<OPTION value="true">高精度</OPTION>';
  str += '</SELECT>';
  str += '</div>';
  str += '<div>';
  str += '<label for="interval">interval</label>';
  str += '<input type="text" id="set_interval" size="10" maxlength="10">';
  str += '</div>';

  str += '<form  name="geolocationForm">';
  str += 'Position - Coordinates<br>';
  str += '<input type="text" id="latitude" width="100%">';
  str += '<input type="text" id="longitude" width="100%">';
  str += '<input type="text" id="altitude" width="100%">';
  str += '<input type="text" id="accuracy" width="100%">';
  str += '<input type="text" id="altitudeAccuracy" width="100%">';
  str += '<input type="text" id="heading" width="100%">';
  str += '<input type="text" id="speed" width="100%">';
  str += 'Position - TimeStamp<br>';
  str += '<input type="text" id="timeStamp" width="100%">';
  str += 'Position - TimeStampString<br>';
  str += '<input type="text" id="timeStampString" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 */
function doGeolocationBack(serviceId) {
  doGeolocationUnregister(serviceId);
  searchSystem(serviceId);
}

function setGeolocation(json) {
  if (json.position.coordinates.latitude) {
    $('#latitude').val('latitude: ' + json.position.coordinates.latitude);
  }
  if (json.position.coordinates.longitude) {
    $('#longitude').val('longitude: ' + json.position.coordinates.longitude);
  }
  if (json.position.coordinates.altitude) {
    $('#altitude').val('altitude: ' + json.position.coordinates.altitude);
  }
  if (json.position.coordinates.accuracy) {
    $('#accuracy').val('accuracy: ' + json.position.coordinates.accuracy);
  }
  if (json.position.coordinates.altitudeAccuracy) {
    $('#altitudeAccuracy').val('altitudeAccuracy: ' + json.position.coordinates.altitudeAccuracy);
  }
  if (json.position.coordinates.heading) {
    $('#heading').val('heading: ' + json.position.coordinates.heading);
  }
  if (json.position.coordinates.speed) {
    $('#speed').val('speed: ' + json.position.coordinates.speed);
  }

  if (json.position.timeStamp) {
    $('#timeStamp').val('timeStamp: ' + json.position.timeStamp);
  }
  if (json.position.timeStampString) {
    $('#timeStampString').val('timeStampString: ' + json.position.timeStampString);
  }
}

function doGeolocationGet(serviceId) {
  let maximumAgeParam = $('#set_maximumAge').val();

  let highAccuracyGetValue = $('#highAccuracyGet').val();
  if (highAccuracyGetValue == 'null_value') {
    highAccuracyGetValue = null;
  }

  let params = {
    profile: 'geolocation',
    attribute: 'currentposition',
    params: {
      serviceId: serviceId
    }
  };
  if (highAccuracyGetValue) {
    params['highAccuracy'] = highAccuracyGetValue;
  }
  if (maximumAgeParam !== '') {
    params['maximumAge'] = maximumAgeParam;
  }
  sdk.get(params).then(json =>  {
    if (json.position) {
      setGeolocation(json);
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
  });
}

/**
 * Geolocation Event Regist
 */
function doGeolocationRegist(serviceId) {
  let intervalParam = $('#set_interval').val();

  let highAccuracyEventValue = $('#highAccuracyEvent').val();
  if (highAccuracyEventValue == 'null_value') {
    highAccuracyEventValue = null;
  }
  let params = {
    profile: 'geolocation',
    attribute: 'onwatchposition',
    params: {
      serviceId: serviceId
    }
  };
  if (highAccuracyEventValue) {
    params['highAccuracy'] = highAccuracyEventValue;
  }
  if (intervalParam !== '') {
    params['interval'] = intervalParam;
  }
  sdk.addEventListener(params, (message) => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    let json = JSON.parse(message);
    if (json.position) {
      setGeolocation(json);
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Successed register Geolocation');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
  });
}

/**
 * Geolocation Event Unregist
 */
function doGeolocationUnregister(serviceId) {
  sdk.removeEventListener({
    profile: 'geolocation',
    attribute: 'onwatchposition',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Successed unregister Geolocation.');
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}
