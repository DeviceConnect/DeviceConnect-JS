/**
 omnidirectionalimage.js
 Copyright (c) 2014 NTT DOCOMO,INC.
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

  var defaultWidth = 280;
  var defaultHeight = 210;
  var paramIncrementPatterns = [
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

  var btnStr = getBackButton('Device Top', 'doOmnidirectionalImageBack', serviceId, '');
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var content = '';
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

  var omniUri;
  var roiUri;
  var imgType;
  var isStarted = false;

  var omniImg = $('#omniImg');
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
  omniUri = 'http://192.168.1.59:8080/R0010162.JPG';
  $('#omniUri').val(omniUri);

  showOmniImageUpdatedDate();

  function shot() {
    searchTHETA({
      onfound: function(theta) {
        var uri = new dConnect.URIBuilder()
          .setProfile('mediastream_recording')
          .setAttribute('takephoto')
          .setServiceId(theta.id)
          .setAccessToken(accessToken)
          .build();
        dConnect.post(uri, null, null,
          function(json) {
            omniUri = json.uri;
            $('#omniUri').val(omniUri);

            showOmniImageUpdatedDate();
          },
          function(errorCode, errorMessage) {
            alert('Failed to take photo.');
          });
      },
      onnotfound: function() {
        alert('THETA is not found.');
      },
      onerror: function() {
        alert('Failed communication between Manager and this app.');
      }
    });
  }

  function searchTHETA(cb) {
    dConnect.discoverDevices(accessToken,
      function(json) {
        var i,
            devices = json.services;
        for (i = 0; i < devices.length; i++) {
          var id = devices[i].id;
          if (id.indexOf('theta') >= 0) {
            cb.onfound(devices[i]);
            return;
          }
        }
        cb.onnotfound();
      },
      function(errorCode, errorMessage) {
        console.error('Failed to search THETA: errorCode=' + errorCode + ' errorMessage=' + errorMessage);
        cb.onerror();
      });
  }

  function sendParams() {
    if (roiUri === undefined) {
      alert('ROI Image View is not started.');
      return;
    }
    var uri = new dConnect.URIBuilder()
      .setProfile('omnidirectional_image')
      .setInterface('roi')
      .setAttribute('settings')
      .setServiceId(serviceId)
      .setAccessToken(accessToken)
      .addParameter('uri', roiUri)
      .addParameter('vr', $('[name=vrMode]').val())
      .addParameter('stereo', $('[name=stereoMode]').val())
      .addParameter('x', $('#paramX').val())
      .addParameter('y', $('#paramY').val())
      .addParameter('z', $('#paramZ').val())
      .addParameter('roll', $('#paramRoll').val())
      .addParameter('yaw', $('#paramYaw').val())
      .addParameter('pitch', $('#paramPitch').val())
      .addParameter('fov', $('#paramFov').val())
      .addParameter('sphereSize', $('#paramSphereSize').val())
      .addParameter('width', $('#paramWidth').val())
      .addParameter('height', $('#paramHeight').val())
      .build();

    dConnect.put(uri, null, null,
      function(json) {
      },
      function(errorCode, errorMessage) {
        alert('Faile to send settings: errorCode=' + errorCode + ' errorMessage=' + errorMessage);
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

    var outputParams = [];
    var overlaySwitch = $('[name=overlaySwitch]').val();
    var imageServerSwitch = $('[name=imageServerSwitch]').val();
    if (overlaySwitch !== 'off') {
      outputParams.push('overlay');
    }
    if (imageServerSwitch !== 'off') {
      outputParams.push('mjpeg');
    }

    var method;
    if (imageServerSwitch === 'jpeg') {
      method = 'GET';
    } else {
      method = 'PUT';
    }

    if (outputParams.length == 0) {
      alert('Please turn ON "Overlay" or "Image Server".');
      return;
    }

    var uri = new dConnect.URIBuilder()
      .setProfile('omnidirectional_image')
      .setAttribute('roi')
      .setServiceId(serviceId)
      .setAccessToken(accessToken)
      .addParameter('source', $('#omniUri').val())
      .addParameter('output', concat(outputParams))
      .build();

    dConnect.sendRequest(method, uri, null, null,
      function(json) {
        cb.onstart(json.uri, ((imageServerSwitch === 'off') ? null : imageServerSwitch));
      },
      function(errorCode, errorMessage) {
      
      });

    function concat(array) {
      var i, result = '';
      for (i = 0; i < array.length; i++) {
        if (i > 0) {
          result += ',';
        }
        result += array[i];
      }
      return result;
    }
  }

  function stopView(cb) {
    if (roiUri === undefined) {
      return;
    }
    clearRefreshTimer();

    var uri = new dConnect.URIBuilder()
      .setProfile('omnidirectional_image')
      .setAttribute('roi')
      .setServiceId(serviceId)
      .setAccessToken(accessToken)
      .addParameter('uri', roiUri)
      .build();

    dConnect.delete(uri, null,
      function(json) {
        cb.onstop();
      },
      function(errorCode, errorMessage) {
      
      });
  }

  function changeToStop(button) {
    button.text('Stop');
  }

  function changeToStart(button) {
    button.text('Start');
  }

  function findPattern(id) {
    var i, pattern;
    for (i = 0; i < paramIncrementPatterns.length; i++) {
      pattern = paramIncrementPatterns[i];
      if (pattern.id === id) {
        return pattern;
      }
    }
    return null;
  }

  function startSettingsPattern() {
    var patternId = $('[name=patterns]').val();
    var pattern = findPattern(patternId);
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
    var width = option.pattern.name === 'width' ? num : defaultWidth;
    var height = option.pattern.name === 'height' ? num : defaultHeight;
    var uri = new dConnect.URIBuilder()
      .setProfile('omnidirectional_image')
      .setInterface('roi')
      .setAttribute('settings')
      .setServiceId(serviceId)
      .setAccessToken(accessToken)
      .addParameter('uri', roiUri)
      .addParameter('width', width.toString())
      .addParameter('height', height.toString())
      .addParameter(option.pattern.name, num.toString())
      .build();
    dConnect.put(uri, null, null,
      function(json) {

        setTimeout(function() {
          var nextNum = num + option.pattern.by;
          if (nextNum > option.pattern.max) {
            option.onend();
            return;
          }
          executePatternOfNumber(option, nextNum);
        }, 500);
      },
      function(errorCode, errorMessage) {
        alert('ERROR: Failed to send settings param.');
      });

    $('#omniImg').css('width', width + 'px');
    $('#omniImg').css('height', height + 'px');
  }

}

/**
 * Backボタン
 *
 * @param {String} serviceId サービスID
 * @param {String} sessionKey セッションKEY
 */
function doOmnidirectionalImageBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}