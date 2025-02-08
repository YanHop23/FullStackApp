const Router = require('express');
const router = new Router();
const PostRouter = require('./postRoute');
const UserRouter = require('./userRoute');

router.use('/post', PostRouter)
router.use('/user', UserRouter)

module.exports = router;