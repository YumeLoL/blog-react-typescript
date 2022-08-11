import React from 'react'
import { IButton } from '../../../libs/button'
import './index.scss'


const Button: React.FC<IButton> = ({ text, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
