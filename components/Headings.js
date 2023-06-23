import React from 'react'
import styles from './StyleComponents/headings.module.css';

export default function Headings(props) {
  return (
    <div className={styles.headings}>
              <h1 className={styles.heading} style={props.state == "members" ? {color: "#16e16e"} : {color: "white"}}><a href="/team" style={{textDecoration: "none", cursor: "pointer"}}>Members</a></h1>
              <h1 className={styles.heading} style={props.state == "alumni" ? {color: "#16e16e"} : {color: "white"}}><a href="/team/alumni" style={{textDecoration: "none", cursor: "pointer"}}>Alumni</a></h1>
          </div>
  )
}
