(function(){
    'use strict';

    angular.module('dbtl')
        .factory('Message', ['$http', function($http){

            function send(message){
                return $http.post('/message', message);
            }

            return {send:send};
        }]);
})();
