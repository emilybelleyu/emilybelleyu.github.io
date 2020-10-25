import React from "react"
import '../styles/styles.scss'
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import AboutBlurb from '../components/aboutBlurb'


const ProjectsPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Emily Yu</title>
      <link rel="canonical" href="https://emilybelleyu.github.io/Portfolio/projects" />
    </Helmet>
    <Layout>
    <AboutBlurb />
    </Layout>
  </div>
)

export default ProjectsPage
