import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      yuki: file(relativePath: { eq: "yuki.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      me: file(relativePath: { eq: "em.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
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
                Based in SoCal, I am an avid programmer and cat lover who enjoys Web and App Development. My skills include: (Frontend) HTML, CSS, SCSS, JS, React, Swift, Java | (Backend) Node.js, Express, Firebase.
            </p>
            <div className="btn-row">
              <Link to="/work">Contact me</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.me.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.yuki.childImageSharp.fluid} />
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