import React from 'react'
import Navbar from '../../molecules/Navbar'
import './index.scss'

interface Layout {
  children: React.ReactNode
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__top">
        <Navbar />
        <div>{children}</div>
      </div>

      <div>footer</div>
    </div>
  )
}

export default Layout
