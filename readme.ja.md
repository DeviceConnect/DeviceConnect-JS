# DeviceConnect JS について


Device Connect WebAPIはスマートフォン上で仮想サーバとして動作するWebAPIで、様々なウェアラブルデバイスやIoTデバイスをWebブラウザやアプリから統一的な記述で簡単に利用することができます。
Device Connect JSはJavaScript版のDeviceConnectのライブラリ用レポジトリになります。

動作確認などに関しましては、[こちら](https://github.com/DeviceConnect/DeviceConnect-Docs)を参照してください。

このガイドでは以下のことについて解説していきます。

* プロジェクトの説明
* JavaScriptのインポート方法
* ライブラリの使い方



# プロジェクトの説明
| プロジェクト名|内容  |
|:-----------|:---------|
|dConnectJavascriptApp|demoWebSiteのソースコード。 |
|dConnectSDKForJavascript|DeviceConnectのJavaScript用SDK。|



# JavaScriptのインポート方法
以下のようなディレクトリ構成があるとします。

```
HTML root
   └── js
   |    └── dconnectsdk-x.x.x.js
   └── index.html
                
```

この場合、以下のようにindex.htmlにインポート文を挿入することによって、JavaScriptを使用することができます。

```
 <script src="./js/dconnectsdk-x.x.x.js" type="text/javascript"></script>
```


# ライブラリの使い方

## 基本的なSDKの使い方
例えば、デバイスからBatteryの残量を取得する場合は、以下のような書き方ができます。

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    var uri = builder.build();
    
    dConnect.execute('GET', uri, null, null,
    // レスポンスが送られてくる
 	 	function(status, headerMap, responseText) {
 	       var json = JSON.parse(responseText);
        
	        if (json.result == 0) {
 	           var level = json.level * 100;
	            alert('Level:' + level);
 	       } else {
 	           alert('Error');
 	       }
	    }, function(xhr, textStatus, errorThrown) {
 	       alert(errorThrown);
 	});
```

1. dConnect.URIBuilderで、デバイスへのリクエストを行うためのRESTfulなURIを組み立てます。
2. dConnect.execute()によりリクエストを投げます。
3. コールバックによりリクエストのレスポンスを受け取ります。



## Eventの使い方
例えば、デバイスのBatteryが充電状態ではない場合のイベントを取得するときのイベントを取得する場合は、以下のような書き方ができます。

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
        
    dConnect.addEventListener(uri,
    //イベントのメッセージ
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
    //イベント登録が成功した
    function() {
        alert('Register Success');
    },
    //イベント登録が失敗した
    function(errorCode, errorMessage){
        alert(errorMessage);
    });
```

イベントの利用を停止する場合は、以下のようにイベントの削除を行います。

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setDeviceId(deviceId);
    builder.setAccessToken(accessToken);
    builder.setSessionKey(sessionKey);
    var uri = builder.build();
    
    dConnect.removeEventListener(uri, 
         //イベント登録解除が成功した
	     function() {
    	    alert('Unregister Success');
  		 },
  		 //イベント登録解除が失敗した
  	  	 function(errorCode, errorMessage){
        	alert(errorMessage);
    	 }
    );
```

