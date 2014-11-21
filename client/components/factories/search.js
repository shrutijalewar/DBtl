(function(){
    'use strict';

    angular.module('dbtl')
        .factory('Search', ['$http', function($http){

            function create(search){
                return $http.post('/searches', search);
            }

            function getSlideshow(id){
                return $http.get('/slideshow/' + id);
            }

            function remove(id){
                return $http.delete('/search/' + id);
            }

            return {create:create, getSlideshow:getSlideshow, remove:remove};
        }]);
})();
