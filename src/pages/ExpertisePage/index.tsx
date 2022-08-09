import React from 'react'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'

const ExpertisePage = () => {
  return (
    <Layout>
      <Hero img={require('../../resources/images/expertise.png')} text={'Our Services'}/>
      
      <div>ExpertisePage</div>
    </Layout>
  )
}

export default ExpertisePage