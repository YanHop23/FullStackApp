const Router = require('express')
const router = new Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAll)
router.get('/:id', postController.getOne)
router.get('/user/:id', postController.getUser)
router.get('/comment/:id', postController.getCommentToPost)

module.exports = router;