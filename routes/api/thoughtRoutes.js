const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');
const {
  addReaction,
  removeReaction,
} = require('../../controllers/reactionController');

// GET /api/thoughts
router.route('/').get(getAllThoughts);

// GET /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById);


// POST /api/thoughts
router.route('/').post(createThought);
// {
//     "userId": "60e9f2643a2c08346406a64c",
//      "username": "alex789",
//     "thoughtText": "This is a new thought."
//   }
// PUT /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// DELETE /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
