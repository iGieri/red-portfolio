import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "./Button"
import styles from "../styles/MyWork.module.css"



export default function MyWork(props) {
    return (
        <div className={styles.container}>
            <div className>{props.title}</div>
        </div>
    )
}