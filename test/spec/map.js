/* global afterEach, beforeEach, describe, expect, it, L, sinon */

describe('L.npmap.map', function() {
  var element,
    server;

  afterEach(function() {
    element = null;
    server.restore();
  });
  beforeEach(function() {
    element = document.createElement('div');
    element.id = 'map';
    server = sinon.fakeServer.create();
  });
  it('passes options to constructor when called without new', function() {
    var map = L.npmap.map({
      div: element,
      smallzoomControl: false
    });

    expect(map.options.smallzoomControl).to.equal(false);
  });
  describe('constructor', function() {
    it('creates the map when the div property is an object', function() {
      var map = L.npmap.map({
        div: element
      });

      expect(map).to.be.ok();
    });
    it('sets a default center for the map if none is specified', function() {
      var map = L.npmap.map({
        div: element
      });

      expect(map.getCenter().lat).to.be.ok();
    });
    it('sets a default zoom for the map if none is specified', function() {
      var map = L.npmap.map({
        div: element
      });

      expect(map.getZoom()).to.be.ok();
    });
    it('adds a default baseLayer if none is specified', function() {

    });
    it('renames the "layers" property "overlays", if specified', function() {
      
    });
    it('switches preset layers in when specified in the baseLayers property', function() {

    });
  });
});
