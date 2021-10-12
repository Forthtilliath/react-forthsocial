import { Request, Response, NextFunction } from 'express';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { logout } from '../controllers/auth-ctrl';
import User from '../models/User-model';
import { getToken } from '../utils/connexion';

/**
 * Vérifie si un utilisateur est connecté. Si oui, on récupère les informations du cookie
 * pour les rendre disponible dans les controlleurs.
 */
export const checkUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies[process.env.COOKIE_NAME as string];
        if (!token) res.locals.user = null;

        // S'il n'y a pas de token, le catch est proc
        const verified = verify(token, process.env.SECRET_TOKEN as string) as JwtPayload;
        const { iat, exp, ..._user } = verified;

        // TODO Vérif dans la DB
        console.log('id',_user.id);
        const user = await User.getUserById(_user.id);
        console.log('user',user);

        if (user.length) {
            console.log('user trouvé');
            res.locals.user = user;

            // Reload the cookie
            // const newToken = sign(user, process.env.SECRET_TOKEN as string, {
                //     expiresIn: '4h',
                // });
                const newToken = getToken(_user);
                console.log("a");
            res.cookie(process.env.COOKIE_NAME as string, newToken, {
                httpOnly: true,
                maxAge: 4 * 60 * 60 * 1000,
            });
        } else {
            res.locals.user = null;
            res.cookie(process.env.COOKIE_NAME as string, '', {
                maxAge: 0,
                httpOnly: true,
            });
            console.log('suppression cookie');
        }
    } catch (err) {
        res.locals.user = null;
        console.log('erreur');
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
