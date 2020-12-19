import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/WhatCanIDo.module.css"
import Skill from './Skill'



export default function WhatCanIDo(props) {
    const skills = []
    props.skills.forEach(skill => {
        skills.push(<Skill title={skill.title} languages={skill.languages} img={skill.img} />)
    });


    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.skills_container}>{skills}</div>
        </div>
    )
}