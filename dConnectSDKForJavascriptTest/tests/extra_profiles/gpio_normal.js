module('GPIOProfileNormalTest', {
  setup: function() {
    init();
  }
});

/**
 * GPIOプロファイルの正常系テストを行うクラス。
 * @class
 */
var GPIOProfileNormalTest = {};

/**
 * GPIOでPIN 2をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest003 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('2');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest003',
    GPIOProfileNormalTest.gpioNormalTest003);

/**
 * GPIOでPIN 3をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest004 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('3');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest004',
    GPIOProfileNormalTest.gpioNormalTest004);

/**
 * GPIOでPIN 4をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/4?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest005 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('4');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest005',
    GPIOProfileNormalTest.gpioNormalTest005);

/**
 * GPIOでPIN 5をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest006 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('5');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest006',
    GPIOProfileNormalTest.gpioNormalTest006);

/**
 * GPIOでPIN 6をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest007 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('6');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest007',
    GPIOProfileNormalTest.gpioNormalTest007);

/**
 * GPIOでPIN 7をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest008 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('7');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest008',
    GPIOProfileNormalTest.gpioNormalTest008);

/**
 * GPIOでPIN 8をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest009 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('8');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest009',
    GPIOProfileNormalTest.gpioNormalTest009);


/**
 * GPIOでPIN 9をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest010 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('9');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest010',
    GPIOProfileNormalTest.gpioNormalTest010);


/**
 * GPIOでPIN 10をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest011 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('10');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest011',
    GPIOProfileNormalTest.gpioNormalTest011);

/**
 * GPIOでPIN 11をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest012 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('11');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest012',
    GPIOProfileNormalTest.gpioNormalTest012);

/**
 * GPIOでPIN 12をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest013 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('12');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest013',
    GPIOProfileNormalTest.gpioNormalTest013);

/**
 * GPIOでPIN 13をHIGHにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: PUT<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest014 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('13');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.put(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest014',
    GPIOProfileNormalTest.gpioNormalTest014);

/**
 * GPIOでPIN 2をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest015 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('2');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest015',
    GPIOProfileNormalTest.gpioNormalTest015);

/**
 * GPIOでPIN 3をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest016 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('3');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest016',
    GPIOProfileNormalTest.gpioNormalTest016);

/**
 * GPIOでPIN 4をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/4?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest017 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('4');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest017',
    GPIOProfileNormalTest.gpioNormalTest017);

/**
 * GPIOでPIN 5をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest018 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('5');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest018',
    GPIOProfileNormalTest.gpioNormalTest018);

/**
 * GPIOでPIN 6をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest019 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('6');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest019',
    GPIOProfileNormalTest.gpioNormalTest019);

/**
 * GPIOでPIN 7をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest020 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('7');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest020',
    GPIOProfileNormalTest.gpioNormalTest020);

/**
 * GPIOでPIN 8をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest021 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('8');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest021',
    GPIOProfileNormalTest.gpioNormalTest021);

/**
 * GPIOでPIN 9をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest022 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('9');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest022',
    GPIOProfileNormalTest.gpioNormalTest022);

/**
 * GPIOでPIN 10をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest023 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('10');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest023',
    GPIOProfileNormalTest.gpioNormalTest023);

/**
 * GPIOでPIN 11をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest024 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('11');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest024',
    GPIOProfileNormalTest.gpioNormalTest024);

/**
 * GPIOでPIN 12をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest025 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('12');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest025',
    GPIOProfileNormalTest.gpioNormalTest025);

/**
 * GPIOでPIN 13をLOWにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: DELETE<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest026 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('13');
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.delete(uri, null, 
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest026',
    GPIOProfileNormalTest.gpioNormalTest026);

/**
 * GPIOでPIN 2をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest027 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('2');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest027',
    GPIOProfileNormalTest.gpioNormalTest027);

/**
 * GPIOでPIN 3をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest028 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('3');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest028',
    GPIOProfileNormalTest.gpioNormalTest028);

/**
 * GPIOでPIN 4をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/4<br/>
 * POST value: serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest029 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('4');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest029',
    GPIOProfileNormalTest.gpioNormalTest029);

/**
 * GPIOでPIN 5をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest030 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('5');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest030',
    GPIOProfileNormalTest.gpioNormalTest030);

/**
 * GPIOでPIN 6をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest031 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('6');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest031',
    GPIOProfileNormalTest.gpioNormalTest031);

/**
 * GPIOでPIN 7をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest032 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('7');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest032',
    GPIOProfileNormalTest.gpioNormalTest032);

/**
 * GPIOでPIN 8をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest033 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('8');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest033',
    GPIOProfileNormalTest.gpioNormalTest033);

/**
 * GPIOでPIN 9をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest034 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('9');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest033',
    GPIOProfileNormalTest.gpioNormalTest033);

/**
 * GPIOでPIN 10をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest034 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('10');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest034',
    GPIOProfileNormalTest.gpioNormalTest034);

/**
 * GPIOでPIN 11をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest035 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('11');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest035',
    GPIOProfileNormalTest.gpioNormalTest035);

/**
 * GPIOでPIN 12をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest036 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('12');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest036',
    GPIOProfileNormalTest.gpioNormalTest036);

/**
 * GPIOでPIN 13をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest037 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('13');
        builder.addParameter('value', 1);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest037',
    GPIOProfileNormalTest.gpioNormalTest037);

/**
 * GPIOでPIN 2をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/2?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest038 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('2');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest038',
    GPIOProfileNormalTest.gpioNormalTest038);

/**
 * GPIOでPIN 3をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/3?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest039 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('3');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest039',
    GPIOProfileNormalTest.gpioNormalTest039);

/**
 * GPIOでPIN 4をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/4?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest040 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('4');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest040',
    GPIOProfileNormalTest.gpioNormalTest040);

/**
 * GPIOでPIN 5をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/5?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest041 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('5');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest041',
    GPIOProfileNormalTest.gpioNormalTest041);

/**
 * GPIOでPIN 6をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/6?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest042 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('6');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest042',
    GPIOProfileNormalTest.gpioNormalTest042);

/**
 * GPIOでPIN 7をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/7?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest043 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('7');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest043',
    GPIOProfileNormalTest.gpioNormalTest043);

/**
 * GPIOでPIN 8をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/8?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest044 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('8');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest044',
    GPIOProfileNormalTest.gpioNormalTest044);

/**
 * GPIOでPIN 9をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/9?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest045 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('9');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest045',
    GPIOProfileNormalTest.gpioNormalTest045);

/**
 * GPIOでPIN 10をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/10?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest046 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('10');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest046',
    GPIOProfileNormalTest.gpioNormalTest046);

/**
 * GPIOでPIN 11をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/11?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest047 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('11');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest047',
    GPIOProfileNormalTest.gpioNormalTest047);

/**
 * GPIOでPIN 12をHIGHにする。POSTメソッドでvalueに1を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/12?serviceId=xxxx&accessToken=xxx&value=1<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest048 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('12');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest048',
    GPIOProfileNormalTest.gpioNormalTest048);

/**
 * GPIOでPIN 13をHIGHにする。POSTメソッドでvalueに0を設定して送信するテスト。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/digital/13?serviceId=xxxx&accessToken=xxx&value=0<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest049 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('digital');
        builder.setAttribute('13');
        builder.addParameter('value', 0);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest049',
    GPIOProfileNormalTest.gpioNormalTest049);

/**
 * PIN 3のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/3?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest050 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('export');
        builder.setAttribute('3');
        builder.addParameter('mode', 3);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest050',
    GPIOProfileNormalTest.gpioNormalTest050);


/**
 * PIN 3を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/3?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest051 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('3');
        builder.addParameter('value', 50);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest051',
    GPIOProfileNormalTest.gpioNormalTest051);

/**
 * PIN 5のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/5?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest052 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('export');
        builder.setAttribute('5');
        builder.addParameter('mode', 3);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest052',
    GPIOProfileNormalTest.gpioNormalTest052);


/**
 * PIN 5を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/5?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest053 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('5');
        builder.addParameter('value', 50);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest053',
    GPIOProfileNormalTest.gpioNormalTest053);

/**
 * PIN 6のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/6?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest054 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('export');
        builder.setAttribute('6');
        builder.addParameter('mode', 3);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest054',
    GPIOProfileNormalTest.gpioNormalTest054);


/**
 * PIN 6を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/6?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest055 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('6');
        builder.addParameter('value', 50);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest055',
    GPIOProfileNormalTest.gpioNormalTest055);

/**
 * PIN 9のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/9?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest056 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('export');
        builder.setAttribute('9');
        builder.addParameter('mode', 3);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest056',
    GPIOProfileNormalTest.gpioNormalTest056);


/**
 * PIN 9を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/9?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest057 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('9');
        builder.addParameter('value', 50);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest057',
    GPIOProfileNormalTest.gpioNormalTest057);

/**
 * PIN 10のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/10?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest058 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('export');
        builder.setAttribute('10');
        builder.addParameter('mode', 3);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest058',
    GPIOProfileNormalTest.gpioNormalTest058);


/**
 * PIN 10を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/10?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest059 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('10');
        builder.addParameter('value', 50);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest059',
    GPIOProfileNormalTest.gpioNormalTest059);

/**
 * PIN 11のModeをPWMにする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/export/11?serviceId=xxxx&accessToken=xxx&mode=3<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest060 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('export');
        builder.setAttribute('11');
        builder.addParameter('mode', 3);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest060',
    GPIOProfileNormalTest.gpioNormalTest060);

/**
 * PIN 11を50をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/11?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest061 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('11');
        builder.addParameter('value', 50);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest061',
    GPIOProfileNormalTest.gpioNormalTest061);

/**
 * PIN 3を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/3?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest062 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('3');
        builder.addParameter('value', 255);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest062',
    GPIOProfileNormalTest.gpioNormalTest062);

/**
 * PIN 5を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/5?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest063 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('5');
        builder.addParameter('value', 255);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest063',
    GPIOProfileNormalTest.gpioNormalTest063);

/**
 * PIN 6を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/6?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest064 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('6');
        builder.addParameter('value', 255);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest064',
    GPIOProfileNormalTest.gpioNormalTest064);

/**
 * PIN 9を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/9?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest065 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('9');
        builder.addParameter('value', 255);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest065',
    GPIOProfileNormalTest.gpioNormalTest065);
/**
 * PIN 10を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/10?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest066 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('10');
        builder.addParameter('value', 255);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest066',
    GPIOProfileNormalTest.gpioNormalTest066);

/**
 * PIN 11を255をAnalog Writeする。
 * <h3>【HTTP通信】</h3>
 * <p id='test'>
 * Method: POST<br/>
 * Path: /gpio/analog/11?serviceId=xxxx&accessToken=xxx&value=50<br/>
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id='expected'>
 * ・resultに0が返ってくること。<br/>
 * </p>
 */
GPIOProfileNormalTest.gpioNormalTest067 = function(assert) {
  searchTestService(function(accessToken, serviceId) {
        var builder = new dConnect.URIBuilder();
        builder.setProfile('gpio');
        builder.setInterface('analog');
        builder.setAttribute('11');
        builder.addParameter('value', 255);
        builder.setServiceId(serviceId);
        builder.setAccessToken(accessToken);
        var uri = builder.build();
         dConnect.post(uri, null, null,
            function(json) {
              assert.ok(true, 'result=' + json.result);
              QUnit.start();
            },
            function(errorCode, errorMessage) {
              assert.ok(checkErrorCode(errorCode),
                  'errorCode=' + errorCode + ' errorMessage=' + errorMessage);
              QUnit.start();
            });
      },
      function(errorCode, errorMessage) {
        assert.ok(false,
            'errorCode=' + errorCode + ', errorMessage=' + errorMessage);
        QUnit.start();
      });
};
QUnit.asyncTest('gpioNormalTest067',
    GPIOProfileNormalTest.gpioNormalTest067);






