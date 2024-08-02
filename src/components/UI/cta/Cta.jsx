import React from 'react'
import Button from '../button/Button'
import styles from './Cta.module.scss'
import { Link } from 'react-router-dom'

export default function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__line}>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
        <span>Let’s talk</span>
        <span>+++</span>
      </div>
      <div className={styles.cta__container}>
        <div className={styles.cta__info}>
          <span className={styles.cta__prevTitle}>Project in mind?</span>
          <h2 className={styles.cta__title}>Let’s make your <span>Website shine</span></h2>
          <p className={styles.cta__descr}>Premium web design, webflow, and SEO services to help your business stand out.</p>
          <Link to='/contact' style={{textDecoration: 'none'}}>
            <Button arrow>Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
