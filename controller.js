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

// get data user by id
exports.get_data_user_by_id = function (req, res) {
    var id = req.body.id;
    // console.log(id);
    connection.query("select nama,nim from user where username = '" + id + "'", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

// tambah data user
exports.add_data_user = function (req, res) {
    var nama = req.body.nama;
    var username = req.body.username;
    console.log(nama);
    console.log(username);
    connection.query("INSERT INTO user (nama,username,nim) VALUES(?,?,?)", [nama, username, username], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("User Berhasil ditambahkan", res);
        }
    });
}
