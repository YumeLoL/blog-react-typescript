import React from 'react'
import { fakeData } from '../../libs/fakeData'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import PostCard from './atoms/PostCard'
import './index.scss'


const PostsPage = () => {
  return (
    <Layout>
      <Hero
        img={require('../../resources/images/scale.jpg')}
        text={'Blogs & News'}
      />

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
