import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

export const sessionConfig = session({
  secret: process.env.SESSION_SECRET || 'supersecretkey',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
});