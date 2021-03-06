'use strict';

module.exports = function (app) {
    var json = require('./controller');

    app.route('/').get(json.index);
    app.route('/get_user_data').get(json.get_user_data);
    app.route('/get_data_user_by_id').post(json.get_data_user_by_id);
    app.route('/add_data_user').post(json.add_data_user);
    app.route('/delete_data_user').post(json.delete_data_user);
    app.route('/get_matkul').post(json.get_matkul);
    app.route('/login').post(json.login);
}