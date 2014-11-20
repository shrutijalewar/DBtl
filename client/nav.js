(function(){
    'use strict';

    angular.module('dbtl')
        .controller('NavCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
        $scope.logout = function(){
            User.logout().then(function(){
                toastr.success('User successfully logged out.');
            });
        };
    }]);
})();
