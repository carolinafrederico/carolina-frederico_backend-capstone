import express from 'express';
import * as usersController from '../controllers/user-controller.js';
import { seedUserData } from '../seedData.js';

const router = express.Router();

// All User routes (CRUD) with corresponding methods

// Index route
router.get('/', usersController.getUsers);

// Create route
router.post('/', usersController.createUser);

// Register route - Create a new user
router.post('/register', usersController.registerUser);

// Login route - Authenticate and redirect to dashboard
router.post('/login', usersController.loginUser);

// Dashboard route - Protected route, accessible after login
router.get('/dashboard', usersController.dashboard);

// Show route (get user by id)
router.get('/:id', usersController.getUserById);

// Update route
router.put('/:id', usersController.updateUser);

// Delete route
router.delete('/:id', usersController.deleteUser);

// Seed user data
router.get('/seed', seedUserData);

export default router;
