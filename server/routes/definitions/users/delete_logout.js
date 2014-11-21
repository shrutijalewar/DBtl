'use strict';


module.exports = {
    description: 'Logout a User',
    notes: 'Logout a User',
    tags: ['user', 'logout'],
    handler: function(request, reply){
        request.auth.session.clear();
        reply();
    }
};
