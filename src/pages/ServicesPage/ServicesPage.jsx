import React, { useContext, useEffect, useRef } from 'react'
import laptop from '../../images/img/laptop.png'
import styles from './ServicesPage.module.scss'
import work1 from '../../images/img/work1.png'
import work4 from '../../images/img/work4.png'
import work3 from '../../images/img/work3.png'
import ButtonArrow from '../../components/UI/ButtonArrow/ButtonArrow';
import { activePageContext } from '../../contexts/ActivePageContext'
import { SERVICES } from '../../helpers/variables'

export default function ServicesPage() {

  const {setActivePage} = useContext(activePageContext)
  const ref = useRef()

  useEffect(() => {
    setActivePage(SERVICES)
  }, [])

  return (
    <section className={styles.services}>
      <div className={styles.services__topContainer}>
        <h1 className={styles.services__title}>Web Design <br /><span>& Framer</span></h1>
        <p className={styles.services__descr}>Premium web design, development, and SEO services to help your business stand out.</p>
        <ButtonArrow style={{margin: '0 auto 64px'}} onClick={e => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})}>My Services</ButtonArrow>
        <img className={styles.services__mainImg} src={laptop} alt="laptop image" />
      </div>
      <div className={styles.services__bottomContainer}>
        <ul className={styles.services__infolist}>
          <li className={styles.services__infolistItem}><span>Clients</span><span>150+</span></li>
          <li className={styles.services__infolistItem}><span>Projects</span><span>300+</span></li>
          <li className={styles.services__infolistItem}><span>Happy Clients Clientsnts</span><span>100%</span></li>
          <li className={styles.services__infolistItem}><span>Followers</span><span>100k</span></li>
        </ul>
        <div ref={ref} className={styles.services__cardBlock}>
          <div className={styles.services__card}>
            <span className={styles.services__cardCategory}>Webdesign</span>
            <h2 className={styles.services__cardTitle}>Transforming Your Ideas into Reality</h2>
            <img className={styles.services__cardImg} src={work1} alt="laptop image" />
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>Concept</h3>
              <p className={styles.services__cardInfoDescr}>I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>UX / Ui Design</h3>
              <p className={styles.services__cardInfoDescr}>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>Prototype</h3>
              <p className={styles.services__cardInfoDescr}>With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.</p>
            </div>
          </div>
          <div className={styles.services__card}>
            <span className={styles.services__cardCategory}>Development</span>
            <h2 className={styles.services__cardTitle}>Developing High-Performance Websites and Web Applications</h2>
            <img className={styles.services__cardImg} src={work4} alt="laptop image" />
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>Framer </h3>
              <p className={styles.services__cardInfoDescr}>I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.</p>
            </div>
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>CMS Integration</h3>
              <p className={styles.services__cardInfoDescr}>I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.</p>
            </div>
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>WEb Design System</h3>
              <p className={styles.services__cardInfoDescr}>I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.</p>
            </div>
          </div>
          <div className={styles.services__card}>
            <span className={styles.services__cardCategory}>SEO & content</span>
            <h2 className={styles.services__cardTitle}>Boosting Your Website's Organic Search Traffic</h2>
            <img className={styles.services__cardImg} src={work3} alt="laptop image" />
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>Research</h3>
              <p className={styles.services__cardInfoDescr}>I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking.</p>
            </div>
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>SEo Ranking</h3>
              <p className={styles.services__cardInfoDescr}>My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.</p>
            </div>
            <div className={styles.services__cardInfo}>
              <h3 className={styles.services__cardInfoTitle}>SEO Support</h3>
              <p className={styles.services__cardInfoDescr}>With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
