/**
 gpio.js
 Copyright (c) 2020 NTT DOCOMO,INC.
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

    let btnStr = '';
    btnStr += getBackButton('Device Top', 'searchSystem', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    setTitle('GPIO Profile');

    let str = '';
    str += '<div data-role="controlgroup" data-type="horizontal" style="text-align:center" >';
    str += '<input data-icon="plus" onclick="javascript:doRegisterOnChangeEvent(\'' + serviceId + '\');" type="button" value="add onChange Event" /><br>';
    str += '<input data-icon="minus" onclick="javascript:doUnregisterOnChangeEvent(\'' + serviceId + '\');" type="button" value="del onChange Event" /><br>';
    str += '</div>';
    str += '<div role="main" class="ui-content">';
    str += '<center><table>';

    let d = 0;
    for (let i = 2; i < 20; i++) {

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
            str += '<div class=\'pinNo' + i + 'Value\' data-role="content" id=\'pinNoD' + i + 'Value\' data-theme="a">';
            str += '<input id=\'pinNoD' + i + '\' data-icon="power" data-inline="true" data-mini="true" ';
            str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', \'D' + i + '\',1);" ';
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
            str += '<select id="A' + d + '" onChange=\"doGPIOExport(\'' + serviceId + '\',this)\">';
            str += '<option value="0">Input</option>';
            str += '<option value="1">Output</option>';
            str += '<option value="2" selected>Analog</option>';
            str += '</select>';
            str += '</td>';
            str += '<td>';
            str += '<center>';
            str += '<span id=\'pinNoA' + d + 'Value\' >';
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
 * Export<br>
 * POST: /gpio/export/pin_no
 *
 * serviceId {String} service ID
 * obj {String} select object
 */
function doGPIOExport(serviceId, obj) {
    let selectMode = obj.options[obj.selectedIndex].value;

    let pin = 'D' + obj.id;
    let tagIdValue = "#pinNo" + pin + "Value";

    sdk.post({
      profile: 'gpio',
      interface: 'export',
      attribute: pin,
      params: {
        serviceId: serviceId,
        mode: selectMode
      }
    }).then(json => {

        if (json.result == 0) {
            let str = "";
            if (selectMode == 0) {
                str += '';
                str += '<br>';
                setContents(tagIdValue, str);
                doGPIODigitalRead(serviceId, pin);
            } else if (selectMode == 1) {
                str += '<input id=\'pinNo' + pin + '\' data-icon="power" data-inline="true" data-mini="true"';
                str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', \'' + pin + '\',1);"';
                str += 'type="button" value="HIGH" />';
                str += '<br>';
                setContents(tagIdValue, str);
            } else if (selectMode == 2) {
                str += '';
                str += '<br>';
                setContents(tagIdValue, str);
                doGPIOAnalogRead(serviceId, pin);
            } else if (selectMode == 3) {
                let value = 0;
                str += '<input type="range" id=\'' + pin + '\'  value="' + value + '" min="0" max="255" ';
                str += 'onChange=\"doGPIOGetSlider(\'' + serviceId + '\',this)\" type="slider" width="200">';
                setContents(tagIdValue, str);
            }
        } else {
            //alert(json.result);
        }

    }).catch(e =>  {
        alert("Error:" + e.errorMessage);
    });
}

/**
 * Get value of slider.
 *
 * obj {Object} object of slider.
 */
function doGPIOGetSlider(serviceId, obj) {
    let value = obj.value;
    let pin = obj.id;
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
    let tagId = "pinNo" + pin + "Value";
    sdk.get({
      profile: 'gpio',
      interface: 'analog',
      attribute: pin,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
        if (json.result == 0) {
            let str = "";
            str += json.value;
            str += '<br>';
            document.getElementById(tagId).innerHTML = str;
        } else {

        }
    }).catch(e => {
        alert("read Error:" + e.errorMessage);
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
    let tagId = "pinNo" + pin + "Value";
    sdk.get({
      profile: 'gpio',
      interface: 'digital',
      attribute: pin,
      params: {
        serviceId: serviceId
      }
    }).then(json => {
        if (json.result == 0) {
            let str = "";
            str += json.value;
            str += '<br>';
            document.getElementById(tagId).innerHTML = str;
        } else {

        }
    }).catch(e => {
        alert("read Error:" + e.errorMessage);
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

    sdk.post({
      profile: 'gpio',
      interface: 'analog',
      attribute: pin,
      params: {
        serviceId: serviceId,
        value: value
      }
    }).then(json => {
        if (json.result == 0) {} else {}
    }).catch(e => {
        alert("Error:" + e.errorMessage);
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
    let tagId = "#pinNo" + pin;
    let tagIdValue = "#pinNo" + pin + "Value";
    let params = {
      profile: 'gpio',
      interface: 'digital',
      attribute: pin,
      params: {
        serviceId: serviceId,
        value: value
      }
    };
    if (value == 1) {
        sdk.put(params).then(json => {
            if (json.result == 0) {
            	let str = "";
                str += '<input id=\'pinNo' + pin + '\' data-icon="power" data-inline="true" data-mini="true"';
            	str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', \'' + pin + '\',0);"';
            	str += 'type="button" value="LOW" />';
            	str += '<br>';
            	setContents(tagIdValue, str);

            } else {}
        }).catch(e => {
            alert("Error:" + e.errorMessage);
        });
    } else if (value == 0) {
        sdk.delete(params).then(json => {
            if (json.result == 0) {
                let str = "";
                str += '<input id=\'pinNo' + pin + '\' data-icon="power" data-inline="true" data-mini="true"';
            	str += 'onclick="javascript:doGPIODigitalWrite(\'' + serviceId + '\', \'' + pin + '\',1);"';
            	str += 'type="button" value="HIGH" />';
            	str += '<br>';
            	setContents(tagIdValue, str);
            } else {}
        }).catch(e => {
            alert("Error:" + e.errorMessage);
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
    sdk.addEventListener({
      profile: 'gpio',
      attribute: 'onchange',
      params: {
        serviceId: serviceId
      }
    }, message => {
      console.log(message);
      let json = JSON.parse(message);
      let pins = json.pins;
      for (let pin in pins) {
          let value = pins[pin];
          let tagId = "pinNo" + pin + "Value";

          let str = "";
          str += value;
          str += '<br>';
          document.getElementById(tagId).innerHTML = str;
      }
  }).then(json => {
      console.log("SUCCESS");
  }).catch(e => {
      alert(e.errorMessage);
  });
}

/*
 * Unregister onChange event<br>
 * DELETE: /gpio/onchange
 *
 * @param {String} serviceId service ID
 */
function doUnregisterOnChangeEvent(serviceId) {

    sdk.removeEventListener({
      profile: 'gpio',
      attribute: 'onchange',
      params: {
        serviceId: serviceId
      }
    }).then(json => {
        if (DEBUG) {
          console.log('Successed register Device Orientation.');
        }
    }).catch(e => {
        alert(e.errorMessage);
    });
}
