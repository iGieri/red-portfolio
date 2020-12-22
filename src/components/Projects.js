import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "./Button"
import Project from "./Project"
import styles from "../styles/Projects.module.css"
import Link from "next/link"




export default function Projects(props) {
    console.log(props)
    const projects = []

    props.projects.forEach(e => {
        projects.push(<Project {...e} />)
    })

    return (
        <div className={styles.container}>
            <div className={styles.projects}>{projects}</div>
        </div>
    )
}