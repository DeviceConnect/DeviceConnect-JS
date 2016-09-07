/**
 gpio.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * GPIO
 *
 * @param {String}serviceId サービスID
 */
function showGPIO(serviceId) {

    initAll();

    var btnStr = '';
    btnStr += getBackButton('Device Top', 'doGPIOBack', serviceId, '');
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    setTitle('GPIO Profile');

    // Open websocket.
    var sessionKey = currentClientId;
    dConnect.connectWebSocket(sessionKey, function(eventCode, message) {
        if (eventCode == 0) {
            // オープン
        } else if (eventCode == 1) {
            // クローズ
        } else {
            // エラー
        }
    });

    var str = '';
    str += '<div data-role="controlgroup" data-type="horizontal" style="text-align:center" >';
    str += '<input data-icon="plus" onclick="javascript:doRegisterOnChangeEvent(\'' + serviceId + '\');" type="button" value="add onChange Event" /><br>';
    str += '<input data-icon="minus" onclick="javascript:doUnregisterOnChangeEvent(\'' + serviceId + '\');" type="button" value="del onChange Event" /><br>';
    str += '</div>';
    str += '<div role="main" class="ui-content">';
    str += '<center><table>';
	
    var d = 0;
    for (var i = 2; i < 20; i++) {

        if (i < 14) {

            str += '<tr>';
            str += '<td>';
            str += i + '(D' + i + ')';
            str += '</td>';
            str += '<td>';

            if (i == 3 || i == 5 || i == 6 || i == 9 || i == 10 || i == 11) {
                str += '<select id="' + i + '" onChange=\"doGPIOExport(\'' + serviceId + '\',this)\">';
                str += '<option value="0">Input</option>';
                str += '<option value="1" selected>Output</option>';
                str += '<option value="3">PWM</option>';
                str += '</select>';
            } else {
                str += '<select id="' + i + '" onChange=\"doGPIOExport(\'' + serviceId + '\',this)\">';
                str += '<option value="0">Input</option>';
                str += '<option value="1" selected>Output</option>';
                str += '</select>';
            }

            str += '</td>';
            str += '<td width=250>';
            str += '<center>';
            str += '<div class=\'pinNo' + i + 'Value\' data-role="content" id=\'pinNo' + i + 'Value\' data-theme="a">';
            str += '<input id=\'pinNo' + i + '\' data-icon="power" data-inline="true" data-mini="true" ';
            str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', ' + i + ',1);" ';
            str += 'type="button" value="HIGH" /><br>';
            str += '</center>';
            str += '</div>';
            str += '</td>';
            str += '</tr>';
        } else {

            str += '<tr>';
            str += '<td>';
            str +=  i + '(A' + d + ')';
            str += '</td>';
            str += '<td>';
            str += '<select id="' + i + '" onChange=\"doGPIOExport(\'' + serviceId + '\',this)\">';
            str += '<option value="0">Input</option>';
            str += '<option value="1">Output</option>';
            str += '<option value="2" selected>Analog</option>';
            str += '</select>';
            str += '</td>';
            str += '<td>';
            str += '<center>';
            str += '<span id=\'pinNo' + i + 'Value\' >';
            str += '0';
            str += '</span>';
            str += '</center>';
            str += '</td>';
            str += '</tr>';
            d++;
        }
    }

    str += '</table></center>';
    str += '</div>';

    reloadContent(str);
}

/**
 * Menu Back button
 *
 * serviceId {String} service ID
 * sessionKey {String} session Key
 */
function doGPIOBack(serviceId, sessionKey) {
    searchSystem(serviceId);
}

/**
 * Export<br>
 * POST: /gpio/export/pin_no
 *
 * serviceId {String} service ID
 * sessionKey {String} select object
 */
function doGPIOExport(serviceId, obj) {
    var selectMode = obj.options[obj.selectedIndex].value;

    var pin = obj.id;
    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("export");
    builder.setAttribute(pin);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("mode", selectMode);
    var uri = builder.build();
    var tagIdValue = "#pinNo" + pin + "Value";

    dConnect.post(uri, null, null, function(json) {

        if (json.result == 0) {
            var str = "";
            if (selectMode == 0) {
                str += '';
                str += '<br>';
                setContents(tagIdValue, str);
                doGPIODigitalRead(serviceId, pin);
            } else if (selectMode == 1) {
                str += '<input id=\'pinNo' + pin + '\' data-icon="power" data-inline="true" data-mini="true"';
                str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', ' + pin + ',1);"';
                str += 'type="button" value="HIGH" />';
                str += '<br>';
                setContents(tagIdValue, str);
            } else if (selectMode == 2) {
                str += '';
                str += '<br>';
                setContents(tagIdValue, str);
                doGPIOAnalogRead(serviceId, pin);
            } else if (selectMode == 3) {
                var value = 0;
                str += '<input type="range" id=\'' + pin + '\'  value="' + value + '" min="0" max="255" ';
                str += 'onChange=\"doGPIOGetSlider(\'' + serviceId + '\',this)\" type="slider" width="200">';
                setContents(tagIdValue, str);
            }
        } else {
            //alert(json.result);
        }

    }, function(errorCode, errorMessage) {
        alert("Error:" + errorMessage);
    });
}

