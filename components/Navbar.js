import React from 'react'
import styles from "./StyleComponents/nav.module.css"
import ListItem from './SmallComponents/ListItem'

export default function Navbar() {
  return (
    <div className={styles.nav}>
        <a className='no-underline cursor-pointer' href='/'>
            <div className={styles.bglogo}></div>
        </a>
        <ul className={styles.navUl}>
            <ListItem 
              aLink={styles.aLink}
              listItem={styles.listItem}
              pNavStyle={styles.pNavStyle}
              text="Learn"
              hrefA="/learn"
            />
            <ListItem 
              aLink={styles.aLink}
              listItem={styles.listItem}
              pNavStyle={styles.pNavStyle}
              text="About"
              hrefA="/about"
            />
            <ListItem 
              aLink={styles.aLink}
              listItem={styles.listItem}
              pNavStyle={styles.pNavStyle}
              text="Events"
              hrefA="/events"
            />
            <ListItem 
              aLink={styles.aLink}
              listItem={styles.listItem}
              pNavStyle={styles.pNavStyle}
              text="Team"
              hrefA="/team"
            />
            <ListItem 
              aLink={styles.aLink}
              listItem={styles.listItem}
              pNavStyle={styles.pNavStyle}
              text="Intech '23"
              hrefA="/intech23"
            />
        </ul>
    </div>
  )
}
