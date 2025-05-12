// import express from 'express';
// import { seedData } from '../seedData.js';

// const router = express.Router();

// router.get('/seed', async (req, res) => {
//   try {
//     const { users, posts, comments } = await seedData();
//     res.status(200).json({
//       message: '✅ Database seeded successfully',
//       users,
//       posts,
//       comments,
//     });
//   } catch (err) {
//     console.error('❌ Error seeding data:', err.message);
//     res.status(500).json({ error: '❌ Error seeding the database' });
//   }
// });

// export default router;

import express from 'express';
import { seedUserData } from '../seedData.js';

const router = express.Router();

// Seed Data Route
router.get('/seed', async (req, res) => {
  try {
    const seedResponse = await seedUserData();
    res.status(200).json({
      message: 'Database seeded successfully',
      data: seedResponse,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding database', error: error.message });
  }
});

export default router;
