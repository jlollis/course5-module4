(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'menuapp/templates/categorieslist.html',
    bindings: {
      items: '<'
    }
  });

})();