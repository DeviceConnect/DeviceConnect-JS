/**
 sevicediscovery.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function searchDeviceFromProfile(profileName) {
  initAll();
  closeLoading();
  showLoading();

  dConnect.setHost(ip);
  dConnect.discoverDevicesFromProfile(profileName, accessToken, function(obj) {
    closeLoading();

    if(DEBUG) console.log("response: ", obj);

    cachedServices = obj.services;
    showServices(cachedServices);

    registerStatusChangeEvent();
  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      authorization(searchDevice);
    } else {
      alert('Error: code=' + errorCode + ', messsage=\"' + errorMessage + '\"');
    }
  });
}

function searchDevice2() {
  initAll();
  closeLoading();
  showLoading();

  dConnect.setHost(ip);
  dConnect.discoverDevices(accessToken, function(obj){
    closeLoading();
    if(DEBUG) console.log("response: ", obj);

    cachedServices = obj.services;
    showServices(cachedServices);

    registerStatusChangeEvent();
  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      showLoading('Awaiting Your Approval...');
      authorization(function() {
        searchDevice();
      }, function() {
        closeLoading();
      });
    } else {
      alert('Error: code=' + errorCode + ', messsage=\"' + errorMessage + '\"');
    }
  });
}

/**
 * デバイスの検索
 */
function searchDevice() {
  var profileName = $("select[name='entry_profile']").val();
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
  var uri = new dConnect.URIBuilder();
  uri.setProfile('servicediscovery');
  uri.setAttribute('onservicechange');
  uri.setAccessToken(accessToken);
  dConnect.addEventListener(uri.build(), function(message) {
    message = JSON.parse(message);
    console.log('Updated service list: ', message);
    updateService(message.networkService);
  }, function() {
    registerStatusChangeEvent.isRegistered = true;
    console.info('Registered Service Change Event.');
  }, function(errorConde, errorMessage) {
    console.error('Failed to register Service Change Event: ' + errorMessage);
  });
}

function showServices(services) {
    var str = "";
    for (var i = 0; i < services.length; i++) {
        var mark = services[i].online === true ? '+' : '-';
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
