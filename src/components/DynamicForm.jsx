import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DynamicInput, { InputProps } from './DynamicInput';
import Button from './Button';
import Heading from './Heading';

function Component({
  fields,
  method,
  action,
  dataProtectionText,
  name,
  netlify,
  location,
  successText,
  successHeading,
}) {
  const [enabled, setEnabled] = useState(false);
  const formSent = location.hash === '#erfolgreich-abgeschickt';

  return (
    <div className="max-w-xl">
      <div className={`${formSent ? 'block' : 'hidden'} pt-24`} id="erfolgreich abgeschickt">
        <Heading element="div" size="h3">
          {successHeading}
        </Heading>
        <p className="mt-2 prose">{successText}</p>
      </div>

      <form
        name={name}
        method={method}
        data-netlify={netlify}
        action={action}
        className={`${
          formSent ? 'hidden' : 'block'
        } grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8`}
      >
        {netlify && <input type="hidden" name="form-name" value={netlify} />}

        {fields.map((field) => (
          // eslint-disable-next-line
          <DynamicInput key={field.name} {...field} />
        ))}

        <div className="sm:col-span-2">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => setEnabled(!enabled)}
                className={`${
                  enabled ? 'bg-gray-600' : 'bg-gray-200'
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                role="switch"
                aria-checked="false"
              >
                <input
                  className="transform sr-only translate-x-3 translate-y-2"
                  type="checkbox"
                  checked={enabled}
                  onChange={() => {}}
                  required
                  tabIndex="-1"
                />
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? 'translate-x-5' : 'translate-x-0'
                  } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>
            <div className="ml-3">
              <p className="text-base text-gray-500">{dataProtectionText}</p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-2">
          <Button element="button" type="submit">
            Absenden
          </Button>
        </div>
      </form>
    </div>
  );
}

Component.defaultProps = {
  name: 'standardformular',
  netlify: true,
  method: 'POST',
  action: '#erfolgreich-abgeschickt',
  dataProtectionText:
    'Ich stimme zu, dass meine Daten zum Bearbeiten dieser Anfrage vorrübergehen gespeichert werden.',
  successHeading: 'Vielen Dank',
  successText: 'Vielen Dank für Ihre Anfrage wir weden uns schnellstmöglich bei Ihnen melden.',
};

Component.propTypes = {
  action: PropTypes.string,
  method: PropTypes.oneOf(['POST', 'GET']),
  fields: PropTypes.arrayOf(PropTypes.shape(InputProps)).isRequired,
  dataProtectionText: PropTypes.string,
  name: PropTypes.string,
  netlify: PropTypes.bool,
  successHeading: PropTypes.string,
  successText: PropTypes.string,
  // eslint-disable-next-line
  location: PropTypes.object.isRequired,
};

export default Component;
