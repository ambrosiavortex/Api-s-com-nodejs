import mysql from 'mysql2/promise.js';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'apisDB'
})

export { connection }