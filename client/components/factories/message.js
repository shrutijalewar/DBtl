(function(){
    'use strict';

    angular.module('dbtl')
        .factory('Message', ['$http', function($http){

            function send(message){
                return $http.post('/messages', message);
            }

            return {send:send};
        }]);
})();
