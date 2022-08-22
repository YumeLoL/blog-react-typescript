import mongoose from 'mongoose'

const Schema = mongoose.Schema

export interface IBlog {
  title: string
  description: string
  content: string
  coverUrl: string
  createdAt: Date
  updatedAt?: Date
  user:  any // !!! need to be fixed !!!
//   [x: string]: any
}

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
  user: {
    // one blog belongs to one user
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export default mongoose.model<IBlog>('Blog', blogSchema)
