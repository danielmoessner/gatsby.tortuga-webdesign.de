import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Pre from '../components/Pre';
import Heading from '../components/Heading';
import Button from '../components/Button';
import DynamicForm from '../components/DynamicForm';

function Page({ data }) {
  const page = data.pagesYaml;

  const headingText = 'Lorem ipsum dolor sit';

  const fields = [
    {
      label: 'Vorame',
      name: 'vorname',
      value: 'Max',
    },
    {
      label: 'Nachname',
      name: 'nachname',
    },
    {
      label: 'E-Mail',
      name: 'email',
      type: 'email',
      className: 'sm:col-span-2',
      placeholder: 'meine-tolle-email@meine-domain.de',
    },
    {
      label: 'Kategorie',
      name: 'kategorie',
      element: 'select',
      className: 'sm:col-span-2',
      children: [
        <option key="1" value="auftrag">
          Auftrag
        </option>,
        <option key="2" value="frage">
          Frage
        </option>,
      ],
    },
    {
      label: 'Nachricht',
      name: 'nachricht',
      element: 'textarea',
      required: false,
      className: 'sm:col-span-2',
      attrs: {
        rows: 3,
      },
    },
  ];

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <div className="mt-12 mb-24">
        <Heading element="h1">Styleguide</Heading>
      </div>
      <div className="space-y-16">
        <div className="">
          <Pre element="h2">Typographie</Pre>
          <div className="mt-8 space-y-8">
            <div className="flex items-baseline justify-between">
              <Heading element="div" size="h1">
                {headingText}
              </Heading>
              <div>H1</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Heading element="div" size="h2">
                {headingText}
              </Heading>
              <div>H2</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Heading element="div" size="h3">
                {headingText}
              </Heading>
              <div>H3</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Pre>{headingText}</Pre>
              <div>Pre</div>
            </div>
          </div>
        </div>
        <div className="">
          <Pre element="h2">Buttons</Pre>
          <div className="mt-8 space-y-8">
            <div className="flex items-baseline justify-between">
              <Button to="/styleguide/">Button</Button>
              <div>(Primary, Link-Tag)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button to="/styleguide/" importance="secondary">
                Button
              </Button>
              <div>(Secondary, Link-Tag)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button href="/styleguide/" element="a">
                Button
              </Button>
              <div>(Primary, A-Tag)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button
                type="submit"
                element="button"
                colors="bg-gray-200 hover:bg-gray-800 ring-offset-white transition focus:ring-gray-900 text-black hover:text-white"
              >
                Button
              </Button>
              <div>(Primary, Button-Tag, Colors)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button to="/styleguide/" ringOffsetClass="ring-offset-black">
                Button
              </Button>
              <div>(Primary, Link-Tag, RingOffsetBlack)</div>
            </div>
            <div className="flex items-baseline justify-between">
              <Button to="/styleguide/" size="px-6 py-3 text-base">
                Button Big
              </Button>
              <div>(Primary, Size)</div>
            </div>
          </div>
        </div>
        <div className="">
          <Pre element="h2">Formulare</Pre>
          <div className="mt-8 space-y-8">
            <DynamicForm fields={fields} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "styleguide" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
    }
  }
`;
