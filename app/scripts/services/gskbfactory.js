'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.GskbFactory
 * @description
 * # GskbFactory
 * Factory in the reviewboxApp.
 */
angular.module('reviewboxApp')
  .factory('GskbFactory', function () {

    var gridOptions = {
    };
    gridOptions.columnDefs = [
      {name: "Species", field:'species', enableColumnMenu: false, maxWidth: 120, width: 100, },
      {name: "Source", field:'source', enableColumnMenu: false, minWidth: 120, width: 120,},
      {name: "Label", field:'label', enableColumnMenu: false, minWidth: 150, width: 250,},
      {name: "# of Genes", field:'nGenes', enableColumnMenu: false, maxWidth: 120, width: 120,},
      {name: "Year", field:'year', enableColumnMenu: false, maxWidth: 90, width: 90,},
      {name: "Citation", field:'citation', enableColumnMenu: false, maxWidth: 60, width: 250,},
    ]
    gridOptions.data = [
    ];
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getGridOptions: function(){
        return gridOptions;
      }
    };
  });
