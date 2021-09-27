import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connectSettings = {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'forthsocial',
};

const pool = mysql.createPool(connectSettings);

export default pool;
