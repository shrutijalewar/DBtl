/*global AmCharts */

(function(){
  'use strict';

  angular.module('dbtlChartsModule', [])
  .directive('dbtlCharts', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/dbtl-charts/dbtl-charts.html';
    o.scope       = {data:'='};
         // o.link        = function(scope, element, attrs){
         // };

        o.controller  = ['$scope', function($scope){
            console.log($scope.data);


            var chart = false,
                data = $scope.data.search,
                cField = $scope.data.settings.categoryField,
                vField = $scope.data.settings.valueField,
                vAxes = $scope.data.settings.valueAxes,
                graphInfo = $scope.data.settings.graphInfo,
                chartTitle = $scope.data.settings.chartTitle,

            initChart = function(){
                if (chart){chart.destroy();}
                //var config = $scope.config || {};
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
                    'dataProvider': data
                });


            };
            initChart();
        }];
    return o;
  }]);
})();
