import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Blog, { IBlog } from '../model/Blog'
import User from '../model/User'

// get all blog posts
export const getAllBlogs = async (_req: Request, res: Response) => {
  let blogs

  try {
    blogs = await Blog.find()
  } catch (error) {
    return console.log(error)
  }

  if (!blogs) {
    return res.status(404).json({ message: 'No Blogs Found' })
  }
  return res.status(200).json({ blogs })
}

// add a new blog
export const addBlog = async (req: Request, res: Response) => {
  const { title, description, image, user } = req.body

  const blog = new Blog<IBlog>({
    title,
    description,
    image,
    user,
  })

  // check user exists or not
  let existingUser
  try {
    existingUser = await User.findById(user)
  } catch (error) {
    console.log(error)
  }
  if (!existingUser) {
    return res.status(404).json({ message: 'User not found by this Id' })
  }

  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await blog.save({ session })
    existingUser.blogs?.push(blog)
    await existingUser.save({ session })
    await session.commitTransaction()
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error })
  }

  return res.status(201).json({ blog })
}

// update a blog
export const updateBlog = async (req: Request, res: Response) => {
  const { title, description, image, user } = req.body
  const blogId = req.params.id

  let blog
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
      image,
      user,
    })
  } catch (error) {
    console.log(error)
  }

  if (!blog) {
    return res.status(404).json({ message: 'Unable to update blog' })
  }
  return res.status(200).json({ blog })
}

// get a blog detail by id
export const getBlog = async (req: Request, res: Response) => {
  const blogId = req.params.id
  const _id = mongoose.Types.ObjectId.createFromHexString(blogId)

  let blog
  try {
    blog = await Blog.findById({ _id })
  } catch (error) {
    console.log(error)
  }

  if (!blog) {
    return res.status(500).json({ message: 'No blog found' })
  }
  return res.status(200).json({ blog })
}

// delete a blog by id
export const deleteBlog = async (req: Request, res: Response) => {
  const blogId = req.params.id
  const _id = mongoose.Types.ObjectId.createFromHexString(blogId)

  let blog
  try {
    blog = await Blog.findByIdAndRemove({ _id }).populate('user')

    await blog?.user.blogs.pull(blog)
    await blog?.user.save()
  } catch (error) {
    console.log(error)
  }

  if (!blog) {
    return res.status(404).json({ message: 'No blog found' })
  }
  return res.status(200).json({ blog })
}

// get blogs by user id
export const getByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id

  let userBlogs 
  try {
    userBlogs = await User.findById(userId).populate('blogs')
  } catch (error) {
    console.log(error)
  }

  if(!userBlogs) {
    return res.status(404).json({ message: 'No Blog Found' })
  }
  return res.status(200).json({blogs:userBlogs})
}
