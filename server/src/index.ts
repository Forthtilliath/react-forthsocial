import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
dotenv.config();

import authRoutes from './routes/auth-routes';
import usersRoutes from './routes/users-routes';
import postsRoutes from './routes/posts-routes';
import * as auth from './middleware/auth-mdw';

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    }),
);

app.use(express.urlencoded({ extended: true }));

// Récupération de la session
app.all('*', auth.checkUser);

app.get('/api/babel/parser/lib/', () => {
    console.log('oooooooo')
})
app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.blue(`=> Backend server is running on http://localhost:${PORT}`));
});
