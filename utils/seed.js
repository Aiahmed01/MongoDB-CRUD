const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail } = require('./data');

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = [];

    // Create users
    for (let i = 0; i < 10; i++) {
      const user = {
        username: getRandomUsername(),
        email: getRandomEmail(),
        thoughts: [],
        friends: [],
      };
      const createdUser = await User.create(user);
      users.push(createdUser);
    }

    console.log('Users seeded successfully.');

    // Create thoughts
    for (let i = 0; i < users.length; i++) {
      const thought = {
        thoughtText: `Sample thought ${i + 1}`,
        username: users[i].username,
      };
      const createdThought = await Thought.create(thought);
      thoughts.push(createdThought);
    }

    console.log('Thoughts seeded successfully.');

    // Update user's thoughts array with created thoughts
    for (let i = 0; i < users.length; i++) {
      users[i].thoughts = thoughts;
      await users[i].save();
    }

    console.log('Users updated with thoughts.');

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
});
