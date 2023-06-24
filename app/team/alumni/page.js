import React from 'react'
import styles from "./alumni.module.css"
import otherStyles from "../team.module.css"
import Navbar from '@/components/Navbar'
import Headings from '@/components/Headings'
import TeamCard from '@/components/TeamCard'

export default function page() {
  return (
    <div>
        <Navbar />
        <Headings state="alumni" />

        <div className={otherStyles.main}>
            <div className={styles.grid}>
                <div className={otherStyles.search}>
                    <input className={otherStyles.searchInput} placeholder="Search" id="input" />
                </div>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>2022-2023</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Aayan Agarwal"
                        role="President"
                        imgsrc="https://avatars.githubusercontent.com/u/49789627?v=4"
                        student="Student at Purdue"
                    />
                    <TeamCard
                        key="2"
                        name="Yuvraaj Narula"
                        role="Secretary"
                        imgsrc="https://avatars.githubusercontent.com/u/49155095?v=4"
                        student="Outgoing Batch"
                    />
                    <TeamCard
                        key="3"
                        name="Nevis Kawatra"
                        role="Secretary"
                        imgsrc="https://media.discordapp.net/attachments/842383789216759868/1095681468623224903/IMG_20230412_012459.jpg?width=646&height=646"
                        student="Outgoing Batch"
                    />
                    <TeamCard
                        key="4"
                        name="Amish Mamtani"
                        role="Core Member"
                        imgsrc="https://media.discordapp.net/attachments/741244174736556076/974579902483415140/unknown.png"
                        student="Outgoing Batch"
                    />
                    <TeamCard
                        key="5"
                        name="Harsimrat Anand"
                        role="Member"
                        imgsrc="https://media.discordapp.net/attachments/792024933718294558/989404799139184720/IMG-20211002-WA0009_1_1.jpg?width=508&height=513"
                        student="Student at University of Waterloo"
                    />
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>2021-2022</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Oorjit Chowdhary"
                        role="President"
                        imgsrc="https://github.com/oorjitchowdhary.png"
                        student="Student at UW Seattle"
                    />
                    <TeamCard
                        key="2"
                        name="Mihir Aggarwal"
                        role="Vice President"
                        imgsrc="https://github.com/mihiraggarwal.png"
                        student="Student at Ashoka University"
                    />
                    <TeamCard
                        key="3"
                        name="Anshul Saha"
                        role="Secretary"
                        imgsrc="https://github.com/sheldor1510.png"
                        student="Student at UMass Amherst"
                    />
                    <TeamCard
                        key="4"
                        name="Jai Madhukar"
                        role="Joint Secretary"
                        imgsrc="https://github.com/jai-17.png"
                        student="Outgoing Batch"
                    />
                    <TeamCard
                        key="5"
                        name="Vaibhav Sharma"
                        role="Core Member"
                        imgsrc="https://github.com/gigabite-pro.png"
                        student="Student at UBC, Vancouver"
                    />
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>202-2021</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Laxya Pahuja"
                        role="President"
                        imgsrc="https://github.com/laxyapahuja.png"
                        student="Student at MIT, Manipal"
                    />
                    <TeamCard
                        key="2"
                        name="Ribhav Sharma"
                        role="Secretary"
                        imgsrc="https://github.com/ribhavsharma.png"
                        student="Student at UBC"
                    />
                    <TeamCard
                        key="3"
                        name="Chiranjiv Singh Malhi"
                        role="Member"
                        imgsrc="https://github.com/chiranjivmalhi.png"
                        student="Student at Thapar University"
                    />
                    <TeamCard
                        key="4"
                        name="Devjyoti Ghosh"
                        role="Member"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/devjyotighosh.jpg?raw=true"
                        student="Student at Annapurna College"
                    />
                    <TeamCard
                        key="5"
                        name="Pranav Uppal"
                        role="Member"
                        imgsrc="https://github.com/upspal.png"
                        student="Student at SNUT"
                    />
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>2019-2020</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Anurag Parida"
                        role="President"
                        imgsrc="https://github.com/anuragparida.png"
                        student="Student at MUJ"
                    />
                    <TeamCard
                        key="2"
                        name="Sarthak Singhal"
                        role="Secretary"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/sarthaksinghal.png?raw=true"
                        student="Student at HKUST"
                    />
                    <TeamCard
                        key="3"
                        name="Ansh Deo Singh"
                        role="Member"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/anshdeosingh.jpg?raw=true"
                        student="Student"
                    />
                    <TeamCard
                        key="4"
                        name="Priyanshu Bhandari"
                        role="Member"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/priyanshubhandari.jpg?raw=true"
                        student="Student"
                    />
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>2018-2019</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Padam Chopra"
                        role="President"
                        imgsrc="https://github.com/padamchopra.png"
                        student="Student at Waterloo University"
                    />
                    <TeamCard
                        key="2"
                        name="Sarthak Singhal"
                        role="Secretary"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/aryamanagrawal.jpg?raw=true"
                        student="Student at UMass Amherst"
                    />
                    <TeamCard
                        key="3"
                        name="Ansh Deo Singh"
                        role="Member"
                        imgsrc="https://github.com/ArnabSagar.png"
                        student="Student at UGuelph"
                    />
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>2017-2018</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Ashwin Tewary"
                        role="President"
                        imgsrc="https://github.com/ashwintewary.png"
                        student="Student at USydney"
                    />
                    <TeamCard
                        key="2"
                        name="Gursimran Singh"
                        role="Secretary"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/gursimransingh.jpg?raw=true"
                        student="Student at GaTech"
                    />
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <br />
                <div className={styles.batch}>
                    <h1 className={styles.year}>2016-2017</h1>
                    <div className={otherStyles.grid} style={{marginLeft: "-1vh", "marginTop": "-1vh"}}>
                    <TeamCard
                        key="1"
                        name="Satwik Dwivedi"
                        role="President"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/satwikdwivedi.jpg?raw=true"
                        student="Student"
                    />
                    <TeamCard
                        key="2"
                        name="Mudit Sharma"
                        role="Member"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/muditsharma.jpg?raw=true"
                        student="SWE at Oracle"
                    />
                    <TeamCard
                        key="3"
                        name="Shubh Jaroria"
                        role="Member"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/shubhjaroria.jpg?raw=true"
                        student="Student"
                    />
                    <TeamCard
                        key="4"
                        name="Shivam Garg"
                        role="Member"
                        imgsrc="https://github.com/techsyndicate/website-21/blob/main/public/assets/images/alumni/shivamgarg.jpg?raw=true"
                        student="Student"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
