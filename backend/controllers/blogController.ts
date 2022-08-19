import Blog from '../model/Blog'
import { Request, Response } from 'express'

export const getAllBlogs = async (_req:Request, res: Response) => {
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

export const addBlog = async (req: Request, res: Response) => {
    const {title, description, image, user} = req.body

    const blog = new Blog({
        title, description, image, user,
    })

    try {
        await blog.save()
    } catch (error) {
        console.log(error)
    }

    return res.status(201).json({ blog })
  }

  export const updateBlog = async (req: Request, res: Response) => {
      const {title, description, image, user} = req.body
      const blogId = req.params.id

      let blog
      try {
          blog = await Blog.findByIdAndUpdate(blogId, {
              title, description, image, user
          })
      } catch (error) {
          console.log(error)
      }

      if(!blog) res.status(404).json({message: 'Unable to update blog'})
      return res.status(200).json({blog})


  }