/**
 messagehook.js
 Copyright (c) 2016 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var messagehook_messages = [];
var messagehook_registerd = false;


/**
 * MessageHook Menu
 *
 * @param {String}serviceId サービスID
 */
function showMessageHook(serviceId) {

  messagehook_registerd = false;
  initAll();

  var btnStr = '';
  btnStr += getBackButton('Device Top', 'doMessageHookBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('MessageHook Profile');

  var str = '';
  str += '<li><a href="javascript:doChannelList(\'' + serviceId +
          '\');">Channel List</a></li>';
  str += '<li><a href="javascript:showGetMessage(\'' + serviceId +
          '\');">Get Messages</a></li>';
  reloadList(str);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doMessageHookBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Channel Listを取得する.
 *
 * @param {String} serviceId サービスID
 */
function doChannelList(serviceId) {
  initAll();

  closeLoading();
  showLoading();

  setTitle('MessageHook ChannelList');

  var str = getBackButton('MessageHook TOP', 'doChannelListBack', serviceId, '');
  reloadContent(str);
  reloadHeader(str);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('messagehook');
  builder.setAttribute('channel');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    var str = '';
    for (var i = 0; i < json.channels.length; i++) {
      str += '<li><a href="javascript:showSendMessage(\'' +
              serviceId + '\',\'' + json.channels[i].id + '\',1);"  >';
      str += json.channels[i].name + '</a></li>';
    }
    reloadList(str);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('messagehook/channel', errorCode, errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doChannelListBack(serviceId, sessionKey) {
  showMessageHook(serviceId);
}

/**
 * メッセージ送信画面表示
 *
 * @param {String} serviceId サービスID
 */
function showSendMessage(serviceId, channelId) {
  initAll();

  setTitle('MessageHook SendMessage');

  var btnStr = '';
  btnStr += getBackButton('Channel List', 'showSendMessageBack',
                      serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form action="" method="POST" name="messageForm">';
  str += makeInputText('Text', 'text', 'text');
  str += makeInputText('ResourceURI', 'resource', 'resource');
  str += '</form>';
  str += '<input onclick="javascript:doSendMessage(\'' + serviceId +
        '\', \'' + channelId + '\');" type="button" value="Send"/>';
  reloadContent(str);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function showSendMessageBack(serviceId, sessionKey) {
  doChannelList(serviceId);
}


/**
 * メッセージ送信
 */
function doSendMessage(serviceId, channelId) {

  var form = document.getElementsByName('messageForm');
  var text = $('#text').val();
  var resource = $('#resource').val();
  if (!text && !resource) {
    return;
  }

  var builder = new dConnect.URIBuilder();
  builder.setProfile('messagehook');
  builder.setAttribute('message');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (text) {
    builder.addParameter('text', text);
  }
  if (resource) {
    builder.addParameter('resource', resource);
  }
  builder.addParameter('channelId', channelId);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    showError('messagehook/message', errorCode, errorMessage);
  });
}


/**
 * メッセージの取得.
 * @param {String} serviceId サービスID
 */
function showGetMessage(serviceId) {
  initAll();
  setTitle('MessageHook GetMessage');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('MessageHook TOP', 'showGetMessageBack',
      serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetMessage(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doGetMessageRegister(\'' +
          serviceId + '\', \'' + sessionKey + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doGetMessageUnregister(\'' +
          serviceId + '\', \'' + sessionKey +
          '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';

  reloadMenu(str);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function showGetMessageBack(serviceId, sessionKey) {
  doGetMessageUnregister(serviceId, sessionKey);
  showMessageHook(serviceId);
}


/**
 * Message一覧を取得する.
 *
 * @param {String} serviceId サービスID
 */
function doGetMessage(serviceId) {

  closeLoading();
  showLoading();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('messagehook');
  builder.setAttribute('onmessage');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    updateMessage(json);
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('messagehook/message', errorCode, errorMessage);
  });
}

/**
 * イベント登録
 */
function doGetMessageRegister(serviceId, sessionKey) {
  if (messagehook_registerd) {
    return;
  }
  messagehook_messages = [];
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messagehook');
  builder.setAttribute('onmessage');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }
  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }
    var json = JSON.parse(message);
    updateMessage(json);
  }, function() {
    messagehook_registerd = true;
    if (DEBUG) {
      console.log('Successed register Get Message Event.');
    }
  }, function(errorCode, errorMessage) {
    alert('errorCode=' + errorCode + ' errorMessage=' + errorMessage);
  });
}

/**
* イベント解除
 */
function doGetMessageUnregister(serviceId, sessionKey) {
  if (!messagehook_registerd) {
    return;
  }
  var builder = new dConnect.URIBuilder();
  builder.setProfile('messagehook');
  builder.setAttribute('onmessage');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }
  dConnect.removeEventListener(uri, function() {
    messagehook_registerd = false;
    if (DEBUG) {
      console.log('Successed unregister Get Message Event.');
    }
  }, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}


/**
* メッセージの更新.
**/
function updateMessage(json) {
    messagehook_messages.unshift(json.message);
    if (messagehook_messages.length > 10) {
      messagehook_messages.pop();
    }
    var str = '';
    for (var i = 0; i < messagehook_messages.length; i++) {
      var msg = messagehook_messages[i];
      str += '<li>[' + msg.channelId + '] ' + msg.from + ": " + msg.text + '</li>';
    }
    reloadList(str);
}
