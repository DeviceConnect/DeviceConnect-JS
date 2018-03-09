/**
 ruleService.js
 Copyright (c) 2018 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

var ruleEngineServiceId = '';

/**
 * ルールエンジンデバイスの検索.
 */
function searchDeviceRuleEngine() {
  location.href = '#rulelist';
  setContents('#rulelistview', ' ');
  $('#rulelistview').listview().listview('refresh');
  $('#logdetailsText').val('');
  searchRuleServiceFromDevice('ruleList');
}

/**
 * ルールサービス搭載デバイスの検索.
 *
 * @param {String} select 表示画面選択
 */
function searchRuleServiceFromDevice(select) {
  initAll();
  closeLoading();
  showLoading();

  dConnect.setHost(ip);
  dConnect.discoverDevicesFromProfile("ruleService", accessToken, function(obj) {
    closeLoading();

    if(DEBUG) console.log("response: ", obj);

    if (select == 'ruleList') {
      showRuleServices(obj.services);
    } else if (select == 'errorList') {
      showErrorList(obj.services);
    } else if (select == 'andSelect') {
      showANDSelect(obj.services);
    }

  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      showLoading('Awaiting Your Approval...');
      authorization(function() {
        searchRuleServiceFromDevice(select);
      }, function() {
        closeLoading();
      });
    } else {
      alert('Error: code=' + errorCode + ', messsage=\"' + errorMessage + '\"');
    }
  });
}

/**
 * ルール一覧表示.
 */
function showRuleServices(services) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('ruleService');
  builder.setServiceId(services[0].id);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    var str = "";
    for (var i = 0; i < json.rules.length; i++) {
      var id = json.rules[i].ruleServiceId;
      var ruleServiceId = id.split('.', 1);
      str += '<li><a href="javascript:showRuleDetails(\'' + services[0].id + '\', \'' + json.rules[i].ruleServiceId + '\');">' + ruleServiceId + ' (' + json.rules[i].ruleServiceType + ') - ' + json.rules[i].description +'</a></li>';
    }
    deleteMode = false;
    setContents('#rulelistview', str);
    $('#rulelistview').listview().listview('refresh');

  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('ruleService', errorCode, errorMessage);
  });
}

/**
 * ルール詳細表示.
 */
function showRuleDetails(serviceId, ruleServiceId) {
  location.href = '#ruledetails';

  initAll();
  setContents('#rulelistview', ' ');

  var builder = new dConnect.URIBuilder();
  builder.setProfile('ruleService');
  builder.setServiceId(serviceId);
  builder.addParameter('ruleServiceId', ruleServiceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', JSON.stringify(json, null, ' '));
    }

    closeLoading();
    
    var str = JSON.stringify(json, null, ' ');
    $('#logdetailsText').val(str);
    
    var buttonStr ='';
    buttonStr += '<div data-role="controlgroup" data-type="horizontal">';
    buttonStr += '<input data-inline="true" data-mini="true" onclick="javascript:startRule(\'' + ruleServiceId + '\');" type="button" value="開始" />';
    buttonStr += '<input data-inline="true" data-mini="true" onclick="javascript:stopRule(\'' + ruleServiceId + '\');" type="button" value="停止" />';
    buttonStr += '<input data-inline="true" data-mini="true" onclick="javascript:removeRuleService(\'' + serviceId + '\', \'' + ruleServiceId + '\');" type="button" value="削除" />';
    buttonStr += '</div>';
    setContents('#buttongroup', buttonStr);
    
  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('ruleService', errorCode, errorMessage);
  });
}

/**
 * ルール開始処理.
 *
 * @param {String} ruleServiceId ルールのサービスID
 */
function startRule(ruleServiceId) {
    console.log('startRule - ruleServiceId: ' + ruleServiceId);
  var builder = new dConnect.URIBuilder();
  builder.setProfile('rule');
  builder.setAttribute('onOperation');
  builder.setServiceId(ruleServiceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('Success');
  }, function(errorCode, errorMessage) {
    showError('PUT rule', errorCode, errorMessage);
  });

}

/**
 * ルール停止処理.
 *
 * @param {String} ruleServiceId ルールのサービスID
 */
function stopRule(ruleServiceId) {
    console.log('stopRuleService - ruleServiceId: ' + ruleServiceId);
  var builder = new dConnect.URIBuilder();
  builder.setProfile('rule');
  builder.setAttribute('onOperation');
  builder.setServiceId(ruleServiceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('Success');
  }, function(errorCode, errorMessage) {
    showError('DELETE rule', errorCode, errorMessage);
  });
}

/**
 * ルール削除処理.
 *
 * @param {String} serviceId ルールサービスのサービスID
 * @param {String} ruleServiceId ルールのサービスID
 */
function removeRuleService(serviceId, ruleServiceId) {
    console.log('removeRuleService - ruleServiceId: ' + ruleServiceId);
  var builder = new dConnect.URIBuilder();
  builder.setProfile('ruleService');
  builder.setServiceId(serviceId);
  builder.addParameter('ruleServiceId', ruleServiceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.delete(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    alert('Success');
    searchDeviceRuleEngine();
  }, function(errorCode, errorMessage) {
    showError('DELETE ruleService', errorCode, errorMessage);
  });
}

/**
 * ルールエラー検索.
 */
function searchRuleError() {
  setContents('#errorlistview', ' ');
  $('#errorlistview').listview().listview('refresh');
  searchRuleServiceFromDevice('errorList');
}

/**
 * ルールエラー表示.
 *
 * @param {String} serviceId ルールサービスのサービスID
 * @param {String} ruleServiceId ルールのサービスID
 */
function showErrorList(services) {
  location.href = '#errorlist';
  setContents('#errorlistview', ' ');
  $('#errorlistview').listview().listview('refresh');

  var builder = new dConnect.URIBuilder();
  builder.setProfile('ruleService');
  builder.setAttribute('errorStatus');
  builder.setServiceId(services[0].id);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    var str = "";
    for (var i = 0; i < json.errors.length; i++) {
      if (json.errors[i].errorStatus != 'no_data') {
        var id = json.errors[i].ruleServiceId;
        var ruleServiceId = id.split('.', 1);
        str += '<li>' + json.errors[i].errorTimestamp + ' ' + ruleServiceId + ' - ' + json.errors[i].errorStatus +'</li>';
      }
    }
    deleteMode = false;
    setContents('#errorlistview', str);
    $('#errorlistview').listview().listview('refresh');

  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('ruleService', errorCode, errorMessage);
  });

}

/**
 * ルール生成表示.
 */
function showRuleCreate() {
  location.href = '#rulecreate';

  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  
  localStorage.clear();
  
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="#rule" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#rulecreateheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('subtitle');
  titleHtml.innerHTML = '<center><b>トリガーデバイスを選択</b></center>';

  closeLoading();
  showLoading();

  dConnect.setHost(ip);
  dConnect.discoverDevices(accessToken, function(obj){
    closeLoading();
    if(DEBUG) console.log("response: ", obj);
    var services = obj.services;
    var str = "";
        str += '<li><a href="javascript:showDateTimeSetting()" value="">' + 'Date&Time設定</a></li>';
        str += '<li><a href="javascript:showANDSetting()" value="">' + 'AND条件設定</a></li>';
    for (var i = 0; i < services.length; i++) {
      if (services[i].name == 'Host') {
        str += '<li><a href="javascript:searchSystemProfile(\'' + services[i].id + '\',\'' + services[i].name + '\', \'trigger\');" value="' + services[i].name + '">' + ' ' + services[i].name + '</a></li>';
      } else if (services[i].name == 'RuleEnginePlugin Service') {
        ruleEngineServiceId = services[i].id;
      }
    }
    deleteMode = false;
    setContents('#rulecreatepage', str);
    $('#rulecreatepage').listview().listview('refresh');

  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      showLoading('Awaiting Your Approval...');
      authorization(function() {
        showRuleCreate();
      }, function() {
        closeLoading();
      });
    } else {
      alert('Error: code=' + errorCode + ', messsage=\"' + errorMessage + '\"');
    }
  });
}

/**
 * Date&Time設定表示.
 */
function showDateTimeSetting() {
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#rulecreateheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('subtitle');
  titleHtml.innerHTML = '<center><b>Date&Time設定</b></center>';

  closeLoading();

  var str = '';
  str += '<form name="DateTimeForm">';
  str += '<label>トリガー成立条件:</label>';
  str += '<SELECT name="patternComparison" id="patternComparison">';
  str += '<OPTION value="LessThan">現在時刻が指定時刻より前</OPTION>';
  str += '<OPTION value="Below">現在時刻が指定時刻以前</OPTION>';
  str += '<OPTION value="Excess">現在時刻が指定時刻より後</OPTION>';
  str += '<OPTION value="NotLessThan">現在時刻が指定時刻以後</OPTION>';
  str += '<OPTION value="Between">現在時刻が指定時刻範囲内</OPTION>';
  str += '</SELECT>';
  str += '<label>指定時刻フォーマット:</label>';
  str += '<SELECT name="patternTimeFormat" id="patternTimeFormat">';
  str += '<OPTION value="TypeDateTime">年月日時分秒 (YYYY-MM-DDTHH:MM:SS.ZZZ)</OPTION>';
  str += '<OPTION value="TypeDate">年月日 (YYYY-MM-DD)</OPTION>';
  str += '<OPTION value="TypeTime">時分秒 (HH:MM:SS.ZZZ)</OPTION>';
  str += '</SELECT>';
  str += '<label>指定時刻:</label>';
  str += '<input type="text" name="specifiedDateTime" size="30" maxlength="30"/>';
  str += '<label>トリガー判定間隔:</label>';
  str += '<input type="text" name="triggerInterval" size="10" maxlength="10"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetDateTimeParam();"/><br>';

  setContents('#rulecreatecontents', str);
}

