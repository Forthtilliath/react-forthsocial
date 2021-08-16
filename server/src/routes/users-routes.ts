import express from 'express';
const router = express.Router();
import * as usersCtrl from '../controllers/users-ctrl';

// auth
router.post('/register', usersCtrl.createUser);
router.post('/login', usersCtrl.connectUser);

// users
router.get('/', usersCtrl.getUsers);

router.get('/:id', usersCtrl.getUser);
router.post('/:id', usersCtrl.editUser);
router.delete('/:id', usersCtrl.editUser);

// follows
router.post('/follow/:id', usersCtrl.followUser);
router.delete('/unfollow/:id', usersCtrl.unfollowUser);

export default router;
