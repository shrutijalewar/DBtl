'use strict';

module.exports = [
    {method: 'get',    path: '/{param*}',   config: require('../definitions/general/static')},
    {method: 'post',   path: '/register',   config: require('../definitions/users/post_register')},
    {method: 'post',   path: '/login',      config: require('../definitions/users/post_login')},
    {method: 'delete', path: '/logout',     config: require('../definitions/users/delete_logout')},

    //{method: 'get',    path: '/auth',                  config: require('./config/users/get_auth')},
    {method: 'get',    path: '/profile',                 config: require('./config/users/get_profile')},
    {method: 'post',   path: '/profile',                 config: require('./config/users/post_profile')},
    {method: 'put',    path: '/profile',                 config: require('./config/users/put_profile')},
    {method: 'get',    path: '/dashboard',               config: require('./config/dashboard/get_dashboard')},
    {method: 'post',   path: '/search',                  config: require('./config/search/post_search')},
    {method: 'delete', path: '/search/{id}',             config: require('./config/search/delete_search')},
    {method: 'get',    path: '/slideshow/{searchId}',    config: require('./config/slideshow/get_slideshow')},
    {method: 'post',   path: '/messages',                config: require('./config/messages/post_messages')}
];


