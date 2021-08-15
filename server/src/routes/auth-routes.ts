import express from 'express';
const router = express.Router();
    
router.post('/register', usersCtrl.createUser);

export default router;