/**
 * Date&Time設定パラメータ保存.
 */
function doSetDateTimeParam() {
  /** パラメータ保存 */
  var triggerInterval = document.forms.DateTimeForm.triggerInterval.value;
  if (triggerInterval == '') {
    alert('[ Error ]\n「トリガー判定間隔」を設定してください。');
    return;
  }
  localStorage.triggerInterval = triggerInterval;
  localStorage.triggerIntervalUnit = document.forms.DateTimeForm.patternUnit.value;
  localStorage.triggerIntervalReferenceTime = 'noSetting';
  localStorage.trigger_rest = 'Date&Time';
  if (localStorage.triggerAction != null) {
    localStorage.removeItem(triggerAction);
  }
  if (localStorage.triggerParameter != null) {
　　  localStorage.removeItem(triggerParameter);
  }
  localStorage.comparison = document.forms.DateTimeForm.patternComparison.value;
  var specifiedDateTime = document.forms.DateTimeForm.specifiedDateTime.value;
  if (specifiedDateTime == '') {
    alert('[ Error ]\n「指定時刻」を設定してください。');
    return;
  }
  localStorage.comparisonLeft = 'DateTime';
  localStorage.comparisonRight = specifiedDateTime;
  localStorage.comparisonLeftDataType = localStorage.comparisonRightDataType = document.forms.DateTimeForm.patternTimeFormat.value;
  
  if (DEBUG) {
    console.log('triggerInterval             : ', localStorage.triggerInterval);
    console.log('triggerIntervalUnit         : ', localStorage.triggerIntervalUnit);
    console.log('triggerIntervalReferenceTime: ', localStorage.triggerIntervalReferenceTime);
    console.log('trigger_rest                : ', localStorage.trigger_rest);
    console.log('triggerAction               : ', localStorage.triggerAction);
    console.log('triggerParameter            : ', localStorage.triggerParameter);
    console.log('comparisonLeft              : ', localStorage.comparisonLeft);
    console.log('comparisonLeftDataType      : ', localStorage.comparisonLeftDataType);
    console.log('comparison                  : ', localStorage.comparison);
    console.log('comparisonRight             : ', localStorage.comparisonRight);
    console.log('comparisonRightDataType     : ', localStorage.comparisonRightDataType);
  }
  
  /** 次画面遷移 */
  showSelectOperation();
}

/**
 * AND条件設定表示.
 */
function showANDSetting() {
  location.href = '#andrulecreate';

  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');

  searchRuleServiceFromDevice('andSelect');
  
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#andrulecreateheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('subtitle');
  titleHtml.innerHTML = '<center><b>AND条件設定</b></center>';

  closeLoading();

  var str = '';
  str += '<form name="ANDForm">';
  str += '<label>AND成立判定時間:</label>';
  str += '<input type="text" name="judgementTime" size="10" maxlength="10"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetANDParam();"/><br>';

  setContents('#andrulecreatecontents', str);
}

/**
 * AND条件用ルール一覧表示.
 */
function showANDSelect(services) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('ruleService');
  builder.setServiceId(services[0].id);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  closeLoading();
  showLoading();

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    var str = "";
    str += '<form name="ruleForm">';
    for (var i = 0; i < json.rules.length; i++) {
      str += '<li><input type="checkbox" name="andId" value="' + json.rules[i].ruleServiceId + '">　　' + json.rules[i].ruleServiceId + ' (' + json.rules[i].ruleServiceType + ') - ' + json.rules[i].description +'</li>';
    }
    str += '</form>';
    deleteMode = false;
    setContents('#andrulecreatepage', str);
    $('#andrulecreatepage').listview().listview('refresh');

  }, function(errorCode, errorMessage) {
    closeLoading();
    showError('ruleService', errorCode, errorMessage);
  });
}

/**
 * AND条件設定パラメータ保存.
 */
function doSetANDParam() {
  /** パラメータ保存 */
  var andRuleServiceId = '';
  var andId = document.forms.ruleForm.andId;
  var count = 0;
  
  for (var i = 0; i < andId.length; i++) {
    if (andId[i].checked) {
      if (count != 0) {
        andRuleServiceId += ',';
      }
      andRuleServiceId += andId[i].value;
      count++;
    }
  }
  if (count <= 1) {
    alert('[ Error ]\n「AND条件」を設定してください。');
    return;
  }
  
  localStorage.andRuleServiceId = andRuleServiceId;

  var judgementTime = document.forms.ANDForm.judgementTime.value;
  if (judgementTime == '') {
    alert('[ Error ]\n「AND成立判定時間」を設定してください。');
    return;
  }
  localStorage.judgementTime = judgementTime;
  localStorage.judgementTimeUnit = document.forms.ANDForm.patternUnit.value;
  
  if (DEBUG) {
    console.log('andRuleServiceId : ', localStorage.andRuleServiceId);
    console.log('judgementTime    : ', localStorage.judgementTime);
    console.log('judgementTimeUnit: ', localStorage.judgementTimeUnit);
  }
  
  /** 次画面遷移 */
  showSelectOperation();
}

/**
 * トリガー・オペレーション設定用プロファイルの検索.
 *
 * @param {String} serviceId サービスID
 * @param {String} deviceName デバイス名
 * @param {String} mode 選択モード
 */
function searchSystemProfile(serviceId, deviceName, mode) {
  if (deviceName !== undefined) {
    // 第2引数が空でない場合、代入を行う。
    myDeviceName = deviceName;
  }

  if (DEBUG) {
    console.log(myDeviceName);
  }

  location.href = '#selectprofile';

  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  if (mode == 'trigger') {
    headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  } else if (mode == 'operation') {
    headerStr += '<a href="javascript:showSelectOperation()" data-ajax="false" data-icon="back">Back</a>';
  }
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#selectprofileheader', headerStr);
  
  var builder = new dConnect.URIBuilder();
  builder.setProfile('serviceinformation');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response:', json);
    }

    if (json.result === 0) {
      var str = '';
      for (var i = 0; i < json.supports.length; i++) {
        if (mode == 'trigger') {
          if (json.supports[i] == 'battery' ||
              json.supports[i] == 'deviceOrientation' ||
              json.supports[i] == 'geolocation' ||
              json.supports[i] == 'proximity') {
            str += '<li><a href="javascript:searchProfileForTrigger(\'' + serviceId + '\', ';
            str += '\'' + json.supports[i] + '\');" ';
            str += 'value="' + json.supports[i] + '">';
            str += json.supports[i] + '</a></li>';
          }
        } else if (mode == 'operation') {
          if (json.supports[i] == 'light' ||
              json.supports[i] == 'mediaStreamRecording' ||
              json.supports[i] == 'notification' ||
              json.supports[i] == 'vibration') {
            str += '<li><a href="javascript:searchProfileForOperation(\'' + serviceId + '\', ';
            str += '\'' + json.supports[i] + '\');" ';
            str += 'value="' + json.supports[i] + '">';
            str += json.supports[i] + '</a></li>';
          }
        }
      }

      deleteMode = false;
      setContents('#selectprofilepage', str);
      $('#selectprofilepage').listview().listview('refresh');
      
      var titleHtml = document.getElementById('selectprofilesubtitle');
      if (mode == 'trigger') {
        titleHtml.innerHTML = '<center><b>トリガーとするプロファイルを選択</b></center>';
      } else if (mode == 'operation'){
        titleHtml.innerHTML = '<center><b>オペレーションとするプロファイルを選択</b></center>';
      }
    } else {
      var errorCode = json.errorCode;
      var errorMessage = json.errorMessage;
      if (DEBUG) {
        console.log('Error: ' + errorCode + ': ' + errorMessage);
      }
      showError('serviceinformation', json);
    }
  }, function(errorCode, errorMessage) {
    showError('GET /serviceinformation', errorCode, errorMessage);
  });
}

/**
 * トリガー設定用画面表示.
 *
 * @param {String} serviceId ルールサービスのサービスID
 * @param {String} profile プロファイル名
 */
function searchProfileForTrigger(serviceId, profile) {
  if (isEqualToStringIgnoreCase(profile, dConnect.constants.battery.PROFILE_NAME)) {
    showSetTriggerBattery(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnect.constants.device_orientation.PROFILE_NAME)) {
    showSetTriggerDeviceOrientation(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, 'geolocation')) {
    showSetTriggerGeolocation(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnect.constants.proximity.PROFILE_NAME)) {
    showSetTriggerProximity(serviceId);
  }
}

/**
 * オペレーション設定用画面表示.
 *
 * @param {String} serviceId ルールサービスのサービスID
 * @param {String} profile プロファイル名
 */
function searchProfileForOperation(serviceId, profile) {
  if (isEqualToStringIgnoreCase(profile, 'light')) {
    showSetOperationLight(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnect.constants.media_stream_recording.PROFILE_NAME)) {
    showSetOperationMediaStreamRecording(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnect.constants.notification.PROFILE_NAME)) {
    showSetOperationNotification(serviceId);
  } else if (isEqualToStringIgnoreCase(profile, dConnect.constants.vibration.PROFILE_NAME)) {
    showSetOperationVibration(serviceId);
  }
}

