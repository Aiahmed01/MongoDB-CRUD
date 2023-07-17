const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
    addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// GET /api/thoughts
router.route('/').get(getAllThoughts);

// GET /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById);

// the post routes ids are not fixed this is for next time.
// POST /api/thoughts
router.route('/').post(createThought);

// PUT /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// DELETE /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
