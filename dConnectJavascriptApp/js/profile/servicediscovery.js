/**
 sevicediscovery.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * デバイスの検索
 */
function searchDevice() {
  initAll();
  closeLoading();
  showLoading();

  dConnect.setHost(ip);
  dConnect.discoverDevices(accessToken, function(obj) {
    var str = '';
    if (DEBUG) {
      console.log('response: ', obj);
    }

    for (var i = 0; i < obj.services.length; i++) {
      str += '<li><a href="javascript:searchSystem(\'' +
              obj.services[i].id + '\',\'' + obj.services[i].name +
              '\');" value="' + obj.services[i].name + '">' +
              obj.services[i].name + '</a></li>';
    }

    setTitle('Device List', 'black');
    deleteMode = false;

    var listHtml = document.getElementById('list');
    listHtml.innerHTML = str;
    $('ul.list').listview('refresh');
    closeLoading();
  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      authorization(searchDevice);
    } else {
      alert('Error: code=' + errorCode + ', messsage=\"' + errorMessage + '\"');
    }
  });
}
