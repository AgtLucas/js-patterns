var mySingleton = (function () {

  'use strict';

  // Instance store a reference to the singleton
  var instance;

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    var privateVariable = 'I am also private',
      privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function () {
        console.log('The public can see me');
      },

      publicProperty: 'I am also public',

      getRandomNumber: function () {
        return privateRandomNumber;
      }

    };

  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };

}());
