/**
 tv.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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
 * TVの電源を取得する
 * @param {String} serviceId サービスID
 */
function getTVPowerStatus(serviceId) {
  initAll();
  setTitle('TV Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);


  closeLoading();
  showLoading();

  sdk.get({
    profile: 'tv',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    str += '<br>';
    str += '電源: ' + json.powerstatus;

    tvRemoconUI(str, serviceId);
  }).catch(e => {
    closeLoading();
    let str = '';
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
  let params = {
    profile: 'tv',
    params: {
      serviceId: serviceId
    }
  };
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getTVPowerStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('PowerOnOff TV', errorCode, errorMessage);
    getTVPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    sdk.put(params).then(json => { successCallback(json);}).catch(e => {errorCallback(e.errorCode, e.errorMessage);});
  } else {
    sdk.delete(params).then(json => { successCallback(json);}).catch(e => {errorCallback(e.errorCode, e.errorMessage);});
  }

}

/**
 * チャンネル変更
 * @param {String} serviceId サービスId
 * @param {String} channel チャンネル番号
 * @param {String} nextPrevious 次か前か
 */
function doTVChangeChannel(serviceId, channel, nextPrevious) {

  let params = {
    profile: 'tv',
    attribute: 'channel',
    params: {
      serviceId: serviceId
    }
  };
  if (channel !== null) {
    params.params['tuning'] = channel;
  } else if (nextPrevious !== null) {
    params.params['control'] = nextPrevious;
  }
  closeLoading();
  showLoading();
  sdk.put(params).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }).catch(e => {
    closeLoading();
    showError('Change Channel TV', e.errorCode, e.errorMessage);
  });
}


/**
 * 音量変更
 * @param {String} serviceId サービスID
 * @param {String} isUpDown あげるか下げるか
 */
function doTVChangeVolume(serviceId, isUpDown) {
  closeLoading();
  showLoading();
  sdk.put({
    profile: 'tv',
    attribute: 'volume',
    params: {
      serviceId: serviceId,
      control: isUpDown
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }).catch(e => {
    closeLoading();
    showError('Change Volume TV', e.errorCode, e.errorMessage);
  });
}

/**
 * 電波変更
 * @param {String} serviceId サービスID
 * @param {String} isWave どの波にするか
 */
function doTVChangeBroadcastwave(serviceId, isWave) {
  closeLoading();
  showLoading();
  sdk.put({
    profile: 'tv',
    attribute: 'broadcastwave',
    params: {
      serviceId: serviceId,
      select: isWave
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
  }).catch(e => {
    closeLoading();
    showError('Change Broadcastwave TV', e.errorCode, e.errorMessage);
  });
}

/**
 * ミュートOnOff
 * @param {String} serviceId サービスID
 * @param {String} isSwitch On or Off
 */
function doTVChangeMuteOnOff(serviceId, isSwitch) {

  let params = {
    profile: 'tv',
    attribute: 'mute',
    params: {
      serviceId: serviceId,
      select: isWave
    }
  };
  closeLoading();
  showLoading();

  let successCallback = function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    getTVPowerStatus(serviceId);
  };

  let errorCallback = function(errorCode, errorMessage) {
    closeLoading();
    showError('MuteOnOff TV', errorCode, errorMessage);
    getTVPowerStatus(serviceId);
  };

  if (isSwitch == 'ON') {
    sdk.put(params).then(json => { successCallback(json);}).catch(e => {errorCallback(e.errorCode, e.errorMessage);});
  } else {
    sdk.delete(params).then(json => { successCallback(json);}).catch(e => {errorCallback(e.errorCode, e.errorMessage);});
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

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
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
