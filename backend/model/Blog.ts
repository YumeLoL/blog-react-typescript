import mongoose, { ObjectId, SchemaDefinitionProperty, Types } from 'mongoose'
import { IUser } from './User'

const Schema = mongoose.Schema

export interface IBlog {
  title: string
  description: string
  image: string
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
  image: {
    type: String,
    required: true,
  },
  user: {
    // one blog belongs to one user
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export default mongoose.model<IBlog>('Blog', blogSchema)
