const connection = require('./db');

const sql = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

connection.query(sql, (err, result) => {
    if (err) {
        console.error('Migration gagal:', err);
    } else {
        console.log('Migration sukses: Table `users` dibuat!');
    }
    connection.end(); // jangan lupa tutup koneksi
});
