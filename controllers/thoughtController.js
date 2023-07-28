const { User, Thought } = require('../models');

const thoughtController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single thought by id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No thought found with this id' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Create a new thought
  // review after more test
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        // Add the thought's id to the associated user's thoughts array
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user found with this id' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update a thought by id
  async updateThought(req, res) {
    try { thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body,
      { new: true })

        if (!thought) {
           res.status(404).json({ message: 'No thought found with this id' });
        }else{
        res.json(thought);
      }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      };
  }, 

  // Delete a thought by id
  //updated because of double calls 
  async deleteThought(req, res) {
    
    try{ 
      const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId })
      res.status(200).json(thought);
      
    } catch (err) { res.status(500).json(err);
    }
  },
  // Add a reaction to a thought
  async addReaction(req, res) { 
    try{
    const thought = await Thought.findOneAndUpdate( 
      {_id:req.params.thoughtId},
      {$addToSet: {reactions: req.body}},
      { new: true, runValidators: true }
     
    )
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with this id' });
        }else {
        res.json(thought);
      }
     } catch (err)  {
        console.log(err);
        res.status(500).json(err);
      };
  },

  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No thought found with this id' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
