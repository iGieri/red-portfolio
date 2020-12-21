import React from "react"
import { Container } from "react-bootstrap"
import styles from "../styles/FirstSection.module.css"



export default function FirstSection(props) {

    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.img_container}><img className={styles.img} src={props.image.url} /></div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
            </Container>
        </div>
    )
}