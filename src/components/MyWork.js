import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "./Button"
import Project from "./Project"
import styles from "../styles/MyWork.module.css"
import Link from "next/link"




export default function MyWork(props) {
    const projects = []

    props.projects.forEach(e => {
        projects.push(<Project {...e} />)
    })

    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.projects}>{projects}</div>
            <div className={styles.buttonContainer}><Link href='/projects'><Button className={styles.button}>More Works ></Button></Link></div>
        </div>
    )
}