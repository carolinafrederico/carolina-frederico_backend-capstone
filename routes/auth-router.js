import express from 'express';
import * as usersController from '../controllers/user-controller.js';
const router = express.Router();

// Register and Login
router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);

// Logout 
router.get('/logout', usersController.logoutUser);

export default router;
