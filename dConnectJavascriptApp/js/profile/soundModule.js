/**
 soundModule.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

function showSoundModule(serviceId) {
  initAll();
  setTitle('SoundModule Profile');

  let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  let str = '';
  str += '<table width="100%">';
  str += '<tbody>';
  str += '<tr><td align="right">音階</td><td><input id="soundModuleNote" type="text" value="A4"></td></tr>';
  str += '<tr><td align="right">チャンネル</td><td><input id="soundModuleChannel" type="text" value="0"></td></tr>';
  str += '</tbody>';
  str += '</table>';
  str += '<fieldset class="ui-grid-a">';
  str += '<div class="ui-block-a"><button id="btnSendNoteOn">ON</button></div>';
  str += '<div class="ui-block-b"><button id="btnSendNoteOff">OFF</button></div>';
  str += '</fieldset>';
  reloadContent(str);

  $('#btnSendNoteOn').on('click', function() {
    sendNoteOn(serviceId, $('#soundModuleNote').val(), $('#soundModuleChannel').val());
  });
  $('#btnSendNoteOff').on('click', function() {
    sendNoteOff(serviceId, $('#soundModuleNote').val(), $('#soundModuleChannel').val());
  });
}

function sendNoteOn(serviceId, note, channel) {
  if (DEBUG) {
    console.log(`sendNoteOn: note=${note}, channel=${channel}`);
  }
  sdk.post({
    profile: 'soundModule',
    attribute: 'note',
    params: {
      serviceId,
      note,
      channel
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('POST /soundModule/note', e.errorCode, e.errorMessage);
  });
}

function sendNoteOff(serviceId, note, channel) {
  if (DEBUG) {
    console.log(`sendNoteOff: note=${note}, channel=${channel}`);
  }
  sdk.delete({
    profile: 'soundModule',
    attribute: 'note',
    params: {
      serviceId,
      note,
      channel
    }
  }).then(json => {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }).catch(e => {
    showError('POST /soundModule/note', e.errorCode, e.errorMessage);
  });
}