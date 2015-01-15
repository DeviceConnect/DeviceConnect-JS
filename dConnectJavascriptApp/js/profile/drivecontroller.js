/**
 drivecontroller.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
 
/**
 * Drive Controllerのメニューを表示
 *
 * @param {String}deviceIde デバイスID
 */
function showDriveController(deviceId) {
    
    initAll();
    
    setTitle("Drive Controller");
    
    var btnStr = "";    
    btnStr += getBackButton('Device Top','doDriveControllerBack', deviceId, "");
	reloadHeader(btnStr);
	reloadFooter(btnStr);
	
    var str = "";
    str += '<center>';
    str += '<form name="formDrive">';
    str += '<label for="slider-0">Power:</label>';
    str += '<input type="range" name="power" id="power" value="80" min="0" max="100"  />';
    str += '<input type="button" data-icon="arrow-u" onclick="doDriveMove(\'' + deviceId + '\', 0);" value=" "  data-inline="true"   data-iconpos="top" ><br>';
    str += '<input type="button" data-icon="arrow-l" onclick="doDriveMove(\'' + deviceId + '\', 270);" value=" "  data-inline="true"   data-iconpos="left">';
    str += '<input type="button" onclick="doDriveStop(\'' + deviceId + '\');" value="*"  data-inline="true"  >';
    str += '<input type="button" data-icon="arrow-r" onclick="doDriveMove(\'' + deviceId + '\', 90);" value=" " data-inline="true"  data-iconpos="right"><br>';
    str += '<input type="button" data-icon="arrow-d" onclick="doDriveMove(\'' + deviceId + '\', 180);" value=" " data-inline="true"  data-iconpos="bottom"><br>';
    str += 'angle:';
    str += '<input type="range" name="userRotate" id="userRotate" value="80" min="0" max="360"  />';
    str += '<input type="button" onclick="doDriveRotate(\'' + deviceId + '\');" value="Rotate" >';
    str += '</form>';
    str += '</center>';
    reloadContent(str);
}

/**
 * Backボタン
 *
 * @param {String}deviceId デバイスID
 * @param {String}sessionKey セッションKEY
 */
function doDriveControllerBack(deviceId, sessionKey){
	searchSystem(deviceId);
}

/**
 * 回転する
 *
 * @param {String}deviceIde デバイスID
 */
function doDriveRotate(deviceId){
    var angle = document.formDrive.userRotate.value;

	var builder = new dConnect.URIBuilder();
    builder.setProfile("drive_controller");
    builder.setAttribute("rotate");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("angle", angle);
    var uri = builder.build();
    console.log("doDriveRotate:" + uri);

    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        var json = JSON.parse(responseText);

        if (json.result == 0) {

        } else {
			showError("PUT drive_controller/rotate", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });

}

/**
 * 停止する
 *
 * @param {String}deviceIde デバイスID
 */
function doDriveStop(deviceId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("drive_controller");
    builder.setAttribute("stop");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    console.log("doDriveStop:" + uri);

    dConnect.execute('DELETE', uri, null, null, function(status, headerMap, responseText) {
        var json = JSON.parse(responseText);

        if (json.result == 0) {

        } else {
			showError("DELETE drive_controller/stop", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}

/**
 * 操作する
 *
 * @param {String}deviceId デバイスID
 * @param {String}angle 操作する方向
 */
function doDriveMove(deviceId, angle) {
    var body = document.formDrive.power.value;
    var mPower = body / 100;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("drive_controller");
    builder.setDeviceId(deviceId);
    builder.setAttribute("move");
    builder.setAccessToken(accessToken);
    builder.addParameter("angle", angle);
    builder.addParameter("speed", mPower);
    var uri = builder.build();
    console.log("doDriveMove:" + uri);

    dConnect.execute('POST', uri, null, null, function(status, headerMap, responseText) {
        var json = JSON.parse(responseText);

        if (json.result == 0) {

        } else {
			showError("POST drive_controller/move", json);
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}