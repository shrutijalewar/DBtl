'use strict';

module.exports = [
    {method: 'get',    path: '/{param*}',             config: require('./../definitions/general/static')},
    {method: 'post',   path: '/register',             config: require('./../definitions/users/post_register')},
    {method: 'post',   path: '/login',                config: require('./../definitions/users/post_login')},
    {method: 'delete', path: '/logout',               config: require('./../definitions/users/delete_logout')},
    {method: 'get',    path: '/status',               config: require('./../definitions/users/get_status')},
    {method: 'get',    path: '/profile',              config: require('./../definitions/users/get_profile')},
    {method: 'post',   path: '/profile',              config: require('./../definitions/users/post_profile')},
    {method: 'put',    path: '/profile',              config: require('./../definitions/users/put_profile')},
    {method: 'get',    path: '/dashboard',            config: require('./../definitions/dashboard/get_dashboard')},
    {method: 'post',   path: '/searches',             config: require('./../definitions/searches/post_searches')},
    {method: 'delete', path: '/search/{id}',          config: require('./../definitions/search/delete_search')},
    {method: 'get',    path: '/slideshow/{searchId}', config: require('./../definitions/slideshow/get_slideshow')},
    {method: 'post',   path: '/messages',             config: require('./../definitions/messages/post_messages')}
];


