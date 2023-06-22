import React from 'react'
import styles from "./events.module.css"
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div className={styles.parent}>
        <Navbar />

        <div className={styles.main}>
            <h1 className={styles.h1}>Events</h1>
            <div className={styles.dot1} />
            <div className={styles.dot2} />
            <div className={styles.dot3} />
            <div className={styles.dot4} />
            <div className={styles.dot5} />
            <div className={styles.dot6} />
            <div className={styles.line} />
            <div className={styles.event1}>
                <p className={styles.name1}>Training Grounds</p>
                <p className={styles.date1}>Apr 15 - May 6</p>
                <br />
                <a href="#" className={styles.button1}>
                    <button className={styles.but}>
                        Join
                    </button>
                </a>
            </div>
            <div className={styles.event2}>
                <p className={styles.name1}>Summer Horizon</p>
                <p className={styles.date1}>Coming Soon...</p>
            </div>
            <div className={styles.event3}>
                <p className={styles.name1}>Intech</p>
                <p className={styles.date1}>Coming Soon...</p>
            </div>
            <div className={styles.event4}>
                <p className={styles.name1}>Robotronics</p>
                <p className={styles.date1}>Coming Soon...</p>
            </div>

        </div> 
    </div>
  )
}
