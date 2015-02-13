/**
 dconnectsdk-0.1.0.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/** 
 * Camera Profile 
 *
 * @param {String}serviceId サービスID
 */
function showCamera(serviceId) {
    initAll();

    var btnStr = getBackButton('Device Top', 'doCameraBack', serviceId, "");
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    setTitle("Camera Profile");

    var str = "";
    str += '<form name="cameraForm">';
    str += '<label for="direction">Zoom Direction:</label>';
    str += '<SELECT id="direction">';
    str += '<OPTION value="in">in</OPTION>';
    str += '<OPTION value="out">out</OPTION>';
    str += '</SELECT>';
    str += '<label for="movement">Magnification:</label>';
    str += '<SELECT id="movement">';
    str += '<OPTION value="start">Max</OPTION>';
    str += '<OPTION value="1shot">1shot</OPTION>';
    str += '</SELECT>';
    str += '<br>';
    str += '<input type="button" onclick="doZoom(\'' + serviceId + '\');" value="Zoom" />';
    str += '</form>';

    reloadContent(str);

    $('#direction').change(function () {
        var dir = $(this).val();
        var str;
        if (dir === "in") {
            str = "Max";
        } else if (dir === "out") {
            str = "Min";
        }
        if (str) {
            $('#movement').children('[value=start]').html(str);
            $('#movement').selectmenu('refresh', true); 
        }
    });

    doCheckZoom(serviceId);
}

/**
 * Backボタン
 *
 * @param {String}serviceId サービスID
 * @param {String}sessionKey セッションKEY
 */
function doCameraBack(serviceId, sessionKey){
	searchSystem(serviceId);
}


/** 
 * Camera Profile Zoop
 *
 * @param {String}serviceId サービスID
 */
function doZoom(serviceId) {
    var movement = $("#movement").val();
    var direction = $("#direction").val();
   
    var builder = new dConnect.URIBuilder();
    builder.setProfile("camera");
    builder.setAttribute("zoom");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("movement", movement);
    builder.addParameter("direction", direction);
    var uri = builder.build();
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        var json = JSON.parse(responseText);
        
		if(DEBUG) console.log("Response:"+responseText)
	    
        if (json.result == 0) {
			//doCheckZoom(serviceId);
        } else {

        }

    }, function(xhr, textStatus, errorThrown) {

    });
    
}

/** 
 * Camera Profile Zoop
 *
 * @param serviceId サービスID
 */
function doCheckZoom(serviceId) {
	
    var builder = new dConnect.URIBuilder();
    builder.setProfile("camera");
    builder.setAttribute("zoom");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
	if(DEBUG) console.log("Uri:"+uri)
	
    dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        var json = JSON.parse(responseText);
	    	
        if (json.result == 0) {
			$("#zoomRange").val(json.zoomPosition);
	    	$("#zoomRange").slider('refresh');
        } else {

        }
    }, function(xhr, textStatus, errorThrown) {

    });
}