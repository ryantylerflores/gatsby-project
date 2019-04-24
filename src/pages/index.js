import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const App = () => {
  return(
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Ryan from California!</h2>
      <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
    </Layout>
  )
}

export default App;


