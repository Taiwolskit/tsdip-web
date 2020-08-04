import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withCssResources } from '@storybook/addon-cssresources';
import centered from '@storybook/addon-centered/react';

addDecorator(withA11y);
addDecorator(centered);
addDecorator(withCssResources);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
