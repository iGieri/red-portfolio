import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "./Button"
import Project from "./Project"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import { SiteClient } from "datocms-client"


async function sendData({name, surname, email, message}) {
    const client = new SiteClient("9d1ca7dd5ed1a646c9057bc5a29d3d")
    
    if (name != "", surname != "", email != "", message != "") {
        await client.items.create({
            itemType: "471540",
            name: name,
            surname: surname,
            email: email,
            message: message
        })

        alert("Message Sended :D")

        location.href = "/"
    }

    else {
        alert("Oops, seems like one or more fields are empty :(")
    }
}


export default function Form(props) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
            </div>
            <Container>
                <div><input className={styles.input} onChange={() => setName(document.getElementById("name").value)} type="text" id="name" placeholder="Your Name" /></div>
                <div><input className={styles.input} onChange={() => setSurname(document.getElementById("surname").value)} type="text" id="surname" placeholder="Your Surname" /></div>
                <div><input className={styles.input} onChange={() => setEmail(document.getElementById("email").value)} type="email" id="email" placeholder="Your Email" /></div>
                <div><textarea className={styles.input} onChange={() => setMessage(document.getElementById("message").value)} id="message" placeholder="Your Message"></textarea></div>
            </Container>
            <Button className={styles.button} onClick={() => sendData({name: name, surname: surname, email: email, message: message})}>Send</Button>
            <div className={styles.terms}>{props.terms}</div>
        </div>
    )
}