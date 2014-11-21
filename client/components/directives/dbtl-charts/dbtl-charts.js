(function(){
  'use strict';

  angular.module('dbtlChartsModule', [])
  .directive('dbtlCharts', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/dbtl-charts/dbtl-charts.html';
    o.scope       = {xAxis:'@', yAxis:'@'};

    return o;
  }]);
})();
