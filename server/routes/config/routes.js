'use strict';

module.exports = [
    {method: 'get',    path: '/{param*}',   config: require('../definitions/general/static')},
    {method: 'post',   path: '/register',   config: require('../definitions/users/post_register')},
    {method: 'post',   path: '/login',      config: require('../definitions/users/post_login')},
    {method: 'delete', path: '/logout',     config: require('../definitions/users/delete_logout')}/*,

    {method: 'get',    path: '/about',      config: require('./config/home/get_about')},
    {method: 'post',   path: '/priorities', config: require('./config/priorities/post_priorities')},
    {method: 'get',    path: '/priorities', config: require('./config/priorities/get_priorities')},
    {method: 'post',   path: '/tasks',      config: require('./config/tasks/post_tasks')},
    {method: 'get',    path: '/tasks',      config: require('./config/tasks/get_tasks')},
    {method: 'get',    path: '/tasks/{id}', config: require('./config/tasks/get_task')},
    {method: 'delete', path: '/tasks/{id}', config: require('./config/tasks/delete_task')},
    {method: 'put',    path: '/tasks/{id}', config: require('./config/tasks/put_task')}
*/
];


