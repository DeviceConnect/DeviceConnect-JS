QUnit.module('Device Connect API Compatibility Test', {
    before: function() {
    }
});

let _tests = [
    {
        name: 'Old: /drive_controller/*',
        run: function(assert) {
                let done = assert.async();
                let onsuccess = function(json) {
                    assert.ok(false, 'success');
                    done();
                };
                let onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    done();
                };
                sdk.sendRequest('POST', {
                  profile: 'drive_controller',
                  attribute:'move',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /file_descriptor/*',
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
                  profile: 'file_descriptor',
                  attribute:'open',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name:'Old: /mediastream_recording/*',
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
                  profile: 'mediastream_recording',
                  attribute:'record',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /media_player/media_list',
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
                  profile: 'media_player',
                  attribute:'media_list',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /media_player/play_status',
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
                  profile: 'media_player',
                  attribute:'play_status',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /mediaPlayer/*',
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
                  profile: 'media_player',
                  attribute:'media',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /omnidirectional_image/*',
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
                  profile: 'omnidirectional_image',
                  attribute:'roi',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /remote_controller/*',
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
                  profile: 'remote_controller',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /battery/chargingTime',
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
                  profile: 'battery',
                  attribute: 'chargingTime',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    },
    {
        name: 'Old: /battery/dischargingTime',
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
                  profile: 'battery',
                  attribute: 'dischargingTime',
                  serviceId: serviceIdForTest()
                }).then(json => { onsuccess(json);}).catch(e => { onerror(e.errorCode, e.errorMessage);});
            }
    }
];

let _scopes = [
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

      'camera',
      'dice',
      'drive_controller',
      'light',
      'remote_controller',
      'sphero',
      'temperature',
      'health',
      'humandetect',
      'videochat',
      'omnidirectional_image',
      'humidity',
      'illuminance',
      'powermeter',
      'tv',
      'airconditioner',
      'gpio'
];

test(_scopes, _tests);
