import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = () => {
    return mysql.createPool({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'forthsocial',
    });
};

export default connection();