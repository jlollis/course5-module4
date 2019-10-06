(function () {
  'use strict';

  angular.module('MenuApp')
    .component('menu_items', {
      templateUrl: 'menuapp/templates/itemslist.html',
      bindings: {
        items: '<'
      }
    });

})();