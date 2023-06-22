import React from 'react'
import styles from "./CardStyles.module.css"

export default function Card(props) {
  return (
    <div className={styles.card} style={props.bgColor}>
        <img src={props.IMGSRC} className={styles.image} />
        <h1 className={styles.heading}>{props.heading}</h1>
        <p className={styles.para}>{props.para}</p>
    </div>
  )
}
