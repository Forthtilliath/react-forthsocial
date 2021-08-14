import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import connection from './config/database.js';

const app = express();

import usersRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

// connection.query('SELECT * FROM `table` WHERE `age` > ?', [30], function (_err, results) {
//     console.log(results);
// });

app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
