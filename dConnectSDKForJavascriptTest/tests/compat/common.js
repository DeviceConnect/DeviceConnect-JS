var _pluginId;

var _accessToken;

function test(scopes, tests) {
    dConnect.setHost(
      (function () {
        var result = {};
        if (1 < window.location.search.length) {
          var query = window.location.search.substring(1);
          var parameters = query.split('&');
          for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');
            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);
            result[paramName] = paramValue;
          }
        }
        return result;
      })()['ip']);

    var onPluginList = function(json) {
        for (var i = 0; i < json.plugins.length; i++) {
            var plugin = json.plugins[i];
            if (plugin.name === 'Device Connect Device Plugin for Test') {
                _pluginId = plugin.id;
                break;
            }
        }
        console.log('Test Plugin ID: ' + _pluginId);

        if (_pluginId !== undefined) {
            runTests(tests);
        } else {
            alert('Please install Device Connect Device Plugin for Test.');
        }
    };

    var onPluginListError = function(code, message) {
        console.error('Failed to get plugin list: code = ' + code + ", message = " + message);
    };

    var onAuth = function(clientId, accessToken) {
        _accessToken = accessToken;

        var systemApi = new dConnect.URIBuilder()
                    .setProfile('system')
                    .setAccessToken(_accessToken)
                    .build();
    
        dConnect.get(systemApi, null, onPluginList, onPluginListError);
    };

    var onAuthError = function(code, message) {
        console.error('Failed to create acces token: code = ' + code + ', message = ' + message);
    }

    dConnect.authorization(scopes, 'Device Connect Compatibility Test', onAuth, onAuthError);
}

function accessToken() {
    return _accessToken;
}

function serviceIdForTest() {
    return 'test_service_id.' + _pluginId;
}

function checkResponse(assert, code, message) {
  switch (code) {
      case 10: // Invalid Request Parameters
          assert.ok(true, 'success');
          break;
      default:
          assert.ok(false, 'error: code = ' + code + ", message = " + message);
          break;
  }
}

function runTests(tests) {
    for (var i = 0; i < tests.length; i++) {
        QUnit.test(tests[i].name, tests[i].run);
    }
}