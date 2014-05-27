(function () {

  var ElementPrototype = Object.create(HTMLElement.prototype);

  // Lifecycle methods

  ElementPrototype.createdCallback = function () {
    console.log("created");
  };

  ElementPrototype.attachedCallback = function () {

  };

  ElementPrototype.detachedCallback = function () {

  };

  ElementPrototype.attributeChangedCallback = function (attr, oldVal, newVal) {
    if (attr in attrs) {
      attrs[attr].call(this, oldVal, newVal);
    }
  };

  // Custom methods

  ElementPrototype.foo = function () {

  };

  // Attribute handlers

  var attrs = {
    'attr': function (oldVal, newVal) {

    }
  };

  // Property handlers

  Object.defineProperties(ElementPrototype, {
    'prop': {
      get : function () {

      },
      set : function (newVal) {

      }
    }
  });

  // Register the element

  window.CustomElement = document.registerElement('custom-element', {
    prototype: ElementPrototype
  });

})();
