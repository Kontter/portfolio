import React from 'react'
import styles from './ButtonArrow.module.scss'
import { ReactComponent  as DownArrowIcon } from "../../../images/icons/arrow-down-light.svg";
import { ReactComponent  as ArrowUpRightIcon } from "../../../images/icons/arrow-up-right.svg";
import { ReactComponent  as ArrowUpIcon } from "../../../images/icons/arrow-up-light.svg";


export default function ButtonScroll({onClick, style, children, rightArrowUp, ArrowUp}) {
  return (
    <button style={style} onClick={onClick} className={styles.buttonArrow}>
      {rightArrowUp 
        ? 
          <span style={{width: 32, height: 32}}><ArrowUpRightIcon/></span>
        :
          ArrowUp 
            ? <span><ArrowUpIcon/></span>
            : <span><DownArrowIcon/></span>

      }
      {children}
    </button>
  )
}