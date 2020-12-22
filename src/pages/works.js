import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import Work from "../components/Work"
import Projects from "../components/Projects"
import Footer from "../components/Footer"


export default function Works({ data }) {
  return (
    <div>
      <Nav {...data.data.nav} button="Contact me!" />
      <Work {...data.data.work.work[0]} />
      <Projects {...data.data.work.work[1]} />
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
        'Authorization': `Bearer 81c5da3ff178f4f897b924cab8ca84`,
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
          
            work {
              work {
                ... on WorkWorkRecord {
                    image {
                      url
                    }
                    title
                    description
                }
                  
                ... on ProjectsWorkRecord {
                  projects {
                    image {
                      url
                    }
                    title
                    date
                    link
                  }

                }
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

