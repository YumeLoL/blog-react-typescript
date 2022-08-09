import React from 'react'
import Button from '../../ui/atoms/Button'
import Layout from '../../ui/organisms/layout'
import './index.scss'

const AboutPage = () => {
  return (
    <Layout>
      <div className="heroAbout">
        <div className="heroAbout__content">
          <h1 className="heroAbout__title">Our Services</h1>
          <h2 className="heroAbout__subtitle">
            We offer the best legal services for all customers. We offer the
            best legal services for all customers.
          </h2>

          <Button
            className="btn-round"
            onClick={() => {
              alert('Click me')
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="intro">
        <p className="brief">
          Our process & expertise has been built through years of{' '}
          <span className="brief__bord">constant work & dedication</span>, &
          drives us in working to help our clients move further faster.
        </p>

        <div className="description">
          <h3 className="description__title">Our Ideology</h3>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            laudantium officia tempore! Illo similique aliquid eos est quod
            ullam numquam atque enim mollitia laudantium autem vel, doloremque
            fugiat qui voluptas. Voluptas architecto tenetur incidunt libero
            asperiores impedit dolore? Odio optio repellat corrupti rerum
            libero, sit dolore non molestiae porro quisquam.
          </p>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            laudantium officia tempore! Illo similique aliquid eos est quod
            ullam numquam atque enim mollitia laudantium autem vel, doloremque
            fugiat qui voluptas. Voluptas architecto tenetur inci.
          </p>
        </div>

        <Button className={'btn-square'} onClick={() => alert('click me')}>
          View Our Services
        </Button>
      </div>
    </Layout>
  )
}

export default AboutPage
