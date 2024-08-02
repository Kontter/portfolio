import React, { useContext, useEffect } from 'react'
import {Link} from "react-router-dom"
import styles from './WorkPage.module.scss'
import work1 from '../../images/img/work1.png'
import work2 from '../../images/img/work2.png'
import work3 from '../../images/img/work3.png'
import work4 from '../../images/img/work4.png'
import { activePageContext } from '../../contexts/ActivePageContext'
import { WORK } from '../../helpers/variables'

export default function WorkPage() {

  const {setActivePage} = useContext(activePageContext)

  useEffect(() => {
    setActivePage(WORK)
  }, [])

  return (
    <section className={styles.work}>
      <div className={styles.work__container}>
        <h1 className={styles.work__title}>Work</h1>
        <p className={styles.work__descr}>My latest web design projects and see how we can help bring your ideas to life.</p>
        <div className={styles.work__cardsGrid}>
          <Link to='/workIdPage' className={styles.work__card}>
            <span className={styles.work__cardCircle}></span>
            <img className={styles.work__cardImg} src={work1} alt="laptop image" />
            <div className={styles.work__cardDescrBlock}>
              <span>Space</span>
              <span>Webdesign</span>
            </div>
          </Link>
          <Link to='/workIdPage' className={styles.work__card}>
            <span className={styles.work__cardCircle}></span>
            <img className={styles.work__cardImg} src={work2} alt="phone image" />
            <div className={styles.work__cardDescrBlock}>
              <span>Nova</span>
              <span>Webdesign</span>
            </div>
          </Link>
          <Link to='/workIdPage' className={styles.work__card}>
            <span className={styles.work__cardCircle}></span>
            <img className={styles.work__cardImg} src={work3} alt="phone image" />
            <div className={styles.work__cardDescrBlock}>
              <span>Sonic</span>
              <span>SEO & CONTENT</span>
            </div>
          </Link>
          <Link to='/workIdPage' className={styles.work__card}>
            <span className={styles.work__cardCircle}></span>
            <img className={styles.work__cardImg} src={work4} alt="laptop image" />
            <div className={styles.work__cardDescrBlock}>
              <span>Solar</span>
              <span>DEVELOPMENT</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
