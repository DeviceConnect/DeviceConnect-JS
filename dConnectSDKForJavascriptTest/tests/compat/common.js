let _pluginId;

let _accessToken;
let sdk;
function test(scopes, tests) {
  let _tests = tests;
  sdk = new dConnectSDK({
        host: (function () {
          let result = {};
          if (1 < window.location.search.length) {
            let query = window.location.search.substring(1);
            let parameters = query.split('&');
            for (let i = 0; i < parameters.length; i++) {
              let element = parameters[i].split('=');
              let paramName = decodeURIComponent(element[0]);
              let paramValue = decodeURIComponent(element[1]);
              result[paramName] = paramValue;
            }
          }
          return result;
        })()['ip'],
        port: 4035
    });
    let onPluginList = function(json) {
        for (let i = 0; i < json.plugins.length; i++) {
            let plugin = json.plugins[i];
            if (plugin.name === 'Device Connect Device Plugin for Test') {
                _pluginId = plugin.id;
                break;
            }
        }
        console.log('Test Plugin ID: ' + _pluginId);

        if (_pluginId !== undefined) {
          QUnit.start();
          runTests(_tests);
        } else {
          alert('Please install Device Connect Device Plugin for Test.');
        }
    };

    let onPluginListError = function(code, message) {
        console.error('Failed to get plugin list: code = ' + code + ", message = " + message);
    };

    let onAuth = function(accessToken) {
        _accessToken = accessToken;
        sdk.get({
          profile: 'system'
        }).then(json => { onPluginList(json);}).catch(e => { console.log(e);});
    };

    let onAuthError = function(code, message) {
        console.error('Failed to create acces token: code = ' + code + ', message = ' + message);
    }

    sdk.authorization(scopes, 'Device Connect Compatibility Test').then(accessToken => { onAuth(accessToken); })
          .catch(e => { onAuthError(e.errorCode, e.errorMessage);});
     QUnit.config.autostart = false;

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
    for (let i = 0; i < tests.length; i++) {
        QUnit.test(tests[i].name, tests[i].run);
    }
}
