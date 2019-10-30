import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, people with money!</h1>
      <p>Welcome to my fancy-pants e-commerce site.</p>
      <p>Now go buy my shit.</p>
      <Products />
    </Layout>
  )
}

export default IndexPage
