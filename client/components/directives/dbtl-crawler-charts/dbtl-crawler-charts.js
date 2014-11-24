/*global AmCharts */

(function(){
    'use strict';

    angular.module('dbtlCrawlerChartModule', [])
        .directive('dbtlCrawlerCharts', [function(){
            var o = {};

            o.restrict    = 'A';
            o.templateUrl = '/components/directives/dbtl-crawler-charts/dbtl-crawler-charts.html';
            o.scope       = {data:'='};
            o.link        = function(scope, element, attrs){

            };

            o.controller  = ['$scope', function($scope){


                $scope.initChart = function(data){

                    var crawlerChart = false,
                        cData2 = $scope.data.chartSearch,
                        cField2 = $scope.data.chartSettings.categoryField,
                        vField2 = $scope.data.chartSettings.valueField,
                        vAxes2 = $scope.data.chartSettings.valueAxes,
                        graphInfo2 = $scope.data.chartSettings.graphInfo,
                        chartTitle2 = $scope.data.chartSettings.chartTitle;

                    crawlerChart = AmCharts.makeChart('crawlerChart', {

                        'type': 'serial',
                        'categoryField': cField2,
                        'categoryAxis': {
                            'gridPosition': 'start'
                        },
                        'graphs': [
                            {
                                'title': graphInfo2,
                                'valueField': vField2,
                                'type': 'line',
                                'fillAlphas' : 0.5,
                                'bullet' : 'round',
                                'bulletAlpha': 1
                            }
                        ],
                        'valueAxes': [
                            {
                                'title': vAxes2
                            }
                        ],
                        'legend': {
                            'useGraphSettings': true
                        },
                        'titles': [
                            {
                                'size': 15,
                                'text': chartTitle2
                            }
                        ],
                        'dataProvider': cData2
                    });

                };

                $scope.$watch('data', function(newValue, oldValue){
                    if (newValue) {
                        $scope.initChart(newValue);
                        console.log(newValue, oldValue);
                    }
                }, true);
            }];
            return o;
        }]);
})();

