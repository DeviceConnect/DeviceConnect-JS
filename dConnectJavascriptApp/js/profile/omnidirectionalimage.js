/**
 omnidirectionalimage.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

 /**
 * Show Omnidirectional Image Menu
 *
 * @param {String} serviceId サービスID
 */
function showOmnidirectionalImage(serviceId) {
  clearRefreshTimer();

  let defaultWidth = 280;
  let defaultHeight = 210;
  let paramIncrementPatterns = [
    { id: 'patternX', name: 'x', type: 'number', min: -1.0, max: 1.0, by: 0.2 },
    { id: 'patternY', name: 'y', type: 'number', min: -1.0, max: 1.0, by: 0.2 },
    { id: 'patternZ', name: 'z', type: 'number', min: -1.0, max: 1.0, by: 0.2 },
    { id: 'patternRoll', name: 'roll', type: 'number', min: 0.1, max: 359.0, by: 45.0 },
    { id: 'patternYaw', name: 'yaw', type: 'number', min: 0.1, max: 359.0, by: 45.0 },
    { id: 'patternPitch', name: 'pitch', type: 'number', min: 0.1, max: 359.0, by: 45.0 },
    { id: 'patternFov', name: 'fov', type: 'number', min: 0.1, max: 179.0, by: 15.0 },
    { id: 'patternSphereSize', name: 'sphereSize', type: 'number', min: 1.0, max: 101.0, by: 20.0 },
    { id: 'patternWidth', name: 'width', type: 'number', min: 100.0, max: 500.0, by: 50.0 },
    { id: 'patternHeight', name: 'height', type: 'number', min: 100.0, max: 500.0, by: 50.0 }
  ];

  initAll();
  setTitle('Omnidirectional Image Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let content = '';
  content += '<b>Omnidirectional Image:</b><br>';
  content += '<input id="omniUri" type="text">';
  content += '<button id="buttonShutter">Shot</button><br>';
  content += '<div id="updatedDate" style="font-size:0.5em"></div><br>';

  content += '<b>ROI Image Type:</b><br>';
  content += 'Overlay: ';
  content += '<form>';
  content += '<select name="overlaySwitch">';
  content += '<option value="on" selected>ON</option>';
  content += '<option value="off">OFF</option>';
  content += '</select>';
  content += '</form>';
  content += 'Image Server: ';
  content += '<form>';
  content += '<select name="imageServerSwitch">';
  content += '<option value="mjpeg" selected>ON (MJPEG)</option>';
  content += '<option value="jpeg">ON (JPEG)</option>';
  content += '<option value="off">OFF</option>';
  content += '</select>';
  content += '</form>';

  content += '<button id="buttonStartStop">Start</button><br>';
  content += '<b>ROI Image URI:</b><br><input id="roiUri" type="text"><br>';
  content += '<b>ROI Image Viewer:</b><br><center><img id="omniImg"></center>';
  content += '<button id="buttonShow">Show</button><br>';
  content += '<b>Params (Auto Increment):</b><br>';
  content += '<form>';
  content += '<select name="patterns">';
  content += '<option value="patternX" selected>Camera: X-coodinate</option>';
  content += '<option value="patternY">Camera: Y-coodinate</option>';
  content += '<option value="patternZ">Camera: Z-coodinate</option>';
  content += '<option value="patternRoll">Camera: Roll</option>';
  content += '<option value="patternYaw">Camera: Yaw</option>';
  content += '<option value="patternPitch">Camera: Pitch</option>';
  content += '<option value="patternFov">Camera: FOV</option>';
  content += '<option value="patternWidth">ROI Width</option>';
  content += '<option value="patternHeight">ROI Height</option>';
  content += '</select>';
  content += '</form>';
  content += '<button id="buttonStartPattern">Start Increment</button><br>';
  content += '<b>Params (Manual):</b><br>';
  content += '<button id="buttonSendParams">Send Params</button><br>';
  content += 'VR: ';
  content += '<form>';
  content += '<select name="vrMode">';
  content += '<option value="true">ON</option>';
  content += '<option value="false" selected>OFF</option>';
  content += '</select>';
  content += '</form>';
  content += 'Stereo: ';
  content += '<form>';
  content += '<select name="stereoMode">';
  content += '<option value="true">ON</option>';
  content += '<option value="false" selected>OFF</option>';
  content += '</select>';
  content += '</form>';
  content += 'X: <input id="paramX" type="text" value="0.25"><br>';
  content += 'Y: <input id="paramY" type="text" value="0"><br>';
  content += 'Z: <input id="paramZ" type="text" value="0"><br>';
  content += 'Roll: <input id="paramRoll" type="text" value="0"><br>';
  content += 'Yaw: <input id="paramYaw" type="text" value="0"><br>';
  content += 'Pitch: <input id="paramPitch" type="text" value="0"><br>';
  content += 'FOV: <input id="paramFov" type="text" value="90"><br>';
  content += 'Sphere Size: <input id="paramSphereSize" type="text" value="1.0"><br>';
  content += 'Width: <input id="paramWidth" type="text" value="' + defaultWidth + '"><br>';
  content += 'Height: <input id="paramHeight" type="text" value="' + defaultHeight + '"><br>';
　reloadContent(content);

  let omniUri;
  let roiUri;
  let imgType;
  let isStarted = false;

  let omniImg = $('#omniImg');
  omniImg.css('width', defaultWidth + 'px');
  omniImg.css('height', defaultHeight + 'px');
  omniImg.css('border', '1px solid #000000');
  omniImg.bind('error', function() {
    clearRefreshTimer();
    alert('Failed to show ROI image.');
  });
  omniImg.bind('load', function() {
    if (imgType === 'jpeg') {
      scheduleToRefresh(roiUri, 200);
    }
  });

  $('#buttonShutter').on('click', function() { shot(); });
  $('#buttonStartStop').on('click', function() { switchView(); });
  $('#buttonShow').on('click', function() { showViewImage(); });
  $('#buttonSendParams').on('click', function() { sendParams(); });
  $('#buttonStartPattern').on('click', function() { startSettingsPattern(); });


  // XXXX: For debug
  omniUri = 'http://192.168.1.15:8080/R0010162.JPG';
  $('#omniUri').val(omniUri);

  showOmniImageUpdatedDate();

  function shot() {
    searchTHETA().then(theta => {
      if (!theta) {
        alert('THETA is not found.');
        return;
      }
      sdk.post({
        profile: 'mediastreamrecording',
        attribute: 'takephoto',
        params: {
          serviceId: theta.id
        }
      }).then(json => {
          omniUri = json.uri;
          $('#omniUri').val(omniUri);

          showOmniImageUpdatedDate();
      }).catch(e => {
          alert('Failed to take photo.');
      });
    }).catch(e => {
      alert('Failed communication between Manager and this app.');
    });
  }

  function searchTHETA() {
    return new Promise((resolve, reject) => {
      sdk.discoverDevices().then(json => {
        let i,
            devices = json.services;
        for (i = 0; i < devices.length; i++) {
          let id = devices[i].id;
          if (id.indexOf('theta') >= 0) {
            resolve(devices[i]);
            return;
          }
        }
        resolve();
      }).catch(e => {
        console.error('Failed to search THETA: errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
        reject();
      });
    });
  }

  function sendParams() {
    if (roiUri === undefined) {
      alert('ROI Image View is not started.');
      return;
    }
    sdk.put({
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      params: {
        serviceId: serviceId,
        uri: roiUri,
        vr: $('[name=vrMode]').val(),
        stereo: $('[name=stereoMode]').val(),
        x: $('#paramX').val(),
        y: $('#paramY').val(),
        z: $('#paramZ').val(),
        roll: $('#paramRoll').val(),
        yaw: $('#paramYaw').val(),
        pitch: $('#paramPitch').val(),
        fov: $('#paramFov').val(),
        sphereSize: $('#paramSphereSize').val(),
        width: $('#paramWidth').val(),
        height: $('#paramHeight').val()
      }
    }).then(json => {}).catch(e => {
      alert('Faile to send settings: errorCode=' + e.errorCode + ' errorMessage=' + e.errorMessage);
    });
  }

  function switchView() {
    isStarted = !isStarted;
    if (isStarted) {
      startView({
        onstart: function(uri, type) {
          roiUri = uri;

          imgType = type;
          changeToStop($('#buttonStartStop'));
          $('#roiUri').val(uri);

        }
      });
    } else {
      stopView({
        onstop: function() {
          changeToStart($('#buttonStartStop'));
        }
      });
    }
  }

  function showOmniImageUpdatedDate() {
    $('#updatedDate').text('Last Updated: ' + new Date().toString());
  }

  function showViewImage() {
    omniImg.attr('src', roiUri.replace('localhost', ip));
  }

  function scheduleToRefresh(uri, delay) {
    if (showOmnidirectionalImage.timerId !== undefined) {
      return;
    }
    showOmnidirectionalImage.timerId = setInterval(function() {
      omniImg.attr('src', uri + '&timestamp=' + new Date().getTime());
    }, delay);
  }

  function clearRefreshTimer() {
    if (showOmnidirectionalImage.timerId !== undefined) {
      clearInterval(showOmnidirectionalImage.timerId);
      showOmnidirectionalImage.timerId = undefined;
    }
  }

  function startView(cb) {
    if ($('#omniUri').val() === '') {
      alert('Please push "Shot" button to take a photo.');
      return;
    }

    let outputParams = [];
    let overlaySwitch = $('[name=overlaySwitch]').val();
    let imageServerSwitch = $('[name=imageServerSwitch]').val();
    if (overlaySwitch !== 'off') {
      outputParams.push('overlay');
    }
    if (imageServerSwitch !== 'off') {
      outputParams.push('mjpeg');
    }

    let method;
    if (imageServerSwitch === 'jpeg') {
      method = 'GET';
    } else {
      method = 'PUT';
    }

    if (outputParams.length == 0) {
      alert('Please turn ON "Overlay" or "Image Server".');
      return;
    }
    function concat(array) {
      let i, result = '';
      for (i = 0; i < array.length; i++) {
        if (i > 0) {
          result += ',';
        }
        result += array[i];
      }
      return result;
    }

    sdk.sendRequest(method, {
      profile: 'omnidirectionalimage',
      attribute: 'roi',
      params: {
        serviceId: serviceId,
        source: $('#omniUri').val(),
        output: concat(outputParams)
      }
    }).then(json => {
      cb.onstart(json.uri, ((imageServerSwitch === 'off') ? null : imageServerSwitch));
    },
      function(errorCode, errorMessage) {
    });
  }

  function stopView(cb) {
    if (roiUri === undefined) {
      return;
    }
    clearRefreshTimer();

    sdk.delete({
      profile: 'omnidirectionalimage',
      attribute: 'roi',
      params: {
        serviceId: serviceId,
        uri: roiUri
      }
    }).then(json => {
        cb.onstop();
    })
  }

  function changeToStop(button) {
    button.text('Stop');
  }

  function changeToStart(button) {
    button.text('Start');
  }

  function findPattern(id) {
    let i, pattern;
    for (i = 0; i < paramIncrementPatterns.length; i++) {
      pattern = paramIncrementPatterns[i];
      if (pattern.id === id) {
        return pattern;
      }
    }
    return null;
  }

  function startSettingsPattern() {
    let patternId = $('[name=patterns]').val();
    let pattern = findPattern(patternId);
    if (!pattern) {
      return;
    }
    if (pattern.type === 'number') {
      pattern.execute = executePatternOfNumber;
    } else {
      alert('Fatal: specified type (' + pattern.type + ') of pattern is not defined.');
      return;
    }
    pattern.execute({
        pattern: pattern,
        onend: function() {
          alert('End of Auto Increment.');
        }
      });
  }

  function executePatternOfNumber(option, num) {
    if (num === undefined) {
      num = option.pattern.min;
    }
    let width = option.pattern.name === 'width' ? num : defaultWidth;
    let height = option.pattern.name === 'height' ? num : defaultHeight;
    let params = {
      profile: 'omnidirectionalimage',
      interface: 'roi',
      attribute: 'settings',
      params: {
        serviceId: serviceId,
        uri: roiUri,
        width: parseInt(width).toString(),
        height: parseInt(height).toString()
      }
    };
    if (option.pattern.name !== 'width' && option.pattern.name !== 'height') {
      params[option.pattern.name] = parseFloat(num.toString()).toFixed(3);
    }
    sdk.put(params).then(json => {
      setTimeout(() => {
        let nextNum = num + option.pattern.by;
        if (nextNum > option.pattern.max) {
          option.onend();
          return;
        }
        executePatternOfNumber(option, nextNum);
      }, 500);
    }).catch( e => {
      console.log(e.errorCode + ":" + e.errorMessage);
      alert('ERROR: Failed to send settings param.'+ e.errorCode + ":" + e.errorMessage);
    });

    $('#omniImg').css('width', width + 'px');
    $('#omniImg').css('height', height + 'px');
  }

}
