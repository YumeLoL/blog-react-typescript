import React from 'react'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'

const ContactPage = () => {
  return (
    <Layout>
      <Hero img={require('../../resources/images/contactUs.png')} text={'Contact Us'}/>
      
      <div>ContactPage</div>
    </Layout>
  )
}

export default ContactPage