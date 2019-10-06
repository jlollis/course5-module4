(function () {
  'use strict';

  angular.module('MenuApp')
    .component('menuitems', {
      templateUrl: 'src/menuapp/templates/itemslist.html',
      bindings: {
        items: '<'
      }
    });

})();