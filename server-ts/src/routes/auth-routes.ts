import express from 'express';
const router = express.Router();
import User from '../models/User';


router.post('/register', (_req, res) => {
    const user = new User({
        username: "johon",
        email: "johon@prout.Fr",
        password: "test"
    })
});

export default router;
