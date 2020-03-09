/**
 * テストを行うDevice Connect Managerが入っている端末のIPを定義する.
 * 端末自体で動作させる場合には、localhostにすること。
 */
let DEVICE_CONNECT_HOST = 'localhost';

/**
 * Defined the time-out.
 */
let TEST_TIMEOUT = 20000;

/**
 * テストによっては、無効にするテストがある。
 * そのためのフラグ。record,picture,none
 */
let IS_TEST_STATUS = 'none';

/**
 * Get a query string in URL.
 * @return query string
 */
function getQueryString() {
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
}

let _quertyString = getQueryString();
if (_quertyString['ip']) {
  DEVICE_CONNECT_HOST = _quertyString['ip'];
}
