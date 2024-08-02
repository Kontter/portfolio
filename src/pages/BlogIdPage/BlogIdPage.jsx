import React, { useContext, useEffect, useRef } from 'react'
import styles from './BlogIdPage.module.scss'
import ButtonArrow from '../../components/UI/ButtonArrow/ButtonArrow'
import blogIdPageImage from '../../images/img/blog1.png'
import mainPersonImage from '../../images/img/mainPerson2.png'
import blog1 from '../../images/img/blog1.png'
import blog2 from '../../images/img/blog2.png'
import blog3 from '../../images/img/blog3.png'
import { ReactComponent  as TwitterLogo } from "../../images/icons/twitter-logo-light.svg";
import { ReactComponent  as InstagramLogo } from "../../images/icons/instagram-logo-light.svg";
import { ReactComponent  as FacebookLogo } from "../../images/icons/facebook-logo-light.svg";
import { ReactComponent  as UpRightArrowIcon } from "../../images/icons/arrow-up-right.svg";
import { activePageContext } from '../../contexts/ActivePageContext'
import { Link } from 'react-router-dom'

export default function BlogIdPage() {

  const ref = useRef()
  const {setActivePage} = useContext(activePageContext)

  useEffect(() => {
    window.scrollTo({top: 0})
    setActivePage('')
  }, [])

  return (
    <section className={styles.blogIdPage}>
      <div className={styles.blogIdPage__container}>
        <div className={styles.blogIdPage__greetingBlog}>
          <h1 className={styles.blogIdPage__title}>How to Build a Stunning Website with Framer</h1>
          <p className={styles.blogIdPage__descr}>Learn how to create an impressive website using Framer with our step-by-step guide.</p>
          <ButtonArrow style={{margin: '0 auto'}} onClick={e => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})}>REad More</ButtonArrow>
        </div>
        <div className={styles.blogIdPage__shortInfoBlock}>
          <div className={styles.blogIdPage__shortInfoBlockCard}>
            <span>Date</span>
            <span>23rd Aug 2023</span>
          </div>
          <div className={styles.blogIdPage__shortInfoBlockCard}>
            <span>Category</span>
            <span>Web Design</span>
          </div>
          <div className={styles.blogIdPage__shortInfoBlockCard}>
            <span>Reading time</span>
            <span>5 Min</span>
          </div>
        </div>
        <img className={styles.blogIdPage__mainImg} src={blogIdPageImage} alt="decor image" />
        <div ref={ref} className={styles.blogIdPage__infoWrapper}>
          <h3 className={styles.blogIdPage__infoWrapperTitle}>Elit ullamcorper dignissim</h3>
          <p className={styles.blogIdPage__infoWrapperDescr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Condimentum mattis pellentesque id nibh tortor id. Nisl condimentum id venenatis a condimentum. Nunc sed blandit libero volutpat sed. Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.</p>
          <h3 className={styles.blogIdPage__infoWrapperTitle}>Hendrerit dolor magna</h3>
          <p className={styles.blogIdPage__infoWrapperDescr}>Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere.</p>
          <h3 className={styles.blogIdPage__infoWrapperTitle}>Hendrerit dolor magna</h3>
          <p className={styles.blogIdPage__infoWrapperDescr}>Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere.</p>
          <div className={styles.blogIdPage__infoBlock}>
            <h3 className={styles.blogIdPage__infoBlockTitle}>Conclusion</h3>
            <p className={styles.blogIdPage__infoBlockDescr}>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. </p>
            <div className={styles.blogIdPage__infoBlockBottom}>
              <img src={mainPersonImage} alt="Arik photo" />
              <div className={styles.blogIdPage__infoBlockPersonalInfo}>
                <span>Arik Andersson</span>
                <span>Framer Expert</span>
              </div>
            </div>
          </div>
          <ul className={styles.blogIdPage__socialLinksList}>
            <li className={styles.blogIdPage__socialLinkItem}>
              <a className={styles.blogIdPage__socialLink} href="#">
                <InstagramLogo className={styles.blogIdPage__socialLinkIcon}/>
                <span>Instagram</span>
                <UpRightArrowIcon className={styles.blogIdPage__socialLinkArrow}/>
              </a>
            </li>
            <li className={styles.blogIdPage__socialLinkItem}>
              <a className={styles.blogIdPage__socialLink} href="#">
                <TwitterLogo className={styles.blogIdPage__socialLinkIcon}/>
                <span>Twitter</span>
                <UpRightArrowIcon className={styles.blogIdPage__socialLinkArrow}/>
              </a>
            </li>
            <li className={styles.blogIdPage__socialLinkItem}>
              <a className={styles.blogIdPage__socialLink} href="#">
                <FacebookLogo className={styles.blogIdPage__socialLinkIcon}/>
                <span>Facebook</span>
                <UpRightArrowIcon className={styles.blogIdPage__socialLinkArrow}/>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.blogIdPage__relatedNewsTop}>
          <span>Related</span>
          <span> News</span>
          <ButtonArrow rightArrowUp>See all</ButtonArrow>
        </div>
        <div className={styles.blogIdPage__cardsGrid}>
          <Link to='/blogIdPage' className={styles.blogIdPage__card} onClick={e => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={styles.blogIdPage__imgWrapper}>
              <span className={styles.blogIdPage__cardCircle}></span>
              <img className={styles.blogIdPage__cardImg} src={blog1} alt="some image" />
            </div>
            <span className={styles.blogIdPage__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blogIdPage__cardTitle}>How to Build a Stunning Website with Framer</h3>
             <p className={styles.blogIdPage__cardDescr}>Learn how to create an impressive website using Framer with our step-by-step guide.</p>
            <span className={styles.blogIdPage__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blogIdPage__card} onClick={e => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={styles.blogIdPage__imgWrapper}>
              <span className={styles.blogIdPage__cardCircle}></span>
              <img className={styles.blogIdPage__cardImg} src={blog2} alt="some image" />
            </div>
            <span className={styles.blogIdPage__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blogIdPage__cardTitle}>10 website elements for maximum user engagement</h3>
             <p className={styles.blogIdPage__cardDescr}>10 website elements to engage users, from intuitive navigation to compelling visuals.</p>
            <span className={styles.blogIdPage__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blogIdPage__card} onClick={e => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={styles.blogIdPage__imgWrapper}>
              <span className={styles.blogIdPage__cardCircle}></span>
              <img className={styles.blogIdPage__cardImg} src={blog3} alt="some image" />
            </div>
            <span className={styles.blogIdPage__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blogIdPage__cardTitle}>The importance of content in driving website traffic</h3>
             <p className={styles.blogIdPage__cardDescr}>Quality content is king. Learn how to create valuable, SEO-optimized content.</p>
            <span className={styles.blogIdPage__cardService}>WEbdesign</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
