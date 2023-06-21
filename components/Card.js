import React from 'react'
import styles from './StyleComponents/card.module.css'

export default function Card(props) {
  return (
    <div className={styles.cardStyle}>
        <div className={styles.header}>
            <img src={props.sourceImg} alt={props.altTitle} className={styles.img} />
            <h2 className={styles.title}>{props.title}</h2>
        </div>
        <p className={styles.cardP}>{props.cardP}</p>
        <a href={props.aHref} target='_blank' className={styles.a}>Know More</a>
    </div>
  )
}
