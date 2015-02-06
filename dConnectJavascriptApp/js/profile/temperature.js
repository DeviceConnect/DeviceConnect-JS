/**
 temperature.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * Temperature Menu
 *
 * @param {String}serviceId サービスID
 */
function showTemperature(serviceId) {
    
    initAll();
    
    setTitle("Temperature");
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top', 'doTemperatureBack', serviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("temperature");
    builder.setServiceId(serviceId);
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
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doTemperatureBack(serviceId, sessionKey){
	searchDevice(serviceId);
}


