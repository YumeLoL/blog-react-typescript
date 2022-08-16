import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMenu from '../../../hooks/useMenu'
import { Icon } from '../../../resources/icons/Icons'
import env from '@beam-australia/react-env'
import FooterForm from '../FooterForm'
import './index.scss'


const Footer = () => {
  const menu = useMenu()
  const navigate = useNavigate()
  const goToRoute = (route: string) => navigate(route)

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__info">
          <p>
            <span>Mustard Seed Lawyers</span> dolor sit amet, consectetur adipiscing
            elit. Maecenas eget nisl id libero tincidunt sodales.
          </p><br />
          <p>
            Duis eleifend fermentum ante ut aliquam. Cras mi risus, dignissim
            sed adipiscing ut, placerat non arcu.
          </p>
        </div>

        <FooterForm />

        <div className="footer__top__menu">
         <div className="footer__top__menu__container">

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
      </div>

      <div className="footer__bottom">
        <p>2022 &copy; All Rights Reserved. Developed By Yumeng Li</p>
        <div className="navbar__socials">
          <a
            href={env('LINKEDIN_URL')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="linkedin" />
          </a>
          <a
            href={env('FACEBOOK_URL')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="facebook" />
          </a>
          <a href={env('GITHUB_URL')} target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
