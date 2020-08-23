import React from "react"
import '../styles/styles.scss'
import { Helmet } from "react-helmet"

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
// import VideoSection from "../components/videoSection"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Emily Yu</title>
      <link rel="canonical" href="https://emilybelleyu.github.io/Portfolio/" />
    </Helmet>
    <Header />
    <Banner />
    <AboutBlurb />
    {/* <VideoSection /> */}
    <Footer />
  </div>
)

export default IndexPage
