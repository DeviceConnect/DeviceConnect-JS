module('Service Information Profile Abnormal Test', {
  setup: function() {
    init();
  }
});

/**
 * ServiceInformationプロファイルの異常系テストを行うクラス。
 * @class
 */
var ServiceInformationProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでスマートフォンのserviceinformationにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /serviceinformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest001 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.serviceinformation.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.post(uri, null, null, function(json) {
    assert.ok(fase, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('serviceInformationAbnormalTest001(post)', ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest001);


/**
 * 定義されていないPUTメソッドでスマートフォンのserviceinformationにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /serviceinformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest002 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.serviceinformation.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.put(uri, null, null, function(json) {
    assert.ok(fase, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('serviceInformationAbnormalTest002(put)', ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでスマートフォンのserviceinformationにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /serviceinformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest003 = function(assert) {
  var accessToken = getCurrentAccessToken();
  var serviceId = getCurrentServiceId();
  var builder = new dConnect.URIBuilder();
  builder.setProfile(dConnect.constants.serviceinformation.PROFILE_NAME);
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  dConnect.delete(uri, null, function(json) {
    assert.ok(fase, 'result=' + json.result);
    QUnit.start();
  }, function(errorCode, errorMessage) {
    if (errorCode == 8) {
      assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    } else if (checkErrorCode(errorCode)) {
      assert.ok(true, 'not support');
    } else {
      assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    }
    QUnit.start();
  });
};
QUnit.asyncTest('serviceInformationAbnormalTest003(delete)', ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest003);