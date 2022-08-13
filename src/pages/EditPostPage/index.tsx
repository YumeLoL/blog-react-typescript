import React from 'react'
import Hero from '../../ui/molecules/Hero';
import Layout from '../../ui/organisms/layout';
import AddEditPost from './AddEditPost';
import './index.scss';

const EditPostPage = () => {
  return (
    <Layout>
        <Hero img={require('../../resources/images/scale.jpg')} text={'Add A New Post'} />
        <AddEditPost />
    </Layout>
  )
}

export default EditPostPage