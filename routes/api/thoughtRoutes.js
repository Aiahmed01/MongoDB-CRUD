const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// GET /api/thoughts
router.route('/').get(getAllThoughts);

// GET /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById);

// POST /api/thoughts
router.route('/').post(createThought);

// PUT /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// DELETE /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

module.exports = router;
