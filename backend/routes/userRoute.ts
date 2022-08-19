import express from 'express'
import { getAllUser, login, signUp } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', getAllUser)
userRouter.post('/signup', signUp)
userRouter.post('/login', login)

export default userRouter