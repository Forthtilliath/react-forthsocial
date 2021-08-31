import jwt, { JwtHeader } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User-model';

export const checkUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.authorization?.split(' ')[1];
    console.log('Token', token);
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN as string, async (err: any, decodedToken) => {
            if (err) {
                res.locals.user = null;
                // console.log(req.socket.remoteAddress,req.headers['x-forwarded-for']); // NOTE IP
                next();
            } else {
                User.getUserById(decodedToken?.userId)
                    .then((user) => (res.locals.user = user))
                    .then(() => next());
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    // const token = req.cookies.jwt;
    console.log(res.locals);
    const token = req.headers?.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(
            token,
            process.env.SECRET_TOKEN as string,
            async (err: any, decodedToken: jwt.JwtPayload | undefined) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('User connected:', decodedToken?.userId);
                    next();
                }
            },
        );
    } else {
        console.log('Server - No token !');
    }
};
