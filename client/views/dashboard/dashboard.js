(function(){
    'use strict';

    angular.module('dbtl')
        .controller('DashCtrl', ['$scope', 'Search', function($scope, Search){
            $scope.search = {};

            $scope.startSearch = function(){
                $scope.search.url = 'http://' + $scope.search.url;
                Search.create($scope.search).then(function(response){
                    console.log(response);
                });
            };
        }]);
})();

