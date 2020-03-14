QUnit.module("WalkState Profile Abnormal Test", {
    before: function () {
        init();
    }
});


/**
 * WalkStateプロファイルの異常系テストを行うクラス。
 * @class
 */
let WalkStateProfileAbnormalTest = {};

/**
 * 定義されていないPOSTメソッドで歩行状態にアクセスするテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /walkState/onWalkState?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
WalkStateProfileAbnormalTest.walkAbormalTest = function (assert) {
  let done = assert.async();
  sdk.post({
    profile: 'walkState',
    attribute: 'onWalkState',
    serviceId: getCurrentServiceId()
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 8);
    done();
  });
}
QUnit.test("walk", WalkStateProfileAbnormalTest.walkAbormalTest);
