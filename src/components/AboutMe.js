import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/AboutMe.module.css"



export default function AboutMe(props) {
    return (
        <div className={styles.container}>
            <Container fluid>
                <Row>
                    <Col className={styles.left}>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.description}>{props.description}</div>
                    </Col>
                    <Col className={styles.right}>
                        <div className={styles.img_container}><img className={styles.img} src={props.img} /></div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}