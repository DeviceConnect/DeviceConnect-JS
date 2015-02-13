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
 * @param {String}serviceId サービスID
 */
function showSetting(serviceId) {

    initAll();
    
    setTitle("Settings Profile");
	
	var btnStr = "";    
    btnStr += getBackButton('Device Top','doSettingBack', serviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";
    
	
	if(myDeviceName.indexOf("Pebble") != -1){
		str += '<center>Date</center><br>';
    	str += makeInputText("DeviceTime", "deviceDate", "deviceDate");
    	str += '<input name="newDate" id="newDate" type="text" data-role="datebox" data-options=\'{"mode":"datebox"}\' />'
		str += '<input name="newTime" id="newTime" type="text" data-role="datebox" data-options=\'{"mode":"timebox"}\' />';	
		str += '<input type="button" onclick="doSetDate(\'' + serviceId + '\',1);" id="setDate" value="Set date"  />';
	} else 	if(myDeviceName.indexOf("Sony Camera") != -1){
		str += '<center>Date</center><br>';
    	str += makeInputText("DeviceTime", "deviceDate", "deviceDate");
    	str += '<input name="newDate" id="newDate" type="text" data-role="datebox" data-options=\'{"mode":"datebox"}\' />'
		str += '<input name="newTime" id="newTime" type="text" data-role="datebox" data-options=\'{"mode":"timebox"}\' />';	
		str += '<input type="button" onclick="doSetDate(\'' + serviceId + '\',1);" id="setDate" value="Set date"  />';
	} else {
		str += '<center>Date</center><br>';
    	str += makeInputText("DeviceTime", "deviceDate", "deviceDate");
    	str += '<label for="slider-0">Volume Alerm:</label>';
    	str += '<input type="range" name="slider" id="volumeAlerm" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + serviceId + '\',1);" id="volumeSetAlerm" value="Set volume of Alerm"  />';

    	str += '<label for="slider-0">Volume Call:</label>';
    	str += '<input type="range" name="slider" id="volumeCall" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + serviceId + '\',2);" id="volumeSeCall" value="Set volume of Call"  />';

    	str += '<label for="slider-0">Volume Ringtone:</label>';
    	str += '<input type="range" name="slider" id="volumeRingtone" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + serviceId + '\',3);" id="volumeSetRingtone" value="Set volume of Ringtone"  />';

    	//str += '<label for="slider-0">Volume Mail:</label>';
    	//str += '<input type="range" name="slider" id="volumeMail" value="25" min="0" max="100"  />';
    	//str += '<input type="button" onclick="doChangeSoundLevel(\'' + serviceId + '\',4);" id="volumeSetMail" value="Set volume of Mail"  />';

    	str += '<label for="slider-0">Volume Media Player:</label>';
    	str += '<input type="range" name="slider" id="volumeMediaplayer" value="25" min="0" max="100"  />';
    	str += '<input type="button" onclick="doChangeSoundLevel(\'' + serviceId + '\',5);" id="volumeSetMediaplayer" value="Set volume of Media Player"  />';

    	str += '<label for="slider-0">Light:</label>';
    	str += '<input type="range" name="slider" id="light" value="25" min="0" max="100"  />';
    	str += '<input type="button" id="lightSet" onclick="doSetLight(\'' + serviceId + '\');" value="Set light"  />';

   	 	str += '<label for="slider-0">Sleep:</label>';
    	str += '<input type="text" value="" id="sleep" name="sleep" >';
    	str += '<input type="button" id="sleepSet" onclick="doSetSleep(\'' + serviceId + '\');" value="Set sleep"  />';
	}

   	reloadContent(str);

    process_count = 0;
    showLoading();

	if(myDeviceName.indexOf("Pebble") != -1){
		doCheckDate(serviceId);
		finish_count = 1;
	} else if(myDeviceName.indexOf("Sony Camera") != -1){
		doCheckDate(serviceId);
		finish_count = 1;
	} else {
		doCheckDate(serviceId);
    	doCheckVolume(serviceId);
    	doCheckLight(serviceId);
    	doCheckSleep(serviceId);
    	finish_count = 4;
	}
    
}


/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doSettingBack(serviceId, sessionKey){
	searchSystem(serviceId);
}

/**
 * 時刻の設定
 *
 * @param {String}serviceId サービスID
 */
function doSetDate(serviceId){
	var newDate = $('#newDate').val();
	var newTime = $('#newTime').val();
	
	var newDateStr = newDate + "T"+newTime+":00+0900";
	alert(newDateStr);
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("date");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("date",newDateStr);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        
        alert("Success: set date");
        doCheckDate(serviceId);
    }, function(errorCode, errorMessage) {
        showError("PUT settings/date", errorCode, errorMessage);
    });
    
}

