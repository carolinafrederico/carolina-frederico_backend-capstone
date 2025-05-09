import User from '../models/user-model.js';
import bcrypt from 'bcrypt';
import passport from 'passport';



// Index - Get all users
async function getUsers(req, res) {
  try {
    const users = await User.find({});
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Create - Create a new user
async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err.message });
  }
}

// Show - Get one user by ID
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id).populate('post').populate('comment');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching user', error: err.message });
  }
}

// Register a new user
export const registerUser = async (req, res) => {
  try {
      const { username, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
      res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// User login
export const loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Redirect to dashboard on successful login
      res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Protected Dashboard route
export const dashboard = (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard' });
};

// Update - Update a user's info
async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: 'Error updating user', error: err.message });
  }
}

// Delete - Remove a user
async function deleteUser(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted', user: deletedUser });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting user', error: err.message });
  }
}

export {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
