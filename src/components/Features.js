import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      prismicHomepage {
        data {
          fast_websites_icon {
            url
          }
          fast_websites_text {
            text
          }
          messaging_icon {
            url
          }
          messaging_text {
            text
          }
          seo_icon {
            url
          }
          seo_text {
            text
          }
        }
      }
    }
  `)

  const document = data.prismicHomepage.data

  console.log(document)

  return (
    <section className='bg-primaryBlue text-white'>
      <h1>Hello Features page</h1>
    </section>
  )
}

export default Features
