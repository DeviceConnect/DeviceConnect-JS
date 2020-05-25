QUnit.module('Service Information Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * ServiceInformationプロファイルの異常系テストを行うクラス。
 * @class
 */
let ServiceInformationProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドでスマートフォンのserviceInformationにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: POST<br/>
 * Path: /serviceInformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.serviceInformation.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('serviceInformationAbnormalTest001(post)',
    ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest001);


/**
 * 定義されていないPUTメソッドでスマートフォンのserviceInformationにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: PUT<br/>
 * Path: /serviceInformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.serviceInformation.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('serviceInformationAbnormalTest002(put)',
    ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでスマートフォンのserviceInformationにアクセスするテストを行う。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: DELETE<br/>
 * Path: /serviceInformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.serviceInformation.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
};
QUnit.test('serviceInformationAbnormalTest003(delete)',
    ServiceInformationProfileAbnormalTest.serviceInformationAbnormalTest003);
