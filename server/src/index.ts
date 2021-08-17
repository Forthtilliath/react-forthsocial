import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import chalk from 'chalk';
import connection from './config/database';

const app = express();
dotenv.config();

import usersRoutes from './routes/users-routes';
import postsRoutes from './routes/posts-routes';

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

app.use('/api/user', usersRoutes);
app.use('/api/post', postsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.blue(`=> Backend server is running on http://localhost:${PORT}`));
});
