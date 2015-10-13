
◇ テスト手順

1. dconnect-test.config.jsを開き、DEVICE_CONNECT_HOSTを修正する。

PCのブラウザから実行する場合には、DEVICE_CONNECT_HOSTには、Device Connect Manager
が搭載されている端末のIPを指定すること。

TEST_TIMEOUTにはタイムアウト時間を記載する。(ミリ秒)
テストでデバイスの操作が必要な場合に時間がかかるときには、ここの時間を伸ばすこと。

2. テスト用のHTMLをDevice Connect Manager搭載端末に転送する。

$ adb push ./js /sdcard/test

3. 搭載端末のchromeブラウザで「file:///sdcard/test/index.html」を開く。

