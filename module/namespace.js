var myNamespace = (function () {

  'use strict';

  var myPrivateVar,
    myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function (foo) {
    console.log(foo);
  };

  return {

    // A public variable
    myPublicVar: 'foo',

    myPublicFunction: function (bar) {

      // Increment our private counter
      myPrivateVar++;

      myPrivateMethod(bar);

    }

  };

}());
