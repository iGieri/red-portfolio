import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import FirstSection from "../components/FirstSection"
import AboutMe from "../components/AboutMe"
import WhatCanIDo from "../components/WhatCanIDo"
import CV from "../components/CV"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"


export default function Home({ data }) {
  console.log(data.data)
  const skills = []

  data.data.home.Home[2].skills.forEach(skill => {
    skills.push({title: skill.Title, img: "http://localhost:8000" + skill.Image.url, languages: skill.Languages.lang})
  })


  return (
    <div>
      <Nav img={"http://localhost:8000" + data.data.nav.Icon.url} title={data.data.nav.Title} button="Contact Me!" />
      <FirstSection img={"http://localhost:8000" + data.data.home.Home[0].ProfilePic.url} title={data.data.home.Home[0].Title} description={data.data.home.Home[0].Description} />
      <AboutMe img={"http://localhost:8000" + data.data.home.Home[1].image.url} title={data.data.home.Home[1].title} description={data.data.home.Home[1].description} />
      <WhatCanIDo title="What can I do?" skills={skills} />
      <CV {...data.data.home.Home[3]} />
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
      {
        nav {
          Title
          Icon {
            url
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

