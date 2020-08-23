import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      feather: file(relativePath: { eq: "ahsfeather.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feather: file(relativePath: { eq: "ahsfeather.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feather: file(relativePath: { eq: "ahsfeather.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Hi! I'm Emily.</div>
          {/* <div className="main-image">
            <Img fluid={data.feather.childImageSharp.fluid} />
          </div> */}
        </div>
        <div className="scroll">
            <span>Scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default Banner