import express from 'express';
const router = express.Router();
import User from '../models/User';
import * as usersCtrl from '../controllers/users-ctrl';

// auth
router.post('/register', usersCtrl.createUser);

// users
router.get('/', usersCtrl.getUsers);
router.get('/:id', usersCtrl.getUser);

export default router;
