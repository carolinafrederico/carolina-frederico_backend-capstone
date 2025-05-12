import express from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
//   dashboard,
  registerUser,
  loginUser,
  logoutUser
} from '../controllers/user-controller.js';

const router = express.Router();

// Register and Login Routes
router.post('/register', registerUser);
router.post('/login', loginUser);


// Dashboard - Protected Route
router.get('/logout', logoutUser);

// CRUD Routes for User 
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
// router.get('/dashboard', dashboard);
router.post('/logout', logoutUser);

export default router;


// import express from 'express';
// import * as usersController from '../controllers/user-controller.js';
// import { seedUserData } from '../seedData.js';

// const router = express.Router();

// // All User routes (CRUD) with corresponding methods

// // Index route
// router.get('/', usersController.getUsers);

// // Create route
// router.post('/', usersController.createUser);

// // Register route - Create a new user
// router.post('/register', usersController.registerUser);

// // Login route - Authenticate and redirect to dashboard
// router.post('/login', usersController.loginUser);

// // Dashboard route - Protected route, accessible after login
// router.get('/dashboard', usersController.dashboard);

// // Show route (get user by id)
// router.get('/:id', usersController.getUserById);

// // Update route
// router.put('/:id', usersController.updateUser);

// // Delete route
// router.delete('/:id', usersController.deleteUser);

// // Seed user data
// router.get('/seed', seedUserData);

// export default router;

////////////////////////////////
// import express from 'express';
// import * as usersController from '../controllers/user-controller.js';
// import { seedUserData } from '../seedData.js';

// const router = express.Router();

// // All User routes (CRUD) with corresponding methods
// router.get('/', usersController.getUsers);
// router.post('/', usersController.createUser);

// // Register and Login
// router.post('/register', usersController.registerUser);
// router.post('/login', usersController.loginUser);

// // Dashboard - Protected Route
// router.get('/dashboard', usersController.dashboard);

// // Show route (get user by id)
// router.get('/:id', usersController.getUserById);

// // Update route
// router.put('/:id', usersController.updateUser);

// // Delete route
// router.delete('/:id', usersController.deleteUser);

// // Seed Data
// router.get('/seed', async (req, res) => {
//   try {
//     const seedResponse = await seedUserData();
//     res.status(200).json({
//       message: 'Database seeded successfully',
//       data: seedResponse,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error seeding data', error: error.message });
//   }
// });

// export default router;

////////////////////// very last is the good one
// import express from 'express';
// import * as usersController from '../controllers/user-controller.js';
// import { getUsers, createUser, getUserById, updateUser, deleteUser, dashboard } from '../controllers/user-controller.js';
// const router = express.Router();

// // CRUD Routes for User
// router.get('/', usersController.getUsers);
// router.post('/', usersController.createUser);
// router.get('/:id', usersController.getUserById);
// router.put('/:id', usersController.updateUser);
// router.delete('/:id', usersController.deleteUser);

// // Dashboard - Protected Route
// router.get('/dashboard', usersController.dashboard);

// export default router;
//////