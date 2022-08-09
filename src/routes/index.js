const { Router } = require('express');
const {
  loginController,
  getTalkersController,
  createTalkerController,
  getTalkerByIdController,
} = require('../controllers');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = new Router();

router.post('/login', loginController);

router.get('/talker', getTalkersController);
router.get('/talker/:id', getTalkerByIdController);
router.post('/talker', authMiddleware, createTalkerController);

module.exports = router;
