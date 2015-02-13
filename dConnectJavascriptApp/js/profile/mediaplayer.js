/**
 mediaplayer.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** 
 * media_playerのメニューを表示する.
 *
 * @param {String} serviceId サービスID
 */
function showMediaPlayer(serviceId) {
    initAll();

    var btnStr = getBackButton('Device Top','doMediaplayerBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    setTitle("MediaPlayer Profile");

    var listHtml = '<li><a href="javascript:doMediaList(\'' + serviceId + '\');" value="MediaList">MediaList</a></li>';

    reloadList(listHtml);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doMediaplayerBack(serviceId, sessionKey){
    searchSystem(serviceId);
}

/**
 * Media Listを取得する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaList(serviceId) {
    initAll();
    
    closeLoading();
    showLoading();
    
    setTitle("MediaPlayer Media List");
    
    var str = getBackButton('MediaPlayer TOP', 'doMediaListBack', serviceId, "");
    reloadContent(str);
    reloadHeader(str);

    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("media_list");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    if (DEBUG) console.log("Uri: " + uri);

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        closeLoading();
        var str = "";
        for (var i = 0; i < json.media.length; i++) {
            str += '<li><a href="javascript:doMediaPlayer(\'' + serviceId + '\',\'' + json.media[i].mediaId + '\',1);"  >';
            str += json.media[i].title + '</a></li>';
        }
        reloadList(str);
    }, function(errorCode, errorMessage) {
        closeLoading();
        showError("media_player/media_list", errorCode, errorMessage);
    });
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doMediaListBack(serviceId, sessionKey){
    showMediaPlayer(serviceId);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doMediaPlayerToFileBack(serviceId, sessionKey){
    showFileList(serviceId, currentPath, 1);
}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doMediaPlayerBack(serviceId, sessionKey){
    doUnregisterOnStatusChange(serviceId, sessionKey);
    doMediaList(serviceId);
}

/**
 * MusicPlayer onStatus Eventの登録
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doRegisterOnStatusChange(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("onstatuschange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.addEventListener(uri, function(message) {
        // イベントメッセージが送られてくる
        if (DEBUG) console.log("Event-Message: " + message);
        var json = JSON.parse(message);
        if (json.mediaPlayer) {
            document.mediaPlayerForm.status.value = json.mediaPlayer.status;
            document.mediaPlayerForm.mediaId.value = json.mediaPlayer.mediaId;
            document.mediaPlayerForm.volume.value = json.mediaPlayer.volume;
            document.mediaPlayerForm.mimeType.value = json.mediaPlayer.mimeType;
            
            if (json.mediaPlayer.pos !== undefined) {
                $('#mediaPlayerSeek').val(json.mediaPlayer.pos);
                $('#mediaPlayerSeek').slider('refresh');
            }
            if (json.mediaPlayer.volume !== undefined) {
                $('#mediaPlayerVolume').val(json.mediaPlayer.volume * 100);
                $('#mediaPlayerVolume').slider('refresh');
            }
            if (json.mediaPlayer.status !== undefined) {
                if (status === "mute") {
                    $('#mediaPlayerMuteStatus').prop('selectedIndex', 1); // 1: Mute ON
                    $('#mediaPlayerMuteStatus').slider('refresh');
                } else if (status === "unmute") {
                    $('#mediaPlayerMuteStatus').prop('selectedIndex', 0); // 0: Mute OFF
                    $('#mediaPlayerMuteStatus').slider('refresh');
                }
            }
        }
    }, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
    dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * MusicPlayer onStatus Eventの削除
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doUnregisterOnStatusChange(serviceId, sessionKey) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("onstatuschange");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.removeEventListener(uri, null, function(errorCode, errorMessage){
        alert(errorMessage);
    });
}

/**
 * MediaPlayer
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 * @param {String} from FileListから実行か, MediaListからの実行か
 */
function doMediaPlayer(serviceId, id, from) {
    initAll();

    var sessionKey = currentClientId;
    doRegisterOnStatusChange(serviceId, sessionKey);

    // back button to media player list
    if (from == 1) {
        var btnStr = getBackButton('Media List','doMediaPlayerBack', serviceId, sessionKey);
        reloadHeader(btnStr);
        reloadFooter(btnStr);
    } else if (from == 2) {
        var btnStr = getBackButton('File Manager','doMediaPlayerToFileBack', serviceId, sessionKey);
        reloadHeader(btnStr);
        reloadFooter(btnStr);
    }
    doMediaPlayerMediaGet(serviceId, id);
}


/**
 * メディアを設定する。
 *
 * @param {String}serviceId サービスID
 * @param {String}id メディアID
 * @param {Integer}seek メディアの長さ
 */
function doMedia(serviceId,id, seek) {
    var str = "";
    str += '<form  name="mediaPlayerForm">';
    str += '<input type="text" id="mediaId" width="100%">';
    str += '<input type="text" id="mimeType" width="100%">';
    str += '<input type="text" id="volume" width="100%">';
    str += '<input type="text" id="status" width="100%">';
    str += '</form>';
    str += '<input type="text" value="' + id + '"/>';
    str += '<input data-icon="play" data-inline="true" data-mini="true" onclick="javascript:doMediaPlayerPlay(\'' + serviceId + '\', \'' + id + '\' );" type="button" value="Play"/>';
    str += '<input data-icon="play" data-inline="true" data-mini="true" onclick="javascript:doMediaPlayerResume(\'' + serviceId + '\', \'' + id + '\' );" type="button" value="Resume"/>';
    str += '<input data-icon="pause" data-inline="true" data-mini="true" onclick="javascript:doMediaPlayerPause(\'' + serviceId + '\');" type="button" value="Pause"/>';
    str += '<input data-icon="stop" data-inline="true" data-mini="true" onclick="javascript:doMediaPlayerStop(\'' + serviceId + '\');" type="button" value="Stop"/>';
    str += '<p>';
    str += '<label for="mediaPlayerSeek">Seek:</label>';
    str += '<input type="range" name="mediaPlayerSeek" id="mediaPlayerSeek" value="0" min="0" max=\'' + seek + '\' step="1" />';
    str += '<input type="button" onclick="doMediaPlayerSeekPut(\'' + serviceId + '\');" id="mediaPlayerSeekPut" value="Set seek" />';
    str += '</p>';
    str += '<p>';
    str += '<p>';
    str += '<label for="mediaPlayerVolume">Volume:</label>';
    str += '<input type="range" name="mediaPlayerVolume" id="mediaPlayerVolume" value="0" min="0" max="100" step="1" />';
    str += '<input type="button" onclick="doMediaPlayerVolumePut(\'' + serviceId + '\');" id="mediaPlayerVolumePut" value="Set volume" />';
    str += '</p>';
    str += '<p>';
    str += '<label for="mediaPlayerMuteStatus">Mute:</label>';
    str += '<select name="mediaPlayerMuteStatus" id="mediaPlayerMuteStatus" data-role="slider">';
    str += '<option value="off">Off</option>';
    str += '<option value="on">On</option>';
    str += '</select>';
    str += '</p>';
    reloadContent(str);

    $('#mediaPlayerMuteStatus').bind("change", function(event, ui) {
        if ($('#mediaPlayerMuteStatus').val() === "off") {
            doMediaPlayerMuteChange(serviceId, false);
        } else if ($('#mediaPlayerMuteStatus').val() === "on") {
            doMediaPlayerMuteChange(serviceId, true);
        }
    });
    $('#mediaPlayerSeek').slider('disable');
    $('#mediaPlayerSeek').slider('refresh');
	$('#mediaPlayerSeekPut').button('disable');
	$('#mediaPlayerSeekPut').button('refresh');
    $('#mediaPlayerVolume').slider('disable');
    $('#mediaPlayerVolume').slider('refresh');
    $('#mediaPlayerVolumePut').button('disable');
    $('#mediaPlayerVolumePut').button('refresh');
    $('#mediaPlayerMuteStatus').slider('disable');
    $('#mediaPlayerMuteStatus').slider('refresh');
	doMediaPlayerSeekGet(serviceId);
    doMediaPlayerVolumeGet(serviceId);
    doMediaPlayerMuteGet(serviceId, id);
}


/**
 * PUT media メディアファイルの設定
 *
 * @param {String}serviceId サービスID
 * @param {String}id メディアID
 * @param {Function}callback コールバック
 */
function doMediaPlayerMediaPut(serviceId, id, callback) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("media");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("mediaId", id);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        var json = JSON.parse(responseText);
        if (json.result == 0) {
            setTitle("MediaPlayer");
            initListView();
        } else {
            showError("PUT media_player/media", json);
        }
        if (callback) {
        	callback();
        }
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/media", errorCode, errorMessage);
    });
}
/**
 * GET media メディアファイルの取得
 *
 * @param {String}serviceId サービスID
 * @param {String}id メディアID
 */
