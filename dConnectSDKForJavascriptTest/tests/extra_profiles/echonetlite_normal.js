module('EchonetLiteProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * EchonetLiteプロファイルの正常系テストを行うクラス。
 * @class
 */
var EchonetLiteProfileNormalTest = {};

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest001 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('echonetLite');
    builder.setAttribute('property');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'epc=' + json.properties[0].epc);
          assert.ok(true, 'value=' + json.properties[0].epc);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('propertyNormalTest001(get)',
    EchonetLiteProfileNormalTest.propertyNormalTest001);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest002 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('echonetLite');
    builder.setAttribute('property');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80,0x81');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'epc=' + json.properties[0].epc);
          assert.ok(true, 'value=' + json.properties[0].epc);
          assert.ok(true, 'epc=' + json.properties[1].epc);
          assert.ok(true, 'value=' + json.properties[1].epc);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('propertyNormalTest002(get)',
    EchonetLiteProfileNormalTest.propertyNormalTest002);

/**
 * ECHONET Lite プロパティを取得するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: GET<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80,0x8F,0xB0,0xB3,0xBB<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('echonetLite');
    builder.setAttribute('property');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80,0x81,0x82');
    var uri = builder.build();
    dConnect.get(uri, null, function(json) {
          assert.ok(true, 'result=' + json.result);
          assert.ok(true, 'epc=' + json.properties[0].epc);
          assert.ok(true, 'value=' + json.properties[0].epc);
          assert.ok(true, 'epc=' + json.properties[1].epc);
          assert.ok(true, 'value=' + json.properties[1].epc);
          assert.ok(true, 'epc=' + json.properties[2].epc);
          assert.ok(true, 'value=' + json.properties[2].epc);
          QUnit.start();
        },
    function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('propertyNormalTest003(get)',
    EchonetLiteProfileNormalTest.propertyNormalTest003);

/**
 * ECHONET Lite プロパティを設定するテストを行う。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /echonetLite/property?serviceId=xxxx&accessToken=xxx&epc=0x80&value=49<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
EchonetLiteProfileNormalTest.propertyNormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile('echonetLite');
    builder.setAttribute('property');
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('epc', '0x80');
    builder.addParameter('value', '49');
    var uri = builder.build();
    
    dConnect.put(uri, null, null, function(json) {
      assert.ok(true, 'result=' + json.result);
      QUnit.start();
    }, function(errorCode, errorMessage) {
      assert.ok(checkErrorCode(errorCode),
          'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
      QUnit.start();
    });
  }, function(errorCode, errorMessage) {
    assert.ok(false, 'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
    QUnit.start();
  });
};
QUnit.asyncTest('propertyNormalTest004(put)',
    EchonetLiteProfileNormalTest.propertyNormalTest004);

