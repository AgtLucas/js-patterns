var myRevealingModule = (function () {

  'use strict';

  var privateVar = 'Jason Bourne',
    publicVar = 'Hey you!';

  function privateFunction() {
    console.log('Name: ' + privateVar);
  }

  function publicSetName(strName) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // Reveal public pointers to private functions and properties

}());
