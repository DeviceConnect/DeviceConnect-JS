# DeviceConnect-JS

* 日本語説明はこちら
https://github.com/DeviceConnect/DeviceConnect-JS/blob/master/readme.ja.md

# About DeviceConnect WebAPI
"DeviceConnect WebAPI" is WebAPI which operates as a virtual server on a smart phone. It can use easily various wearable devices and an IoT device by unific description from a web browser or an application.

# About DeviceConnect JS

Device Connect WebAPI in WebAPI which operates as a virtual server on the smartphone, it can be easy to use in a uniform description of various wearable devices and IoT devices from a Web browser and apps.<br>
Device Connect JS will be in the library for the repository of DeviceConnect of JavaScript version.<br>
<br><br>
In this guide I will continue to discuss the following.<br>

* [Project description](#section1)
* [Preparation of Platform](#section2)
* [Import method of JavaScript](#section3)
* [Using the library](#section4)

# <a name="section1">Project description</a>
| Project Name|Content  |
|:-----------|:---------|
|dConnectJavascriptApp|demoWebSite source code. |
|dConnectSDKForJavascript|DeviceConnectのJavaScript用SDK。|
|dConnectSDKForJavascriptTest|Source code of automatic test of the device plug-ins that DeviceConnect supports.|

# <a name="section2">Preparation of Platform</a>
DeviceConnect-JS provides support for Android and iOS devices.<br>
Please refer to the following page with respect to the installation of each platform.<br>

* [DeviceConnect-Android](https://github.com/DeviceConnect/DeviceConnect-Android)
* [DeviceConnect-iOS](https://github.com/DeviceConnect/DeviceConnect-iOS)

# <a name="section3">Import method of JavaScript</a>
Have a directory structure as follows.<br>

```
HTML root
   └── js
   |    └── dconnectsdk-x.x.x.js
   └── index.html

```

<br>
In this case, by inserting the import statement to index.html as follows, you will be able to use the JavaScript.<br>
<br>

```
 <script src="./js/dconnectsdk-x.x.x.js" type="text/javascript"></script>
```

# <a name="section4">Using the library</a>
## Flow of Device Connect processing
In order to use the Device Connect is basically it will be in the following procedure.<br>
<br>

<center><a href="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/DeviceConnectSequence_en.png" target="_blank">
<img src="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/DeviceConnectSequence_en.png" border="0"
 width="701" height="456" alt="" /></a></center>

1. Availability will make the start-up confirmation of Device Connect Manager.<br><br>
Already if the boot is able to confirm, you can skip.<br>

```
dConnect.checkDeviceConnect(function(apiVersion) {
        alert("Device Connect API version:" + apiVersion);
    }, function(errorCode, errorMessage) {
        switch (errorCode) {
        case dConnect.constants.ErrorCode.ACCESS_FAILED:
            dConnect.startManager();
            alert("Requested to start Device Connect Manager.");
            break;
        default:
            alert(errorMessage);
            break;
        }
    });
```

2. By the authentication (Local OAuth), the confirmation of approval for use in user, you can get an access token.<br><br>
If you have already obtained the access token, you will be able to skip.<br>

```
// Save accessToken
var myAccessToken = "";

// Application name
var myAppName = "<Your Application Name>";

function authorization(){

      var scopes = Array("battery","serviceinformation", "servicediscovery");


       dConnect.authorization(scopes, myAppName,
        function(clientId, clientSecret, newAccessToken) {
                // accessToken
                myAccessToken = newAccessToken;

        },
    function(errorCode, errorMessage) {
                      alert("Failed to get accessToken.");
             }
       );
}
```

3. Get the serviceId of each device that is registered in the Device Connect Manager.<br><br>
Already, in case you have to get the serviceId, you can skip.<br>

```
// service ID
var myServiceId;

// Search of device
function searchDevice() {
    dConnect.discoverDevices(accessToken, function(json) {
        var str = "";
        if (json.result == 0) {
            // Get the service ID.
            // To get the service you want to use from such as the name.
            for (var i = 0; i < json.services.length; i++) {
                if (json.services[i].name == "HOST") {
                    myServiceId = json.services[i].id;
                }
            }
        } else {
            alert("Failed to get services.");
        }
    }, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}
```

4. Using serviceId, do the operation of the device.
<br><br>
Here, we explained in the sample to get the battery information.<br>

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setServiceId(myServiceId);
    builder.setAccessToken(myAccessToken);
    var uri = builder.build();

    dConnect.get(uri, null,
       // Is sent response
 	 	function(json) {
	        if (json.result == 0) {
 	           var level = json.level * 100;
	            alert('Level:' + level);
 	       } else {
 	           alert('Error');
 	       }
	    },
	    function(errorCode, errorMessage) {
			alert(errorMessage);
    });
```

Procedure for operating the device<br><br>
1. In dConnect.URIBuilder, Assemble the RESTful URI of the order to carry out the request to the device.<br>
2. If the HTTP method is GET, I will throw a request by dConnect.get().<br>
3. Callback by I will receive a response to a request.<br>
<br>
In addition, the device operation is variously exist other than the battery. <br>
Please check [here](https://github.com/DeviceConnect/DeviceConnect-JS/wiki/HTML5Application-Manual) for more information.<br>

## Using the Event

### Event
The information of the device, through the device plug-in, you will function to be notified to the HTML application asynchronously.<br>
For example, refers network detection information, sensor event information, the notification information, such as music playback state change (play / pause / resume / stop) information.In order to start receiving events, and the Event API that is defined in each of the profiles running on the HTML application side.<br><br>

In that case, you must specify the SessionKey as the notification destination identifier of the event. Value of SessionKey, in order to avoid overlap with other apps, it is recommended that it be a long random string as possible.If diverted client ID obtained from Create Client API, it is possible to avoid the almost certainly overlap.<br>

### Flow of Event processing
In order to use the Event of Device Connect is basically it will be in the following procedure.

<center><a href="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/EventSequence_en.png" target="_blank">
<img src="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/EventSequence_en.png" border="0"
 width="701" height="456" alt="" /></a></center>

### Open the WebSocket
Open the Websocket to receive events from the Device Connect Manager.<br>
If you already have opened a Websocket, you do not need to do this.<br>
Websocket of state, can be confirmed using dConnect.isConnectedWebSocket ().<br><br>

```
dConnect.connectWebsocket('sessionKey', function(eventCode, message) {
    if (eventCode == 0) {
         // Open
    } else if (eventCode == 1) {
         // Close
    } else {
         // Error
    }
});
```

### Events of registration
For example, if the Battery devices to get events when obtaining an event when not in charge state can write as follows.<br><br>

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setServiceId(myServiceId);
    builder.setAccessToken(myAccessToken);
    builder.setSessionKey(mySessionKey);
    var uri = builder.build();

    dConnect.addEventListener(uri,
    //Events of the message
    function(message) {
        var json = JSON.parse(message);
        if(json.battery){
            if (json.battery.charging) {
              alert('Charging');
            } else{
				alert('Discharging');
            }
        }
    },
    //Event registration has been successful
    function() {
        alert('Register Success');
    },
    //Event registration fails
    function(errorCode, errorMessage){
        alert(errorMessage);
    });
```

### Release of events

If you want to stop the use of events, and delete events as follows.<br>

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setServiceId(myServiceId);
    builder.setAccessToken(myAccessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();

    dConnect.removeEventListener(uri,
         //Event registration cancellation was successful
	     function() {
    	    alert('Unregister Success');
  		 },
  		 //Events deregistration fails
  	  	 function(errorCode, errorMessage){
        	alert(errorMessage);
    	 }
    );
```

### WebSocket Close
　If you want to stop the use of events, you can close the WebSocket.<br>

```
dConnect.disconnectWebSocket();
```
