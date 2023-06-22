import React from 'react'
import styles2 from './CardStyles.module.css'
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
            <hr className={styles.idk} style={{marginTop: "20vh"}}/>
            <h1 className={styles.h1Events}>Events</h1>
            <div className={styles.cards}>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/appd.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>App Development</h1>
                    <p className={styles2.para}>Flutter Challenge</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(217, 204, 22, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/webd.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Web Development</h1>
                    <p className={styles2.para}>Website Creation</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(89, 50, 168, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/hardware.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Game Development</h1>
                    <p className={styles2.para}>Game Dev</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(50, 168, 80, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/cryptic.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Encryptid</h1>
                    <p className={styles2.para}>48 Hour long Cryptic Hunt</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(50, 56, 168, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/3d.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>3D Design</h1>
                    <p className={styles2.para}>3D Rendering Challenge</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(50, 56, 168, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/2d.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>2D Design</h1>
                    <p className={styles2.para}>2D Artwork Creation</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(109, 50, 168, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/2d.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>UI Design</h1>
                    <p className={styles2.para}>UI/UX</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(160, 50, 168, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/av.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>A/V Editing</h1>
                    <p className={styles2.para}>Making Motion graphics and product commercials</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(207, 103, 214, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/quiz.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Quiz</h1>
                    <p className={styles2.para}>Tech related questions</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(217, 22, 129, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/cross.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Crossword</h1>
                    <p className={styles2.para}>Tech puns</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(145, 22, 217, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/webd.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Gaming</h1>
                    <p className={styles2.para}>Competitive Gaming</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/photography.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Photography</h1>
                    <p className={styles2.para}>Creative imagery</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(145, 22, 217, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/hack.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Competitive Programming</h1>
                    <p className={styles2.para}>High stake Programming</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/av.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Audio Mixing</h1>
                    <p className={styles2.para}>Using Audacity to create beats</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(145, 22, 217, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/hardware.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Film Making</h1>
                    <p className={styles2.para}>Creating Short films</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/gdlr.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Group Discussion</h1>
                    <p className={styles2.para}>Conveying views through a firm stance</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/gdlr.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Group Discussion</h1>
                    <p className={styles2.para}>Conveying views through a firm stance</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(145, 22, 217, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/hardware.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Hardware</h1>
                    <p className={styles2.para}>Hardware</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/3d.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Cubing 2 by 2</h1>
                    <p className={styles2.para}>Solving the 2 X 2 cube in the shortest time</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(145, 22, 217, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/cross.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>Cubing 3 by 3</h1>
                    <p className={styles2.para}>Solving the 3 X 3 cube in the shortest time</p>
                </div>
                <div className={styles2.card} style={{backgroundColor: "rgba(3, 190, 252, 0.314)"}}>
                    <img src="https://www.techsyndicate.us/assets/images/resources/ctf.svg" className={styles2.image} />
                    <h1 className={styles2.heading}>ML/AI Challenge</h1>
                    <p className={styles2.para}>AI Challenge</p>
                </div>
            </div>

        </div>
    </div>
  )
}
