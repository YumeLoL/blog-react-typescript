import React from 'react'
import './index.scss'


interface Hero {
  img: string;
  text: string;
}

const Hero: React.FC<Hero>= ({img, text}) => {
  return (
    <div className="hero">
      <img className="hero__img" src={img} alt="img" />

      <div className="hero__title">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Hero
