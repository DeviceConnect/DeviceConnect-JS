var mAccessToken = null;
var mClientId = null;
var mServiceId = null;

function initScopes() {
  return Array(
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
      'geolocation',
      'echonetLite',
      'atmosphericPressure',
      'fabo'

  );
}
function containsScope(profile) {
  for (var i = 0; i < mScopes.length; i++) {
    if (mScope[i] == profile) {
      return true;
    }
  }
  return false;
}
function appendScope(uri) {
  var elm = document.createElement('a');
  elm.href = uri;

  var p = elm.pathname.split('/');
  if (p.length < 3) {
    return;
  }
  if (!containsScope(p[2])) {
    mScopes.push(p[2]);
  }
}
var mScopes = initScopes();


function init() {
  dConnect.setExtendedOrigin("http://localhost:4035/");
  if (DEVICE_CONNECT_HOST) {
    dConnect.setHost(DEVICE_CONNECT_HOST);
  }

  if (TEST_TIMEOUT == undefined) {
    TEST_TIMEOUT = 10000;
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
  dConnect.authorization(mScopes,
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

function searchDevice() {
    getServiceId(function(result, services) {
        if (result == 1) {
            mAccessToken = undefined;
            searchDevice();
            return;
        }
      var serviceIdDiv = document.getElementById("selectServiceId");
      var str = '<select id="type">';
      var index = 0;
      var serviceId;
      var data = getCookies();
      if (data['serviceId']) {
          serviceId = data['serviceId'];
      }

      for (var i = 0; i < services.length; i++) {
        var service = services[i];
        str += '<option value="' + service.id;
        if (serviceId === service.id) {
            str += '" selected="true';
        }
        str += '">' + service.name + '</option>';
      }
      str += '</select>';
      serviceIdDiv.innerHTML = str;
    });
}


function getDiscoveryAccessToken(func) {
  dConnect.setExtendedOrigin("http://localhost:4035/");
  var ip = document.forms.form1.ip.value;
  dConnect.setHost(ip);
  dConnect.authorization(mScopes,
      'Device Connect Javascript Test',
      function(clientId, accessToken) {
        mAccessToken = accessToken;
        document.cookie = 'accessToken=' + accessToken;
        mClientId = clientId;
        getServiceId(func);
      },
      function(errorCode, errorMessage) {
        func(null, null);
      }
  );
}
function getServiceId(func) {
  if (mAccessToken == null) {
    getDiscoveryAccessToken(func);
  } else {
    dConnect.discoverDevices(mAccessToken, function(json) {
        func(json.result, json.services);
      },
      function(errorCode, errorMessage) {
        func(1, errorMessage);
      }
    );
  }
}
function getCookies() {
    var result = new Array();
    var allcookies = document.cookie;
    if (allcookies != '') {
        var cookies = allcookies.split('; ');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].split('=');
            result[cookie[0]] = decodeURIComponent(cookie[1]);
        }
    }
    return result;
}


function openWebsocketInternal(func) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
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
  dConnect.discoverDevices(getCurrentAccessToken(), function(json) {
      mServiceId = searchHost(json.services);
      func(getCurrentAccessToken(), mServiceId);
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

function getCurrentServiceId() {
  return getQueryString()['serviceId'];
}

function getCurrentAccessToken() {
  return getQueryString()['accessToken'];
}