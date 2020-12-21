import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "./Button"
import styles from "../styles/CV.module.css"



export default function CV(props) {
    return (
        <div className={styles.container}>
            
            <div className={styles.containerBoot}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.buttons}> 
                    <a href={props.italianLink}><Button className={styles.button}>Italian CV</Button></a>
                    <a href={props.englishLink}><Button className={styles.button}>English CV</Button></a>
                </div>
            </div>
            
        </div>
    )
}