/**
 * トリガー設定用画面表示（Battery）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetTriggerBattery(serviceId) {
  location.href = '#settrigger';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#settriggerheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('settriggersubtitle');
  titleHtml.innerHTML = '<center><b>トリガー条件設定</b></center>';
  
  var str = '';
  str += '<form name="BatteryForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest" onchange="setBatteryComparison(\'' + serviceId + '\')">';
  str += '<OPTION value="no_select">REST選択</OPTION>';
  str += '<OPTION value="/gotapi/battery/level">GET /gotapi/battery/level</OPTION>';
  str += '<OPTION value="/gotapi/battery/charging">GET /gotapi/battery/charging</OPTION>';
  str += '</SELECT>';
  str += '<label>比較条件:</label>';
  str += '<SELECT name="patternLeft" id="patternLeft">';
  str += '<OPTION value="no_select">右辺値選択</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternComparison" id="patternComparison">';
  str += '<OPTION value="no_select">比較子選択</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternRight" id="patternRight">';
  str += '<OPTION value="no_select">左辺値選択</OPTION>';
  str += '</SELECT>';
  str += '<label>トリガー判定間隔:</label>';
  str += '<input type="number" name="triggerInterval" step="1" min="0"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '<label>実行開始タイミング:</label>';
  str += '<SELECT name="triggerStartTiming" id="triggerStartTiming">';
  str += '<OPTION value="noSetting">指定なし</OPTION>';
  str += '<OPTION value="ref00Seconds">毎00秒</OPTION>';
  str += '<OPTION value="ref10Seconds">毎10秒</OPTION>';
  str += '<OPTION value="ref20Seconds">毎20秒</OPTION>';
  str += '<OPTION value="ref30Seconds">毎30秒</OPTION>';
  str += '<OPTION value="ref40Seconds">毎40秒</OPTION>';
  str += '<OPTION value="ref50Seconds">毎50秒</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetBatteryTriggerParam(\'' + serviceId + '\');"/><br>';

  setContents('#settriggercontents', str);
}

/**
 * 比較条件表示切り替え（Battery）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function setBatteryComparison(serviceId) {
  var str = '';
  str += '<form name="BatteryForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest" onchange="setBatteryComparison()">';

  switch (document.BatteryForm.patternRest.selectedIndex) {
    case 0:
      str += '<OPTION value="no_select" selected>REST選択</OPTION>';
      str += '<OPTION value="/gotapi/battery/level">GET /gotapi/battery/level</OPTION>';
      str += '<OPTION value="/gotapi/battery/charging">GET /gotapi/battery/charging</OPTION>';
      str += '</SELECT>';
      str += '<label>比較条件:</label>';
      str += '<SELECT name="patternLeft" id="patternLeft">';
      str += '<OPTION value="no_select">右辺値選択</OPTION>';
      str += '</SELECT>';
      str += '<SELECT name="patternComparison" id="patternComparison">';
      str += '<OPTION value="no_select">比較子選択</OPTION>';
      str += '</SELECT>';
      str += '<SELECT name="patternRight" id="patternRight">';
      str += '<OPTION value="no_select">左辺値選択</OPTION>';
      str += '</SELECT>';
      break;
    case 1:
      str += '<OPTION value="no_select">REST選択</OPTION>';
      str += '<OPTION value="/gotapi/battery/level" selected>GET /gotapi/battery/level</OPTION>';
      str += '<OPTION value="/gotapi/battery/charging">GET /gotapi/battery/charging</OPTION>';
      str += '</SELECT>';
      str += '<label>比較条件:</label>';
      str += '<SELECT name="patternLeft" id="patternLeft">';
      str += '<OPTION value="level" selected>level</OPTION>';
      str += '</SELECT>';
      str += '<SELECT name="patternComparison" id="patternComparison">';
      str += '<OPTION value="no_select">比較子選択</OPTION>';
      str += '<OPTION value="LessThan">＞</OPTION>';
      str += '<OPTION value="Below">≧</OPTION>';
      str += '<OPTION value="Excess">＜</OPTION>';
      str += '<OPTION value="NotLessThan">≦</OPTION>';
      str += '</SELECT>';
      str += '<input type="number" name="patternRight" min="0.0" max="1.0" step="0.01" value="1.0"/>';
      break;
    case 2:
      str += '<OPTION value="no_select">REST選択</OPTION>';
      str += '<OPTION value="/gotapi/battery/level">GET /gotapi/battery/level</OPTION>';
      str += '<OPTION value="/gotapi/battery/charging" selected>GET /gotapi/battery/charging</OPTION>';
      str += '</SELECT>';
      str += '<label>比較条件:</label>';
      str += '<SELECT name="patternLeft" id="patternLeft">';
      str += '<OPTION value="charging" selected>charging</OPTION>';
      str += '</SELECT>';
      str += '<SELECT name="patternComparison" id="patternComparison">';
      str += '<OPTION value="Equal">＝</OPTION>';
      str += '</SELECT>';
      str += '<SELECT name="patternRight" id="patternRight">';
      str += '<OPTION value="no_select">左辺値選択</OPTION>';
      str += '<OPTION value="true">true</OPTION>';
      str += '<OPTION value="false">false</OPTION>';
      str += '</SELECT>';
      break;
  }
  str += '<label>トリガー判定間隔:</label>';
  str += '<input type="number" name="triggerInterval" step="1" min="0"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '<label>実行開始タイミング:</label>';
  str += '<SELECT name="triggerStartTiming" id="triggerStartTiming">';
  str += '<OPTION value="noSetting">指定なし</OPTION>';
  str += '<OPTION value="ref00Seconds">毎00秒</OPTION>';
  str += '<OPTION value="ref10Seconds">毎10秒</OPTION>';
  str += '<OPTION value="ref20Seconds">毎20秒</OPTION>';
  str += '<OPTION value="ref30Seconds">毎30秒</OPTION>';
  str += '<OPTION value="ref40Seconds">毎40秒</OPTION>';
  str += '<OPTION value="ref50Seconds">毎50秒</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetBatteryTriggerParam(\'' + serviceId + '\');"/><br>';

  setContents('#settriggercontents', str);
}

/**
 * トリガー設定保存（Battery）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function doSetBatteryTriggerParam(serviceId) {
  var index;
  /** パラメータ保存 */
  var triggerInterval = document.forms.BatteryForm.triggerInterval.value;
  if (triggerInterval == '') {
    alert('[ Error ]\n「トリガー判定間隔」を設定してください。');
    return;
  }
  localStorage.triggerInterval = triggerInterval;
  localStorage.triggerIntervalUnit = document.forms.BatteryForm.patternUnit.value;
  
  localStorage.triggerIntervalReferenceTime = document.forms.BatteryForm.triggerStartTiming.value;

  var patternRest = document.forms.BatteryForm.patternRest.value;
  if (patternRest == '' || patternRest == 'no_select') {
    alert('[ Error ]\n「REST」を設定してください。');
    return;
  }
  localStorage.trigger_rest = patternRest;

  localStorage.triggerAction = 'GET';
  localStorage.triggerParameter_serviceId = serviceId;
  if (localStorage.triggerParameter_others != null) {
    localStorage.removeItem(triggerParameter_others);
  }

  index = document.BatteryForm.patternRest.selectedIndex;
  var comparisonRight = document.forms.BatteryForm.patternRight.value;
  if (comparisonRight == '' || comparisonRight == 'no_select') {
    alert('[ Error ]\n「比較条件:右辺値」を設定してください。');
    return;
  }
  localStorage.comparisonRight = comparisonRight;
  switch (index) {
    case 1:
      localStorage.comparisonRightDataType = 'TypeFloat';
      break;
    case 2:
      localStorage.comparisonRightDataType = 'TypeString';
      break;
  }
  
  var patternLeft = document.forms.BatteryForm.patternLeft.value;
  if (patternLeft == '' || patternLeft == 'no_select') {
    alert('[ Error ]\n「比較条件:左辺値」を設定してください。');
    return;
  }
  localStorage.comparisonLeft = patternLeft;

  index = document.BatteryForm.patternRest.selectedIndex;
  switch (index) {
    case 1: localStorage.comparisonLeftDataType = 'TypeJsonFloat'; break;
    case 2: localStorage.comparisonLeftDataType = 'TypeJsonString'; break;
  }
  
  var comparison = document.forms.BatteryForm.patternComparison.value;
  if (comparison == '' || comparison == 'no_select') {
    alert('[ Error ]\n「比較条件:比較子」を設定してください。');
    return;
  }
  localStorage.comparison = comparison;
  
  if (DEBUG) {
    console.log('triggerInterval             : ', localStorage.triggerInterval);
    console.log('triggerIntervalUnit         : ', localStorage.triggerIntervalUnit);
    console.log('triggerIntervalReferenceTime: ', localStorage.triggerIntervalReferenceTime);
    console.log('trigger_rest                : ', localStorage.trigger_rest);
    console.log('triggerAction               : ', localStorage.triggerAction);
    console.log('triggerParameter_serviceId  : ', localStorage.triggerParameter_serviceId);
    console.log('triggerParameter_others     : ', localStorage.triggerParameter_others);
    console.log('comparisonLeft              : ', localStorage.comparisonLeft);
    console.log('comparisonLeftDataType      : ', localStorage.comparisonLeftDataType);
    console.log('comparison                  : ', localStorage.comparison);
    console.log('comparisonRight             : ', localStorage.comparisonRight);
    console.log('comparisonRightDataType     : ', localStorage.comparisonRightDataType);
  }
  
  /** 次画面遷移 */
  showSelectOperation();
}

