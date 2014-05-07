var myBadSingleton = (function () {

  'use strict';

  // Instance store a reference to the singleton
  var instance;

  function init() {

    // Singleton
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function () {
        return privateRandomNumber;
      }
    };

  }

  return {

    // Always create a new Singleton instance
    getInstance: function () {
      instance = init();

      return instance;
    }

  };

}());
