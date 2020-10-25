import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <div id="about" className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>About Me</h3>
            <p>
                Based in SoCal, I am an avid programmer and cat lover who enjoys Web and App Development. My skills include: (Frontend) HTML, CSS, SCSS, JS, React, Swift, Java | (Backend) Node.js, Express, Firebase.
            </p>
            <div className="btn-row">
              <a href="mailto:emilyyu331@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
              {/* <Link to="/contact">Contact me</Link> */}
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.me.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb