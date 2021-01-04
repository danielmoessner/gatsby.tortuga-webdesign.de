import CMS from 'netlify-cms-app'
import { de } from 'netlify-cms-locales'
import React from 'react'
import { AnimalTemplate } from '../templates/animal'
import AnimalCard from '../components/animal'
import Container from '../components/container'

// Localization
CMS.registerLocale('de', de)

// Previews
const AnimalPreview = ({ entry, widgetFor }) => {
  return (
    <Container>
      <div className="pb-32 pt-5">
        <AnimalTemplate
          {...entry.toJS().data}
          imageComponent={widgetFor('image')}
          body={widgetFor('body')}
        ></AnimalTemplate>
        <hr className="bg-gray-600 my-10" />
        <div className="max-w-xs">
          <AnimalCard
            {...entry.toJS().data}
            imageComponent={widgetFor('image')}
          />
        </div>
      </div>
    </Container>
  )
}

CMS.registerPreviewTemplate('animal', AnimalPreview)
