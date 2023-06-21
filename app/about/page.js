import styles from "./about.module.css"
import React from 'react'
import Navbar from '@/components/Navbar'

export default function about() {
  return (
    <div>
        <div>
            <Navbar />
        </div>

        <div className={styles.aboutDiv}>
            <div className={styles.content}>
                <h1 className={styles.text}>KNOW US BETTER</h1>
                <p className={styles.textp}>Established in 2016, Tech Syndicate is the
technology club of Amity International School,
Sector-46, Gurgaon. The club works constantly to
encourage students to learn new technologies and
keep up with the rapidly progressing sector of
computer science.</p>
            </div>
            <div className={styles.aboutImg}>
                <img src="https://www.techsyndicate.us/assets/images/resources/about.svg" className={styles.img}/>
            </div>
        </div>
    </div>
  )
}
