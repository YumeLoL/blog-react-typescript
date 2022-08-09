import React from 'react'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import './index.scss'

const PostsPage = () => {
  return (
    <Layout>
      <Hero img={require('../../resources/images/lawyers.png')} text={'Blogs & News'}/>
      <div>PostsPage</div>
    </Layout>
  )
}

export default PostsPage