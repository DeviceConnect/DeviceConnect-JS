/**
 keyboard.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/* Show Keyboard page */
function showKeyboard(serviceId) {
    initAll();
    setTitle('Keyboard Profile');

    let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let keyMap = [
        [
            ['1', 0, 0x00, 0x1E],
            ['2', 0, 0x00, 0x1F],
            ['3', 0, 0x00, 0x20],
            ['4', 0, 0x00, 0x21],
            ['5', 0, 0x00, 0x22],
            ['6', 0, 0x00, 0x23],
            ['7', 0, 0x00, 0x24],
            ['8', 0, 0x00, 0x25],
            ['9', 0, 0x00, 0x26],
            ['0', 0, 0x00, 0x27],
            ['-', 0, 0x00, 0x2d],
            ['^', 0, 0x00, 0x2E],
            ['¥', 0, 0x00, 0x27],
        ],
        [
            ['Q', 0, 0x00, 0x14],
            ['W', 0, 0x00, 0x1a],
            ['E', 0, 0x00, 0x08],
            ['R', 0, 0x00, 0x15],
            ['T', 0, 0x00, 0x17],
            ['Y', 0, 0x00, 0x1c],
            ['U', 0, 0x00, 0x18],
            ['I', 0, 0x00, 0x0c],
            ['O', 0, 0x00, 0x12],
            ['P', 0, 0x00, 0x13],
            ['@', 0, 0x00, 0x2F],
            ['{', 0, 0x02, 0x30],
        ],
        [
            ['A', 0, 0x00, 0x04],
            ['S', 0, 0x00, 0x16],
            ['D', 0, 0x00, 0x07],
            ['F', 0, 0x00, 0x09],
            ['G', 0, 0x00, 0x0a],
            ['H', 0, 0x00, 0x0b],
            ['J', 0, 0x00, 0x0d],
            ['K', 0, 0x00, 0x0e],
            ['L', 0, 0x00, 0x0f],
            [';', 0, 0x00, 0x33],
            [':', 0, 0x00, 0x34],
            ['}', 0, 0x02, 0x32],
        ],
        [
            ['Z', 0, 0x00, 0x1d],
            ['X', 0, 0x00, 0x1b],
            ['C', 0, 0x00, 0x06],
            ['V', 0, 0x00, 0x19],
            ['B', 0, 0x00, 0x05],
            ['N', 0, 0x00, 0x11],
            ['M', 0, 0x00, 0x10],
            [',', 0, 0x00, 0x36],
            ['.', 0, 0x00, 0x37],
            ['/', 0, 0x00, 0x38],
            ['_', 0, 0x02, 0x87],
        ],
        [
            ['ESC', 0, 0x02, 0x29],
            ['あ/A', 0, 0x02, 0x2C],
            ['←', 0, 0x00, 0x50],
            ['    ', 0, 0x00, 0x2c],
            ['→', 0, 0x00, 0x4f],
            ['Delete', 0, 0x00, 0x2A],
            ['Enter', 0, 0x00, 0x28],
        ]
    ];

    let contents = '<div>';
    contents += '<h3>/keyboard</h3>';
    contents += '<div style="text-align: center;">';
    for (let i = 0; i < keyMap.length; i++) {
        contents += '<div>';
        for (let j = 0; j < keyMap[i].length; j++) {
            contents += '<button class="ui-btn ui-btn-inline" onclick="sendKeyCode(\'' + serviceId +  '\', ' + keyMap[i][j][2] + ', ' + keyMap[i][j][3] + ')">' + keyMap[i][j][0] + '</button>';
        }
        contents += '</div>';
    }
    contents += '</div>';

    contents += '<h3>/keyboard/ascii</h3>';
    contents += '<input type="text" id="string" placeholder="送信したい文字を入力してください。">';
    contents += '<div>';
    contents += '<button onclick="sendAscii(\'' + serviceId +  '\')">ASCII送信</button>';
    contents += '</div>';
    contents += '</div>';

    reloadContent(contents);
}

function sendKeyboard(serviceId) {
    let modifier = $('#modifier').val();
    let keyCode = $('#keyCode').val();
    sendKeyCode(modifier, keyCode);
}

function sendKeyCode(serviceId, modifier, keyCode) {
    let params = {
      profile: 'keyboard',
      params: {
        serviceId: serviceId
      }
    };
    if (modifier == 0x01) {
      params.params['modifier'] = 'ctrl';
    } else if (modifier == 0x02) {
      params.params['modifier'] = 'shift';
    } else if (modifier == 0x04) {
      params.params['modifier'] = 'alt';
    } else if (modifier == 0x08) {
      params.params['modifier'] = 'gui';
    }
    params.params['keyCode'] = keyCode;

    sdk.post(params).then(json => {
        console.log('success');
    }).catch(e => {
        console.log('Failed to send keyCode. message=' + e.errorMessage);
    });
}

function sendAscii(serviceId) {
    let string = $('#string').val();

    sdk.post({
      profile: 'keyboard',
      attribute: 'ascii',
      params: {
        serviceId: serviceId,
        string: string
      }
    }).then(json => {
        console.log('success');
    }).catch(e => {
        console.log('Failed to send ascii. message=' + e.errorMessage);
    });
}
