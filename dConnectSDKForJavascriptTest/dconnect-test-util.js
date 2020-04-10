let mServiceId = null;
let sdk;
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
      'fabo',
      'mouse',
      'keyboard',
      'hogp',
      'device'

  );
}
function containsScope(profile) {
  for (let i = 0; i < mScopes.length; i++) {
    if (mScope[i] == profile) {
      return true;
    }
  }
  return false;
}
function appendScope(uri) {
  let elm = document.createElement('a');
  elm.href = uri;

  let p = elm.pathname.split('/');
  if (p.length < 3) {
    return;
  }
  if (!containsScope(p[2])) {
    mScopes.push(p[2]);
  }
}
let mScopes = initScopes();


function init() {
  if (TEST_TIMEOUT == undefined) {
    TEST_TIMEOUT = 10000;
  }

  sdk = new dConnectSDK({
        host: DEVICE_CONNECT_HOST,
        port: 4035,
        appName: 'SDK Auto Test',
        scopes: mScopes
    });

  QUnit.config.autostart = false;
  QUnit.config.testTimeout = TEST_TIMEOUT;
}


function sleep(ms) {
    let d1 = new Date().getTime();
    let d2 = new Date().getTime();
    while( d2 < (d1 + ms) ) {
        d2 = new Date().getTime();
    }
    return;
}

function checkErrorCode(errorCode) {
  return errorCode == dConnectSDK.constants.errorCode.UNKNOWN_ATTRIBUTE
      || errorCode == dConnectSDK.constants.errorCode.SCOPE
      || errorCode == dConnectSDK.constants.errorCode.NOT_SUPPORT_ATTRIBUTE
      || errorCode == dConnectSDK.constants.errorCode.NOT_FOUND_SERVICE
      || errorCode == dConnectSDK.constants.errorCode.NOT_SUPPORT_ACTION
      || errorCode == dConnectSDK.constants.errorCode.NOT_SUPPORT_PROFILE;
}

function checkSuccessErrorCode(assert, e, errorCode) {
  if (e.errorCode == errorCode) {
    assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  } else if (checkErrorCode(e.errorCode)) {
    assert.ok(true, "not support");
  } else {
    assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
  }
}

function searchTestDevice(services) {
  let re = new RegExp(DEVICE_NAME, 'i');

  for (let i = 0; i < services.length; i++) {
    let service = services[i];
    console.log('services: ' + services + ', name: ' + service.name);
    if (service.name.match(re)) {
      return service.id;
    }
  }
  return null;
}

function getTestServiceId() {
  return new Promise((resolve, reject) => {
    if (mServiceId == null) {
      sdk.discoverDevices().then(json => {
          mServiceId = searchTestDevice(json.services);
          resolve(mServiceId);
        }).catch(e => {
          reject(e);
        }
      );
    } else {
      resolve(mServiceId);
    }
  });
}

function searchTestService() {
  return new Promise((resolve, reject) => {
    getTestServiceId().then(serviceId => {
      resolve(serviceId);
    }).catch(e => {
      reject(e);
    });
  });
}

function searchDevice() {
    getServiceId().then(services => {
      let serviceIdDiv = document.getElementById("selectServiceId");
      let str = '<select id="type">';
      let index = 0;
      let serviceId;
      let data = getCookies();
      if (data['serviceId']) {
          serviceId = data['serviceId'];
      }

      for (let i = 0; i < services.length; i++) {
        let service = services[i];
        str += '<option value="' + service.id;
        if (serviceId === service.id) {
            str += '" selected="true';
        }
        str += '">' + service.name + '</option>';
      }
      str += '</select>';
      serviceIdDiv.innerHTML = str;
    }).catch(e => {
      console.log("e:" + JSON.stringify(e));
    });
}

function getServiceId(func) {
  return new Promise((resolve, reject) => {
    sdk.discoverDevices().then(json => {
        resolve(json.services);
      }).catch(e => {
        reject(e);
      }
    );
  });
}
function getCookies() {
    let result = new Array();
    let allcookies = document.cookie;
    if (allcookies != '') {
        let cookies = allcookies.split('; ');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split('=');
            result[cookie[0]] = decodeURIComponent(cookie[1]);
        }
    }
    return result;
}


