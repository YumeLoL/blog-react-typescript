import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserId } from '../../contexts/UserContext'
import axios from 'axios'
import Button from '../../ui/atoms/Button'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import PostCard from './atoms/PostCard'
import './index.scss'

const PostsPage = () => {
  const {userId} = useContext(UserId)
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getAllBlogs = async () => {
      await axios
        .get('http://localhost:5000/api/blog')
        .then((res) => {
          setBlogs(res.data.blogs)
    
        })
        .catch((err) => console.log(err))
    }

    getAllBlogs()
  }, [])

  return (
    <Layout>
      <Hero
        img={require('../../resources/images/scale.jpg')}
        text={'Blogs & News'}
      />

      {/* if admin login, show the button */}
      {userId && (
        <Button
          className={'btn-text'}
          onClick={() => navigate('/editpostpage')}
          text={'+ Add New Posts'}
        />
      )}

      <div className="posts-container">
        {blogs &&
          blogs.reverse().map((post) => {
            return (
              <PostCard
                className="posts-container__small"
                key={post._id}
                data={{
                  _id: post._id,
                  coverUrl: post.coverUrl,
                  title: post.title,
                  createdAt: post.createdAt.slice(0,10),
                  description: post.description,
                }}
              />
            )
          })}
      </div>
    </Layout>
  )
}

export default PostsPage
