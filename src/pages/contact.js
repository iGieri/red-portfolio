import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import Form from "../components/Form"
import Footer from "../components/Footer"


export default function Contact({ data }) {
  return (
    <div>
      <Nav {...data.data.nav} button="Contact me!" />
      <Form {...data.data.contactMe.contactMe[0]} />
      <Footer {...data.data.footer} />
    </div>
  )
}




export async function getStaticProps() {


  const data = await fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.datocms_token}`,
      },
      body: JSON.stringify({
        query: `
          query data {
            nav {
              icon {
                url
              }
              title
            }

            contactMe {
              contactMe {
                title
                description
                terms
              }
            }

            footer {
              icon {
                url
              }
              title
              socials {
                icon
                link
              }
              description
            }
          }

        `
      }),
    }
  )
  .then(res => res.json())
  .catch((error) => {
    console.log(error);
  });


  console.log(data)

  return {
    props: {
      data
    }
  }
}
