import { Request, Response, NextFunction } from 'express';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
// import User from '../models/User-model';

// export const checkUser2 = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers?.authorization?.split(' ')[1];
//     console.log('Token', token);
//     if (token) {
//         jwt.verify(token, process.env.SECRET_TOKEN as string, async (err: any, decodedToken) => {
//             if (err) {
//                 res.locals.user = null;
//                 // console.log(req.socket.remoteAddress,req.headers['x-forwarded-for']); // NOTE IP
//                 next();
//             } else {
//                 User.getUserById(decodedToken?.userId)
//                     .then((user) => (res.locals.user = user))
//                     .then(() => next());
//             }
//         });
//     } else {
//         res.locals.user = null;
//         next();
//     }
// };

/**
 * Vérifie si un utilisateur est connecté. Si oui, on récupère les informations du cookie
 * pour les rendre disponible dans les controlleurs.
 */
export const checkUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies[process.env.COOKIE_NAME as string];
        if (!token) res.locals.user = null;

        const verified = verify(token, process.env.SECRET_TOKEN as string) as JwtPayload;
        const { iat, exp, ...user } = verified;
        res.locals.user = user;

        // Reload the cookie
        const newToken = sign(user, process.env.SECRET_TOKEN as string, {
            expiresIn: '4h',
        });
        res.cookie(process.env.COOKIE_NAME as string, newToken, {
            httpOnly: true,
            maxAge: 4 * 60 * 60 * 1000,
        });
    } catch (err) {
        res.locals.user = null;
    }

    next();
};

/**
 * Autorise seulement les utilisateurs connectés à accéder aux contrôlleurs
 */
export const checkAuth = (_req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.user) return res.status(401).json({ errorMessage: 'Unauthorized' });

    next();
};

// export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
//     // const token = req.cookies.jwt;
//     console.log(res.locals);
//     const token = req.headers?.authorization?.split(' ')[1];
//     if (token) {
//         jwt.verify(
//             token,
//             process.env.SECRET_TOKEN as string,
//             async (err: any, decodedToken: jwt.JwtPayload | undefined) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log('User connected:', decodedToken?.userId);
//                     next();
//                 }
//             },
//         );
//     } else {
//         console.log('Server - No token !');
//     }
// };
