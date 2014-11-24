/*global AmCharts */

(function(){
    'use strict';

    angular.module('dbtlChartsModule', [])
        .directive('dbtlCharts', [function(){
            var o = {};

            o.restrict    = 'A';
            o.templateUrl = '/components/directives/dbtl-charts/dbtl-charts.html';
            o.scope       = {data:'='};
            o.link        = function(scope, element, attrs){

            };

            o.controller  = ['$scope', function($scope){


                $scope.initChart = function(data){

                    var chart = false,
                        cData = $scope.data.chartSearch,
                        cField = $scope.data.chartSettings.categoryField,
                        vField = $scope.data.chartSettings.valueField,
                        vAxes = $scope.data.chartSettings.valueAxes,
                        graphInfo = $scope.data.chartSettings.graphInfo,
                        chartTitle = $scope.data.chartSettings.chartTitle;

                    chart = AmCharts.makeChart('chartdiv', {

                        'type': 'serial',
                        'categoryField': cField,
                        'categoryAxis': {
                            'gridPosition': 'start'
                        },
                        'graphs': [
                            {
                                'title': graphInfo,
                                'valueField': vField,
                                'type': 'line',
                                'fillAlphas' : 0.5,
                                'bullet' : 'round',
                                'bulletAlpha': 1
                            }
                        ],
                        'valueAxes': [
                            {
                                'title': vAxes
                            }
                        ],
                        'legend': {
                            'useGraphSettings': true
                        },
                        'titles': [
                            {
                                'size': 15,
                                'text': chartTitle
                            }
                        ],
                        'dataProvider': cData
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


