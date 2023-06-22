import React from 'react'
import styles from './intech.module.css'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar />

        <div className={styles.main}>
            <div className={styles.section1}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                        <h1 className={styles.heading1}>inTech '23</h1>
                    </div>
                    <div className={styles.para}>
                        <p>Welcome to inTech '23, the <span className={styles.greencolor}>fifth edition</span> of our annual intra-school, tech fest.
Running from <span className={styles.greencolor}>May 28th to June 16th</span>, inTech '23 brings more than 20 events to showcase your skills and <span className={styles.greencolor}>get inducted</span> into the club.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.register}>Register</button>
                        <button className={styles.register}>Discord</button>
                    </div>
                </div>
                <div>
                    <img src="https://www.techsyndicate.us/assets/images/tg.svg" alt="img" className={styles.image} />
                </div>
            </div>
            <hr className={styles.idk} />
            <div className={styles.regbar}>
                <div className={styles.dsc}>
                    <h1 className={styles.h1Dsc}>Join our Discord server</h1>
                </div>
                <div className={styles.discordChat}>
                    <iframe src="https://discord.com/widget?id=1110547392249475102&theme=dark" width={350} title='Discord' height={400} allowTransparency="true" frameBorder={0} sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts' className={styles.discordPanel} />
                    <h1 className={styles.hang}>Hangout with the <span className={styles.greencolor}>community</span></h1>
                    <p className={styles.pHang}>Keep up to date with the event announcements and much more through the discord server.</p>
                    <button className={styles.dscButton}>
                        <img src='https://www.svgrepo.com/show/353655/discord-icon.svg' className={styles.imgBtn} />
                        Server Invite
                    </button>
                </div>
            </div>
            <hr className={styles.idk} />
        </div>
    </div>
  )
}
