var testModule = (function () {

  'use strict';

  var counter = 0;

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log('Counter value prior to reset: ' + counter);
      counter = 0;
    }

  };

}());
