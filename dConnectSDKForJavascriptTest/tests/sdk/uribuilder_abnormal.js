QUnit.module('URIBuilder Test', {
  setup: function() {
    init();
  }
});


/**
 * dConnect.URIBuilderのテストを行うクラス。
 * 実用的なテストは、各デバイスプラグインで行うため、こちらでは割愛する。
 *
 * @class
 */
var URIBuilderTest = {};

/**
 * dConnect.URIBuildeのオブジェクトを作成するテストを行う。
 * <p id="test">
 * var builder = new dConnect.URIBuilder();
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・buildeがnullではないこと。<br/>
 * </p>
 */
URIBuilderTest.normalTest001 = function(assert) {
  var builder = new dConnect.URIBuilder();
  QUnit.notEqual(builder, null, 'Create builder object.');
  QUnit.start();
};
QUnit.test('Create', URIBuilderTest.normalTest001);

/**
 * /profile/interface/attributが設定した値になっていることを確認する
 * テストを行う。
 * <p id="test">
 *  Path:  /gotapi/profile/interface/attribute
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・/profile/interface/attributが設定した値になっていること。<br/>
 * </p>
 */
URIBuilderTest.normalTest002 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('profile');
  builder.setInterface('interface');
  builder.setAttribute('attribute');
  var profile = builder.getProfile();
  var interface = builder.getInterface();
  var attribute = builder.getAttribute();
  QUnit.equal(profile, 'profile', 'profile=' + profile);
  QUnit.equal(interface, 'interface', 'interface=' + interface);
  QUnit.equal(attribute, 'attribute', 'attribute=' + attribute);
  QUnit.start();
};
QUnit.test('Setter', URIBuilderTest.normalTest002);


/**
 * URIが作成されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi/profile/interface/attribute
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIがnullではないこと。<br/>
 * </p>
 */
URIBuilderTest.normalTest003 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('profile');
  builder.setInterface('interface');
  builder.setAttribute('attribute');
  var uri = builder.build();
  QUnit.notEqual(uri, null, 'Create uri.');
  QUnit.start();
};

QUnit.test('build', URIBuilderTest.normalTest003);


/**
 * 引数にnullが設定された場合に省略されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIが/gotapiだけであること。<br/>
 * </p>
 */
URIBuilderTest.normalTest004 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(null);
  builder.setInterface(null);
  builder.setAttribute(null);
  builder.setServiceId(null);
  builder.setAccessToken(null);
  builder.setSessionKey(null);
  builder.addParameter(null, null);
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi?serviceId=null&accessToken=null&sessionKey=null&null=null', 'uri=' + uri);
  QUnit.start();
};
QUnit.test('set null', URIBuilderTest.normalTest004);


/**
 * 引数にundefinedが設定された場合に省略されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIが/gotapiだけであること。<br/>
 * </p>
 */
URIBuilderTest.normalTest005 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(undefined);
  builder.setInterface(undefined);
  builder.setAttribute(undefined);
  builder.setServiceId(undefined);
  builder.setAccessToken(undefined);
  builder.setSessionKey(undefined);
  builder.addParameter(undefined, undefined);
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi?serviceId=undefined&accessToken=undefined&sessionKey=undefined&undefined=undefined', 'uri=' + uri);
  QUnit.start();

};
QUnit.test('set undefined', URIBuilderTest.normalTest005);

/**
 * 引数に数字が設定された場合にURIが生成されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi/123/123/123?123=123&serviceId=123&accessToken=123&sessionKey=123
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIが/gotapi/123/123/123?123=123&serviceId=123&accessToken=123&sessionKey=123であること。<br/>
 * </p>
 */
URIBuilderTest.normalTest006 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(123);
  builder.setInterface(123);
  builder.setAttribute(123);
  builder.setServiceId(123);
  builder.setAccessToken(123);
  builder.setSessionKey(123);
  builder.addParameter(123, 123);
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi/123/123/123?123=123&serviceId=123&accessToken=123&sessionKey=123',
    'uri=' + uri);
  QUnit.start();
};
QUnit.test('set number', URIBuilderTest.normalTest006);


