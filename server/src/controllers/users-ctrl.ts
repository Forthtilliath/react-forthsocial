import { Request, Response } from 'express';
import User, { IUser } from '../models/User-model';

export const createUser = (req: Request, res: Response) => {
    // let n = Math.floor(Math.random() * 10000);
    // const newUser = new User({
    //     id: User.generateUuid(),
    //     username: 'johon' + n,
    //     email: 'johon@prout.Fr' + n,
    //     password: 'test',
    // });

    const dataNewUser: IUser = req.body;
    const newUser = new User(dataNewUser);

    newUser.isAvailableUsername().then((availableUsername) => {
        if (!availableUsername) return res.status(400).json({ message: 'Username already exists.' });

        newUser.isAvailableEmail().then((availableEmail) => {
            if (!availableEmail) return res.status(400).json({ message: 'Email already exists.' });

            newUser.createUser()
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
    //
};

export const getUsers = (_req: Request, res: Response) => {
    User.getUsers()
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).json(err.sqlMessage));
};

export const getUser = (req: Request, res: Response) => {
    User.getUser(req.params.id)
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).json(err.sqlMessage));
};

export const editUser = (req: Request, res: Response) => {
    //
};

export const followUser = (req: Request, res: Response) => {
    //
};

export const unfollowUser = (req: Request, res: Response) => {
    //
};