import React, { useContext, useEffect } from 'react'
import styles from './ContactPage.module.scss'
import Button from '../../components/UI/button/Button'
import { ReactComponent  as InstagramLogo } from "../../images/icons/instagram-logo-light.svg";
import { ReactComponent  as TwitterLogo } from "../../images/icons/twitter-logo-light.svg";
import { ReactComponent  as FacebookLogo } from "../../images/icons/facebook-logo-light.svg";
import { ReactComponent  as BehanceLogo } from "../../images/icons/behance-logo-light.svg";
import { ReactComponent  as DribbbleLogo } from "../../images/icons/dribbble-logo-light.svg";
import { ReactComponent  as PinterestLogo } from "../../images/icons/pinterest-logo-light.svg";
import { ReactComponent  as UpRightArrowIcon } from "../../images/icons/arrow-up-right.svg";
import { activePageContext } from '../../contexts/ActivePageContext';

export default function ContactPage() {

  const {setActivePage} = useContext(activePageContext)

  useEffect(() => {
    setActivePage('')
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <form className={styles.contact__form}>
          <span className={styles.contact__formPrevTitle}>Contact</span>
          <h1 className={styles.contact__formTitle}>Let’s get in touch.</h1>
          <div className={styles.contact__formBlock}>
            <input type="text" placeholder='NAME'/>
            <input type="text" placeholder='EMAIL'/>
            <textarea placeholder='MESSAGE' name="" id="" cols="30" rows="10"></textarea>
            <Button>Send Message</Button>
          </div>
        </form>
        <ul className={styles.contact__linksList}>
          <li className={styles.contact__linksListItem}>
            <a className={styles.contact__link} href="#">
              <InstagramLogo className={styles.contact__socialLinkIcon}/>
              <span>Instagram</span>
              <UpRightArrowIcon className={styles.contact__socialLinkArrow}/>
            </a>
          </li>
          <li className={styles.contact__linksListItem}>
            <a className={styles.contact__link} href="#">
              <TwitterLogo className={styles.contact__socialLinkIcon}/>
              <span>Twitter</span>
              <UpRightArrowIcon className={styles.contact__socialLinkArrow}/>
            </a>
          </li>
          <li className={styles.contact__linksListItem}>
            <a className={styles.contact__link} href="#">
              <FacebookLogo className={styles.contact__socialLinkIcon}/>
              <span>Facebook</span>
              <UpRightArrowIcon className={styles.contact__socialLinkArrow}/>
            </a>
          </li>
          <li className={styles.contact__linksListItem}>
            <a className={styles.contact__link} href="#">
              <BehanceLogo className={styles.contact__socialLinkIcon}/>
              <span>Behance</span>
              <UpRightArrowIcon className={styles.contact__socialLinkArrow}/>
            </a>
          </li>
          <li className={styles.contact__linksListItem}>
            <a className={styles.contact__link} href="#">
              <DribbbleLogo className={styles.contact__socialLinkIcon}/>
              <span>Dribbble</span>
              <UpRightArrowIcon className={styles.contact__socialLinkArrow}/>
            </a>
          </li>
          <li className={styles.contact__linksListItem}>
            <a className={styles.contact__link} href="#">
              <PinterestLogo className={styles.contact__socialLinkIcon}/>
              <span>Pinterest</span>
              <UpRightArrowIcon className={styles.contact__socialLinkArrow}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
