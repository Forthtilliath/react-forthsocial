import express from 'express';
const router = express.Router();
import User from '../models/User';

router.get('/', (_req, res) => {
    User.getUsers()
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).json(err.sqlMessage));
});

router.get('/:id', (req, res) => {
    console.log('id', req.params.id);
    User.getUser(req.params.id)
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).json(err.sqlMessage));
});

export default router;
