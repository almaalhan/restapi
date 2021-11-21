'use strict';

var response = require('./res');
var connection = require('./koneksi');
// var passwordHash = require('password-hash');
const { passwordHash, passwordVerify, } = require('nodejs-password');

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


// delete data user by id
exports.delete_data_user = function (req, res) {
    // var nama = req.body.nama;
    var username = req.body.username;
    // console.log(nama);
    // console.log(username);
    connection.query("DELETE from user where username = '" + username + "'", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("User Berhasil dihapus", res);
        }
    });
}

// tampilkan data grup matakuliah
exports.get_matkul = function (req, res) {
    connection.query("SELECT " +
        "mhs.nama," +
        "mhs.nim," +
        "mhs.semester," +
        "d.kode_matkul," +
        "d.jumlah_sks," +
        "m.nama_matkul," +
        "ds.nama AS nama_dosen" +
        " FROM detail_matkul_diambil d" +
        " JOIN header_matkul_diambil h ON h.id_header_matkul_diambil = d.id_header" +
        " JOIN matkul m ON m.kode_matkul = d.kode_matkul" +
        " JOIN detail_jadwal_krs j ON j.id_detail_jadwal = d.id_jadwal" +
        " JOIN`user` ds ON ds.nidn = d.nidn_dosen" +
        " JOIN`user` mhs ON mhs.nim = h.nim_mhs", function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        });
}

exports.login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var hash = '';
    // var hashedPassword = passwordHash.generate(password);
    var query = "SELECT " +
        "password," +
        "salt," +
        "paper " +
        "FROM" +
        "`user` " +
        "WHERE " +
        "username = '" + username + "'";
    connection.query(query, function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            console.log(rows.salt);
            response.ok(rows, res);
            // try {
            //     let hash = await passwordHash(password, );
            //     // Store hash in your password DB.
            // } catch (error) {
            //     // handle errors
            // }
        }
    });
}
