(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/menuapp/templates/categorieslist.html',
    bindings: {
      items: '<'
    }
  });

})();