function doMediaPlayerMediaGet(serviceId, id) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("media");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("mediaId", id);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    var oncomplete = function(json) {
        var seek = json.duration;
        if (!json.duration) {
            seek = 100;
        }
        doMedia(serviceId, id, seek);
    }

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        var json = JSON.parse(responseText);
		var seek = json.duration;
		if (!json.duration) {
			seek = 100;
		}
        if(myDeviceName.indexOf("Chromecast") != -1){
    		showLoading();
        	doMediaPlayerMediaPut(serviceId, id, function() {
				doMediaPlayerPlay(serviceId, id, function() {
			        oncomplete(json);
			        closeLoading();
				});
			});
        } else {
        oncomplete(json);
        }
    }, function(errorCode, errorMessage) {
        showError("GET media_player/media", errorCode, errorMessage);
        oncomplete(json);
    });
}

/**
 * メディア再生要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 * @param {Function} callback コールバック
 */
function doMediaPlayerPlay(serviceId, id, callback) {
	var builder = new dConnect.URIBuilder();
	builder.setProfile("media_player");
	builder.setAttribute("play");
	builder.setServiceId(serviceId);
	builder.setAccessToken(accessToken);
	var uri = builder.build();
	if (DEBUG) console.log("Uri: " + uri);

	dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
		if (DEBUG) console.log("Response: " + responseText);
		var json = JSON.parse(responseText);
		if (json.result == 0) {

		} else {
			showError("PUT media_player/play", json);
		}
		if (callback) {
		     callback();
		}
	}, function(errorCode, errorMessage) {
        showError("PUT media_player/play", errorCode, errorMessage);
    });
}

