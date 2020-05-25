QUnit.module('File Profile Abnormal Test', {
  before: function() {
    init();
  }
});

/**
 * Fileプロファイルのテストを行うクラス。
 * @class
 */
let FileProfileAbnormalTest = {};


/**
 * 定義されていないPUTメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
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
QUnit.test('listAbnormalTest001(Calling a put method that does not support.)',
    FileProfileAbnormalTest.listAbnormalTest001);

/**
 * 定義されていないPOSTメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
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
QUnit.test('listAbnormalTest002(Calling a post method that does not support.)',
    FileProfileAbnormalTest.listAbnormalTest002);

/**
 * 定義されていないDELETEメソッドでlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
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
QUnit.test('listAbnormalTest003(Calling a delete method that does not support.)',
    FileProfileAbnormalTest.listAbnormalTest003);

/**
 * order=-1000を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order=-1000<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest004 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: -1000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest004(order is minus(-1000))', FileProfileAbnormalTest.listAbnormalTest004);

/**
 * order=100.55を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order=100.55<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest005 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 100.55
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest005(order is float(100.55))', FileProfileAbnormalTest.listAbnormalTest005);

/**
 * order=pathを指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest006 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest006(order is string(path))', FileProfileAbnormalTest.listAbnormalTest006);

/**
 * order='abcdef'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='abcdef'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest007 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'abcdef'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest007(order is string(abcdef))',
      FileProfileAbnormalTest.listAbnormalTest007);

/**
 * order='あいうえお'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='あいうえお'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest008 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'あいうえお'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest008(order is string(あいうえお))',
        FileProfileAbnormalTest.listAbnormalTest008);

/**
 * order='#$%()'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='#$%()'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest009 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: '#$%()'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest009(order is special character(#$%()))',
          FileProfileAbnormalTest.listAbnormalTest009);

/**
 * order='path,asc' ,limit=-100を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=-100<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest010 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      limit: -100
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest010()', FileProfileAbnormalTest.listAbnormalTest010);

/**
 * order='path,asc',limit=100.5を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&limit=100.5<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest011 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      limit: 100.5
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('listAbnormalTest011()', FileProfileAbnormalTest.listAbnormalTest011);

/**
 * order='path,asc',offset=10.5を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=10.5<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest012 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      offset: 10.5
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest012()', FileProfileAbnormalTest.listAbnormalTest012);

/**
 * order='path,asc',offset=-100を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=-100<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest013 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      offset: -100
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest013()', FileProfileAbnormalTest.listAbnormalTest013);

/**
 * order='path,asc',offset=1000000を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&order='path,asc'&offset=1000000<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest014 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      offset: 1000000
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest014()', FileProfileAbnormalTest.listAbnormalTest014);

/**
 * path=temp, order='path,asc'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&path=tmp&order='path,asc'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest015 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,asc',
      path: 'temp'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest015()', FileProfileAbnormalTest.listAbnormalTest015);

/**
 * path=temp, order='path,desc'を指定してlistにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file/list?serviceId=xxxx&accessToken=xxx&path=tmp&order='path,desc'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.listAbnormalTest016 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_LIST,
    params: {
      serviceId: getCurrentServiceId(),
      order: 'path,desc',
      path: 'temp'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('listAbnormalTest016()', FileProfileAbnormalTest.listAbnormalTest016);


/**
 * 必要なパラメータ(data)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&mimeType='image/png'&path='photo.png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 'image/png',
      path: 'photo.png'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('sendAbnormalTest001()', FileProfileAbnormalTest.sendAbnormalTest001);



/**
 * 必要なパラメータ(path)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&mimeType='image/png'&data='photo.png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 'image/png',
      data: 'photo.png'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('sendAbnormalTest002()', FileProfileAbnormalTest.sendAbnormalTest002);

/**
 * 必要なパラメータ(data, path)がない状態でsendにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&mimeType='image/png'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest003 = function(assert) {
  let done = assert.async();
  sdk.post({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      mimeType: 'image/png'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });

};
QUnit.test('sendAbnormalTest003()', FileProfileAbnormalTest.sendAbnormalTest003);

/**
 * forceOverwriteがfalseのときに上書きに失敗するテスト.
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br />
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='/send_abnormal_test005.jpg'<br />
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br />
 * </p>
 */
