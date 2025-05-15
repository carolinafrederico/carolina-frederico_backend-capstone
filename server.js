import express from 'express';
import connectDB from './db/database.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';

// Route Imports
import userRoutes from './routes/user-router.js';
import authRoutes from './routes/auth-router.js';  
import seedRoutes from './routes/seed-router.js';
import postRoutes from './routes/post-router.js';
import commentRoutes from './routes/comment-router.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: 'sessions',
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/seed', seedRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);

// Default Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the PressRoom API' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error('Error:', err.message);
  res.status(statusCode).json({ error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// // Route Imports
// import userRoutes from './routes/user-router.js';
// import authRoutes from './routes/auth-router.js';  
// import seedRoutes from './routes/seed-router.js';
// import postRoutes from './routes/post-router.js';
// import commentRoutes from './routes/comment-router.js';

// dotenv.config();
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || 'supersecretkey',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false },
//   })
// );

// // Static Files
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.use('/user', userRoutes);
// app.use('/auth', authRoutes);
// app.use('/seed', seedRoutes);
// app.use('/post', postRoutes);
// app.use('/comment', commentRoutes);

// // Default Route (optional)
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Welcome to the PressRoom API' });
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
//   res.status(500).json({ error: err.message });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

/////////////////////////////////////
// import express from 'express';
// import connectDB from './db/database.js';
// import cors from 'cors'; // (Cross-Origin Resource Sharing) middleware
// import path from 'path'; // used to import the built-in path module, which provides utilities for working with file and directory paths. 
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';
// import session from 'express-session';


// import userRoutes from './routes/user-router.js';
// import postRoutes from './routes/post-router.js';
// import commentRoutes from './routes/comment-router.js';
// // import seedRoutes from './routes/seed-router.js';

// dotenv.config();
// connectDB ();
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(express.json());

// // API routes
// app.use('/user', userRoutes);
// app.use('/post', postRoutes);
// app.use('/comment', commentRoutes);

// // app.use('/seed', seedRoutes);

// // Serve static files from public/
// app.use(express.static(path.join(__dirname, 'public')));


// // Start the server
// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });

/////////////////////////
// import express from 'express';
// import connectDB from './db/database.js';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';
// import session from 'express-session';
// import bcrypt from 'bcrypt';
// import User from './models/user-model.js';
// import { seedUserData } from './seedData.js';


// import userRoutes from './routes/user-router.js';
// import postRoutes from './routes/post-router.js';
// import commentRoutes from './routes/comment-router.js';

// dotenv.config();
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || 'supersecretkey',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false } // Set to true in production with HTTPS
//   })
// );

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // ==========================
// //       ROUTES
// // ==========================

// // User Routes
// app.use('/user', userRoutes);

// // Seed Route
// app.get('/seed', async (req, res) => {
//   try {
//     const seedResponse = await seedUserData();
//     res.status(200).json({
//       message: 'Database seeded successfully',
//       data: seedResponse,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error seeding database', error: error.message });
//   }
// });

// // Register Route
// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Registration error', error: error.message });
//   }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     req.session.userId = user._id;
//     res.status(200).json({ message: 'Login successful', user: user.username });
//   } catch (error) {
//     res.status(500).json({ message: 'Login error', error: error.message });
//   }
// });

// // Protected Route: Dashboard
// app.get('/dashboard', (req, res) => {
//   if (!req.session.userId) {
//     return res.status(401).json({ message: 'Unauthorized. Please log in.' });
//   }

//   res.status(200).json({ message: 'Welcome to the dashboard' });
// });

// // Logout Route
// app.get('/logout', (req, res) => {
//   req.session.destroy(() => {
//     res.status(200).json({ message: 'Logged out successfully' });
//   });
// });


// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
//////////////////
