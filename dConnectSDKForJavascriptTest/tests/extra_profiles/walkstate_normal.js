QUnit.module("WalkState Profile Normal Test", {
    before: function () {
        init();
    }
});


/**
 * WalkStateプロファイルの正常系テストを行うクラス。
 * @class
 */
let WalkStateProfileNormalTest = {};

/**
 * 歩行状態を取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /walkState/onWalkState?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・walkの値が返ってくること。<br/>
 * </p>
 */
WalkStateProfileNormalTest.walkNormalTest = function (assert) {
  let done = assert.async();
  sdk.get({
    profile: 'walkState',
    attribute: 'onWalkState',
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, "result=" + json.result);
    assert.ok((json.walk != undefined && json.walk.step >= 0), "walk=" + json.walk);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode),
        'errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    done();
  });
}
QUnit.test("walk", WalkStateProfileNormalTest.walkNormalTest);

/**
 * WalkStateプロファイルのWalkStateの登録と解除を行うテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /walkState/onWalkState?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br/>
 * ・イベント通知が送られてくること。<br/>
 * </p>
 */
WalkStateProfileNormalTest.walkEventNormalTest001 = function (assert) {
  let params = {
    profile: 'walkState',
    attribute: 'onWalkState',
    params: {
      serviceId: getCurrentServiceId()
    }
  };
  openWebsocket(params, assert, 10000, message => {
        let json = JSON.parse(message);
        if (json.profile === "walkState" && json.attribute === "onWalkState") {
            assert.ok(true, message);
            assert.ok((json.walk != undefined && json.walk.step >= 0), "walk=" + json.walk);
            return true;
        }
        return false;
    });
}
QUnit.test("walkEventNormalTest001", WalkStateProfileNormalTest.walkEventNormalTest001);
