import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User-model';

export const checkUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.authorization?.split(' ')[1];
    console.log('token', token);
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN as string, async (err: any, decodedToken) => {
            if (err) {
                res.locals.user = null;
                console.log(err);
                next();
            } else {
                // let user = await UserModel.findById(decodedToken.id).select('-password');
                // res.locals.user = user;
                User.getUserById(decodedToken?.userId)
                    .then(user => res.locals.user = user)
                    .then(() => next());
                
                // next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};
