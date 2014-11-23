(function(){
    'use strict';

    angular.module('dbtl')
        .controller('DashCtrl', ['$scope', function($scope){
            $scope.object = {};
            $scope.object2 = {};

            $scope.object.settings= {categoryField: 'seed', valueField: 'images', valueAxes: 'Number of Images', graphInfo: 'Images Per Seed', chartTitle: 'Images/Seed'};
            $scope.object.search = [{
                'seed': 'www.cnn.com',
                'images': 4252
            }, {
                'seed': 'www.fox.com',
                'images': 1882
            }, {
                'seed': 'www.vox.com',
                'images': 1809
            }];

                $scope.object2.settings = {
                    categoryField: 'url',
                    valueField: 'images',
                    valueAxes: 'Number of Images',
                    graphInfo: 'Images Per Url',
                    chartTitle: 'Crawler'
                };
                $scope.object2.search = [{
                    'url': 'www.cnn.com',
                    'images': 4252
                }, {
                    'url': 'www.fox.com',
                    'images': 1882
                }, {
                    'url': 'www.vox.com',
                    'images': 1809
                }];
        }]);
})();

