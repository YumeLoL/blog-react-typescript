import express, {Express} from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import blogRoute from './routes/blogRoute';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app: Express = express()
const port = process.env.PORT;
app.use(express.json()); // make all body parts into json format
app.use(cors())
app.use('/api/user', userRoute)
app.use('/api/blog', blogRoute)

mongoose
  .connect(
    'mongodb+srv://yumeblogApp:yumeblogApp@cluster0.u2dsqbb.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    })
  }).catch(err => {
    console.log("failed to connect to database", err)
  })
