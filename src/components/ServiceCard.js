import React from "react"

const ServiceCard = ({ props }) => {
  console.log(props)

  const iconStyle = {
    margin: "-30px auto 30px auto",
    height: "60px",
    width: "60px",
  }

  return (
    <div className='w-1/3 bg-lightBlue mx-6 px-12 pb-20 rounded-lg flex justify-center'>
      <div className='text-center'>
        <img src={props.icon.url} style={iconStyle} />
        <h3 key={props.service.text} className='text-blueText pb-3'>
          {props.service.text}
        </h3>
        <p
          key={props.service_description.text}
          className='text-grayText font-light'
        >
          {props.service_description.text}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
