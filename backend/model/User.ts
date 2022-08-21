import mongoose, {Types } from "mongoose";
import { IBlog } from "./Blog";

const Schema = mongoose.Schema

export interface IUser {
    username: string,
    password: string,
    blogs: Types.DocumentArray<IBlog>,
}

const userSchema= new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [
        // blogs is an array. one user has multiple blogs
        {
            type: mongoose.Types.ObjectId ,
            ref: 'Blog',
            required: true
        }
    ],
})

export default mongoose.model<IUser>('User', userSchema)
// mongoDB will store it as users