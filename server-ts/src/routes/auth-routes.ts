import express from 'express';
const router = express.Router();
import User from '../models/User';
import { v4 as uuidv4 } from 'uuid';
interface IUser {
    id?: string;
    username: string;
    email: string;
    password: string;
}
router.post('/register', (req, res) => {
    let n = Math.floor(Math.random() * 10000);
    const oneUser: IUser = req.body;
    console.log(oneUser);

    // const user = new User({
    //     id: uuidv4().replace(/-/g, ''),
    //     username: 'johon' + n,
    //     email: 'johon@prout.Fr' + n,
    //     password: 'test',
    // });

    const user = new User(oneUser);

    user.createUser()
        .then((_results) => {
            res.status(201).json({ message: 'User created !', user: user.getUser() });
        })
        .catch((error) => {
            res.status(404).json({ error: error.sqlMessage });
        });

    // user.getUsers().then((results) => {
    // console.log(results);
    // res.type('application/json').send(results);
    // });
});

export default router;
