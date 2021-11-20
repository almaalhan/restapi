var mysql = require('mysql');

// buat kooneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'unigoro'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = conn;