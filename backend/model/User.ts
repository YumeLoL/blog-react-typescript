import mongoose from "mongoose";

const Schema = mongoose.Schema

interface IUser {
    username: string,
    password: string
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
    }
})

export default mongoose.model('User', userSchema)
// mongoDB will store it as users