import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/Work.module.css"



export default function Work(props) {
    return (
        <div className={styles.container}>
            <Container>
                <Row>
                    <Col className={styles.left}>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.description}>{props.description}</div>
                    </Col>
                    <Col className={styles.right}>
                        <div className={styles.img_container}><img className={styles.img} src={props.image.url} /></div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}