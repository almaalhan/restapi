'use strict';

module.exports = function (app) {
    var json = require('./controller');

    app.route('/').get(json.index);
    app.route('/get_user_data').get(json.get_user_data);
}