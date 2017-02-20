/**
 geolocation.js
 Copyright (c) 2017 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Geolocation
 */
function showGeolocation(serviceId) {
  initAll();
  setTitle('Geolocation Profile(Event)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doGeolocationBack',
      serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
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
          serviceId + '\', \'' + sessionKey + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doGeolocationUnregister(\'' +
          serviceId + '\', \'' + sessionKey +
          '\')\" type=\"button\" value=\"Unregister\" />';
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
 * sessionKey セッションKEY
 */
function doGeolocationBack(serviceId, sessionKey) {
  doGeolocationUnregister(serviceId, sessionKey);
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
  var maximumAgeParam = $('#set_maximumAge').val();

  var highAccuracyGetValue = $('#highAccuracyGet').val();
  if (highAccuracyGetValue == 'null_value') {
    highAccuracyGetValue = null;
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('geolocation');
  builder.setAttribute('currentposition');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (highAccuracyGetValue) {
    builder.addParameter('highAccuracy', highAccuracyGetValue);
  }
  if (maximumAgeParam !== '') {
    builder.addParameter('maximumAge', maximumAgeParam);
  }
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.get(uri, null, function(json) {
    if (json.position) {
      setGeolocation(json);
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ' errorMessage=' + errorMessage);
  });
}

/**
 * Geolocation Event Regist
 */
function doGeolocationRegist(serviceId, sessionKey) {
  var intervalParam = $('#set_interval').val();

  var highAccuracyEventValue = $('#highAccuracyEvent').val();
  if (highAccuracyEventValue == 'null_value') {
    highAccuracyEventValue = null;
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('geolocation');
  builder.setAttribute('onwatchposition');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (highAccuracyEventValue) {
    builder.addParameter('highAccuracy', highAccuracyEventValue);
  }
  if (intervalParam !== '') {
    builder.addParameter('interval', intervalParam);
  }
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
    if (json.position) {
      setGeolocation(json);
    }
  }, function() {
    if (DEBUG) {
      console.log('Successed register Geolocation.');
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ' errorMessage=' + errorMessage);
  });
}

/**
 * Geolocation Event Unregist
 */
function doGeolocationUnregister(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('geolocation');
  builder.setAttribute('onwatchposition');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.removeEventListener(uri, function() {
    if (DEBUG) {
      console.log('Successed unregister Geolocation.');
    }
  }, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}
