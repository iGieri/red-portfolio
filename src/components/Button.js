import React from "react"
import styles from "../styles/Button.module.css"

export default function Button(props) {
    return (
            <a href={props.href}>
                <div className={styles.container + ' ' + props.className} onClick={props.onClick}>
                    {props.children}            
                </div>
            </a>
    )
}