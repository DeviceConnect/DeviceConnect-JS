/**
 @preserve Device Connect SDK Library v0.1.0
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * @file
 */

/**
 * @class dConnect
 * @classdesc Device Connect
 */
var dConnect = (function(parent, global) {
    "use strict";
    var XMLHttpRequest;

    if (global.self) {
        XMLHttpRequest = global.XMLHttpRequest;
    } else if (global.process) {
        XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    }

    /**
     * このウェブコンテンツがDevice Device Connect Managerとやり取りする為に用いるトークン。
     */
    var webAppAccessToken;
    /**
     * ホスト名.
     * @private
     * @type {String}
     * @default localhost
     * @see setHost
     */
    var host = "localhost";
    /**
     * ポート番号.
     * @private
     * @type {String}
     * @default 4035
     * @see setPort
     */
    var port = "4035";
    /**
     * イベント通知用のリスナーを格納するオブジェクト.
     * @type {Object}
     * @private
     * @see addEventListener
     * @see removeEventListener
     */
    var eventListener = {};

    /**
     * WebSocketのインスタンス.
     */
    var websocket;
    /**
     * websocketをクライアント側で明示的にcloseしたかどうかを示すフラグ.
     */
    var forcedClose = false;
    /**
     * WebSocketを再接続するタイマー.
     */
    var reconnectingTimerId;
    /**
     * 再接続待ちかどうかのフラグ.
     */
    var isReconnecting = false;

    /**
     * Signature生成処理種別 (SHA512)
     * @type {String}
     */
    var SHA512 = "SHA512";
    /**
     * グラントタイプ (authorization_code).
     * @type {String}
     */
    var AUTHORIZATION_CODE = "authorization_code";

    /**
     * Signature生成処理 (SHA512).
     * @type {Object}
     */
    var AuthSignatureProcSHA512 = {
        /**
         * Signature生成.
         * @param {Object.<String, String>} inputMaps 入力文字列 (key,valueの連想配列)
         * @param {String} clientSecret クライアントシークレット
         * @return {String} 生成したSignature文字列
         */
        generateSignature : function(inputMaps, clientSecret) {

            /* key昇順にソート */
            inputMaps.sort(function(a, b) {
                return (a.key < b.key) ? -1 : 1;
            });

            /* 連結 */
            var str = "";
            for (var i = 0; i < inputMaps.length; i++) {
                str += inputMaps[i].key;
                str += inputMaps[i].value;
            }

            /* clientSecretを連結 */
            str += "clientSecret";
            str += clientSecret;

            var shaObj = new jsSHA(str, "TEXT");
            var signature = shaObj.getHash("SHA-512", "HEX");
            return signature;
        }
    };

    /**
     * Signature生成処理ファクトリークラス.
     * @type {Object}
     */
    var AuthSignatureProcFactory = {

        /**
         * Signature生成処理を返す.
         * @param {String} kind Signature生成処理種別
         * @return {?Object} Signature生成処理オブジェクト
         */
        getProc : function(kind) {
            if (kind == SHA512) {
                return AuthSignatureProcSHA512;
            } else {
                return null;
            }
        }
    };

    /**
     * Signatureクラス
     * @memberOf dConnect
     * @name oauth
     * @namespace
     * @type {Object}
     */
    var AuthSignature = {

        /**
         * アクセストークン発行リクエスト用のSignatureを生成する.
         * @memberOf dConnect.oauth
         * @param {String} clientId クライアントID
         * @param {String} grantType グラントタイプ(AUTHORIZATION_CODEを指定する)
         * @param {String} deviceId デバイスID(UIアプリの場合はnullまたは""(空の文字列)を設定する)
         * @param {String} scopes スコープ(カンマ区切りで複数指定可能。(例)"bivration,file,notification")
         * @param {String} clientSecret クライアントシークレット
         * @return {String} 生成したSignature
         */
        generateSignatureForAccessTokenRequest : function(clientId, grantType, deviceId, scopes, clientSecret) {
            var inputMaps = [];
            inputMaps.push({
                key : "clientId",
                value : clientId
            });
            inputMaps.push({
                key : "grantType",
                value : grantType
            });
            if (deviceId != null && deviceId != "") {
                inputMaps.push({
                    key : "deviceId",
                    value : deviceId
                });
            }

            var strScopes = "";
            scopes.sort();
            for (var i = 0; i < scopes.length; i++) {
                if (i > 0) {
                    strScopes += ",";
                }
                strScopes += scopes[i];
            }
            inputMaps.push({
                key : "scopes",
                value : strScopes
            });

            var authSignatureProc = AuthSignatureProcFactory.getProc(SHA512);
            var signature = authSignatureProc.generateSignature(inputMaps, clientSecret);
            return signature;
        },

        /**
         * アクセストークン受信用のSignatureを生成する.
         * @memberOf dConnect.oauth
         * @param {String} accessToken アクセストークン
         * @param {String} clientSecret クライアントシークレット
         * @return {String} 生成したSignature
         */
        generateSignatureForAccessTokenResponse : function(accessToken, clientSecret) {
            var inputMaps = [];
            inputMaps.push({
                key : "accessToken",
                value : accessToken
            });

            var authSignatureProc = AuthSignatureProcFactory.getProc(SHA512);
            var signature = authSignatureProc.generateSignature(inputMaps, clientSecret);
            return signature;
        },

        /**
         * アクセストークン発行リクエスト用のSignatureを生成する(引数パラメータの数により内部処理が切り替わる).
         * @memberOf dConnect.oauth
         * @param {String} arg1 arg1
         * @param {String} arg2 arg2
         * @param {String} arg3 arg3
         * @param {String} arg4 arg4
         * @param {String} arg5 arg5
         * @return {?String} 生成したSignature
         */
        generateSignature : function(arg1, arg2, arg3, arg4, arg5) {
            if (arguments.length == 5) {
                return AuthSignature.generateSignatureForAccessTokenRequest(arg1, arg2, arg3, arg4, arg5);
            } else if (arguments.length == 2) {
                return AuthSignature.generateSignatureForAccessTokenResponse(arg1, arg2);
            } else {
                return null;
            }
        }
    };
    parent.oauth = AuthSignature;

    // ============================================
    //             Public
    // ============================================

    /**
     * Device Connectで用いられる定数.
     * @memberOf dConnect
     * @namespace
     * @type {Object.<String, (Number|Object)>}
     */
    var constants = {
        /**
         * Device Connectからの処理結果で成功を表す定数.
         * @const
         * @type {Number}
         */
        RESULT_OK : 0,
        /**
         * Device Connectからの処理結果で失敗を表す定数.
         * @const
         * @type {Number}
         */
        RESULT_ERROR : 1,

        /**
         * エラーコードを定義する列挙型.
         * @readonly
         * @enum {Number}
         */
        ErrorCode : {
            /** エラーコード: Device Connectへのアクセスに失敗した. */
            ACCESS_FAILED : -1,
            /** エラーコード: 原因不明のエラー. */
            UNKNOWN : 1,
            /** エラーコード: サポートされていないプロファイルにアクセスされた. */
            NOT_SUPPORT_PROFILE : 2,
            /** エラーコード: サポートされていないアクションが指定された. */
            NOT_SUPPORT_ACTION : 3,
            /** エラーコード: サポートされていない属性・インターフェースが指定された. */
            NOT_SUPPORT_ATTRIBUTE : 4,
            /** エラーコード: deviceIdが設定されていない. */
            EMPTY_DEVICE_ID : 5,
            /** エラーコード: デバイスが発見できなかった. */
            NOT_FOUND_DEVICE : 6,
            /** エラーコード: タイムアウトが発生した. */
            TIMEOUT : 7,
            /** エラーコード: 未知の属性・インターフェースにアクセスされた. */
            UNKNOWN_ATTRIBUTE : 8,
            /** エラーコード: バッテリー低下で操作不能. */
            LOW_BATTERY : 9,
            /** エラーコード: 不正なパラメータを受信した. */
            INVALID_REQUEST_PARAMETER : 10,
            /** エラーコード: 認証エラー. */
            AUTHORIZATION : 11,
            /** エラーコード: アクセストークンの有効期限切れ. */
            EXPIRED_ACCESS_TOKEN : 12,
            /** エラーコード: アクセストークンが設定されていない. */
            EMPTY_ACCESS_TOKEN : 13,
            /** エラーコード: スコープ外にアクセス要求がなされた. */
            SCOPE : 14,
            /** エラーコード: 認証時にclientIdが発見できなかった. */
            NOT_FOUND_CLIENT_ID : 15,
            /** エラーコード: デバイスの状態異常エラー. */
            ILLEGAL_DEVICE_STATE : 16,
            /** エラーコード: サーバの状態異常エラー. */
            ILLEGAL_SERVER_STATE : 17
        },

        /**
         * Device Connectの各種定数.
         * @namespace
         * @type {Object.<String, String>}
         */
        common : {
            /** 共通パラメータ: action。*/
            PARAM_ACTION : 'action',
            /** 共通パラメータ: deviceId。 */
            PARAM_DEVICE_ID : 'deviceId',
            /** 共通パラメータ: pluginId。 */
            PARAM_PLUGIN_ID : 'pluginId',
            /** 共通パラメータ: profile。 */
            PARAM_PROFILE : 'profile',
            /** 共通パラメータ: interface。 */
            PARAM_INTERFACE : 'interface',
            /** 共通パラメータ: attribute。 */
            PARAM_ATTRIBUTE : 'attribute',
            /** 共通パラメータ: sessionKey。 */
            PARAM_SESSION_KEY : 'sessionKey',
            /** 共通パラメータ: accessToken。 */
            PARAM_ACCESS_TOKEN : 'accessToken',
            /** 共通パラメータ: websocket。 */
            PARAM_WEB_SOCKET : 'websocket',
            /** 共通パラメータ: result。 */
            PARAM_RESULT : 'result',
            /** 共通パラメータ: errorCode。 */
            PARAM_ERROR_CODE : 'errorCode',
            /** 共通パラメータ: errorMessage。 */
            PARAM_ERROR_MESSAGE : 'errorMessage'
        },

        /**
         * Authorizationプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        authorization : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : 'authorization',

            // Atttribute
            /** アトリビュート: create_client。*/
            ATTR_CREATE_CLIENT : 'create_client',
            /** アトリビュート: request_accesstoken。 */
            ATTR_REQUEST_ACCESS_TOKEN : 'request_accesstoken',

            // Parameter
            /** パラメータ: package。 */
            PARAM_PACKAGE : 'package',
            /** パラメータ: clientId。 */
            PARAM_CLIENT_ID : 'clientId',
            /** パラメータ: clientSecret。 */
            PARAM_CLIENT_SECRET : 'clientSecret',
            /** パラメータ: grantType。 */
            PARAM_GRANT_TYPE : 'grantType',
            /** パラメータ: scope。 */
            PARAM_SCOPE : "scope",
            /** パラメータ: scopes。 */
            PARAM_SCOPES : "scopes",
            /** パラメータ: applicationName。 */
            PARAM_APPLICATION_NAME : "applicationName",
            /** パラメータ: signature。 */
            PARAM_SIGNATURE : "signature",
            /** パラメータ: accessToken。 */
            PARAM_ACCESS_TOKEN : "accessToken",
            /** パラメータ: expirePeriod。 */
            PARAM_EXPIRE_PERIOD : "expirePeriod",

            /**
             * Defined in 4.1 Authorization Code Grant (RFC6749).
             */
            GRANT_TYPE_AUTHORIZATION_CODE : AUTHORIZATION_CODE,
            /**
             * Defined in 4.3 Resource Owner Password Credentials Grant (RFC6749).
             */
            GRANT_TYPE_PASSWORD : "password",
            /**
             * Defined in 4.4 Client Credentials Grant (RFC6749).
             */
            GRANT_TYPE_CLIENT_CREDENTIALS : "client_credentials",
            /**
             * Defined in 6 Refreshing an Access Token (RFC6749).
             */
            GRANT_TYPE_REFRESH_TOKEN : "refresh_token"
        },

        /**
         * Batteryプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        battery : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "battery",

            // Atttribute
            /** アトリビュート: charging */
            ATTR_CHARGING : "charging",
            /** アトリビュート: chargingTime */
            ATTR_CHARGING_TIME : "chargingTime",
            /** アトリビュート: dischargingTime */
            ATTR_DISCHARGING_TIME : "dischargingTime",
            /** アトリビュート: level */
            ATTR_LEVEL : "level",
            /** アトリビュート: onchargingchange */
            ATTR_ON_CHARGING_CHANGE : "onchargingchange",
            /** アトリビュート: onbatterychange */
            ATTR_ON_BATTERY_CHANGE : "onbatterychange",

            // Parameter
            /** パラメータ: charging */
            PARAM_CHARGING : "charging",
            /** パラメータ: chargingTime */
            PARAM_CHARGING_TIME : "chargingTime",
            /** パラメータ: dischargingTime */
            PARAM_DISCHARGING_TIME : "dischargingTime",
            /** パラメータ: level */
            PARAM_LEVEL : "level",
            /** パラメータ: battery */
            PARAM_BATTERY : "battery",
        },

        /**
         * Connectプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        connect : {
            // Profile Name
            /** プロファイル名。 */
            PROFILE_NAME : "connect",

            // Interface
            /** インターフェース: bluetooth */
            INTERFACE_BLUETOOTH : "bluetooth",

            // Attribute
            /** アトリビュート: wifi */
            ATTR_WIFI : "wifi",
            /** アトリビュート: bluetooth */
            ATTR_BLUETOOTH : "bluetooth",
            /** アトリビュート: discoverable */
            ATTR_DISCOVERABLE : "discoverable",
            /** アトリビュート: ble */
            ATTR_BLE : "ble",
            /** アトリビュート: nfc */
            ATTR_NFC : "nfc",
            /** アトリビュート: onwifichange */
            ATTR_ON_WIFI_CHANGE : "onwifichange",
            /** アトリビュート: onbluetoothchange */
            ATTR_ON_BLUETOOTH_CHANGE : "onbluetoothchange",
            /** アトリビュート: onblechange */
            ATTR_ON_BLE_CHANGE : "onblechange",
            /** アトリビュート: onnfcchange */
            ATTR_ON_NFC_CHANGE : "onnfcchange",

            // Parameter
            /** パラメータ: enable */
            PARAM_ENABLE : "enable",
            /** パラメータ: connectStatus */
            PARAM_CONNECT_STATUS : "connectStatus",
        },

        /**
         * Device Orientationプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        device_orientation : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "deviceorientation",

            // Attribute
            /** アトリビュート: ondeviceorientation */
            ATTR_ON_DEVICE_ORIENTATION : "ondeviceorientation",

            // Parameter
            /** パラメータ: orientation */
            PARAM_ORIENTATION : "orientation",
            /** パラメータ: acceleration */
            PARAM_ACCELERATION : "acceleration",
            /** パラメータ: x */
            PARAM_X : "x",
            /** パラメータ: y */
            PARAM_Y : "y",
            /** パラメータ: z */
            PARAM_Z : "z",
            /** パラメータ: rotationRate */
            PARAM_ROTATION_RATE : "rotationRate",
            /** パラメータ: alpha */
            PARAM_ALPHA : "alpha",
            /** パラメータ: beta */
            PARAM_BETA : "beta",
            /** パラメータ: gamma */
            PARAM_GAMMA : "gamma",
            /** パラメータ: interval */
            PARAM_INTERVAL : "interval",
            /** パラメータ: accelerationIncludingGravity */
            PARAM_ACCELERATION_INCLUDEING_GRAVITY : "accelerationIncludingGravity",
        },

        /**
         * File Descriptorプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        file_descriptor : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "file_descriptor",

            // Attribute
            /** アトリビュート: open */
            ATTR_OPEN : "open",
            /** アトリビュート: close */
            ATTR_CLOSE : "close",
            /** アトリビュート: read */
            ATTR_READ : "read",
            /** アトリビュート: write */
            ATTR_WRITE : "write",
            /** アトリビュート: onwatchfile */
            ATTR_ON_WATCH_FILE : "onwatchfile",

            // Parameter
            /** パラメータ: flag */
            PARAM_FLAG : "flag",
            /** パラメータ: position */
            PARAM_POSITION : "position",
            /** パラメータ: length */
            PARAM_LENGTH : "length",
            /** パラメータ: size */
            PARAM_SIZE : "size",
            /** パラメータ: file */
            PARAM_FILE : "file",
            /** パラメータ: curr */
            PARAM_CURR : "curr",
            /** パラメータ: prev */
            PARAM_PREV : "prev",
            /** パラメータ: fileData */
            PARAM_FILE_DATA : "fileData",
            /** パラメータ: path */
            PARAM_PATH : "path",
            /** パラメータ: media */
            PARAM_MEDIA : "media",

            // ===== ファイルフラグ =====
            /** ファイルフラグ: 読み込みのみ. */
            FLAG_R : "r",
            /** ファイルフラグ: 読み込み書き込み */
            FLAG_RW : "rw",
        },

        /**
         * Fileプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        file : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "file",

            // Attribute
            /** アトリビュート: receive */
            ATTR_RECEIVE : "receive",
            /** アトリビュート: send */
            ATTR_SEND : "send",
            /** アトリビュート: list */
            ATTR_LIST : "list",
            /** アトリビュート: update */
            ATTR_UPDATE : "update",
            /** アトリビュート: remove */
            ATTR_REMOVE : "remove",
            /** アトリビュート: mkdir */
            ATTR_MKDIR : "mkdir",
            /** アトリビュート: rmdir */
            ATTR_RMDIR : "rmdir",

            // Parameter
            /** パラメータ: mimeType */
            PARAM_MIME_TYPE : "mimeType",
            /** パラメータ: fileName */
            PARAM_FILE_NAME : "fileName",
            /** パラメータ: fileSize */
            PARAM_FILE_SIZE : "fileSize",
            /** パラメータ: media */
            PARAM_MEDIA : "media",
            /** パラメータ: path */
            PARAM_PATH : "path",
            /** パラメータ: fileType */
            PARAM_FILE_TYPE : "fileType",
            /** パラメータ: order */
            PARAM_ORDER : "order",
            /** パラメータ: offset */
            PARAM_OFFSET : "offset",
            /** パラメータ: limit */
            PARAM_LIMIT : "limit",
            /** パラメータ: count */
            PARAM_COUNT : "count",
            /** パラメータ: updateDate */
            PARAM_UPDATE_DATE : "updateDate",
            /** パラメータ: files */
            PARAM_FILES : "files",
        },

        /**
         * Media Playerプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        media_player : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "media_player",

            // Attribute
            /** アトリビュート: media */
            ATTR_MEDIA : "media",
            /** アトリビュート: media_list */
            ATTR_MEDIA_LIST : "media_list",
            /** アトリビュート: play_status */
            ATTR_PLAY_STATUS : "play_status",
            /** アトリビュート: play */
            ATTR_PLAY : "play",
            /** アトリビュート: stop */
            ATTR_STOP : "stop",
            /** アトリビュート: pause */
            ATTR_PAUSE : "pause",
            /** アトリビュート: resume */
            ATTR_RESUME : "resume",
            /** アトリビュート: seek */
            ATTR_SEEK : "seek",
            /** アトリビュート: volume */
            ATTR_VOLUME : "volume",
            /** アトリビュート: mute */
            ATTR_MUTE : "mute",
            /** アトリビュート: onstatuschange */
            ATTR_ON_STATUS_CHANGE : "onstatuschange",

            // Parameter
            /** パラメータ: media */
            PARAM_MEDIA : "media",
            /** パラメータ: mediaId */
            PARAM_MEDIA_ID : "mediaId",
            /** パラメータ: mediaPlayer */
            PARAM_MEDIA_PLAYER : "mediaPlayer",
            /** パラメータ: mimeType */
            PARAM_MIME_TYPE : "mimeType",
            /** パラメータ: title */
            PARAM_TITLE : "title",
            /** パラメータ: type */
            PARAM_TYPE : "type",
            /** パラメータ: language */
            PARAM_LANGUAGE : "language",
            /** パラメータ: description */
            PARAM_DESCRIPTION : "description",
            /** パラメータ: imageUri */
            PARAM_IMAGE_URI : "imageUri",
            /** パラメータ: duration */
            PARAM_DURATION : "duration",
            /** パラメータ: creators */
            PARAM_CREATORS : "creators",
            /** パラメータ: creator */
            PARAM_CREATOR : "creator",
            /** パラメータ: role */
            PARAM_ROLE : "role",
            /** パラメータ: keywords */
            PARAM_KEYWORDS : "keywords",
            /** パラメータ: genres */
            PARAM_GENRES : "genres",
            /** パラメータ: query */
            PARAM_QUERY : "query",
            /** パラメータ: order */
            PARAM_ORDER : "order",
            /** パラメータ: offset */
            PARAM_OFFSET : "offset",
            /** パラメータ: limit */
            PARAM_LIMIT : "limit",
            /** パラメータ: count */
            PARAM_COUNT : "count",
            /** パラメータ: status */
            PARAM_STATUS : "status",
            /** パラメータ: pos */
            PARAM_POS : "pos",
            /** パラメータ: volume */
            PARAM_VOLUME : "volume",
            /** パラメータ: mute */
            PARAM_MUTE : "mute",

            // ===== play_statusで指定するステータスを定義 =====
            /** play_statusで指定するステータス: Play */
            PLAY_STATUS_PLAY : "play",
            /** play_statusで指定するステータス: Stop */
            PLAY_STATUS_STOP : "stop",
            /** play_statusで指定するステータス: Pause */
            PLAY_STATUS_PAUSE : "pause",

            // ===== onstatuschangeで受け取るステータス =====
            /** onstatuschangeで受け取るステータス: Play */
            ON_STATUS_CHANGE_PLAY : "play",
            /** onstatuschangeで受け取るステータス: Stop */
            ON_STATUS_CHANGE_STOP : "stop",
            /** onstatuschangeで受け取るステータス: Pause */
            ON_STATUS_CHANGE_PAUSE : "pause",
            /** onstatuschangeで受け取るステータス: Resume */
            ON_STATUS_CHANGE_RESUME : "resume",
            /** onstatuschangeで受け取るステータス: Mute */
            ON_STATUS_CHANGE_MUTE : "mute",
            /** onstatuschangeで受け取るステータス: Unmute */
            ON_STATUS_CHNAGE_UNMUTE : "unmute",
            /** onstatuschangeで受け取るステータス: Media */
            ON_STATUS_CHANGE_MEDIA : "media",
            /** onstatuschangeで受け取るステータス: Volume */
            ON_STATUS_CHANGE_VOLUME : "volume",
            /** onstatuschangeで受け取るステータス: complete */
            ON_STATUS_CHANGE_COMPLETE : "complete",

            // ===== 並び順 =====
            /** 並び順: 昇順 */
            ORDER_ASC : "asc",
            /** 並び順: 降順 */
            ORDER_DSEC : "desc",
        },

        /**
         * Media Stream Recordingプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        media_stream_recording : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "mediastream_recording",

            // Attribute
            /** アトリビュート: mediarecorder */
            ATTR_MEDIARECORDER : "mediarecorder",
            /** アトリビュート: takephoto */
            ATTR_TAKE_PHOTO : "takephoto",
            /** アトリビュート: record */
            ATTR_RECORD : "record",
            /** アトリビュート: pause */
            ATTR_PAUSE : "pause",
            /** アトリビュート: resume */
            ATTR_RESUME : "resume",
            /** アトリビュート: stop */
            ATTR_STOP : "stop",
            /** アトリビュート: mutetrack */
            ATTR_MUTETRACK : "mutetrack",
            /** アトリビュート: unmutetrack */
            ATTR_UNMUTETRACK : "unmutetrack",
            /** アトリビュート: options */
            ATTR_OPTIONS : "options",
            /** アトリビュート: onphoto */
            ATTR_ON_PHOTO : "onphoto",
            /** アトリビュート: ondataavailable */
            ATTR_ON_DATA_AVAILABLE : "ondataavailable",
            /** アトリビュート: onrecordingchange */
            ATTR_ON_RECORDING_CHANGE : "onrecordingchange",

            /** パラメータ: target */
            PARAM_TARGET : "target",
            /** パラメータ: recorders */
            PARAM_RECORDERS : "recorders",
            /** パラメータ: id */
            PARAM_ID : "id",
            /** パラメータ: name */
            PARAM_NAME : "name",
            /** パラメータ: state */
            PARAM_STATE : "state",
            /** パラメータ: imageWidth */
            PARAM_IMAGE_WIDTH : "imageWidth",
            /** パラメータ: imageHeight */
            PARAM_IMAGE_HEIGHT : "imageHeight",
            /** パラメータ: mimeType */
            PARAM_MIME_TYPE : "mimeType",
            /** パラメータ: config */
            PARAM_CONFIG : "config",
            /** パラメータ: timeslice */
            PARAM_TIME_SLICE : "timeslice",
            /** パラメータ: settings */
            PARAM_SETTINGS : "settings",
            /** パラメータ: photo */
            PARAM_PHOTO : "photo",
            /** パラメータ: media */
            PARAM_MEDIA : "media",
            /** パラメータ: status */
            PARAM_STATUS : "status",
            /** パラメータ: errorMessage */
            PARAM_ERROR_MESSAGE : "errorMessage",
            /** パラメータ: path */
            PARAM_PATH : "path",
            /** パラメータ: min */
            PARAM_MIN : "min",
            /** パラメータ: max */
            PARAM_MAX : "max",

            // ===== カメラの状態定数 =====
            /** メラの状態定数: 停止中 */
            RECORDER_STATE_INACTIVE : "inactive",
            /** メラの状態定数: レコーディング中 */
            RECORDER_STATE_RECORDING : "recording",
            /** メラの状態定数: 一時停止中 */
            RECORDER_STATE_PAUSED : "paused",

            // ===== 動画撮影、音声録音の状態定数 =====
            /** 動画撮影、音声録音の状態定数: 開始 */
            RECORDING_STATE_RECORDING : "recording",
            /** 動画撮影、音声録音の状態定数: 終了 */
            RECORDING_STATE_STOP : "stop",
            /** 動画撮影、音声録音の状態定数: 一時停止 */
            RECORDING_STATE_PAUSE : "pause",
            /** 動画撮影、音声録音の状態定数: 再開 */
            RECORDING_STATE_RESUME : "resume",
            /** 動画撮影、音声録音の状態定数: ミュート */
            RECORDING_STATE_MUTETRACK : "mutetrack",
            /** 動画撮影、音声録音の状態定数: ミュート解除 */
            RECORDING_STATE_UNMUTETRACK : "unmutetrack",
            /** 動画撮影、音声録音の状態定数: エラー発生 */
            RECORDING_STATE_ERROR : "error",
            /** 動画撮影、音声録音の状態定数: 警告発生 */
            RECORDING_STATE_WARNING : "warning",
        },

        /**
         * Network Service Discoveryプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        network_service_discovery : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "network_service_discovery",

            // Attribute
            /** アトリビュート: getnetworkservices */
            ATTR_GET_NETWORK_SERVICES : "getnetworkservices",
            /** アトリビュート: onservicechange */
            ATTR_ON_SERVICE_CHANGE : "onservicechange",

            // Parameter
            /** パラメータ: networkService */
            PARAM_NETWORK_SERVICE : "networkService",
            /** パラメータ: services */
            PARAM_SERVICES : "services",
            /** パラメータ: state */
            PARAM_STATE : "state",
            /** パラメータ: id */
            PARAM_ID : "id",
            /** パラメータ: name */
            PARAM_NAME : "name",
            /** パラメータ: type */
            PARAM_TYPE : "type",
            /** パラメータ: online */
            PARAM_ONLINE : "online",
            /** パラメータ: config */
            PARAM_CONFIG : "config",

            // ===== ネットワークタイプ =====
            /** ネットワークタイプ: WiFi */
            NETWORK_TYPE_WIFI : "WiFi",
            /** ネットワークタイプ: BLE */
            NETWORK_TYPE_BLE : "BLE",
            /** ネットワークタイプ: NFC */
            NETWORK_TYPE_NFC : "NFC",
            /** ネットワークタイプ: Bluetooth */
            NETWORK_TYPE_BLUETOOTH : "Bluetooth",
        },

        /**
         * Notificationプロファイルの定数
         * @namespace
         * @type {Object.<String, (String|Number)>}
         */
        notification : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "notification",

            // Attribute
            /** アトリビュート: notify */
            ATTR_NOTIFY : "notify",
            /** アトリビュート: onclick */
            ATTR_ON_CLICK : "onclick",
            /** アトリビュート: onclose */
            ATTR_ON_CLOSE : "onclose",
            /** アトリビュート: onerror */
            ATTR_ON_ERROR : "onerror",
            /** アトリビュート: onshow */
            ATTR_ON_SHOW : "onshow",

            // Parameter
            /** パラメータ: body */
            PARAM_BODY : "body",
            /** パラメータ: type */
            PARAM_TYPE : "type",
            /** パラメータ: dir */
            PARAM_DIR : "dir",
            /** パラメータ: lang */
            PARAM_LANG : "lang",
            /** パラメータ: tag */
            PARAM_TAG : "tag",
            /** パラメータ: icon */
            PARAM_ICON : "icon",
            /** パラメータ: notificationId */
            PARAM_NOTIFICATION_ID : "notificationId",

            // ===== 通知タイプ定数 =====
            /** 通知タイプ: 音声通話着信 */
            NOTIFICATION_TYPE_PHONE : 0,
            /** 通知タイプ: メール着信 */
            NOTIFICATION_TYPE_MAIL : 1,
            /** 通知タイプ: SMS着信 */
            NOTIFICATION_TYPE_SMS : 2,
            /** 通知タイプ: イベント */
            NOTIFICATION_TYPE_EVENT : 3,

            // ===== 向き =====
            /** 向き: 自動 */
            DIRECTION_AUTO : "auto",
            /** 向き: 右から左 */
            DIRECTION_RIGHT_TO_LEFT : "rtl",
            /** 向き: 左から右 */
            DIRECTION_LEFT_TO_RIGHT : "ltr",
        },

        /**
         * Phoneプロファイルの定数
         * @namespace
         * @type {Object.<String, (String|Number)>}
         */
        phone : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "phone",

            // Attribute
            /** アトリビュート: call */
            ATTR_CALL : "call",
            /** アトリビュート: set */
            ATTR_SET : "set",
            /** アトリビュート: onconnect */
            ATTR_ON_CONNECT : "onconnect",

            // Parameter
            /** パラメータ: phoneNumber */
            PARAM_PHONE_NUMBER : "phoneNumber",
            /** パラメータ: mode */
            PARAM_MODE : "mode",
            /** パラメータ: phoneStatus */
            PARAM_PHONE_STATUS : "phoneStatus",
            /** パラメータ: state */
            PARAM_STATE : "state",

            // ===== 電話のモード定数 =====
            /** 電話のモード: サイレントモード */
            PHONE_MODE_SILENT : 0,
            /** 電話のモード: マナーモード */
            PHONE_MODE_MANNER : 1,
            /** 電話のモード: 音あり */
            PHONE_MODE_SOUND : 2,

            // ===== 通話状態定数 =====
            /** 通話状態: 通話開始 */
            CALL_STATE_START : 0,
            /** 通話状態: 通話失敗 */
            CALL_STATE_FAILED : 1,
            /** 通話状態: 通話終了 */
            CALL_STATE_FINISHED : 2,
        },

        /**
         * Proximityプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        proximity : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "proximity",

            // Attribute
            /** アトリビュート: ondeviceproximity */
            ATTR_ON_DEVICE_PROXIMITY : "ondeviceproximity",
            /** アトリビュート: onuserproximity */
            ATTR_ON_USER_PROXIMITY : "onuserproximity",

            // Parameter
            /** パラメータ: value */
            PARAM_VALUE : "value",
            /** パラメータ: min */
            PARAM_MIN : "min",
            /** パラメータ: max */
            PARAM_MAX : "max",
            /** パラメータ: threshold */
            PARAM_THRESHOLD : "threshold",
            /** パラメータ: proximity */
            PARAM_PROXIMITY : "proximity",
            /** パラメータ: near */
            PARAM_NEAR : "near",
        },

        /**
         * Settingsプロファイルの定数
         * @namespace
         * @type {Object.<String, (String|Number)>}
         */
        settings : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "settings",

            // Interface
            /** インターフェース: sound */
            INTERFACE_SOUND : "sound",
            /** インターフェース: display */
            INTERFACE_DISPLAY : "display",

            // Attribute
            /** アトリビュート: volume */
            ATTR_VOLUME : "volume",
            /** アトリビュート: date */
            ATTR_DATE : "date",
            /** アトリビュート: light */
            ATTR_LIGHT : "light",
            /** アトリビュート: sleep */
            ATTR_SLEEP : "sleep",

            // Parameter
            /** パラメータ: kind */
            PARAM_KIND : "kind",
            /** パラメータ: level */
            PARAM_LEVEL : "level",
            /** パラメータ: date */
            PARAM_DATE : "date",
            /** パラメータ: time */
            PARAM_TIME : "time",

            // ===== 最大最小 =====
            /** 最大Level */
            MAX_LEVEL : 1.0,
            /** 最小Level */
            MIN_LEVEL : 0,

            // ===== 音量の種別定数 =====
            /** 音量の種別定数: アラーム */
            VOLUME_KIND_ALARM : 1,
            /** 音量の種別定数: 通話音 */
            VOLUME_KIND_CALL : 2,
            /** 音量の種別定数: 着信音 */
            VOLUME_KIND_RINGTONE : 3,
            /** 音量の種別定数: メール着信音 */
            VOLUME_KIND_MAIL : 4,
            /** 音量の種別定数: その他SNS等の着信音 */
            VOLUME_KIND_OTHER : 5,
            /** 音量の種別定数: メディアプレーヤーの音量 */
            VOLUME_KIND_MEDIA_PLAYER : 6,
        },

        /**
         * Systemプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        system : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "system",

            // Interface
            /** インターフェース: device */
            INTERFACE_DEVICE : "device",

            // Attribute
            /** アトリビュート: device */
            ATTRI_DEVICE : "device",
            /** アトリビュート: events */
            ATTRI_EVENTS : "events",
            /** アトリビュート: keyword */
            ATTRI_KEYWORD : "keyword",
            /** アトリビュート: wakeup */
            ATTRI_WAKEUP : "wakeup",

            // Parameter
            /** パラメータ: supports */
            PARAM_SUPPORTS : "supports",
            /** パラメータ: version */
            PARAM_VERSION : "version",
            /** パラメータ: connect */
            PARAM_CONNECT : "connect",
            /** パラメータ: wifi */
            PARAM_WIFI : "wifi",
            /** パラメータ: bluetooth */
            PARAM_BLUETOOTH : "bluetooth",
            /** パラメータ: nfc */
            PARAM_NFC : "nfc",
            /** パラメータ: ble */
            PARAM_BLE : "ble",
            /** パラメータ: id */
            PARAM_ID : "id",
            /** パラメータ: name */
            PARAM_NAME : "name",
            /** パラメータ: plugins */
            PARAM_PLUGINS : "plugins",
            /** パラメータ: pluginId */
            PARAM_PLUGIN_ID : "pluginId",
        },

        /**
         * Vibrationプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        vibration : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "vibration",

            // Attribute
            /** アトリビュート: vibrate */
            ATTR_VIBRATE : "vibrate",

            // Parameter
            /** パラメータ: pattern。 */
            PARAM_PATTERN : "pattern",
        },
        /**
         * Canvasプロファイルの定数
         * @namespace
         * @type {Object.<String, String>}
         */
        canvas : {
            // Profile name
            /** プロファイル名。 */
            PROFILE_NAME : "canvas",

            // Attribute
            /** アトリビュート: drawimage */
            ATTR_DRAWIMAGE : "drawimage",

            // Parameter
            /** パラメータ: mimeType */
            PARAM_MIME_TYPE : "mimeType",
            /** パラメータ: data */
            PARAM_DATA : "data",
            /** パラメータ: x */
            PARAM_X : "x",
            /** パラメータ: y */
            PARAM_Y : "y",
            /** パラメータ: mode */
            PARAM_MODE : "mode",
            
            /** モードフラグ：スケールモード */
            MODE_SCALES : "scales",
            
            /** モードフラグ：フィルモード */
            MODE_FILLS : "fills",
        },
    };
    parent.constants = constants;

    /**
     * HTTP通信成功時のコールバック。
     * @callback dConnect.HTTPSuccessCallback
     * @param {!Number} status HTTPレスポンスのステータスコード
     * @param {Object.<String, String>} headers HTTPレスポンスのヘッダー
     * @param {String} responseText HTTPレスポンスのテキスト
     */

    /**
     * HTTP通信失敗時のコールバック。
     * @callback dConnect.HTTPFailCallback
     * @param {!Number} readyState HTTPリクエスト送信に用いたXMLHTTPRequestの、失敗時のreadyState
     * @param {?Number} status HTTPレスポンスのステータスコード
     */

    /**
     * REST API呼び出し.
     * @memberOf dConnect
     * @param {String} method HTTPメソッド
     * @param {String} uri URI
     * @param {Object.<String, String>} headers HTTPリクエストヘッダー。Key-Valueマップで渡す。
     * @param {} data コンテンツデータ
     * @param {dConnect.HTTPSuccessCallback} success_cb 成功時コールバック。
     * @param {dConnect.HTTPFailCallback} error_cb 失敗時コールバック。
     */
    var execute = function(method, uri, header, data, success_cb, error_cb) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            // OPENED: open()が呼び出されて、まだsend()が呼び出されてない。
            if (xhr.readyState === 1) {
                for (var key in header) {
                    xhr.setRequestHeader(key.toLowerCase(), header[key]);
                }

                xhr.send(data);
            }
            // HEADERS_RECEIVED: send() が呼び出され、ヘッダーとステータスが通った。
            else if (xhr.readyState === 2) {
                // console.log("### 2");
            }
            // LOADING: ダウンロード中
            else if (xhr.readyState === 3) {
                // console.log("### 3");
            }
            // DONE: 一連の動作が完了した。
            else if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if ( typeof success_cb === "function") {
                        var headerMap = {};
                        var headerArr = xhr.getAllResponseHeaders().split('\r\n');
                        for (var key in headerArr) {
                            var delim_idx = headerArr[key].indexOf(':');
                            var hKey = headerArr[key].substr(0, delim_idx).toLowerCase();
                            var hVal = headerArr[key].substr(delim_idx + 1).trim();
                            if (hKey.length != 0) {
                                headerMap[hKey] = hVal;
                            }
                        }
                        success_cb(xhr.status, headerMap, xhr.responseText);
                    }
                } else {
                    error_cb(xhr.readyState, xhr.status);
                }
            }
        };
        xhr.onerror = function() {
            // console.log("### error");
        };
        xhr.timeout = 60000;
        xhr.open(method, uri, true);
    };
    parent.execute = execute;

    /**
     * Network Service Discovery APIへの簡易アクセスを提供する。
     * @memberOf dConnect
     * @param {dConnect.HTTPSuccessCallback} success_cb 成功時コールバック。
     * @param {dConnect.HTTPFailCallback} error_cb 失敗時コールバック。
     *
     * @example
     * // デバイスの検索
     * dConnect.discoverDevices(
     *     function(status, headerMap, responseText) {
     *         var json = JSON.parse(responseText);
     *     },
     *     function(readyState, status) {
     *     });
     */
    var discoverDevices = function(success_cb, error_cb) {
        var builder = new parent.URIBuilder();
        builder.setProfile(parent.constants.network_service_discovery.PROFILE_NAME);
        builder.setAttribute(parent.constants.network_service_discovery.ATTR_GET_NETWORK_SERVICES);
        parent.execute('GET', builder.build(), null, null, success_cb, error_cb);
    };
    parent.discoverDevices = discoverDevices;

    /**
     * System APIへの簡易アクセスを提供する。
     * @memberOf dConnect
     * @param {dConnect.HTTPSuccessCallback} success_cb 成功時コールバック。
     * @param {dConnect.HTTPFailCallback} error_cb 失敗時コールバック。
     */
    var getSystemInfo = function(success_cb, error_cb) {
        var builder = new parent.URIBuilder();
        builder.setProfile(parent.constants.system.PROFILE_NAME);
        parent.execute('GET', builder.build(), null, null, success_cb, error_cb);
    };
    parent.getSystemInfo = getSystemInfo;

    /**
     * Device Connect Managerが起動しているチェックする。そもそもインストールされていなければ、インストール
     * 画面へと進ませる。
     * @memberOf dConnect
     * @param {function} success_cb 成功時コールバック。
     * @param {function} error_cb 失敗時コールバック。
     */
    var checkDeviceConnect = function(success_cb, error_cb) {
        this.getSystemInfo(function(status, headers, data) {
            if (status === 200) {
                var obj = JSON.parse(data);
                if (obj.result == parent.constants.RESULT_OK) {
                    // localhost:4035でGotAPIが利用可能
                    success_cb(obj.version);
                } else {
                    // localhost:4035にサーバが起動しているがGotAPIではない何かが起動
                    error_cb(status, "Device Connect was not found; it seems another server is running instead.");
                }
            }
        },
        function(readyState, status) {
            error_cb(status, "HTTP Error " + status);
        });
    };
    parent.checkDeviceConnect = checkDeviceConnect;

    /**
     * 指定されたDevice Connect Event APIにイベントリスナーを登録する。
     * @memberOf dConnect
     * @param {String} uri 特定のDevice Connect Event APIを表すURI（必要なパラメータはURLパラメータとして埋め込まれている）
     * @param {function} event_cb 登録したいイベント受領用コールバック。
     * @param {function] success_cb イベント登録成功コールバック
     * @param {function] error_cb イベント登録失敗コールバック
     *
     * @example
     * var uri = "http://localhost:4035/gotapi/battery/onchargingchange?device=xxx&sessionKey=yyy";
     * dConnect.addEventListener(uri, event_cb, success_cb, error_cb);
     */
    var addEventListener = function(uri, event_cb, success_cb, error_cb) {
        if (typeof event_cb != "function") {
            throw new TypeError("2nd argument must be a function for callback.");
        }
        parent.execute('PUT', uri, null, null, function(status, headerMap, responseText) {
            var json = JSON.parse(responseText);
            if (json.result == parent.constants.RESULT_OK) {
                eventListener[uri] = event_cb;
                if (success_cb) {
                    success_cb();
                }
            } else {
                if (error_cb) {
                    error_cb(json.errorCode, json.errorMessage);
                }
            }
        }, function(readyState, status) {
            if (error_cb) {
                error_cb(parent.constants.ErrorCode.ACCESS_FAILED, "Failed to send request to Device Connect Manager; HTTP " + status);
            }
        });
    };
    parent.addEventListener = addEventListener;

    /**
     * 指定されたDevice Connect Event APIからイベントリスナーを削除する。
     * @memberOf dConnect
     * @param {String} uri 特定のDevice Connect Event APIを表すURI（必要なパラメータはURLパラメータとして埋め込まれている）
     * @param {function] success_cb イベント登録解除成功コールバック
     * @param {function] error_cb イベント登録解除失敗コールバック
     *
     * @example
     * var uri = "http://localhost:4035/gotapi/battery/onchargingchange?device=xxx&sessionKey=yyy";
     * dConnect.removeEventListener(uri, success_cb, error_cb);
     */
    var removeEventListener = function(uri, success_cb, error_cb) {
        parent.execute('DELETE', uri, null, null, function(status, headerMap, responseText) {
            var json = JSON.parse(responseText);
            if (json.result == parent.constants.RESULT_OK) {
                delete eventListener[uri];
                if (success_cb) {
                    success_cb();
                }
            } else {
                if (error_cb) {
                    error_cb(json.errorCode, json.errorMessage);
                }
            }
        }, function(readyState, status) {
            if (error_cb) {
                error_cb(parent.constants.ErrorCode.ACCESS_FAILED, "Failed to send request to Device Connect Manager; HTTP " + status);
            }
        });
    };
    parent.removeEventListener = removeEventListener;

    /**
     * dConnectManagnerに認可を求める.
     * @memberOf dConnect
     * @param packageName アプリを識別するためのURI
     * @param scopes 使用するスコープの配列
     * @param applicationName アプリ名
     * @param success_cb 成功時のコールバック
     * @param error_cb 失敗時のコールバック
     *
     * @example
     * // アクセスするプロファイル一覧を定義
     * var scopes = Array('network_service_discovery', 'sysytem', 'battery');
     * // 認可を実行
     * dConnect.authorization('http://hogehoge.com/index.html', scopes, 'サンプル',
     *     function(clientId, clientSecret, accessToken) {
     *         // clientId, clientSecret, accessTokenを保存して、プロファイルにアクセス
     *     },
     *     function(errorCode, errorMessage) {
     *         alert("Failed to get accessToken.");
     *     });
     */
    var authorization = function(packageName, scopes, applicationName, success_cb, error_cb) {
        parent.createClient(packageName, function(clientId, clientSecret) {
            parent.requestAccessToken(clientId, clientSecret, scopes, applicationName, function(accessToken) {
                if (success_cb) {
                    success_cb(clientId, clientSecret, accessToken);
                }
            }, error_cb);
        }, error_cb);
    };
    parent.authorization = authorization;

    /**
     * クライアントを作成する.
     * @memberOf dConnect
     * @param pakcageName ヘージを識別するための名前
     * @param success_cb クライアント作成に成功した場合のコールバック
     * @param error_cb クライアント作成に失敗した場合のコールバック
     *
     * @example
     * dConnect.createClient(packageName,
     *     function(clientId, clientSecret) {
     *         // clientId, clientSecretを保存して、アクセストークンの取得に使用する
     *     },
     *     function(errorCode, errorMessage) {
     *     }
     * );
     */
    var createClient = function(packageName, success_cb, error_cb) {
        var builder = new parent.URIBuilder();
        builder.setProfile(parent.constants.authorization.PROFILE_NAME);
        builder.setAttribute(parent.constants.authorization.ATTR_CREATE_CLIENT);
        builder.addParameter(parent.constants.authorization.PARAM_PACKAGE, packageName);
        parent.execute('GET', builder.build(), null, null, function(status, headerMap, responseText) {
            var json = JSON.parse(responseText);
            if (json.result == parent.constants.RESULT_OK) {
                var clientId = json.clientId;
                var clientSecret = json.clientSecret;
                if (success_cb) {
                    success_cb(clientId, clientSecret);
                }
            } else {
                var errorCode = json.errorCode;
                var errorMessage = json.errorMessage;
                if (error_cb) {
                    error_cb(errorCode, errorMessage);
                }
            }
        }, function(xhr, textStatus, errorThrown) {
            if (error_cb) {
                error_cb(0, "Failed to create client.");
            }
        });
    };
    parent.createClient = createClient;

    /**
     * アクセストークンを要求する.
     * @memberOf dConnect
     * @param clientId クライアントID
     * @param clientSecret クライアントシークレット
     * @param scopes スコープ一覧(配列)
     * @param applicationName アプリ名
     * @param success_cb アクセストークン取得に成功した場合のコールバック
     * @param error_cb アクセストークン取得に失敗した場合のコールバック
     *
     * @example
     * dConnect.requestAccessToken(clientId, clientSecret, scopes, 'アプリ名',
     *     function(accessToken) {
     *         // アクセストークンの保存して、プロファイルのアクセスを行う
     *     },
     *     function(errorCode, errorMessage) {
     *     }
     * );
     */
    var requestAccessToken = function(clientId, clientSecret, scopes, applicatonName, success_cb, error_cb) {
        // パラメータ作成
        var sig = dConnect.oauth.generateSignatureForAccessTokenRequest(clientId, AUTHORIZATION_CODE, undefined, scopes, clientSecret);
        // uri作成
        var builder = new parent.URIBuilder();
        builder.setProfile(parent.constants.authorization.PROFILE_NAME);
        builder.setAttribute(parent.constants.authorization.ATTR_REQUEST_ACCESS_TOKEN);
        builder.addParameter(parent.constants.authorization.PARAM_CLIENT_ID, clientId);
        builder.addParameter(parent.constants.authorization.PARAM_GRANT_TYPE, AUTHORIZATION_CODE);
        builder.addParameter(parent.constants.authorization.PARAM_SCOPE, parent.combineScope(scopes));
        builder.addParameter(parent.constants.authorization.PARAM_SIGNATURE, sig);
        builder.addParameter(parent.constants.authorization.PARAM_APPLICATION_NAME, applicatonName);
        parent.execute('GET', builder.build(), null, null, function(status, headerMap, responseText) {
            var json = JSON.parse(responseText);
            if (json.result == parent.constants.RESULT_OK) {
                webAppAccessToken = json.accessToken;
                if (success_cb) {
                    success_cb(webAppAccessToken);
                }
            } else {
                var errorCode = json.errorCode;
                var errorMessage = json.errorMessage;
                if (error_cb) {
                    error_cb(errorCode, errorMessage);
                }
            }
        }, function(xhr, textStatus, errorThrown) {
            if (error_cb) {
                error_cb(0, "Failed to get access token.");
            }
        });
    };
    parent.requestAccessToken = requestAccessToken;

    /**
     * スコープの配列を文字列に置換する.
     * @memberOf dConnect
     * @param {Array.<String>} scopes スコープ一覧
     * @return <String> 連結されたスコープ一覧
     */
    var combineScope = function(scopes) {
        var scope = '';
        for (var i = 0; i < scopes.length; i++) {
            if (i > 0) {
                scope += ',';
            }
            scope += scopes[i];
        }
        return scope;
    };
    parent.combineScope = combineScope;

    /**
     * ホスト名を設定する.
     * @memberOf dConnect
     * @param {String} h ホスト名
     */
    var setHost = function(h) {
        host = h;
    };
    parent.setHost = setHost;

    /**
     * ポート番号を設定する.
     * @memberOf dConnect
     * @param {Number} p ポート番号
     */
    var setPort = function(p) {
        port = p;
    };
    parent.setPort = setPort;

    /**
     * ベースとなるドメイン名を取得する.
     * @memberOf dConnect
     * @return {String} ドメイン名
     */
    var getBaseDomain = function() {
        return 'http://' + host + ':' + port;
    };
    parent.getBaseDomain = getBaseDomain;

    /**
     * WebSocketを開く.
     * <p>
     * WebSocketは、一つしか接続することができない。
     * dConnect.isConnectedWebSocket()を用いて、接続確認はできるので、
     * 接続されている場合には、一度、dConnect.disconnectWebSocket()で
     * 切断してから、再度接続処理を行って下さい。
     * </p>
     * @memberOf dConnect
     * @param {!String} sessionKey Device Connect側に要求したいイベント用WebSocketの識別子
     * @param cb WebSocketの開閉イベントを受け取るコールバック関数
     *
     * @example
     * // Websocketを開く
     * dConnect.connectWebSocket(sessionKey, function(eventCode, message) {
     * });
     *
     */
    var connectWebSocket = function(sessionKey, cb) {
        if (parent.isConnectedWebSocket()) {
            return;
        }
        websocket = new WebSocket('ws://' + host + ':' + port + '/websocket');
        websocket.onopen = function(e) {
            clearTimeout(reconnectingTimerId);
            forcedClose = false;
            isReconnecting = false;
            
            // 本アプリのイベント用WebSocketと1対1で紐づいたセッションキーをDevice Connect Managerに登録してもらう。
            websocket.send('{"sessionKey":"' + sessionKey + '"}');
            if (cb) {
                cb(0, "open");
            }
        };
        websocket.onmessage = function(msg) {
            var json = JSON.parse(msg.data);
            var uri = "/gotapi/";
            if (json.profile) {
                uri += json.profile;
            }
            if (json.interface) {
                uri += "/";
                uri += json.interface;
            }
            if (json.attribute) {
                uri += "/";
                uri += json.attribute;
            }
            for (var key in eventListener) {
                if (key.lastIndexOf(uri) > 0) {
                    if(eventListener[key] != null && typeof(eventListener[key]) == "function") {
                        eventListener[key](msg.data);
                    }
                }
            }
        };
        websocket.onerror = function(error) {
            if (cb) {
                cb(2, "error: " + error);
            }
        }
        websocket.onclose = function(e) {
            if (!forcedClose && !isReconnecting) {
                isReconnecting = true;
                reconnectingTimerId = setTimeout(function(){
                    connectWebSocket(sessionKey, cb);
                }, 1000);
            }
            if (cb) {
                cb(1, "close");
            }
        };
    };
    parent.connectWebSocket = connectWebSocket;

    /**
     * WebSocketを切断する.
     * @memberOf dConnect
     */
    var disconnectWebSocket = function() {
        if (websocket) {
            forcedClose = true;
            websocket.close();
            websocket = undefined;
        }
    };
    parent.disconnectWebSocket = disconnectWebSocket;

    /**
     * Websocketが接続されているかチェックする.
     * @return 接続している場合にはtrue、それ以外はfalse
     */
    var isConnectedWebSocket = function() {
        return websocket != undefined && forcedClose == false;
    }
    parent.isConnectedWebSocket = isConnectedWebSocket;

    /**
     * URIを作成するためのユーティリティクラス。
     * <p>
     * ホスト名やポート番号は、省略された場合にはdConnect.setHost()、
     * dConnect.setPort()で指定された値が設定される。
     * </p>
     * @memberOf dConnect
     * @class
     * @example
     * var builder = new dConnect.URIBuilder();
     * builder.setProfile("battery");
     * builder.setAttribute("level");
     * builder.setDeviceId(deviceId);
     * builder.setAccessToken(accessToken);
     * builder.addParameter("key", "value");
     *
     * var uri = builder.build();
     *
     * uriは"http://localhost:4035/gotapi/battery/level?deviceId=deviceId&accessToken=accessToken&key=value"に変換される。
     */
    var URIBuilder = function() {
        this.scheme = "http://";
        this.host = host;
        this.port = port;
        this.api = "gotapi";
        this.profile = null;
        this.inter = null;
        this.attribute = null;
        this.params = {};
    };
    parent.URIBuilder = URIBuilder;

    /**
     * スキーマを設定する。
     * <p>
     * デフォルトでは、「http://」が設定されている。
     * </p>
     * @memberOf dConnect.URIBuilder
     * @param {String} scheme スキーマ
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setScheme = function(scheme) {
        this.scheme = scheme;
        return this;
    };
    /**
     * スキーマを取得する。
     * @memberOf dConnect.URIBuilder
     * @return {String} スキーマ
     */
    URIBuilder.prototype.getScheme = function() {
        return this.scheme;
    };

    /**
     * APIを取得する。
     * デフォルトではgotapiが指定される。
     * @memberOf dConnect.URIBuilder
     * @return {String} API
     */
    URIBuilder.prototype.getApi = function() {
        return this.api;
    };

    /**
     * APIを設定する。
     * <p>
     * デフォルトではgotapiが指定される。
     * </p>
     * @memberOf dConnect.URIBuilder
     * @param {String} api API
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setApi = function(api) {
        this.api = api;
        return this;
    }
    /**
     * ホスト名を設定する。
     * <p>
     * デフォルトでは、dConnect.setHost()で設定された値が設定される。<br/>
     * 何も設定していない場合にはlocalhostが設定される。
     * </p>
     * @memberOf dConnect.URIBuilder
     * @param {String} host ホスト名
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setHost = function(host) {
        this.host = host;
        return this;
    };
    /**
     * ホスト名を取得する。
     * @memberOf dConnect.URIBuilder
     * @return {String} ホスト名
     */
    URIBuilder.prototype.getHost = function() {
        return this.host;
    };

    /**
     * ポート番号を設定する。
     * <p>
     * デフォルトでは、dConnect.setPort()で設定された値が設定される。<br/>
     * 何も設定していない場合には4035が設定される。
     * </p>
     * @memberOf dConnect.URIBuilder
     * @param {Number} port ポート番号
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setPort = function(port) {
        this.port = port;
        return this;
    };

    /**
     * ポート番号を取得する。
     * @memberOf dConnect.URIBuilder
     * @return {Number} ポート番号
     */
    URIBuilder.prototype.getPort = function() {
        return this.port;
    };

    /**
     * プロファイル名を設定する。
     * <p>
     * Device Connectで定義してあるプロファイル名を指定すること。<br/>
     * <ul>
     * <li>network_service_discovery</li>
     * <li>system</li>
     * <li>battery</li>
     * <li>mediastream_recording</li>
     * </ul>
     * などなど。
     * </p>
     * @memberOf dConnect.URIBuilder
     * @param {String} profile プロファイル名
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setProfile = function(profile) {
        this.profile = profile;
        return this;
    };

    /**
     * プロファイル名を取得する。
     * @memberOf dConnect.URIBuilder
     * @return {String} プロファイル名
     */
    URIBuilder.prototype.getProfile = function() {
        return this.profile;
    };

    /**
     * インターフェース名を設定する。
     * 
     * @param {String} inter インターフェース名
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setInterface = function(inter) {
        this.inter = inter;
        return this;
    };

    /**
     * インターフェース名を取得する。
     * @memberOf dConnect.URIBuilder
     * @return {String} インターフェース名
     */
    URIBuilder.prototype.getInterface = function() {
        return this.inter;
    };

    /**
     * アトリビュート名を設定する。
     * @memberOf dConnect.URIBuilder
     * @param {String} attribute アトリビュート名
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setAttribute = function(attribute) {
        this.attribute = attribute;
        return this;
    };

    /**
     * アトリビュート名を取得する。
     * @memberOf dConnect.URIBuilder
     * @return {String} アトリビュート名
     */
    URIBuilder.prototype.getAttribute = function() {
        return this.attribute;
    };

    /**
     * デバイスIDを設定する。
     * @memberOf dConnect.URIBuilder
     * @param {String} deviceId デバイスID
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setDeviceId = function(deviceId) {
        this.params['deviceId'] = deviceId;
        return this;
    };

    /**
     * アクセストークンを設定する。
     * @memberOf dConnect.URIBuilder
     * @param {String} accessToken アクセストークン
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setAccessToken = function(accessToken) {
        this.params['accessToken'] = accessToken;
        return this;
    };

    /**
     * セッションキーを設定する。
     * @memberOf dConnect.URIBuilder
     * @param {String} sessionKey セッションキー
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.setSessionKey = function(sessionKey) {
        this.params['sessionKey'] = sessionKey;
        return this;
    };

    /**
     * パラメータを追加する。
     * @memberOf dConnect.URIBuilder
     * @param {String} key キー
     * @param {Object.<String, String>} value バリュー
     * @return {URIBuilder} 自分自身のインスタンス
     */
    URIBuilder.prototype.addParameter = function(key, value) {
        this.params[key] = value;
        return this;
    };

    /**
     * URIに変換する。
     * @memberOf dConnect.URIBuilder
     * @return {String} uri
     */
    URIBuilder.prototype.build = function() {
        var uri = this.scheme + this.host + ":" + this.port;
        if (this.api) {
            uri += "/" + encodeURIComponent(this.api);
        }
        if (this.profile) {
            uri += "/" + encodeURIComponent(this.profile);
        }
        if (this.inter) {
            uri += "/" + encodeURIComponent(this.inter);
        }
        if (this.attribute) {
            uri += "/" + encodeURIComponent(this.attribute);
        }
        if (this.params) {
            var p = "";
            for (var key in this.params) {
                p += (p.length == 0) ? "?" : "&";
                p += encodeURIComponent(key) + "=" + encodeURIComponent(this.params[key]);
            }
            uri += p;
        }
        return uri;
    };

    if (global.process) {
        exports.dConnect = dConnect;
    }
    // global.dConnect = dConnect;

    document.addEventListener("DOMContentLoaded", function(event) {
        // parent.checkDConnect();
    });

    return parent;
})(dConnect || {}, this.self || global);

