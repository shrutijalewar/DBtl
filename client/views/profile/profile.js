(function(){
    'use strict';

    angular.module('dbtl')
        .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){

            $scope.user ={};
            $scope.hideCanvas = true;
            $scope.showCam = false;
            User.getProfile().then(function(response){
                if(response.data){$scope.user = response.data;}
            });
            var streaming = false,
                video        = document.querySelector('#video'),
                canvas       = document.querySelector('#canvas'),
                photo        = document.querySelector('#photo'),
                width = 320,
                height = 0;
            navigator.getMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
            navigator.getMedia(
                {
                    video: true,
                    audio: false
                },
                function(stream){
                    if (navigator.mozGetUserMedia) {
                        video.mozSrcObject = stream;
                    } else {
                        var vendorURL = window.URL || window.webkitURL;
                        video.src = vendorURL.createObjectURL(stream);
                    }
                    video.play();
                },
                function(err){
                    console.log('An error occured! ' + err);
                }
            );
            video.addEventListener('canplay', function(){
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth/width);
                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);
            $scope.takePic = function(){
                $scope.showCam = true;
                canvas.width = width;
                canvas.height = height;
                photo.width = width;
                photo.height = height;
                canvas.getContext('2d').drawImage(video, 0, 0, width, height);
                var data = canvas.toDataURL('image/png');
                $scope.user.pic = data;
                photo.setAttribute('src', data);
            };
            $scope.savePic = function(){
                User.updateProfile($scope.user).then(function(res){
                    console.log('save response', res);
                });
            };
            $scope.redo = function(){
                $scope.ShowCam=false;
            };

            $scope.updateProfile = function(){
                User.updateProfile($scope.user).then(function(res){
                    toastr.success('Profile Updated');
                });
            };
        }]);
})();
