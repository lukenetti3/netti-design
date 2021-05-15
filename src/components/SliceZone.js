import React from "react"
import Services from "./slices/Services"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    services: Services,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return <main>{sliceZoneContent}</main>
}

export default SliceZone
