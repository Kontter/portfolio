import React, { useContext, useEffect } from 'react'
import {Link} from "react-router-dom"
import styles from './BlogPage.module.scss'
import blog1 from '../../images/img/blog1.png'
import blog2 from '../../images/img/blog2.png'
import blog3 from '../../images/img/blog3.png'
import blog4 from '../../images/img/blog4.png'
import blog5 from '../../images/img/blog5.png'
import blog6 from '../../images/img/blog6.png'
import { activePageContext } from '../../contexts/ActivePageContext'
import { BLOG } from '../../helpers/variables'

export default function BlogPage() {

  const {setActivePage} = useContext(activePageContext)

  useEffect(() => {
    setActivePage(BLOG)
  }, [])

  return (
    <section className={styles.blog}>
      <div className={styles.blog__container}>
        <h1 className={styles.blog__title}>Blog</h1>
        <p className={styles.blog__descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem.</p>
        <div className={styles.blog__cardsGrid}>
          <Link to='/blogIdPage' className={styles.blog__card}>
            <div className={styles.blog__imgWrapper}>
              <span className={styles.blog__cardCircle}></span>
              <img className={styles.blog__cardImg} src={blog1} alt="some image" />
            </div>
            <span className={styles.blog__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blog__cardTitle}>How to Build a Stunning Website with Framer</h3>
            <p className={styles.blog__cardDescr}>Learn how to create an impressive website using Framer with our step-by-step guide.</p>
            <span className={styles.blog__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blog__card}>
            <div className={styles.blog__imgWrapper}>
              <span className={styles.blog__cardCircle}></span>
              <img className={styles.blog__cardImg} src={blog2} alt="some image" />
            </div>
            <span className={styles.blog__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blog__cardTitle}>10 website elements for maximum user engagement</h3>
            <p className={styles.blog__cardDescr}>10 website elements to engage users, from intuitive navigation to compelling visuals.</p>
            <span className={styles.blog__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blog__card}>
            <div className={styles.blog__imgWrapper}>
              <span className={styles.blog__cardCircle}></span>
              <img className={styles.blog__cardImg} src={blog3} alt="some image" />
            </div>
            <span className={styles.blog__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blog__cardTitle}>The importance of content in driving website traffic</h3>
            <p className={styles.blog__cardDescr}>Quality content is king. Learn how to create valuable, SEO-optimized content.</p>
            <span className={styles.blog__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blog__card}>
            <div className={styles.blog__imgWrapper}>
              <span className={styles.blog__cardCircle}></span>
              <img className={styles.blog__cardImg} src={blog4} alt="some image" />
            </div>
            <span className={styles.blog__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blog__cardTitle}>10 common web development mistakes to avoid</h3>
            <p className={styles.blog__cardDescr}>10 common web development mistakes and improve your site's functionality and user experience.</p>
            <span className={styles.blog__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blog__card}>
            <div className={styles.blog__imgWrapper}>
              <span className={styles.blog__cardCircle}></span>
              <img className={styles.blog__cardImg} src={blog5} alt="some image" />
            </div>
            <span className={styles.blog__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blog__cardTitle}>Why responsive web design is critical for your business</h3>
            <p className={styles.blog__cardDescr}>Responsive web design ensures your site looks great and performs well on all devices.</p>
            <span className={styles.blog__cardService}>WEbdesign</span>
          </Link>
          <Link to='/blogIdPage' className={styles.blog__card}>
            <div className={styles.blog__imgWrapper}>
              <span className={styles.blog__cardCircle}></span>
              <img className={styles.blog__cardImg} src={blog6} alt="some image" />
            </div>
            <span className={styles.blog__cardPrevTitle}>23rd Aug 2023</span>
            <h3 className={styles.blog__cardTitle}>The art of SEO writing: How to write content that ranks on Google</h3>
            <p className={styles.blog__cardDescr}>Optimize your website with expert tips on writing content that ranks high on Google.</p>
            <span className={styles.blog__cardService}>WEbdesign</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
