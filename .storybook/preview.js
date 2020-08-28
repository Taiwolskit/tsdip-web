import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withCssResources } from '@storybook/addon-cssresources';
import centered from '@storybook/addon-centered/react';
import i18n from './i18n';

addDecorator(withA11y);
addDecorator(centered);
addDecorator(withCssResources);
addDecorator((storyFn) => (
  <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
