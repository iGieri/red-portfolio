import React from "react"
import Button from "./Button"
import styles from "../styles/Project.module.css"



export default function Project(props) {
    return (
        <div className={styles.container} style={{backgroundImage: `url(${"http://localhost:8000" + props.image.url})`}}>
            <div className={styles.gradient}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.date}>{props.date}</div>
                <div className={styles.buttonContainer}><Button className={styles.button} href={props.link}>Visit Website ></Button></div>
            </div>
        </div>
    )
}