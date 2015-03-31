module('Websocket Test', {
  setup: function() {
    init();
  }
});

/**
 * Websocketの接続、切断を100繰り返すテストを行う。
 * <p>
 * </p>
 * <p>
 * 【期待する動作】<br/>
 * ・問題なく接続・切断が行われること。<br/>
 * ・途中でエラーが発生しないこと。<br/>
 * </p>
 */
QUnit.asyncTest('100 times the connect and disconnect of Websocket.',
    function(assert) {
  var testFunc = function(count) {
    if (count >= 100) {
      QUnit.start();
      return;
    }

    dConnect.connectWebSocket('test_' + count,
        function(eventCode, eventMessage) {
      if (eventCode == 0) {
        assert.ok(true, 'test_' + count + ' connected.');
        setTimeout(function() {
          dConnect.disconnectWebSocket();
        }, 200);
      } else if (eventCode == 1) {
        assert.ok(true, 'test_' + count + ' disconnected.');
        setTimeout(function() {
          testFunc(count + 1);
        }, 200);
      } else {
        assert.ok(false, 'error: ' + error);
      }
    });
  }
  testFunc(0);
});
