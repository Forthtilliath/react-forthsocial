import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const checkUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.authorization?.split(' ')[1];
    console.log('token', token);
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN as string, async (err: any) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                // let user = await UserModel.findById(decodedToken.id).select('-password');
                // res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};
