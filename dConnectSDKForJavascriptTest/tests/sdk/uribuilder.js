module('URIBuilder Test', {
  setup: function() {
    init();
  }
});

QUnit.test('Create', function() {
  var builder = new dConnect.URIBuilder();
  QUnit.notEqual(builder, null, 'Create builder object.');
});

QUnit.test('setter', function() {
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
});

QUnit.test('build', function() {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('profile');
  builder.setInterface('interface');
  builder.setAttribute('attribute');
  var uri = builder.build();
  QUnit.notEqual(uri, null, 'Create uri.');
});

QUnit.test('set null', function() {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(null);
  builder.setInterface(null);
  builder.setAttribute(null);
  builder.setServiceId(null);
  builder.setAccessToken(null);
  builder.setSessionKey(null);
  builder.addParameter(null, null);
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi', 'uri=' + uri);
});

QUnit.test('set undefined', function() {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(undefined);
  builder.setInterface(undefined);
  builder.setAttribute(undefined);
  builder.setServiceId(undefined);
  builder.setAccessToken(undefined);
  builder.setSessionKey(undefined);
  builder.addParameter(undefined, undefined);
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi', 'uri=' + uri);
});

QUnit.test('set number', function() {
  var builder = new dConnect.URIBuilder();
  builder.setProfile(123);
  builder.setInterface(123);
  builder.setAttribute(123);
  builder.setServiceId(123);
  builder.setAccessToken(123);
  builder.setSessionKey(123);
  builder.addParameter(123, 123);
  var uri = builder.build();
  QUnit.equal(uri, dConnect.getBaseDomain() + '/gotapi/123/123/123',
      'uri=' + uri);
});

QUnit.asyncTest('discoverServices', function(assert) {
  dConnect.discoverServices('mediastream_recording', function(services) {
        for (var i = 0; i < services.length; i++) {
          assert.ok(true, services[i].name);
        }
        QUnit.start();
      },
      function(error, error2) {
        QUnit.start();
      });

});
