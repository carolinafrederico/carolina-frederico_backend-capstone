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
