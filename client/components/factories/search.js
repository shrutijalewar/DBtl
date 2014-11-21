(function(){
    'use strict';

    angular.module('dbtl')
        .factory('Search', ['$http', function($http){

            function create(search){
                return $http.post('/message', search);
            }

            function getById(id){
                return $http.get('/message/' + id);
            }

            function remove(id){
                return $http.delete('/message/' + id);
            }

            return {create:create, getById:getById, remove:remove};
        }]);
})();
