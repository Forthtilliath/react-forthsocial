import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const createUser = (req: Request, res: Response) => {
    // let n = Math.floor(Math.random() * 10000);
    // const newUser = new User({
    //     id: User.generateUuid(),
    //     username: 'johon' + n,
    //     email: 'johon@prout.Fr' + n,
    //     password: 'test',
    // });

    const newUser: IUser = req.body;
    const user = new User(newUser);

    user.createUser()
        .then((_results) => {
            res.status(201).json({ message: 'User created !', user: user.getUser() });
        })
        .catch((error) => {
            res.status(404).json({ error: error.sqlMessage });
        });
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
