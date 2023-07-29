import React from 'react'
import "./services.scss"

const Services  = (props) => {

    const {icon , title , desc} = props;

  return (
    <div className="featured-box style-3 mb-5">
                <div className="featured-box-icon divdiv bg-white shadow-sm rounded"> {icon} </div>
                <h3>{title}</h3>
                <p className="mb-0">{desc}</p>
              </div>
  )
}

export default Services 