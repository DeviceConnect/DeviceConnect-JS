QUnit.module('Service Information Profile Normal Test', {
  before: function() {
    init();
  }
});

/**
 * ServiceInformationプロファイルの正常系テストを行うクラス。
 * @class
 */
let ServiceInformationProfileNormalTest = {};

/**
 * serviceInformationの対応プロファイル情報を取得する。
 * <p id="test">
 * 【HTTP通信】<br/>
 * Method: GET<br/>
 * Path: /serviceInformation?serviceId=xxxx<br/>
 * </p>
 * <p id="expected">
 * 【期待する動作】<br/>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
ServiceInformationProfileNormalTest.serviceInformationTest001 = function(assert) {
  let serviceId = getCurrentServiceId();
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.serviceInformation.PROFILE_NAME,
    serviceId: serviceId
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    assert.ok(true, 'version=' + json.version);
    assert.ok(json.connect !== undefined, 'connect is ok.');
    assert.ok(json.supports !== undefined, 'supports is ok.');
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
            'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('serviceInformationTest001(get)',
    ServiceInformationProfileNormalTest.serviceInformationTest001);
