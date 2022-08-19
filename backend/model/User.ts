import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
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