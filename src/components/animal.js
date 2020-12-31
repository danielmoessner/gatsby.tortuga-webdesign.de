import React from 'react'
import Img from 'gatsby-image'

export default function Animal(props) {
  return (
    <div>
      name: {props.animal.title} <br/>
      image: {props.animal.image}
    </div>
  )
}