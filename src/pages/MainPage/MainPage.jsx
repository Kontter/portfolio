import React from 'react'
import {Link} from "react-router-dom"
import styles from './MainPage.module.scss'
import ButtonArrow from '../../components/UI/ButtonArrow/ButtonArrow'
import sponsor1 from '../../images/icons/sponsor1.svg'
import sponsor2 from '../../images/icons/sponsor2.svg'
import sponsor3 from '../../images/icons/sponsor3.svg'
import sponsor4 from '../../images/icons/sponsor4.svg'
import sponsor5 from '../../images/icons/sponsor5.svg'
import sponsor6 from '../../images/icons/sponsor6.svg'
import client1 from '../../images/img/client1.png'
import client2 from '../../images/img/client2.png'
import client3 from '../../images/img/client3.png'
import client4 from '../../images/img/client4.png'
import client5 from '../../images/img/client5.png'
import client6 from '../../images/img/client6.png'
import { ReactComponent  as TwitterLogo } from "../../images/icons/twitter-logo-light.svg";
import { ReactComponent  as InstagramLogo } from "../../images/icons/instagram-logo-light.svg";
import { ReactComponent  as DribbbleLogo } from "../../images/icons/dribbble-logo-light.svg";
import { ReactComponent  as BehanceLogo } from "../../images/icons/behance-logo-light.svg";


