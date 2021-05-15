import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Hero from "../components/Hero"
import SliceZone from "../components/SliceZone"

const IndexPage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data

  return (
    <>
      <Header />
      <Hero />
      <SliceZone sliceZone={document.body} />
    </>
  )
}

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          data {
            body {
              ... on PrismicHomepageBodyServices {
                items {
                  service {
                    text
                  }
                  service_description {
                    text
                  }
                }
                slice_type
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
