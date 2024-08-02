import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import logo from '../../../images/icons/Logo.svg'
import styles from './Header.module.scss'
import Button from '../button/Button'
import { activePageContext } from '../../../contexts/ActivePageContext'
import { ABOUT, BLOG, HOME, SERVICES, WORK, PRICING } from '../../../helpers/variables'

export default function Header() {

  const {activePage, setActivePage} = useContext(activePageContext)
  const [isBurgerMenu, setIsBurgerMenu] = useState(false)

  const header = [styles.header]
  const burgerMenu = [styles.header__burgerMenu]
  const asideNav = [styles.header__asideNav]

  if(isBurgerMenu) {
    burgerMenu.push(styles.active)
    asideNav.push(styles.active)
    header.push(styles.active)

    document.querySelector('body').style.overflow = 'hidden'
  } else {
    document.querySelector('body').style.overflow = 'auto'
  }


  return (
    <header className={header.join(' ')}>
      <div onClick={e => setIsBurgerMenu(prev => !prev)} className={burgerMenu.join(' ')}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div onClick={e => setIsBurgerMenu(false)} className={asideNav.join(' ')}>
        <nav className={styles.header__asideNavbar}>
          <Link
            className={styles.header__imgLink}
            to='/home' 
            onClick={e => setActivePage(HOME)}
          >
            <img className={styles.header__logo} src={logo} alt="logo" />
          </Link> 

          <ul className={styles.header__list}>
            <li>
              <Link 
                to='/services' 
                style={activePage === SERVICES ? {borderBottom: '1px solid #dac5a7'} : {}} 
                className={styles.header__listLink}
                >{SERVICES}
              </Link>
            </li>

            <li>
              <Link 
                to='/work'
                style={activePage === WORK ? {borderBottom: '1px solid #dac5a7'} : {}} 
                className={styles.header__listLink} 
                >{WORK}
              </Link>
            </li>

            <li>
              <Link 
                to='/about' 
                style={activePage === ABOUT ? {borderBottom: '1px solid #dac5a7'} : {}} 
                className={styles.header__listLink}
                >{ABOUT}
              </Link>
            </li>

            <li>
              <Link 
                to='/blog'
                className={styles.header__listLink} 
                style={activePage === BLOG ? {borderBottom: '1px solid #dac5a7'} : {}} 
                >{BLOG}
              </Link>
            </li>

            <li>
              <Link 
              to='/pricing'
              className={styles.header__listLink} 
              style={activePage === PRICING ? {borderBottom: '1px solid #dac5a7'} : {}}
              >{PRICING}
              </Link>
            </li>
          </ul>
          <Link to='/contact'>
            <Button>Let’s talk</Button>
          </Link>
        </nav>
      </div>

      <nav className={styles.header__nav}>
        <Link
          className={styles.header__imgLink}
          to='/home' 
          onClick={e => setActivePage(HOME)}
        >
          <img className={styles.header__logo} src={logo} alt="logo" />
        </Link> 

        <ul className={styles.header__list}>
          <li>
            <Link 
              to='/services' 
              style={activePage === SERVICES ? {borderBottom: '1px solid #dac5a7'} : {}} 
              className={styles.header__listLink}
              >{SERVICES}
            </Link>
          </li>

          <li>
            <Link 
              to='/work'
              style={activePage === WORK ? {borderBottom: '1px solid #dac5a7'} : {}} 
              className={styles.header__listLink} 
              >{WORK}
            </Link>
          </li>

          <li>
            <Link 
              to='/about' 
              style={activePage === ABOUT ? {borderBottom: '1px solid #dac5a7'} : {}} 
              className={styles.header__listLink}
              >{ABOUT}
            </Link>
          </li>

          <li>
            <Link 
              to='/blog'
              className={styles.header__listLink} 
              style={activePage === BLOG ? {borderBottom: '1px solid #dac5a7'} : {}} 
              >{BLOG}
            </Link>
          </li>

          <li>
            <Link 
            to='/pricing'
            className={styles.header__listLink} 
            style={activePage === PRICING ? {borderBottom: '1px solid #dac5a7'} : {}}
            >{PRICING}
            </Link>
          </li>
        </ul>
        <Link to='/contact'>
          <Button>Let’s talk</Button>
        </Link>
      </nav>
    </header>
  )
}
