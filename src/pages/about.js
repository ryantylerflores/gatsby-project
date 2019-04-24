import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return(
    <Layout>
      <h1>About Me</h1>
      <p>This is about me.</p>
      <p>Want to a way to reach me? <Link to='/contact'>Contact me!</Link></p>
    </Layout>
  )
}

export default AboutPage