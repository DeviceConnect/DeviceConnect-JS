QUnit.module('Device Connect API Compatibility Test', {
    setup: function() {
    }
});

var _tests = [
    {
        name: 'Old: /drive_controller/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('drive_controller')
                                .setAttribute('move')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(false, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('POST', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /file_descriptor/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('file_descriptor')
                                .setAttribute('open')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name:'Old: /mediastream_recording/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('mediastream_recording')
                                .setAttribute('record')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('POST', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /media_player/media_list',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('media_player')
                                .setAttribute('media_list')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /media_player/play_status',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('media_player')
                                .setAttribute('play_status')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /mediaPlayer/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('media_player')
                                .setAttribute('media')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /omnidirectional_image/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('omnidirectional_image')
                                .setAttribute('roi')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('PUT', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /remote_controller/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('remote_controller')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /battery/chargingTime',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('battery')
                                .setAttribute('chargingTime')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    },
    {
        name: 'Old: /battery/dischargingTime',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('battery')
                                .setAttribute('dischargingTime')
                                .setServiceId(serviceIdForTest())
                                .setAccessToken(accessToken())
                                .build();
                var onsuccess = function(json) {
                    assert.ok(true, 'success');
                    QUnit.start();
                };
                var onerror = function(code, message) {
                    checkResponse(assert, code, message);
                    QUnit.start();
                };
                dConnect.sendRequest('GET', uri, null, null, onsuccess, onerror);
            }
    }
];

var _scopes = [
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
