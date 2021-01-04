import React from 'react'
import Img from 'gatsby-image'

export default function Hero({ imageComponent, imageFluid, alt }) {
  return (
    <section className="w-full">
      <div className="shadow rounded-lg">
        {imageFluid &&
          <Img className="rounded-lg" fluid={imageFluid} alt={alt} />
        }
        {imageComponent &&
          <div className="rounded-lg overflow-hidden">
            {imageComponent}
          </div>
        }
      </div>
    </section>
  )
}
