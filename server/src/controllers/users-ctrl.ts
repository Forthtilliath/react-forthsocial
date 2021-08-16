import { Request, Response } from 'express';
import User, { IUser } from '../models/User-model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const createUser = (req: Request, res: Response) => {
    const dataNewUser: IUser = req.body;
    const newUser = new User(dataNewUser);

    newUser.isAvailableUsername().then((availableUsername) => {
        if (!availableUsername) return res.status(400).json({ message: 'Username already exists.' });

        newUser.isAvailableEmail().then((availableEmail) => {
            if (!availableEmail) return res.status(400).json({ message: 'Email already exists.' });

            newUser
                .createUser()
                .then((_results) => {
                    return res.status(201).json({ message: 'User created !', user: newUser.getUser() });
                })
                .catch((error) => {
                    return res.status(400).json({ error: error.sqlMessage });
                });
        });
    });
};

export const connectUser = (req: Request, res: Response) => {
    const dataUser: IUser = req.body;
    const user = new User(dataUser);

    user.isValidPassword(dataUser.username, dataUser.password).then((result) => {
        if (!result) return res.status(404).json({ error: 'Username or password not valid !' });

        res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, process.env.TOKEN as string, {
                expiresIn: '1h',
            }),
        });
    });
};

export const getUsers = (_req: Request, res: Response) => {
    User.getUsers()
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).json(err.sqlMessage));
};

export const getUser = (req: Request, res: Response) => {
    User.getUserById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json(err.sqlMessage));
};

export const editUser = (req: Request, res: Response) => {
    User.getUserById(req.params.id).then((result) => {
        const dataUser: IUser = req.body;
        const updatedDataUser: IUser = Object.assign(result[0], dataUser);

        const user = new User(updatedDataUser);
        user.setUser().then((result) => console.log(result));

        res.status(200).json(result);
    });
};

export const deleteUser = (req: Request, res: Response) => {
    User.deleteUser(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json(err.sqlMessage));
};

export const followUser = (req: Request, res: Response) => {
    //
};

export const unfollowUser = (req: Request, res: Response) => {
    //
};
