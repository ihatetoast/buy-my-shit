import React from "react"
import Product from "./product"
import { StaticQuery, graphql } from "gatsby"
const PRODUCT_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          id
          attributes {
            name
          }
          product {
            id
            name
          }
          price
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
const Products = () => (
  <StaticQuery
    query={PRODUCT_QUERY}
    render={({ allStripeSku, allStripeProduct }) => {
      return allStripeProduct.edges.map(product => {
        //filter method to get the skus for the specic product. pass as props to child Product comp
        const skus = allStripeSku.edges.filter(
          sku => sku.node.product.id === product.node.id
        )
        return (
          <Product skus={skus} product={product.node} key={product.node.id} />
        )
      })
    }}
  />
)

export default Products
