const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// User Routes

// describe('GET /api/users', () => {
//     test('should return an array of users', async () => {
//       const response = await request(app).get('/api/users');
      
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual(expect.arrayContaining([])); // Modify this to match the expected response from your API
//     });
//   });
router.get('/', getAllUsers);

router.get('/:userId', getUserById);

router.post('/', createUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

router.post('/:userId/friends/:friendId', addFriend);

router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
