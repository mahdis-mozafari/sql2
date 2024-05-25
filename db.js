import MySQL from 'mysql2/promise'

const connection = await MySQL.createPool({
    host:'localhost',
    port:3000,
    user:'root',
    password: 1234,
    database:'office'
})

export default connection