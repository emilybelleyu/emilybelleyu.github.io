import React from "react"

// Socials
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"
import facebook from "../images/facebook.png"


// const featured = [
//   { name: "CreativeBoom", image: creativeBoom },
//   { name: "Afropunk", image: afropunk },
//   { name: "WGSN", image: wgsn },
//   { name: "Vogue", image: vogue },
// ]

const Footer = () => {
  return (
    <footer>
      {/* <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key="name">
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="footer">
        <div className="inner">
          <span>© 2020 Emily Yu</span>
          <div className="socials">
            <a href="https://www.linkedin.com/in/emily-yu-074a5a1b0" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} width="40" height="40" alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/emibelleyu" target="_blank" rel="noopener noreferrer">
              <img src={instagram} width="40" height="40" alt="Instagram" />
            </a>
            <a href="https://github.com/emilybelleyu" target="_blank" rel="noopener noreferrer">
              <img src={github} width="40" height="40" alt="Github" />
            </a>
            <a href="https://www.facebook.com/emily.yu.5667" target="_blank" rel="noopener noreferrer">
              <img src={facebook} width="40" height="40" alt="Facebook" />
            </a>
          </div>
          <span>emilyyu331@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer