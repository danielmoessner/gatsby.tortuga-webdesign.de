import React from 'react'
import Img from 'gatsby-image'

export default function Hero(props) {
  return (
    <section className="w-full">
      <div className="shadow">
        <Img className="rounded-lg" fluid={props.image} alt={props.alt} />
      </div>
    </section>
  )
}