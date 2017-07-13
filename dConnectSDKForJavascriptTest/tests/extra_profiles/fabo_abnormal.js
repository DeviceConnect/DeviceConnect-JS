module('FaBoProfileAbnormalTest', {
  setup: function() {
    init();
  }
});

/**
 * FaBoプロファイルの正常系テストを行うクラス。
 * @class
 */
var FaBoProfileAbnormalTest = {};

FaBoProfileAbnormalTest.createFaBoService = function(successCallback, errorCallback) {
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

FaBoProfileAbnormalTest.deleteFaBoService = function(vid) {
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

FaBoProfileAbnormalTest.createFaBoProfile = function(successCallback, errorCallback) {
    FaBoProfileAbnormalTest.createFaBoService(function(json) {
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
 * nameを指定せずに新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoServiceAbnormalTest001', FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest001);

/**
 * nameに32文字を超える文字を指定して新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=0123456789012345678901234567890123<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest002 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter("name", "0123456789012345678901234567890123");
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoServiceAbnormalTest002', FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest002);

/**
 * nameに空文字を指定して新規仮想サービス作成するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest003 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter("name", "");
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoServiceAbnormalTest003', FaBoProfileAbnormalTest.postFaBoServiceAbnormalTest003);


/**
 * vidを指定せずに仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('name', 'TEST');
    var uri = builder.build();
    dConnect.put(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('putFaBoServiceAbnormalTest001', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest001);

/**
 * nameを指定せずに仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest002 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    var uri = builder.build();
    dConnect.put(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('putFaBoServiceAbnormalTest002', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest002);

/**
 * nameを32文字を超える文字列を指定して仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&name=0123456789012345678901234567890123<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest003 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('name', '0123456789012345678901234567890123');
    var uri = builder.build();
    dConnect.put(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('putFaBoServiceAbnormalTest003', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest003);

/**
 * nameを空文字を指定して仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&name=<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest004 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('name', '');
    var uri = builder.build();
    dConnect.put(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('putFaBoServiceAbnormalTest004', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest004);


/**
 * vidに存在しないidを指定して仮想サービス名更新するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=001&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest005 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', '001');
    builder.addParameter('name', 'TEST');
    var uri = builder.build();
    dConnect.put(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('putFaBoServiceAbnormalTest005', FaBoProfileAbnormalTest.putFaBoServiceAbnormalTest005);

/**
 * vidを指定しないで仮想サービス削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=001&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoServiceAbnormalTest001', FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest001);

/**
 * vidに存在しないidを指定して仮想サービス削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/service?serviceId=xxxx&accessToken=xxx&vid=001&name=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest002 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('service');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', '001');
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoServiceAbnormalTest002', FaBoProfileAbnormalTest.deleteFaBoServiceAbnormalTest002);


/**
 * vidを指定せずにプロファイル一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    var uri = builder.build();
    dConnect.get(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('getFaBoProfileAbnormalTest001', FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest001);



/**
 * vidに存在しないvidを指定してプロファイル一覧取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=001<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest002 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', '001');
    var uri = builder.build();
    dConnect.get(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('getFaBoProfileAbnormalTest002', FaBoProfileAbnormalTest.getFaBoProfileAbnormalTest002);


/**
 * vidを指定せずにプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest001', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest001);



/**
 * vidを存在しないidを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=001<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest002 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', '001');
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest002', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest002);


/**
 * typeに存在しないtypeを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=111111<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest003 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('type', 111111);
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest003', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest003);



/**
 * pinsを指定しないでプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest004 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('type', 1);
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest004', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest004);

/**
 * pinsに存在しないピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1&pins=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest005 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('type', 1);
    builder.addParameter('pins', '1000');
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest005', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest005);


/**
 * pinsに文字列を指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1&pins=1,,,1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest007 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('type', 1);
    builder.addParameter('pins', 'test');
    var uri = builder.build();
    dConnect.post(uri, null, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest007', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest007);



/**
 * pinsに既に使用されているピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=3&pins=D2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest008 = function(assert) {
    FaBoProfileAbnormalTest.createFaBoProfile(function(vid, json) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 3);
        builder.addParameter('pins', 'D2');
        var uri = builder.build();
        dConnect.post(uri, null, null,
            function(json) {
                FaBoProfileAbnormalTest.deleteFaBoService(vid);
                assert.ok(false, 'json: ' + JSON.stringify(json));
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileAbnormalTest.deleteFaBoService(vid);
                if (errorCode == 10) {
                    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                } else {
                    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                }
                QUnit.start();
            });
        }, 
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest008', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest008);

/**
 * 複数のピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=2&pins=A1,A2<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest009 = function(assert) {
    FaBoProfileAbnormalTest.createFaBoProfile(function(vid, json) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 2);
        builder.addParameter('pins', 'A1,A2');
        var uri = builder.build();
        dConnect.post(uri, null, null,
            function(json) {
                FaBoProfileAbnormalTest.deleteFaBoService(vid);
                assert.ok(false, 'json: ' + JSON.stringify(json));
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileAbnormalTest.deleteFaBoService(vid);
                if (errorCode == 10) {
                    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                } else {
                    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                }
                QUnit.start();
            });
        }, 
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest009', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest009);


/**
 * アナログを要求しているプロファイルにデジタルピンを指定してプロファイル追加するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=2&pins=D4<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest010 = function(assert) {
    FaBoProfileAbnormalTest.createFaBoProfile(function(vid, json) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('fabo');
        builder.setAttribute('profile');
        builder.setServiceId(getCurrentServiceId());
        builder.setAccessToken(getCurrentAccessToken());
        builder.addParameter('vid', vid);
        builder.addParameter('type', 2);
        builder.addParameter('pins', 'D4');
        var uri = builder.build();
        dConnect.post(uri, null, null,
            function(json) {
                FaBoProfileAbnormalTest.deleteFaBoService(vid);
                assert.ok(false, 'json: ' + JSON.stringify(json));
                QUnit.start();
            },
            function(errorCode, errorMessage) {
                FaBoProfileAbnormalTest.deleteFaBoService(vid);
                if (errorCode == 10) {
                    assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                } else {
                    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
                }
                QUnit.start();
            });
        }, 
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('postFaBoProfileAbnormalTest010', FaBoProfileAbnormalTest.postFaBoProfileAbnormalTest010);

/**
 * パラメータを指定しないでプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest001 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoProfileAbnormalTest001', FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest001);

/**
 * vidに不正な値を指定してプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=001<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest002 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', '001');
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoProfileAbnormalTest002', FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest002);

/**
 * typeを指定しないでプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest003 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoProfileAbnormalTest003', FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest003);

/**
 * typeを存在しない値を指定してプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=1000<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('type', 1000);
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoProfileAbnormalTest004', FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004);


/**
 * typeに文字列を指定してプロファイル削除するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/fabo/profile?serviceId=xxxx&accessToken=xxx&vid=mouse_service_id&type=TEST<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・errorCodeに10が返ってくること。<br/>
 * </p>
 */
FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004 = function(assert) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('fabo');
    builder.setAttribute('profile');
    builder.setServiceId(getCurrentServiceId());
    builder.setAccessToken(getCurrentAccessToken());
    builder.addParameter('vid', 'mouse_service_id');
    builder.addParameter('type', 'TEST');
    var uri = builder.build();
    dConnect.delete(uri, null,
        function(json) {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            QUnit.start();
        },
        function(errorCode, errorMessage) {
            if (errorCode == 10) {
                assert.ok(true, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            } else {
                assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
            }
            QUnit.start();
        });
};
QUnit.asyncTest('deleteFaBoProfileAbnormalTest004', FaBoProfileAbnormalTest.deleteFaBoProfileAbnormalTest004);

