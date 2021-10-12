import express from 'express';
const router = express.Router();
import * as usersCtrl from '../controllers/users-ctrl';
import * as authMdw from '../middleware/auth-mdw';

// users
router.get('/', authMdw.checkAuth, usersCtrl.getUsers);

// crud
router.post('/register', usersCtrl.createUser);
router.get('/:id', authMdw.checkAuth, usersCtrl.getUser);
router.put('/:id', authMdw.checkAuth, usersCtrl.editUser);
router.delete('/:id', authMdw.checkAuth, usersCtrl.deleteUser);

// follows
router.post('/follow/:id', authMdw.checkAuth, usersCtrl.followUser);
router.delete('/unfollow/:id', authMdw.checkAuth, usersCtrl.unfollowUser);

export default router;