function openWebsocketInternal() {
  let serviceId = getCurrentServiceId();
  return new Promise((resolve, reject) => {
    if (sdk.isConnectedWebSocket()) {
      resolve(serviceId);
    } else {
      sdk.connectWebSocket((state, message) => {
          if (state <= 1) {
            resolve(serviceId);
          } else {
            reject(state)
          }
        });
    }
  });
}

function openWebsocket(params, assert, timeout, eventCallback) {
  let eventCount = 0;
  let done = assert.async();
  openWebsocketInternal().then(serviceId => {
    params.params['serviceId'] = serviceId;
    sdk.addEventListener(params, message => {
      let ret = eventCallback(message);
      if (ret) {
        eventCount++;
      }
    }).then(json => {
      assert.ok(true, 'Succeeded to add the event listener.');
      setTimeout(() => {
        sdk.removeEventListener(params).then(json => {
          assert.ok(true, 'Succeeded to remove the event listener.');
          done();
        }).catch(e => {
          assert.ok(false, 'Failed to remove the event listener.');
          done
        });
      }, timeout);
    }).catch(e => {
      if (e.errorCode == 2) {
        assert.ok(true, 'Profile not support');
      } else if (e.errorCode == 4 || e.errorCode == 3) {
        assert.ok(true, 'Attribute not support');
      } else if (e.errorCode == 8) {
        assert.ok(true, 'API not support');
      } else if (e.errorCode == 14) {
        assert.ok(true, 'Request is out of scope');
      } else {
        assert.ok(false,
            'Failed to add the event listener. errorCode=' + e.errorCode +
            ' errorMessage: ' + e.errorMessage);
      }
      done();
    });
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
//RFC3339
function createCurrentDateString() {
  let now = new Date();
  let dateString = now.getFullYear() + "-" +
    ("0" + (now.getMonth() + 1)).slice (-2) + "-" +
    ("0" + now.getDate()).slice (-2) + "T" +
    ("0" + now.getHours()).slice (-2) + ":" +
    ("0" + now.getMinutes()).slice (-2) + ":" +
    ("0" + now.getSeconds()).slice (-2) +
    (function (offset){
      let z = (offset < 0) ? "+" : "-";
      offset = Math.abs(offset);
      z +=  ("0" + (offset / 60)).slice(-2) + ":" + ("0" + (offset % 60)).slice(-2);
      return z;
    })(now.getTimezoneOffset());
  return dateString;
}
// テスト結果を端末に保存する
function saveTestResult(result, blob) {
  searchHostService().then(serviceId => {
    sdk.post({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      params: {
        serviceId: serviceId,
        path: '/' + result,
        mimeType: 'text/xml',
        data: blob,
        forceOverwrite: true
      }
    }).then(json => {
      alert('save test data!! for ' + result);
    }).catch(e => {
      alert('failure!! save test data for ' + result + " " + e.errorMessage);
    });

  }).catch(e => {
    alert('failure!!! save test data for ' + result);
  });
};

function searchHost(services) {
  let re = new RegExp('Host', 'i');

  for (let i = 0; i < services.length; i++) {
    let service = services[i];
    if (service.name.match(re)) {
      return service.id;
    }
  }
  return null;
};

function getHostServiceId(func) {
  return new Promise((resolve, reject) => {
    sdk.discoverDevices().then(json => {
        mServiceId = searchHost(json.services);
        resolve(mServiceId);
      }).catch(e => {
        reject(e);
      });
  });
};

function searchHostService(successCallback, errorCallback) {
  return new Promise((resolve, reject) => {
    getHostServiceId().then(serviceId => {
      resolve(serviceId);
    }).catch(e => {
      reject(e);
    });
  });
};

function getCurrentServiceId() {
  return getQueryString()['serviceId'];
}

function getCurrentAccessToken() {
  return getQueryString()['accessToken'];
}

function mkdir(dirName) {
  return new Promise((resolve, reject) => {
    sdk.post({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
      params: {
        serviceId: getCurrentServiceId(),
        path: dirName
      }
    }).then(json => {
        resolve(json);
    }).catch(e => {
        reject(e);
    });
  });
};

function saveFile(fileName) {
  let blob = draw('file test');
  return new Promise((resolve, reject) => {
    sdk.post({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      params: {
        serviceId: getCurrentServiceId(),
        path: fileName,
        mimeType: 'image/jpeg',
        data: blob,
        forceOverwrite: true
      }
    }).then(json => {
      console.log('success!! save for ' + fileName);
      resolve(getCurrentServiceId);
    }).catch(e => {
      console.log('failure!! save for ' + fileName);
      reject(e);
    });
  });
};

function removeFile(fileName) {
  return new Promise((resolve, reject) => {
    sdk.delete({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      params: {
        serviceId: getCurrentServiceId(),
        path: fileName,
        forceRemove: true
      }
    }).then(json => {
      console.log('success!! remove file for ' + fileName);
      resolve(json);
    }).catch(e => {
      console.log('failure!! remove file for ' + fileName);
      reject(e);
    });
  });
};

function rmdir(dirName) {
  return new Promise((resolve, reject) => {
    sdk.delete({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
      params: {
        serviceId: getCurrentServiceId(),
        path: dirName,
        forceRemove: true
      }
    }).then(json => {
      console.log('success!! remove dir for ' + dirName);
      resolve(getCurrentServiceId);
    }).catch(e => {
      console.log('failure!! remove dir for ' + dirName);
      reject(e);
    });
  });
};

function draw(text) {
  let width = 120;
  let height = 120;
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  context.beginPath();
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.stroke();
  context.restore();
  context.save();

  context.beginPath();
  context.font = "18pt Arial";
  context.fillStyle = 'rgb(0, 0, 0)';
  for (let i = 0; i < 10; i++) {
    context.fillText(text, 10, (i + 1) * 20);
  }
  context.restore();
  context.save();

  canvas = canvas.toDataURL();
  let base64Data = canvas.split(',')[1];
  let data = window.atob(base64Data);
  let buff = new ArrayBuffer(data.length);
  let arr = new Uint8Array(buff);
  let blob, i, dataLen;
  for (i = 0, dataLen = data.length; i < dataLen; i++) {
    arr[i] = data.charCodeAt(i);
  }
  blob = new Blob([arr], {type: 'image/jpeg'});
  return blob;
};

function getLightId() {
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: 'light',
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

function getMediaList() {
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

function setMedia() {
  return new Promise((resolve, reject) => {
    getMediaList().then(list => {
        sdk.put({
          profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
          attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
          params: {
            serviceId: getCurrentServiceId(),
            mediaId: list.media[0].mediaId
          }
        }).then(json => {
          resolve(getCurrentServiceId);
        }).catch(e => {
          reject(e);
        });
    }).catch(e => {
      reject(e);
    });
  });
}

function playMedia() {
  return new Promise((resolve, reject) => {
    setMedia().then(serviceId => {
      sdk.put({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        resolve(serviceId);
      }).catch(e => {
        reject(e);
      });
    }).catch(e => {
      reject(e);
    });
  });
}

function getVideoMediaList() {
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
      params: {
        serviceId: getCurrentServiceId(),
        mimeType: 'video/',
        order: 'duration,desc'
      }
    }).then(json => {
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

function setVideoMedia() {
  return new Promise((resolve, reject) => {
    getVideoMediaList().then(list => {
        sdk.put({
          profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
          attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
          params: {
            serviceId: getCurrentServiceId(),
            mediaId: list.media[0].mediaId
          }
        }).then(json => {
          resolve(getCurrentServiceId);
        }).catch(e => {
          reject(e);
        });
    }).catch(e => {
      reject(e);
    });
  });
}

function playVideoMedia() {
  return new Promise((resolve, reject) => {
    setVideoMedia().then(serviceId => {
      sleep(1 * 1000);
      sdk.put({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        resolve(serviceId);
      }).catch(e => {
        reject(e);
      });
    }).catch(e => {
      reject(e);
    });
  });
}

function getAudioMediaList() {
  return new Promise((resolve, reject) => {
    sdk.get({
      profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA_LIST,
      params: {
        serviceId: getCurrentServiceId(),
        mimeType: 'audio/',
        order: 'duration,desc'
      }
    }).then(json => {
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

function setAudioMedia() {
  let serviceId = getCurrentServiceId();
  return new Promise((resolve, reject) => {
    getAudioMediaList().then(list => {
        sdk.put({
          profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
          attribute: dConnectSDK.constants.mediaPlayer.ATTR_MEDIA,
          params: {
            serviceId: serviceId,
            mediaId: list.media[0].mediaId
          }
        }).then(json => {
          resolve(serviceId);
        }).catch(e => {
          reject(e);
        });
    }).catch(e => {
      reject(e);
    });
  });

}

function playAudioMedia() {
  return new Promise((resolve, reject) => {
    setAudioMedia().then(serviceId => {
      sleep(1 * 1000);
      sdk.put({
        profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaPlayer.ATTR_PLAY,
        params: {
          serviceId: serviceId
        }
      }).then(json => {
        resolve(serviceId);
      }).catch(e => {
        reject(e);
      });
    }).catch(e => {
      reject(e);
    });
  });
}

function stopMedia(done) {
  sdk.put({
    profile: dConnectSDK.constants.mediaPlayer.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaPlayer.ATTR_STOP,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    done();
  }).catch(e => {
    done();
  });
}


function record() {
  return new Promise((resolve, reject) => {
    sdk.post({
      profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
      attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_RECORD,
      params: {
        serviceId: getCurrentServiceId()
      }
    }).then(json => {
      resolve(json.uri);
    }).catch(e => {
      reject(e);
    });
  });
};

function pause() {
  return new Promise((resolve, reject) => {
    record().then(uri => {
      sdk.put({
        profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
        attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_PAUSE,
        params: {
          serviceId: getCurrentServiceId()
        }
      }).then(json => {
        resolve(json.uri);
      }).catch(e => {
        reject(e);
      });
    }).catch(e => {
      reject(e);
    });
  });
};

function stop(serviceId) {
  sdk.put({
    profile: dConnectSDK.constants.mediaStreamRecording.PROFILE_NAME,
    attribute: dConnectSDK.constants.mediaStreamRecording.ATTR_STOP,
    params: {
      serviceId: serviceId
    }
  }).then(json => {
  }).catch(e => {
  });
};


function findAddress(config) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      sdk.get({
        profile: 'videochat',
        attribute: 'address',
        params: {
          serviceId: getCurrentServiceId(),
          config: config
        }
      }).then(json => {
        resolve(json.addresses);
      }).catch(e => {
        reject(e);
      });
    }, 1 * 1000);
  });
};

function callAddress(config, timeout) {
  return new Promise((resolve, reject) => {
    findAddress(config).then(addresses => {
      if (!isArray(addresses) || addresses.length == 0) {
        reject({errorCode:-1, errorMessage:"addresses is invalid."});
        return;
      }
      sdk.post({
        profile: 'videochat',
        attribute: 'call',
        params: {
          serviceId: getCurrentServiceId(),
          config: config,
          addressId: addresses[0].addressId
        }
      }).then(json => {
        setTimeout(() => {
          sdk.delete({
            profile: 'videochat',
            attribute: 'call',
            params: {
              serviceId: getCurrentServiceId(),
              config: config,
              addressId: addresses[0].addressId
            }
          }).then(json => {
            resolve(addresses[0]);
          }).catch(e => {
            reject(e);
          });
        }, 1000);
      }).catch(e => {
        reject(e);
      });
    }).catch(e => {
      reject(e);
    });
  });
}



function createFaBoService() {
  return new Promise((resolve, reject) => {
    sdk.post({
      profile: 'fabo',
      attribute: 'service',
      params: {
        serviceId: getCurrentServiceId(),
        name: 'TEST'
      }
    }).then(json => {
      resolve(json);
    }).catch(e => {
      reject(e);
    });
  });
}

function deleteFaBoService(vid) {
  sdk.delete({
    profile: 'fabo',
    attribute: 'service',
    params: {
      serviceId: getCurrentServiceId(),
      vid: vid
    }
  }).then(json => {
    console.log("Delete a service. vid=" + vid);
  }).catch(e => {
    console.log("Delete a delete service. error=" + e.errorMessage);
  });
}

function createFaBoProfile() {
  return new Promise((resolve, reject) => {
    createFaBoService().then(json => {
        sdk.post({
          profile: 'fabo',
          attribute: 'profile',
          params: {
            serviceId: getCurrentServiceId(),
            vid: vid,
            type: 1,
            pins: 'D2'
          }
        }).then(json => {
          resolve(vid);
        }).catch(e => {
          reject(e);
        });
    }).catch(e => {
      reject(e);
    });
  });
}
