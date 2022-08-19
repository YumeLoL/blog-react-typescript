import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IBlog {
    title: string,
    description: string,
    image: string, 
    user: string,
}

const blogSchema= new Schema<IBlog>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

export default mongoose.model('Blog', blogSchema)