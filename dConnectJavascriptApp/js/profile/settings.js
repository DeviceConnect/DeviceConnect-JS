/**
 settings.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 

var VOLUME_TYPE_ALERM = 1;
var VOLUME_TYPE_CALL = 2;
var VOLUME_TYPE_RINGTONE = 3;
var VOLUME_TYPE_MAIL = 4;
var VOLUME_TYPE_MEDIA_PLAYER = 5;
var VOLUME_TYPE_OTHER = 6;
var process_count = 0;
var finish_count = 3;

/** 
 * Setting menu
 *
 * @param {String}deviceId デバイスID
 */
function showSetting(deviceId) {

    initAll();
    
    setTitle("Settings Profile");
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top','doSettingBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";
    
	
	if(myDeviceName.indexOf("Pebble") != -1){
		str += '<center>Date</center><br>';
    	str += makeInputText("DeviceTime", "deviceDate", "deviceDate");
    	str += '<input name="newDate" id="newDate" type="text" data-role="datebox" data-options=\'{"mode":"datebox"}\' />'
		str += '<input name="newTime" id="newTime" type="text" data-role="datebox" data-options=\'{"mode":"timebox"}\' />';	
		str += '<input type="button" onclick="doSetDate(\'' + deviceId + '\',1);" id="setDate" value="Set date"  />';
	} else 	if(myDeviceName.indexOf("Sony Camera") != -1){
		str += '<center>Date</center><br>';
    	str += makeInputText("DeviceTime", "deviceDate", "deviceDate");
    	str += '<input name="newDate" id="newDate" type="text" data-role="datebox" data-options=\'{"mode":"datebox"}\' />'
		str += '<input name="newTime" id="newTime" type="text" data-role="datebox" data-options=\'{"mode":"timebox"}\' />';	
		str += '<input type="button" onclick="doSetDate(\'' + deviceId + '\',1);" id="setDate" value="Set date"  />';
	} else {
		str += '<center>Date</center><br>';
    	str += makeInputText("DeviceTime", "deviceDate", "deviceDate");
    	str += '<label for="slider-0">Volume Alerm:</label>';
    	str += '<input type="range" name="slider" id="volumeAlerm" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + deviceId + '\',1);" id="volumeSetAlerm" value="Set volume of Alerm"  />';

    	str += '<label for="slider-0">Volume Call:</label>';
    	str += '<input type="range" name="slider" id="volumeCall" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + deviceId + '\',2);" id="volumeSeCall" value="Set volume of Call"  />';

    	str += '<label for="slider-0">Volume Ringtone:</label>';
    	str += '<input type="range" name="slider" id="volumeRingtone" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + deviceId + '\',3);" id="volumeSetRingtone" value="Set volume of Ringtone"  />';

    	//str += '<label for="slider-0">Volume Mail:</label>';
    	//str += '<input type="range" name="slider" id="volumeMail" value="25" min="0" max="100"  />';
    	//str += '<input type="button" onclick="doChangeSoundLevel(\'' + deviceId + '\',4);" id="volumeSetMail" value="Set volume of Mail"  />';

    	str += '<label for="slider-0">Volume Media Player:</label>';
    	str += '<input type="range" name="slider" id="volumeMediaplayer" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + deviceId + '\',5);" id="volumeSetMediaplayer" value="Set volume of Media Player"  />';

    	str += '<label for="slider-0">Light:</label>';
    	str += '<input type="range" name="slider" id="light" value="25" min="0" max="100"  />';
    	str += '<input type="button" id="lightSet" onclick="doSetLight(\'' + deviceId + '\');" value="Set light"  />';

   	 	str += '<label for="slider-0">Sleep:</label>';
    	str += '<input type="text" value="" id="sleep" name="sleep" >';
    	str += '<input type="button" id="sleepSet" onclick="doSetSleep(\'' + deviceId + '\');" value="Set sleep"  />';
	}

   	reloadContent(str);

    process_count = 0;
    showLoading();

	if(myDeviceName.indexOf("Pebble") != -1){
		doCheckDate(deviceId);
		finish_count = 1;
	} else if(myDeviceName.indexOf("Sony Camera") != -1){
		doCheckDate(deviceId);
		finish_count = 1;
	} else {
		doCheckDate(deviceId);
    	doCheckVolume(deviceId);
    	doCheckLight(deviceId);
    	doCheckSleep(deviceId);
    	finish_count = 4;
	}
    
}


/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doSettingBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/**
 * 時刻の設定
 *
 * @param {String}deviceId デバイスID
 */
function doSetDate(deviceId){
	var newDate = $('#newDate').val();
	var newTime = $('#newTime').val();
	
	var newDateStr = newDate + "T"+newTime+":00+0900";
	alert(newDateStr);
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("date");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("date",newDateStr);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    
        var json = JSON.parse(responseText);

        if (json.result == 0) {
        	alert("Success: set date");
        	doCheckDate(deviceId);
        } else {
			showError("PUT settings/date", json);
        }
        
    }, function(xhr, textStatus, errorThrown) {
        
    });
    
}

/** 
 * Get date from Setting profile.
 *
 * @param {String}deviceId デバイスID
 */
function doCheckDate(deviceId) {

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("date");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    
        var json = JSON.parse(responseText);

        if (json.result == 0) {
        	$('#deviceDate').val(json.date);
            
        } else {
           showError("GET setting/date", json);
        }
        process_count++;
        loadingCheck(process_count);
    }, function(xhr, textStatus, errorThrown) {
        
    });
}


