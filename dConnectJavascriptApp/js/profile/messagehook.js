/**
 messagehook.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

let MESSAGEHOOK_MESSAGES = [];
let MESSAGEHOOK_REGISTERD = false;


/**
 * MessageHook Menu
 *
 * @param {String}serviceId サービスID
 */
function showMessageHook(serviceId) {

  MESSAGEHOOK_REGISTERD = false;
  initAll();

  let btnStr = '';
  btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  setTitle('MessageHook Profile');

  let str = '';
  str += '<li><a href="javascript:doChannelList(\'' + serviceId +
          '\');">Channel List</a></li>';
  str += '<li><a href="javascript:showGetMessage(\'' + serviceId +
          '\');">Get Messages</a></li>';
  reloadList(str);
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

  let str = getBackButton('MessageHook TOP', 'doChannelListBack', serviceId);
  reloadContent(str);
  reloadHeader(str);
  sdk.get({
    profile: 'messagehook',
    attribute: 'channel',
    serviceId: serviceId
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    let str = '';
    for (let i = 0; i < json.channels.length; i++) {
      str += '<li><a href="javascript:showSendMessage(\'' +
              serviceId + '\',\'' + json.channels[i].id + '\',1);"  >';
      str += json.channels[i].name + '</a></li>';
    }
    reloadList(str);
  }).catch(e => {
    closeLoading();
    showError('messagehook/channel', e.errorCode, e.errorMessage);
  });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function doChannelListBack(serviceId) {
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

  let btnStr = '';
  btnStr += getBackButton('Channel List', 'showSendMessageBack',
                      serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
 */
function showSendMessageBack(serviceId) {
  doChannelList(serviceId);
}


/**
 * メッセージ送信
 */
function doSendMessage(serviceId, channelId) {

  let form = document.getElementsByName('messageForm');
  let text = $('#text').val();
  let resource = $('#resource').val();
  if (!text && !resource) {
    return;
  }

  let params = {
    profile: 'messagehook',
    attribute: 'message',
    params: {
      serviceId: serviceId
    }
  };
  if (text) {
    params.params['text'] = text;
  }
  if (resource) {
    params.params['resource'] = resource;
  }
  params.params['channelId'] = channelId;

  sdk.post(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('messagehook/message', e.errorCode, e.errorMessage);
  });
}


/**
 * メッセージの取得.
 * @param {String} serviceId サービスID
 */
function showGetMessage(serviceId) {
  initAll();
  setTitle('MessageHook GetMessage');

  let btnStr = getBackButton('MessageHook TOP', 'showGetMessageBack', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<div>';
  str += '  <input data-icon=\"search\" onclick=\"doGetMessage(\'' +
          serviceId + '\')\" type=\"button\" value=\"Get\" />';
  str += '</div>';
  str += '<fieldset class=\"ui-grid-a\">';
  str += '  <div class=\"ui-block-a\">';
  str += '    <input data-icon=\"search\" ' +
          'onclick=\"doGetMessageRegister(\'' +
          serviceId + '\')\"' +
          ' type=\"button\" value=\"Register\" />';
  str += '  </div>';
  str += '  <div class=\"ui-block-b\">';
  str += '    <input data-icon=\"search\"' +
          ' onclick=\"doGetMessageUnregister(\'' +
          serviceId + '\')\" type=\"button\" value=\"Unregister\" />';
  str += '  </div>';
  str += '</fieldset>';

  reloadMenu(str);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 */
function showGetMessageBack(serviceId) {
  doGetMessageUnregister(serviceId);
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
  sdk.get({
    profile: 'messagehook',
    attribute: 'onmessage',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();
    updateMessage(json);
  }).catch(e => {
    closeLoading();
    showError('messagehook/message', e.errorCode, e.errorMessage);
  });
}

/**
 * イベント登録
 */
function doGetMessageRegister(serviceId) {
  if (MESSAGEHOOK_REGISTERD) {
    return;
  }
  MESSAGEHOOK_MESSAGES = [];
  sdk.addEventListener({
    profile: 'messagehook',
    attribute: 'onmessage',
    params: {
      serviceId: serviceId
    }
  }, message => {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }
    let json = JSON.parse(message);
    updateMessage(json);
  }).then(json => {
    MESSAGEHOOK_REGISTERD = true;
    if (DEBUG) {
      console.log('Successed register Get Message Event.');
    }
  }).catch(e => {
    alert('errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
  });
}

/**
* イベント解除
 */
function doGetMessageUnregister(serviceId, sessionKey) {
  if (!MESSAGEHOOK_REGISTERD) {
    return;
  }
  sdk.removeEventListener({
    profile: 'messagehook',
    attribute: 'onmessage',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    MESSAGEHOOK_REGISTERD = false;
    if (DEBUG) {
      console.log('Successed unregister Get Message Event.');
    }
  }).catch(e => {
    alert(e.errorMessage);
  });
}


/**
* メッセージの更新.
**/
function updateMessage(json) {
    MESSAGEHOOK_MESSAGES.unshift(json.message);
    if (MESSAGEHOOK_MESSAGES.length > 10) {
      MESSAGEHOOK_MESSAGES.pop();
    }
    let str = '';
    for (let i = 0; i < MESSAGEHOOK_MESSAGES.length; i++) {
      let msg = MESSAGEHOOK_MESSAGES[i];
      str += '<li>[' + msg.channelId + '] ' + msg.from + ": " + msg.text + '</li>';
    }
    reloadList(str);
}
