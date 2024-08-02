import React, { useContext, useEffect, useRef } from 'react'
import styles from './WorkIdPage.module.scss'
import ButtonScroll from '../../components/UI/ButtonArrow/ButtonArrow'
import work1 from '../../images/img/work1.png'
import { activePageContext } from '../../contexts/ActivePageContext'

export default function WorkIdPage() {

  const ref = useRef()
  const {setActivePage} = useContext(activePageContext)
  
  useEffect(() => {
    window.scrollTo({top: 0})
    setActivePage('')
  }, [])

  return (
    <section className={styles.workSingle}>
      <div className={styles.workSingle__container}>
        <div className={styles.workSingle__greeting}>
          <h1 className={styles.workSingle__greetingTitle}>Space</h1>
          <p className={styles.workSingle__greetingDescr}>Modern and visually appealing website that reflected the client's brand.</p>
          <div className={styles.workSingle__greetingCardsGrid}>
            <div className={styles.workSingle__greetingCard}>
              <span>Client</span>
              <span>Pawel Gola</span>
            </div>
            <div className={styles.workSingle__greetingCard}>
              <span>Timeline</span>
              <span>3 Weeks</span>
            </div>
            <div className={styles.workSingle__greetingCard}>
              <span>Services</span>
              <span>Template</span>
            </div>
            <div className={styles.workSingle__greetingCard}>
              <span>Website</span>
              <span>gola.io</span>
            </div>
          </div>
          <ButtonScroll 
            onClick={e => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})}
            style={{margin: '0 auto 0'}}
            >More Details
          </ButtonScroll>
        </div>
        <img className={styles.workSingle__img} src={work1} alt="laptop image" />
        <div ref={ref} className={styles.workSingle__aboutBlock}>
          <div className={styles.workSingle__aboutLeft}>
            <span>About</span>
            <h2>Concept, Design, and Development. All-in-one.</h2>
          </div>
          <div className={styles.workSingle__aboutRight}>
            <div className={styles.workSingle__aboutRightCard}>
              <h3>Challenge</h3>
              <p>Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.</p>
            </div>
            <div className={styles.workSingle__aboutRightCard}>
              <h3>Goal</h3>
              <p>Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.</p>
            </div>
            <div className={styles.workSingle__aboutRightCard}>
              <h3>Result</h3>
              <p>Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
