import React from 'react'
import styles from "./StyleComponents/teamcard.module.css"

export default function TeamCard(props) {
  return (
    <div className={styles.card}>
        <img src={props.imgsrc} className={styles.image} />
        <div className={styles.cred}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.role}>{props.role}</p>
        </div>
    </div>
  )
}