/**
 * トリガー設定用画面表示（DeviceOrientation）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetTriggerDeviceOrientation(serviceId) {
  location.href = '#settrigger';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#settriggerheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('settriggersubtitle');
  titleHtml.innerHTML = '<center><b>トリガー条件設定</b></center>';
  
  var str = '';
  str += '<form name="DeviceOrientationForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/deviceOrientation/onDeviceOrientation">GET /gotapi/deviceOrientation/onDeviceOrientation</OPTION>';
  str += '</SELECT>';
  str += '<label>比較条件:</label>';
  str += '<SELECT name="patternLeft" id="patternLeft">';
  str += '<OPTION value="no_select">右辺値選択</OPTION>';
  str += '<OPTION value="orientation.acceleration.x">orientation.acceleration.x</OPTION>';
  str += '<OPTION value="orientation.acceleration.y">orientation.acceleration.y</OPTION>';
  str += '<OPTION value="orientation.acceleration.z">orientation.acceleration.z</OPTION>';
  str += '<OPTION value="orientation.accelerationIncludingGravity.x">orientation.accelerationIncludingGravity.x</OPTION>';
  str += '<OPTION value="orientation.accelerationIncludingGravity.y">orientation.accelerationIncludingGravity.y</OPTION>';
  str += '<OPTION value="orientation.accelerationIncludingGravity.z">orientation.accelerationIncludingGravity.z</OPTION>';
  str += '<OPTION value="orientation.rotationRate.alpha">orientation.rotationRate.alpha</OPTION>';
  str += '<OPTION value="orientation.rotationRate.beta">orientation.rotationRate.beta</OPTION>';
  str += '<OPTION value="orientation.rotationRate.gamma">orientation.rotationRate.gamma</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternComparison" id="patternComparison">';
  str += '<OPTION value="no_select">比較子選択</OPTION>';
  str += '<OPTION value="LessThan">＞</OPTION>';
  str += '<OPTION value="Below">≧</OPTION>';
  str += '<OPTION value="Excess">＜</OPTION>';
  str += '<OPTION value="NotLessThan">≦</OPTION>';
  str += '</SELECT>';
  str += '<input type="number" name="patternRight" />';
  str += '<label>トリガー判定間隔:</label>';
  str += '<input type="number" name="triggerInterval" step="1" min="0"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '<label>実行開始タイミング:</label>';
  str += '<SELECT name="triggerStartTiming" id="triggerStartTiming">';
  str += '<OPTION value="noSetting">指定なし</OPTION>';
  str += '<OPTION value="ref00Seconds">毎00秒</OPTION>';
  str += '<OPTION value="ref10Seconds">毎10秒</OPTION>';
  str += '<OPTION value="ref20Seconds">毎20秒</OPTION>';
  str += '<OPTION value="ref30Seconds">毎30秒</OPTION>';
  str += '<OPTION value="ref40Seconds">毎40秒</OPTION>';
  str += '<OPTION value="ref50Seconds">毎50秒</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetDeviceOrientationTriggerParam(\'' + serviceId + '\');"/><br>';

  setContents('#settriggercontents', str);
}

/**
 * トリガー設定保存（DeviceOrientation）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function doSetDeviceOrientationTriggerParam(serviceId) {
  var index;
  /** パラメータ保存 */
  var triggerInterval = document.forms.DeviceOrientationForm.triggerInterval.value;
  if (triggerInterval == '') {
    alert('[ Error ]\n「トリガー判定間隔」を設定してください。');
    return;
  }
  localStorage.triggerInterval = triggerInterval;
  localStorage.triggerIntervalUnit = document.forms.DeviceOrientationForm.patternUnit.value;
  
  index = document.DeviceOrientationForm.triggerStartTiming.selectedIndex;
  localStorage.triggerIntervalReferenceTime = document.DeviceOrientationForm.triggerStartTiming.options[index].value;

  localStorage.trigger_rest = document.forms.DeviceOrientationForm.patternRest.value;
  localStorage.triggerAction = 'GET';
  localStorage.triggerParameter_serviceId = serviceId;
  if (localStorage.triggerParameter_others != null) {
    localStorage.removeItem(triggerParameter_others);
  }

  var comparisonRight = document.forms.DeviceOrientationForm.patternRight.value;
  if (comparisonRight == '' || comparisonRight == 'no_select') {
    alert('[ Error ]\n「比較条件:右辺値」を設定してください。');
    return;
  }
  localStorage.comparisonRight = comparisonRight;
  localStorage.comparisonRightDataType = 'TypeFloat';

  var patternLeft = document.forms.DeviceOrientationForm.patternLeft.value;
  if (patternLeft == '' || patternLeft == 'no_select') {
    alert('[ Error ]\n「比較条件:左辺値」を設定してください。');
    return;
  }
  localStorage.comparisonLeft = patternLeft;
  localStorage.comparisonLeftDataType = 'TypeJsonFloat';

  var comparison = document.forms.DeviceOrientationForm.patternComparison.value;
  if (comparison == '' || comparison == 'no_select') {
    alert('[ Error ]\n「比較条件:比較子」を設定してください。');
    return;
  }
  localStorage.comparison = comparison;
  
  if (DEBUG) {
    console.log('triggerInterval             : ', localStorage.triggerInterval);
    console.log('triggerIntervalUnit         : ', localStorage.triggerIntervalUnit);
    console.log('triggerIntervalReferenceTime: ', localStorage.triggerIntervalReferenceTime);
    console.log('trigger_rest                : ', localStorage.trigger_rest);
    console.log('triggerAction               : ', localStorage.triggerAction);
    console.log('triggerParameter_serviceId  : ', localStorage.triggerParameter_serviceId);
    console.log('triggerParameter_others     : ', localStorage.triggerParameter_others);
    console.log('comparisonLeft              : ', localStorage.comparisonLeft);
    console.log('comparisonLeftDataType      : ', localStorage.comparisonLeftDataType);
    console.log('comparison                  : ', localStorage.comparison);
    console.log('comparisonRight             : ', localStorage.comparisonRight);
    console.log('comparisonRightDataType     : ', localStorage.comparisonRightDataType);
  }
  
  /** 次画面遷移 */
  showSelectOperation();
}

/**
 * トリガー設定用画面表示（Geolocation）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetTriggerGeolocation(serviceId) {
  location.href = '#settrigger';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#settriggerheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('settriggersubtitle');
  titleHtml.innerHTML = '<center><b>トリガー条件設定</b></center>';
  
  var str = '';
  str += '<form name="GeolocationForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/geolocation/currentPosition">GET /gotapi/geolocation/currentPosition</OPTION>';
  str += '</SELECT>';
  str += '<label>比較条件:</label>';
  str += '<SELECT name="patternLeft" id="patternLeft">';
  str += '<OPTION value="no_select">右辺値選択</OPTION>';
  str += '<OPTION value="position.coordinates.latitude">position.coordinates.latitude</OPTION>';
  str += '<OPTION value="position.coordinates.longitude">position.coordinates.longitude</OPTION>';
  str += '<OPTION value="position.coordinates.altitude">position.coordinates.altitude</OPTION>';
  str += '<OPTION value="position.coordinates.heading">position.coordinates.heading</OPTION>';
  str += '<OPTION value="position.coordinates.speed">position.coordinates.speed</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternComparison" id="patternComparison">';
  str += '<OPTION value="no_select">比較子選択</OPTION>';
  str += '<OPTION value="LessThan">＞</OPTION>';
  str += '<OPTION value="Below">≧</OPTION>';
  str += '<OPTION value="Excess">＜</OPTION>';
  str += '<OPTION value="NotLessThan">≦</OPTION>';
  str += '<OPTION value="Between">A 〜 B</OPTION>';
  str += '</SELECT>';
  str += '<input type="text" name="patternRight" size="40" maxlength="40"/>';
  str += '<label>トリガー判定間隔:</label>';
  str += '<input type="number" name="triggerInterval" step="1" min="0"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '<label>実行開始タイミング:</label>';
  str += '<SELECT name="triggerStartTiming" id="triggerStartTiming">';
  str += '<OPTION value="noSetting">指定なし</OPTION>';
  str += '<OPTION value="ref00Seconds">毎00秒</OPTION>';
  str += '<OPTION value="ref10Seconds">毎10秒</OPTION>';
  str += '<OPTION value="ref20Seconds">毎20秒</OPTION>';
  str += '<OPTION value="ref30Seconds">毎30秒</OPTION>';
  str += '<OPTION value="ref40Seconds">毎40秒</OPTION>';
  str += '<OPTION value="ref50Seconds">毎50秒</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetGeolocationTriggerParam(\'' + serviceId + '\');"/><br>';

  setContents('#settriggercontents', str);
}

/**
 * トリガー設定保存（Geolocation）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function doSetGeolocationTriggerParam(serviceId) {
  var index;
  /** パラメータ保存 */
  var triggerInterval = document.forms.GeolocationForm.triggerInterval.value;
  if (triggerInterval == '') {
    alert('[ Error ]\n「トリガー判定間隔」を設定してください。');
    return;
  }
  localStorage.triggerInterval = triggerInterval;
  localStorage.triggerIntervalUnit = document.forms.GeolocationForm.patternUnit.value;
  
  index = document.GeolocationForm.triggerStartTiming.selectedIndex;
  localStorage.triggerIntervalReferenceTime = document.GeolocationForm.triggerStartTiming.options[index].value;

  localStorage.trigger_rest = document.forms.GeolocationForm.patternRest.value;
  localStorage.triggerAction = 'GET';
  localStorage.triggerParameter_serviceId = serviceId;
  if (localStorage.triggerParameter_others != null) {
    localStorage.removeItem(triggerParameter_others);
  }

  var comparisonRight = document.forms.GeolocationForm.patternRight.value;
  if (comparisonRight == '' || comparisonRight == 'no_select') {
    alert('[ Error ]\n「比較条件:右辺値」を設定してください。');
    return;
  }
  localStorage.comparisonRight = comparisonRight;
  localStorage.comparisonRightDataType = 'TypeString';

  var patternLeft = document.forms.GeolocationForm.patternLeft.value;;
  if (patternLeft == '' || patternLeft == 'no_select') {
    alert('[ Error ]\n「比較条件:左辺値」を設定してください。');
    return;
  }
  localStorage.comparisonLeft = patternLeft;
  localStorage.comparisonLeftDataType = 'TypeJsonFloat';

  var comparison = document.forms.GeolocationForm.patternComparison.value;
  if (comparison == '' || comparison == 'no_select') {
    alert('[ Error ]\n「比較条件:比較子」を設定してください。');
    return;
  }
  localStorage.comparison = comparison;
  
  if (DEBUG) {
    console.log('triggerInterval             : ', localStorage.triggerInterval);
    console.log('triggerIntervalUnit         : ', localStorage.triggerIntervalUnit);
    console.log('triggerIntervalReferenceTime: ', localStorage.triggerIntervalReferenceTime);
    console.log('trigger_rest                : ', localStorage.trigger_rest);
    console.log('triggerAction               : ', localStorage.triggerAction);
    console.log('triggerParameter_serviceId  : ', localStorage.triggerParameter_serviceId);
    console.log('triggerParameter_others     : ', localStorage.triggerParameter_others);
    console.log('comparisonLeft              : ', localStorage.comparisonLeft);
    console.log('comparisonLeftDataType      : ', localStorage.comparisonLeftDataType);
    console.log('comparison                  : ', localStorage.comparison);
    console.log('comparisonRight             : ', localStorage.comparisonRight);
    console.log('comparisonRightDataType     : ', localStorage.comparisonRightDataType);
  }
  
  /** 次画面遷移 */
  showSelectOperation();
}

