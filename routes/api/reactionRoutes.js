const router = require('express').Router();
const {
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');


// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .put(addReaction);

router
  .route('/:thoughtId/:reactionId')
  .delete(removeReaction);


module.exports = router;
