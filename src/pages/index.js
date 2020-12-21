import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import FirstSection from "../components/FirstSection"
import AboutMe from "../components/AboutMe"
import WhatCanIDo from "../components/WhatCanIDo"
import CV from "../components/CV"
import MyWork from "../components/MyWork"
import Footer from "../components/Footer"


export default function Home({ data }) {
  return (
    <div>
      <Nav {...data.data.nav} button="Contact me!" />
      <FirstSection {...data.data.home.home[0]} />
      <AboutMe {...data.data.home.home[1]} />
      <WhatCanIDo {...data.data.home.home[2]} />
      <CV {...data.data.home.home[3]} />
      <MyWork {...data.data.home.home[4]} />
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
    
            home {
              home {
                ... on FirstSectionHomeRecord {
                  image {
                    url
                  }
                  title
                  description
                }
                ... on AboutMeHomeRecord {
                  image {
                    url
                  }
                  title
                  description
                }
                ... on WhatCanIDoHomeRecord {
                  title
                  skills {
                    image {
                      url
                    }
                    title
                    languages
                  }
                }
                ... on CvHomeRecord {
                  title
                  description
                  italianLink
                  englishLink
                }
                ... on MyWorkHomeRecord {
                  title
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

