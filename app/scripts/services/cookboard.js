'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.cookBoard
 * @description
 * # cookBoard
 * Factory in the reviewboxApp.
 */
angular.module('reviewboxApp')
  .factory('cookBoard', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var gridOptions = {
    };
    gridOptions.columnDefs = [
      {name: "ID", field:'_id', enableColumnMenu: false, maxWidth: 100, width: 80, },
      {name: "제목", field:'title', enableColumnMenu: false, minWidth: 250, width: 280,},
      {name: "작성자", field:'author', enableColumnMenu: false, minWidth: 60, width: 80,},
      {name: "추천", field:'likes', enableColumnMenu: false, maxWidth: 60, width: 50,},
    ]
    gridOptions.data = [
      {
        "_id": "Cox",
        "title": "갓수의 저녁식사",
        "author": "홍어빵야빵야빵야",
        "likes": 12
      },
      {
        "_id": "Lorraine",
        "title": "요게 첫 글 군만두 어떠냐.........",
        "author": "오쟈",
        "likes": 59
      },
      {
        "_id": "Nancy",
        "title": "장조림 맛있당",
        "author": "심야",
        "likes": 10
      },
      {
        "_id": "Nancy",
        "title": "장조림 맛있당",
        "author": "심야",
        "likes": 10
      },
      {
        "_id": "Nancy",
        "title": "장조림 맛있당",
        "author": "심야",
        "likes": 10
      },
      {
        "_id": "Nancy",
        "title": "장조림 맛있당",
        "author": "심야",
        "likes": 10
      },
      {
        "_id": "Lorraine",
        "title": "요게 첫 글 군만두 어떠냐.........",
        "author": "오쟈",
        "likes": 59
      },

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
