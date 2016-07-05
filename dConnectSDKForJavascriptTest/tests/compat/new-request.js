module('Device Connect API Compatibility Test', {
    setup: function() {
    }
});

var _tests = [
    {
        name: 'Ignored Case: /SERVICEINFORMATION',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('serviceInformation')
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
        name: 'New: /driveController/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('driveController')
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
        name: 'New: /fileDescriptor/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('fileDescriptor')
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
        name:'New: /mediaStreamRecording/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('mediaStreamRecording')
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
        name: 'New: /mediaPlayer/mediaList',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('mediaPlayer')
                                .setAttribute('mediaList')
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
        name: 'New: /mediaPlayer/playStatus',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('mediaPlayer')
                                .setAttribute('playStatus')
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
        name: 'New: /mediaPlayer/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('mediaPlayer')
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
        name: 'New: /omnidirectionalImage/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('omnidirectionalImage')
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
        name: 'New: /remoteController/*',
        run: function(assert) {
                var uri = new dConnect.URIBuilder()
                                .setProfile('remoteController')
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
