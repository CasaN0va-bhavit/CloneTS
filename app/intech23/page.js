import React from 'react'
import styles from './intech.module.css'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar />

        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.heading}>
                        <h1 className={styles.heading1}>inTech '23</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
