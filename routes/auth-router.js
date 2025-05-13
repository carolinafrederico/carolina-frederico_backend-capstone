import express from 'express';
import * as usersController from '../controllers/user-controller.js';
import * as authController from '../controllers/auth-controller.js'
const router = express.Router();

// Register and Login
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// Logout 
router.get('/logout', authController.logoutUser);

export default router;
