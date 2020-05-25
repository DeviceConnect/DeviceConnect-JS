QUnit.module('File Profile Normal Test', {
  before: function() {
    init();
    for (let i = 0; i < 10; i++) {
        saveFile(i + '.jpg').then(json =>{}).catch(e => {});
    }
  }, after: function() {
    for (let i = 0; i < 10; i++) {
        removeFile(i + '.jpg').then(json =>{}).catch(e => {});
    }
  }
});

/**
 * Fileプロファイルのテストを行なうクラス
 * @class
 */

let FileProfileNormalTest = {};

/**
 * GETメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest001', FileProfileNormalTest.listNormalTest001);

/**
 * order=path,ascを指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest002', FileProfileNormalTest.listNormalTest002);

/**
 * order=path,descを指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest003 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest003', FileProfileNormalTest.listNormalTest003);

/**
 * order=path,asc , limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      limit: 10
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest004', FileProfileNormalTest.listNormalTest004);

/**
 * order=path,desc , limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      limit: 10
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest006', FileProfileNormalTest.listNormalTest006);

/**
 * order=path,asc , limit=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      limit: 0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest007', FileProfileNormalTest.listNormalTest007);

/**
 * order=path,desc , limit=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&limit=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest008 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      limit: 0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest008', FileProfileNormalTest.listNormalTest008);

/**
 * order=path,asc ,offset=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.listNormalTest009 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      offset: 0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest009', FileProfileNormalTest.listNormalTest009);

/**
 * order=path,desc ,offset=0を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&offset=0<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest010 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      offset: 0
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest010', FileProfileNormalTest.listNormalTest010);

/**
 * order=path,asc ,offset=0, limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=0&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest011 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      offset: 0,
      limit: 10
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest011', FileProfileNormalTest.listNormalTest011);

/**
 * order=path,desc ,offset=0 ,limit=10を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&offset=0&limit=10<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest012 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      offset: 0,
      limit: 10
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
QUnit.test('listNormalTest012', FileProfileNormalTest.listNormalTest012);

/**
 * order=path,asc ,path=/を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&path='/'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest013 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      path: '/'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('listNormalTest013', FileProfileNormalTest.listNormalTest013);
}
/**
 * order=path,desc ,path=/を指定してファイル一覧取得リクエストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,desc'&path='/'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.listNormalTest014 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      path: '/'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('listNormalTest014', FileProfileNormalTest.listNormalTest014);
}
/**
 *
 * POSTメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.sendNormalTest001 = function(assert) {
  let blob = draw('file test');
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      path: '/1_2.jpg',
      mimeType: 'image/jpeg',
      data: blob
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    removeFile('/1_2.jpg').then(json =>{}).catch(e => {});
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    removeFile('/1_2.jpg').then(json =>{}).catch(e => {});
    done();
  });
};
QUnit.test('sendNormalTest001', FileProfileNormalTest.sendNormalTest001);


/**
 *
 * すでに存在しているファイルをforceWrite=trueの時にPOSTメソッドでsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.sendNormalTest002 = function(assert) {
  let done = assert.async();
  saveFile('/2_2.jpg').then(serviceId => {
      let blob = draw('file test');
      sdk.post({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        params: {
          serviceId: serviceId,
          path: '/2_2.jpg',
          mimeType: 'image/jpeg',
          data: blob,
          forceOverwrite: true
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        removeFile('/2_2.jpg').then(json =>{}).catch(e => {});
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        removeFile('/2_2.jpg').then(json =>{}).catch(e => {});
        done();
      });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    removeFile('/2_2.jpg').then(json =>{}).catch(e => {});
    done();
  });
};
QUnit.test('sendNormalTest002', FileProfileNormalTest.sendNormalTest002);

/**
 * 1.jpgが存在するのが前提。1.jpgへのURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='/1.jpg<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.receiveNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      path: '/1.jpg'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('receiveNormalTest001', FileProfileNormalTest.receiveNormalTest001);
}
/**
 * moveNormalTest001.jpgが存在するのが前提。/moveNormalTest001へ移動する。
 * newPathにファイル名を指定する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveNormalTest001.jpg
 *       &newPath=/moveNormalTest001/moveNormalTest001.jpg<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.moveNormalTest001 = function(assert) {
  let done = assert.async();
  saveFile('moveNormalTest001.jpg').then(serviceId => {
    mkdir('moveNormalTest001').then(serviceId => {
      sdk.put({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        params: {
          serviceId: serviceId,
          oldPath: '/moveNormalTest001.jpg',
          newPath: '/moveNormalTest001/moveNormalTest001.jpg'
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        rmdir('/moveNormalTest001').then(json =>{}).catch(e => {});
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        rmdir('/moveNormalTest001').then(json =>{}).catch(e => {});
        removeFile('/moveNormalTest001.jpg').then(json =>{}).catch(e => {});
        done();
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('moveNormalTest001', FileProfileNormalTest.moveNormalTest001);
}

/**
 * moveNormalTest002.jpgが存在するのが前提。/moveNormalTest002へ移動する。
 * newPathにファイル名を指定しない。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveNormalTest002.jpg
 *       &newPath=/moveNormalTest002<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.moveNormalTest002 = function(assert) {
  let done = assert.async();
  saveFile('/moveNormalTest002.jpg').then(serviceId => {
    mkdir('moveNormalTest002').then(serviceId => {
          sdk.put({
            profile: dConnectSDK.constants.file.PROFILE_NAME,
            params: {
              serviceId: serviceId,
              oldPath: '/moveNormalTest002.jpg',
              newPath: '/moveNormalTest002'
            }
          }).then(json => {
            assert.ok(true, 'result=' + json.result);
            rmdir('/moveNormalTest002').then(json =>{}).catch(e => {});
            done();
          }).catch(e => {
            assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
            removeFile('/moveNormalTest002.jpg').then(json =>{}).catch(e => {});
            rmdir('/moveNormalTest002').then(json =>{}).catch(e => {});
            done();
          });
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        rmdir('/moveNormalTest002').then(json =>{}).catch(e => {});
        done();
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      rmdir('/moveNormalTest002').then(json =>{}).catch(e => {});
      done();
    });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('moveNormalTest002', FileProfileNormalTest.moveNormalTest002);
}

/**
 * moveNormalTest003.jpgが存在するのが前提。forceOverwrite=trueで/moveNormalTest003へ移動する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveNormalTest003.jpg
 *       &newPath=/moveNormalTest003&forceOverwrite=true<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.moveNormalTest003 = function(assert) {
  let done = assert.async();
  saveFile('moveNormalTest003.jpg').then(serviceId => {
    mkdir('moveNormalTest003').then(serviceId => {
      saveFile('/moveNormalTest003/moveNormalTest003.jpg').then(serviceId => {
          sdk.put({
            profile: dConnectSDK.constants.file.PROFILE_NAME,
            params: {
              serviceId: serviceId,
              oldPath: '/moveNormalTest003.jpg',
              newPath: '/moveNormalTest003',
              forceOverwrite: true
            }
          }).then(json => {
            assert.ok(true, 'result=' + json.result);
            rmdir('/moveNormalTest003').then(json =>{}).catch(e => {});
            done();
          }).catch(e => {
            assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
            removeFile('/moveNormalTest003.jpg').then(json =>{}).catch(e => {});
            rmdir('/moveNormalTest003').then(json =>{}).catch(e => {});
            done();
          });
      }).catch(e => {
        removeFile('/moveNormalTest003.jpg').then(json =>{}).catch(e => {});
        rmdir('/moveNormalTest003').then(json =>{}).catch(e => {});
        assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        done();
      });
    }).catch(e => {
      removeFile('/moveNormalTest003.jpg').then(json =>{}).catch(e => {});
      rmdir('/moveNormalTest003').then(json =>{}).catch(e => {});
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    removeFile('/moveNormalTest003.jpg').then(json =>{}).catch(e => {});
    rmdir('/moveNormalTest003').then(json =>{}).catch(e => {});
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('moveNormalTest003', FileProfileNormalTest.moveNormalTest003);
}
/**
 * DELETEメソッドでremoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='/dir1/rm_test.jpg'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.removeNormalTest001 = function(assert) {
  let done = assert.async();
  saveFile('/rm_test.jpg').then(serviceId => {
      sdk.delete({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        params: {
          serviceId: serviceId,
          path: '/rm_test.jpg'
        }
      }).then(json => {
        assert.ok(true, 'result=' + json.result);
        done();
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        removeFile('/rm_test.jpg').then(json =>{}).catch(e => {});
        done();
      });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    removeFile('/rm_test.jpg').then(json =>{}).catch(e => {});
    done();
  });

};
if (IS_TEST_STATUS == 'none') {
  QUnit.test('removeNormalTest001', FileProfileNormalTest.removeNormalTest001);
}
/**
 * ディレクトリdir1がある事が前提。dir1を削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir1'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.rmdirNormalTest001 = function(assert) {
  let done = assert.async();
  mkdir('rmdirNormalTest001').then(serviceId => {
    sdk.delete({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
      params: {
        serviceId: serviceId,
        path: '/rmdirNormalTest001'
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
      done();
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      rmdir('/rmdirNormalTest001').then(json =>{}).catch(e => {});
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    rmdir('/rmdirNormalTest001').then(json =>{}).catch(e => {});
    done();
  });
};
QUnit.test('rmdirNormalTest001', FileProfileNormalTest.rmdirNormalTest001);

/**
 * ディレクトリmkdirNormalTest001が存在しない事が前提。ディレクトリmkdirNormalTest001を作成する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='mkdirNormalTest001'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.mkdirNormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
    params: {
      serviceId: getCurrentServiceId(),
      path: 'mkdirNormalTest001'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
    rmdir('mkdirNormalTest001').then(json =>{}).catch(e => {});
    done();
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    rmdir('mkdirNormalTest001').then(json =>{}).catch(e => {});
    done();
  });
};
QUnit.test('mkdirNormalTest001', FileProfileNormalTest.mkdirNormalTest001);

/**
 * ディレクトリ/dir2と/dir2/dir3が存在しない事が前提。ディレクトリdir2とdir2/dir3を作成する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir2/dir3'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */

