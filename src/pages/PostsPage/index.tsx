import React from 'react'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import PostCard from './atoms/PostCard'

import './index.scss'

export interface Props {
  className?: string
  data: {
    id: number
    coverUrl: string
    title: string
    createdAt: string
    description?: string
  }
}

const fakeData = [
  {
    id: 1,
    coverUrl: require('../../resources/images/family.jpg'),
    title: 'The first post',
    createdAt: '29 July 2022',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores totam numquam adipisci rem, pariatur nostrum vel placeat dicta consequuntur optio, tempora voluptate necessitatibus reiciendis doloremque quas, harum minima sapiente odit nulla. A eos ab iusto. Molestiae hic tempora adipisci!',
  },
  {
    id: 2,
    coverUrl: '',
    title: 'The second post',
    createdAt: '29 July 2022',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores totam numquam adipisci rem, pariatur nostrum vel placeat dicta consequuntur optio, tempora voluptate necessitatibusdescriptionLorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores totam numquam adipisci rem.',
  },
  { id: 3, coverUrl: '', title: 'The third post', createdAt: '29 July 2022' },
  { id: 4, coverUrl: '', title: 'The fourth post', createdAt: '29 July 2022' },
  { id: 5, coverUrl: '', title: 'The fifth post', createdAt: '29 July 2022' },
]

const PostsPage = () => {
  return (
    <Layout>
      <Hero
        img={require('../../resources/images/lawyers.png')}
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
