import express from 'express';
const router = express.Router();
import User, { IUser } from '../models/User';
import { v4 as uuidv4 } from 'uuid';

router.post('/register', (req, res) => {

    // let n = Math.floor(Math.random() * 10000);
    // const user = new User({
    //     id: uuidv4().replace(/-/g, ''),
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
});

export default router;
