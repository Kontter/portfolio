import React from 'react'
import styles from './Button.module.scss'
import { ReactComponent  as Arrow } from "../../../images/icons/arrow-up-right-dark.svg";


export default function Button({children, arrow, style}) {

  const rootClasses = [styles.button]

  if(arrow) {
    rootClasses.push(styles.arrow)
  }

  return (
    <button style={style} className={rootClasses.join(' ')}>
      {children}
      {arrow && <Arrow/>}
    </button>
  )
}
