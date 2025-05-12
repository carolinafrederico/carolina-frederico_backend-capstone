import { seedUserData } from '../seedData.js';

export const seedDatabase = async (req, res) => {
  try {
    const seedResponse = await seedUserData();
    res.status(200).json({
      message: 'Database seeded successfully',
      data: seedResponse,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding database', error: error.message });
  }
};
