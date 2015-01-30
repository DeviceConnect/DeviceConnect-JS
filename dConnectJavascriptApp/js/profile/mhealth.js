/**
 mhealth.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */
 
/** 
 * mhealth Profile.
 */
function showMhealth(serviceId) {
	initAll();
	
    initListView();
    setTitle("mHealth Profile");

    var str = "";
    str += '<input data-role="button" type="button" name="button" id="button" value="OMRON(HBF-206IT)" onclick="javascript:doStartService(\'' + serviceId + '\',\'HBF-206IT\');"/><br>';
   	str += getProfileListLink(serviceId);

	reloadContent(str);
}

/**
 * startService
 *
 * @param serviceId サービスID
 * @param deviceName デバイス名
 */
function doStartService(serviceId, deviceName){
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("mhealth");
    builder.setAttribute("startservice");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("protocol","HDP");
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
	dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);
	    
        if (json.result == 0) {
            if(deviceName == "HBF-206IT"){
            	showHBF206IT1(serviceId);
            }
           
        } else {
            alert("startService API failed!\n\nURI: "+uri+"\nerrorCode: " + json.errorCode + "\nerrorMessage: " + json.errorMessage + ")");
            
            if(deviceName == "HBF-206IT"){
            	showHBF206IT1(serviceId);
            }
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}

/**
 * HBF-206IT(1)
 *
 * @param serviceId サービスID
 */
function showHBF206IT1(serviceId){
	var str = "";
	setTitle("初期設定","blue");
	str += '<center>';
	str += '<img src="./css/images/weight1.png">';
	str += '</center>';
	str += '体組成計の「個人番号」ボタンを押す。<br>';
	str += '「ピッ」というブザー音とともに、生年月日が表示される。<br>';
	str += '「ピ・ピッ」というブザー音の後、0.0kg表示に変わる。<br>';
	str += '<input data-role="button" type="button" name="button" id="button" value="NEXT" onclick="javascript:showHBF206IT2(\'' + serviceId + '\');"/><br>';
	
	reloadContent(str);
}

/**
 * HBF-206IT(2)
 *
 * @param serviceId サービスID
 */
function showHBF206IT2(serviceId){
	var str = "";
	setTitle("測定","blue");
	str += '<center>';
	str += '<img src="./css/images/weight2.png">';
	str += '</center>';
	str += '計測が完了すると「ピ・ピー」というブザー音が鳴り、計測結果が表示される。<br>';
	str += '<input data-role="button" type="button" name="button" id="button" value="NEXT" onclick="javascript:showHBF206IT3(\'' + serviceId + '\');"/><br>';
	
	reloadContent(str);
}

/**
 * HBF-206IT(3)
 *
 * @param serviceId サービスID
 */
function showHBF206IT3(serviceId){
	var str = "";
	setTitle("データ転送","blue");
	str += '<center>';
	str += '<img src="./css/images/weight3.png">';
	str += '</center>';
	str += '「転送」ボタンを押すと転送が開始される。<br>';
	str += '転送が完了すると「ピッ・ピッ」というブザー音が鳴り、OKランプが点灯する。<br>';
	str += '<input data-role="button" type="button" name="button" id="button" value="データの取得" onclick="javascript:doHBF206IT(\'' + serviceId + '\');"/><br>';


	reloadContent(str);
}


/**
 * HBF-206ITの処理
 *
 * @param serviceId サービスID
 */
function doHBF206IT(serviceId){
	closeLoading();
	showLoading();
	
	var str = "";
	setTitle("データ受信中(確認中)","blue");
	str += '<center>データ受信中(確認中)</center>';
	reloadContent(str);
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("mhealth");
    builder.setAttribute("getdbinfo");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
	dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);
	    
        if (json.result == 0) {
        
        	if(DEBUG) console.log("json.datas[0].lastindexId:"+json.datas[0].lastindexId)
            closeLoading();
            doGetDataFromHBF206IT(serviceId, json.datas[0].lastindexId);
           
        } else {
        	showError("POST mhealth/getdbinfo", json);
            closeLoading();
        }

    }, function(xhr, textStatus, errorThrown) {

    });
    
	reloadContent(str);
}


/**
 * HBF-206ITの処理
 *
 * @param serviceId サービスID
 */
function doGetDataFromHBF206IT(serviceId, id){

	closeLoading();
	showLoading();
	var str = "";
	setTitle("データ受信中(転送中)","blue");
	str += '<center>データ受信中(転送中)</center>';
	reloadContent(str);
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("mhealth");
    builder.setAttribute("getmeasurements");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("firstId",id);
    builder.addParameter("lastId",id);
    var uri = builder.build();
	
	if(DEBUG) console.log("Uri:"+uri)
	
	dConnect.execute('GET', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);
	    
        if (json.result == 0) {
        	setTitle("データ転送完了","gray");
	
            var str = responseText;
            if(DEBUG) console.log("data:"+responseText);
            reloadHeader(str);   
            var contentStr = ""
            contentStr += '<input data-role="button" type="button" name="button" id="button" value="mHealthの停止" onclick="javascript:doStopService(\'' + serviceId + '\');"/><br>';
			reloadContent(contentStr);
           	closeLoading();
            
        } else {
			showError("POST mhealth/getmeasurements", json);
       		closeLoading();
        }

    }, function(xhr, textStatus, errorThrown) {

    });
    
}

/**
 * stopService
 *
 * @param serviceId サービスID
 * @param deviceName デバイス名
 */
function doStopService(serviceId){
	
	var builder = new dConnect.URIBuilder();
    builder.setProfile("mhealth");
    builder.setAttribute("stopservice");
    builder.setServiceId(serviceId);
    builder.setAccessToken(accessToken);
    builder.addParameter("protocol","HDP");
    var uri = builder.build();

	dConnect.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
        
        if(DEBUG) console.log("Response:"+responseText)
        
        var json = JSON.parse(responseText);
	    
        if (json.result == 0) {
           alert("STOP mHealth Service");
           showMhealth(serviceId);
           
        } else {
        	showError("POST mhealth/stopservice", json);
            
        }

    }, function(xhr, textStatus, errorThrown) {

    });
}


