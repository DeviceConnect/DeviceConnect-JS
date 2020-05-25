/**
 fabo.js
 Copyright (c) 2020 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/* Show fabo page */
function showFaBo(serviceId) {
    initAll();
    setTitle('FaBo');

    let btnStr = getBackButton('Device Top', 'searchSystem', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    doGetVirtualServiceList(serviceId, services => {
        showVirtualServiceList(serviceId, services);
    });
}

function showVirtualServiceList(serviceId, services) {
    let str = '';
    for (let i = 0; i < services.length; i++) {
        let service = services[i];
        let txt = encodeURIComponent(JSON.stringify(service));
        str += '<li>';
        str += '<a href="javascript:showVirtualService(\'' + serviceId + '\', \'' + txt + '\');">' + service.name + "</a>";
        str += '</li>';
    }
    reloadList(str);

    let contents = '';
    contents += '<div>';
    contents += '<input type="button" value="サービス追加" onclick="javascript:showAddService(\'' + serviceId + '\');">';
    contents += '<input type="button" value="サービス削除" onclick="javascript:showRemoveService(\'' + serviceId + '\');">';
    contents += '</div>';
    reloadContent(contents);
}

function showRemoveService(serviceId, services) {
    initAll();
    setTitle('FaBo 仮想サービス削除');

    let btnStr = getBackButton('Device Top', 'showFaBo', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    doGetVirtualServiceList(serviceId, services => {
        showRemoveServiceList(serviceId, services);
    });
}

function showRemoveServiceList(serviceId, services) {
    let str = '';
    for (let i = 0; i < services.length; i++) {
        let service = services[i];
        str += '<li data-icon="delete">';
        str += '<a href="javascript:doDeleteRemoveService(\'' + serviceId + '\', \'' + service.vid + '\');">' + service.name + "</a>";
        str += '</li>';
    }
    reloadList(str);
}

function showAddService(serviceId) {
    initAll();
    setTitle('FaBo 仮想サービス追加');

    let btnStr = getBackButton('Device Top', 'showFaBo', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let contents = '';
    contents += '<form name="service">';
    contents += '<input type="text" value="">';
    contents += '<input type="button" value="サービス追加" onclick="javascript:doPostAddService(\'' + serviceId + '\');">';
    contents += '</div>';
    reloadContent(contents);
}

function showVirtualService(serviceId, jsonText) {
    let service = JSON.parse(decodeURIComponent(jsonText));

    initAll();
    setTitle("FaBo " + service.name);

    let btnStr = getBackButton('Device Top', 'showFaBo', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let str = '';
    for (let i = 0; i < service.profiles.length; i++) {
        let profile = service.profiles[i];
        str += '<li>';
        if (profile.type < 100) {
            pins = profile.pins.join(',');
            str += '<a href="javascript:showVirtualProfilePins(\'' + serviceId + '\', \'' + service.vid + '\', \'' + profile.type + '\', \'' + pins + '\');">';
        }
        str += '<div>'
        str +=  profile.name;
        str += '</div>'
        str += '<div>'
        str += '<small>' + convertPins(profile.pins) + '</small>';
        str += '</div>'
        if (profile.type < 100) {
            str += "</a>";
        }
        str += '</li>';
    }
    reloadList(str);

    let txt = encodeURIComponent(JSON.stringify(service));

    let contents = '';
    contents += '<div>';
    contents += '<input type="button" value="プロファイル追加" onclick="javascript:showAddProfile(\'' + serviceId + '\', \'' + txt + '\');">';
    contents += '<input type="button" value="プロファイル削除" onclick="javascript:showRemoveProfile(\'' + serviceId + '\', \'' + txt + '\');">';
    contents += '</div>';

    reloadContent(contents);
}

function convertPins(pins) {
    let str = '';
    if (pins) {
        for (let i = 0; i < pins.length; i++) {
            if (str.length > 0) {
                str += ',';
            }
            str += pins[i];
        }
    }
    return 'PIN: ' + str;
}

function showAddProfile(serviceId, jsonText) {
    let service = JSON.parse(decodeURIComponent(jsonText));

    initAll();
    setTitle("FaBo " + service.name + ' プロファイル追加');

    let btnStr = getBackButton('Device Top', 'showFaBo', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let profiles = [
        {
            name : 'Light(GPIO) #101',
            type : 1
        },
        {
            name : 'Temperature(GPIO) #108',
            type : 2
        },
        {
            name : 'Vibration(GPIO) #105',
            type : 3
        },
        {
            name : 'Illuminace(GPIO) #109',
            type : 4
        },
        {
            name : 'KeyEvent(GPIO) #103',
            type : 5
        },
        {
            name : 'Humidity(GPIO) #115',
            type : 6
        },
        {
            name : 'Proximity(GPIO) #116',
            type : 7
        },
        {
            name : 'DriveController(RobotCar)',
            type : 100
        },
        {
            name : 'DriveController(MouseCar)',
            type : 101
        },
        {
            name : 'DeviceOrientation(3AXIS) #201',
            type : 102
        },
        {
            name : 'Temperature(I2C) #207',
            type : 103
        },
        {
            name : 'Humidity(I2C) #208',
            type : 104
        },
        {
            name : 'Proximity(I2C) #205',
            type : 105
        },
        {
            name : 'Illuminace(I2C) #217',
            type : 106
        },
        {
            name : 'AtmosphericPressure(I2C) #204',
            type : 107
        },
        {
            name : 'Proximity(I2C) LIDARLite v3',
            type : 108
        }
    ];

    let str = '';
    for (let i = 0; i < profiles.length; i++) {
        let profile = profiles[i];
        str += '<li>';
        if (profile.type < 100) {
            str += '<a href="javascript:showVirtualProfilePins(\'' + serviceId + '\', \'' + service.vid + '\', \'' + profile.type + '\');">' + profile.name + "</a>";
        } else {
            str += '<a href="javascript:doPostAddProfile(\'' + serviceId + '\', \'' + service.vid + '\', \'' + profile.type + '\');">' + profile.name + "</a>";
        }
        str += '</li>';
    }

    reloadList(str);
}

function showVirtualProfilePins(serviceId, vid, type, pins) {
    initAll();
    setTitle('FaBo ピン設定');

    let btnStr = getBackButton('Device Top', 'showFaBo', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let contents = '';
    contents += '<form name="pins">';
    contents += '<input type="checkbox" id="A0" name="A0" value="A0"><label for="A0">A0</label>';
    contents += '<input type="checkbox" id="A1" name="A1" value="A1"><label for="A1">A1</label>';
    contents += '<input type="checkbox" id="A2" name="A2" value="A2"><label for="A2">A2</label>';
    contents += '<input type="checkbox" id="A3" name="A3" value="A3"><label for="A3">A3</label>';
    contents += '<input type="checkbox" id="A4" name="A4" value="A4"><label for="A4">A4</label>';
    contents += '<input type="checkbox" id="A5" name="A5" value="A5"><label for="A5">A5</label>';
    contents += '<input type="checkbox" id="D0" name="D0" value="D0"><label for="D0">D0</label>';
    contents += '<input type="checkbox" id="D1" name="D1" value="D1"><label for="D1">D1</label>';
    contents += '<input type="checkbox" id="D2" name="D2" value="D2"><label for="D2">D2</label>';
    contents += '<input type="checkbox" id="D3" name="D3" value="D3"><label for="D3">D3</label>';
    contents += '<input type="checkbox" id="D4" name="D4" value="D4"><label for="D4">D4</label>';
    contents += '<input type="checkbox" id="D5" name="D5" value="D5"><label for="D5">D5</label>';
    contents += '<input type="checkbox" id="D6" name="D6" value="D6"><label for="D6">D6</label>';
    contents += '<input type="checkbox" id="D7" name="D7" value="D7"><label for="D7">D7</label>';
    contents += '<input type="checkbox" id="D8" name="D8" value="D8"><label for="D8">D8</label>';
    contents += '<input type="checkbox" id="D9" name="D9" value="D9"><label for="D9">D9</label>';
    contents += '<input type="checkbox" id="D10" name="D10" value="D10"><label for="D10">D10</label>';
    contents += '<input type="checkbox" id="D11" name="D11" value="D11"><label for="D11">D11</label>';
    contents += '<input type="checkbox" id="D12" name="D12" value="D12"><label for="D12">D12</label>';
    contents += '<input type="checkbox" id="D13" name="D13" value="D13"><label for="D13">D13</label>';
    contents += '</form>';
    contents += '<div>';
    contents += '<input type="button" value="追加" onclick="javascript:doPostAddProfile(\'' + serviceId + '\', \'' + vid + '\', \'' + type + '\', true);">';
    contents += '</div>';
    reloadContent(contents);

    if (pins) {
        pins = pins.split(',');
        for　(let i = 0 ; i < document.pins.elements.length ; i++) {
            let elem = document.pins.elements[i];
            if (elem.type == 'checkbox' && pins.indexOf(elem.name) != -1) {
                elem.checked = true;
                $(elem).checkboxradio("refresh");
            }
        }
    }
}

function showRemoveProfile(serviceId, jsonText) {
    let service = JSON.parse(decodeURIComponent(jsonText));

    initAll();
    setTitle('FaBo プロファイル削除');

    let btnStr = getBackButton('Device Top', 'showFaBo', serviceId);
    reloadHeader(btnStr);
    reloadFooter(btnStr);

    let str = '';
    for (let i = 0; i < service.profiles.length; i++) {
        let profile = service.profiles[i];
        str += '<li data-icon="delete">';
        str += '<a href="javascript:doDeleteRemoveProfile(\'' + serviceId + '\', \'' + service.vid + '\', \'' + profile.type + '\');">' + profile.name + "</a>";
        str += '</li>';
    }
    reloadList(str);
}

function doPostAddProfile(serviceId, vid, type, pins) {
    let params = {
      profile: 'fabo',
      attribute: 'profile',
      params: {
        serviceId: serviceId,
        vid: vid,
        type: type
      }
    };
    if (pins) {
        pins = '';
        for　(let i = 0 ; i < document.pins.elements.length ; i++) {
            let elem = document.pins.elements[i];
            if (elem.type == 'checkbox' && elem.checked) {
                if (pins.length > 0) {
                    pins += ','
                }
                pins += elem.name;
            }
        }
        params['pins'] = pins;
    }

    sdk.post(params).then(json => {
        doGetVirtualServiceList(serviceId, services => {
            for (let i = 0; i < services.length; i++) {
                let service = services[i];
                if (service.vid == vid) {
                    showVirtualService(serviceId, encodeURIComponent(JSON.stringify(service)));
                    return;
                }
            }
            alert('Not found the service.');
        });
    }).catch(e => {
        alert('Failed to add a profile. message=' + e.errorMessage);
    });
}

function doGetVirtualServiceList(serviceId, callback) {
    sdk.get({
      profile: 'fabo',
      attribute: 'service',
      params: {
        serviceId: serviceId
      }
    }).then(json => {
        callback(json.services);
    }).catch(e => {
        callback([]);
    });
}

function doPostAddService(serviceId) {
    let params = {
      profile: 'fabo',
      attribute: 'service',
      params: {
        serviceId: serviceId
      }
    };
    for　(let i = 0 ; i < document.service.elements.length ; i++) {
        let elem = document.service.elements[i];
        if (elem.type == 'text') {
            name = elem.value;
            params['name'] = name;
        }
    }

    sdk.post(params).then(json => {
        showFaBo(serviceId);
    }).catch(e => {
        alert('Failed to add a service. message=' + e.errorMessage);
    });
}

function doDeleteRemoveService(serviceId, vid) {
    if (window.confirm('サービスを削除しますが、良いでしょうか？')){
        sdk.delete({
          profile: 'fabo',
          attribute: 'service',
          params: {
            serviceId: serviceId,
            vid: vid
          }
        }).then(json => {
            showRemoveService(serviceId);
        }).catch(e => {
            alert('Failed to remove a service. message=' + e.errorMessage);
        });
    }
}

function doDeleteRemoveProfile(serviceId, vid, type) {
    if (window.confirm('プロファイルを削除しますが、良いでしょうか？')){
        sdk.delete({
          profile: 'fabo',
          attribute: 'profile',
          params: {
            serviceId: serviceId,
            vid: vid,
            type: type
          }
        }).then(json => {
            doGetVirtualServiceList(serviceId, services => {
                for (let i = 0; i < services.length; i++) {
                    let service = services[i];
                    if (service.vid == vid) {
                        showRemoveProfile(serviceId, encodeURIComponent(JSON.stringify(service)));
                        return;
                    }
                }
            });
        }).catch(e => {
            alert('Failed to remove a profile. message=' + e.errorMessage);
        });
    }
}
