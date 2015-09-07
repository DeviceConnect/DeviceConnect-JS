var mAccessToken = null;
var mClientId = null;
var mServiceId = null;

function init() {
  dConnect.setExtendedOrigin("http://localhost:4035/");
  if (DEVICE_CONNECT_HOST) {
    dConnect.setHost(DEVICE_CONNECT_HOST);
  }

  if (TEST_TIMEOUT == undefined) {
    TEST_TIMEOUT = 10000;
  }

  if (DEVICE_NAME == undefined) {
    DEVICE_NAME = 'Test Success Device';
  }

  QUnit.config.autostart = false;
  QUnit.config.testTimeout = TEST_TIMEOUT;
}

function checkErrorCode(errorCode) {
  return errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ATTRIBUTE
      || errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ACTION
      || errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_PROFILE;
}

function searchTestDevice(services) {
  var re = new RegExp(DEVICE_NAME, 'i');

  for (var i = 0; i < services.length; i++) {
    var service = services[i];
    console.log('services: ' + services + ', name: ' + service.name);
    if (service.name.match(re)) {
      return service.id;
    }
  }
  return null;
}

function getAccessToken(func) {
  var scopes = Array(
      // core profile
      'authorization',
      'battery',
      'canvas',
      'connect',
      'deviceorientation',
      'file_descriptor',
      'file',
      'keyevent',
      'media_player',
      'mediastream_recording',
      'serviceinformation',
      'servicediscovery',
      'notification',
      'phone',
      'proximity',
      'settings',
      'system',
      'touch',
      'vibration',

      // extra profile
      'camera',
      'dice',
      'drive_controller',
      'light',
      'remote_controller',
      'sphero',
      'temperature',
      'health',
      'humandetect',
      'omnidirectional_image',
      'humidity',
      'illuminance',
      'powermeter'
  );

  dConnect.authorization(scopes,
      'Device Connect Javascript Test',
      function(clientId, accessToken) {
        mAccessToken = accessToken;
        mClientId = clientId;
        getTestServiceId(func);
      },
      function(errorCode, errorMessage) {
        func(null, null);
      }
  );
}

function getTestServiceId(func) {
  if (mAccessToken == null) {
    getAccessToken(func);
  } else if (mServiceId == null) {
    dConnect.discoverDevices(mAccessToken, function(json) {
        mServiceId = searchTestDevice(json.services);
        func(mAccessToken, mServiceId);
      },
      function(errorCode, errorMessage) {
        func(errorCode, 'Error: ' + errorMessage);
      }
    );
  } else {
    func(mAccessToken, mServiceId);
  }
}

function searchTestService(successCallback, errorCallback) {
  getTestServiceId(function(accessToken, serviceId) {
    if (accessToken == null || serviceId == null) {
      errorCallback(-2, 'Device not found.');
    } else {
      successCallback(accessToken, serviceId);
    }
  });
}

function openWebsocketInternal(func) {
  getTestServiceId(function(accessToken, serviceId) {
    if (accessToken == null || serviceId == null) {
      func(null, null, null);
    } else {
      if (dConnect.isConnectedWebSocket()) {
        func(accessToken, serviceId, mClientId);
      } else {
        dConnect.connectWebSocket(mClientId,
          function(errorCode, errorMessage) {
            if (errorCode === 0) {
              func(accessToken, serviceId, mClientId);
            }
          });
      }
    }
  });
}

function openWebsocket(builder, assert, timeout, eventCallback) {
  var eventCount = 0;
  openWebsocketInternal(function(accessToken, serviceId, sessionKey) {
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    dConnect.addEventListener(uri, function(message) {
      var ret = eventCallback(message);
      if (ret) {
        eventCount++;
      }
    }, function() {
      assert.ok(true, 'Succeeded to add the event listener.');
      dConnect.removeEventListener(uri, function() {
        assert.ok(true, 'Succeeded to remove the event listener.');
        QUnit.start();
      }, function(errorCode, errorMessage) {
        assert.ok(false, 'Failed to remove the event listener.');
        QUnit.start();
      });
    }, function(errorCode, errorMessage) {
      if (errorCode == 2) {
        assert.ok(true, 'Profile not support');
      } else if (errorCode == 4) {
        assert.ok(true, 'Attribute not support');
      } else {
        assert.ok(false,
            'Failed to add the event listener. errorCode=' + errorCode +
            ' errorMessage: ' + errorMessage);
      }
      QUnit.start();
    });
  });
}

//RFC3339
function createCurrentDateString() {
  var now = new Date();
  var dateString = now.getFullYear() + "-" +
    ("0" + (now.getMonth() + 1)).slice (-2) + "-" +
    ("0" + now.getDate()).slice (-2) + "T" +
    ("0" + now.getHours()).slice (-2) + ":" +
    ("0" + now.getMinutes()).slice (-2) + ":" +
    ("0" + now.getSeconds()).slice (-2) +
    (function (offset){
    	var z = (offset < 0) ? "+" : "-";
    	offset = Math.abs(offset);
    	z +=  ("0" + (offset / 60)).slice(-2) + ":" + ("0" + (offset % 60)).slice(-2);
    	return z;
    })(now.getTimezoneOffset());
  return dateString;
}
