import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default function Animal(props) {
  return (
    <div>
      <div className="shadow rounded-lg">
      <Link to={'wildtiere/' + props.animal.slug }>
        <Img className="rounded-lg" fluid={props.animal.image.childImageSharp.fluid} />
      </Link>
      </div>
      <div className="px-2 pt-4 flex flex-col justify-start items-start">
      <Link className="mb-2" to={'wildtiere/' + props.animal.slug }>
      <div className="text-gray-600 text-xs uppercase font-medium mb-0 leading-tight tracking-tight">{props.animal.category}</div>
      <h2 className="text-2xl text-gray-800 font-bold tracking-tight leading-tight">{props.animal.title}</h2>
      </Link>
      <Link to={'wildtiere/' + props.animal.slug }>
      <p className="text-sm leading-tight text-gray-900">{props.animal.excerpt}</p>
      </Link>
      </div>
    </div>
  )
}