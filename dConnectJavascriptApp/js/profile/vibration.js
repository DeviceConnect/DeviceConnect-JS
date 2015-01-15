/**
 vibration.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** 
 * Vibration Menu
 */
function showVibration(deviceId) {

    initAll();
    
    setTitle("Vibration Profile(Vibrate)");

	var btnStr = "";    
    btnStr += getBackButton('Device Top','doVibrationBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
  	
  	var str = "";
    str += '<form name="vibrationForm">';
    str += '<SELECT name="pattern" id="pattern">';
    str += '<OPTION value="null_value">指定なし</OPTION>';
    str += '<OPTION value="100,100,100,100">100,100,100,100</OPTION>';
    str += '<OPTION value="1000">1000</OPTION>';
    str += '<OPTION value="2000,1000,2000">2000,1000,2000</OPTION>';
    str += '<OPTION value="100,5000,100,5000">100,5000,100,5000</OPTION>';
    str += '</SELECT>';
    str += '</form>';
    str += '<input data-role="button" type="button" name="button" id="button" value="Vibrate" onclick="javascript:doVibrateVibration(\'' + deviceId + '\');"/><br>';

    str += '<input data-role="button" type="button" name="button" id="button" value="Stop Vibrate" onclick="javascript:doStopVibration(\'' + deviceId + '\');"/><br>';

    reloadContent(str);
}


/**
 * Back Button
 *
 * @param deviceId デバイスID
 * @param sessionKey セッションキー
 */
function doVibrationBack(deviceId, sessionKey){

    searchSystem(deviceId);
}

/** 
 * Vibrationを実行
 *
 * @param String}deviceId デバイスID
 */
function doVibrateVibration(deviceId) {
	
	var patternValue = $('#pattern').val();
    if (patternValue == "null_value") {
        patternValue = null;
    }

	var builder = new dConnect.URIBuilder();
    builder.setProfile("vibration");
    builder.setAttribute("vibrate");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    if (patternValue) builder.addParameter("pattern",patternValue);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
    	
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
		
        if (json.result == 0) {
        	
        } else {
			showError("PUT vibration/vibrate", json);
        }
        
    }, function(xhr, textStatus, errorThrown) {
        
    });
}


/** 
 * Vibrationをキャンセル
 *
 * @param {String}deviceId デバイスID
 */
function doStopVibration(deviceId) {
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("vibration");
    builder.setAttribute("vibrate");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('DELETE', uri, null, null, function(status, headerMap, responseText) {
    	
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
		
        if (json.result == 0) {
        	
        } else {
           showError("DELETE vibration/vibrate", json);
        }
        
    }, function(xhr, textStatus, errorThrown) {
        
    });
}