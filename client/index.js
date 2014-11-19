(function(){
    'use strict';

    angular.module('dbtl', ['ui.router', 'LocalForageModule'])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$localForageProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $localForageProvider){
            $urlRouterProvider.otherwise('/');

            $stateProvider

                .state('home',         {url:'/',                 templateUrl:'/views/home/home.html',               controller: 'HomeCtrl'})
                .state('auth',         {url:'/auth',             templateUrl:'/views/auth/auth.html',               controller: 'AuthCtrl'})
                .state('login',        {url:'/login',            templateUrl:'/views/auth/login.html',              controller: 'AuthCtrl'})
                .state('register',     {url:'/register',         templateUrl:'/views/auth/register.html',           controller: 'AuthCtrl'})
                .state('dashboard',  {url:'/dashboard',          templateUrl:'/views/dashboard/dashboard.html',     controller:'DashCtrl'})
                .state('profile',    {url:'/profile',            templateUrl:'views/profile/profile.html',          controller:'ProfileCtrl'})
                .state('message',    {url:'/message',            templateUrl:'views/message/message.html',          controller:'MessageCtrl'})
                .state('slideshow',  {url:'/slideshow',          templateUrl:'views/slideshow/slideshow.html',      controller:'SlideCtrl'});

            $localForageProvider.config({name:'dbtl', storeName:'cache', version:1.0});
            //$httpProvider.interceptors.push('HttpInterceptor');
        }]);
        /*.run(['User', '$rootScope', function(User, $rootScope){

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            });

            $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            });

            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
            });

        }]);*/
})();
