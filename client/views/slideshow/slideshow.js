(function(){
    'use strict';

    angular.module('dbtl')
        .controller('SlideCtrl', ['$scope', 'Search', function($scope, Search){
            $scope.imgs = [];
            Search.getSlideshow().then(function(response){
               $scope.imgs = response.data.imgs;
            });
        }]);
})();
