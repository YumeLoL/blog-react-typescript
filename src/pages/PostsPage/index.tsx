
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { fakeData } from '../../libs/fakeData'
import Button from '../../ui/atoms/Button'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import PostCard from './atoms/PostCard'
import './index.scss'

const PostsPage = () => {
  const { isUserLogged, setIsUserLogged } = useContext(UserContext)

  const navigate = useNavigate()

 

  return (
    <Layout>
      <Hero
        img={require('../../resources/images/scale.jpg')}
        text={'Blogs & News'}
      />

      {/* if admin login, show the button */}
      {isUserLogged && (
        <Button
          className={'add-btn'}
          onClick={() =>  navigate('/EditPostPage')}
          text={'+ Add New Posts'}
        />
      )}

      <div className="posts-container">
        {fakeData.map((post) => {
          return (
            <PostCard
              className="posts-container__small"
              key={post.id}
              data={{
                id: post.id,
                coverUrl: post.coverUrl,
                title: post.title,
                createdAt: post.createdAt,
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
