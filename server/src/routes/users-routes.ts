import express from 'express';
const router = express.Router();
import * as usersCtrl from '../controllers/users-ctrl';
import * as authMdw from '../middleware/auth-mdw';

// users
router.get('/', usersCtrl.getUsers);

// crud
router.post('/register', usersCtrl.createUser);
router.get('/:id', authMdw.checkAuth, usersCtrl.getUser);
router.put('/:id', authMdw.checkAuth, usersCtrl.editUser);
router.delete('/:id', usersCtrl.deleteUser);

// follows
router.post('/follow/:id', usersCtrl.followUser);
router.delete('/unfollow/:id', usersCtrl.unfollowUser);

export default router;
