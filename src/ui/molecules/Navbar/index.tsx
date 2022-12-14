import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMenu from '../../../hooks/useMenu'
import env from '@beam-australia/react-env'
import { Icon } from '../../../resources/icons/Icons'
import './index.scss'

const Navbar = () => {
  const menu = useMenu()

  const navigate = useNavigate()
  const goToRoute = (route: string) => {
    navigate(route)
  }

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar__logo">
          <a href="/">
            <img src={require('../../../resources/logo/navlogo.png')} alt="Logo" />
          </a>
        </div>

        <div className="navbar__socials">
            <a href={env("LINKEDIN_URL")} target="_blank" rel="noopener noreferrer">
                <Icon type="linkedin"/>
            </a>
            <a href={env("FACEBOOK_URL")} target="_blank" rel="noopener noreferrer">
                <Icon type="facebook"/>
            </a>
            <a href={env("GITHUB_URL")} target="_blank" rel="noopener noreferrer">
                <Icon type="github"/>
            </a>
        </div>
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
    </div>
  )
}

export default Navbar


