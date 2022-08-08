import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMenu from '../../../hooks/useMenu'
import './index.scss'

const Navbar = () => {
  const menu = useMenu()

  const navigate = useNavigate()
  const goToRoute = (route: string) => {
    navigate(route)
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <a href="/">
            <img src="resources/images/LOGO.svg" alt="Logo" />
          </a>
        </div>

        <div className="navbar__socials">Social Links</div>
      </div>

      <div className="menu">
        {menu.map((item) => (
          <span
            className={`menu__item${item.active ? '--active' : ''}`}
            key={item.route}
            onClick={() => goToRoute(item.route)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </>
  )
}

export default Navbar
