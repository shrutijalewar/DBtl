(function(){
    'use strict';

    angular.module('dbtl')
        .controller('DashCtrl', ['$scope', function($scope){

            //CHARTS//

            //initialize//
            $scope.chartsObject = {};
            $scope.chartsObject.moreThanOne = false;



            //create chart objects
            $scope.chartsObject.chart1Settings= {categoryField: 'seed',
                valueField: 'images',
                valueAxes: 'Number of Images',
                graphInfo: 'Images Per Seed',
                chartTitle: 'Images/Seed',
                chartNumber: 'chartdiv'};

            $scope.chartsObject.chart1Search = [{
                'seed': 'www.cnn.com',
                'images': 4252
            }, {
                'seed': 'www.fox.com',
                'images': 1882
            }, {
                'seed': 'www.vox.com',
                'images': 1809
            }];

            $scope.chartsObject.chart2Settings = {
                categoryField: 'url',
                valueField: 'images',
                valueAxes: 'Number of Images',
                graphInfo: 'Images Per Url',
                chartTitle: 'Crawler',
                chartNumber: '#chartdiv2'
            };
            $scope.chartsObject.chart2Search = [{
                'url': 'www.cnn.com',
                'images': 4252
            }, {
                'url': 'www.fox.com',
                'images': 1882
            }, {
                'url': 'www.vox.com',
                'images': 1809
            }];

            //function to show second chart//

            $scope.showCrawlerChart = function(){
                $scope.chartsObject.moreThanOne=true;
                console.log('trying to show second chart');
                $scope.chartsObject.chart1Settings.chartTitle='changing';
                var print = $scope.chartsObject.chart1Settings.chartTitle;
                console.log(print);
            };
        }]);
})();

