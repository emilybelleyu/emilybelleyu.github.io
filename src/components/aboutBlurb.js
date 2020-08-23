import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "yuki.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Who am I?</h3>
            <p>
                Based in SoCal, I am an avid programmer and cat enthusiast who enjoys Web and App Development. My skills include: (Frontend) HTML, CSS, SCSS, JS, React, Swift | (Backend) NodeJS, Express, Firebase.
            </p>
            <div className="btn-row">
              <Link to="/work">View My Work</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.me.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb