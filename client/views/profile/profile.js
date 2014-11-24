(function(){
    'use strict';

    angular.module('dbtl')
        .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){

            $scope.user ={};
            $scope.hide = true;
            $scope.showCam = false;
            User.getProfile().then(function(response){
                $scope.user = response.data;
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
            video.addEventListener('canplay', function(ev){
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth/width);
                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);
            $scope.takePicture = function(){
                $scope.showCam = true;
                canvas.width = width;
                canvas.height = height;
                photo.width = width;
                photo.height = height;
                canvas.getContext('2d').drawImage(video, 0, 0, width, height);
                var data = canvas.toDataURL('image/png');
                $scope.user.profilePic = data;
                photo.setAttribute('src', data);
            };
            $scope.savePic = function(){
                User.updateProfile($scope.user).then(function(res){
                });
            };
            $scope.redo = function(){
                $scope.ShowCam=false;
            };
        }]);
})();

