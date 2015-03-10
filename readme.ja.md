# DeviceConnect JS について


Device Connect WebAPIはスマートフォン上で仮想サーバとして動作するWebAPIで、様々なウェアラブルデバイスやIoTデバイスをWebブラウザやアプリから統一的な記述で簡単に利用することができます。<br>
Device Connect JSはJavaScript版のDeviceConnectのライブラリ用レポジトリになります。<br>
<br><br>
このガイドでは以下のことについて解説していきます。<br>

* [プロジェクトの説明](#section1)
* [プラットフォームの準備](#section2)
* [JavaScriptのインポート方法](#section3)
* [ライブラリの使い方](#section4)



# <a name="section1">プロジェクトの説明</a>
| プロジェクト名|内容  |
|:-----------|:---------|
|dConnectJavascriptApp|demoWebSiteのソースコード。 |
|dConnectSDKForJavascript|DeviceConnectのJavaScript用SDK。|

# <a name="section2">プラットフォームの準備</a>
DeviceConnect-JSは、AndroidおよびiOS端末をサポートしています。<br>
それぞれのプラットフォームのインストールに関しては以下のページを参照してください。<br>

* [DeviceConnect-Android](https://github.com/DeviceConnect/DeviceConnect-Android)
* [DeviceConnect-iOS](https://github.com/DeviceConnect/DeviceConnect-iOS)


# <a name="section3">JavaScriptのインポート方法</a>
以下のようなディレクトリ構成があるとします。<br>

```
HTML root
   └── js
   |    └── dconnectsdk-x.x.x.js
   └── index.html
                
```

<br>
この場合、以下のようにindex.htmlにインポート文を挿入することによって、JavaScriptを使用することができます。<br>
<br>

```
 <script src="./js/dconnectsdk-x.x.x.js" type="text/javascript"></script>
```


# <a name="section4">ライブラリの使い方</a>
## Device Connect 処理の流れ
Device Connectを使用するには、基本的には以下の手順になります。<br>
<br>

<center><a href="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/DeviceConnectSequence.png" >
<img src="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/DeviceConnectSequence.png" border="0"
 width="701" height="456" alt="" /></a></center>



1. availabilityは、Device Connect Managerの起動確認を行います。<br><br>
すでに起動が確認できている場合には、スキップすることができます。<br>
SDKでは、dConnect.checkDeviceConnect()によって、availabilityの実行を行います。<br>

```
dConnect.checkDeviceConnect(function(apiVersion) {
        alert("Device Connect API version:" + apiVersion);
    }, function(errorCode, errorMessage) {
        switch (errorCode) {
        case dConnect.constants.ErrorCode.ACCESS_FAILED:
            dConnect.startManager();
            alert("Requested to start Device Connect Manager.");
            break;
        default:
            alert(errorMessage);
            break;
        }
    });
```

2. 認証 (Local OAuth)により、ユーザに使用認可を確認を行い、アクセストークンを取得します。<br><br>
すでにアクセストークンを取得している場合に、スキップすることができます。<br>

```
// accessTokenを保存
var myAccessToken = "";

// アプリ名
var myAppName = "<Your Application Name>";

function authorization(){

      var scopes = Array("battery","serviceinformation", "servicediscovery");


       dConnect.authorization(scopes, myAppName, 
        function(clientId, clientSecret, newAccessToken) {
                // accessToken
                myAccessToken = newAccessToken;

        },
    function(errorCode, errorMessage) {
                      alert("Failed to get accessToken.");
             }
       );
}
```


3. Device Connect Managerに登録されている各デバイスのserviceIdを取得します。<br><br>
すでに、serviceIdを取得している場合には、スキップすることができます。<br>

```
// サービスIDを格納する
var myServiceId;

// デバイスの検索
function searchDevice() {
    dConnect.discoverDevices(accessToken, function(json) {
        var str = "";
        if (json.result == 0) {
            // サービスIDを取得する。
            // 名前などから使用するサービスを取得する。
            for (var i = 0; i < json.services.length; i++) {
                if (json.services[i].name == "HOST") {
                    myServiceId = json.services[i].id; 
                }
            }
        } else {
            alert("Failed to get services.");
        }
    }, function(errorCode, errorMessage) {
        alert(errorMessage);
    });
}
```


4. serviceIdを用いて、デバイスの操作を行います。
<br><br>
ここでは、バッテリー情報を取得するサンプルで説明をします。<br>


```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setServiceId(myServiceId);
    builder.setAccessToken(myAccessToken);
    var uri = builder.build();
    
    dConnect.get(uri, null, 
       // レスポンスが送られてくる
 	 	function(json) {
	        if (json.result == 0) {
 	           var level = json.level * 100;
	            alert('Level:' + level);
 	       } else {
 	           alert('Error');
 	       }
	    }, 
	    function(errorCode, errorMessage) {
			alert(errorMessage);
    });
```

デバイスの操作を行う手順<br><br>
1. dConnect.URIBuilderで、デバイスへのリクエストを行うためのRESTfulなURIを組み立てます。<br>
2. HTTPメソッドがGETの場合は、dConnect.get()によりリクエストを投げます。<br>
3. コールバックによりリクエストのレスポンスを受け取ります。<br>
<br>
また、デバイス操作は、バッテリー以外にも色々存在します。<br>
詳細は[こちら](https://github.com/DeviceConnect/DeviceConnect-JS/wiki/1.HTML5Application-Manual)から確認してください。<br>



## Eventの使い方

### Eventとは
　デバイスの情報を、デバイスプラグインを通じて、非同期でHTMLアプリへ通知する機能になります。<br>
例えば、ネットワーク検知情報、センサーイベント情報、楽曲再生状態変更(再生/一時停止/再開/停止)情報などの通知情報を指します。イベントの受信を開始するためには、それぞれのプロファイルで定義されているEvent APIをHTMLアプリ側で実行します。<br><br>

その際、イベントの通知先の識別子としてSessionKeyの指定が必要です。SessionKeyの値は、他のアプリとの重複を回避するため、可能なかぎり長くランダムな文字列とすることが推奨されます。Create Client APIから取得したクライアントIDを流用すれば、ほぼ確実に重複を回避可能です。<br>

### Event処理の流れ
Device ConnectのEventを使用するには、基本的には以下の手順になります。

<center><a href="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/EventSequence.png" >
<img src="https://raw.githubusercontent.com/wiki/DeviceConnect/DeviceConnect-JS/EventSequence.png" border="0"
 width="701" height="456" alt="" /></a></center>
 
### WebSocketのオープン
 Device Connect Managerからのイベントを受け取るためにWebsocketを開きます。<br>
すでにWebsocketをオープンしている場合には、この処理を行う必要はありません。<br>
Websocketの状態は、dConnect.isConnectedWebSocket()を用いて確認することができます。<br><br>

```
dConnect.connectWebsocket('sessionKey', function(eventCode, message) {
    if (eventCode == 0) {
         // オープン
    } else if (eventCode == 1) {
         // クローズ
    } else {
         // エラー
    }
});
```

### イベントの登録
例えば、デバイスのBatteryが充電状態ではない場合のイベントを取得するときのイベントを取得する場合は、以下のような書き方ができます。<br><br>

```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setServiceId(myServiceId);
    builder.setAccessToken(myAccessToken);
    builder.setSessionKey(mySessionKey);
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


### イベントの解除

イベントの利用を停止する場合は、以下のようにイベントの削除を行います。<br>


```
    var builder = new dConnect.URIBuilder();
    builder.setProfile("battery");
    builder.setAttribute("onchargingchange");
    builder.setServiceId(myServiceId);
    builder.setAccessToken(myAccessToken);
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


### WebSocketクローズ
　イベントの利用を停止する場合は、WebSocketをクローズします。<br>

```
dConnect.disconnectWebSocket();
```
