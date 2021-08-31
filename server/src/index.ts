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

import usersRoutes from './routes/users-routes';
import postsRoutes from './routes/posts-routes';
import * as auth from './middleware/auth.mdw';

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(
    cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }),
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// jwt
// app.get('*', auth.checkUser);
// app.get('/api/jwtid', auth.requireAuth, (_req, res) => {
//     // console.log('id',res.locals.user._id);
//     res.status(200).send(res);
// });

app.use(
    session({
        name: 'userId',
        secret: process.env.SECRET_SESSION as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 15 * 60 * 1000, // 1min
        },
    }),
);

// TODO : in usersRoutes
app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        res.send({ loggedIn: false });
    });
});
app.get('/api/login', (req, res) => {
    console.log('/login', req.session.user);
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.use('/api/user', usersRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.blue(`=> Backend server is running on http://localhost:${PORT}`));
});
