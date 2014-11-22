(function(){
    'use strict';

    angular.module('dbtl')
        .controller('MessageCtrl', ['$scope','User', 'Message', function($scope, User, Message){
            $scope.sendMessage = function(){
                var message = {
                    toId: $scope.user._id,
                    frId: $scope.user.username,
                    pic: $scope.message.pic,
                    body:$scope.message.body
                };
             User.send(message).then(function(response){
                 toastr.success('Your message has been sent!');
             });
            };
        }]);
})();
