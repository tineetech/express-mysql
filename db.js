let mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'centerbeam.proxy.rlwy.net',
    user: 'root',
    port: 17434,
    password: 'qmUhcBhxpjqsdyAIWiZTCnDRCBClCOPN',
    database: 'railway',
})

connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('koneksi mysql berhasil')
    }
})

module.exports = connection 