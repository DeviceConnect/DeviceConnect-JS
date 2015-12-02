/**
 * テストを行うDevice Connect Managerが入っている端末のIPを定義する.
 * 端末自体で動作させる場合には、localhostにすること。
 */
var DEVICE_CONNECT_HOST = 'localhost';

/**
 * Defined the time-out.
 */
var TEST_TIMEOUT = 20000;

/**
 * テストによっては、無効にするテストがある。
 * そのためのフラグ。record,picture,none
 */
var IS_TEST_STATUS = 'none';

/**
 * Get a query string in URL.
 * @return query string
 */
function getQueryString() {
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
}

var _quertyString = getQueryString();
if (_quertyString['ip']) {
  DEVICE_CONNECT_HOST = _quertyString['ip'];
}
