import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/Skill.module.css"



export default function Skill(props) {
    const languages = []
    props.languages.forEach(lang => {
        languages.push(<div className={styles.lang}>{lang}</div>)
    })

    return (
        <div className={styles.container} style={{backgroundImage: `url(${props.img})`}}>
            <div className={styles.gradient}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.languages}>{languages}</div>
            </div>
        </div>
    )
}