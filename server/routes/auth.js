import express from 'express'
const router = express.Router();
import { signup, login, getUsers }  from '../controllers/authController.js';

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', getUsers);

export default router;
