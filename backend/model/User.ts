import mongoose from "mongoose";

const Schema = mongoose.Schema

interface IUser {
    username: string,
    password: string,
    blogs: string[]
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
            type: mongoose.Types.ObjectId,
            ref: 'Blog',
            required: true
        }
    ],
})

export default mongoose.model('User', userSchema)
// mongoDB will store it as users