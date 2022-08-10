const { Router } = require('express');
const {
  loginController,
  getTalkersController,
  createTalkerController,
  getTalkerByIdController,
  updateTalkerController,
  searchTalkerController,
} = require('../controllers');
const { deleteTalkerController } = require('../controllers/deleteTalkerController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = new Router();

router.post('/login', loginController);

router.get('/talker/search', authMiddleware, searchTalkerController);
router.get('/talker', getTalkersController);
router.get('/talker/:id', getTalkerByIdController);

router.post('/talker', authMiddleware, createTalkerController);
router.put('/talker/:id', authMiddleware, updateTalkerController);
router.delete('/talker/:id', authMiddleware, deleteTalkerController);

module.exports = router;
