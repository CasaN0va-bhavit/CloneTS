import React from 'react'
import styles from "./team.module.css"
import Navbar from '@/components/Navbar'
import Headings from '@/components/Headings'
import TeamCard from '@/components/TeamCard'

export default function page() {
  return (
    <div>
        <Navbar />

        <div className={styles.main}>
          <Headings state="members" />
          <div className={styles.grid}>
            <div className={styles.search}>
              <input className={styles.searchInput} placeholder="Search" id="input" />
            </div>
            <br />
            <TeamCard
              key="1"
              name="Aayush Garg"
              role="President"
              imgsrc="https://github.com/gamer-1478.png"
            />
            <TeamCard
              key="2"
              name="Utkarsh Dugar"
              role="President"
              imgsrc="https://media.discordapp.net/attachments/939041732841062420/1013015727306973194/IMG-20220823-WA0032.jpg?width=770&height=513"
            />
            <TeamCard 
              key="3"
              name="Nishant Navani"
              role="Vice President"
              imgsrc="https://i.imgur.com/lR4TIm2.jpeg"
            />
            <TeamCard
              key="4"
              name="Pranjli Aggarwal"
              role="Director"
              imgsrc="https://cdn.discordapp.com/attachments/938649392670441502/989076469613461534/unknown.png"
            />
            <TeamCard
              key="5"
              name="Anirudh Chaturvedi"
              role="Secretary"
              imgsrc="https://media.discordapp.net/attachments/1010186766688460840/1118962809582129222/anirudh_chaturvedi.png?width=700&height=700"
            />
            <TeamCard
              key="6"
              name="Ansh Sakhuja"
              role="Secretary"
              imgsrc="https://cdn.discordapp.com/attachments/938649392670441502/989028936061161552/unknown.png"
            />
            <TeamCard
              key="7"
              name="Amogh Agrawal"
              role="Joint Secretary"
              imgsrc="https://media.discordapp.net/attachments/741244174736556076/974578914942910544/unknown.png"
            />
            <TeamCard
              key="8"
              name="Simhadri Mohith"
              role="Core"
              imgsrc="https://media.discordapp.net/attachments/741244174736556076/974579424332771348/unknown.png"
            />
            <TeamCard
              key="9"
              name="Khanak Aggarwal"
              role="Member"
              imgsrc="https://media.discordapp.net/attachments/741244174736556076/974578548167811072/unknown.png?width=500&height=513"
            />
            <TeamCard
              key="10"
              name="Chahat Arora"
              role="Member"
              imgsrc="https://media.discordapp.net/attachments/984702920463384666/1096086993169035414/2291FDE3-2B26-45AD-8FF5-1BD921E27DC7.png?width=336&height=336"
            />
            <TeamCard
              key="11"
              name="Yash Madaan"
              role="Member"
              imgsrc="https://media.discordapp.net/attachments/938649392670441502/989770270074109963/yash.jpg?width=560&height=513"
            />
            <TeamCard
              key="12"
              name="Jai Dugal"
              role="Member"
              imgsrc="https://cdn.discordapp.com/attachments/938649392670441502/989024591970193438/IMG-20220614-WA0000.jpg"
            />
            <TeamCard
              key="13"
              name="Suhani Gupta"
              role="Member"
              imgsrc="https://cdn.discordapp.com/attachments/938649392670441502/989032935174856755/unknown.png"
            />
            <TeamCard
              key="14"
              name="Guru Khanna"
              role="Member"
              imgsrc="https://media.discordapp.net/attachments/938649392670441502/989398336643682304/Photo.jpeg?width=717&height=513"
            />
            <TeamCard
              key="15"
              name="Prisha Bhatia"
              role="Member"
              imgsrc="https://media.discordapp.net/attachments/938513754788855858/994566591784177694/unknown.png"
            />
            <TeamCard
              key="16"
              name="Pakhi Bisht"
              role="President"
              imgsrc="https://media.discordapp.net/attachments/984702920463384666/1096089093399646340/IMG-20221204-WA0013.jpg?width=295&height=295"
            />
            <TeamCard
              key="17"
              name="Uday Modi"
              role="Member"
              imgsrc="https://cdn.discordapp.com/attachments/938649392670441502/989425718188462100/unknown.png"
            />
            <TeamCard
              key="18"
              name="Nishant Nayak"
              role="Member"
              imgsrc="https://media.discordapp.net/attachments/1099204898450571435/1102560708593463347/ss.png?width=463&height=463"
            />
          </div>
        </div>
    </div>
  )
}
