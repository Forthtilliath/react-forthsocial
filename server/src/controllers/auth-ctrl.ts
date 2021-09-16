import { verify } from 'jsonwebtoken';
import { getToken } from '../utils/connexion';
import { Request, Response } from 'express';
import User, { IUser } from '../models/User-model';

/**
 * Supprime le cookie de l'utilisateur
 */
export const logout = (_req: Request, res: Response) => {
    res.cookie(process.env.COOKIE_NAME as string, '', {
        maxAge: 0,
        httpOnly: true,
    }).send();
};

/**
 * Génère un cookie pour l'utilisateur
 */
export const login = (req: Request, res: Response) => {
    const dataUser: IUser = req.body;
    const user = new User(dataUser);

    user.isValidPassword(dataUser.username, dataUser.password).then((result) => {
        if (!result) return res.status(404).json({ error: 'Username or password not valid !' });

        const token = getToken(user.getUser());

        res.cookie(process.env.COOKIE_NAME as string, token, {
            maxAge: 15 * 60 * 1000,
            httpOnly: true,
        }).send();
    });
};

/**
 * Envoit les donnnées de l'utilisateur si l'utilisateur est connecté
 */
export const jwt = (req: Request, res: Response) => {
    const defaultState = { loggedIn: false };
    try {
        const token = req.cookies[process.env.COOKIE_NAME as string];
        if (!token) return res.send(defaultState);

        const decodedToken: IToken = verify(token, process.env.SECRET_TOKEN as string) as IToken;
        const { iat, exp, ...user } = decodedToken;

        res.send({ loggedIn: true, user });
    } catch (err) {
        res.send(defaultState);
    }
};

interface IToken {
    iat: number;
    exp: number;
    userId: string;
    username: string;
}
