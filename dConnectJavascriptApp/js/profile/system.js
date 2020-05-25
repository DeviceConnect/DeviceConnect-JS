/**
 system.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Search profile.
 *
 * @param {String} serviceId サービスID
 * @param {String} deviceName デバイス名
 */
function searchSystem(serviceId, deviceName) {
  if (deviceName !== undefined) {
    // 第2引数が空でない場合、代入を行う。
    myDeviceName = deviceName;
  }

  if (DEBUG) {
    console.log(myDeviceName);
  }
  initAll();

  sdk.get({
    profile: 'serviceinformation',
    params: {
      serviceId: serviceId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response:', json);
    }

    let str = '';
    for (let i = 0; i < json.supports.length; i++) {
      str += '<li><a href="javascript:searchProfile(\'' + serviceId + '\', ';
      str += '\'' + json.supports[i] + '\');" ';
      if (json.supports[i] == 'authorization' ||
          json.supports[i] == 'servicediscovery' ||
          json.supports[i] == 'system') {
        str += ' class="ui-disabled" ';
      }
      str += 'value="' + json.supports[i] + '">';
      str += json.supports[i] + '</a></li>';
    }

    setTitle('Profile List');
    reloadList(str);
  }).catch(e => {
    showError('GET /serviceinformation', e.errorCode, e.errorMessage);
  });
}

/**
 * デバイスプラグインの確認をする。
 */
function checkDevicePlugins() {
  initAll();
  closeLoading();
  showLoading();

  sdk.getSystemInfo()
  .then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    let str = '';
    for (let i = 0; i < json.plugins.length; i++) {
      str += '<li><a href="javascript:launchDevicePlugin(\'' +
              json.plugins[i].id + '\');" value="' +
              json.plugins[i].name + '" >' +
              json.plugins[i].name + '<br> <span style="font-size:12px; margin-left:12px;"> Version: ' + json.plugins[i].version +  '</span></a></li>';
    }

    let listHtml = document.getElementById('listSetting');
    listHtml.innerHTML = str;
    $('ul.listSetting').listview('refresh');
  }).catch(e => {
    closeLoading();
    alert('Failed to get system info.');
  });
}

/**
 * デバイスプラグインの設定画面を起動する。
 * @param {String} pluginId プラグインのID
 */
function launchDevicePlugin(pluginId) {
  sdk.put({
    profile: 'system',
    interface: 'device',
    attribute: 'wakeup',
    params: {
      pluginId: pluginId
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    alert('Failed to show the settings window.');
  });
}