/** 
 * Get date from Setting profile.
 *
 * @param {String}serviceId サービスID
 */
function doCheckDate(serviceId) {

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("date");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    var oncomplete = function() {
        process_count++;
        loadingCheck(process_count);
    };
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    
        $('#deviceDate').val(json.date);
        oncomplete();
    }, function(errorCode, errorMessage) {
        showError("GET setting/date", errorCode, errorMessage);
        oncomplete();
    });
}


/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doSettingBack(serviceId, sessionKey){
	searchSystem(serviceId);
}

/** 
 * Get volume from Setting profile.
 *
 * @param {String}serviceId サービスID
 */
function doCheckVolume(serviceId) {

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("volume");
    builder.setInterface("sound");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    var oncomplete = function() {
        process_count++;
        loadingCheck(process_count);
    };
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);

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

        oncomplete();
    }, function(errorCode, errorMessage) {
        showError("GET setting/volume/sound", errorCode, errorMessage);
        oncomplete();
    });
}

/** 
 * Get display light value
 *
 * @param {String}serviceId サービスID
 */
function doCheckLight(serviceId) {
	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setInterface("display");
    builder.setAttribute("light"); 
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    var oncomplete = function() {
        process_count++;
        loadingCheck(process_count);
    };
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);

        $('#light').val((json.level * 100));
        $('#light').slider('refresh');
        oncomplete();
    }, function(errorCode, errorMessage) {
        showError("GET setting/display/light", errorCode, errorMessage);
        oncomplete();
    });
}

/** 
 * Set display light value
 *
 * @param {String}deviceID サービスID
 * @param {String}level 明るさレベル
 */
function doSetLight(serviceId) {
	var level = $('#light').val()/100;
	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setInterface("display");
    builder.setAttribute("light");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("level",level);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        alert("success");
    }, function(errorCode, errorMessage) {
        showError("PUT settings/display/light", errorCode, errorMessage);
    });
}

/** 
 * Set sleep time
 *
 * @param {String}deviceID サービスID
 */
function doSetSleep(serviceId) {
	var time = $('#sleep').val();

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setInterface("display");
    builder.setAttribute("sleep");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("time",time);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        alert("success");
    }, function(errorCode, errorMessage) {
        showError("PUT settings/display/sleep", errorCode, errorMessage);
    });
}

/** 
 * Get sleep time
 *
 * @param {String}deviceID サービスID
 */
function doCheckSleep(serviceId) {

	var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
   	builder.setInterface("display");
    builder.setAttribute("sleep");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    if(DEBUG) console.log("Uri:"+uri)
    
    var oncomplete = function() {
        process_count++;
        loadingCheck(process_count);
    };
    
    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        $('#sleep').val(json.time);
        oncomplete();
    }, function(errorCode, errorMessage) {
        showError("GET settings/volume/sound", errorCode, errorMessage);
        oncomplete();
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
 * @param {String}serviceId サービスID
 * @param {String}type 音のタイプ
 */
function doChangeSoundLevel(serviceId,type){

	if(type == VOLUME_TYPE_ALERM){
		var level = $('#volumeAlerm').val()/100;
		doSetSoundLevel(type, serviceId, level);
	} else if(type == VOLUME_TYPE_CALL){
		var level = $('#volumeCall').val()/100;
		doSetSoundLevel(type, serviceId, level);
	} else if(type == VOLUME_TYPE_RINGTONE){
		var level = $('#volumeRingtone').val()/100;
		doSetSoundLevel(type, serviceId, level);
	} else if(type == VOLUME_TYPE_MAIL){
		var level = $('#volumeMail').val()/100;
		doSetSoundLevel(type, serviceId, level);
	} else if(type == VOLUME_TYPE_MEDIA_PLAYER){
		var level = $('#volumeMediaplayer').val()/100;
		doSetSoundLevel(type, serviceId, level);
	}
	
	
}

/**
 * 各種音部分の設定
 *
 * @param {String}type 音源のタイプ
 * @param {String}serviceId サービスID
 * @param {String}level 音のレベル
 */
 function doSetSoundLevel(type, serviceId, level) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("settings");
    builder.setAttribute("volume");
    builder.setInterface("sound");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("kind", type);
    builder.addParameter("level", level);
    var uri = builder.build();

    if(DEBUG) console.log("Uri:"+uri)
    
    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        alert("success");
    }, function(errorCode, errorMessage) {
        showError("PUT settings/volume/sound", errorCode, errorMessage);
    });
}

