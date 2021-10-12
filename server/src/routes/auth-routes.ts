import express from 'express';
const router = express.Router();
import * as authCtrl from '../controllers/auth-ctrl';

// auth
router.post("/login", authCtrl.login);
router.get("/logout", authCtrl.logout);
router.get("/jwt", authCtrl.jwt);

export default router;