<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Press Room - Backend Server README</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
        h1, h2, h3 { color: #7B1E1E; }
        pre { background-color: #f0f0f0; padding: 10px; border-radius: 5px; overflow-x: auto; }
        .section { margin-bottom: 20px; }
    </style>
</head>
<body>

<div class="container">
    <h1>Press Room - Backend Server</h1>

    <div class="section">
        <h2>Project Overview</h2>
        <p>Press Room is a full-stack MERN (MongoDB, Express, React, Node.js) application designed for journalists, aspiring reporters, and citizen journalists. 
        The backend server manages user authentication, content management, data seeding, and more, serving as the backbone of the Press Room platform.</p>
    </div>

    <div class="section">
        <h2>Features and Architecture</h2>
        <ul>
            <li>User Management: Registration, login, and session management using <strong>express-session</strong> and <strong>bcrypt</strong>.</li>
            <li>Authentication: JWT-based authentication for secure API access.</li>
            <li>Content Management: CRUD operations for posts and comments.</li>
            <li>Data Seeding: Prepopulate the database with sample data for testing and development.</li>
            <li>API Structure: Modular route setup for users, posts, comments, and seeding.</li>
            <li>Error Handling: Centralized error handling for consistent API responses.</li>
        </ul>
    </div>

    <div class="section">
        <h2>File Structure</h2>
        <pre>
/backend
├── /config
│   └── database.js
├── /controllers
│   ├── authController.js
│   ├── commentController.js
│   ├── postController.js
│   └── userController.js
├── /middleware
│   └── errorHandler.js
├── /models
│   ├── Comment.js
│   ├── Post.js
│   └── User.js
├── /routes
│   ├── auth-router.js
│   ├── comment-router.js
│   ├── post-router.js
│   ├── seed-router.js
│   └── user-router.js
├── .env
├── server.js
├── package.json
└── README.md
        </pre>
    </div>

    <div class="section">
        <h2>Environment Variables (.env)</h2>
        <pre>
PORT=3001
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/pressroom
SESSION_SECRET=supersecretkey
NODE_ENV=development
        </pre>
    </div>

    <div class="section">
        <h2>API Endpoints</h2>
        <h3>User Routes:</h3>
        <pre>
POST /user/register - Register a new user
POST /user/login - User login
GET /user/logout - Logout user
GET /user/:id - Get user by ID
        </pre>

        <h3>Auth Routes:</h3>
        <pre>
POST /auth/login - Authenticate user
POST /auth/register - Register user with JWT
GET /auth/logout - Logout user
        </pre>

        <h3>Seed Routes:</h3>
        <pre>
GET /seed/users - Seed sample users
GET /seed/posts - Seed sample posts
GET /seed/comments - Seed sample comments
        </pre>

        <h3>Post Routes:</h3>
        <pre>
GET /post - Get all posts
POST /post - Create new post
PUT /post/:id - Update post
DELETE /post/:id - Delete post
        </pre>

        <h3>Comment Routes:</h3>
        <pre>
GET /comment/:postId - Get comments for post
POST /comment/:postId - Add comment to post
PUT /comment/:commentId - Update comment
DELETE /comment/:commentId - Delete comment
        </pre>
    </div>

    <div class="section">
        <h2>Installation and Setup</h2>
        <pre>
git clone https://github.com/username/press-room-backend.git
cd press-room-backend
npm install
        </pre>

        <p>Create a <code>.env</code> file in the root directory with the required variables:</p>
        <pre>
PORT=3001
MONGO_URI=<Your MongoDB URI>
SESSION_SECRET=<Your Secret Key>
NODE_ENV=development
        </pre>

        <p>Run the server:</p>
        <pre>npm start</pre>
        <p>Access the API at <code>http://localhost:3001</code></p>
    </div>

    <div class="section">
        <h2>Deployment</h2>
        <p>The backend can be deployed on platforms such as Heroku, Render, or DigitalOcean. Ensure that MongoDB Atlas is configured for cloud database storage and update environment variables accordingly.</p>
    </div>

    <div class="section">
        <h2>Error Handling</h2>
        <p>All errors are handled through a centralized error handler:</p>
        <pre>
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error('Error:', err.message);
  res.status(statusCode).json({ error: err.message });
});
        </pre>
    </div>

    <div class="section">
        <h2>Database Connection</h2>
        <pre>
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
        </pre>
    </div>

    <div class="section">
        <h2>License</h2>
        <p>This project is licensed under the <strong>MIT License</strong>.</p>
    </div>

</div>

</body>
</html>