/**
 * トリガー設定用画面表示（Proximity）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetTriggerProximity(serviceId) {
  location.href = '#settrigger';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#settriggerheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('settriggersubtitle');
  titleHtml.innerHTML = '<center><b>トリガー条件設定</b></center>';
  
  var str = '';
  str += '<form name="ProximityForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/proximity/onUserProximity">GET /gotapi/proximity/onUserProximity</OPTION>';
  str += '</SELECT>';
  str += '<label>比較条件:</label>';
  str += '<SELECT name="patternLeft" id="patternLeft">';
  str += '<OPTION value="proximity.near">proximity.near</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternComparison" id="patternComparison">';
  str += '<OPTION value="Equal">＝</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternRight" id="patternRight">';
  str += '<OPTION value="no_select">左辺値選択</OPTION>';
  str += '<OPTION value="true">true</OPTION>';
  str += '<OPTION value="false">false</OPTION>';
  str += '</SELECT>';
  str += '<label>トリガー判定間隔:</label>';
  str += '<input type="number" name="triggerInterval" step="1" min="0"/>';
  str += '<SELECT name="patternUnit" id="patternUnit">';
  str += '<OPTION value="mSec">ミリ秒</OPTION>';
  str += '<OPTION value="second">秒</OPTION>';
  str += '<OPTION value="minute">分</OPTION>';
  str += '<OPTION value="hour">時</OPTION>';
  str += '<OPTION value="day">日</OPTION>';
  str += '</SELECT>';
  str += '<label>実行開始タイミング:</label>';
  str += '<SELECT name="triggerStartTiming" id="triggerStartTiming">';
  str += '<OPTION value="noSetting">指定なし</OPTION>';
  str += '<OPTION value="ref00Seconds">毎00秒</OPTION>';
  str += '<OPTION value="ref10Seconds">毎10秒</OPTION>';
  str += '<OPTION value="ref20Seconds">毎20秒</OPTION>';
  str += '<OPTION value="ref30Seconds">毎30秒</OPTION>';
  str += '<OPTION value="ref40Seconds">毎40秒</OPTION>';
  str += '<OPTION value="ref50Seconds">毎50秒</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetProximityTriggerParam(\'' + serviceId + '\');"/><br>';

  setContents('#settriggercontents', str);
}

/**
 * トリガー設定保存（Proximity）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function doSetProximityTriggerParam(serviceId) {
  /** パラメータ保存 */
  var triggerInterval = document.forms.ProximityForm.triggerInterval.value;
  if (triggerInterval == '') {
    alert('[ Error ]\n「トリガー判定間隔」を設定してください。');
    return;
  }
  localStorage.triggerInterval = triggerInterval;
  localStorage.triggerIntervalUnit = document.forms.ProximityForm.patternUnit.value;
  
  localStorage.triggerIntervalReferenceTime = document.forms.ProximityForm.triggerStartTiming.value;

  localStorage.trigger_rest = document.forms.ProximityForm.patternRest.value;

  localStorage.triggerAction = 'GET';
  localStorage.triggerParameter_serviceId = serviceId;
  if (localStorage.triggerParameter_others != null) {
    localStorage.removeItem(triggerParameter_others);
  }

  var comparisonRight = document.forms.ProximityForm.patternRight.value;
  if (comparisonRight == '' || comparisonRight == 'no_select') {
    alert('[ Error ]\n「比較条件:右辺値」を設定してください。');
    return;
  }
  localStorage.comparisonRight = comparisonRight;
  localStorage.comparisonRightDataType = 'TypeString';
  
  localStorage.comparisonLeft = document.forms.ProximityForm.patternLeft.value;
  localStorage.comparisonLeftDataType = 'TypeJsonString';
  
  localStorage.comparison = document.forms.ProximityForm.patternComparison.value;
  
  if (DEBUG) {
    console.log('triggerInterval             : ', localStorage.triggerInterval);
    console.log('triggerIntervalUnit         : ', localStorage.triggerIntervalUnit);
    console.log('triggerIntervalReferenceTime: ', localStorage.triggerIntervalReferenceTime);
    console.log('trigger_rest                : ', localStorage.trigger_rest);
    console.log('triggerAction               : ', localStorage.triggerAction);
    console.log('triggerParameter_serviceId  : ', localStorage.triggerParameter_serviceId);
    console.log('triggerParameter_others     : ', localStorage.triggerParameter_others);
    console.log('comparisonLeft              : ', localStorage.comparisonLeft);
    console.log('comparisonLeftDataType      : ', localStorage.comparisonLeftDataType);
    console.log('comparison                  : ', localStorage.comparison);
    console.log('comparisonRight             : ', localStorage.comparisonRight);
    console.log('comparisonRightDataType     : ', localStorage.comparisonRightDataType);
  }
  
  /** 次画面遷移 */
  showSelectOperation();
}

/**
 * オペレーション選択画面表示.
 */
function showSelectOperation() {
  location.href = '#rulecreate';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#settriggerheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('subtitle');
  titleHtml.innerHTML = '<center><b>オペレーションデバイスを選択</b></center>';

  closeLoading();
  showLoading();

  dConnect.setHost(ip);
  dConnect.discoverDevices(accessToken, function(obj){
    closeLoading();
    if(DEBUG) console.log("response: ", obj);
    var services = obj.services;
    var serviceId = '';
    for (var i = 0; i < services.length; i++) {
      if (services[i].name == 'Host') {
        serviceId = services[i].id;
      }
    }

    var str = "";
        str += '<li><a href="javascript:doOperationClear(\''  + serviceId + '\')" value="">' + '条件成立通知のみ</a></li>';
    for (var i = 0; i < services.length; i++) {
      if (services[i].name == 'Host') {
        str += '<li><a href="javascript:searchSystemProfile(\'' + services[i].id + '\',\'' + services[i].name + '\', \'operation\');" value="' + services[i].name + '">' + ' ' + services[i].name + '</a></li>';
      }
    }
    deleteMode = false;
    setContents('#rulecreatepage', str);
    $('#rulecreatepage').listview().listview('refresh');

  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      showLoading('Awaiting Your Approval...');
      authorization(function() {
        showSelectOperation();
      }, function() {
        closeLoading();
      });
    } else {
      alert('Error: code=' + errorCode + ', messsage=\"' + errorMessage + '\"');
    }
  });
}

