import React from "react"
import '../styles/styles.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

const Projects= () => {
  const data = useStaticQuery(graphql`
    query {
      mobileapp: file(relativePath: { eq: "mobileapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        ces: file(relativePath: { eq: "ces.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      castway: file(relativePath: { eq: "castway.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruityfriends: file(relativePath: { eq: "fruityfriends.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="projects" className="projects">
         <div className="blog">
             <article>
                 <Img fluid={data.mobileapp.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Arcadia High Mobile</h4>
                <p>A mobile news app used to help my high school's students and parents stay updated on important school 
                  announcements and deadlines--instead of scouring through the school's website and social medias. Uses Swift for 
                   its frontend and Firebase for its backend. Namely, it uses Firebase’s database and cloud messaging 
                   services to populate the news feed and subscribe users to push notifications.</p>
                <div className="blog-footer">
                    <a href="https://github.com/AHSAppDevTeam/AHS2020app" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://apps.apple.com/us/app/arcadia-high-mobile/id1305220468" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.ces.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>AHS Content Editing System</h4>
                <p>A web application created as the content editing system for the Arcadia High Mobile app. 
                  Uses Google’s Firebase API for backend and HTML, CSS, Javascript for frontend. Specifically, it
                  uses Firebase’s hosting, authentication, database, and cloud messaging services to deploy the website, 
                  authenticate content editors, populate the article feed, and send notifications to mobile app users.</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/AHSWebsite" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://arcadia-high-mobile.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.castway.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Castway</h4>
                <p>An open source video conferencing web application using React, Node.js, Express, Typescript, and Yarn. 
                  Implemented a multipeer connection using WebRTC protocol to introduce users/peers to each other via a signaling server. 
                  Coded under the guidance of Michael Lorton, an ex-Google staff engineer.</p>
                <div className="blog-footer">
                    <a href="https://github.com/pocket-coders/castway-client" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://castway.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.fruityfriends.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Fruity Friends</h4>
                <p>A mystery narrative game programmed in C# and made with the Unity game engine. A 
                  final project created while attending the California State Summer School for Mathematics 
                  & Science (COSMOS) '19 within the Game Design and Development cluster.</p>
                <div className="blog-footer">
                    {/* <a href="https://github.com/AHSAppDevTeam/AHS2020app" target="_blank" rel="noopener noreferrer">View Github</a> */}
                    <a href="https://play.unity.com/mg/other/untitled-6300" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.portfolio.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Emily Yu's Portfolio</h4>
                <p>Programmed with Gatsby.js, SCSS, and Yarn, it serves as a medium for my own creative 
                  design and a platform to feature my past projects. Coincidentally, it is the website you are on.</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/Portfolio" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://emilybelleyu.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

    </div>

  )
}

export default Projects
