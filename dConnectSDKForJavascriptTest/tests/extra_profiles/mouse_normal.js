QUnit.module('Mouse Profile Normal Test', {
    setup: function() {
        init();
    }
});

/**
 * Mouseプロファイルのテストを行うクラス。
 * @class
 */
var MouseProfileNormalTest = {};

/**
 * マウス情報を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /mouse?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.mouseTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.get(uri, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });

};
QUnit.test('mouseTest001', MouseProfileNormalTest.mouseTest001);

/**
 * マウス情報を送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.mouseTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('x', 0.25);
  builder.addParameter('y', 0.25);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });

};
QUnit.test('mouseTest002', MouseProfileNormalTest.mouseTest002);


/**
 * クリックを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/click?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.clickTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setInterface('click');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('button', 'left');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });

};
QUnit.test('clickTest001', MouseProfileNormalTest.clickTest001);


/**
 * ダブルクリックを送信するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /mouse/doubleClick?serviceId=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
MouseProfileNormalTest.doubleClickTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile('mouse');
  builder.setInterface('doubleClick');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('button', 'left');
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
  }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode), "errorCode=" + errorCode + ", errorMessage=" + errorMessage);
      QUnit.start();
  });

};
QUnit.test('doubleClickTest001', MouseProfileNormalTest.doubleClickTest001);
