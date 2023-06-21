import React from 'react'

export default function ListItem(props) {
  return (
    <a className={props.aLink} href={props.hrefA}>
        <li className={props.listItem}>
            <p className={props.pNavStyle}>
            {props.text}
            </p>
        </li>
    </a>
  )
}
