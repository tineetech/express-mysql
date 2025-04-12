const connection = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/', (req, res) => {
    const read = 'SELECT * FROM users'
    connection.query(read, (err, result) => {
        if (err) console.log('error')
        console.log('berhasil read')
        console.log(result)
        res.send(result)
    })
})

const sql = 'INSERT INTO users (name, email) VALUES (?, ?)'
// connection.query(sql, ['justine', 'just@gmail.com'], (err, result) => {
//     if (err) console.log('error')
//     console.log('berhasil insert')
//     console.log(result)
// })


app.listen(5000, () => {
    console.log('server in on port 5000')
}) 