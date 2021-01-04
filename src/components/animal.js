import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default function Animal({ title, slug, imageFluid, imageComponent, category, excerpt }) {
  return (
    <div>
      <div className="shadow rounded-lg">
        <Link to={'wildtiere/' + slug}>
          {imageFluid && 
            <Img
              className="rounded-lg"
              fluid={imageFluid}
            />
          }
          {imageComponent &&
            <div className="rounded-lg overflow-hidden">
              {imageComponent}
            </div>
          }
        </Link>
      </div>
      <div className="px-2 pt-4 flex flex-col justify-start items-start">
        <Link className="mb-2" to={'wildtiere/' + slug}>
          <div className="text-gray-600 text-xs uppercase font-medium mb-0 leading-tight tracking-tight">
            {category}
          </div>
          <h2 className="text-2xl text-gray-800 font-bold tracking-tight leading-tight">
            {title}
          </h2>
        </Link>
        <Link to={'wildtiere/' + slug}>
          <p className="text-sm leading-tight text-gray-900">
            {excerpt}
          </p>
        </Link>
      </div>
    </div>
  )
}