/**
 * 引数に英字が設定された場合にURIが生成されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi/abc/abc/abc?serviceId=abc&accessToken=abc&sessionKey=abc&abc=abc
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIが/gotapi/abc/abc/abc?serviceId=abc&accessToken=abc&sessionKey=abc&abc=abcであること。<br/>
 * </p>
 */
URIBuilderTest.normalTest007 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('abc');
  builder.setInterface('abc');
  builder.setAttribute('abc');
  builder.setServiceId('abc');
  builder.setAccessToken('abc');
  builder.setSessionKey('abc');
  builder.addParameter('abc', 'abc');
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi/abc/abc/abc?serviceId=abc&accessToken=abc&sessionKey=abc&abc=abc',
    'uri=' + uri);
  QUnit.start();
};
QUnit.test('set alphabet', URIBuilderTest.normalTest007);

/**
 * 引数に英ひらがなが設定された場合にURIが生成されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi/あいう/あいう/あいう?あいう=あいう&serviceId=あいう&accessToken=あいう&sessionKey=あいう
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIがエンコードされていること。<br/>
 * </p>
 */
URIBuilderTest.normalTest008 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('あいう');
  builder.setInterface('あいう');
  builder.setAttribute('あいう');
  builder.setServiceId('あいう');
  builder.setAccessToken('あいう');
  builder.setSessionKey('あいう');
  builder.addParameter('あいう', 'あいう');
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi/%E3%81%82%E3%81%84%E3%81%86/' +
    '%E3%81%82%E3%81%84%E3%81%86/%E3%81%82%E3%81%84%E3%81%86?' +
    'serviceId=%E3%81%82%E3%81%84%E3%81%86&accessToken=%E3%81%82%E3%81%84%E3%81%86&sessionKey=%E3%81%82%E3%81%84%E3%81%86' +
    '&%E3%81%82%E3%81%84%E3%81%86=%E3%81%82%E3%81%84%E3%81%86',
    'uri=' + uri);
  QUnit.start();
};
QUnit.test('set Hiragana', URIBuilderTest.normalTest008);

/**
 * 引数に記号が設定された場合にURIが生成されることを確認するテストを行う。
 * <p id="test">
 *  Path:  /gotapi/!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=/!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=/!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=?
 *  !"#$%&\'()-^¥@[;:],./__?><}*+{`|~==!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=&serviceId=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=&
 *  accessToken=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=&sessionKey=!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIがURIがエンコードされていること。<br/>
 * </p>
 */
URIBuilderTest.normalTest009 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.setInterface('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.setAttribute('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.setServiceId('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.setAccessToken('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.setSessionKey('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  builder.addParameter('!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=', '!"#$%&\'()-^¥@[;:],./__?><}*+{`|~=');
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi/!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F' +
    '__%3F%3E%3C%7D*%2B%7B%60%7C~%3D/' +
    '!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D/' +
    '!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D?' +
    'serviceId=!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D&' +
    'accessToken=!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D&' +
    'sessionKey=!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D&' +
    '!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D=' +
    '!%22%23%24%25%26\'()-%5E%C2%A5%40%5B%3B%3A%5D%2C.%2F__%3F%3E%3C%7D*%2B%7B%60%7C~%3D',
    'uri=' + uri);
  QUnit.start();
};
QUnit.test('set symbol', URIBuilderTest.normalTest009);


/**
 * 引数に1000文字のアルファベットが設定された場合にURIが生成されることを確認するテストを行う。
 * <p id="test">
 *  Path: 省略
 * </p>
 * <h3>【期待する動作】</h3>
 * <p id="expected">
 * ・URIが生成されること。<br/>
 * </p>
 */
URIBuilderTest.normalTest010 = function(assert) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg' +
  'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.setInterface('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg' +
  'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.setAttribute('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg' +
  'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.setServiceId('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg' +
  'hijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.setAccessToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.setSessionKey('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  builder.addParameter('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl');
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '?serviceId=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '&accessToken=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '&sessionKey=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '&abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl' +
    '=abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl',
    'uri=' + uri);
  QUnit.start();
};
QUnit.test('set limit', URIBuilderTest.normalTest010);