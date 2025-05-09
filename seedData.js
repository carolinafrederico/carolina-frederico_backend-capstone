// seedData.js
import mongoose from 'mongoose';
import Comment from './models/comment-model.js';
import Post from './models/post-model.js';
import User from './models/user-model.js';
import connectDB from './db/database.js';

export const seedData = async () => {
  try {
    console.log('🌱 Seeding data...');

    await connectDB();

    // Clear existing data
    await Promise.all([
      Comment.deleteMany({}),
      Post.deleteMany({}),
      User.deleteMany({})
    ]);

    console.log('✅ Existing data cleared.');

    // Create Users
    const users = await User.insertMany([
      { username: 'alicej', email: 'alice@example.com', password: 'hashedPassword1', role: 'journalist' },
      { username: 'bobsmith', email: 'bob@example.com', password: 'hashedPassword2', role: 'journalist' },
      { username: 'charlieb', email: 'charlie@example.com', password: 'hashedPassword3' },
      { username: 'dianam', email: 'diana@example.com', password: 'hashedPassword4' },
      { username: 'ethanh', email: 'ethan@example.com', password: 'hashedPassword5' },
    ]);

    console.log('✅ Users seeded.');

    // Create Posts
    const posts = await Post.insertMany([
      { title: 'Why Engineering Matters', content: '...', author: users[0]._id, },
      { title: 'HR Tips for Onboarding', content: '...', author: users[1]._id, },
      { title: 'Understanding Financial Statements', content: '...', author: users[2]._id,  },
      { title: 'How to Build a Marketing Strategy', content: '...', author: users[3]._id,  },
      { title: 'Streamlining Operations', content: '...', author: users[4]._id,    }
    ]);

    console.log('✅ Posts seeded.');

    // Create Comments
    const comments = await Comment.insertMany([
      { content: 'Great post!', post: posts[0]._id, author: users[0]._id },
      { content: 'Needs more detail on methodology.', post: posts[1]._id, author: users[1]._id },
      { content: 'Helpful and concise.', post: posts[2]._id, author: users[2]._id }
    ]);

    console.log('✅ Comments seeded.');
    console.log('✅ Seeding completed successfully!');
    
    return { users, posts, comments };

  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  } finally {
    mongoose.connection.close();
  }
};
export const seedUserData = async () => {
  try {
    console.log('🌱 Seeding data...');

    await connectDB();

    // Clear existing data
    await Promise.all([
      User.deleteMany({})
    ]);
    const users = await User.insertMany([
      { username: 'alicej', email: 'alice@example.com', password: 'hashedPassword1', role: 'journalist' },
      { username: 'bobsmith', email: 'bob@example.com', password: 'hashedPassword2', role: 'journalist' },
      { username: 'charlieb', email: 'charlie@example.com', password: 'hashedPassword3' },
      { username: 'dianam', email: 'diana@example.com', password: 'hashedPassword4' },
      { username: 'ethanh', email: 'ethan@example.com', password: 'hashedPassword5' },
    ]);

    console.log('✅ Users seeded.');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  } finally {
    mongoose.connection.close();
  }
};
// connectDB();
// seedData();
