(function(){
    'use strict';

    angular.module('dbtl')
        .factory('Search', ['$http', function($http){

            function create(search){
                return $http.post('/searches', search);
            }

            function getById(id){
                return $http.get('/search/' + id);
            }

            function remove(id){
                return $http.delete('/search/' + id);
            }

            return {create:create, getById:getById, remove:remove};
        }]);
})();
