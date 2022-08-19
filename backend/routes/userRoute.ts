import express from 'express'
import { getAllUser, signUp } from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUser)
router.post('/signup', signUp)

export default router