/**
 * オペレーション設定クリア.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function doOperationClear(serviceId) {
  /** パラメータ保存 */
  if (localStorage.operationIndex != null) {
    localStorage.removeItem(operationIndex);
  }
  if (localStorage.operation_rest != null) {
    localStorage.removeItem(operation_rest);
  }
  if (localStorage.operationAction != null) {
    localStorage.removeItem(operationAction);
  }
  if (localStorage.operationParameter_serviceId != null) {
    localStorage.removeItem(operationParameter_serviceId);
  }
  if (localStorage.operationParameter_others != null) {
    localStorage.removeItem(operationParameter_others);
  }
  if (localStorage.delayOccurrence != null) {
    localStorage.removeItem(delayOccurrence);
  }
  
  if (DEBUG) {
    console.log('operationIndex              : ', localStorage.operationIndex);
    console.log('operation_rest              : ', localStorage.operation_rest);
    console.log('operationAction             : ', localStorage.operationAction);
    console.log('operationParameter_serviceId: ', localStorage.operationParameter_serviceId);
    console.log('operationParameter_others   : ', localStorage.operationParameter_others);
    console.log('delayOccurrence             : ', localStorage.delayOccurrence);
  }
  
  /** 次画面遷移 */
  showRuleConfirmation(serviceId);
}

/**
 * オペレーション設定用画面表示（Light）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetOperationLight(serviceId) {
  location.href = '#setoperation';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#setoperationheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('setoperationsubtitle');
  titleHtml.innerHTML = '<center><b>オペレーション条件設定</b></center>';
  
  var str = '';
  str += '<form name="LightForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/light">POST /gotapi/light</OPTION>';
  str += '</SELECT>';
  str += '<label>点灯パターン:</label>';
  str += '<SELECT name="patternParameter" id="patternParameter">';
  str += '<OPTION value="no_select">点灯パターン選択</OPTION>';
  str += '<OPTION value="1000,250">1秒間点灯後消灯</OPTION>';
  str += '<OPTION value="2000,250">2秒間点灯後消灯</OPTION>';
  str += '<OPTION value="250,250,250,250">「250mSec点灯、250mSec消灯」を2回繰り返す</OPTION>';
  str += '<OPTION value="250,250,250,250,250,250,250,250">「250mSec点灯、250mSec消灯」を4回繰り返す</OPTION>';
  str += '<OPTION value="500,500,500,500">「500mSec点灯、500mSec消灯」を2回繰り返す</OPTION>';
  str += '<OPTION value="500,500,500,500,500,500,500,500">「500mSec点灯、500mSec消灯」を4回繰り返す</OPTION>';
  str += '</SELECT>';
  str += '<label>処理遅延発生時次回処理:</label>';
  str += '<SELECT name="patternDelayOccurrence" id="patternDelayOccurrence">';
  str += '<OPTION value="skip">スキップ</OPTION>';
  str += '<OPTION value="stack">スタック</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetLightOperationParam(\'' + serviceId + '\');"/><br>';

  setContents('#setoperationcontents', str);
}

/**
 * オペレーション設定保存（Light）.
 */
function doSetLightOperationParam(serviceId) {
  /** パラメータ保存 */
  if (localStorage.operationIndex != null) {
    localStorage.removeItem(operationIndex);
  }
  
  localStorage.operation_rest = document.forms.LightForm.patternRest.value;
  localStorage.operationAction = 'POST';
  localStorage.operationParameter_serviceId = serviceId;

  var patternParameter = document.forms.LightForm.patternParameter.value;
  if (patternParameter == '' || patternParameter == 'no_select') {
    alert('[ Error ]\n「点灯パターン」を設定してください。');
    return;
  }
  localStorage.operationParameter_others = 'flashing=' + patternParameter;

  localStorage.delayOccurrence = document.forms.LightForm.patternDelayOccurrence.value;
  
  if (DEBUG) {
    console.log('operationIndex              : ', localStorage.operationIndex);
    console.log('operation_rest              : ', localStorage.operation_rest);
    console.log('operationAction             : ', localStorage.operationAction);
    console.log('operationParameter_serviceId: ', localStorage.operationParameter_serviceId);
    console.log('operationParameter_others   : ', localStorage.operationParameter_others);
    console.log('delayOccurrence             : ', localStorage.delayOccurrence);
  }
  
  /** 次画面遷移 */
  showRuleConfirmation(serviceId);
}

/**
 * オペレーション設定用画面表示（MediaStreamRecording）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetOperationMediaStreamRecording(serviceId) {
  location.href = '#setoperation';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#setoperationheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('setoperationsubtitle');
  titleHtml.innerHTML = '<center><b>オペレーション条件設定</b></center>';
  
  var str = '';
  str += '<form name="MediaStreamRecordingForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/mediaStreamRecording/takePhoto">POST /gotapi/mediaStreamRecording/takePhoto</OPTION>';
  str += '</SELECT>';
  str += '<label>カメラ:</label>';
  str += '<SELECT name="patternParameterCameta" id="patternParameterCameta">';
  str += '<OPTION value="no_select">カメラ選択</OPTION>';
  str += '<OPTION value="photo_0">バックカメラ</OPTION>';
  str += '<OPTION value="photo_1">フロントカメラ</OPTION>';
  str += '</SELECT>';
/** 解像度設定は保留.  
  str += '<label>解像度:</label>';
  str += '<SELECT name="patternParameterPixel" id="patternParameterPixel">';
  str += '<OPTION value="no_select">解像度選択</OPTION>';
  str += '<OPTION value="&imageWidth=1280&imageHeight=960">1280 × 960</OPTION>';
  str += '<OPTION value="&imageWidth=1024&imageHeight=768">1024 × 768</OPTION>';
  str += '<OPTION value="&imageWidth=800&imageHeight=600">800 × 600</OPTION>';
  str += '<OPTION value="&imageWidth=720&imageHeight=480">720 × 480</OPTION>';
  str += '<OPTION value="&imageWidth=640&imageHeight=480">640 × 480</OPTION>';
  str += '<OPTION value="&imageWidth=320&imageHeight=240">320 × 240</OPTION>';
  str += '</SELECT>';
*/
  str += '<label>処理遅延発生時次回処理:</label>';
  str += '<SELECT name="patternDelayOccurrence" id="patternDelayOccurrence">';
  str += '<OPTION value="skip">スキップ</OPTION>';
  str += '<OPTION value="stack">スタック</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetMediaStreamRecordingOperationParam(\'' + serviceId + '\');"/><br>';

  setContents('#setoperationcontents', str);
}

/**
 * オペレーション設定保存（MediaStreamRecording）.
 */
function doSetMediaStreamRecordingOperationParam(serviceId) {
  /** パラメータ保存 */
  if (localStorage.operationIndex != null) {
    localStorage.removeItem(operationIndex);
  }
  
  localStorage.operation_rest = document.forms.MediaStreamRecordingForm.patternRest.value;
  localStorage.operationAction = 'POST';
  localStorage.operationParameter_serviceId = serviceId;

  var patternParameterCameta = document.forms.MediaStreamRecordingForm.patternParameterCameta.value;
  if (patternParameterCameta == '' || patternParameterCameta == 'no_select') {
    alert('[ Error ]\n「カメラ」を設定してください。');
    return;
  }
  localStorage.operationParameter_others = 'target=' + patternParameterCameta

/** 解像度設定は保留.  
  var index = document.MediaStreamRecordingForm.patternParameterPixel.selectedIndex;
  switch (index) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      var pixel = document.forms.MediaStreamRecordingForm.patternParameterPixel.value;
      localStorage.operationParameter_pixel = pixel;
      break;
    default:
      alert('[ Error ]\n「解像度」を設定してください。');
      return;
  }
*/

  localStorage.delayOccurrence = document.forms.MediaStreamRecordingForm.patternDelayOccurrence.value;
  
  if (DEBUG) {
    console.log('operationIndex              : ', localStorage.operationIndex);
    console.log('operation_rest              : ', localStorage.operation_rest);
    console.log('operationAction             : ', localStorage.operationAction);
    console.log('operationParameter_serviceId: ', localStorage.operationParameter_serviceId);
    console.log('operationParameter_others   : ', localStorage.operationParameter_others);
/**
    console.log('operationParameter_pixel    : ', localStorage.operationParameter_pixel);
*/
    console.log('delayOccurrence             : ', localStorage.delayOccurrence);
  }
  
  /** 次画面遷移 */
  showRuleConfirmation(serviceId);
}

/**
 * オペレーション設定用画面表示（Notification）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetOperationNotification(serviceId) {
  location.href = '#setoperation';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#setoperationheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('setoperationsubtitle');
  titleHtml.innerHTML = '<center><b>オペレーション条件設定</b></center>';
  
  var str = '';
  str += '<form name="NotificationForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/notification/notify">POST /gotapi/notification/notify</OPTION>';
  str += '</SELECT>';
  str += '<label>通知タイプ:</label>';
  str += '<SELECT name="patternParameter" id="patternParameter">';
  str += '<OPTION value="no_select">通知タイプ選択</OPTION>';
  str += '<OPTION value="0">音声通話着信</OPTION>';
  str += '<OPTION value="1">メール着信</OPTION>';
  str += '<OPTION value="2">SMS着信</OPTION>';
  str += '<OPTION value="3">イベント</OPTION>';
  str += '</SELECT>';
  str += '<label>表示メッセージ:</label>';
  str += '<input type="text" name="patternBody"/>';
  str += '<label>処理遅延発生時次回処理:</label>';
  str += '<SELECT name="patternDelayOccurrence" id="patternDelayOccurrence">';
  str += '<OPTION value="skip">スキップ</OPTION>';
  str += '<OPTION value="stack">スタック</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetNotificationOperationParam(\'' + serviceId + '\');"/><br>';

  setContents('#setoperationcontents', str);
}

/**
 * オペレーション設定保存（Notification）.
 */
