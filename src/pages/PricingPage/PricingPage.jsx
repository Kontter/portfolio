import React, { useContext, useEffect, useState } from 'react'
import styles from './PricingPage.module.scss'
import Button from '../../components/UI/button/Button'
import { activePageContext } from '../../contexts/ActivePageContext'
import { PRICING } from '../../helpers/variables'

export default function PricingPage() {

  const [answer1, setAnswer1] = useState(false)
  const [answer2, setAnswer2] = useState(false)
  const [answer3, setAnswer3] = useState(false)
  const [answer4, setAnswer4] = useState(false)

  const {setActivePage} = useContext(activePageContext)

  useEffect(() => {
    setActivePage(PRICING)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])
  

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__container}>
        <span className={styles.pricing__prevTitle}>Pricing</span>
        <h1 className={styles.pricing__title}>Experience the Power of <span>Premium Webdesign</span></h1>
        <p className={styles.pricing__descr}>Choose a package that suits your needs and budget. Transparent pricing with no hidden fees.</p>
        <div className={styles.pricing__cardsGrid}>
          <div className={styles.pricing__card}>
            <span className={styles.pricing__CardTitle}>Lite</span>
            <span className={styles.pricing__cardPrice}>$3900.00</span>
            <p className={styles.pricing__cardDescr}>Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups.</p>
            <ul className={styles.pricing__cardList}>
              <li className={styles.pricing__cardItem}>Concept</li>
              <li className={styles.pricing__cardItem}>Strategy</li>
              <li className={styles.pricing__cardItem}>Webdesign</li>
              <li className={styles.pricing__cardItem}>Prototype</li>
            </ul>
            <Button style={{marginTop: 'auto'}}>Get Started</Button>
          </div>
          <div className={styles.pricing__card}>
            <span  className={styles.pricing__cardStatus}>Popular</span>
            <span className={styles.pricing__CardTitle}>Premium</span>
            <span className={styles.pricing__cardPrice}>$6900.00</span>
            <p className={styles.pricing__cardDescr}>Comprehensive web design package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses.</p>
            <ul className={styles.pricing__cardList}>
              <li className={styles.pricing__cardItem}>Concept</li>
              <li className={styles.pricing__cardItem}>Strategy</li>
              <li className={styles.pricing__cardItem}>Webdesign</li>
              <li className={styles.pricing__cardItem}>Development</li>
            </ul>
            <Button style={{marginTop: 'auto'}}>Get Started</Button>
          </div>
          <div className={styles.pricing__card}>
            <span className={styles.pricing__CardTitle}>Gold</span>
            <span className={styles.pricing__cardPrice}>$9900.00</span>
            <p className={styles.pricing__cardDescr}>Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market.</p>
            <ul className={styles.pricing__cardList}>
              <li className={styles.pricing__cardItem}>Webdesign</li>
              <li className={styles.pricing__cardItem}>Development</li>
              <li className={styles.pricing__cardItem}>Content</li>
              <li className={styles.pricing__cardItem}>SEO</li>
            </ul>
            <Button style={{marginTop: 'auto'}}>Get Started</Button>
          </div>
        </div>
        <div className={styles.pricing__bottomBlock}>
          <div className={styles.pricing__bottomBlockLeft}>
            <span>FAQ</span>
            <span>Common </span>
            <br />
            <span>Questions</span>
          </div>
          <div className={styles.pricing__bottomBlockRight}>
            <div className={styles.pricing__bottomBlockSpoiler}>
              <button onClick={e => setAnswer1(prev => !prev)} className={styles.pricing__bottomBlockSpoilerQuestion}>
                <p>What is the typical turnaround time for a website project?</p>
                {answer1 
                  ?                 
                    <span>-</span> 
                  :
                    <span>+</span>
                }
              </button>
              {answer1 && <div  className={styles.pricing__bottomBlockSpoilerAnswer}>The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.</div>}
            </div>

            <div className={styles.pricing__bottomBlockSpoiler}>
              <button onClick={e => setAnswer2(prev => !prev)} className={styles.pricing__bottomBlockSpoilerQuestion}>
                <p>Can you help with website maintenance and updates after the project is completed?</p>
                {answer2 
                  ?                 
                    <span>-</span> 
                  :
                    <span>+</span>
                }
              </button>
              {answer2 && <div  className={styles.pricing__bottomBlockSpoilerAnswer}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim eligendi in aut dolor voluptatum? Eius voluptate magnam ipsa repudiandae, id non tempora repellendus placeat in corrupti nihil quis quia.</div>}
            </div>

            <div className={styles.pricing__bottomBlockSpoiler}>
              <button onClick={e => setAnswer3(prev => !prev)} className={styles.pricing__bottomBlockSpoilerQuestion}>
                <p>How do you ensure that my website will be optimized for search engines?</p>
                {answer3 
                  ?                 
                    <span>-</span> 
                  :
                    <span>+</span>
                }
              </button>
              {answer3 && <div  className={styles.pricing__bottomBlockSpoilerAnswer}>Deliver projects in a timely and efficient manner.</div>}
            </div>

            <div className={styles.pricing__bottomBlockSpoiler}>
              <button onClick={e => setAnswer4(prev => !prev)} className={styles.pricing__bottomBlockSpoilerQuestion}>
                <p>What is your process for website design and development?</p>
                {answer4 
                  ?                 
                    <span>-</span> 
                  :
                    <span>+</span>
                }
              </button>
              {answer4 && <div  className={styles.pricing__bottomBlockSpoilerAnswer}>The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish.</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
