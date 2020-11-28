const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router
    .route('/:userId')
    .get(getAllThoughts);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(addThought)
    .delete(removeThought)

router
    .route('/:userId/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;