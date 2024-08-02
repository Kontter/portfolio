import React, { useContext, useEffect, useRef } from 'react'
import styles from './AboutPage.module.scss'
import { ReactComponent  as UpRightArrowIcon } from "../../images/icons/arrow-up-right.svg";
import { ReactComponent  as InstagramLogo } from "../../images/icons/instagram-logo-light.svg";
import { ReactComponent  as TwitterLogo } from "../../images/icons/twitter-logo-light.svg";
import { ReactComponent  as FacebookLogo } from "../../images/icons/facebook-logo-light.svg";
import { ReactComponent  as BehanceLogo } from "../../images/icons/behance-logo-light.svg";
import { ReactComponent  as DribbbleLogo } from "../../images/icons/dribbble-logo-light.svg";
import { ReactComponent  as PinterestLogo } from "../../images/icons/pinterest-logo-light.svg";
import PersonImg from '../../images/img/mainPerson2.png'
import ButtonArrow from '../../components/UI/ButtonArrow/ButtonArrow'
import { activePageContext } from '../../contexts/ActivePageContext';
import { ABOUT } from '../../helpers/variables';


export default function AboutPage() {

  const ref = useRef()
  const {setActivePage} = useContext(activePageContext)

  useEffect(() => {
    setActivePage(ABOUT)
  }, [])

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__greeting}>
          <h1 className={styles.about__greetingTitle}>Arik <span>Andersson</span></h1>
          <p className={styles.about__greetingDescr}>Delivering Premium Web Design and Development Services to Boost Your Online Presence.</p>
          <ButtonArrow onClick={e => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})}>About Me</ButtonArrow>
        </div>
        <div className={styles.about__bottomBlock}>
          <div ref={ref} className={styles.about__personInfo}>
            <span className={styles.about__personInfoPrevTitle}>Arik Andersson</span>
            <h2 className={styles.about__personInfoTitle}>Your Partner in Bringing Your Web Design Vision to Life</h2>
            <p className={styles.about__personDescr1}>As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.</p>
            <p className={styles.about__personDescr2}>My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I'm developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients' expectations.</p>
            <img className={styles.about__personInfoImg} src={PersonImg} alt="Arik Andersson photo" />
          </div>
          <ul className={styles.about__linkList}>
            <li className={styles.about__linkListItem}><a href="#" className={styles.about__link}><InstagramLogo className={styles.about__socialLogo}/>Instagram<UpRightArrowIcon className={styles.about__rightArrow}/></a></li>
            <li className={styles.about__linkListItem}><a href="#" className={styles.about__link}><TwitterLogo className={styles.about__socialLogo}/>Twitter<UpRightArrowIcon className={styles.about__rightArrow}/></a></li>
            <li className={styles.about__linkListItem}><a href="#" className={styles.about__link}><FacebookLogo className={styles.about__socialLogo}/>Facebook<UpRightArrowIcon className={styles.about__rightArrow}/></a></li>
            <li className={styles.about__linkListItem}><a href="#" className={styles.about__link}><BehanceLogo className={styles.about__socialLogo}/>Behance<UpRightArrowIcon className={styles.about__rightArrow}/></a></li>
            <li className={styles.about__linkListItem}><a href="#" className={styles.about__link}><DribbbleLogo className={styles.about__socialLogo}/>Dribbble<UpRightArrowIcon className={styles.about__rightArrow}/></a></li>
            <li className={styles.about__linkListItem}><a href="#" className={styles.about__link}><PinterestLogo className={styles.about__socialLogo}/>Pinterest<UpRightArrowIcon className={styles.about__rightArrow}/></a></li>
          </ul>
          <div className={styles.about__awards}>
            <span className={styles.about__awardsTitle}>Awards</span>
            <div className={styles.about__award}>
              <p className={styles.about__awardTtile}>Awwwards SOTD</p>
              <span className={styles.about__awardDate}>2023</span>
            </div>
            <div className={styles.about__award}>
              <p className={styles.about__awardTtile}>CSSDA SOTD</p>
              <span className={styles.about__awardDate}>2023</span>
            </div>
            <div className={styles.about__award}>
              <p className={styles.about__awardTtile}>Awwwards Website of the Month</p>
              <span className={styles.about__awardDate}>2023</span>
            </div>
            <div className={styles.about__award}>
              <p className={styles.about__awardTtile}>CSSDA SOTD</p>
              <span className={styles.about__awardDate}>2022</span>
            </div>
            <div className={styles.about__award}>
              <p className={styles.about__awardTtile}>Awwwards SOTD</p>
              <span className={styles.about__awardDate}>2022</span>
            </div>
            <div className={styles.about__award}>
              <p className={styles.about__awardTtile}>Awwwards Website of the Year</p>
              <span className={styles.about__awardDate}>2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
