import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

// import Layout from "../components/layout"
import Layout from 'gatsby-theme-massively/src/components/layout'

class About extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <section>
          <header className="main content">
            <h1>About</h1>
          </header>
          <div className="content">We are people</div>
        </section>
      </Layout>
    )
  }
}


export default About
