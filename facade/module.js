var module = (function () {

  'use strict';

  var thePrivate = {
    i: 5,

    get: function () {
      console.log('current value: ' + this.i);
    },

    set: function (val) {
      this.i = val;
    },

    run: function () {
      console.log('running');
    },

    jump: function () {
      console.log('jumping');
    }

  };

  return {

    facade: function (args) {
      thePrivate.set(args.val);
      thePrivate.get();
      if (args.run) {
        thePrivate.run();
      }
    }

  };


}());

// Usage:
// module.facade({run: true, val:10});
