import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import './index.scss'
interface Blog {
  title: string
  content: string
  createdAt: string
  coverUrl: string
}

const PostDetailPage = () => {
  const [blog, setBlog] = useState<Blog>()
  console.log(blog)

  const { id } = useParams()


  useEffect(() => {
    const getBlogById = async () => {
      await axios
        .get(` http://localhost:5000/api/blog/${id}`)
        .then((res) => {
          setBlog(res.data.blog)
        })
        .catch((err) => console.log(err))
    }

    getBlogById()
  }, [id])

  return (
    <Layout>
      <>
        <Hero
          img={require('../../resources/images/lawyers.jpg')}
          text={'Our Blog (should be a link can back to postpage)'}
        />

        <div className="blog">
          <h1>{blog.title}</h1>
          <h2>{blog.createdAt.slice(0,10)}</h2>
          <img src={blog.coverUrl} alt="blog1" />
          <p>{blog.content.slice(3, -4)} </p>
        </div>
      </>
    </Layout>
  )
}

export default PostDetailPage
