/* eslint-disable react/prop-types */

import CMS from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';
import React from 'react';
import Animal from '../components/Animal';
import AnimalCard from '../components/AnimalCard';
import Container from '../components/Container';
import '../styles/global.css';

// Localization
CMS.registerLocale('de', de);

// Previews
const AnimalPreview = ({ entry, widgetFor }) => {
  const animal = {
    title: entry.getIn(['data', 'title']),
    category: entry.getIn(['data', 'category']),
    excerpt: entry.getIn(['data', 'excerpt']),
  };
  return (
    <Container>
      <div className="pb-32 pt-5">
        <Animal preview animal={animal} image={widgetFor('image')} body={widgetFor('body')} />
        <hr className="bg-gray-600 my-10" />
        <div className="max-w-xs">
          <AnimalCard preview animal={animal} image={widgetFor('image')} />
        </div>
      </div>
    </Container>
  );
};
CMS.registerPreviewTemplate('animal', AnimalPreview);