export default function MainPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <h1 className={styles.hero__title}>
            Web Designer <span>& Developer</span>
          </h1>
          <p className={styles.hero__descr}>
            Premium web design, development, and SEO services to help your business stand out.
          </p>  
        </div>
      </section>

      <section  className={styles.sponsors}>
        <div className={styles.sponsors__container}>
          <img src={sponsor1} alt="sponsor" />
          <img src={sponsor2} alt="sponsor" />
          <img src={sponsor3} alt="sponsor" />
          <img src={sponsor4} alt="sponsor" />
          <img src={sponsor5} alt="sponsor" />
          <img src={sponsor6} alt="sponsor" />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.services__container}>
          <div className={styles.services__card}>
            <span className={styles.services__prevTitle}>01</span>
            <h4 className={styles.services__title}>
              Web design
            </h4>
            <p className={styles.services__descr}>
              Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
            </p>
            <ButtonArrow style={{gap: 12, width: 'fit-content', marginTop: 'auto'}} rightArrowUp>About Webdesign</ButtonArrow>
          </div>
          <div className={styles.services__card}>
            <span className={styles.services__prevTitle}>02</span>
            <h4 className={styles.services__title}>
              Development
            </h4>
            <p className={styles.services__descr}>
              Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.
            </p>
            <ButtonArrow style={{gap: 12, width: 'fit-content', marginTop: 'auto'}} rightArrowUp>About Webflow</ButtonArrow>
          </div>
          <div className={styles.services__card}>
            <span className={styles.services__prevTitle}>03</span>
            <h4 className={styles.services__title}>
              Content & Seo
            </h4>
            <p className={styles.services__descr}>
              Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.
            </p>
            <ButtonArrow style={{gap: 12, width: 'fit-content', marginTop: 'auto'}} rightArrowUp>About SEO</ButtonArrow>
          </div>
        </div>
      </section>
  
      <section className={styles.work}>
        <div className={styles.container}>
          <div className={styles.work__top}>
            <h3 className={styles.work__title}>Selected <span>Work</span></h3>
            <ButtonArrow style={{gap: 12, width: 'fit-content', marginTop: 'auto'}} rightArrowUp>See all</ButtonArrow>
          </div>
          <div className={styles.work__cards}>
              <Link to='/workIdPage' className={styles.work__card}>
                <span className={styles.work__cardCircle}></span>
                <div className={styles.work__cardContent}>
                  <span>Space</span>
                  <span>Webdesign</span>
                </div>
              </Link>
              <Link to='/workIdPage' className={styles.work__card}>
                <span className={styles.work__cardCircle}></span>
                <div className={styles.work__cardContent}>
                  <span>Nova</span>
                  <span>Webdesign</span>
                </div>
              </Link>
              <Link to='/workIdPage' className={styles.work__card}>
                <span className={styles.work__cardCircle}></span>
                <div className={styles.work__cardContent}>
                  <span>Sonic</span>
                  <span>SEO & Content</span>
                </div>
              </Link>
              <Link to='/workIdPage' className={styles.work__card}>
                <span className={styles.work__cardCircle}></span>
                <div className={styles.work__cardContent}>
                  <span>Solar</span>
                  <span>Development</span>
                </div>
              </Link>
            </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <span className={styles.process__prevTitle}>THe PRocess</span>
          <h2 className={styles.process__title}>Your Website <span>in 5 steps</span></h2>
          <p className={styles.process__titleDescr}>Our process ensures that we create a website tailored to your business needs.</p>
          <div className={styles.process__grid}>
            <div>
              <div className={styles.process__card} style={{ margin: '543px 0 319px'}}>
                <div className={styles.process__cardTime}>1 Week</div>
                <span className={styles.process__cardPrevTitle}>lorem ipsum</span>
                <h4 className={styles.process__cardTitle}>Concept & STrategy</h4>
                <p className={styles.process__cardDescr}>Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.</p>
                <ul className={styles.process__cardList}>
                  <li className={styles.process__cardListItem}><span></span><span>UX Design</span></li>
                  <li className={styles.process__cardListItem}><span></span><span>Wireframes</span></li>
                  <li className={styles.process__cardListItem}><span></span><span>Interactive Prototype</span></li>
                </ul>
              </div>
              <div className={styles.process__card}>
                <div className={styles.process__cardTime}>2 Weeks</div>
                <span className={styles.process__cardPrevTitle}>More Magic</span>
                <h4 className={styles.process__cardTitle}>Development</h4>
                <p className={styles.process__cardDescr}>In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.</p>
                <ul className={styles.process__cardList}>
                  <li className={styles.process__cardListItem}><span></span><span>Custom framer website</span></li>
                  <li className={styles.process__cardListItem}><span></span><span>Modular web design systems</span></li>
                  <li className={styles.process__cardListItem}><span></span><span>CMS integration</span></li>
                </ul>
              </div>
            </div>
            <div className={styles.process__divider}>
              <div className={styles.process__circle}></div>
              <div className={styles.process__line}></div>
              <div className={styles.process__circle}>01</div>
              <div className={styles.process__line}></div>
              <div className={styles.process__circle}>02</div>
              <div className={styles.process__line}></div>
              <div className={styles.process__circle}>03</div>
              <div className={styles.process__line}></div>
              <div className={styles.process__circle}>04</div>
              <div className={styles.process__line}></div>
              <div className={styles.process__circle}>05</div>
            </div>
            <div>
              <div className={styles.process__card} style={{margin: '158px 0 364px'}}>
                  <div className={styles.process__cardTime}>2 Hours</div>
                  <span className={styles.process__cardPrevTitle}>Do we Match?</span>
                  <h4 className={styles.process__cardTitle}>Discovery Call</h4>
                  <p className={styles.process__cardDescr}>Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?</p>
                  <ul className={styles.process__cardList}>
                    <li className={styles.process__cardListItem}><span></span><span>We get to know each other better</span></li>
                    <li className={styles.process__cardListItem}><span></span><span>Determine how I can best assist you</span></li>
                    <li className={styles.process__cardListItem}><span></span><span>Understand the goals you have for your website</span></li>
                  </ul>
                </div>
              <div className={styles.process__card} style={{marginBottom: '335px'}}>
                  <div className={styles.process__cardTime}>1 week</div>
                  <span className={styles.process__cardPrevTitle}>SOme MAgic</span>
                  <h4 className={styles.process__cardTitle}>web Design</h4>
                  <p className={styles.process__cardDescr}>Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.</p>
                  <ul className={styles.process__cardList}>
                    <li className={styles.process__cardListItem}><span></span><span>High-end web design tailored to your brand</span></li>
                    <li className={styles.process__cardListItem}><span></span><span>Interactive prototype of the design</span></li>
                  </ul>
                </div>
              <div className={styles.process__card}>
                  <div className={styles.process__cardTime}>2 hours</div>
                  <span className={styles.process__cardPrevTitle}>ready to go</span>
                  <h4 className={styles.process__cardTitle}>WEbsite onboarding</h4>
                  <p className={styles.process__cardDescr}>In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.</p>
                  <ul className={styles.process__cardList}>
                    <li className={styles.process__cardListItem}><span></span><span>Personal workshop</span></li>
                    <li className={styles.process__cardListItem}><span></span><span>Personalized video tutorials</span></li>
                    <li className={styles.process__cardListItem}><span></span><span>Edit text and images directly on your website</span></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.review}>
        <div className={styles.container}>
          <h2 className={styles.review__title}>What my <span>clients say</span></h2>
          <p className={styles.review__descr}>See what my clients have to say about working with me and the results I helped them achieve.</p>
          <div className={styles.review__cards}>
            <div className={styles.review__card}>  
              <img className={styles.review__img} src={sponsor3} alt="logo" />
              <h4 className={styles.review__cardTitle}>Amazing Results with Arik’s Premium Web Design Services.</h4>
              <p className={styles.review__cardDescr}>Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.</p>
              <div className={styles.review__person}>
                <div className={styles.review__personImg} style={{backgroundImage: `url(${client1})`}}></div>
                <div>
                  <span className={styles.review__perconName}>John Smith</span>
                  <span className={styles.review__perconCompany}>ABC Company</span>
                </div>
              </div>
            </div>
            <div className={styles.review__card}>  
              <img className={styles.review__img} src={sponsor6} alt="logo" />
              <h4 className={styles.review__cardTitle}>Expert Webflow and SEO Services: Excellent Work, Great Results.</h4>
              <p className={styles.review__cardDescr}>Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.</p>
              <div className={styles.review__person}>
                <div className={styles.review__personImg} style={{backgroundImage: `url(${client2})`}}></div>
                <div>
                  <span className={styles.review__perconName}>David Kim</span>
                  <span className={styles.review__perconCompany}>Design Inc.</span>
                </div>
              </div>
            </div>
            <div className={styles.review__card}>  
              <img className={styles.review__img} src={sponsor2} alt="logo" />
              <h4 className={styles.review__cardTitle}>Professional, Collaborative Web Design Experience with Arik.</h4>
              <p className={styles.review__cardDescr}>I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.</p>
              <div className={styles.review__person}>
                <div className={styles.review__personImg} style={{backgroundImage: `url(${client3})`}}></div>
                <div>
                  <span className={styles.review__perconName}>Karen Lee</span>
                  <span className={styles.review__perconCompany}>Redwood Technologies</span>
                </div>
              </div>
            </div>
            <div className={styles.review__card}>  
              <img className={styles.review__img} src={sponsor5} alt="logo" />
              <h4 className={styles.review__cardTitle}>Expertise in Web Design: Second to None with Arik.</h4>
              <p className={styles.review__cardDescr}>Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.</p>
              <div className={styles.review__person}>
                <div className={styles.review__personImg} style={{backgroundImage: `url(${client4})`}}></div>
                <div>
                  <span className={styles.review__perconName}>Andrew Thompson</span>
                  <span className={styles.review__perconCompany}>Silverstone Corporation</span>
                </div>
              </div>
            </div>
            <div className={styles.review__card}>  
              <img className={styles.review__img} src={sponsor4} alt="logo" />
              <h4 className={styles.review__cardTitle}>Web Design and Content Solutions: Stand Out from the Crowd.</h4>
              <p className={styles.review__cardDescr}>Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.</p>
              <div className={styles.review__person}>
                <div className={styles.review__personImg} style={{backgroundImage: `url(${client5})`}}></div>
                <div>
                  <span className={styles.review__perconName}>Emily Davis</span>
                  <span className={styles.review__perconCompany}>Greenway Industries</span>
                </div>
              </div>
            </div>
            <div className={styles.review__card}>  
              <img className={styles.review__img} src={sponsor1} alt="logo" />
              <h4 className={styles.review__cardTitle}>High-Quality Web Design: Exceptional Attention to Detail with Arik.</h4>
              <p className={styles.review__cardDescr}>Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.</p>
              <div className={styles.review__person}>
                <div className={styles.review__personImg} style={{backgroundImage: `url(${client6})`}}></div>
                <div>
                  <span className={styles.review__perconName}>Ryan Chen</span>
                  <span className={styles.review__perconCompany}>Golden Gate Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.greeting}>
        <div className={styles.greeting__nameBlock}>
          <span className={styles.greeting__personName}>Arik <span>Andersson</span></span>
          <span className={styles.greeting__personName}>Arik <span>Andersson</span></span>
        </div>
        <div className={styles.greeting__container}>
          <h4 className={styles.greeting__title}>A website that leaves <span>a lasting impression!</span></h4>
          <div className={styles.greeting__descrBlock}>
            <p className={styles.greeting__descr}>Hi, I'm Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!</p>
            <ul className={styles.greeting__list}>
              <li><a href="#" className={styles.greeting__listLink}><TwitterLogo/></a></li>
              <li><a href="#" className={styles.greeting__listLink}><InstagramLogo/></a></li>
              <li><a href="#" className={styles.greeting__listLink}><DribbbleLogo/></a></li>
              <li><a href="#" className={styles.greeting__listLink}><BehanceLogo/></a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
