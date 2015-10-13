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

    setTitle("Device List", "black");
    deleteMode = false;
    document.getElementById('list').innerHTML = str;
    $("ul.list").listview("refresh");
  }, function(errorCode, errorMessage) {
      alert("Error: code=" + errorCode + ", messsage=\"" + errorMessage + "\"");
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

    setTitle("Device List", "black");
    deleteMode = false;

    var listHtml = document.getElementById('list');
    listHtml.innerHTML = str;
    $("ul.list").listview("refresh");
  }, function(errorCode, errorMessage) {
      alert("Error: code=" + errorCode + ", messsage=\"" + errorMessage + "\"");
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
