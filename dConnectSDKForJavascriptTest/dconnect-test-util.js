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


function sleep(ms) {
    var d1 = new Date().getTime();
    var d2 = new Date().getTime();
    while( d2 < (d1 + ms) ) {
        d2 = new Date().getTime();
    }
    return;
}

function checkErrorCode(errorCode) {
  return errorCode == 14 || errorCode == dConnect.constants.ErrorCode.NOT_SUPPORT_ATTRIBUTE
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
      'connection',
      'deviceorientation',
      'file',
      'keyevent',
      'mediaplayer',
      'mediastreamrecording',
      'serviceinformation',
      'servicediscovery',
      'notification',
      'phone',
      'proximity',
      'setting',
      'system',
      'touch',
      'vibration',

      // extra profile
      'camera',
      'dice',
      'drivecontroller',
      'light',
      'remotecontroller',
      'sphero',
      'temperature',
      'health',
      'humandetection',
      'videochat',
      'omnidirectionalimage',
      'humidity',
      'illuminance',
      'powermeter',
      'tv',
      'airconditioner',
      'gpio',
      'ecg',
      'stressEstimation',
      'poseEstimation',
      'walkState',
      'messageHook',
      'echonetLite'
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
      func(null, null);
    } else {
      if (dConnect.isConnectedWebSocket()) {
        func(accessToken, serviceId);
      } else {
        dConnect.connectWebSocket(accessToken,
          function(errorCode, errorMessage) {
            if (errorCode === 0) {
              func(accessToken, serviceId);
            }
          });
      }
    }
  });
}

function openWebsocket(builder, assert, timeout, eventCallback) {
  var eventCount = 0;
  openWebsocketInternal(function(accessToken, serviceId) {
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    dConnect.addEventListener(uri, function(message) {
      var ret = eventCallback(message);
      if (ret) {
        eventCount++;
      }
    }, function() {
      assert.ok(true, 'Succeeded to add the event listener.');
      setTimeout(function() {
        dConnect.removeEventListener(uri, function() {
          assert.ok(true, 'Succeeded to remove the event listener.');
          QUnit.start();
        }, function(errorCode, errorMessage) {
          assert.ok(false, 'Failed to remove the event listener.');
          QUnit.start();
        });
      }, timeout);
    }, function(errorCode, errorMessage) {
      if (errorCode == 2) {
        assert.ok(true, 'Profile not support');
      } else if (errorCode == 4) {
        assert.ok(true, 'Attribute not support');
      } else if (errorCode == 14) {
        assert.ok(true, 'Request is out of scope');
      } else {
        assert.ok(false,
            'Failed to add the event listener. errorCode=' + errorCode +
            ' errorMessage: ' + errorMessage);
      }
      QUnit.start();
    });
  });
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
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
// テスト結果を端末に保存する
function saveTestResult(result, blob) {
  searchHostService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile(dConnect.constants.file.PROFILE_NAME);
    builder.setAttribute(dConnect.constants.file.ATTR_SEND);
    var formData = new FormData();
    formData.append('serviceId', serviceId);
    formData.append('accessToken', accessToken);
    formData.append('path', '/' + result);
    formData.append('mimeType', 'text/xml');
    formData.append('data', blob);
    var uri = builder.build();
    dConnect.post(uri, null, formData, function(json) {
      alert('save test data!! for ' + result);
    }, function(errorCode, errorMessage) {
      alert('failure!! save test data for ' + result + " " + errorMessage);
    });

  }, function(errorCode, errorMessage) {
    alert('failure!!! save test data for ' + result);
  });
};

function searchHost(services) {
  var re = new RegExp('Host', 'i');

  for (var i = 0; i < services.length; i++) {
    var service = services[i];
    if (service.name.match(re)) {
      return service.id;
    }
  }
  return null;
};

function getHostServiceId(func) {
  dConnect.discoverDevices(mAccessToken, function(json) {
      mServiceId = searchHost(json.services);
      func(mAccessToken, mServiceId);
    },
    function(errorCode, errorMessage) {
      func(errorCode, 'Error: ' + errorMessage);
    }
  );
};

function searchHostService(successCallback, errorCallback) {
  getHostServiceId(function(accessToken, serviceId) {
    if (accessToken == null || serviceId == null) {
      errorCallback(-2, 'Device not found.');
    } else {
      successCallback(accessToken, serviceId);
    }
  });
};