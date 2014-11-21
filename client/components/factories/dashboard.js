(function(){
    'use strict';

    angular.module('dbtl')
        .factory('Dashboard', ['$http', function($http){

            function getDashboard(){
                return $http.get('/dashboard');
            }

            return {getDashboard:getDashboard};
        }]);
})();
