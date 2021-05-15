import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Header {
      prismicHomepage {
        data {
          background_image {
            url
          }
          hero_title {
            text
          }
          secondary_button_text {
            text
          }
          right_column_image {
            url
          }
        }
      }
    }
  `)

  const document = data.prismicHomepage.data

  const heroStyle = {
    backgroundImage: `url(${document.background_image.url})`,
    backgroundPosition: "center",
    backgroundColor: "#1D465E",
    backgroundRepeat: "no-repeat",
  }

  return (
    <section style={heroStyle}>
      <div className='flex justify-center items-center py-40'>
        <div className='max-w-6xl flex flex-wrap justify-center items-center'>
          <div className='flex-auto px-5 lg:px-0 md:flex-1'>
            <h1 style={{ color: "white" }}>{document.hero_title.text}</h1>
            <button className='bg-primaryOrange px-6 py-3 rounded-lg text-white'>
              Start Now
            </button>
            <button className='border-white border-2 text-white px-6 py-2.5 rounded-md ml-10'>
              Learn More
            </button>
          </div>
          <div className='flex-auto px-5 lg:px-0 md:flex-1 flex pt-10 md:pt-0 md:justify-end'>
            <img
              src={document.right_column_image.url}
              alt=''
              className='w-2/3 m-0 rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