FileProfileNormalTest.mkdirNormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
    params: {
      serviceId: getCurrentServiceId(),
      path: '/dir2/dir3'
    }
  }).then(json => {
    assert.ok(true, 'result=' + json.result);
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
  }).finally(() => {
    rmdir('dir2').then(json =>{}).catch(e => {});
    done();
  });
};
QUnit.test('mkdirNormalTest002', FileProfileNormalTest.mkdirNormalTest002);

/**
 * ディレクトリ/dir2がある事が前提。dir2を削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir2/dir3'&forceRemove=true<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.rmdirNormalTest001 = function(assert) {
  let done = assert.async();
  mkdir('/dir2/dir3').then(serviceId => {
    sdk.delete({
      profile: dConnectSDK.constants.file.PROFILE_NAME,
      attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
      params: {
        serviceId: getCurrentServiceId(),
        path: '/dir2/dir3',
        forceRemove: true
      }
    }).then(json => {
      assert.ok(true, 'result=' + json.result);
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    }).finally(() => {
      rmdir('dir2').then(json =>{}).catch(e => {});
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('rmdirNormalTest001', FileProfileNormalTest.rmdirNormalTest001);

/**
 * /mvdirNormalTest001_1を/mvdirNormalTest001_2に移動する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br />
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&oldPath=/mvdirNormalTest001_1<br />
 *       &newPath=/mvdirNormalTest001_2
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに0が返ってくること。<br />
 * </p>
 */
FileProfileNormalTest.mvdirNormalTest001 = function(assert) {
  let done = assert.async();
  mkdir('mvdirNormalTest001_1').then(serviceId => {
    mkdir('mvdirNormalTest001_2').then(serviceId => {
        sdk.post({
          profile: dConnectSDK.constants.file.PROFILE_NAME,
          attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
          params: {
            serviceId: serviceId,
            oldPath: '/mvdirNormalTest001_1',
            newPath: '/mvdirNormalTest001_2'
          }
        }).then(json => {
          assert.ok(true, 'result=' + json.result);
          rmdir('mvdirNormalTest001_1').then(json =>{}).catch(e => {});
          rmdir('mvdirNormalTest001_2').then(json =>{}).catch(e => {});
          done();
        }).catch(e => {
          assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
          rmdir('mvdirNormalTest001_1').then(json =>{}).catch(e => {});
          rmdir('mvdirNormalTest001_2').then(json =>{}).catch(e => {});
          done();
        });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      rmdir('mvdirNormalTest001_1').then(json =>{}).catch(e => {});
      rmdir('mvdirNormalTest001_2').then(json =>{}).catch(e => {});
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('mvdirNormalTest001', FileProfileNormalTest.mvdirNormalTest001);