/**
 * Get value of slider.
 *
 * obj {Object} object of slider.
 */
function doGPIOGetSlider(serviceId, obj) {
    var value = obj.value;
    var pin = obj.id;
    doGPIOAnalogWrite(serviceId, pin, value);
}

/**
 * analog read<br>
 * GET: /gpio/analog/pin_no
 *
 * serviceId {String} service ID
 * pin {String} pin no
 */
function doGPIOAnalogRead(serviceId, pin) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("analog");
    builder.setAttribute(pin);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    var tagId = "pinNo" + pin + "Value";
    dConnect.get(uri, null, function(json) {
        if (json.result == 0) {
            var str = "";
            str += json.value;
            str += '<br>';
            document.getElementById(tagId).innerHTML = str;
        } else {

        }
    }, function(errorCode, errorMessage) {
        alert("read Error:" + errorMessage);
    });
}

/**
 * digital read<br>
 * GET: /gpio/digital/pin_no
 *
 * serviceId {String} service ID
 * pin {String} pin no
 */
function doGPIODigitalRead(serviceId, pin) {
    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("digital");
    builder.setAttribute(pin);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    var tagId = "pinNo" + pin + "Value";
    dConnect.get(uri, null, function(json) {
        if (json.result == 0) {
            var str = "";
            str += json.value;
            str += '<br>';
            document.getElementById(tagId).innerHTML = str;
        } else {

        }
    }, function(errorCode, errorMessage) {
        alert("read Error:" + errorMessage);
    });
}

/**
 * analog write<br>
 * POST: /gpio/analog/pin_no
 *
 * serviceId {String} service ID
 * pin {Number} pin no
 * pin {Number} value
 */
function doGPIOAnalogWrite(serviceId, pin, value) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("analog");
    builder.setAttribute(pin);
    builder.addParameter("value", value);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);

    var uri = builder.build();

    dConnect.post(uri, null, null,
        function(json) {
            if (json.result == 0) {} else {}
        },
        function(errorCode, errorMessage) {
            alert("Error:" + errorMessage);
        });
}

/**
 * digital write<br>
 * POST: /gpio/digital/pin_no
 *
 * serviceId {String} service ID
 * pin {Number} pin no
 * pin {Number} value
 */
function doGPIODigitalWrite(serviceId, pin, value) {

    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("digital");
    builder.setAttribute(pin);
    builder.addParameter("value", value);
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);

    var uri = builder.build();
    var tagId = "#pinNo" + pin;
    var tagIdValue = "#pinNo" + pin + "Value";

    if (value == 1) {
        dConnect.put(uri, null, null,
            function(json) {
                if (json.result == 0) {
                	var str = "";
                    str += '<input id=\'pinNo' + pin + '\' data-icon="power" data-inline="true" data-mini="true"';
                	str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', ' + pin + ',0);"';
                	str += 'type="button" value="LOW" />';
                	str += '<br>';
                	setContents(tagIdValue, str);
                	
                } else {}
            },
            function(errorCode, errorMessage) {
                alert("Error:" + errorMessage);
            });
    } else if (value == 0) {
        dConnect.delete(uri, null,
            function(json) {
                if (json.result == 0) {
                    var str = "";
                    str += '<input id=\'pinNo' + pin + '\' data-icon="power" data-inline="true" data-mini="true"';
                	str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', ' + pin + ',1);"';
                	str += 'type="button" value="HIGH" />';
                	str += '<br>';
                	setContents(tagIdValue, str);
                } else {}
            },
            function(errorCode, errorMessage) {
                alert("Error:" + errorMessage);
            });
    } else {
        alert("Error: Value is not 1 or 0, DigitalWrite, must use 1 or 0");
    }
}

/*
 * Register onChange event<br>
 * PUT: /gpio/onchange
 *
 * @param {String} serviceId service ID
 */
function doRegisterOnChangeEvent(serviceId) {

    var sessionKey = currentClientId;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("onchange");
    builder.setAttribute("");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    dConnect.addEventListener(uri,
        //イベントのメッセージ
        function(message) {
            var json = JSON.parse(message);
            var pins = json.pins;
            for (var pin in pins) {
                var value = pins[pin];
                var tagId = "pinNo" + pin + "Value";

                var str = "";
                str += value;
                str += '<br>';
                document.getElementById(tagId).innerHTML = str;
            }
        },
        //イベント登録が成功した
        function() {

        },
        //イベント登録が失敗した
        function(errorCode, errorMessage) {
            alert(errorMessage);
        });
}

/*
 * Unregister onChange event<br>
 * DELETE: /gpio/onchange
 *
 * @param {String} serviceId service ID
 */
function doUnregisterOnChangeEvent(serviceId) {

    var sessionKey = currentClientId;

    var builder = new dConnect.URIBuilder();
    builder.setProfile("gpio");
    builder.setInterface("onchange");
    builder.setAttribute("");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();

    dConnect.removeEventListener(uri, function() {

    }, function(errorCode, errorMessage) {

    });
}