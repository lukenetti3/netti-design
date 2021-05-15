import React from "react"

const ServiceCard = ({ props }) => {
  console.log(props)
  return (
    <div className='w-1/3 bg-lightBlue mx-10 p-10 rounde-md flex justify-center'>
      <div className='text-center'>
        <h2 key={props.service.text}>{props.service.text}</h2>
        <p key={props.service_description.text}>
          {props.service_description.text}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
