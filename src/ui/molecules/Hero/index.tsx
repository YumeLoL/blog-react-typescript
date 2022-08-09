import React from 'react'
import Button from '../../atoms/Button'
import './index.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Our Services</h1>
        <h2 className="hero__subtitle">
          We offer the best legal services for all customers. We offer the best
          legal services for all customers.
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
  )
}

export default Hero
