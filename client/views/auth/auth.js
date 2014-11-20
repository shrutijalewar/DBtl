(function(){
    'use strict';

    angular.module('dbtl')
        .controller('AuthCtrl', ['$scope', '$state', 'User',function($scope, $state, User){
            $scope.user = {};
            $scope.mode = $state.current.name;

            $scope.submit = function(){
                if($scope.mode === 'register'){
                    User.register($scope.user).then(function(response){
                        toastr.success('You have successfully registered.');
                        $scope.mode = 'login';
                        $state.go('login');
                    }, function(){
                        toastr.error('Error during registration');
                        $scope.user = {};
                    });
                }else{
                    User.login($scope.user).then(function(response){
                        toastr.success('You are logged in.');
                        $state.go('home');
                    }, function(){
                        toastr.error('Error during login.');
                        $scope.user = {};
                    });
                }
            };
        }]);
})();
