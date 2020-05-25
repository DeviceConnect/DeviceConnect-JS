/**
 sevicediscovery.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function searchDeviceFromProfile(profileName) {
  initAll();
  closeLoading();
  showLoading();

  sdk.discoverDevicesFromProfile(profileName)
    .then(obj => {
      closeLoading();

      if(DEBUG) console.log("response: ", obj);

      cachedServices = obj.services;
      showServices(cachedServices);

      registerStatusChangeEvent();
    }).catch(e => {
      closeLoading();
      alert('Error: code=' + e.errorCode + ', messsage=\"' + e.errorMessage + '\"');
    });
}

function searchDevice2() {
  initAll();
  closeLoading();
  showLoading();

  sdk.discoverDevices()
    .then(obj => {
      closeLoading();
      if(DEBUG) console.log("response: ", obj);

      cachedServices = obj.services;
      showServices(cachedServices);

      registerStatusChangeEvent();
      openWebsocketIfNeeded();

    }).catch(e => {
      closeLoading();
      alert('Error: code=' + e.errorCode + ', messsage=\"' + e.errorMessage + '\"');
    });
}

/**
 * デバイスの検索
 */
function searchDevice() {
  let profileName = $("select[name='entry_profile']").val();
  if (profileName === '') {
    searchDevice2();
  } else {
    searchDeviceFromProfile(profileName);
  }
}

function registerStatusChangeEvent() {
  if (registerStatusChangeEvent.isRegistered === true) {
    return;
  }
  sdk.addEventListener({
    profile: 'servicediscovery',
    attribute: 'onservicechange',
  }, message => {
      console.log("message:" + message);
      message = JSON.parse(message);
      console.log('Updated service list: ', message);
      updateService(message.networkService);
  }).then(json => {
    console.info('Registered Service Change Event.');
    registerStatusChangeEvent.isRegistered = true;
  }).catch(e => {
    console.error('Failed to register Service Change Event: ' + e.errorMessage);
  });
}

function showServices(services) {
    let str = "";
    for (let i = 0; i < services.length; i++) {
        let mark = services[i].online === true ? '+' : '-';
        str += '<li><a href="javascript:searchSystem(\'' + services[i].id + '\',\'' + services[i].name + '\');" value="' + services[i].name + '">' + mark + ' ' + services[i].name + '</a></li>';
    }
    deleteMode = false;
    setTitle("Device List", "black");
    reloadList(str);
}

function updateService(service) {
  var i, idx = -1;
  for (i = 0; i < cachedServices.length; i++) {
    if (cachedServices[i].id === service.id) {
      idx = i;
      break;
    }
  }
  if (service.state === true) {
    if (idx !== -1) {
      cachedServices[idx] = service;
    } else {
      cachedServices.push(service);
    }
  } else {
    if (idx !== -1) {
      cachedServices.splice(idx, 1);
    }
  }
  showServices(cachedServices);
}