/**
 * メディアresume要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} id メディアID
 */
function doMediaPlayerResume(serviceId, id) {
	var builder = new dConnect.URIBuilder();
	builder.setProfile("media_player");
	builder.setAttribute("resume");
	builder.setServiceId(serviceId);
	builder.setAccessToken(accessToken);
	var uri = builder.build();
	if (DEBUG) console.log("Uri: " + uri);

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/resume", errorCode, errorMessage);
    });
}

/**
 * メディア停止要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerStop(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("stop");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/stop", errorCode, errorMessage);
    });
}

/**
 * メディア一時停止要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerPause(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("pause");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/pause", errorCode, errorMessage);
    });
}

/**
 * メディアのシーク設定要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerSeekPut(serviceId) {
    var pos = $('#mediaPlayerSeek').val();
    
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("seek");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("pos", pos);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/seek", errorCode, errorMessage);
    });
}

/**
 * メディアの音量変更要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerVolumePut(serviceId) {
    var level = $('#mediaPlayerVolume').val() / 100;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("volume");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("volume", level);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/volume", errorCode, errorMessage);
    });
}

/**
 * メディアの音量取得要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerVolumeGet(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("volume");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        $('#mediaPlayerVolume').val(json.volume * 100);
        $('#mediaPlayerVolume').slider('enable');
        $('#mediaPlayerVolume').slider('refresh');
        $('#mediaPlayerVolumePut').button('enable');
        $('#mediaPlayerVolumePut').button('refresh');
    }, function(errorCode, errorMessage) {
        showError("GET media_player/volume", errorCode, errorMessage);
    });
}

/**
 * メディアのミュート開始または解除要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {Boolean} isMute ミュート開始の場合はtrue、ミュート解除の場合はfalse
 */
function doMediaPlayerMuteChange(serviceId, isMute) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("mute");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    var method;
    if (isMute) {
        method = 'PUT';
    } else {
        method = 'DELETE';
    }

    dConnect.sendRequest(method, uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError(method + " media_player/mute", errorCode, errorMessage);
    });
}

/**
 * メディアのミュート状態要求を送信する.
 *
 * @param {String} serviceId サービスID
 * @param {String} mediaId メディアID
 */
function doMediaPlayerMuteGet(serviceId, mediaId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("mute");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        if (DEBUG) console.log("Response: " + responseText);
        var json = JSON.parse(responseText);
        if (json.result == 0) {
            var status = json.mute ? 1 : 0;
            $('#mediaPlayerMuteStatus').prop('selectedIndex', status);
            $('#mediaPlayerMuteStatus').slider('enable');
            $('#mediaPlayerMuteStatus').slider('refresh');
        } else {
            showError("GET media_player/mute", json);
        }
		if(myDeviceName.indexOf("Chromecast") == -1){
			doMediaPlayerMediaPut(serviceId, mediaId);
		}
    }, function(errorCode, errorMessage) {
        showError("GET media_player/mute", errorCode, errorMessage);
        doMediaPlayerMediaPut(deviceId, mediaId);
    });
}


/**
 * メディアのSeek位置変更要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerSeekPut(serviceId) {
    var pos = $('#mediaPlayerSeek').val();

    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("seek");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("pos", pos);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    }, function(errorCode, errorMessage) {
        showError("PUT media_player/seek", errorCode, errorMessage);
    });
}

/**
 * メディアのSeek位置取得要求を送信する.
 *
 * @param {String} serviceId サービスID
 */
function doMediaPlayerSeekGet(serviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("media_player");
    builder.setAttribute("seek");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    if (DEBUG) console.log("Uri: " + uri);

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
        $('#mediaPlayerSeek').val(json.pos);
        $('#mediaPlayerSeek').slider('enable');
        $('#mediaPlayerSeek').slider('refresh');
        $('#mediaPlayerSeekPut').button('enable');
        $('#mediaPlayerSeekPut').button('refresh');
    }, function(errorCode, errorMessage) {
        showError("GET media_player/seek", errorCode, errorMessage);
    });
}
