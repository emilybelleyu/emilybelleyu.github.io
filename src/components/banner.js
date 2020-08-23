import React from "react"
import { Link } from "gatsby"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Hi! I'm Emily Yu.</div>
          <div className="main-body">
            Welcome to my personal website. In this portfolio, I showcase the projects I have made and provide background about myself. Hope you enjoy!
          </div>
          <div className="btn-row">
            <Link to="/work">View my work</Link>
          </div>
        </div>
        <div className="scroll">
            <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Full Stack Developer and Cat Lover</div>
    </div>
  )
}

export default Banner