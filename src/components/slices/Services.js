import React from "react"
import ServicesImage from "../../images/services_squiggly.svg"
import ServiceCard from "../ServiceCard"
import { FaDesktop } from "react-icons/fa"

const Services = ({ slice }) => {
  const servicesBackground = {
    backgroundImage: `url(${ServicesImage}`,
    backgroundRepeat: "no-repeat",
    minHeight: "500px",
    width: "81%",
    margin: "0 auto 150px auto",
  }

  return (
    <section>
      <h1 className='text-center mt-16 text-blueText'>Our Services</h1>
      <div
        style={servicesBackground}
        className='flex items-center'
        id='service-media-query'
      >
        <div className='flex justify-content lg:flex-nowrap flex-wrap max-w-6xl mx-auto'>
          {slice.items.map((item) => (
            <>
              <ServiceCard props={item} />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
