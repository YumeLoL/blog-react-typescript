import React from 'react'
import './index.scss'

interface Button {
  className: string;
  children: React.ReactNode
  onClick: () => void
}

const Button: React.FC<Button> = ({ children, onClick, className }) => (
  <button className={`btn ${className}`} onClick={onClick}>{children}</button>
)

export default Button
