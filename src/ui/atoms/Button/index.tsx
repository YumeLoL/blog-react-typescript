import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

interface Button {
  className: string
  children: React.ReactNode
  goto: string
}

const Button: React.FC<Button> = ({ children, goto, className }) => {
  const navigate = useNavigate()

  return (
    <button className={`btn ${className}`} onClick={()=>{
      navigate(goto)
    }}>
      {children}
    </button>
  )
}

export default Button
