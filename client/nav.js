(function(){
    'use strict';

    angular.module('dbtl')
        .controller('NavCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
            $scope.$on('username', function(e, username){
               $scope.username = username;
            });
            $scope.logout = function(){
            User.logout().then(function(){
                $scope.username = null;
                toastr.success('User successfully logged out.');
                $state.go('home');
            });
        };
    }]);
})();
