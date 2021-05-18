import React from "react"
import ServicesImage from "../../images/services_squiggly.svg"
import ServiceCard from "../ServiceCard"
import styled from "styled-components"

const Services = ({ slice }) => {
  const ServiceWrapper = styled.div`
    background-image: url(${ServicesImage});
    background-repeat: no-repeat;
    min-height: 500px;
    width: 81%;
    margin: 0 auto 150px auto;
    @media (max-width: 900px) {
      background-image: none;
    }
  `

  return (
    <section>
      <h1 className='text-center mt-16 text-blueText'>Our Services</h1>
      <ServiceWrapper className='flex items-center'>
        <div className='flex justify-content lg:flex-nowrap flex-wrap max-w-6xl mx-auto'>
          {slice.items.map((item) => (
            <>
              <ServiceCard props={item} />
            </>
          ))}
        </div>
      </ServiceWrapper>
    </section>
  )
}

export default Services