FileProfileAbnormalTest.sendAbnormalTest004 = function(assert) {
  let done = assert.async();
  saveFile('/send_abnormal_test005.jpg').then(serviceId => {
      let blob = draw('file test');
      sdk.post({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        params: {
          serviceId: serviceId,
          path: '/send_abnormal_test005.jpg',
          mimeType: 'image/jpeg',
          data: blob,
          forceOverwrite: false
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        removeFile('/send_abnormal_test005.jpg').then(json =>{}).catch(e => {});
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        removeFile('/send_abnormal_test005.jpg').then(json =>{}).catch(e => {});
        done();
      });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('sendAbnormalTest004()', FileProfileAbnormalTest.sendAbnormalTest004);

/**
 * 必要なパラメータ（path）が無い状態でファイルのURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('receiveAbnormalTest001(path does not exist.)', FileProfileAbnormalTest.receiveAbnormalTest001);

/**
 * ファイル0000が無い状態でファイル0000のURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: GET<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='0000'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.receiveAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.get({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      path: '0000'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    if (e.errorCode == 10 || e.errorCode == 16) {
      assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    } else if (checkErrorCode(e.errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    }
    done();
  });
};
QUnit.test('receiveAbnormalTest002(Calling a delete method that does not support.)',
          FileProfileAbnormalTest.receiveAbnormalTest002);

/**
 * 必要なパラメータ(oldPath, newPath)がない状態でmoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest001()', FileProfileAbnormalTest.moveAbnormalTest001);

/**
 * 存在しない画像を指定された状態でmoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=moveAbnormalTest002.jpg<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      oldPath: 'moveAbnormalTest002.jpg',
      newPath: 'moveAbnormalTest002_1.jpg'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('moveAbnormalTest002()', FileProfileAbnormalTest.moveAbnormalTest002);

/**
 * ディレクトリが指定された状態でmoveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveAbnormalTest003_1
 *       &newOldPath=/moveAbnormalTest003_2<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest003 = function(assert) {
  let done = assert.async();
  mkdir('moveAbnormalTest003_1').then(serviceId => {
    mkdir('/moveAbnormalTest003_2/moveAbnormalTest003_1').then(serviceId => {
          sdk.put({
            profile: dConnectSDK.constants.file.PROFILE_NAME,
            params: {
              serviceId: serviceId,
              oldPath: '/moveAbnormalTest003_1',
              newPath: '/moveAbnormalTest003_2'
            }
          }).then(json => {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            rmdir('/moveAbnormalTest003_1').then(json =>{}).catch(e => {});
            rmdir('/moveAbnormalTest003_2').then(json =>{}).catch(e => {});
            done();
          }).catch(e => {
            checkSuccessErrorCode(assert, e, 10);
            rmdir('/moveAbnormalTest003_1').then(json =>{}).catch(e => {});
            rmdir('/moveAbnormalTest003_2').then(json =>{}).catch(e => {});
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
QUnit.test('moveAbnormalTest003()', FileProfileAbnormalTest.moveAbnormalTest003);

/**
 * 移動先に同じファイルが存在している場合に、moveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveAbnormalTest004.jpg
 *       &newOldPath=/moveAbnormalTest004<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest004 = function(assert) {
  let done = assert.async();
  saveFile('/moveAbnormalTest004.jpg').then(serviceId => {
    mkdir('moveAbnormalTest004').then(serviceId => {
      saveFile('/moveAbnormalTest004/moveAbnormalTest004.jpg').then(serviceId => {
          sdk.put({
            profile: dConnectSDK.constants.file.PROFILE_NAME,
            params: {
              serviceId: serviceId,
              oldPath: '/moveAbnormalTest004.jpg',
              newPath: '/moveAbnormalTest004'
            }
          }).then(json => {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            removeFile('/moveAbnormalTest004.jpg').then(json =>{}).catch(e => {});
            rmdir('/moveAbnormalTest004').then(json =>{}).catch(e => {});
            done();
          }).catch(e => {
            checkSuccessErrorCode(assert, e, 10);
            removeFile('/moveAbnormalTest004.jpg').then(json =>{}).catch(e => {});
            rmdir('/moveAbnormalTest004').then(json =>{}).catch(e => {});
            done();
          });
        }).catch(e => {
          removeFile('/moveAbnormalTest004.jpg').then(json =>{}).catch(e => {});
          rmdir('/moveAbnormalTest004').then(json =>{}).catch(e => {});
          assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
          done();
        });
    }).catch(e => {
      removeFile('/moveAbnormalTest004.jpg').then(json =>{}).catch(e => {});
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });

};
QUnit.test('moveAbnormalTest004()', FileProfileAbnormalTest.moveAbnormalTest004);

/**
 * 移動先に同じファイルが存在している場合にforceOverwrite=falseの時に、moveにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&oldPath=/moveAbnormalTest005.jpg
 *       &newOldPath=/moveAbnormalTest005&forceOverwrite=false<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.moveAbnormalTest005 = function(assert) {
  let done = assert.async();
  saveFile('moveAbnormalTest005.jpg').then(serviceId => {
    mkdir('moveAbnormalTest005').then(serviceId => {
      saveFile('/moveAbnormalTest005/moveAbnormalTest005.jpg').then(serviceId => {
        sdk.put({
          profile: dConnectSDK.constants.file.PROFILE_NAME,
          params: {
            serviceId: serviceId,
            oldPath: '/moveAbnormalTest005.jpg',
            newPath: '/moveAbnormalTest005'
          }
        }).then(json => {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          rmdir('/moveAbnormalTest005').then(json =>{}).catch(e => {});
          done();
        }).catch(e => {
          checkSuccessErrorCode(assert, e, 10);
          removeFile('/moveAbnormalTest005.jpg').then(json =>{}).catch(e => {});
          rmdir('/moveAbnormalTest005').then(json =>{}).catch(e => {});
          done();
        });
      }).catch(e => {
        assert.ok(checkErrorCode(e.errorCode), 'In Save file errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
        removeFile('moveAbnormalTest005.jpg').then(json =>{}).catch(e => {});
        rmdir('/moveAbnormalTest005').then(json =>{}).catch(e => {});
        done();
      });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'Mkdir errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      removeFile('moveAbnormalTest005.jpg').then(json =>{}).catch(e => {});
      rmdir('/moveAbnormalTest005').then(json =>{}).catch(e => {});
      done();
    });
  }).catch(e => {
    removeFile('moveAbnormalTest005.jpg').then(json =>{}).catch(e => {});
    rmdir('/moveAbnormalTest005').then(json =>{}).catch(e => {});
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('moveAbnormalTest005()', FileProfileAbnormalTest.moveAbnormalTest005);

/**
 * 必要なパラメータ（path）が無い状態でファイルを削除する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    if (e.errorCode == 10 || e.errorCode == 16) {
      assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    } else if (checkErrorCode(e.errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    }
    done();
  });
};
QUnit.test('removeAbnormalTest001(path does not exist.)', FileProfileAbnormalTest.removeAbnormalTest001);

/**
 * ファイル0000が無い状態でファイル0000のURIを取得する。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file?serviceId=xxxx&accessToken=xxx&path='0000'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.removeAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    params: {
      serviceId: getCurrentServiceId(),
      path: '0000'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    if (e.errorCode == 1 || e.errorCode == 10 || e.errorCode == 16) {
      assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    } else if (checkErrorCode(e.errorCode)) {
      assert.ok(true, "not support");
    } else {
      assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
    }
    done();
  });
};
QUnit.test('removeAbnormalTest002(0000 does not exist.)', FileProfileAbnormalTest.removeAbnormalTest002);


/**
 * 必要なパラメータ（path）がない状態でディレクトリ作成を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mkdirAbnormalTest001()', FileProfileAbnormalTest.mkdirAbnormalTest001);

/**
 * ディレクトリもしくはファイル(mkdirAbnormalTest002)が存在する状態でディレクトリmkdirAbnormalTest002作成を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: POST<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mkdirAbnormalTest002 = function(assert) {
  let done = assert.async();
  mkdir('/mkdirAbnormalTest002').then(serviceId => {
    saveFile('/mkdirAbnormalTest002/mkdirAbnormalTest002.jpg').then(serviceId => {
          sdk.post({
            profile: dConnectSDK.constants.file.PROFILE_NAME,
            attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
            params: {
              serviceId: serviceId,
              path: '/mkdirAbnormalTest002'
            }
          }).then(json => {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            rmdir('/mkdirAbnormalTest002').then(json =>{}).catch(e => {});
            done();
          }).catch(e => {
            if (e.errorCode == 10 || e.errorCode == 16) {
              assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
            } else if (checkErrorCode(e.errorCode)) {
              assert.ok(true, "not support");
            } else {
              assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
            }
            rmdir('/mkdirAbnormalTest002').then(json =>{}).catch(e => {});
            done();
          });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      rmdir('/mkdirAbnormalTest002').then(json =>{}).catch(e => {});
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('mkdirAbnormalTest002()', FileProfileAbnormalTest.mkdirAbnormalTest002);


/**
 * 必要なパラメータ(oldPath, newPath)がない状態でMoveDirectoryにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mvDirAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mvDirAbnormalTest001(Invalid path.)', FileProfileAbnormalTest.mvDirAbnormalTest001);

/**
 * 存在しないディレクトリを指定された状態でMoveDirectoryにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&oldPath=/mvDirAbnormalTest002_1
 *       &newPath=/mvDirAbnormalTest002_2<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mvDirAbnormalTest002 = function(assert) {
  let done = assert.async();
  sdk.put({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
    params: {
      serviceId: getCurrentServiceId(),
      oldPath: 'mvDirAbnormalTest002_1',
      newPath: 'mvDirAbnormalTest002_2'
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('mvDirAbnormalTest002(Non exist dir.)', FileProfileAbnormalTest.mvDirAbnormalTest002);

/**
 * ファイルが指定された状態でMoveDirectoryにアクセスするテストを行なう。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: PUT<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&oldPath=/mvDirAbnormalTest003.jpg
 *       &newOldPath=/moveAbnormalTest003<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.mvDirAbnormalTest003 = function(assert) {
  let done = assert.async();
  saveFile('mvDirAbnormalTest003.jpg').then(serviceId => {
    mkdir('/mvDirAbnormalTest003').then(serviceId => {
      sdk.put({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
        params: {
          serviceId: serviceId,
          oldPath: 'mvDirAbnormalTest003.jpg',
          newPath: 'mvDirAbnormalTest003'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        removeFile('/mvDirAbnormalTest003.jpg').then(json =>{}).catch(e => {});
        rmdir('/mvDirAbnormalTest003').then(json =>{}).catch(e => {});
        done();
      }).catch(e => {
        checkSuccessErrorCode(assert, e, 10);
        removeFile('/mvDirAbnormalTest003.jpg').then(json =>{}).catch(e => {});
        rmdir('/mvDirAbnormalTest003').then(json =>{}).catch(e => {});
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
QUnit.test('mvDirAbnormalTest003()', FileProfileAbnormalTest.mvDirAbnormalTest003);



/**
 * 必要なパラメータ（path）がない状態でディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest001 = function(assert) {
  let done = assert.async();
  sdk.delete({
    profile: dConnectSDK.constants.file.PROFILE_NAME,
    attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
    params: {
      serviceId: getCurrentServiceId()
    }
  }).then(json => {
    assert.ok(false, 'json: ' + JSON.stringify(json));
    done();
  }).catch(e => {
    checkSuccessErrorCode(assert, e, 10);
    done();
  });
};
QUnit.test('rmdirAbnormalTest001(Path does not exist.)', FileProfileAbnormalTest.rmdirAbnormalTest001);

/**
 * rmdirAbnormalTest002以下にファイルが有るときrmdirAbnormalTest002を削除するリクエストを送る。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path=rmdirAbnormalTest002<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest002 = function(assert) {
  let done = assert.async();
  mkdir('rmdirAbnormalTest002').then(serviceId => {
    saveFile('/rmdirAbnormalTest002/rmdirAbnormalTest002.jpg').then(serviceId => {
          sdk.delete({
            profile: dConnectSDK.constants.file.PROFILE_NAME,
            attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
            params: {
              serviceId: serviceId,
              path: '/rmdirAbnormalTest002'
            }
          }).then(json => {
            assert.ok(false, 'json: ' + JSON.stringify(json));
            rmdir('/rmdirAbnormalTest002').then(json =>{}).catch(e => {});
            done();
          }).catch(e => {
            if (e.errorCode == 1 || e.errorCode == 10 || e.errorCode == 16) {
              assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
            } else if (checkErrorCode(e.errorCode)) {
              assert.ok(true, "not support");
            } else {
              assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
            }
            rmdir('/rmdirAbnormalTest002').then(json =>{}).catch(e => {});
            done();
          });
    }).catch(e => {
      assert.ok(checkErrorCode(e.errorCode), 'Save File errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
      rmdir('/rmdirAbnormalTest002').then(json =>{}).catch(e => {});
      done();
    });
  }).catch(e => {
    assert.ok(checkErrorCode(e.errorCode), 'mkdir errorCode=' + e.errorCode + ', errorMessage=' + e.errorMessage);
    done();
  });
};
QUnit.test('rmdirAbnormalTest002(Dir1 has some files.)', FileProfileAbnormalTest.rmdirAbnormalTest002);

/**
 * ディレクトリではないrm_test.jpgに対してディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir/rm_test.jpg'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest003 = function(assert) {
  let done = assert.async();
  mkdir('rmdirAbnormalTest003').then(serviceId => {
    saveFile('/rmdirAbnormalTest003/rmdirAbnormalTest003.jpg').then(serviceId => {
      sdk.delete({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
        params: {
          serviceId: getCurrentServiceId(),
          path: '/rmdirAbnormalTest003/rmdirAbnormalTest003.jpg'
        }
      }).then(json => {
        assert.ok(false, 'json: ' + JSON.stringify(json));
        rmdir('/rmdirAbnormalTest003').then(json =>{}).catch(e => {});
        done();
      }).catch(e => {
        if (e.errorCode == 10 || e.errorCode == 16) {
          assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        } else if (checkErrorCode(e.errorCode)) {
          assert.ok(true, "not support");
        } else {
          assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
        }
        rmdir('/rmdirAbnormalTest003').then(json =>{}).catch(e => {});
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
QUnit.test('rmdirAbnormalTest003(1.jpeg is not directory.)', FileProfileAbnormalTest.rmdirAbnormalTest003);


/**
 * forceRemoveがfalseの時にファイルが存在しているディレクトリに対してディレクトリ削除を行う。
 * <h3>【HTTP通信】</h3>
 * <p id="test">
 * Method: DELETE<br/>
 * Path: /file/directory?serviceId=xxxx&accessToken=xxx&path='/dir/rm_test.jpg'<br/>
 * <p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・resultに1が返ってくること。<br/>
 * </p>
 */
FileProfileAbnormalTest.rmdirAbnormalTest004 = function(assert) {
  let done = assert.async();
  mkdir('rmdirAbnormalTest004').then(serviceId => {
    saveFile('/rmdirAbnormalTest004/rmdirAbnormalTest004.jpg').then(serviceId => {
      sdk.delete({
        profile: dConnectSDK.constants.file.PROFILE_NAME,
        attribute: dConnectSDK.constants.file.ATTR_DIRECTORY,
        params: {
          serviceId: serviceId,
          path: '/rmdirAbnormalTest004',
          forceRemove: false
        }
      }).then(json => {
          assert.ok(false, 'json: ' + JSON.stringify(json));
          removeFile('/rmdirAbnormalTest004/rmdirAbnormalTest004.jpg').then(json =>{}).catch(e => {});
          rmdir('/rmdirAbnormalTest004').then(json =>{}).catch(e => {});
          done();
      }).catch(e => {
          if (e.errorCode == 10 || e.errorCode == 16) {
            assert.ok(true, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
          } else if (checkErrorCode(e.errorCode)) {
            assert.ok(true, "not support");
          } else {
            assert.ok(false, "errorCode=" + e.errorCode + ", errorMessage=" + e.errorMessage);
          }
          removeFile('/rmdirAbnormalTest004/rmdirAbnormalTest004.jpg').then(json =>{}).catch(e => {});
          rmdir('/rmdirAbnormalTest004').then(json =>{}).catch(e => {});
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
QUnit.test('rmdirAbnormalTest004(Overwrite is false)', FileProfileAbnormalTest.rmdirAbnormalTest004);