/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-2 as well as the corresponding HMAC implementation
 as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2013
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
 */
(function(T) {
    function z(a, c, b) {
        var g = 0, f = [0], h = "", l = null, h = b || "UTF8";
        if ("UTF8" !== h && "UTF16" !== h)
            throw "encoding must be UTF8 or UTF16";
        if ("HEX" === c) {
            if (0 !== a.length % 2)
                throw "srcString of HEX type must be in byte increments";
            l = B(a);
            g = l.binLen;
            f = l.value
        } else if ("ASCII" === c || "TEXT" === c)
            l = J(a, h), g = l.binLen, f = l.value;
        else if ("B64" === c)
            l = K(a), g = l.binLen, f = l.value;
        else
            throw "inputFormat must be HEX, TEXT, ASCII, or B64";
        this.getHash = function(a, c, b, h) {
            var l = null, d = f.slice(), n = g, p;
            3 === arguments.length ? "number" !== typeof b && ( h = b, b = 1) : 2 === arguments.length && ( b = 1);
            if (b !== parseInt(b, 10) || 1 > b)
                throw "numRounds must a integer >= 1";
            switch(c) {
            case "HEX":
                l = L;
                break;
            case "B64":
                l = M;
                break;
            default:
                throw "format must be HEX or B64";
            }
            if ("SHA-1" === a)
                for ( p = 0; p < b; p++)
                    d = y(d, n), n = 160;
            else if ("SHA-224" === a)
                for ( p = 0; p < b; p++)
                    d = v(d, n, a), n = 224;
            else if ("SHA-256" === a)
                for ( p = 0; p < b; p++)
                    d = v(d, n, a), n = 256;
            else if ("SHA-384" === a)
                for ( p = 0; p < b; p++)
                    d = v(d, n, a), n = 384;
            else if ("SHA-512" === a)
                for ( p = 0; p < b; p++)
                    d = v(d, n, a), n = 512;
            else
                throw "Chosen SHA variant is not supported";
            return l(d, N(h))
        };
        this.getHMAC = function(a, b, c, l, s) {
            var d, n, p, m, w = [], x = [];
            d = null;
            switch(l) {
            case "HEX":
                l = L;
                break;
            case "B64":
                l = M;
                break;
            default:
                throw "outputFormat must be HEX or B64";
            }
            if ("SHA-1" === c)
                n = 64, m = 160;
            else if ("SHA-224" === c)
                n = 64, m = 224;
            else if ("SHA-256" === c)
                n = 64, m = 256;
            else if ("SHA-384" === c)
                n = 128, m = 384;
            else if ("SHA-512" === c)
                n = 128, m = 512;
            else
                throw "Chosen SHA variant is not supported";
            if ("HEX" === b)
                d = B(a), p = d.binLen, d = d.value;
            else if ("ASCII" === b || "TEXT" === b)
                d = J(a, h), p = d.binLen, d = d.value;
            else if ("B64" === b)
                d = K(a), p = d.binLen, d = d.value;
            else
                throw "inputFormat must be HEX, TEXT, ASCII, or B64";
            a = 8 * n;
            b = n / 4 - 1;
            n < p / 8 ? ( d = "SHA-1" === c ? y(d, p) : v(d, p, c), d[b] &= 4294967040) : n > p / 8 && (d[b] &= 4294967040);
            for ( n = 0; n <= b; n += 1)
                w[n] = d[n] ^ 909522486, x[n] = d[n] ^ 1549556828;
            c = "SHA-1" === c ? y(x.concat(y(w.concat(f), a + g)), a + m) : v(x.concat(v(w.concat(f), a + g, c)), a + m, c);
            return l(c, N(s))
        }
    }

    function s(a, c) {
        this.a = a;
        this.b = c
    }

    function J(a, c) {
        var b = [], g, f = [], h = 0, l;
        if ("UTF8" === c)
            for ( l = 0; l < a.length; l += 1)
                for ( g = a.charCodeAt(l), f = [], 2048 < g ? (f[0] = 224 | (g & 61440) >>> 12, f[1] = 128 | (g & 4032) >>> 6, f[2] = 128 | g & 63) : 128 < g ? (f[0] = 192 | (g & 1984) >>> 6, f[1] = 128 | g & 63) : f[0] = g, g = 0; g < f.length; g += 1)
                    b[h >>> 2] |= f[g] << 24 - h % 4 * 8, h += 1;
        else if ("UTF16" === c)
            for ( l = 0; l < a.length; l += 1)
                b[h >>> 2] |= a.charCodeAt(l) << 16 - h % 4 * 8, h += 2;
        return {
            value : b,
            binLen : 8 * h
        }
    }

    function B(a) {
        var c = [], b = a.length, g, f;
        if (0 !== b % 2)
            throw "String of HEX type must be in byte increments";
        for ( g = 0; g < b; g += 2) {
            f = parseInt(a.substr(g, 2), 16);
            if (isNaN(f))
                throw "String of HEX type contains invalid characters";
            c[g >>> 3] |= f << 24 - g % 8 * 4
        }
        return {
            value : c,
            binLen : 4 * b
        }
    }

    function K(a) {
        var c = [], b = 0, g, f, h, l, r;
        if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/))
            throw "Invalid character in base-64 string";
        g = a.indexOf("=");
        a = a.replace(/\=/g, "");
        if (-1 !== g && g < a.length)
            throw "Invalid '=' found in base-64 string";
        for ( f = 0; f < a.length; f += 4) {
            r = a.substr(f, 4);
            for ( h = l = 0; h < r.length; h += 1)
                g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(r[h]), l |= g << 18 - 6 * h;
            for ( h = 0; h < r.length - 1; h += 1)
                c[b >> 2] |= (l >>> 16 - 8 * h & 255) << 24 - b % 4 * 8, b += 1
        }
        return {
            value : c,
            binLen : 8 * b
        }
    }

    function L(a, c) {
        var b = "", g = 4 * a.length, f, h;
        for ( f = 0; f < g; f += 1)
            h = a[f >>> 2] >>> 8 * (3 - f % 4), b += "0123456789abcdef".charAt(h >>> 4 & 15) + "0123456789abcdef".charAt(h & 15);
        return c.outputUpper ? b.toUpperCase() : b
    }

    function M(a, c) {
        var b = "", g = 4 * a.length, f, h, l;
        for ( f = 0; f < g; f += 3)
            for ( l = (a[f >>> 2] >>> 8 * (3 - f % 4) & 255) << 16 | (a[f + 1 >>> 2] >>> 8 * (3 - (f + 1) % 4) & 255) << 8 | a[f + 2 >>> 2] >>> 8 * (3 - (f + 2) % 4) & 255, h = 0; 4 > h; h += 1)
                b = 8 * f + 6 * h <= 32 * a.length ? b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(l >>> 6 * (3 - h) & 63) : b + c.b64Pad;
        return b
    }

    function N(a) {
        var c = {
            outputUpper : !1,
            b64Pad : "="
        };
        try {
            a.hasOwnProperty("outputUpper") && (c.outputUpper = a.outputUpper), a.hasOwnProperty("b64Pad") && (c.b64Pad = a.b64Pad)
        } catch(b) {
        }
        if ("boolean" !== typeof c.outputUpper)
            throw "Invalid outputUpper formatting option";
        if ("string" !== typeof c.b64Pad)
            throw "Invalid b64Pad formatting option";
        return c
    }

    function U(a, c) {
        return a << c | a >>> 32 - c
    }

    function u(a, c) {
        return a >>> c | a << 32 - c
    }

    function t(a, c) {
        var b = null, b = new s(a.a, a.b);
        return b = 32 >= c ? new s(b.a >>> c | b.b << 32 - c & 4294967295, b.b >>> c | b.a << 32 - c & 4294967295) : new s(b.b >>> c - 32 | b.a << 64 - c & 4294967295, b.a >>> c - 32 | b.b << 64 - c & 4294967295)
    }

    function O(a, c) {
        var b = null;
        return b = 32 >= c ? new s(a.a >>> c, a.b >>> c | a.a << 32 - c & 4294967295) : new s(0, a.a >>> c - 32)
    }

    function V(a, c, b) {
        return a ^ c ^ b
    }

    function P(a, c, b) {
        return a & c ^ ~a & b
    }

    function W(a, c, b) {
        return new s(a.a & c.a ^ ~a.a & b.a, a.b & c.b ^ ~a.b & b.b)
    }

    function Q(a, c, b) {
        return a & c ^ a & b ^ c & b
    }

    function X(a, c, b) {
        return new s(a.a & c.a ^ a.a & b.a ^ c.a & b.a, a.b & c.b ^ a.b & b.b ^ c.b & b.b)
    }

    function Y(a) {
        return u(a, 2) ^ u(a, 13) ^ u(a, 22)
    }

    function Z(a) {
        var c = t(a, 28), b = t(a, 34);
        a = t(a, 39);
        return new s(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b)
    }

    function $(a) {
        return u(a, 6) ^ u(a, 11) ^ u(a, 25)
    }

    function aa(a) {
        var c = t(a, 14), b = t(a, 18);
        a = t(a, 41);
        return new s(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b)
    }

    function ba(a) {
        return u(a, 7) ^ u(a, 18) ^ a >>> 3
    }

    function ca(a) {
        var c = t(a, 1), b = t(a, 8);
        a = O(a, 7);
        return new s(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b)
    }

    function da(a) {
        return u(a, 17) ^ u(a, 19) ^ a >>> 10
    }

    function ea(a) {
        var c = t(a, 19), b = t(a, 61);
        a = O(a, 6);
        return new s(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b)
    }

    function R(a, c) {
        var b = (a & 65535) + (c & 65535);
        return ((a >>> 16) + (c >>> 16) + (b >>> 16) & 65535) << 16 | b & 65535
    }

    function fa(a, c, b, g) {
        var f = (a & 65535) + (c & 65535) + (b & 65535) + (g & 65535);
        return ((a >>> 16) + (c >>> 16) + (b >>> 16) + (g >>> 16) + (f >>> 16) & 65535) << 16 | f & 65535
    }

    function S(a, c, b, g, f) {
        var h = (a & 65535) + (c & 65535) + (b & 65535) + (g & 65535) + (f & 65535);
        return ((a >>> 16) + (c >>> 16) + (b >>> 16) + (g >>> 16) + (f >>> 16) + (h >>> 16) & 65535) << 16 | h & 65535
    }

    function ga(a, c) {
        var b, g, f;
        b = (a.b & 65535) + (c.b & 65535);
        g = (a.b >>> 16) + (c.b >>> 16) + (b >>> 16);
        f = (g & 65535) << 16 | b & 65535;
        b = (a.a & 65535) + (c.a & 65535) + (g >>> 16);
        g = (a.a >>> 16) + (c.a >>> 16) + (b >>> 16);
        return new s((g & 65535) << 16 | b & 65535, f)
    }

    function ha(a, c, b, g) {
        var f, h, l;
        f = (a.b & 65535) + (c.b & 65535) + (b.b & 65535) + (g.b & 65535);
        h = (a.b >>> 16) + (c.b >>> 16) + (b.b >>> 16) + (g.b >>> 16) + (f >>> 16);
        l = (h & 65535) << 16 | f & 65535;
        f = (a.a & 65535) + (c.a & 65535) + (b.a & 65535) + (g.a & 65535) + (h >>> 16);
        h = (a.a >>> 16) + (c.a >>> 16) + (b.a >>> 16) + (g.a >>> 16) + (f >>> 16);
        return new s((h & 65535) << 16 | f & 65535, l)
    }

    function ia(a, c, b, g, f) {
        var h, l, r;
        h = (a.b & 65535) + (c.b & 65535) + (b.b & 65535) + (g.b & 65535) + (f.b & 65535);
        l = (a.b >>> 16) + (c.b >>> 16) + (b.b >>> 16) + (g.b >>> 16) + (f.b >>> 16) + (h >>> 16);
        r = (l & 65535) << 16 | h & 65535;
        h = (a.a & 65535) + (c.a & 65535) + (b.a & 65535) + (g.a & 65535) + (f.a & 65535) + (l >>> 16);
        l = (a.a >>> 16) + (c.a >>> 16) + (b.a >>> 16) + (g.a >>> 16) + (f.a >>> 16) + (h >>> 16);
        return new s((l & 65535) << 16 | h & 65535, r)
    }

    function y(a, c) {
        var b = [], g, f, h, l, r, s, u = P, t = V, v = Q, d = U, n = R, p, m, w = S, x, q = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        a[c >>> 5] |= 128 << 24 - c % 32;
        a[(c + 65 >>> 9 << 4) + 15] = c;
        x = a.length;
        for ( p = 0; p < x; p += 16) {
            g = q[0];
            f = q[1];
            h = q[2];
            l = q[3];
            r = q[4];
            for ( m = 0; 80 > m; m += 1)
                b[m] = 16 > m ? a[m + p] : d(b[m - 3] ^ b[m - 8] ^ b[m - 14] ^ b[m - 16], 1), s = 20 > m ? w(d(g, 5), u(f, h, l), r, 1518500249, b[m]) : 40 > m ? w(d(g, 5), t(f, h, l), r, 1859775393, b[m]) : 60 > m ? w(d(g, 5), v(f, h, l), r, 2400959708, b[m]) : w(d(g, 5), t(f, h, l), r, 3395469782, b[m]), r = l, l = h, h = d(f, 30), f = g, g = s;
            q[0] = n(g, q[0]);
            q[1] = n(f, q[1]);
            q[2] = n(h, q[2]);
            q[3] = n(l, q[3]);
            q[4] = n(r, q[4])
        }
        return q
    }

    function v(a, c, b) {
        var g, f, h, l, r, t, u, v, z, d, n, p, m, w, x, q, y, C, D, E, F, G, H, I, e, A = [], B, k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        d = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
        f = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
        if ("SHA-224" === b || "SHA-256" === b)
            n = 64, g = (c + 65 >>> 9 << 4) + 15, w = 16, x = 1, e = Number, q = R, y = fa, C = S, D = ba, E = da, F = Y, G = $, I = Q, H = P, d = "SHA-224" === b ? d : f;
        else if ("SHA-384" === b || "SHA-512" === b)
            n = 80, g = (c + 128 >>> 10 << 5) + 31, w = 32, x = 2, e = s, q = ga, y = ha, C = ia, D = ca, E = ea, F = Z, G = aa, I = X, H = W, k = [new e(k[0], 3609767458), new e(k[1], 602891725), new e(k[2], 3964484399), new e(k[3], 2173295548), new e(k[4], 4081628472), new e(k[5], 3053834265), new e(k[6], 2937671579), new e(k[7], 3664609560), new e(k[8], 2734883394), new e(k[9], 1164996542), new e(k[10], 1323610764), new e(k[11], 3590304994), new e(k[12], 4068182383), new e(k[13], 991336113), new e(k[14], 633803317), new e(k[15], 3479774868), new e(k[16], 2666613458), new e(k[17], 944711139), new e(k[18], 2341262773), new e(k[19], 2007800933), new e(k[20], 1495990901), new e(k[21], 1856431235), new e(k[22], 3175218132), new e(k[23], 2198950837), new e(k[24], 3999719339), new e(k[25], 766784016), new e(k[26], 2566594879), new e(k[27], 3203337956), new e(k[28], 1034457026), new e(k[29], 2466948901), new e(k[30], 3758326383), new e(k[31], 168717936), new e(k[32], 1188179964), new e(k[33], 1546045734), new e(k[34], 1522805485), new e(k[35], 2643833823), new e(k[36], 2343527390), new e(k[37], 1014477480), new e(k[38], 1206759142), new e(k[39], 344077627), new e(k[40], 1290863460), new e(k[41], 3158454273), new e(k[42], 3505952657), new e(k[43], 106217008), new e(k[44], 3606008344), new e(k[45], 1432725776), new e(k[46], 1467031594), new e(k[47], 851169720), new e(k[48], 3100823752), new e(k[49], 1363258195), new e(k[50], 3750685593), new e(k[51], 3785050280), new e(k[52], 3318307427), new e(k[53], 3812723403), new e(k[54], 2003034995), new e(k[55], 3602036899), new e(k[56], 1575990012), new e(k[57], 1125592928), new e(k[58], 2716904306), new e(k[59], 442776044), new e(k[60], 593698344), new e(k[61], 3733110249), new e(k[62], 2999351573), new e(k[63], 3815920427), new e(3391569614, 3928383900), new e(3515267271, 566280711), new e(3940187606, 3454069534), new e(4118630271, 4000239992), new e(116418474, 1914138554), new e(174292421, 2731055270), new e(289380356, 3203993006), new e(460393269, 320620315), new e(685471733, 587496836), new e(852142971, 1086792851), new e(1017036298, 365543100), new e(1126000580, 2618297676), new e(1288033470, 3409855158), new e(1501505948, 4234509866), new e(1607167915, 987167468), new e(1816402316, 1246189591)], d = "SHA-384" === b ? [new e(3418070365, d[0]), new e(1654270250, d[1]), new e(2438529370, d[2]), new e(355462360, d[3]), new e(1731405415, d[4]), new e(41048885895, d[5]), new e(3675008525, d[6]), new e(1203062813, d[7])] : [new e(f[0], 4089235720), new e(f[1], 2227873595), new e(f[2], 4271175723), new e(f[3], 1595750129), new e(f[4], 2917565137), new e(f[5], 725511199), new e(f[6], 4215389547), new e(f[7], 327033209)];
        else
            throw "Unexpected error in SHA-2 implementation";
        a[c >>> 5] |= 128 << 24 - c % 32;
        a[g] = c;
        B = a.length;
        for ( p = 0; p < B; p += w) {
            c = d[0];
            g = d[1];
            f = d[2];
            h = d[3];
            l = d[4];
            r = d[5];
            t = d[6];
            u = d[7];
            for ( m = 0; m < n; m += 1)
                A[m] = 16 > m ? new e(a[m * x + p], a[m * x + p + 1]) : y(E(A[m - 2]), A[m - 7], D(A[m - 15]), A[m - 16]), v = C(u, G(l), H(l, r, t), k[m], A[m]), z = q(F(c), I(c, g, f)), u = t, t = r, r = l, l = q(h, v), h = f, f = g, g = c, c = q(v, z);
            d[0] = q(c, d[0]);
            d[1] = q(g, d[1]);
            d[2] = q(f, d[2]);
            d[3] = q(h, d[3]);
            d[4] = q(l, d[4]);
            d[5] = q(r, d[5]);
            d[6] = q(t, d[6]);
            d[7] = q(u, d[7])
        }
        if ("SHA-224" === b)
            a = [d[0], d[1], d[2], d[3], d[4], d[5], d[6]];
        else if ("SHA-256" === b)
            a = d;
        else if ("SHA-384" === b)
            a = [d[0].a, d[0].b, d[1].a, d[1].b, d[2].a, d[2].b, d[3].a, d[3].b, d[4].a, d[4].b, d[5].a, d[5].b];
        else if ("SHA-512" === b)
            a = [d[0].a, d[0].b, d[1].a, d[1].b, d[2].a, d[2].b, d[3].a, d[3].b, d[4].a, d[4].b, d[5].a, d[5].b, d[6].a, d[6].b, d[7].a, d[7].b];
        else
            throw "Unexpected error in SHA-2 implementation";
        return a
    }


    "function" === typeof define && typeof define.amd ? define(function() {
        return z
    }) : "undefined" !== typeof exports ? "undefined" !== typeof module && module.exports ? module.exports = exports = z : exports = z : T.jsSHA = z
})(this);
