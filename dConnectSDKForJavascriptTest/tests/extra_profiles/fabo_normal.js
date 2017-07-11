module('FaBoProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * FaBoプロファイルの正常系テストを行うクラス。
 * @class
 */
var FaBoProfileNormalTest = {};

FaBoProfileNormalTest.createFaBoService = function(successCallback, errorCallback) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('name', 'TEST');
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            successCallback(json);
        }, 
        errorCallback);
}

FaBoProfileNormalTest.deleteFaBoService = function(vid) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', vid);
    var uri = builder.build();
    dConnect.delete(uri, null, function(json) {
        console.log("Delete a service. vid=" + vid);
    }, function(errorCode, errorMessage) {
        console.log("Delete a delete service. error=" + errorMessage);
    });
}

FaBoProfileNormalTest.createFaBoProfile = function(successCallback, errorCallback) {
    FaBoProfileNormalTest.createFaBoService(function(json) {
        var vid = json.vid;
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 1);
        builder.addParameter('pins', 'D2');
        var uri = builder.build();
        dConnect.post(uri, null, null,
            function(json) {
                successCallback(vid, json);
            },
            errorCallback);

    }, errorCallback);
}

/**
 * 仮想サービス一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・サービス一覧が取得できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.getFaBoServiceNormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    var uri = builder.build();
    dConnect.get(uri, null,
        function(json) {
            assert.ok(true, 'result=' + json.result);
            assert.ok(json.services != undefined, 'services=' + JSON.stringify(json.services));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            QUnit.start();
        });
};
QUnit.asyncTest('getFaBoServiceNormalTest001', FaBoProfileNormalTest.getFaBoServiceNormalTest001);


/**
 * 新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method:POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.postFaBoServiceNormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('name', 'TEST');
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            FaBoProfileNormalTest.deleteFaBoService(json.vid);
            assert.ok(true, 'result=' + json.result);
            assert.ok(json.vid != undefined, 'vid=' + json.vid);
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            FaBoProfileNormalTest.deleteFaBoService(json.vid);
            assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoServiceNormalTest001', FaBoProfileNormalTest.postFaBoServiceNormalTest001);

/**
 * 仮想サービス更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method:PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・サービス名が更新できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.putFaBoServiceNormalTest001 = function(assert) {
    FaBoProfileNormalTest.createFaBoService(function(json) {
        var vid = json.vid;
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('service');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', json.vid);
        builder.addParameter('name', 'TEST UPDATE');
        var uri = builder.build();
        dConnect.put(uri, null, null,
            function(json) {
                FaBoProfileNormalTest.deleteFaBoService(vid);
                assert.ok(true, 'result=' + json.result);
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileNormalTest.deleteFaBoService(json.vid);
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
            });
    }, function() {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('putFaBoServiceNormalTest001', FaBoProfileNormalTest.putFaBoServiceNormalTest001);

/**
 * 仮想サービス削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method:DELETE<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=xxxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・サービスが削除できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.deleteFaBoServiceNormalTest001 = function(assert) {
    FaBoProfileNormalTest.createFaBoService(function(json) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('service');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', json.vid);
        var uri = builder.build();
        dConnect.delete(uri, null, 
            function(json) {
                assert.ok(true, 'result=' + json.result);
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
            });
    }, function() {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('deleteFaBoServiceNormalTest001', FaBoProfileNormalTest.deleteFaBoServiceNormalTest001);

/**
 * プロファイル一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.getFaBoProfileNormalTest001 = function(assert) {
    FaBoProfileNormalTest.createFaBoService(function(json) {
        var vid = json.vid;
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', json.vid);
        var uri = builder.build();
        dConnect.get(uri, null,
            function(json) {
                FaBoProfileNormalTest.deleteFaBoService(vid);
                assert.ok(true, 'result=' + json.result);
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileNormalTest.deleteFaBoService(json.vid);
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
            });
    }, function() {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('getFaBoProfileNormalTest001', FaBoProfileNormalTest.getFaBoProfileNormalTest001);


/**
 * プロファイル作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=xxx&type=1&pins=D2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.postFaBoServiceNormalTest001 = function(assert) {
    FaBoProfileNormalTest.createFaBoService(function(json) {
        var vid = json.vid;
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 1);
        builder.addParameter('pins', 'D2');
        var uri = builder.build();
        dConnect.post(uri, null, null,
            function(json) {
                FaBoProfileNormalTest.deleteFaBoService(vid);
                assert.ok(true, 'result=' + json.result);
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileNormalTest.deleteFaBoService(json.vid);
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
            });
    }, function() {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('postFaBoServiceNormalTest001', FaBoProfileNormalTest.postFaBoServiceNormalTest001);

/**
 * プロファイルを更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=xxx&type=1&pins=D2,D3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・プロファイルを更新できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.putFaBoProfileNormalTest001 = function(assert) {
    FaBoProfileNormalTest.createFaBoProfile(function(vid, json) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 1);
        builder.addParameter('pins', 'D2,D3');
        var uri = builder.build();
        dConnect.put(uri, null, null,
            function(json) {
                FaBoProfileNormalTest.deleteFaBoService(vid);
                assert.ok(true, 'result=' + json.result);
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileNormalTest.deleteFaBoService(vid);
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
            });
    }, function() {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('putFaBoProfileNormalTest001', FaBoProfileNormalTest.putFaBoProfileNormalTest001);


/**
 * プロファイルを削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=xxx&type=1&pins=D2,D3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・新規のサービスが作成できること。<br/>
 * </p>
 */
FaBoProfileNormalTest.deleteFaBoServiceNormalTest001 = function(assert) {
    FaBoProfileNormalTest.createFaBoProfile(function(vid, json) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 1);
        var uri = builder.build();
        dConnect.delete(uri, null,
            function(json) {
                FaBoProfileNormalTest.deleteFaBoService(vid);
                assert.ok(true, 'result=' + json.result);
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                QUnit.start();
            });
    }, function() {
        assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
    });
};
QUnit.asyncTest('deleteFaBoServiceNormalTest001', FaBoProfileNormalTest.deleteFaBoServiceNormalTest001);
