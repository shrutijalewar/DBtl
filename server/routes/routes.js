'use strict';

module.exports = [
    {method: 'get',    path: '/',                        config: require('./config/home/get_home')},
    {method: 'post',   path: '/register',                config: require('./config/users/post_register')},
    {method: 'post',   path: '/login',                   config: require('./config/users/post_login')},
    //{method: 'get',    path: '/auth',                  config: require('./config/users/get_auth')},
    {method: 'get',    path: '/profile',                 config: require('./config/users/get_profile')},
    {method: 'post',   path: '/profile',                 config: require('./config/users/post_profile')},
    {method: 'put',    path: '/profile',                 config: require('./config/users/put_profile')},
    {method: 'get',    path: '/dashboard',               config: require('./config/dashboard/get_dashboard')},
    {method: 'post',   path: '/search',                  config: require('./config/search/post_search')},
    {method: 'delete', path: '/search',                  config: require('./config/search/delete_search')},
    {method: 'get',    path: '/slideshow/{searchId}',   config: require('./config/slideshow/get_slideshow')}
];
