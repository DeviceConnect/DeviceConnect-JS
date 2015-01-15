/**
 temperature.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * Temperature Menu
 *
 * @param {String}deviceId デバイスID
 */
function showTemperature(deviceId) {
    
    initAll();
    
    setTitle("Temperature");
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top', 'doTemperatureBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("temperature");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
	closeLoading();
    showLoading();
	
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);

        if (json.result == 0) {
        	closeLoading();
        	
        	var temp = json.temperature * 100;
			temp = Math.round(temp) / 100;
  			
  			var str = "";
  			str += "<center><h1>" + temp + "<h1></center>";
  			reloadContent(str); 
  
        } else {
			closeLoading();
			
			showError("GET temperature", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doTemperatureBack(deviceId, sessionKey){
	searchDevice(deviceId);
}


