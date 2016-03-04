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

    var str = "";
    for (var i = 0; i < obj.services.length; i++) {
        str += '<li><a href="javascript:searchSystem(\'' + obj.services[i].id + '\',\'' + obj.services[i].name + '\');" value="' + obj.services[i].name + '">' + obj.services[i].name + '</a></li>';
    }

    deleteMode = false;

    setTitle("Device List", "black");
    reloadList(str);
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

    var str = "";
    for (var i = 0; i < obj.services.length; i++) {
        str += '<li><a href="javascript:searchSystem(\'' + obj.services[i].id + '\',\'' + obj.services[i].name + '\');" value="' + obj.services[i].name + '">' + obj.services[i].name + '</a></li>';
    }

    deleteMode = false;

    setTitle("Device List", "black");
    reloadList(str);
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
