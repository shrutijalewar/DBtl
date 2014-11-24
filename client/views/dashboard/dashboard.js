(function(){
    'use strict';

    angular.module('dbtl')
        .controller('DashCtrl', ['$scope', function($scope){

            //CHARTS//
            $scope.seeds = ['123456', '7777777', '006767'];
            //initialize//
            $scope.seedChart = {};
            $scope.crawlerChart = {};



            //create chart objects
            $scope.seedChart.chartSettings= {
                categoryField: 'seed',
                valueField: 'images',
                valueAxes: 'Number of Images',
                graphInfo: 'Images Per Seed',
                chartTitle: 'Images/Seed'
            };

            $scope.seedChart.chartSearch = [{
                'seed': 'www.cnn.com',
                'images': 4252
            }, {
                'seed': 'www.fox.com',
                'images': 1882
            }, {
                'seed': 'www.vox.com',
                'images': 1809
            }];

            //crawler chart object
            $scope.crawlerChart.chartSettings = {
                categoryField: 'url',
                valueField: 'images',
                valueAxes: 'Number of Images',
                graphInfo: 'Images Per Url',
                chartTitle: 'Crawler'
            };
            $scope.crawlerChart.chartSearch = [{
                'url': 'www.cnn.com',
                'images': 4252
            }, {
                'url': 'www.fox.com',
                'images': 1882
            }, {
                'url': 'www.vox.com',
                'images': 1809
            }];



            //demo data for showing a crawler chart switch//
            $scope.someChartSearch = [{
                'url': 'www.hello.com',
                'images': 494
            }, {
                'url': 'www.world.com',
                'images': 239
            }];

            $scope.someChartSettingsTitle = 'retrieved seed data';


            //function to show second chart//

            $scope.showCrawlerChart = function(seedId){
                console.log(seedId);
                //make call to database for that particular seed id
                //set $scope.crawlerChart.chartSearch = $scope.retrievedChartData *see someChartData;
                //set $scope.crawlerChart.chartSettings.chartTitle = $scope.retrievedChartSettingsTitle
                $scope.crawlerChart.chartSearch = $scope.someChartSearch;
                $scope.crawlerChart.chartSettings.chartTitle = $scope.someChartSettingsTitle;

            };
        }]);
})();

