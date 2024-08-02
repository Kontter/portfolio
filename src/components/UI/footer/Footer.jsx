import React, { useContext } from 'react' 
import {Link} from "react-router-dom"
import styles from './Footer.module.scss'
import Button from '../button/Button'
import { ReactComponent  as TwitterLogo } from "../../../images/icons/twitter-logo-light.svg";
import { ReactComponent  as InstagramLogo } from "../../../images/icons/instagram-logo-light.svg";
import { ReactComponent  as DribbbleLogo } from "../../../images/icons/dribbble-logo-light.svg";
import { ReactComponent  as BehanceLogo } from "../../../images/icons/behance-logo-light.svg";
import logo from '../../../images/icons/Logo.svg'
import ButtonArrow from '../ButtonArrow/ButtonArrow'
import { activePageContext } from '../../../contexts/ActivePageContext';
import { ABOUT, BLOG, HOME, SERVICES, WORK } from '../../../helpers/variables';


export default function Footer() {

  const {setActivePage} = useContext(activePageContext)

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__lists}>
          <ul className={styles.footer__socialLinkList}>
            <li style={{marginBottom: '43px'}} className={styles.footer__socialListItem}><a href="#"><img src={logo} alt="logo" /></a></li>
            <li className={styles.footer__socialListItem}><a href="#"><span><InstagramLogo/></span><span>Instagram</span></a></li>
            <li className={styles.footer__socialListItem}><a href="#"><span><TwitterLogo/></span><span>Twitter</span></a></li>
            <li className={styles.footer__socialListItem}><a href="#"><span><DribbbleLogo/></span><span>Dribbble</span></a></li>
            <li className={styles.footer__socialListItem}><a href="#"><span><BehanceLogo/></span><span>Behance</span></a></li>
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__listItem}>Pages</li> 
            <li className={styles.footer__listItem}>
              <Link 
                to='/home' 
                onClick={e => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  setActivePage('')
                }}
                >{HOME}
              </Link>
            </li>

            <li className={styles.footer__listItem}>
              <Link 
                to='/services' 
                onClick={e => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}}
                >{SERVICES}
              </Link>
            </li>

            <li className={styles.footer__listItem}>
              <Link 
                to='/about' 
                onClick={e => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}}
                >{ABOUT}
              </Link>
            </li>
            <li className={styles.footer__listItem}><Link to='/contact'>Contact</Link></li> 
            <li className={styles.footer__listItem} style={{marginTop: 32}}>
              <Link to='/pricing'>
                <Button arrow>More Templates</Button>
              </Link>
            </li> 
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__listItem}>CMS</li> 
            <li className={styles.footer__listItem}>
              <Link 
                to='/work' 
                onClick={e => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}}
                >{WORK}
              </Link>
            </li> 
            <li className={styles.footer__listItem}><a href="#">Work Single</a></li> 
            <li className={styles.footer__listItem}>
              <Link 
                to='/blog'
                onClick={e => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}}
                >{BLOG}
              </Link>
            </li> 
            <li className={styles.footer__listItem}><a href="#">Blog Post</a></li>  
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__listItem}>Utility Pages</li> 
            <li className={styles.footer__listItem}><a href="#">404 Error Page</a></li> 
            <li className={styles.footer__listItem}><a href="#">Password Protected</a></li> 
            <li className={styles.footer__listItem}><a href="#">Styleguide</a></li> 
            <li className={styles.footer__listItem}><a href="#">Licensing</a></li>  
            <li className={styles.footer__listItem}><a href="#">Changelog</a></li>  
          </ul>
        </div>
        <div className={styles.footer__bottom}>
          <p>© 2022 Made by Pawel Gola. Powered by Framer..</p>
          <ButtonArrow style={{flexDirection: 'row-reverse'}} onClick={e => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} ArrowUp>To Top</ButtonArrow>
        </div>
      </div>
    </footer>
  )
}