function doSetNotificationOperationParam(serviceId) {
  /** パラメータ保存 */
  if (localStorage.operationIndex != null) {
    localStorage.removeItem(operationIndex);
  }
  
  localStorage.operation_rest = document.forms.NotificationForm.patternRest.value;
  localStorage.operationAction = 'POST';
  localStorage.operationParameter_serviceId = serviceId;
  
  var patternParameter = document.forms.NotificationForm.patternParameter.value;
  if (patternParameter == '' || patternParameter == 'no_select') {
    alert('[ Error ]\n「通知タイプ」を設定してください。');
    return;
  }
  var patternBody = document.forms.NotificationForm.patternBody.value;
  if (patternBody == '' || patternBody == 'no_select') {
    alert('[ Error ]\n「表示メッセージ」を設定してください。');
    return;
  }
  localStorage.operationParameter_others = 'type=' + patternParameter + '&body=' + patternBody;

  localStorage.delayOccurrence = document.forms.NotificationForm.patternDelayOccurrence.value;
  
  if (DEBUG) {
    console.log('operationIndex              : ', localStorage.operationIndex);
    console.log('operation_rest              : ', localStorage.operation_rest);
    console.log('operationAction             : ', localStorage.operationAction);
    console.log('operationParameter_serviceId: ', localStorage.operationParameter_serviceId);
    console.log('operationParameter_others   : ', localStorage.operationParameter_others);
    console.log('delayOccurrence             : ', localStorage.delayOccurrence);
  }
  
  /** 次画面遷移 */
  showRuleConfirmation(serviceId);
}

/**
 * オペレーション設定用画面表示（Vibration）.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showSetOperationVibration(serviceId) {
  location.href = '#setoperation';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:showRuleCreate()" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#setoperationheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('setoperationsubtitle');
  titleHtml.innerHTML = '<center><b>オペレーション条件設定</b></center>';
  
  var str = '';
  str += '<form name="VibrationForm">';
  str += '<label>REST:</label>';
  str += '<SELECT name="patternRest" id="patternRest">';
  str += '<OPTION value="/gotapi/vibration/vibrate">PUT /gotapi/vibration/vibrate</OPTION>';
  str += '</SELECT>';
  str += '<SELECT name="patternParameter" id="patternParameter">';
  str += '<OPTION value="null_value">指定なし</OPTION>';
  str += '<OPTION value="100,100,100,100">100mSec動作、100mSec停止、100mSec動作後停止</OPTION>';
  str += '<OPTION value="1000">1000mSec動作後停止</OPTION>';
  str += '<OPTION value="2000,1000,2000">2000mSec動作、1000mSec停止、2000mSec動作後停止</OPTION>';
  str += '<OPTION value="100,5000,100,5000">100mSec動作、5000mSec停止、100mSec動作後停止</OPTION>';
  str += '</SELECT>';
  str += '<label>処理遅延発生時次回処理:</label>';
  str += '<SELECT name="patternDelayOccurrence" id="patternDelayOccurrence">';
  str += '<OPTION value="skip">スキップ</OPTION>';
  str += '<OPTION value="stack">スタック</OPTION>';
  str += '</SELECT>';
  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="Next"' +
         ' onclick="javascript:doSetVibrationOperationParam(\'' + serviceId + '\');"/><br>';

  setContents('#setoperationcontents', str);
}

/**
 * オペレーション設定保存（Vibration）.
 */
function doSetVibrationOperationParam(serviceId) {
  /** パラメータ保存 */
  if (localStorage.operationIndex != null) {
    localStorage.removeItem(operationIndex);
  }
  
  localStorage.operation_rest = document.forms.VibrationForm.patternRest.value;
  localStorage.operationAction = 'PUT';
  localStorage.operationParameter_serviceId = serviceId;
  var param = '';
  var patternParameter = document.forms.VibrationForm.patternParameter.value;
  if (patternParameter == 'null_value') {
    param = null;
  } else {
    param += 'pattern=' + patternParameter;
  }
  if (param != 'null') {
    localStorage.operationParameter_others = param;
  } else {
    if (localStorage.operationParameter_others != null) {
      localStorage.removeItem(operationParameter_others);
    }
  }

  localStorage.delayOccurrence = document.forms.VibrationForm.patternDelayOccurrence.value;
  
  if (DEBUG) {
    console.log('operationIndex              : ', localStorage.operationIndex);
    console.log('operation_rest              : ', localStorage.operation_rest);
    console.log('operationAction             : ', localStorage.operationAction);
    console.log('operationParameter_serviceId: ', localStorage.operationParameter_serviceId);
    console.log('operationParameter_others   : ', localStorage.operationParameter_others);
    console.log('delayOccurrence             : ', localStorage.delayOccurrence);
  }
  
  /** 次画面遷移 */
  showRuleConfirmation(serviceId);
}

/**
 * ルール設定条件確認画面表示.
 *
 * @param {String} serviceId ルールサービスのサービスID
 */
function showRuleConfirmation(serviceId) {
  location.href = '#ruleconfirmation';
  initAll();
  setContents('#rulecreatepage', ' ');
  $('#rulecreatepage').listview().listview('refresh');
  setContents('#rulecreatecontents', ' ');
  setContents('#selectprofilepage', ' ');
  $('#selectprofilepage').listview().listview('refresh');
  var headerStr ='';
  headerStr += '<div data-role="header" data-theme="b">';
  headerStr += '<a href="javascript:history.go(-1)" data-ajax="false" data-icon="back">Back</a>';
  headerStr += '<h1>ルール生成</h1>';
  headerStr += '</div>';
  setContents('#setoperationheader', headerStr);

  var subTitleStr ='';
  var titleHtml = document.getElementById('setoperationsubtitle');
  titleHtml.innerHTML = '<center><b>オペレーション条件設定</b></center>';
  
  var str = '';
  str += '<form name="RuleConfirmationForm">';
  str += '<label>ルール概要:</label>';
  str += '<input type="text" name="description" size="80" maxlength="80" placeholder="ルール詳細を記述"/>';
  str += '<div id="ruleConfirmationTriggerTitle" data-role="header" data-theme="b"><center><b>トリガー条件</b></center></div>';
  if (localStorage.trigger_rest != null) {
    str += '<label>trigger_rest                 : ' + localStorage.trigger_rest + '</label>';
  }
  if (localStorage.triggerAction != null) {
    str += '<label>triggerAction                : ' + localStorage.triggerAction + '</label>';
  }
  if (localStorage.triggerParameter_others == null) {
    if (localStorage.triggerParameter_serviceId != null) {
      str += '<label>triggerParameter             : ' + localStorage.triggerParameter_serviceId + '</label>';
    }
  } else {
    if (localStorage.triggerParameter_serviceId != null) {
      str += '<label>triggerParameter             : ' + localStorage.triggerParameter_serviceId + '&' + localStorage.triggerParameter_others + '</label>';
    } else {
      str += '<label>triggerParameter             : ' + localStorage.triggerParameter_others + '</label>';
    }
  }
  if (localStorage.comparisonLeft != null) {
    str += '<label>comparisonLeft               : ' + localStorage.comparisonLeft + '</label>';
  }
  if (localStorage.comparisonLeftDataType != null) {
    str += '<label>comparisonLeftDataType       : ' + localStorage.comparisonLeftDataType + '</label>';
  }
  if (localStorage.comparison != null) {
    str += '<label>comparison                   : ' + localStorage.comparison + '</label>';
  }
  if (localStorage.comparisonRight != null) {
    str += '<label>comparisonRight              : ' + localStorage.comparisonRight + '</label>';
  }
  if (localStorage.comparisonRightDataType != null) {
    str += '<label>comparisonRightDataType      : ' + localStorage.comparisonRightDataType + '</label>';
  }
  if (localStorage.triggerInterval != null) {
    str += '<label>triggerInterval              : ' + localStorage.triggerInterval + '</label>';
  }
  if (localStorage.triggerIntervalUnit != null) {
    str += '<label>triggerIntervalUnit          : ' + localStorage.triggerIntervalUnit + '</label>';
  }
  if (localStorage.triggerIntervalReferenceTime != null) {
    str += '<label>triggerIntervalReferenceTime : ' + localStorage.triggerIntervalReferenceTime + '</label>';
  }
  if (localStorage.andRuleServiceId != null) {
    str += '<label>andRuleServiceId             : ' + localStorage.andRuleServiceId + '</label>';
  }
  if (localStorage.judgementTime != null) {
    str += '<label>judgementTime                : ' + localStorage.judgementTime + '</label>';
  }
  if (localStorage.judgementTimeUnit != null) {
    str += '<label>judgementTimeUnit            : ' + localStorage.judgementTimeUnit + '</label>';
  }
  
  str += '<div id="ruleConfirmationOperationTitle" data-role="header" data-theme="b"><center><b>オペレーション条件</b></center></div>';
  if (localStorage.operationIndex != null) {
    str += '<label>operationIndex               : ' + localStorage.operationIndex + '</label>';
  }
  if (localStorage.operation_rest != null) {
    str += '<label>operation_rest               : ' + localStorage.operation_rest + '</label>';
  }
  if (localStorage.operationAction != null) {
    str += '<label>operationAction              : ' + localStorage.operationAction + '</label>';
  }
  if (localStorage.operationParameter_others == null) {
    if (localStorage.operationParameter_serviceId != null) {
      str += '<label>operationParameter           : ' + localStorage.operationParameter_serviceId + '</label>';
    }
  } else {
    if (localStorage.operationParameter_serviceId != null) {
      str += '<label>operationParameter           : ' + localStorage.operationParameter_serviceId + '&' + localStorage.operationParameter_others + '</label>';
    } else {
      str += '<label>operationParameter           : ' + localStorage.operationParameter_others + '</label>';
    }
  }
  if (localStorage.delayOccurrence != null) {
    str += '<label>delayOccurrence              : ' + localStorage.delayOccurrence + '</label>';
  }
  
  str += '<div id="ruleConfirmationRuleServiceCreateLogTitle" data-role="header" data-theme="b"><center><b>ルールサービス生成通信ログ</b></center></div>';
  str += '<textarea id="ruleConfirmationRuleServiceCreateLogText" cols="40" rows="5" maxlength="80" readonly="readonly"></textarea>';

  str += '<div id="ruleConfirmationRuleSettingLogTitle" data-role="header" data-theme="b"><center><b>ルール設定通信ログ</b></center></div>';
  str += '<textarea id="ruleConfirmationRuleSettingLogText" cols="40" rows="10" maxlength="80" readonly="readonly"></textarea>';
  

  str += '</form>';
  str += '<input data-role="button" type="button" name="button"' +
         ' id="button" value="ルール生成"' +
         ' onclick="javascript:doCerateRuleService(\'' + serviceId + '\');"/><br>';

  setContents('#ruleconfirmationcontents', str);
}


