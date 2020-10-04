import { Link } from "gatsby"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
//Import Images
import daisy from "../images/daisy.png"

const Header = ({ toggleSidebar }) => (
  <header> 
    <div className="container">
      <div className="inner-header"> 
            <img className="daisy" src={daisy} width="45" height="40" alt="Daisy"/>
            <div className="logo">
              <Link to="/">Emily Yu</Link>
            </div>
            <button type="button" className="toggle-btn" onClick={toggleSidebar}>
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>

        <div className="navigation">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
