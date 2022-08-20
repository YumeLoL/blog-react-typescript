import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IBlog {
    title: string,
    description: string,
    image: string, 
    user: mongoose.SchemaDefinitionProperty<string>,
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
        // one blog belongs to one user
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default mongoose.model('Blog', blogSchema)