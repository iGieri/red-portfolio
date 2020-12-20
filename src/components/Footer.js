import React from "react"
import { Container } from "react-bootstrap"
import styles from "../styles/Footer.module.css"
import Button from "./Button"

function Social(props) {
    return (
        <a href={props.link}>
            <div className={styles.social}>
                <i className={styles.icon + " " + props.icon}></i>
            </div>
        </a> 
    )
}


export default function Footer(props) {
    const socials = []

    props.socials.forEach(e => {
        socials.push(<Social {...e} />)
    })

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img className={styles.image} src={process.env.backend + props.favicon.url} /></div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.socials}>{socials}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}
