'use strict';

var response = require('./res');
var connection = require('./koneksi');



exports.index = function (req, res) {
    response.ok("Aplikasi berhasil", res);
}


// get data user
exports.get_user_data = function (req, res) {
    connection.query("select nama,nidn from user where nidn is not null", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}