/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doSettingBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/** 
 * Get volume from Setting profile.
 *
 * @param {String}deviceId デバイスID
 */
function doCheckVolume(deviceId) {

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("volume");
    builder.setInterface("sound");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
        if (json.result == 0) {
        	$('#volumeAlerm').val((json.volumes[0].alerm * 100));
            $('#volumeAlerm').slider('refresh');

            $('#volumeCall').val((json.volumes[1].call * 100));
            $('#volumeCall').slider('refresh');

            $('#volumeRingtone').val((json.volumes[2].ringtone * 100));
            $('#volumeRingtone').slider('refresh');

            $('#volumeMail').val((json.volumes[3].mail * 100));
            $('#volumeMail').slider('refresh');

            $('#volumeMediaplayer').val((json.volumes[4].mediaplayer * 100));
            $('#volumeMediaplayer').slider('refresh');
            
        } else {
            showError("GET setting/volume/sound", json);
        }
        process_count++;
        loadingCheck(process_count);
    }, function(xhr, textStatus, errorThrown) {
        
    });
}

/** 
 * Get display light value
 *
 * @param {String}deviceId デバイスID
 */
function doCheckLight(deviceId) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setInterface("display");
    builder.setAttribute("light"); 
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
		
        if (json.result == 0) {
        	$('#light').val((json.level * 100));
            $('#light').slider('refresh');
        } else {
           showError("GET setting/display/light", json);
        }
        process_count++;
        loadingCheck(process_count);
    }, function(xhr, textStatus, errorThrown) {
        
    });
}

/** 
 * Set display light value
 *
 * @param {String}deviceID デバイスID
 * @param {String}level 明るさレベル
 */
function doSetLight(deviceId) {
	var level = $('#light').val()/100;
	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setInterface("display");
    builder.setAttribute("light");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("level",level);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
		
        if (json.result == 0) {
        	alert("success");
        } else {
			showError("PUT settings/display/light", json);
        }
      
    }, function(xhr, textStatus, errorThrown) {
        
    });
}

/** 
 * Set sleep time
 *
 * @param {String}deviceID デバイスID
 */
function doSetSleep(deviceId) {
	var time = $('#sleep').val();

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setInterface("display");
    builder.setAttribute("sleep");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("time",time);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
		
        if (json.result == 0) {
        	alert("success");
        } else {
			showError("PUT settings/display/sleep", json);
        }
      
    }, function(xhr, textStatus, errorThrown) {
        
    });
}



/** 
 * Get sleep time
 *
 * @param {String}deviceID デバイスID
 */
function doCheckSleep(deviceId) {

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
   	builder.setInterface("display");
    builder.setAttribute("sleep");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
    
    	if(DEBUG) console.log("Response:"+responseText)
    	
        var json = JSON.parse(responseText);
		
        if (json.result == 0) {
        	$('#sleep').val(json.time);
        } else {
			showError("GET settings/volume/sound", json);
        }
        process_count++;
        loadingCheck(process_count);
    }, function(xhr, textStatus, errorThrown) {

    });
}


/**
 * Loading Dialog
 *
 * @param {String}count 処理数
 */
function loadingCheck(count) {
    if (count >= finish_count) {
       closeLoading();
    }
}

/**
 * Soundのレベルを変更.
 *
 * @param {String}deviceId デバイスID
 * @param {String}type 音のタイプ
 */
function doChangeSoundLevel(deviceId,type){

	if(type == VOLUME_TYPE_ALERM){
		var level = $('#volumeAlerm').val()/100;
		doSetSoundLevel(type, deviceId, level);
	} else if(type == VOLUME_TYPE_CALL){
		var level = $('#volumeCall').val()/100;
		doSetSoundLevel(type, deviceId, level);
	} else if(type == VOLUME_TYPE_RINGTONE){
		var level = $('#volumeRingtone').val()/100;
		doSetSoundLevel(type, deviceId, level);
	} else if(type == VOLUME_TYPE_MAIL){
		var level = $('#volumeMail').val()/100;
		doSetSoundLevel(type, deviceId, level);
	} else if(type == VOLUME_TYPE_MEDIA_PLAYER){
		var level = $('#volumeMediaplayer').val()/100;
		doSetSoundLevel(type, deviceId, level);
	}
	
	
}

/**
 * 各種音部分の設定
 *
 * @param {String}type 音源のタイプ
 * @param {String}deviceId デバイスID
 * @param {String}level 音のレベル
 */
 function doSetSoundLevel(type, deviceId, level) {
    var builder = new dConnect.URIBuilder();
    	builder.setProfile("settings");
    	builder.setAttribute("volume");
    	builder.setInterface("sound");
    	builder.setDeviceId(deviceId);
    	builder.setAccessToken(accessToken);
		builder.addParameter("kind", type);
		builder.addParameter("level", level);
    	var uri = builder.build();
    
    	if(DEBUG) console.log("Uri:"+uri)
    	
		dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
		
			if(DEBUG) console.log("Response:"+responseText)
			
    	    var json = JSON.parse(responseText);

        	if (json.result == 0) {
        		alert("success");
    		} else {
    			showError("PUT settings/volume/sound", json);
    		}

	    });
	    
}

