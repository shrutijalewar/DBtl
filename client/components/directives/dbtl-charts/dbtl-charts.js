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

                if(data.moreThanOne){
                    $scope.chart2Exists = true;
                }

                var chart1 = false,
                cData = $scope.data.chart1Search,
                cField = $scope.data.chart1Settings.categoryField,
                vField = $scope.data.chart1Settings.valueField,
                vAxes = $scope.data.chart1Settings.valueAxes,
                graphInfo = $scope.data.chart1Settings.graphInfo,
                chartTitle = $scope.data.chart1Settings.chartTitle,
                chartNum = $scope.data.chart1Settings.chartNumber,
            //chart 2
                chart2 = false,
                cData2 = $scope.data.chart2Search,
                cField2 = $scope.data.chart2Settings.categoryField,
                vField2 = $scope.data.chart2Settings.valueField,
                vAxes2 = $scope.data.chart2Settings.valueAxes,
                graphInfo2 = $scope.data.chart2Settings.graphInfo,
                chartTitle2 = $scope.data.chart2Settings.chartTitle,
                chartNum2 = $scope.data.chart2Settings.chartNumber;
                //var config = $scope.config || {};
                //var div = 'chart'+chartNum;

                chart1 = AmCharts.makeChart('chartdiv1', {

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
                console.log(chartNum);

                chart2 = AmCharts.makeChart('chartdiv2', {

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
            console.log(chartNum2);

            };
            //$scope.initChart();
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
