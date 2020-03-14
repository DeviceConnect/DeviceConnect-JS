QUnit.module('Device Connect API Compatibility Test', {
    before: function() {
    }
});

let _tests = [
    {
        name: 'Ignored Case: /SERVICEINFORMATION',
        run: function(assert) {
          console.log("aaaa:" + serviceIdForTest());
                let done = assert.async();
                let onsuccess = (json) => {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = (code, message) => {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('GET', {
                  profile: 'serviceInformation',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /driveController/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = (json) => {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = (code, message) => {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('POST', {
                  profile: 'driveController',
                  attribute:'move',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /fileDescriptor/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('GET', {
                  profile: 'fileDescriptor',
                  attribute:'open',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name:'New: /mediaStreamRecording/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('POST', {
                  profile: 'mediaStreamRecording',
                  attribute: 'record',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /mediaPlayer/mediaList',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('GET', {
                  profile: 'mediaPlayer',
                  attribute: 'mediaList',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /mediaPlayer/playStatus',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('GET', {
                  profile: 'mediaPlayer',
                  attribute: 'playStatus',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /mediaPlayer/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('GET', {
                  profile: 'mediaPlayer',
                  attribute: 'media',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /omnidirectionalImage/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('PUT', {
                  profile: 'omnidirectionalImage',
                  attribute: 'roi',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'New: /remoteController/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(true, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('GET', {
                  profile: 'remoteController',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    }
];

let _scopes = [
      'battery',
      'canvas',
      'connect',
      'deviceOrientation',
      'fileDescriptor',
      'file',
      'keyEvent',
      'mediaPlayer',
      'mediaStreamRecording',
      'serviceInformation',
      'serviceDiscovery',
      'notification',
      'phone',
      'proximity',
      'settings',
      'system',
      'touch',
      'vibration',

      'camera',
      'dice',
      'driveController',
      'light',
      'remoteController',
      'sphero',
      'temperature',
      'health',
      'humandetect',
      'videochat',
      'omnidirectionalImage',
      'humidity',
      'illuminance',
      'powermeter',
      'tv',
      'airconditioner',
      'gpio'
];

test(_scopes, _tests);
