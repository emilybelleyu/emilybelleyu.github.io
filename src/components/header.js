import { Link } from "gatsby"
import React from "react"

//Import Images
import daisy from "../images/daisy.png"

const Header = () => (
  <header> 
    <div className="container">
      <div className="inner-header">
        <img className="daisy" src={daisy} width="50" height="60" alt="Daisy"/>
        <div className="logo">
          <Link to="/">Em's Portfolio</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header