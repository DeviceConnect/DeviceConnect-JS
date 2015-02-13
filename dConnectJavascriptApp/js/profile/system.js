/**
 system.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */


/**
 * Search profile.
 *
 *
 */
function searchSystem(serviceId, deviceName) {
    if (deviceName != undefined) {
        // 第2引数が空でない場合、代入を行う。
        myDeviceName = deviceName;
    }

    if(DEBUG) console.log(myDeviceName)
    initAll();

    var builder = new dConnect.URIBuilder();
    builder.setProfile("serviceinformation");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    if(DEBUG) console.log("Uri:"+uri)

    dConnect.get(uri, null, null, function(json) {
        if(DEBUG) console.log("Response:", json);
        if (json.result == 0)
        {
            var str = "";
            for (var i = 0; i < json.supports.length; i++)
            {
                str += '<li><a href="javascript:searchProfile(\'' + serviceId + '\', ';
                str += '\'' + json.supports[i] + '\');" ';
                str += 'value="' + json.supports[i] + '">';
                str += json.supports[i] + '</a></li>';
            }

            setTitle("Profile List");

            var listHtml = document.getElementById('list');
            listHtml.innerHTML = str;
            $("ul.list").listview("refresh");

        }
        else
        {
            var errorCode = json.errorCode;
            var errorMessage = json.errorMessage;
            if(DEBUG) console.log("Error: " + errorCode + ": " + errorMessage);
            showError("serviceinformation", json);
        }
    }, function(errorCode, errorMessage) {
        showError("GET /serviceinformation", errorCode, errorMessage);
    });
    

}

function checkDevicePlugins() {
    initAll();

    var builder = new dConnect.URIBuilder();
    builder.setProfile("system");
    var uri = builder.build();

    if(DEBUG) console.log("Uri:"+uri)

    dConnect.get(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);

        var str = "";
        for (var i = 0; i < json.plugins.length; i++) {
            str += '<li><a href="javascript:launchDevicePlugin(\'' + json.plugins[i].id + '\');" value="' + json.plugins[i].name + '" >' + json.plugins[i].name + '</a></li>';
        }

        var listHtml = document.getElementById('listSetting');
        listHtml.innerHTML = str;
        $("ul.listSetting").listview("refresh");
    });
}

function launchDevicePlugin(pluginId) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("system");
    builder.setInterface("device");
    builder.setAttribute("wakeup");
    builder.addParameter("pluginId",pluginId);
    var uri = builder.build();

    if(DEBUG) console.log("Uri:"+uri)

    dConnect.put(uri, null, null, function(json) {
        if (DEBUG) console.log("Response: ", json);
    });
}