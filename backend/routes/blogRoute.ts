import express from 'express'
import { addBlog, getAllBlogs, updateBlog } from '../controllers/blogController';


const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog)

export default blogRouter