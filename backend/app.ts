import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose
  .connect(
    'mongodb+srv://yumeblogApp:yumeblogApp@cluster0.u2dsqbb.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => app.listen(4000))
  .then(() =>
    console.log('connected to database and listening to localhost:4000')
  )
  .catch((err) => console.log(err))

app.use('/api', (req, res) => {
  res.send('hellow')
})
