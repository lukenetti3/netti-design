import React from "react"
import ServicesImage from "../../images/services_squiggly.svg"
import ServiceCard from "../ServiceCard"

const Services = ({ slice }) => {
  console.log(slice)
  const servicesBackground = {
    backgroundImage: `url(${ServicesImage})`,
    backgroundRepeat: "no-repeat",
    width: "81%",
    margin: "150px auto",
  }

  return (
    <section>
      <h1 className='text-center mt-12'>Our Services</h1>
      <div style={servicesBackground}>
        <div className='flex justify-content'>
          {slice.items.map((item) => (
            <ServiceCard props={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
