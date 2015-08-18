/**
 tv.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Show TV Menu
 * TODO tvIdの設定
 *
 * @param {String} serviceId サービスID
 */
function showTV(serviceId) {
  getTVPowerStatus(serviceId);
}



/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doTVBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}


/**
 * TVの電源を取得する
 * @param {String} serviceId サービスID
 */
function getTVPowerStatus(serviceId) {
  initAll();
  setTitle('TV Profile');

  var btnStr = getBackButton('Device Top', 'doTVBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    var str = '';
    str += '<br>';
    str += '電源: ' + json.powerstatus;

    tvRemoconUI(str, serviceId);
  }, function(errorCode, errorMessage) {
    closeLoading();
    var str = '';
    str += '<br>';
    str += '電源: OFF';
    tvRemoconUI(str, serviceId);
  });
}

/**
 * 電源OnOffする
 * @param {String} serviceId サービスID
 * @param {String} isSwitch On Offするか
 */
function doTVOnOff(serviceId, isSwitch) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  var successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getTVPowerStatus(serviceId);
  };

  var errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('PowerOnOff TV', errorCode, errorMessage);
    getTVPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    dConnect.put(uri, null, null, successCallback, errorCallback);
  } else {
    dConnect.delete(uri, null, successCallback, errorCallback);
  }

}

/**
 * チャンネル変更
 * @param {String} serviceId サービスId
 * @param {String} channel チャンネル番号
 * @param {String} nextPrevious 次か前か
 */
function doTVChangeChannel(serviceId, channel, nextPrevious) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('channel');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  if (channel !== null) {
    builder.addParameter('tuning', channel);
  } else if (nextPrevious !== null) {
    builder.addParameter('control', nextPrevious);
  }

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();
  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('Change Channel TV', errorCode, errorMessage);
  });
}


/**
 * 音量変更
 * @param {String} serviceId サービスID
 * @param {String} isUpDown あげるか下げるか
 */
function doTVChangeVolume(serviceId, isUpDown) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('volume');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('control', isUpDown);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();
  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('Change Volume TV', errorCode, errorMessage);
  });
}

/**
 * 電波変更
 * @param {String} serviceId サービスID
 * @param {String} isWave どの波にするか
 */
function doTVChangeBroadcastwave(serviceId, isWave) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('broadcastwave');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  builder.addParameter('select', isWave);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();
  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('Change Broadcastwave TV', errorCode, errorMessage);
  });
}

/**
 * ミュートOnOff
 * @param {String} serviceId サービスID
 * @param {String} isSwitch On or Off
 */
function doTVChangeMuteOnOff(serviceId, isSwitch) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('tv');
  builder.setAttribute('mute')
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);

  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  var successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getTVPowerStatus(serviceId);
  };

  var errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('MuteOnOff TV', errorCode, errorMessage);
    getTVPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    dConnect.put(uri, null, null, successCallback, errorCallback);
  } else {
    dConnect.delete(uri, null, successCallback, errorCallback);
  }

}


/*
  TV Remocon.
  @param {String} s html
  @param {String} serviceId サービスID
 */
function tvRemoconUI(s, serviceId) {
  initAll();
  setTitle('TV Profile');

  var btnStr = getBackButton('Device Top', 'doTVBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += s;
  str += '<div>';
  str += '<label for="tvOnOffStatus">電源:';
  str += '<input type="button" onclick="doTVOnOff(\'' +
  serviceId + '\', \'ON\');" value="ON" name="ON" >';
  str += '<input type="button" onclick="doTVOnOff(\'' +
  serviceId + '\', \'OFF\');" value="OFF" name="OFF" >';
  str += '</div></label>';

  str += '<div class="ui-grid-b">'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;" ' +
  'class="ui-block-a ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 1, null);">1</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-b ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 2, null);">2</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-c ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 3, null);">3</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-a ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 4, null);">4</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;" ' +
  ' class="ui-block-b ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 5, null);">5</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-c ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 6, null);">6</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-a ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 7, null);">7</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;" ' +
  'class="ui-block-b ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 8, null);">8</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-c ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 9, null);">9</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-a ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 10, null);">10</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;" ' +
  'class="ui-block-b ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 11, null);">11</div>'
  str += '<div style="height: 60px;padding-top: 20px;text-align:' +
  ' center;border: 1px solid #ccc;background-color: #ddd;"' +
  ' class="ui-block-c ui-block-style" onclick="doTVChangeChannel(\'' +
  serviceId + '\', 12, null);">12</div>'
  str += '</div>'

  str += '<label for="tvChannel">チャンネル:';
  str += '<input type="button" onclick="doTVChangeChannel(\'' +
  serviceId + '\',null, \'next\');" value="次" name="次" >';
  str += '<input type="button" onclick="doTVChangeChannel(\'' +
  serviceId + '\',null, \'previous\');" value="前" name="前" >';
  str += '</label>';
  str += '<label for="tvVolume">音量:';
  str += '<input type="button" onclick="doTVChangeVolume(\'' +
  serviceId + '\',\'up\');" value="Up" name="Up" >';
  str += '<input type="button" onclick="doTVChangeVolume(\'' +
  serviceId + '\',\'down\');" value="Down" name="Down" >';
  str += '</label>';
  str += '<label for="tvBroadcastwave">モード:';
  str += '<input type="button" onclick="doTVChangeBroadcastwave(\'' +
  serviceId + '\',\'DTV\');" value="地デジ" name="DTV" >';
  str += '<input type="button" onclick="doTVChangeBroadcastwave(\'' +
  serviceId + '\',\'BS\');" value="BS" name="BS" >';
  str += '<input type="button" onclick="doTVChangeBroadcastwave(\'' +
  serviceId + '\',\'CS\');" value="CS" name="CS" >';
  str += '</label>';
  str += '<label for="tvMute">ミュート:';
  str += '<input type="button" onclick="doTVChangeMuteOnOff(\'' +
  serviceId + '\', \'ON\');" value="ON" name="ON" >';
  str += '<input type="button" onclick="doTVChangeMuteOnOff(\'' +
  serviceId + '\', \'OFF\');" value="OFF" name="OFF" >';
  str += '</label>';

  str += '</center>';

  reloadList(str);
}