function doCerateRuleService(serviceId) {
  /** ルール概要の取得. */
  var description = document.forms.RuleConfirmationForm.description.value;
  if (description != null) {
    localStorage.description = description;
  } else {
    localStorage.removeItem(description);
  }
  
  /** ルールサービスの生成 */
  var builder = new dConnect.URIBuilder();
  builder.setProfile('ruleService');
  builder.setServiceId(ruleEngineServiceId);
  builder.setAccessToken(accessToken);
  if(localStorage.andRuleServiceId != null){
    builder.addParameter('ruleServiceType', 'and');
  } else {
    builder.addParameter('ruleServiceType', 'rule');
  }
  var uri = builder.build();
  if (DEBUG) { console.log('Uri: ' + uri); }
  
  document.getElementById('ruleConfirmationRuleServiceCreateLogText').value += 'Request:\nUri: ' + uri + '\n\n';
  
  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) { console.log('Response: ', json); }
    var str = JSON.stringify(json, null, ' ');
    document.getElementById('ruleConfirmationRuleServiceCreateLogText').value += 'Response:\n' +str + '\n\n';
    doCerateRuleTrigger(json.ruleServiceId);
  }, function(errorCode, errorMessage) {
    showError('POST ruleService', errorCode, errorMessage);
  });
}


function doCerateRuleTrigger(ruleServiceId) {
  /** トリガー設定 */
  var builder = new dConnect.URIBuilder();
  if(localStorage.andRuleServiceId != null){
    /** AND設定 */
    builder.setProfile('rule');
    builder.setAttribute('andRule');
    builder.setServiceId(ruleServiceId);
    builder.setAccessToken(accessToken);
    builder.addParameter('andRuleServiceId', localStorage.andRuleServiceId);
    builder.addParameter('judgementTime', localStorage.judgementTime);
    builder.addParameter('judgementTimeUnit', localStorage.judgementTimeUnit);
  } else {
    /** Rule設定 */
    builder.setProfile('rule');
    builder.setAttribute('trigger');
    builder.setServiceId(ruleServiceId);
    builder.setAccessToken(accessToken);
    
    var param ='';
    if (localStorage.trigger_rest != null) {
      builder.addParameter('trigger', localStorage.trigger_rest);
    }
    if (localStorage.triggerAction != null) {
      builder.addParameter('triggerAction', localStorage.triggerAction);
    }
    if (localStorage.triggerParameter_others == null) {
      if (localStorage.triggerParameter_serviceId != null) {
        param = 'serviceId=' + localStorage.triggerParameter_serviceId;
        builder.addParameter('triggerParameter', param);
      }
    } else {
      if (localStorage.triggerParameter_serviceId != null) {
        param = 'serviceId=' + localStorage.triggerParameter_serviceId + '&' + localStorage.triggerParameter_others;
      } else {
        param = localStorage.triggerParameter_others;
      }
      builder.addParameter('triggerParameter', param);
    }
    if (localStorage.comparisonLeft != null) {
      builder.addParameter('comparisonLeft', localStorage.comparisonLeft);
    }
    if (localStorage.comparisonLeftDataType != null) {
      builder.addParameter('comparisonLeftDataType', localStorage.comparisonLeftDataType);
    }
    if (localStorage.comparison != null) {
      builder.addParameter('comparison', localStorage.comparison);
    }
    if (localStorage.comparisonRight != null) {
      builder.addParameter('comparisonRight', localStorage.comparisonRight);
    }
    if (localStorage.comparisonRightDataType != null) {
      builder.addParameter('comparisonRightDataType', localStorage.comparisonRightDataType);
    }
    if (localStorage.triggerInterval != null) {
      builder.addParameter('triggerInterval', localStorage.triggerInterval);
    }
    if (localStorage.triggerIntervalUnit != null) {
      builder.addParameter('triggerIntervalUnit', localStorage.triggerIntervalUnit);
    }
    if (localStorage.triggerIntervalReferenceTime != null) {
      builder.addParameter('triggerIntervalReferenceTime', localStorage.triggerIntervalReferenceTime);
    }
  }
  
  var uri = builder.build();
  if (DEBUG) { console.log('Uri: ' + uri); }
  
  document.getElementById('ruleConfirmationRuleSettingLogText').value += 'Request:\nUri: ' + uri + '\n\n';
  
  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) { console.log('Response: ', json); }
    var str = JSON.stringify(json, null, ' ');
    document.getElementById('ruleConfirmationRuleSettingLogText').value += 'Response:\n' + str + '\n\n';
    doCerateRuleOperation(ruleServiceId);
  }, function(errorCode, errorMessage) {
    showError('POST rule/trigger', errorCode, errorMessage);
  });
}

function doCerateRuleOperation(ruleServiceId) {
  /** オペレーション設定 */
  var builder = new dConnect.URIBuilder();
  
  builder.setProfile('rule');
  builder.setAttribute('operation');
  builder.setServiceId(ruleServiceId);
  builder.setAccessToken(accessToken);
  
  if (localStorage.operationIndex != null) {
    builder.addParameter('operationIndex', localStorage.operationIndex);
  }
  if (localStorage.operation_rest != null) {
    builder.addParameter('operation', localStorage.operation_rest);
  }
  if (localStorage.operationAction != null) {
    builder.addParameter('operationAction', localStorage.operationAction);
  }

  if (localStorage.operationParameter_others == null) {
    if (localStorage.operationParameter_serviceId != null) {
      param = 'serviceId=' + localStorage.operationParameter_serviceId
      builder.addParameter('operationParameter', param);
    }
  } else {
    if (localStorage.operationParameter_serviceId != null) {
      param = 'serviceId=' + localStorage.operationParameter_serviceId + '&' + localStorage.operationParameter_others
    } else {
      param = localStorage.operationParameter_others
    }
    builder.addParameter('operationParameter', param);
  }
  if (localStorage.delayOccurrence != null) {
    builder.addParameter('delayOccurrence', localStorage.delayOccurrence);
  }
  
  if (localStorage.operationIndex == null &&
      localStorage.operation_rest == null &&
      localStorage.operationAction == null &&
      localStorage.operationParameter_serviceId == null &&
      localStorage.operationParameter_others == null &&
      localStorage.delayOccurrence == null) {
    doSetRuleDescription(ruleServiceId);
  } else {
    var uri = builder.build();
    if (DEBUG) { console.log('Uri: ' + uri); }
    
    document.getElementById('ruleConfirmationRuleSettingLogText').value += 'Request:\nUri: ' + uri + '\n\n';
    
    dConnect.post(uri, null, null, function(json) {
      if (DEBUG) { console.log('Response: ', json); }
      var str = JSON.stringify(json, null, ' ');
      document.getElementById('ruleConfirmationRuleSettingLogText').value += 'Response:\n' + str + '\n\n';
      doSetRuleDescription(ruleServiceId);
    }, function(errorCode, errorMessage) {
      showError('POST ruleService', errorCode, errorMessage);
    });
  }
}

function doSetRuleDescription(ruleServiceId) {
  /** ルール詳細設定 */
  var builder = new dConnect.URIBuilder();
  
  builder.setProfile('rule');
  builder.setAttribute('description');
  builder.setServiceId(ruleServiceId);
  builder.setAccessToken(accessToken);
  
  if (localStorage.description != null) {
    builder.addParameter('description', localStorage.description);
  } else {
    builder.addParameter('description', '(No description setting.)');
  }
  
  var uri = builder.build();
  if (DEBUG) { console.log('Uri: ' + uri); }
  
  document.getElementById('ruleConfirmationRuleSettingLogText').value += 'Request:\nUri: ' + uri + '\n\n';
  
  dConnect.post(uri, null, null, function(json) {
    if (DEBUG) { console.log('Response: ', json); }
    var str = JSON.stringify(json, null, ' ');
    document.getElementById('ruleConfirmationRuleSettingLogText').value += 'Response:\n' + str + '\n\n';
    alert('Success');
    searchDeviceRuleEngine();
  }, function(errorCode, errorMessage) {
    showError('POST ruleService', errorCode, errorMessage);
  });
}

