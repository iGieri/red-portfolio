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
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"


export default function Home({ data }) {
  console.log(data.data)
  const skills = []

  data.data.home.Home[2].skills.forEach(skill => {
    skills.push({title: skill.Title, img: process.env.backend + skill.Image.url, languages: skill.Languages.lang})
  })


  return (
    <div>
      <Nav img={process.env.backend + data.data.nav.Icon.url} title={data.data.nav.Title} button="Contact Me!" />
      <FirstSection img={process.env.backend + data.data.home.Home[0].ProfilePic.url} title={data.data.home.Home[0].Title} description={data.data.home.Home[0].Description} />
      <AboutMe img={process.env.backend + data.data.home.Home[1].image.url} title={data.data.home.Home[1].title} description={data.data.home.Home[1].description} />
      <WhatCanIDo title="What can I do?" skills={skills} />
      <CV {...data.data.home.Home[3]} />
      <MyWork {...data.data.home.Home[4]} />
      <Footer {...data.data.footer} />
    </div>
  )
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache()
  })

  const data = await client.query({
    query: gql`
      # Write your query or mutation here
      {
        nav {
          Title
          Icon {
            url
          }
        }

        footer {
          title
          description
          favicon {
            url
          }
          socials {
            link
            icon
            name
          }
        }
        
        home {
          Home {
            ... on ComponentHomeFirstSection {
              Title
              Description
              ProfilePic {
                url
              }
            }
            
            ... on ComponentHomeAboutMe {
              title
              description
              image {
                url
              }
            }
            
            ... on ComponentHomeWhatCanIDo {
              # Title
              skills {
                Image {
                  url
                } 
                Title
                Languages
              }
            }
                  
            ... on ComponentHomeCv {
              title
              description
              italian_link
              english_link
            }
            
            ... on ComponentHomeMyWork {
              title
              projects {
                title
                date
                image {
                  url
                }
              }
            }
          }
        }
        
      }
    `
  })
  

  console.log(data)

  return {
    props: {
      data
    }
  }
}

